#!/usr/bin/env node

import { readdirSync, readFileSync, writeFileSync } from "fs";
import { basename, join, resolve } from "path";
import { fileURLToPath } from "url";
import { getCatalogSong } from "./api.mjs";
import {
  extractSongId,
  findManagedPlaylists,
  managedName,
  normalizeToSongUrl,
  readPlaylistTracksById,
} from "./playlist.mjs";

const PLAYLISTS_DIR = "playlists";
const PREFERENCES_FILE = "PREFERENCES.md";

function normalize(value) {
  return (value || "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function semanticKey(track) {
  return `${normalize(track.song || track.name)}\0${normalize(track.artist || track.artistName)}`;
}

function looseSemanticKey(track) {
  const title = track.song || track.name || "";
  const baseTitle = title
    .replace(
      /\s*[\[(][^\])]*(?:remaster(?:ed)?|version|mix|edit|mono|stereo|anniversary|deluxe)[^\])]*[\])]/gi,
      ""
    )
    .replace(
      /\s*[-–—]\s*(?:\d{4}\s+)?(?:remaster(?:ed)?|version|mix|edit|mono|stereo|anniversary|deluxe).*$/gi,
      ""
    );
  return `${normalize(baseTitle)}\0${normalize(track.artist || track.artistName)}`;
}

function trackId(track) {
  return track.catalogId || extractSongId(track.url) || null;
}

function splitTableRow(line) {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

function parseSongCell(cell, references) {
  const referenceLink = cell.match(/^\[(.+)]\[(\d+)]$/);
  if (referenceLink) {
    return { song: referenceLink[1], url: references.get(referenceLink[2]) || null };
  }

  const inlineLink = cell.match(/^\[(.+)]\((https?:\/\/.+)\)$/);
  if (inlineLink) {
    return { song: inlineLink[1], url: inlineLink[2] };
  }

  return { song: cell, url: null };
}

export function parsePlaylistDocument(filePath) {
  const content = readFileSync(filePath, "utf8");
  const lines = content.split("\n");
  const name = lines.find((line) => line.startsWith("# "))?.slice(2).trim();
  if (!name) throw new Error(`No playlist heading found in ${filePath}`);

  const references = new Map();
  for (const line of lines) {
    const match = line.match(/^\[(\d+)]:\s*(\S+)\s*$/);
    if (match) references.set(match[1], match[2]);
  }

  const tableStart = lines.findIndex((line) => /^\|\s*#\s*\|\s*Song\s*\|/i.test(line));
  if (tableStart < 0 || tableStart + 1 >= lines.length) {
    throw new Error(`No playlist table found in ${filePath}`);
  }

  let tableEnd = tableStart + 2;
  while (tableEnd < lines.length && /^\|\s*\d+\s*\|/.test(lines[tableEnd])) {
    tableEnd++;
  }

  const tracks = [];
  for (const line of lines.slice(tableStart + 2, tableEnd)) {
    const cells = splitTableRow(line);
    if (cells.length < 6) throw new Error(`Unsupported playlist row in ${filePath}: ${line}`);
    const linkedSong = parseSongCell(cells[1], references);
    tracks.push({
      song: linkedSong.song,
      artist: cells[2],
      album: cells[3],
      year: cells[4],
      note: cells.slice(5).join(" | "),
      url: linkedSong.url,
    });
  }

  return { filePath, name, lines, tableStart, tableEnd, tracks };
}

function escapeCell(value) {
  return String(value || "").replace(/\|/g, "\\|").trim();
}

export function renderPlaylistDocument(document, tracks) {
  const rows = tracks.map((track, index) => {
    const number = index + 1;
    const song = track.url ? `[${escapeCell(track.song)}][${number}]` : escapeCell(track.song);
    return `| ${number} | ${song} | ${escapeCell(track.artist)} | ${escapeCell(track.album)} | ${escapeCell(track.year)} | ${escapeCell(track.note)} |`;
  });
  const references = tracks
    .map((track, index) => (track.url ? `[${index + 1}]: ${track.url}` : null))
    .filter(Boolean);

  const prefix = document.lines.slice(0, document.tableStart + 2);
  const suffix = document.lines.slice(document.tableEnd);
  const firstReference = suffix.findIndex((line) => /^\[\d+]:\s*\S+/.test(line));
  const suffixWithoutReferences = suffix.filter((line) => !/^\[\d+]:\s*\S+/.test(line));
  const insertionIndex =
    firstReference < 0
      ? suffixWithoutReferences.length
      : suffix
          .slice(0, firstReference)
          .filter((line) => !/^\[\d+]:\s*\S+/.test(line)).length;

  const renderedSuffix = [...suffixWithoutReferences];
  if (references.length > 0) {
    const block = [];
    if (insertionIndex > 0 && renderedSuffix[insertionIndex - 1] !== "") block.push("");
    block.push(...references);
    renderedSuffix.splice(insertionIndex, 0, ...block);
  }

  return [...prefix, ...rows, ...renderedSuffix].join("\n");
}

function takeMatch(localTracks, used, remoteTrack) {
  const remoteId = trackId(remoteTrack);
  if (remoteId) {
    const index = localTracks.findIndex(
      (track, candidate) => !used.has(candidate) && trackId(track) === remoteId
    );
    if (index >= 0) {
      used.add(index);
      return index;
    }
  }

  const remoteSemanticKey = semanticKey(remoteTrack);
  let index = localTracks.findIndex(
    (track, candidate) =>
      !used.has(candidate) && semanticKey(track) === remoteSemanticKey
  );
  if (index < 0) {
    const remoteLooseKey = looseSemanticKey(remoteTrack);
    index = localTracks.findIndex(
      (track, candidate) =>
        !used.has(candidate) && looseSemanticKey(track) === remoteLooseKey
    );
  }
  if (index >= 0) used.add(index);
  return index;
}

async function additionFromRemote(remoteTrack) {
  let attributes = null;
  if (
    remoteTrack.catalogId &&
    (!remoteTrack.name ||
      !remoteTrack.artistName ||
      !remoteTrack.albumName ||
      !remoteTrack.releaseDate ||
      !remoteTrack.url)
  ) {
    try {
      attributes = (await getCatalogSong(remoteTrack.catalogId))?.attributes || null;
    } catch {
      // Library metadata is still sufficient when a storefront catalog lookup fails.
    }
  }

  const song = attributes?.name || remoteTrack.name;
  const artist = attributes?.artistName || remoteTrack.artistName;
  const album = attributes?.albumName || remoteTrack.albumName;
  const releaseDate = attributes?.releaseDate || remoteTrack.releaseDate || "";
  let url = normalizeToSongUrl(attributes?.url || remoteTrack.url || "");

  if ((!url || !url.includes("/song/")) && remoteTrack.catalogId) {
    const slug = normalize(song).replace(/\s+/g, "-") || "song";
    url = `https://music.apple.com/us/song/${slug}/${remoteTrack.catalogId}`;
  }

  return {
    song,
    artist,
    album,
    year: releaseDate.slice(0, 4),
    note: "",
    url: url || null,
  };
}

export async function comparePlaylist(localTracks, remoteTracks) {
  const used = new Set();
  const ordered = [];
  let additions = 0;

  for (const remoteTrack of remoteTracks) {
    const localIndex = takeMatch(localTracks, used, remoteTrack);
    if (localIndex >= 0) {
      ordered.push(localTracks[localIndex]);
    } else {
      ordered.push(await additionFromRemote(remoteTrack));
      additions++;
    }
  }

  return {
    ordered,
    additions,
    removed: localTracks.filter((_, index) => !used.has(index)),
  };
}

function isRemoved(track, removedIds, removedSemanticKeys, removedLooseSemanticKeys) {
  const id = trackId(track);
  return (
    (id && removedIds.has(id)) ||
    removedSemanticKeys.has(semanticKey(track)) ||
    removedLooseSemanticKeys.has(looseSemanticKey(track))
  );
}

export function addPreferenceExclusions(content, removedTracks) {
  if (removedTracks.length === 0) return content;

  const blockedArtistsHeading = "\n## Blocked Artists";
  const insertionPoint = content.indexOf(blockedArtistsHeading);
  if (insertionPoint < 0) throw new Error("PREFERENCES.md has no Blocked Artists section");

  const existing = new Set();
  for (const match of content.matchAll(/^- \*\*"(.+)"\*\* by (.+)$/gm)) {
    existing.add(semanticKey({ song: match[1], artist: match[2] }));
  }

  const additions = [];
  for (const track of removedTracks) {
    const key = semanticKey(track);
    if (existing.has(key)) continue;
    existing.add(key);
    additions.push(
      `- **"${track.song}"** by ${track.artist}\n  - Reason: Removed from an Apple Music playlist`
    );
  }
  if (additions.length === 0) return content;

  const before = content.slice(0, insertionPoint).trimEnd();
  const after = content.slice(insertionPoint);
  return `${before}\n\n${additions.join("\n\n")}\n${after}`;
}

function resolveSelection(documents, requestedPlaylist) {
  if (!requestedPlaylist) return documents;
  const requested = normalize(requestedPlaylist.replace(/\.md$/i, "").replace(/^playlists\//, ""));
  const matches = documents.filter(
    (document) =>
      normalize(basename(document.filePath, ".md")) === requested ||
      normalize(document.name) === requested
  );
  if (matches.length !== 1) {
    throw new Error(`Playlist input did not uniquely match a markdown file: ${requestedPlaylist}`);
  }
  return matches;
}

export async function reconcile({
  playlist,
  root = process.cwd(),
  loadRemotePlaylist,
} = {}) {
  const playlistDirectory = resolve(root, PLAYLISTS_DIR);
  const documents = readdirSync(playlistDirectory)
    .filter((file) => file.endsWith(".md"))
    .sort()
    .map((file) => parsePlaylistDocument(join(playlistDirectory, file)));
  const selected = resolveSelection(documents, playlist);
  const comparisons = [];
  const skipped = [];

  for (const document of selected) {
    const remoteTracks = await loadRemotePlaylist(document);
    if (remoteTracks === null) {
      skipped.push(document.filePath);
      continue;
    }
    comparisons.push({
      document,
      comparison: await comparePlaylist(document.tracks, remoteTracks),
    });
  }

  const removedTracks = comparisons.flatMap(({ comparison }) => comparison.removed);
  const removedIds = new Set(removedTracks.map(trackId).filter(Boolean));
  const removedSemanticKeys = new Set(removedTracks.map(semanticKey));
  const removedLooseSemanticKeys = new Set(removedTracks.map(looseSemanticKey));
  const comparisonByPath = new Map(
    comparisons.map(({ document, comparison }) => [document.filePath, comparison])
  );
  const changedFiles = [];

  for (const document of documents) {
    const comparison = comparisonByPath.get(document.filePath);
    const candidateTracks = comparison ? comparison.ordered : document.tracks;
    const retainedTracks = candidateTracks.filter(
      (track) =>
        !isRemoved(
          track,
          removedIds,
          removedSemanticKeys,
          removedLooseSemanticKeys
        )
    );
    const tracksChanged =
      retainedTracks.length !== document.tracks.length ||
      retainedTracks.some((track, index) => track !== document.tracks[index]);
    if (!tracksChanged) continue;

    const rendered = renderPlaylistDocument(document, retainedTracks);
    const original = document.lines.join("\n");
    if (rendered !== original) {
      writeFileSync(document.filePath, rendered);
      changedFiles.push(document.filePath);
    }
  }

  const preferencesPath = resolve(root, PREFERENCES_FILE);
  const preferences = readFileSync(preferencesPath, "utf8");
  const updatedPreferences = addPreferenceExclusions(preferences, removedTracks);
  if (updatedPreferences !== preferences) {
    writeFileSync(preferencesPath, updatedPreferences);
    changedFiles.push(preferencesPath);
  }

  return {
    scanned: comparisons.length,
    skipped,
    additions: comparisons.reduce((sum, item) => sum + item.comparison.additions, 0),
    removals: removedTracks.length,
    changedFiles,
  };
}

async function loadAppleMusicPlaylist(document) {
  const family = await findManagedPlaylists(managedName(document.name));
  const newest = family[0];
  if (!newest) return null;
  return readPlaylistTracksById(newest.id);
}

async function main() {
  const args = process.argv.slice(2);
  const playlistIndex = args.indexOf("--playlist");
  const playlist = playlistIndex >= 0 ? args[playlistIndex + 1] : null;
  if (playlistIndex >= 0 && !playlist) throw new Error("--playlist requires a value");

  const result = await reconcile({ playlist, loadRemotePlaylist: loadAppleMusicPlaylist });
  console.log(JSON.stringify(result, null, 2));
}

if (resolve(process.argv[1] || "") === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    console.error(error.message);
    process.exit(1);
  });
}
