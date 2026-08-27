import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";
import {
  addPreferenceExclusions,
  comparePlaylist,
  parsePlaylistDocument,
  reconcile,
  renderPlaylistDocument,
} from "./reconcile.mjs";

const PLAYLIST = `# Test Mix

A test playlist.

| Song | Artist | Album | Year | Note |
|---|---|---|---|---|
| [Keep Me][fb42700ac9] | Artist A | First | 2020 | favorite |
| [Remove Me][8776049ffe] | Artist B | Second | 2021 |  |

[fb42700ac9]: https://music.apple.com/us/song/keep-me/111
[8776049ffe]: https://music.apple.com/us/song/remove-me/222
`;

test("playlist rendering keeps numberless rows and stable references", () => {
  const directory = mkdtempSync(join(tmpdir(), "reconcile-render-"));
  const file = join(directory, "playlist.md");
  writeFileSync(file, PLAYLIST);
  const document = parsePlaylistDocument(file);
  const rendered = renderPlaylistDocument(document, [document.tracks[1]]);

  assert.match(rendered, /\| \[Remove Me]\[8776049ffe] \|/);
  assert.match(rendered, /^\[8776049ffe]: .*\/222$/m);
  assert.doesNotMatch(rendered, /fb42700ac9/);
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

test("comparison tolerates library ID and remastered-title differences", async () => {
  const local = {
    song: "Little Things",
    artist: "Bush",
    album: "Sixteen Stone",
    year: "1994",
    note: "",
    url: "https://music.apple.com/us/song/little-things-remastered/111",
  };
  const result = await comparePlaylist([local], [
    {
      catalogId: "999",
      name: "Little Things (Remastered)",
      artistName: "Bush",
      albumName: "Sixteen Stone",
    },
  ]);

  assert.deepEqual(result.ordered, [local]);
  assert.equal(result.additions, 0);
  assert.deepEqual(result.removed, []);
});

test("comparison keeps materially different versions distinct", async () => {
  const local = {
    song: "Example",
    artist: "Artist",
    url: "https://music.apple.com/us/song/example/111",
  };
  const result = await comparePlaylist([local], [
    {
      catalogId: "999",
      name: "Example (Live Version)",
      artistName: "Artist",
      albumName: "Live",
      releaseDate: "2024-01-01",
      url: "https://music.apple.com/us/song/example-live-version/999",
    },
  ]);

  assert.equal(result.additions, 1);
  assert.deepEqual(result.removed, [local]);
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

test("reconciliation loads remote playlists concurrently with a bounded limit", async () => {
  const root = mkdtempSync(join(tmpdir(), "reconcile-concurrent-"));
  const playlists = join(root, "playlists");
  mkdirSync(playlists);
  for (let index = 0; index < 8; index++) {
    writeFileSync(
      join(playlists, `mix-${index}.md`),
      PLAYLIST.replace("# Test Mix", `# Mix ${index}`)
    );
  }
  writeFileSync(
    join(root, "PREFERENCES.md"),
    "# Playlist Preferences\n\n## Blocked Songs\n\n## Blocked Artists\n"
  );

  let active = 0;
  let maximumActive = 0;
  const result = await reconcile({
    root,
    loadRemotePlaylist: async (document) => {
      active++;
      maximumActive = Math.max(maximumActive, active);
      await new Promise((resolve) => setTimeout(resolve, 10));
      active--;
      return document.tracks.map((track) => ({
        catalogId: track.url.split("/").pop(),
        name: track.song,
        artistName: track.artist,
        albumName: track.album,
      }));
    },
  });

  assert.equal(result.scanned, 8);
  assert.equal(maximumActive, 6);
});
