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

import { launchBrowser, waitForSignIn } from "./browser.mjs";
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
  // Back up the playlist before making any changes (once per day)
  await backupPlaylist(page, playlistName);

  // Check if the playlist exists
  const initialTracks = await readPlaylistTracks(page, playlistName);

  if (!initialTracks) {
    // Playlist doesn't exist — create it and add all tracks
    console.log(`Playlist not found. Creating "${playlistName}"...\n`);
    await createPlaylist(page, playlistName, { description });

    const failed = [];
    let added = 0;

    for (let i = 0; i < tracks.length; i++) {
      const track = tracks[i];
      const progress = `[${i + 1}/${tracks.length}]`;

      try {
        const result = await addTrackWithRetry(page, track, playlistName, {
          url: track.url,
        });

        if (result.added) {
          added++;
          console.log(`  ${progress} ✓ ${track.song} — ${track.artist}`);
        } else {
          console.log(`  ${progress} ✗ ${track.song} — ${track.artist} (${result.reason})`);
          failed.push(`${track.song} — ${track.artist}`);
        }
      } catch (err) {
        console.log(`  ${progress} ✗ ${track.song} — ${track.artist} (${err.message.split("\n")[0]})`);
        failed.push(`${track.song} — ${track.artist}`);
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
    await updatePlaylistDescription(page, playlistName, description);
  }
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
