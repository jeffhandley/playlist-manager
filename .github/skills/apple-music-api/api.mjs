// Apple Music API client
// Handles Developer Token generation (JWT/ES256) and authenticated API requests.
// All credentials are read from environment variables.

import jwt from "jsonwebtoken";

const API_BASE = "https://api.music.apple.com";
const STOREFRONT = "us";

// Rate-limit: modest delay between requests to avoid 429s
const REQUEST_DELAY_MS = 200;
let lastRequestTime = 0;

function getRequiredEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

let cachedDevToken = null;
let devTokenExpiry = 0;

/**
 * Generate a Developer Token (JWT signed with ES256).
 * Cached until near expiry.
 */
export function generateDeveloperToken() {
  const now = Math.floor(Date.now() / 1000);
  if (cachedDevToken && devTokenExpiry > now + 60) {
    return cachedDevToken;
  }

  const teamId = getRequiredEnv("APPLE_MUSIC_TEAM_ID");
  const keyId = getRequiredEnv("APPLE_MUSIC_KEY_ID");
  const privateKey = getRequiredEnv("APPLE_MUSIC_PRIVATE_KEY");

  // The .p8 key may have literal \n in env vars — normalize to real newlines
  const normalizedKey = privateKey.replace(/\\n/g, "\n");

  const expiresIn = "180d"; // max 6 months
  const token = jwt.sign({}, normalizedKey, {
    algorithm: "ES256",
    expiresIn,
    issuer: teamId,
    header: {
      alg: "ES256",
      kid: keyId,
    },
  });

  cachedDevToken = token;
  devTokenExpiry = now + 180 * 24 * 60 * 60;
  return token;
}

/**
 * Get the Music User Token from environment.
 */
export function getMusicUserToken() {
  return getRequiredEnv("APPLE_MUSIC_USER_TOKEN");
}

/**
 * Build authorization headers for Apple Music API requests.
 */
function authHeaders() {
  return {
    Authorization: `Bearer ${generateDeveloperToken()}`,
    "Music-User-Token": getMusicUserToken(),
    "Content-Type": "application/json",
  };
}

/**
 * Throttle requests to avoid rate limiting.
 */
async function throttle() {
  const now = Date.now();
  const elapsed = now - lastRequestTime;
  if (elapsed < REQUEST_DELAY_MS) {
    await new Promise((r) => setTimeout(r, REQUEST_DELAY_MS - elapsed));
  }
  lastRequestTime = Date.now();
}

/**
 * Make an authenticated API request with retry logic.
 */
export async function apiFetch(path, { method = "GET", body, retries = 3 } = {}) {
  await throttle();

  const url = path.startsWith("http") ? path : `${API_BASE}${path}`;
  const opts = {
    method,
    headers: authHeaders(),
  };

  if (body) {
    opts.body = JSON.stringify(body);
  }

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, opts);

      // 429 Too Many Requests — back off and retry
      if (res.status === 429) {
        const retryAfter = parseInt(res.headers.get("Retry-After") || "5", 10);
        console.log(`  Rate limited — waiting ${retryAfter}s (attempt ${attempt}/${retries})`);
        await new Promise((r) => setTimeout(r, retryAfter * 1000));
        continue;
      }

      // 5xx — retry with exponential backoff
      if (res.status >= 500) {
        if (attempt < retries) {
          const delay = Math.pow(2, attempt) * 1000;
          console.log(`  Server error ${res.status} — retrying in ${delay / 1000}s (attempt ${attempt}/${retries})`);
          await new Promise((r) => setTimeout(r, delay));
          continue;
        }
      }

      // 204 No Content — success with no body
      if (res.status === 204) {
        return { ok: true, status: 204, data: null };
      }

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        const errMsg = data?.errors?.[0]?.detail || data?.errors?.[0]?.title || `HTTP ${res.status}`;
        throw new Error(`Apple Music API error: ${errMsg}`);
      }

      return { ok: true, status: res.status, data };
    } catch (err) {
      if (attempt === retries) throw err;
      if (err.message.includes("Apple Music API error")) throw err; // don't retry client errors
      const delay = Math.pow(2, attempt) * 1000;
      console.log(`  Request failed: ${err.message} — retrying in ${delay / 1000}s`);
      await new Promise((r) => setTimeout(r, delay));
    }
  }
}

/**
 * Search the Apple Music catalog for songs.
 * Returns an array of song results.
 */
export async function searchCatalog(term, { limit = 10 } = {}) {
  const encoded = encodeURIComponent(term);
  const { data } = await apiFetch(
    `/v1/catalog/${STOREFRONT}/search?term=${encoded}&types=songs&limit=${limit}`
  );
  return data?.results?.songs?.data || [];
}

/**
 * Get a catalog song by its ID.
 */
export async function getCatalogSong(songId) {
  const { data } = await apiFetch(`/v1/catalog/${STOREFRONT}/songs/${songId}`);
  return data?.data?.[0] || null;
}

export { API_BASE, STOREFRONT };
