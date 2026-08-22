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
import { createHash } from "crypto";
import { parsePlaylistMarkdown } from "../apple-music-sync/parser.mjs";
import { searchCatalog } from "./api.mjs";
import {
  managedName,
  findPlaylists,
  createPlaylist,
  addTracksToPlaylist,
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
  const newIds = resolvedTracks.map((t) => t.songId);
  const fingerprint = trackFingerprint(newIds);

  // Find the newest existing managed playlist. The Apple Music API cannot
  // delete or rename playlists, so same-named duplicates may already exist —
  // always compare against (and supersede) the most recent one.
  const matches = await findPlaylists(playlistName);
  const existing = matches[0] || null;
  if (matches.length > 1) {
    console.log(
      `  Note: ${matches.length} playlists named "${playlistName}" exist. ` +
        `Using the newest; older duplicates must be removed via the Music app or the browser sync skill.`
    );
  }

  // Short-circuit BEFORE taking a backup: if the newest playlist was built from
  // the same track list, do nothing. We compare a fingerprint we stamped into
  // the description rather than the library tracks, because Apple stores each
  // added song under its own playParams.catalogId, which routinely differs from
  // the catalog song id we added — making a direct id comparison unreliable and
  // causing a needless recreate (and a new duplicate) on every run.
  if (existing) {
    const existingFingerprint = parseFingerprint(existing.description);
    if (existingFingerprint && existingFingerprint === fingerprint) {
      console.log(
        `Playlist "${playlistName}" is already in sync (${newIds.length} tracks, id:${fingerprint}). Nothing to do.`
      );
      return;
    }
  }

  // Contents changed (or no playlist yet). Back up the current version, then
  // create a fresh playlist. NOTE: the API cannot delete the superseded copy,
  // so it remains and must be cleaned up out-of-band (Music app / browser sync
  // skill). The stamped description below makes the newest copy identifiable.
  if (existing) {
    await backupPlaylist(playlistName);
    console.log(`Recreating playlist "${playlistName}" with ${resolvedTracks.length} tracks...`);
  } else {
    console.log(`Creating playlist "${playlistName}" with ${resolvedTracks.length} tracks...`);
  }

  const playlistId = await createPlaylist(playlistName, {
    description: buildDescription(description, newIds),
  });

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
 * Compute a stable, short fingerprint of the intended track-id sequence.
 * Order-sensitive: reordering the playlist changes the fingerprint.
 */
function trackFingerprint(ids) {
  return createHash("sha1").update(ids.join(",")).digest("hex").slice(0, 12);
}

const FINGERPRINT_RE = /\[sync:([0-9a-f]{6,})\]/;

/**
 * Extract a previously-stamped fingerprint from a playlist description.
 * Returns the hex fingerprint or null if none is present.
 */
function parseFingerprint(description) {
  const m = (description || "").match(FINGERPRINT_RE);
  return m ? m[1] : null;
}

/**
 * Build the playlist description, appending a sync stamp and a machine-readable
 * fingerprint. The stamp makes the newest copy identifiable in the Apple Music
 * UI (the API cannot delete or rename superseded duplicates); the [sync:<id>]
 * marker lets the next run detect a no-op and skip recreating the playlist.
 */
function buildDescription(baseDescription, ids) {
  const stamp = `Synced ${new Date().toISOString()} • ${ids.length} tracks [sync:${trackFingerprint(ids)}]`;
  return baseDescription ? `${baseDescription}\n\n${stamp}` : stamp;
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
