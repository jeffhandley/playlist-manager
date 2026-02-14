#!/usr/bin/env node

// Sync a playlist markdown file to Apple Music via the web player
// Usage:
//   node .github/skills/apple-music-sync/sync.mjs playlists/<name>.md [--delete-first]
//
// Prerequisites:
//   npm install playwright
//   npx playwright install chromium

import { setTimeout } from "timers/promises";
import { existsSync } from "fs";

import { BASE_URL, waitFor, waitAndClick, launchBrowser, waitForSignIn } from "./browser.mjs";
import { parsePlaylistMarkdown } from "./parser.mjs";
import { managedName, deletePlaylist, addTrackToPlaylist, addTrackToLibrary, readPlaylistTracks, reorderPlaylist } from "./playlist.mjs";

async function main() {
  const args = process.argv.slice(2);
  const filePath = args.find(a => !a.startsWith("--"));
  const deleteFirst = args.includes("--delete-first");
  const libraryOnly = args.includes("--library-only");
  const reorder = args.includes("--reorder");
  const headless = args.includes("--headless");

  if (!filePath || !existsSync(filePath)) {
    console.error(
      "Usage: node sync.mjs <playlist.md> [--delete-first] [--library-only] [--reorder] [--headless]\n" +
      "  --delete-first   Delete and recreate the playlist (for full rebuild)\n" +
      "  --library-only   Only add tracks to library, don't manage the playlist\n" +
      "  --reorder        Reorder an existing playlist to match the markdown order\n" +
      "  --headless       Run in headless browser mode\n" +
      (filePath ? `\nError: ${filePath} not found` : "")
    );
    process.exit(1);
  }

  const { name: rawPlaylistName, tracks } = parsePlaylistMarkdown(filePath);

  if (!rawPlaylistName) {
    console.error("Error: Could not find playlist name (# heading) in the markdown file.");
    process.exit(1);
  }

  if (tracks.length === 0) {
    console.error("No tracks found in the markdown file.");
    process.exit(1);
  }

  const playlistName = managedName(rawPlaylistName);

  console.log(`Playlist: ${playlistName}`);
  console.log(`Source:   ${filePath}`);
  console.log(`Tracks:   ${tracks.length}`);
  if (deleteFirst) console.log(`Mode:     Delete and recreate`);
  if (libraryOnly) console.log(`Mode:     Library only (no playlist management)`);
  if (reorder) console.log(`Mode:     Reorder existing playlist`);
  if (headless) console.log(`Mode:     Headless`);
  console.log("");

  const { context, page } = await launchBrowser({ headless });

  await waitForSignIn(page);

  if (reorder) {
    // Reorder mode: adjust track positions on the existing playlist
    // to match the markdown order without deleting/recreating
    await reorderPlaylist(page, playlistName, tracks);

    console.log("\nBrowser will close in 5 seconds...");
    await setTimeout(5000);
    await context.close();
    return;
  }

  if (libraryOnly) {
    let added = 0;
    let skipped = 0;
    const failed = [];

    for (let i = 0; i < tracks.length; i++) {
      const { song, artist } = tracks[i];
      const progress = `[${i + 1}/${tracks.length}]`;

      try {
        const result = await addTrackToLibrary(page, song, artist);
        if (result.status === "added") {
          console.log(`  ${progress} ✓ ${song} — ${artist}`);
          added++;
        } else {
          console.log(`  ${progress} – ${song} — ${artist} (${result.reason})`);
          skipped++;
        }
      } catch (err) {
        console.log(`  ${progress} ✗ ${song} — ${artist} (${err.message.split("\n")[0]})`);
        failed.push(`${song} — ${artist}`);
      }
    }

    console.log(`\nDone! ${added} added, ${skipped} skipped.`);
    if (failed.length > 0) {
      console.log(`${failed.length} failed:`);
      for (const t of failed) console.log(`  • ${t}`);
    }
  } else {
    if (deleteFirst) {
      await deletePlaylist(page, playlistName);
    }

    // Callback for when the playlist needs to be created during the first add
    let playlistCreated = false;
    const onCreatePlaylist = async (p) => {
      // The "New Playlist" dialog has a title input, optional description, and Create/Cancel buttons.
      const nameInput = p.locator('input.playlist-title').first();
      if (!await waitFor(nameInput, { timeout: 10000 })) {
        console.log("Warning: playlist title input not found in create dialog.");
        await p.keyboard.press("Escape");
        return false;
      }

      await nameInput.fill(playlistName);

      const createButton = p.locator('button:has-text("Create")').first();
      if (!await waitAndClick(createButton, { timeout: 5000 })) {
        console.log("Warning: Create button not found in create dialog.");
        await p.keyboard.press("Escape");
        return false;
      }

      // Wait for the dialog to dismiss and playlist to propagate
      await nameInput.waitFor({ state: "hidden", timeout: 10000 }).catch(() => {});

      // Navigate to the playlist page to force Apple Music to register it,
      // then wait for it to be fully accessible before adding more tracks.
      console.log(`  Waiting for playlist to register...`);
      let playlistFound = false;
      for (let warmup = 0; warmup < 6; warmup++) {
        await new Promise(r => globalThis.setTimeout(r, 5000));
        await p.goto(`${BASE_URL}/library/all-playlists/`, { waitUntil: "load" });
        const link = p.locator(`a:has-text("${playlistName}")`).first();
        if (await waitFor(link, { timeout: 5000 })) {
          await link.click();
          await waitFor(p.locator('.songs-list-row').first(), { timeout: 10000 }).catch(() => {});
          playlistFound = true;
          break;
        }
      }

      if (!playlistFound) {
        console.log(`  Warning: playlist page not accessible yet, continuing anyway...`);
      }

      playlistCreated = true;
      console.log(`Created playlist "${playlistName}".`);
      return true;
    };

    // Read initial playlist state for baseline verification
    const initialTracks = await readPlaylistTracks(page, playlistName);
    let added = initialTracks ? initialTracks.length : 0;

    if (added > 0) {
      console.log(`Playlist already has ${added} track(s). Resuming...\n`);
    }

    const failed = [];

    for (let i = 0; i < tracks.length; i++) {
      const { song, artist, url } = tracks[i];
      const progress = `[${i + 1}/${tracks.length}]`;

      try {
        const opts = playlistCreated
          ? { url }
          : { url, onCreatePlaylist, forceCreate: deleteFirst && !playlistCreated };

        // Retry loop for "add did not persist" — the add appears to succeed
        // but the track isn't on the playlist when we verify
        const addRetries = 3;
        let trackAdded = false;

        for (let addAttempt = 0; addAttempt < addRetries; addAttempt++) {
          if (addAttempt > 0) {
            console.log(`    (add retry ${addAttempt}/${addRetries - 1}: re-adding ${song})`);
          }

          const result = await addTrackToPlaylist(page, song, artist, playlistName, opts);
          if (result.status === "added" || result.status === "created") {
            added++;

            // Skip verification right after playlist creation — give Apple Music time to register it
            if (result.status === "created") {
              console.log(`  ${progress} ✓ ${song} — ${artist} (playlist created)`);
              trackAdded = true;
              break;
            }

            // Verify the playlist state after each successful add
            const actual = await readPlaylistTracks(page, playlistName);

            if (!actual) {
              console.error(`\n✗ Verification failed: playlist "${playlistName}" not found after adding track.`);
              process.exit(1);
            }

            if (actual.length === added) {
              console.log(`  ${progress} ✓ ${song} — ${artist} (${actual.length} tracks)`);
              trackAdded = true;
              break;
            } else if (actual.length === added - 1) {
              // Track add didn't persist — undo the count and retry
              added--;
              if (addAttempt === addRetries - 1) {
                console.log(`  ${progress} ✗ ${song} — ${artist} (add did not persist after ${addRetries} attempts, playlist has ${actual.length} tracks)`);
                failed.push(`${song} — ${artist}`);
              } else {
                // Wait before retrying — Apple Music needs time to stabilize
                await new Promise(r => globalThis.setTimeout(r, 5000));
              }
            } else {
              console.error(`\n✗ Verification failed: expected ${added} track(s) but playlist has ${actual.length}.`);
              console.error(`  Last added: ${song} — ${artist}`);
              if (actual.length > added) {
                console.error(`  Extra tracks detected — possible duplicates. Stopping.`);
              }
              process.exit(1);
            }
          } else {
            console.log(`  ${progress} ✗ ${song} — ${artist} (${result.reason})`);
            failed.push(`${song} — ${artist}`);
            break; // don't retry non-persist failures
          }
        }
      } catch (err) {
        console.log(`  ${progress} ✗ ${song} — ${artist} (${err.message.split("\n")[0]})`);
        failed.push(`${song} — ${artist}`);
      }
    }

    console.log(`\nDone! ${added} track(s) added to "${playlistName}".`);
    if (failed.length > 0) {
      console.log(`\n${failed.length} track(s) could not be added:`);
      for (const t of failed) console.log(`  • ${t}`);
      console.log("\nYou may need to add these manually in Apple Music.");
    }
  }

  console.log("\nBrowser will close in 5 seconds...");
  await setTimeout(5000);
  await context.close();
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
