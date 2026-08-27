import assert from "node:assert/strict";
import test from "node:test";
import {
  buildDescription,
  isPlaylistUnchanged,
  parseFingerprint,
  playlistTracksMatch,
  trackFingerprint,
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

test("fingerprinted playlists no-op without loading remote tracks", async () => {
  const ids = localTracks.map((track) => track.songId);
  const fingerprint = trackFingerprint(ids);
  let loaded = false;
  const unchanged = await isPlaylistUnchanged(
    { id: "playlist", description: buildDescription("Mix", ids) },
    localTracks,
    fingerprint,
    async () => {
      loaded = true;
      return [];
    }
  );

  assert.equal(unchanged, true);
  assert.equal(loaded, false);
  assert.equal(parseFingerprint(buildDescription("Mix", ids)), fingerprint);
});

test("a fingerprint mismatch is treated as a change without semantic fallback", async () => {
  let loaded = false;
  const unchanged = await isPlaylistUnchanged(
    { id: "playlist", description: buildDescription("Mix", ["different"]) },
    localTracks,
    trackFingerprint(localTracks.map((track) => track.songId)),
    async () => {
      loaded = true;
      return remoteTracks;
    }
  );

  assert.equal(unchanged, false);
  assert.equal(loaded, false);
});

test("legacy playlists no-op when their current tracks match", async () => {
  const unchanged = await isPlaylistUnchanged(
    { id: "legacy", description: "Created before sync fingerprints" },
    localTracks,
    trackFingerprint(localTracks.map((track) => track.songId)),
    async (id) => {
      assert.equal(id, "legacy");
      return remoteTracks;
    }
  );

  assert.equal(unchanged, true);
});
