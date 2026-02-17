#!/usr/bin/env node

// Sync all playlists to Apple Music via the REST API.
// Usage:
//   node .github/skills/apple-music-api/sync-all.mjs [--library-only]
//
// Syncs every .md file in playlists/ sequentially, showing per-playlist
// progress with overall % complete and estimated time remaining.

import { readdirSync } from "fs";
import { join } from "path";
import { execFileSync } from "child_process";

const args = process.argv.slice(2);
const extraFlags = args.filter((a) => a.startsWith("--"));

const playlistDir = "playlists";
const files = readdirSync(playlistDir)
  .filter((f) => f.endsWith(".md"))
  .sort()
  .map((f) => join(playlistDir, f));

if (files.length === 0) {
  console.error("No playlist files found in playlists/");
  process.exit(1);
}

console.log(`\nSyncing ${files.length} playlists\n${"=".repeat(50)}\n`);

const syncScript = ".github/skills/apple-music-api/sync.mjs";
const startTime = Date.now();
let completed = 0;
let failed = 0;
const failures = [];

for (let i = 0; i < files.length; i++) {
  const file = files[i];
  const name = file.replace("playlists/", "").replace(".md", "");
  const elapsed = Date.now() - startTime;

  // Estimate time remaining
  let eta = "";
  if (completed > 0) {
    const avgMs = elapsed / completed;
    const remainingMs = avgMs * (files.length - completed);
    eta = `, ETA: ${formatDuration(remainingMs)}`;
  }

  const pct = Math.round((completed / files.length) * 100);
  console.log(`\n--- [${i + 1}/${files.length}] ${name} (${pct}% overall${eta}) ---`);

  try {
    execFileSync("node", [syncScript, file, ...extraFlags], {
      stdio: "inherit",
      env: process.env,
    });
    completed++;
    console.log(`✓ ${name} complete`);
  } catch (err) {
    completed++;
    failed++;
    failures.push(name);
    console.log(`✗ ${name} failed (exit code ${err.status})`);
  }
}

const totalTime = Date.now() - startTime;
console.log(`\nDone! ${completed - failed}/${files.length} playlists synced in ${formatDuration(totalTime)}.`);

if (failures.length > 0) {
  console.log(`\n${failures.length} failed:`);
  for (const f of failures) console.log(`  ✗ ${f}`);
}

console.log("");

function formatDuration(ms) {
  const totalSec = Math.round(ms / 1000);
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;
  if (h > 0) return `${h}h ${m}m ${s}s`;
  if (m > 0) return `${m}m ${s}s`;
  return `${s}s`;
}
