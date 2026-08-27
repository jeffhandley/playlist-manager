// Playlist markdown parser

import { readFileSync } from "fs";

export function parsePlaylistMarkdown(filePath) {
  const content = readFileSync(filePath, "utf-8");
  const lines = content.split("\n");

  const nameMatch = content.match(/^# (.+)$/m);
  const name = nameMatch ? nameMatch[1].trim() : null;

  // Extract description: first non-empty paragraph after the heading,
  // stopping at the next heading or markdown table/section marker.
  let description = null;
  if (nameMatch) {
    const afterHeading = content.slice(nameMatch.index + nameMatch[0].length);
    const descMatch = afterHeading.match(/^\s*\n+([^\n#|].+?)(?:\n\n|\n#|\n\|)/s);
    if (descMatch) {
      description = descMatch[1].trim();
    }
  }

  // Parse footnote-style link references.
  const linkRefs = {};
  for (const line of lines) {
    const refMatch = line.match(/^\[([a-z0-9_-]+)\]:\s*(.+)$/i);
    if (refMatch) {
      linkRefs[refMatch[1]] = refMatch[2].trim();
    }
  }

  const tracks = [];
  const tableStart = lines.findIndex((line) =>
    /^\|\s*(?:#\s*\|\s*)?Song\s*\|/i.test(line)
  );
  if (tableStart < 0) return { name, description, tracks };

  for (const line of lines.slice(tableStart + 2)) {
    if (!line.startsWith("|")) break;
    const cells = line
      .trim()
      .replace(/^\|/, "")
      .replace(/\|$/, "")
      .split("|")
      .map((cell) => cell.trim());
    const offset = /^\d+$/.test(cells[0]) ? 1 : 0;
    if (cells.length >= offset + 5 && cells[offset]) {
      let song = cells[offset];
      const artist = cells[offset + 1];
      const album = cells[offset + 2];

      // Extract song name from markdown reference or inline link.
      let url = null;
      const linkRefMatch = song.match(/^\[(.+?)\]\[([a-z0-9_-]+)\]$/i);
      const inlineLinkMatch = song.match(/^\[(.+?)\]\((.+?)\)$/);

      if (linkRefMatch) {
        song = linkRefMatch[1];
        url = linkRefs[linkRefMatch[2]] || null;
      } else if (inlineLinkMatch) {
        song = inlineLinkMatch[1];
        url = inlineLinkMatch[2];
      }

      tracks.push({ song, artist, album, url });
    }
  }

  return { name, description, tracks };
}
