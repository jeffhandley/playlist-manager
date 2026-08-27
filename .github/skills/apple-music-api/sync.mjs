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
  findManagedPlaylists,
  nextManagedName,
  createPlaylist,
  addTracksToPlaylist,
  resolveTrackId,
  extractSongId,
  readPlaylistTracksById,
} from "./playlist.mjs";
import { resolve } from "path";
import { fileURLToPath } from "url";

async function main() {
  const args = process.argv.slice(2);
  const filePath = args.find((a) => !a.startsWith("--"));
  const libraryOnly = args.includes("--library-only");

  if (!filePath || !existsSync(filePath)) {
    console.error(
      "Usage: node sync.mjs <playlist.md> [--library-only]\n" +
        "  --library-only         Only add tracks to library, don't manage the playlist\n" +
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

  // The Apple Music API cannot delete or rename library playlists, so we never
  // mutate an existing copy. Instead we look at the whole "managed family" for
  // this base name (e.g. "WEBN 🤖" plus any "WEBN 🤖 (N)" numbered copies) and
  // compare against the newest one.
  const family = await findManagedPlaylists(playlistName);
  const newest = family[0] || null;

  // Short-circuit when the newest copy already has the intended track list.
  // Newer copies carry a reliable fingerprint in their description. For legacy
  // copies without one, compare ordered catalog IDs and semantic metadata
  // because Apple may expose a different playParams.catalogId after insertion.
  if (
    newest &&
    (await isPlaylistUnchanged(newest, resolvedTracks, fingerprint))
  ) {
    console.log(
      `Playlist "${newest.name}" is already in sync (${newIds.length} tracks, id:${fingerprint}). Nothing to do.`
    );
    return;
  }

  // Contents changed (or no playlist yet). Create a NEW copy — the API cannot
  // update or delete the old one. The first copy gets the clean base name;
  // later copies are numbered "<base> (N)" so the newest is always identifiable.
  // Superseded copies remain until cleaned up out-of-band (Music app / browser
  // sync skill); the ISO stamp at the start of the description also disambiguates.
  const targetName = nextManagedName(
    playlistName,
    family.map((p) => p.name)
  );

  if (family.length > 0) {
    console.log(
      `  ${family.length} existing "${playlistName}" playlist(s) found — the API cannot update them.\n` +
        `  Creating a new copy "${targetName}". After syncing, delete the older copies in the\n` +
        `  Music app and rename "${targetName}" to drop its "(N)" suffix.`
    );
  }
  console.log(`Creating playlist "${targetName}" with ${resolvedTracks.length} tracks...`);

  const playlistId = await createPlaylist(targetName, {
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

  console.log(`\nDone! ${totalAdded} track(s) added to "${targetName}".`);
}

/**
 * Compute a stable, short fingerprint of the intended track-id sequence.
 * Order-sensitive: reordering the playlist changes the fingerprint.
 */
export function trackFingerprint(ids) {
  return createHash("sha1").update(ids.join(",")).digest("hex").slice(0, 12);
}

const FINGERPRINT_RE = /\[sync:([0-9a-f]{6,})\]/;

/**
 * Extract a previously-stamped fingerprint from a playlist description.
 * Returns the hex fingerprint or null if none is present.
 */
export function parseFingerprint(description) {
  const m = (description || "").match(FINGERPRINT_RE);
  return m ? m[1] : null;
}

/**
 * Build the playlist description. The ISO sync timestamp and track count are
 * placed FIRST so the newest copy is obvious in the Apple Music UI (the API
 * cannot delete or rename superseded duplicates). A machine-readable
 * [sync:<id>] fingerprint is appended to the stamp so the next run can detect a
 * no-op and skip recreating the playlist.
 */
export function buildDescription(baseDescription, ids) {
  const stamp = `Synced ${new Date().toISOString()} • ${ids.length} tracks [sync:${trackFingerprint(ids)}]`;
  return baseDescription ? `${stamp}\n\n${baseDescription}` : stamp;
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

function normalizeTrackValue(value) {
  return (value || "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function semanticTrackKey(track) {
  const title = (track.song || track.name || "")
    .replace(
      /\s*[\[(][^\])]*(?:remaster(?:ed)?|mono|stereo|anniversary|deluxe)[^\])]*[\])]/gi,
      ""
    )
    .replace(
      /\s*[-–—]\s*(?:\d{4}\s+)?(?:remaster(?:ed)?|mono|stereo|anniversary|deluxe).*$/gi,
      ""
    );
  return `${normalizeTrackValue(title)}\0${normalizeTrackValue(
    track.artist || track.artistName
  )}`;
}

export function playlistTracksMatch(localTracks, remoteTracks) {
  if (!remoteTracks || localTracks.length !== remoteTracks.length) return false;
  return localTracks.every((local, index) => {
    const remote = remoteTracks[index];
    const localId = local.songId || extractSongId(local.url);
    if (localId && remote.catalogId && localId === remote.catalogId) return true;
    return semanticTrackKey(local) === semanticTrackKey(remote);
  });
}

export async function isPlaylistUnchanged(
  playlist,
  resolvedTracks,
  fingerprint,
  loadTracks = readPlaylistTracksById
) {
  const existingFingerprint = parseFingerprint(playlist.description);
  if (existingFingerprint) return existingFingerprint === fingerprint;
  const remoteTracks = await loadTracks(playlist.id);
  return playlistTracksMatch(resolvedTracks, remoteTracks);
}

if (resolve(process.argv[1] || "") === fileURLToPath(import.meta.url)) {
  main().catch((err) => {
    console.error("Error:", err.message);
    process.exit(1);
  });
}
