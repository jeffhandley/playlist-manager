// Playlist markdown parser

import { readFileSync } from "fs";

export function parsePlaylistMarkdown(filePath) {
  const content = readFileSync(filePath, "utf-8");

  const nameMatch = content.match(/^# (.+)$/m);
  const name = nameMatch ? nameMatch[1].trim() : null;

  // Parse footnote-style link references: [N]: https://...
  const linkRefs = {};
  for (const line of content.split("\n")) {
    const refMatch = line.match(/^\[(\d+)\]:\s*(.+)$/);
    if (refMatch) {
      linkRefs[refMatch[1]] = refMatch[2].trim();
    }
  }

  const tracks = [];
  for (const line of content.split("\n")) {
    const match = line.match(
      /^\|\s*(\d+)\s*\|\s*(.+?)\s*\|\s*(.+?)\s*\|\s*.*\|$/
    );
    if (match) {
      const num = match[1].trim();
      let song = match[2].trim();
      const artist = match[3].trim();

      // Extract song name from markdown link: [Song Title][N] or [Song Title](url)
      let url = null;
      const linkRefMatch = song.match(/^\[(.+?)\]\[(\d+)\]$/);
      const inlineLinkMatch = song.match(/^\[(.+?)\]\((.+?)\)$/);

      if (linkRefMatch) {
        song = linkRefMatch[1];
        url = linkRefs[linkRefMatch[2]] || null;
      } else if (inlineLinkMatch) {
        song = inlineLinkMatch[1];
        url = inlineLinkMatch[2];
      }

      tracks.push({ song, artist, url });
    }
  }

  return { name, tracks };
}
