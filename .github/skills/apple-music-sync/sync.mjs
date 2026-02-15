#!/usr/bin/env node

// Sync a playlist markdown file to Apple Music via the web player
// Usage:
//   node .github/skills/apple-music-sync/sync.mjs playlists/<name>.md [--headless]
//
// Prerequisites:
//   npm install playwright
//   npx playwright install chromium

import { setTimeout } from "timers/promises";
import { existsSync } from "fs";

import { launchBrowser, waitForSignIn, BASE_URL } from "./browser.mjs";
import { parsePlaylistMarkdown } from "./parser.mjs";
import {
  managedName, createPlaylist,
  addTrackToPlaylist, addTrackWithRetry, addTrackToLibrary,
  readPlaylistTracks, reorderPlaylist, renamePlaylist, updatePlaylistDescription,
  backupPlaylist,
} from "./playlist.mjs";

async function main() {
  const args = process.argv.slice(2);
  const filePath = args.find(a => !a.startsWith("--"));
  const libraryOnly = args.includes("--library-only");
  const headless = args.includes("--headless");
  const renameFrom = args.find(a => a.startsWith("--rename-from="))?.split("=").slice(1).join("=");

  if (!filePath || !existsSync(filePath)) {
    console.error(
      "Usage: node sync.mjs <playlist.md> [--library-only] [--rename-from=NAME] [--headless]\n" +
      "  --library-only       Only add tracks to library, don't manage the playlist\n" +
      "  --rename-from=NAME   Rename existing playlist from NAME to the markdown heading\n" +
      "  --headless           Run in headless browser mode\n" +
      (filePath ? `\nError: ${filePath} not found` : "")
    );
    process.exit(1);
  }

  const { name: rawPlaylistName, description, tracks } = parsePlaylistMarkdown(filePath);

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
  if (libraryOnly) console.log(`Mode:     Library only (no playlist management)`);
  if (renameFrom) console.log(`Mode:     Rename from "${managedName(renameFrom)}"`);
  if (headless) console.log(`Mode:     Headless`);
  console.log("");

  const { context, page } = await launchBrowser({ headless });

  await waitForSignIn(page);

  if (renameFrom) {
    await renamePlaylist(page, managedName(renameFrom), playlistName);
    console.log("\nBrowser will close in 5 seconds...");
    await setTimeout(5000);
    await context.close();
    return;
  }

  if (libraryOnly) {
    await syncLibraryOnly(page, tracks);
  } else {
    await syncPlaylist(page, tracks, playlistName, description);
  }

  console.log("\nBrowser will close in 5 seconds...");
  await setTimeout(5000);
  await context.close();
}

async function syncLibraryOnly(page, tracks) {
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
}

async function syncPlaylist(page, tracks, playlistName, description) {
  // Back up the playlist before making any changes (once per day).
  // This renames the 🤖 playlist to 🔙, so after backup the playlist won't exist.
  await backupPlaylist(page, playlistName);

  // Check if the playlist exists (it won't after a successful backup rename)
  const initialTracks = await readPlaylistTracks(page, playlistName);

  if (!initialTracks) {
    // Playlist doesn't exist — create it via the first track add and add all tracks
    console.log(`Playlist not found. Will create "${playlistName}" during first track add.\n`);

    let playlistCreated = false;
    const onCreatePlaylist = (p) => {
      playlistCreated = true;
      return createPlaylist(p, playlistName, { description });
    };

    const failed = [];
    let added = 0;
    let lastRetried = false;
    let verifyInterval = 5;   // tracks between verifications (grows: 5→10→20→30)
    let sinceLastVerify = 0;

    for (let i = 0; i < tracks.length; i++) {
      const track = tracks[i];
      const progress = `[${i + 1}/${tracks.length}]`;

      // Adaptive verification: always verify tracks 1-2, after a retry,
      // or after verifyInterval tracks. Otherwise skip verification for speed.
      const shouldVerify = added < 2 || lastRetried || sinceLastVerify >= verifyInterval;

      try {
        const opts = playlistCreated
          ? { url: track.url, retries: 5, ...(shouldVerify ? { expectedCount: added } : {}) }
          : { url: track.url, onCreatePlaylist, forceCreate: !playlistCreated, retries: 5 };

        const result = await addTrackWithRetry(page, track, playlistName, opts);
        lastRetried = result.retried || false;

        if (result.added) {
          added++;
          sinceLastVerify++;

          if (result.created) {
            console.log(`  ${progress} ✓ ${track.song} — ${track.artist} (playlist created)`);
            sinceLastVerify = 0;
          } else if (result.count != null) {
            // Verified — check if count matches and adjust interval
            sinceLastVerify = 0;
            if (result.count === added) {
              console.log(`  ${progress} ✓ ${track.song} — ${track.artist} (${result.count} tracks)`);
              // Successful verify — expand interval (5→10→20→30 max)
              if (!lastRetried) verifyInterval = Math.min(30, verifyInterval < 10 ? verifyInterval + 5 : verifyInterval + 10);
            } else {
              console.log(`  ${progress} ✓ ${track.song} — ${track.artist} (${result.count} tracks, expected ${added})`);
              added = result.count; // correct our count
              verifyInterval = 5;  // reset interval after mismatch
            }
          } else {
            // Unverified add
            console.log(`  ${progress} ✓ ${track.song} — ${track.artist}`);
          }
        } else {
          console.log(`  ${progress} ✗ ${track.song} — ${track.artist} (${result.reason})`);
          failed.push(`${track.song} — ${track.artist}`);
          lastRetried = true; // verify the next one
        }
      } catch (err) {
        console.log(`  ${progress} ✗ ${track.song} — ${track.artist} (${err.message.split("\n")[0]})`);
        failed.push(`${track.song} — ${track.artist}`);
        // Recover browser state after navigation errors
        try {
          await page.goto(`${BASE_URL}/us/browse`, { waitUntil: "load", timeout: 15000 });
          await setTimeout(2000);
        } catch { /* ignore recovery failure */ }
      }
    }

    console.log(`\nDone! ${added} track(s) added to "${playlistName}".`);
    if (failed.length > 0) {
      console.log(`\n${failed.length} track(s) could not be added:`);
      for (const t of failed) console.log(`  • ${t}`);
      console.log("\nYou may need to add these manually in Apple Music.");
    }
  } else {
    // Playlist exists — reorder to match the markdown (deletes out-of-sync
    // tracks and re-adds them in the correct order)
    await reorderPlaylist(page, playlistName, tracks);
  }

  // Update the playlist description if one is provided
  if (description) {
    try {
      await updatePlaylistDescription(page, playlistName, description);
    } catch (err) {
      console.log(`Warning: could not update playlist description: ${err.message.split("\n")[0]}`);
    }
  }
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
