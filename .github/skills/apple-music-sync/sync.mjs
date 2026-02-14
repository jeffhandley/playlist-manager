#!/usr/bin/env node

// Sync a playlist markdown file to Apple Music via the web player
// Usage:
//   node .github/skills/apple-music-sync/sync.mjs playlists/<name>.md [--delete-first] [--reorder] [--headless]
//
// Prerequisites:
//   npm install playwright
//   npx playwright install chromium

import { setTimeout } from "timers/promises";
import { existsSync } from "fs";

import { launchBrowser, waitForSignIn } from "./browser.mjs";
import { parsePlaylistMarkdown } from "./parser.mjs";
import {
  managedName, createPlaylist, deletePlaylist,
  addTrackToPlaylist, addTrackWithRetry, addTrackToLibrary,
  readPlaylistTracks, reorderPlaylist,
} from "./playlist.mjs";

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
    await reorderPlaylist(page, playlistName, tracks);
    console.log("\nBrowser will close in 5 seconds...");
    await setTimeout(5000);
    await context.close();
    return;
  }

  if (libraryOnly) {
    await syncLibraryOnly(page, tracks);
  } else {
    await syncPlaylist(page, tracks, playlistName, deleteFirst);
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

async function syncPlaylist(page, tracks, playlistName, deleteFirst) {
  if (deleteFirst) {
    await deletePlaylist(page, playlistName);
  }

  let playlistCreated = false;
  const onCreatePlaylist = (p) => {
    playlistCreated = true;
    return createPlaylist(p, playlistName);
  };

  // Read initial playlist state for baseline verification
  const initialTracks = await readPlaylistTracks(page, playlistName);
  let added = initialTracks ? initialTracks.length : 0;

  if (added > 0) {
    console.log(`Playlist already has ${added} track(s). Resuming...\n`);
  }

  const failed = [];

  for (let i = 0; i < tracks.length; i++) {
    const track = tracks[i];
    const progress = `[${i + 1}/${tracks.length}]`;

    try {
      const opts = playlistCreated
        ? { url: track.url }
        : { url: track.url, onCreatePlaylist, forceCreate: deleteFirst && !playlistCreated };

      const result = await addTrackWithRetry(page, track, playlistName, {
        ...opts,
        expectedCount: added,
      });

      if (result.added) {
        added++;
        if (result.created) {
          console.log(`  ${progress} ✓ ${track.song} — ${track.artist} (playlist created)`);
        } else if (result.unexpected) {
          console.log(`  ${progress} ✓ ${track.song} — ${track.artist} (${result.count} tracks, expected ${added})`);
        } else {
          console.log(`  ${progress} ✓ ${track.song} — ${track.artist} (${result.count ?? added} tracks)`);
        }
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
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
