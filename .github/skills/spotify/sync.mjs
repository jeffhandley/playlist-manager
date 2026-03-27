#!/usr/bin/env node

// Sync a playlist markdown file to Spotify via the Web API
// Usage:
//   node .github/skills/spotify/sync.mjs playlists/<name>.md
//
// Environment variables required:
//   SPOTIFY_CLIENT_ID       — Spotify app Client ID
//   SPOTIFY_CLIENT_SECRET   — Spotify app Client Secret
//   SPOTIFY_REFRESH_TOKEN   — OAuth refresh token for the target user

import { existsSync } from "fs";
import { parsePlaylistMarkdown } from "../apple-music-sync/parser.mjs";

const SPOTIFY_API = "https://api.spotify.com/v1";
const SPOTIFY_ACCOUNTS = "https://accounts.spotify.com";

// Managed playlist marker — consistent with Apple Music convention
const PLAYLIST_MARKER = " 🤖";

let accessToken = null;

// ---------------------------------------------------------------------------
// Authentication
// ---------------------------------------------------------------------------

async function refreshAccessToken() {
  const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } =
    process.env;

  if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET || !SPOTIFY_REFRESH_TOKEN) {
    throw new Error(
      "Missing required environment variables: " +
        "SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN"
    );
  }

  const credentials = Buffer.from(
    `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
  ).toString("base64");

  const response = await fetch(`${SPOTIFY_ACCOUNTS}/api/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: SPOTIFY_REFRESH_TOKEN,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Token request failed (${response.status}): ${text}`);
  }

  const data = await response.json();
  accessToken = data.access_token;
}

// ---------------------------------------------------------------------------
// API helpers
// ---------------------------------------------------------------------------

async function apiFetch(path, options = {}) {
  if (!accessToken) await refreshAccessToken();

  const url = path.startsWith("http") ? path : `${SPOTIFY_API}${path}`;
  const { method = "GET", body } = options;

  const response = await fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Spotify API error (${response.status}): ${text}`);
  }

  // 204 No Content
  if (response.status === 204) return null;

  return response.json();
}

// ---------------------------------------------------------------------------
// Spotify operations
// ---------------------------------------------------------------------------

async function getCurrentUserId() {
  const data = await apiFetch("/me");
  return data.id;
}

/**
 * Search for a track on Spotify.
 * Returns the Spotify URI (e.g. "spotify:track:XXXX") or null if not found.
 */
async function searchTrack(song, artist) {
  const query = encodeURIComponent(`track:${song} artist:${artist}`);
  const data = await apiFetch(`/search?q=${query}&type=track&limit=5`);
  const items = data?.tracks?.items || [];

  if (items.length === 0) return null;

  const songLower = song.toLowerCase();
  const artistLower = artist.toLowerCase();

  // Prefer an exact name + artist match
  const exactMatch = items.find((t) => {
    const name = (t.name || "").toLowerCase();
    const artists = (t.artists || []).map((a) => a.name.toLowerCase());
    return name === songLower && artists.some((a) => a.includes(artistLower));
  });
  if (exactMatch) return exactMatch.uri;

  // Fall back to any result whose artist matches
  const artistMatch = items.find((t) => {
    const artists = (t.artists || []).map((a) => a.name.toLowerCase());
    return artists.some((a) => a.includes(artistLower));
  });
  if (artistMatch) return artistMatch.uri;

  // Last resort: first result
  return items[0]?.uri || null;
}

/**
 * Find a user playlist by exact name. Handles pagination.
 * Returns the playlist object or null.
 */
async function findPlaylist(name) {
  let url = "/me/playlists?limit=50";

  while (url) {
    const data = await apiFetch(url);
    const found = (data?.items || []).find((p) => p.name === name);
    if (found) return found;
    url = data?.next || null;
  }

  return null;
}

/**
 * Create a new playlist for the current user.
 * Returns the playlist ID.
 */
async function createPlaylist(userId, name, description) {
  const body = { name, public: false };
  if (description) body.description = description;

  const data = await apiFetch(`/users/${userId}/playlists`, {
    method: "POST",
    body,
  });

  console.log(`  Created playlist: "${name}" (${data.id})`);
  return data.id;
}

/**
 * Update playlist metadata (description).
 */
async function updatePlaylist(playlistId, { description } = {}) {
  if (!description) return;
  await apiFetch(`/playlists/${playlistId}`, {
    method: "PUT",
    body: { description },
  });
}

/**
 * Replace all tracks in a playlist with the given URIs.
 * Spotify allows at most 100 URIs per request; the first batch uses PUT
 * (replace), subsequent batches use POST (append).
 */
async function replacePlaylistTracks(playlistId, uris) {
  const BATCH_SIZE = 100;

  // PUT replaces the entire track list with the first batch (up to 100)
  await apiFetch(`/playlists/${playlistId}/tracks`, {
    method: "PUT",
    body: { uris: uris.slice(0, BATCH_SIZE) },
  });

  // Append any remaining tracks in batches
  for (let i = BATCH_SIZE; i < uris.length; i += BATCH_SIZE) {
    await apiFetch(`/playlists/${playlistId}/tracks`, {
      method: "POST",
      body: { uris: uris.slice(i, i + BATCH_SIZE) },
    });
  }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  const args = process.argv.slice(2);
  const filePath = args.find((a) => !a.startsWith("--"));

  if (!filePath || !existsSync(filePath)) {
    console.error(
      "Usage: node sync.mjs <playlist.md>\n" +
        (filePath ? `\nError: ${filePath} not found` : "")
    );
    process.exit(1);
  }

  const { name: rawPlaylistName, description, tracks } =
    parsePlaylistMarkdown(filePath);

  if (!rawPlaylistName) {
    console.error(
      "Error: Could not find playlist name (# heading) in the markdown file."
    );
    process.exit(1);
  }

  if (tracks.length === 0) {
    console.error("No tracks found in the markdown file.");
    process.exit(1);
  }

  const playlistName = rawPlaylistName.endsWith(PLAYLIST_MARKER)
    ? rawPlaylistName
    : rawPlaylistName + PLAYLIST_MARKER;

  console.log(`Playlist: ${playlistName}`);
  console.log(`Source:   ${filePath}`);
  console.log(`Tracks:   ${tracks.length}`);
  console.log("");

  // Authenticate and identify the user
  await refreshAccessToken();
  const userId = await getCurrentUserId();
  console.log(`User:     ${userId}\n`);

  // Phase 1: Search for each track on Spotify
  console.log("Searching for tracks...\n");
  const resolved = [];
  const failed = [];

  for (let i = 0; i < tracks.length; i++) {
    const track = tracks[i];
    const progress = `[${i + 1}/${tracks.length}]`;

    try {
      const uri = await searchTrack(track.song, track.artist);
      if (uri) {
        console.log(`  ${progress} ✓ ${track.song} — ${track.artist}`);
        resolved.push({ ...track, uri });
      } else {
        console.log(
          `  ${progress} ✗ ${track.song} — ${track.artist} (not found)`
        );
        failed.push(`${track.song} — ${track.artist}`);
      }
    } catch (err) {
      console.log(
        `  ${progress} ✗ ${track.song} — ${track.artist} (${err.message?.split("\n")[0] ?? "unknown error"})`
      );
      failed.push(`${track.song} — ${track.artist}`);
    }
  }

  console.log(`\nResolved ${resolved.length}/${tracks.length} tracks.`);
  if (failed.length > 0) {
    console.log(`${failed.length} track(s) could not be found on Spotify.`);
  }
  console.log("");

  if (resolved.length === 0) {
    console.error("No tracks resolved. Nothing to sync.");
    process.exit(1);
  }

  // Phase 2: Create or find the playlist
  const existing = await findPlaylist(playlistName);
  let playlistId;

  if (existing) {
    console.log(
      `Updating existing playlist "${playlistName}" (${existing.id})...`
    );
    playlistId = existing.id;
    await updatePlaylist(playlistId, { description });
  } else {
    console.log(`Creating new playlist "${playlistName}"...`);
    playlistId = await createPlaylist(userId, playlistName, description);
  }

  // Phase 3: Replace tracks
  const uris = resolved.map((t) => t.uri);
  console.log(`\nSyncing ${uris.length} tracks to playlist...`);
  await replacePlaylistTracks(playlistId, uris);

  console.log(`\nDone! ${resolved.length} track(s) synced to "${playlistName}".`);

  if (failed.length > 0) {
    console.log(`\n${failed.length} track(s) not found on Spotify:`);
    for (const f of failed) {
      console.log(`  ✗ ${f}`);
    }
  }
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
