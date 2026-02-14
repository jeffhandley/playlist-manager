#!/usr/bin/env node

// Playlist review: open a song permalink, wait for a signal file to advance.
// Usage: node review-playlist.mjs [startTrack]
//
// Control:
//   touch /tmp/playlist-review-next    — accept current page and advance
//   touch /tmp/playlist-review-quit    — stop the review

import { launchBrowser, waitForSignIn, waitFor } from './.github/skills/apple-music-sync/browser.mjs';
import { parsePlaylistMarkdown } from './.github/skills/apple-music-sync/parser.mjs';
import { existsSync, unlinkSync, writeFileSync, appendFileSync } from 'fs';
import { setTimeout } from 'timers/promises';

const NEXT_SIGNAL = '/tmp/playlist-review-next';
const QUIT_SIGNAL = '/tmp/playlist-review-quit';
const RESULTS_FILE = '/tmp/playlist-review-results.txt';

// Clean up any stale signals
try { unlinkSync(NEXT_SIGNAL); } catch {}
try { unlinkSync(QUIT_SIGNAL); } catch {}

const startAt = parseInt(process.argv[2] || '1', 10);
const { name, tracks } = parsePlaylistMarkdown('playlists/hardcovers.md');

const { page, context } = await launchBrowser();
await waitForSignIn(page);

writeFileSync(RESULTS_FILE, '');

for (let i = startAt - 1; i < tracks.length; i++) {
  const t = tracks[i];
  const num = i + 1;
  console.log(`\n=== [${num}/${tracks.length}] ${t.song} — ${t.artist} ===`);

  if (t.url) {
    await page.goto(t.url, { waitUntil: 'load' });
    await waitFor(page.locator('button[aria-label="Favorite"]').first(), { timeout: 15000 }).catch(() => {});
    console.log(`Loaded: ${page.url()}`);
  } else {
    console.log('No permalink — opening search...');
    await page.goto('https://music.apple.com/us/search', { waitUntil: 'load' });
  }

  console.log('WAITING');

  // Poll for signal files
  while (true) {
    if (existsSync(QUIT_SIGNAL)) {
      try { unlinkSync(QUIT_SIGNAL); } catch {}
      console.log('Stopping review.');
      await context.close();
      process.exit(0);
    }
    if (existsSync(NEXT_SIGNAL)) {
      try { unlinkSync(NEXT_SIGNAL); } catch {}
      break;
    }
    await setTimeout(500);
  }

  const finalUrl = page.url();
  const line = `${num}|${finalUrl}`;
  console.log(`RESULT|${line}`);
  appendFileSync(RESULTS_FILE, line + '\n');
}

await context.close();
process.exit(0);
