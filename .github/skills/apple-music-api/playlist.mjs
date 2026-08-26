// Apple Music playlist operations via the REST API
// Handles playlist creation, track management, and duplicate-aware lookup.
//
// NOTE: The Apple Music API only supports creating library playlists and adding
// tracks. It cannot delete or rename a library playlist, or remove/replace
// tracks (all return HTTP 401). Callers therefore create a new numbered copy on
// change and treat older copies as stale — cleanup is done out-of-band (the
// browser sync skill or manually in the Music app).

import { apiFetch, searchCatalog } from "./api.mjs";

// Managed playlist marker — same convention as the browser-based skill
const PLAYLIST_MARKER = " 🤖";
const BACKUP_MARKER = " 🔙";

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function managedName(name) {
  return name.endsWith(PLAYLIST_MARKER) ? name : name + PLAYLIST_MARKER;
}

export function isManaged(name) {
  // A managed playlist is the base name (e.g. "WEBN 🤖") or a numbered variant
  // ("WEBN 🤖 (2)"), so match the marker anywhere rather than only at the end.
  return name.includes(PLAYLIST_MARKER);
}

export function isBackup(name) {
  return name.includes(BACKUP_MARKER);
}

function assertManaged(name) {
  if (!isManaged(name)) {
    throw new Error(`Refusing to modify "${name}" — only playlists containing "${PLAYLIST_MARKER}" are managed.`);
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
          dateAdded: p.attributes?.dateAdded || "",
        });
      }
    }
    url = data?.next || null;
  }

  return playlists;
}

/**
 * Find all library playlists with an exact name, newest first.
 *
 * The Apple Music API cannot delete or rename library playlists, so duplicate
 * managed playlists sharing the same name can accumulate over time. Callers
 * should generally operate on the newest match and treat the rest as stale
 * copies to be cleaned up out-of-band (Music app or browser sync skill).
 *
 * Returns an array of { id, name, description, dateAdded } sorted by dateAdded
 * descending (newest first); empty if none match.
 */
export async function findPlaylists(name) {
  const all = await listPlaylists();
  return all
    .filter((p) => p.name === name)
    .sort((a, b) => (b.dateAdded || "").localeCompare(a.dateAdded || ""));
}

/**
 * Find a library playlist by exact name.
 * Returns the NEWEST match (by dateAdded) or null.
 */
export async function findPlaylist(name) {
  const matches = await findPlaylists(name);
  return matches[0] || null;
}

/**
 * Find the "managed family" for a base name: the base itself (e.g. "WEBN 🤖")
 * and any numbered variants ("WEBN 🤖 (2)"). The Apple Music API cannot delete
 * or rename playlists, so when a synced track list changes we create a new
 * numbered copy rather than mutating the old one; this returns all copies,
 * newest first (by dateAdded).
 */
export async function findManagedPlaylists(baseName) {
  const re = new RegExp(`^${escapeRegExp(baseName)}( \\(\\d+\\))?$`);
  const all = await listPlaylists();
  return all
    .filter((p) => re.test(p.name))
    .sort((a, b) => (b.dateAdded || "").localeCompare(a.dateAdded || ""));
}

/**
 * Given a base name and the existing family member names, return the name to
 * use for a new copy: the clean base name if none exist yet, otherwise
 * "<base> (<maxSuffix + 1>)". The base name counts as suffix 0.
 */
export function nextManagedName(baseName, existingNames) {
  const suffixRe = new RegExp(`^${escapeRegExp(baseName)} \\((\\d+)\\)$`);
  let maxSuffix = -1;
  for (const name of existingNames) {
    if (name === baseName) {
      maxSuffix = Math.max(maxSuffix, 0);
    } else {
      const m = name.match(suffixRe);
      if (m) maxSuffix = Math.max(maxSuffix, parseInt(m[1], 10));
    }
  }
  return maxSuffix < 0 ? baseName : `${baseName} (${maxSuffix + 1})`;
}

/**
 * Get all tracks in a library playlist. Handles pagination.
 * Returns array of { id, name, artistName, albumName } or null if playlist not found.
 */
export async function readPlaylistTracks(playlistName) {
  const playlist = await findPlaylist(playlistName);
  if (!playlist) return null;
  return readPlaylistTracksById(playlist.id);
}

/**
 * Get all tracks in a library playlist by playlist ID. Handles pagination.
 */
export async function readPlaylistTracksById(playlistId) {
  const tracks = [];
  let url = `/v1/me/library/playlists/${playlistId}/tracks?limit=100`;

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
          releaseDate: t.attributes?.releaseDate || "",
          url: t.attributes?.url || "",
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
 * Extract a catalog song ID from an Apple Music URL.
 * Handles formats like:
 *   https://music.apple.com/us/song/slug/123456789
 *   https://music.apple.com/us/album/slug/123456789?i=987654321
 *
 * Note: Album URLs without a ?i= track parameter cannot be resolved to a
 * song ID and will return null.  Prefer /song/ URLs — see normalizeToSongUrl().
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
 * Normalize an Apple Music URL to the canonical /song/ format.
 * Converts album URLs with ?i= track parameters to direct song URLs.
 * Returns the original URL unchanged if it is already a /song/ URL or
 * cannot be converted (e.g. album URL without ?i= parameter).
 */
export function normalizeToSongUrl(url) {
  if (!url) return url;

  // Already a /song/ URL — strip any query params and return
  if (url.includes("/song/")) {
    return url.split("?")[0];
  }

  // Album URL with ?i= track param: convert to /song/{slug}/{trackId}
  const albumMatch = url.match(/\/album\/([^/]+)\/\d+[?&]i=(\d+)/);
  if (albumMatch) {
    const slug = albumMatch[1];
    const trackId = albumMatch[2];
    return `https://music.apple.com/us/song/${slug}/${trackId}`;
  }

  // Album URL without ?i= — cannot convert without a lookup
  return url;
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
