// Apple Music playlist operations via the REST API
// Handles playlist CRUD, track management, and backup logic.

import { apiFetch, searchCatalog } from "./api.mjs";

// Managed playlist marker — same convention as the browser-based skill
const PLAYLIST_MARKER = " 🤖";
const BACKUP_MARKER = " 🔙";

export function managedName(name) {
  return name.endsWith(PLAYLIST_MARKER) ? name : name + PLAYLIST_MARKER;
}

export function isManaged(name) {
  return name.endsWith(PLAYLIST_MARKER);
}

export function isBackup(name) {
  return name.includes(BACKUP_MARKER);
}

function assertManaged(name) {
  if (!isManaged(name)) {
    throw new Error(`Refusing to modify "${name}" — only playlists ending with "${PLAYLIST_MARKER}" are managed.`);
  }
  if (isBackup(name)) {
    throw new Error(`Refusing to modify backup "${name}" — backups are immutable.`);
  }
}

/**
 * List all library playlists. Handles pagination.
 * Returns array of { id, name, description }.
 */
export async function listPlaylists() {
  const playlists = [];
  let url = "/v1/me/library/playlists?limit=100";

  while (url) {
    const { data } = await apiFetch(url);
    if (data?.data) {
      for (const p of data.data) {
        playlists.push({
          id: p.id,
          name: p.attributes?.name || "",
          description: p.attributes?.description?.standard || "",
        });
      }
    }
    url = data?.next || null;
  }

  return playlists;
}

/**
 * Find a library playlist by exact name.
 * Returns { id, name, description } or null.
 */
export async function findPlaylist(name) {
  const all = await listPlaylists();
  return all.find((p) => p.name === name) || null;
}

/**
 * Get all tracks in a library playlist. Handles pagination.
 * Returns array of { id, name, artistName, albumName } or null if playlist not found.
 */
export async function readPlaylistTracks(playlistName) {
  const playlist = await findPlaylist(playlistName);
  if (!playlist) return null;

  const tracks = [];
  let url = `/v1/me/library/playlists/${playlist.id}/tracks?limit=100`;

  while (url) {
    const { data } = await apiFetch(url);
    if (data?.data) {
      for (const t of data.data) {
        tracks.push({
          id: t.id,
          catalogId: t.attributes?.playParams?.catalogId || null,
          name: t.attributes?.name || "",
          artistName: t.attributes?.artistName || "",
          albumName: t.attributes?.albumName || "",
        });
      }
    }
    url = data?.next || null;
  }

  return tracks;
}

/**
 * Create a new library playlist.
 * Returns the playlist ID.
 */
export async function createPlaylist(name, { description } = {}) {
  assertManaged(name);

  const body = {
    attributes: {
      name,
    },
  };

  if (description) {
    body.attributes.description = description;
  }

  const { data } = await apiFetch("/v1/me/library/playlists", {
    method: "POST",
    body,
  });

  const id = data?.data?.[0]?.id;
  if (!id) throw new Error("Failed to create playlist — no ID in response");

  console.log(`  Created playlist: "${name}" (${id})`);
  return id;
}

/**
 * Add tracks to a library playlist by catalog song IDs.
 * Accepts an array of catalog song IDs (strings).
 * Adds in batches to avoid request size limits.
 */
export async function addTracksToPlaylist(playlistId, catalogSongIds) {
  const BATCH_SIZE = 100;

  for (let i = 0; i < catalogSongIds.length; i += BATCH_SIZE) {
    const batch = catalogSongIds.slice(i, i + BATCH_SIZE);
    const body = {
      data: batch.map((id) => ({
        id,
        type: "songs",
      })),
    };

    await apiFetch(`/v1/me/library/playlists/${playlistId}/tracks`, {
      method: "POST",
      body,
    });
  }
}

/**
 * Rename a library playlist (used for backup).
 * Note: Apple Music API may not support PATCH for rename.
 * If PATCH fails, we fall back to create-new + re-add approach.
 */
async function tryRenamePlaylist(playlistId, newName) {
  try {
    await apiFetch(`/v1/me/library/playlists/${playlistId}`, {
      method: "PATCH",
      body: { attributes: { name: newName } },
    });
    return true;
  } catch {
    return false;
  }
}

/**
 * Back up a managed playlist before sync.
 * Renames it to "<name> 🔙 (yyyy-MM-dd)".
 * If today's backup already exists, skips.
 */
export async function backupPlaylist(playlistName) {
  assertManaged(playlistName);

  const today = new Date().toISOString().slice(0, 10);
  const backupName = playlistName.replace(PLAYLIST_MARKER, "") + ` ${BACKUP_MARKER} (${today})`;

  // Check if today's backup already exists
  const existing = await findPlaylist(backupName);
  if (existing) {
    console.log(`  Backup already exists: "${backupName}" — skipping`);
    return;
  }

  // Find the current playlist
  const playlist = await findPlaylist(playlistName);
  if (!playlist) {
    console.log(`  No existing playlist "${playlistName}" to back up`);
    return;
  }

  // Try PATCH rename first
  const renamed = await tryRenamePlaylist(playlist.id, backupName);
  if (renamed) {
    console.log(`  Backed up: "${playlistName}" → "${backupName}"`);
    return;
  }

  // Fallback: create a new backup playlist and copy tracks
  console.log(`  PATCH rename not supported — copying tracks to backup`);
  const tracks = await readPlaylistTracks(playlistName);
  if (!tracks || tracks.length === 0) {
    console.log(`  No tracks to back up`);
    return;
  }

  const { data } = await apiFetch("/v1/me/library/playlists", {
    method: "POST",
    body: {
      attributes: {
        name: backupName,
        description: playlist.description || "",
      },
    },
  });

  const backupId = data?.data?.[0]?.id;
  if (!backupId) {
    console.log(`  Warning: could not create backup playlist`);
    return;
  }

  const catalogIds = tracks.map((t) => t.catalogId).filter(Boolean);
  if (catalogIds.length > 0) {
    await addTracksToPlaylist(backupId, catalogIds);
  }
  console.log(`  Backed up ${catalogIds.length} tracks to "${backupName}"`);
}

/**
 * Extract a catalog song ID from an Apple Music URL.
 * Handles formats like:
 *   https://music.apple.com/us/song/slug/123456789
 *   https://music.apple.com/us/album/slug/123456789?i=987654321
 */
export function extractSongId(url) {
  if (!url) return null;

  // Direct song URL: /us/song/slug/ID
  const songMatch = url.match(/\/song\/[^/]+\/(\d+)/);
  if (songMatch) return songMatch[1];

  // Album URL with track param: ?i=ID
  const albumTrackMatch = url.match(/[?&]i=(\d+)/);
  if (albumTrackMatch) return albumTrackMatch[1];

  return null;
}

/**
 * Resolve a track to a catalog song ID.
 * First tries to extract from the URL, then falls back to catalog search.
 */
export async function resolveTrackId(track) {
  // Try URL extraction first
  const fromUrl = extractSongId(track.url);
  if (fromUrl) return fromUrl;

  // Fall back to catalog search
  const query = `${track.song} ${track.artist}`;
  const results = await searchCatalog(query, { limit: 5 });

  if (results.length === 0) return null;

  // Try to find an exact match by song name
  const songLower = track.song.toLowerCase();
  const artistLower = track.artist.toLowerCase();

  const exactMatch = results.find((r) => {
    const name = (r.attributes?.name || "").toLowerCase();
    const artist = (r.attributes?.artistName || "").toLowerCase();
    return name === songLower && artist.includes(artistLower);
  });

  if (exactMatch) return exactMatch.id;

  // Accept first result if artist matches
  const artistMatch = results.find((r) => {
    const artist = (r.attributes?.artistName || "").toLowerCase();
    return artist.includes(artistLower);
  });

  if (artistMatch) return artistMatch.id;

  // Last resort: first result
  return results[0]?.id || null;
}
