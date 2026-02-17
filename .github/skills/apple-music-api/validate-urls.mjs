#!/usr/bin/env node

// Validate and correct Apple Music song IDs across all playlists.
// For each track with a permalink, verifies the song ID still resolves
// via the Apple Music API. If invalid, searches for the correct ID and
// rewrites the link reference in the markdown file.
//
// Usage:
//   node .github/skills/apple-music-api/validate-urls.mjs [playlists/specific.md ...]
//
// Environment variables required:
//   APPLE_MUSIC_TEAM_ID, APPLE_MUSIC_KEY_ID, APPLE_MUSIC_PRIVATE_KEY, APPLE_MUSIC_USER_TOKEN

import { readdirSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { getCatalogSong, searchCatalog } from "./api.mjs";
import { extractSongId } from "./playlist.mjs";
import { parsePlaylistMarkdown } from "../apple-music-sync/parser.mjs";

async function main() {
  const args = process.argv.slice(2);

  // Determine which files to validate
  let files;
  if (args.length > 0) {
    files = args.filter((a) => !a.startsWith("--"));
  } else {
    const dir = "playlists";
    files = readdirSync(dir)
      .filter((f) => f.endsWith(".md"))
      .sort()
      .map((f) => join(dir, f));
  }

  if (files.length === 0) {
    console.error("No playlist files found.");
    process.exit(1);
  }

  console.log(`\nValidating ${files.length} playlist(s)\n${"=".repeat(50)}\n`);

  let totalTracks = 0;
  let totalInvalid = 0;
  let totalCorrected = 0;
  let totalRemoved = 0;
  const changedFiles = [];

  for (const file of files) {
    const result = await validateFile(file);
    totalTracks += result.tracks;
    totalInvalid += result.invalid;
    totalCorrected += result.corrected;
    totalRemoved += result.removed;
    if (result.corrected > 0 || result.removed > 0) {
      changedFiles.push(file);
    }
  }

  console.log(`\n${"=".repeat(50)}`);
  console.log(`Total: ${totalTracks} tracks checked`);
  console.log(`  ${totalInvalid} invalid IDs found`);
  console.log(`  ${totalCorrected} corrected via search`);
  console.log(`  ${totalRemoved} links removed (track not found)`);

  if (changedFiles.length > 0) {
    console.log(`\nFiles modified:`);
    for (const f of changedFiles) console.log(`  ${f}`);
  } else {
    console.log(`\nAll playlists are valid!`);
  }

  // Exit with code 1 if changes were made (useful for CI)
  process.exit(changedFiles.length > 0 ? 1 : 0);
}

async function validateFile(filePath) {
  const { name, tracks } = parsePlaylistMarkdown(filePath);
  const label = name || filePath;

  // Count tracks with URLs
  const tracksWithUrls = tracks.filter((t) => t.url);
  if (tracksWithUrls.length === 0) {
    console.log(`${label}: no permalinks to validate`);
    return { tracks: 0, invalid: 0, corrected: 0, removed: 0 };
  }

  console.log(`${label}: checking ${tracksWithUrls.length} permalinks...`);

  let content = readFileSync(filePath, "utf-8");
  let invalid = 0;
  let corrected = 0;
  let removed = 0;
  let modified = false;

  for (let i = 0; i < tracksWithUrls.length; i++) {
    const track = tracksWithUrls[i];
    const songId = extractSongId(track.url);
    if (!songId) continue;

    // Verify the song ID resolves
    try {
      const song = await getCatalogSong(songId);
      if (song) continue; // Valid
    } catch {
      // API error — treat as invalid
    }

    invalid++;
    const progress = `[${i + 1}/${tracksWithUrls.length}]`;
    console.log(`  ${progress} ✗ Invalid: ${track.song} — ${track.artist} (ID: ${songId})`);

    // Search for the correct track
    const query = `${track.song} ${track.artist}`;
    const results = await searchCatalog(query, { limit: 5 });

    const songLower = track.song.toLowerCase();
    const artistLower = track.artist.toLowerCase();

    const match =
      results.find((r) => {
        const n = (r.attributes?.name || "").toLowerCase();
        const a = (r.attributes?.artistName || "").toLowerCase();
        return n === songLower && a.includes(artistLower);
      }) ||
      results.find((r) => {
        const a = (r.attributes?.artistName || "").toLowerCase();
        return a.includes(artistLower);
      });

    if (match) {
      const newId = match.id;
      const attrs = match.attributes;
      const slug = (attrs.name || "song")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
      const newUrl = `https://music.apple.com/us/song/${slug}/${newId}`;

      // Replace the old URL in the file content
      content = content.replace(track.url, newUrl);
      corrected++;
      modified = true;
      console.log(`         ✓ Corrected → ${newUrl}`);
    } else {
      // Remove the broken link reference — convert [Song][N] to plain Song
      // Find the link ref number for this URL
      const refMatch = content.match(new RegExp(`^\\[(\\d+)\\]:\\s*${escapeRegex(track.url)}\\s*$`, "m"));
      if (refMatch) {
        const refNum = refMatch[1];
        // Remove the reference definition line
        content = content.replace(new RegExp(`^\\[${refNum}\\]:\\s*${escapeRegex(track.url)}\\s*\\n?`, "m"), "");
        // Convert [Song Title][N] to Song Title in the table
        content = content.replace(new RegExp(`\\[([^\\]]+)\\]\\[${refNum}\\]`), "$1");
        modified = true;
      }
      removed++;
      console.log(`         ✗ Not found — link removed`);
    }
  }

  if (modified) {
    writeFileSync(filePath, content);
  }

  return { tracks: tracksWithUrls.length, invalid, corrected, removed };
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(2);
});
