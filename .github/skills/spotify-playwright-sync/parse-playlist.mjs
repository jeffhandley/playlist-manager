#!/usr/bin/env node

// Parse a playlist markdown file and output JSON for the Spotify sync agent.
// Usage: node parse-playlist.mjs <playlist.md>

import { existsSync } from "fs";
import { parsePlaylistMarkdown } from "../apple-music-sync/parser.mjs";

const filePath = process.argv[2];

if (!filePath || !existsSync(filePath)) {
  console.error(
    "Usage: node parse-playlist.mjs <playlist.md>\n" +
      (filePath ? `\nError: ${filePath} not found` : "")
  );
  process.exit(1);
}

const { name, description, tracks } = parsePlaylistMarkdown(filePath);

if (!name) {
  console.error(
    "Error: Could not find playlist name (# heading) in the markdown file."
  );
  process.exit(1);
}

if (tracks.length === 0) {
  console.error("No tracks found in the markdown file.");
  process.exit(1);
}

const output = {
  name,
  description: description || null,
  trackCount: tracks.length,
  tracks: tracks.map(({ song, artist, album }) => ({ song, artist, album })),
};

console.log(JSON.stringify(output, null, 2));
