import assert from "node:assert/strict";
import { mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";
import { parsePlaylistMarkdown } from "./parser.mjs";

function parse(content) {
  const directory = mkdtempSync(join(tmpdir(), "playlist-parser-"));
  const file = join(directory, "playlist.md");
  writeFileSync(file, content);
  return parsePlaylistMarkdown(file);
}

test("parses numberless playlist rows with hash references", () => {
  const playlist = parse(`# Test

| Song | Artist | Album | Year | Note |
|---|---|---|---|---|
| [Example][abcdef1234] | Artist | Album | 2024 | |

[abcdef1234]: https://music.apple.com/us/song/example/123
`);

  assert.deepEqual(playlist.tracks, [
    {
      song: "Example",
      artist: "Artist",
      album: "Album",
      url: "https://music.apple.com/us/song/example/123",
    },
  ]);
});

test("continues to parse legacy numbered playlist rows during migration", () => {
  const playlist = parse(`# Test

| # | Song | Artist | Album | Year | Note |
|---|---|---|---|---|---|
| 1 | [Example][1] | Artist | Album | 2024 | |

[1]: https://music.apple.com/us/song/example/123
`);

  assert.equal(playlist.tracks.length, 1);
  assert.equal(playlist.tracks[0].song, "Example");
});
