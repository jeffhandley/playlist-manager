import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";
import {
  addPreferenceExclusions,
  parsePlaylistDocument,
  reconcile,
  renderPlaylistDocument,
} from "./reconcile.mjs";

const PLAYLIST = `# Test Mix

A test playlist.

| # | Song | Artist | Album | Year | Note |
|---|------|--------|-------|------|------|
| 1 | [Keep Me][1] | Artist A | First | 2020 | favorite |
| 2 | [Remove Me][2] | Artist B | Second | 2021 |  |

[1]: https://music.apple.com/us/song/keep-me/111
[2]: https://music.apple.com/us/song/remove-me/222
`;

test("playlist rendering renumbers rows and references", () => {
  const directory = mkdtempSync(join(tmpdir(), "reconcile-render-"));
  const file = join(directory, "playlist.md");
  writeFileSync(file, PLAYLIST);
  const document = parsePlaylistDocument(file);
  const rendered = renderPlaylistDocument(document, [document.tracks[1]]);

  assert.match(rendered, /\| 1 \| \[Remove Me]\[1] \|/);
  assert.match(rendered, /^\[1]: .*\/222$/m);
  assert.doesNotMatch(rendered, /^\[2]:/m);
});

test("preference exclusions are idempotent", () => {
  const preferences = `# Playlist Preferences

## Blocked Songs

## Blocked Artists
`;
  const track = { song: "Removed Song", artist: "Somebody" };
  const updated = addPreferenceExclusions(preferences, [track, track]);

  assert.equal((updated.match(/Removed Song/g) || []).length, 1);
  assert.equal(addPreferenceExclusions(updated, [track]), updated);
});

test("reconciliation adds to the scanned playlist and removes globally", async () => {
  const root = mkdtempSync(join(tmpdir(), "reconcile-all-"));
  const playlists = join(root, "playlists");
  mkdirSync(playlists);
  writeFileSync(join(playlists, "test-mix.md"), PLAYLIST);
  writeFileSync(
    join(playlists, "other.md"),
    PLAYLIST.replace("# Test Mix", "# Other Mix")
  );
  writeFileSync(
    join(root, "PREFERENCES.md"),
    "# Playlist Preferences\n\n## Blocked Songs\n\n## Blocked Artists\n"
  );

  const result = await reconcile({
    root,
    playlist: "test-mix",
    loadRemotePlaylist: async () => [
      {
        catalogId: "111",
        name: "Keep Me",
        artistName: "Artist A",
        albumName: "First",
      },
      {
        catalogId: "333",
        name: "Add Me",
        artistName: "Artist C",
        albumName: "Third",
        releaseDate: "2024-01-01",
        url: "https://music.apple.com/us/song/add-me/333",
      },
    ],
  });

  const scanned = readFileSync(join(playlists, "test-mix.md"), "utf8");
  const other = readFileSync(join(playlists, "other.md"), "utf8");
  const preferences = readFileSync(join(root, "PREFERENCES.md"), "utf8");

  assert.equal(result.additions, 1);
  assert.equal(result.removals, 1);
  assert.match(scanned, /Add Me/);
  assert.doesNotMatch(scanned, /Remove Me/);
  assert.doesNotMatch(other, /Remove Me/);
  assert.match(preferences, /\*\*"Remove Me"\*\* by Artist B/);
});
