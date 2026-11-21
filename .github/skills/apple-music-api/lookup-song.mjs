#!/usr/bin/env node

import { resolve } from "path";
import { fileURLToPath } from "url";
import { createPrivateKey, sign } from "crypto";

const API_URL = "https://api.music.apple.com/v1/catalog/us/search";

export function generateDeveloperToken({
  teamId = process.env.APPLE_MUSIC_TEAM_ID,
  keyId = process.env.APPLE_MUSIC_KEY_ID,
  privateKey = process.env.APPLE_MUSIC_PRIVATE_KEY,
  now = Math.floor(Date.now() / 1000),
} = {}) {
  if (!teamId || !keyId || !privateKey) {
    throw new Error("Apple Music Developer Token credentials are incomplete.");
  }

  const encode = (value) => Buffer.from(JSON.stringify(value)).toString("base64url");
  const signingInput = `${encode({ alg: "ES256", kid: keyId })}.${encode({
    iss: teamId,
    iat: now,
    exp: now + 180 * 24 * 60 * 60,
  })}`;
  const key = createPrivateKey(privateKey.replace(/\\n/g, "\n"));
  const signature = sign("sha256", Buffer.from(signingInput), {
    key,
    dsaEncoding: "ieee-p1363",
  }).toString("base64url");
  return `${signingInput}.${signature}`;
}

export function canonicalSongResult(result) {
  const attributes = result?.attributes;
  const id = result?.id;
  const url = attributes?.url;
  if (
    typeof id !== "string" ||
    !/^\d+$/.test(id) ||
    typeof url !== "string" ||
    !/^https:\/\/music\.apple\.com\/us\/song\/[^/?#]+\/\d+$/.test(url) ||
    !url.endsWith(`/${id}`)
  ) {
    return null;
  }

  const releaseDate = attributes.releaseDate;
  return {
    title: attributes.name || "",
    artist: attributes.artistName || "",
    album: attributes.albumName || "",
    year: typeof releaseDate === "string" ? releaseDate.slice(0, 4) : "",
    explicit: attributes.contentRating === "explicit",
    url,
  };
}

export async function lookupSong(title, artist, { fetchImpl = fetch, developerToken } = {}) {
  if (!title?.trim() || !artist?.trim()) {
    throw new Error("Both song title and artist are required.");
  }

  const url = new URL(API_URL);
  url.searchParams.set("term", `${title.trim()} ${artist.trim()}`);
  url.searchParams.set("types", "songs");
  url.searchParams.set("limit", "10");

  const token = developerToken || generateDeveloperToken();
  const response = await fetchImpl(url, {
    headers: { Authorization: `Bearer ${token}` },
    signal: AbortSignal.timeout(20_000),
  });
  if (!response.ok) {
    throw new Error(`Apple Music catalog search failed with HTTP ${response.status}.`);
  }

  const body = await response.json();
  return (body?.results?.songs?.data || [])
    .map(canonicalSongResult)
    .filter(Boolean);
}

async function main() {
  const [title, artist] = process.argv.slice(2);
  const results = await lookupSong(title, artist);
  process.stdout.write(`${JSON.stringify(results)}\n`);
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) {
  main().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}
