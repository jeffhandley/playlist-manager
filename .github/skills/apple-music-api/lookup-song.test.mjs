import assert from "node:assert/strict";
import { generateKeyPairSync, verify } from "node:crypto";
import test from "node:test";
import { canonicalSongResult, generateDeveloperToken, lookupSong } from "./lookup-song.mjs";

test("canonicalSongResult accepts only matching Apple Music US song permalinks", () => {
  const result = {
    id: "123456789",
    attributes: {
      name: "Ghosts",
      artistName: "Staind",
      albumName: "Confessions of the Fallen",
      releaseDate: "2023-09-15",
      contentRating: "explicit",
      url: "https://music.apple.com/us/song/ghosts/123456789",
    },
  };

  assert.deepEqual(canonicalSongResult(result), {
    title: "Ghosts",
    artist: "Staind",
    album: "Confessions of the Fallen",
    year: "2023",
    explicit: true,
    url: "https://music.apple.com/us/song/ghosts/123456789",
  });
  assert.equal(
    canonicalSongResult({
      ...result,
      attributes: { ...result.attributes, url: "https://music.apple.com/us/album/album/123456789" },
    }),
    null,
  );
  assert.equal(
    canonicalSongResult({
      ...result,
      attributes: { ...result.attributes, url: "https://example.com/us/song/ghosts/123456789" },
    }),
    null,
  );
  assert.equal(
    canonicalSongResult({
      ...result,
      attributes: { ...result.attributes, url: "https://music.apple.com/us/song/ghosts/987654321" },
    }),
    null,
  );
});

test("generateDeveloperToken signs an ES256 token for Apple Music", () => {
  const { privateKey, publicKey } = generateKeyPairSync("ec", { namedCurve: "prime256v1" });
  const token = generateDeveloperToken({
    teamId: "TESTTEAM",
    keyId: "TESTKEY",
    privateKey: privateKey.export({ type: "pkcs8", format: "pem" }).toString(),
    now: 1_800_000_000,
  });
  const [header, payload, signature] = token.split(".");
  const signingInput = `${header}.${payload}`;

  assert.deepEqual(JSON.parse(Buffer.from(header, "base64url").toString()), {
    alg: "ES256",
    kid: "TESTKEY",
  });
  assert.deepEqual(JSON.parse(Buffer.from(payload, "base64url").toString()), {
    iss: "TESTTEAM",
    iat: 1_800_000_000,
    exp: 1_815_552_000,
  });
  assert.equal(
    verify("sha256", Buffer.from(signingInput), { key: publicKey, dsaEncoding: "ieee-p1363" }, Buffer.from(signature, "base64url")),
    true,
  );
});

test("lookupSong searches the US catalog with only a developer token", async () => {
  let requestUrl;
  let requestOptions;
  const results = await lookupSong("Ghosts", "Staind", {
    developerToken: "test-developer-token",
    fetchImpl: async (url, options) => {
      requestUrl = url;
      requestOptions = options;
      return {
        ok: true,
        json: async () => ({
          results: {
            songs: {
              data: [
                {
                  id: "123456789",
                  attributes: {
                    name: "Ghosts",
                    artistName: "Staind",
                    albumName: "Confessions of the Fallen",
                    releaseDate: "2023-09-15",
                    url: "https://music.apple.com/us/song/ghosts/123456789",
                  },
                },
                {
                  id: "987654321",
                  attributes: {
                    name: "Unverified",
                    artistName: "Staind",
                    url: "https://music.apple.com/us/album/unverified/987654321",
                  },
                },
              ],
            },
          },
        }),
      };
    },
  });

  assert.equal(requestUrl.origin, "https://api.music.apple.com");
  assert.equal(requestUrl.pathname, "/v1/catalog/us/search");
  assert.equal(requestUrl.searchParams.get("term"), "Ghosts Staind");
  assert.equal(requestUrl.searchParams.get("types"), "songs");
  assert.equal(requestOptions.headers.Authorization, "Bearer test-developer-token");
  assert.equal("Music-User-Token" in requestOptions.headers, false);
  assert.equal(results.length, 1);
  assert.equal(results[0].url, "https://music.apple.com/us/song/ghosts/123456789");
});

test("lookupSong rejects missing title or artist before making a request", async () => {
  await assert.rejects(lookupSong("", "Staind", { developerToken: "unused" }), /title and artist are required/);
  await assert.rejects(lookupSong("Ghosts", " ", { developerToken: "unused" }), /title and artist are required/);
});
