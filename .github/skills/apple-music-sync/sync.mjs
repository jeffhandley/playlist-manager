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
  const fromAlbum = parseInt(args.find(a => a.startsWith("--from-album="))?.split("=")[1]) || null;
  const toAlbum = parseInt(args.find(a => a.startsWith("--to-album="))?.split("=")[1]) || null;

  if (!filePath || !existsSync(filePath)) {
    console.error(
      "Usage: node sync.mjs <playlist.md> [--library-only] [--rename-from=NAME] [--headless]\n" +
      "  --library-only         Only add tracks to library, don't manage the playlist\n" +
      "  --rename-from=NAME     Rename existing playlist from NAME to the markdown heading\n" +
      "  --from-album=N         Start syncing from album group N (1-based)\n" +
      "  --to-album=N           Stop syncing after album group N (1-based)\n" +
      "  --headless             Run in headless browser mode\n" +
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
  if (fromAlbum || toAlbum) console.log(`Albums:   ${fromAlbum || 1} to ${toAlbum || 'end'}`);
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
    await syncPlaylist(page, tracks, playlistName, description, { fromAlbum, toAlbum });
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

async function syncPlaylist(page, tracks, playlistName, description, { fromAlbum, toAlbum } = {}) {
  // Back up the playlist before making any changes (once per day).
  // Skip backup when doing a partial album-range sync.
  if (!fromAlbum && !toAlbum) {
    await backupPlaylist(page, playlistName);
  } else {
    console.log("Skipping backup for partial album-range sync.\n");
  }

  // Check if the playlist exists (it won't after a successful backup rename)
  const existingTracks = await readPlaylistTracks(page, playlistName);
  const existingCount = existingTracks ? existingTracks.length : 0;

  // Group tracks by album (preserving order within each album)
  const albums = [];
  let currentAlbum = null;
  for (const track of tracks) {
    const albumKey = `${track.album || ''} — ${track.artist}`;
    if (!currentAlbum || currentAlbum.key !== albumKey) {
      currentAlbum = { key: albumKey, album: track.album || 'Unknown', artist: track.artist, tracks: [] };
      albums.push(currentAlbum);
    }
    currentAlbum.tracks.push(track);
  }

  const startAlbum = (fromAlbum || 1) - 1; // convert to 0-based
  const endAlbum = toAlbum || albums.length; // 1-based inclusive → use as exclusive

  console.log(`${albums.length} album groups, ${tracks.length} tracks total.`);
  if (fromAlbum || toAlbum) {
    console.log(`Syncing albums ${startAlbum + 1} to ${endAlbum} of ${albums.length}.`);
  }
  if (existingTracks) {
    console.log(`Playlist has ${existingCount} existing tracks.\n`);
  } else {
    console.log(`Playlist not found. Will create "${playlistName}" during first track add.\n`);
  }

  let playlistCreated = existingTracks != null;
  const onCreatePlaylist = (p) => {
    playlistCreated = true;
    return createPlaylist(p, playlistName, { description });
  };

  let totalAdded = 0; // tracks added this session
  let totalFailed = 0;
  const failedTracks = [];
  let consecutiveErrors = 0;

  for (let ai = startAlbum; ai < endAlbum && ai < albums.length; ai++) {
    const albumGroup = albums[ai];
    const albumLabel = `${albumGroup.album} — ${albumGroup.artist}`;
    const albumProgress = `[Album ${ai + 1}/${albums.length}]`;

    console.log(`${albumProgress} ${albumLabel} (${albumGroup.tracks.length} tracks)`);

    let albumAdded = 0;

    for (let ti = 0; ti < albumGroup.tracks.length; ti++) {
      const track = albumGroup.tracks[ti];
      const trackProgress = `  [${ti + 1}/${albumGroup.tracks.length}]`;

      // If we've had many consecutive errors, do a hard recovery
      if (consecutiveErrors >= 3) {
        console.log(`  ⚠ ${consecutiveErrors} consecutive errors — waiting 10s for recovery...`);
        try {
          await page.goto(`${BASE_URL}/`, { waitUntil: "load", timeout: 30000 });
          await setTimeout(10000);
        } catch { /* ignore */ }
        consecutiveErrors = 0;
      }

      try {
        const opts = playlistCreated
          ? { url: track.url, retries: 4 }
          : { url: track.url, onCreatePlaylist, forceCreate: !playlistCreated, retries: 4 };

        const result = await addTrackWithRetry(page, track, playlistName, opts);

        if (result.added) {
          if (result.created) {
            console.log(`${trackProgress} ✓ ${track.song} (playlist created)`);
          } else {
            console.log(`${trackProgress} ✓ ${track.song}`);
          }
          albumAdded++;
          totalAdded++;
          consecutiveErrors = 0;
        } else {
          console.log(`${trackProgress} ✗ ${track.song} (${result.reason})`);
          failedTracks.push(`${track.song} — ${track.artist}`);
          totalFailed++;
          consecutiveErrors++;
        }
      } catch (err) {
        console.log(`${trackProgress} ✗ ${track.song} (${err.message.split("\n")[0]})`);
        failedTracks.push(`${track.song} — ${track.artist}`);
        totalFailed++;
        consecutiveErrors++;
        // Recover browser state after navigation errors
        try {
          await page.goto(`${BASE_URL}/us/browse`, { waitUntil: "load", timeout: 15000 });
          await setTimeout(2000);
        } catch { /* ignore recovery failure */ }
      }
    }

    // Verify track count after each album (skip if we just had errors)
    try {
      const actualTracks = await readPlaylistTracks(page, playlistName);
      const actualCount = actualTracks ? actualTracks.length : 0;
      const expectedCount = existingCount + totalAdded;

      if (actualCount !== expectedCount) {
        console.log(`  ⚠ Verification: expected ${expectedCount} tracks, found ${actualCount}`);
      } else {
        console.log(`  ✓ Verified: ${actualCount} tracks`);
      }
    } catch (err) {
      console.log(`  ⚠ Verification skipped: ${err.message.split("\n")[0]}`);
    }

    console.log("");
  }

  console.log(`\nDone! ${totalAdded} track(s) added to "${playlistName}" (${existingCount + totalAdded} total).`);
  if (failedTracks.length > 0) {
    console.log(`\n${failedTracks.length} track(s) could not be added:`);
    for (const t of failedTracks) console.log(`  • ${t}`);
    console.log("\nYou may need to add these manually in Apple Music.");
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
