#!/usr/bin/env node

// Sync a playlist markdown file to Apple Music via the REST API
// Usage:
//   node .github/skills/apple-music-api/sync.mjs playlists/<name>.md [--library-only] [--headless]
//
// Environment variables required:
//   APPLE_MUSIC_TEAM_ID       — Apple Developer Team ID
//   APPLE_MUSIC_KEY_ID        — MusicKit private key ID
//   APPLE_MUSIC_PRIVATE_KEY   — Contents of the .p8 private key
//   APPLE_MUSIC_USER_TOKEN    — Music User Token

import { existsSync } from "fs";
import { parsePlaylistMarkdown } from "../apple-music-sync/parser.mjs";
import { searchCatalog } from "./api.mjs";
import {
  managedName,
  findPlaylist,
  createPlaylist,
  addTracksToPlaylist,
  readPlaylistTracks,
  backupPlaylist,
  resolveTrackId,
  extractSongId,
} from "./playlist.mjs";

async function main() {
  const args = process.argv.slice(2);
  const filePath = args.find((a) => !a.startsWith("--"));
  const libraryOnly = args.includes("--library-only");
  const renameFrom = args
    .find((a) => a.startsWith("--rename-from="))
    ?.split("=")
    .slice(1)
    .join("=");

  if (!filePath || !existsSync(filePath)) {
    console.error(
      "Usage: node sync.mjs <playlist.md> [--library-only] [--rename-from=NAME]\n" +
        "  --library-only         Only add tracks to library, don't manage the playlist\n" +
        "  --rename-from=NAME     Rename existing playlist from NAME to the markdown heading\n" +
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
  console.log("");

  // Phase 1: Resolve all track IDs
  console.log("Resolving track IDs...\n");
  const resolved = [];
  const failed = [];

  for (let i = 0; i < tracks.length; i++) {
    const track = tracks[i];
    const progress = `[${i + 1}/${tracks.length}]`;

    try {
      const songId = await resolveTrackId(track);
      if (songId) {
        const fromUrl = extractSongId(track.url);
        const source = fromUrl ? "url" : "search";
        console.log(`  ${progress} ✓ ${track.song} — ${track.artist} (${source}: ${songId})`);
        resolved.push({ ...track, songId });
      } else {
        console.log(`  ${progress} ✗ ${track.song} — ${track.artist} (not found)`);
        failed.push(`${track.song} — ${track.artist}`);
      }
    } catch (err) {
      console.log(`  ${progress} ✗ ${track.song} — ${track.artist} (${err.message.split("\n")[0]})`);
      failed.push(`${track.song} — ${track.artist}`);
    }
  }

  console.log(`\nResolved ${resolved.length}/${tracks.length} tracks.`);
  if (failed.length > 0) {
    console.log(`${failed.length} track(s) could not be resolved.`);
  }
  console.log("");

  if (resolved.length === 0) {
    console.error("No tracks resolved. Nothing to sync.");
    process.exit(1);
  }

  if (libraryOnly) {
    await syncLibraryOnly(resolved);
  } else {
    await syncPlaylist(resolved, playlistName, description);
  }
}

async function syncLibraryOnly(resolvedTracks) {
  // Adding tracks to a playlist also adds them to the library.
  // For library-only mode, we use the catalog add-to-library approach.
  // The simplest approach: create a temporary playlist, add tracks, then
  // the tracks are in the library. But actually, tracks added to any
  // playlist go to the library automatically.
  //
  // For a pure library-only add, we can use the library songs endpoint.
  const { apiFetch } = await import("./api.mjs");

  let added = 0;
  const BATCH_SIZE = 25;

  for (let i = 0; i < resolvedTracks.length; i += BATCH_SIZE) {
    const batch = resolvedTracks.slice(i, i + BATCH_SIZE);
    const ids = batch.map((t) => t.songId);

    try {
      await apiFetch(`/v1/me/library?ids[songs]=${ids.join(",")}`, {
        method: "POST",
        body: { data: ids.map((id) => ({ id, type: "songs" })) },
      });
      added += batch.length;
      console.log(`  Added ${Math.min(i + BATCH_SIZE, resolvedTracks.length)}/${resolvedTracks.length} tracks to library`);
    } catch (err) {
      console.log(`  Error adding batch: ${err.message.split("\n")[0]}`);
    }
  }

  console.log(`\nDone! ${added} track(s) added to library.`);
}

async function syncPlaylist(resolvedTracks, playlistName, description) {
  // Back up existing playlist (if any)
  await backupPlaylist(playlistName);

  // Check if the playlist still exists after backup (it shouldn't if rename worked)
  const existing = await findPlaylist(playlistName);

  let playlistId;

  if (existing) {
    // Playlist still exists (backup rename may have failed, or no backup was needed)
    // Read current tracks and compare
    const currentTracks = await readPlaylistTracks(playlistName);
    const currentIds = (currentTracks || []).map((t) => t.catalogId).filter(Boolean);
    const newIds = resolvedTracks.map((t) => t.songId);

    // Check if tracks are already in sync
    const inSync =
      currentIds.length === newIds.length &&
      currentIds.every((id, i) => id === newIds[i]);

    if (inSync) {
      console.log(`Playlist "${playlistName}" is already in sync (${currentIds.length} tracks). Nothing to do.`);
      return;
    }

    // Since we can't reorder via API, recreate the playlist.
    // The backup was already made, so we create fresh.
    console.log(`Recreating playlist "${playlistName}" with ${resolvedTracks.length} tracks...`);
    // Delete-and-recreate: we can't delete via API reliably, so create a new one
    // and the old one was already backed up/renamed
    playlistId = await createPlaylist(playlistName, { description });
  } else {
    // Create new playlist
    console.log(`Creating playlist "${playlistName}" with ${resolvedTracks.length} tracks...`);
    playlistId = await createPlaylist(playlistName, { description });
  }

  // Add all tracks in order
  const albums = groupByAlbum(resolvedTracks);
  const showAlbumHeaders = albums.some((a) => a.tracks.length > 1);
  let totalAdded = 0;

  for (let i = 0; i < albums.length; i++) {
    const album = albums[i];
    const albumLabel = `${album.album} — ${album.artist}`;
    const ids = album.tracks.map((t) => t.songId);

    if (showAlbumHeaders) {
      console.log(`\n  [Album ${i + 1}/${albums.length}] ${albumLabel}`);
    }

    try {
      await addTracksToPlaylist(playlistId, ids);
      for (const track of album.tracks) {
        totalAdded++;
        console.log(`  [${totalAdded}/${resolvedTracks.length}] ✓ ${track.song} — ${track.artist}`);
      }
    } catch (err) {
      console.log(`  [${totalAdded + 1}/${resolvedTracks.length}] ✗ ${albumLabel} — ${err.message.split("\n")[0]}`);
    }
  }

  console.log(`\nDone! ${totalAdded} track(s) added to "${playlistName}".`);
}

/**
 * Group tracks by album (preserving order within each album).
 */
function groupByAlbum(tracks) {
  const albums = [];
  let current = null;

  for (const track of tracks) {
    const key = `${track.album || ""} — ${track.artist}`;
    if (!current || current.key !== key) {
      current = {
        key,
        album: track.album || "Unknown",
        artist: track.artist,
        tracks: [],
      };
      albums.push(current);
    }
    current.tracks.push(track);
  }

  return albums;
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
