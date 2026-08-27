import assert from "node:assert/strict";
import test from "node:test";
import {
  buildDescription,
  isPlaylistUnchanged,
  playlistTracksMatch,
} from "./sync.mjs";

const localTracks = [
  { song: "First Song", artist: "Artist", songId: "111" },
  { song: "Second & Last", artist: "Artist", songId: "222" },
];

const remoteTracks = [
  { name: "First Song", artistName: "Artist", catalogId: "111" },
  {
    name: "Second and Last (2024 Remastered)",
    artistName: "Artist",
    catalogId: "different-id",
  },
];

test("playlist track comparison accepts catalog or semantic identity in order", () => {
  assert.equal(playlistTracksMatch(localTracks, remoteTracks), true);
  assert.equal(playlistTracksMatch(localTracks, [...remoteTracks].reverse()), false);
  assert.equal(playlistTracksMatch(localTracks, remoteTracks.slice(0, 1)), false);
});

test("playlist no-op decisions always load and compare remote tracks", async () => {
  let loaded = false;
  const unchanged = await isPlaylistUnchanged(
    {
      id: "playlist",
      description: "Synced previously [sync:incorrect-fingerprint]",
    },
    localTracks,
    async (id) => {
      assert.equal(id, "playlist");
      loaded = true;
      return remoteTracks;
    }
  );

  assert.equal(unchanged, true);
  assert.equal(loaded, true);
});

test("matching descriptions do not hide remote track changes", async () => {
  const unchanged = await isPlaylistUnchanged(
    { id: "playlist", description: "Synced previously [sync:matching-fingerprint]" },
    localTracks,
    async () => remoteTracks.slice(0, 1)
  );

  assert.equal(unchanged, false);
});

test("playlist descriptions contain informational sync details only", () => {
  const description = buildDescription("Mix", localTracks.length);
  assert.match(description, /2 tracks/);
  assert.doesNotMatch(description, /\[sync:/);
  assert.match(description, /\n\nMix$/);
});
