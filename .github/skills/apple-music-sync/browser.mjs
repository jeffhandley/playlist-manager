// Browser helpers for Apple Music web player automation

import { chromium } from "playwright";
import { setTimeout } from "timers/promises";
import { existsSync, unlinkSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";

const PROFILE_DIR = join(tmpdir(), "apple-music-playwright-profile");
const SIGNAL_FILE = join(tmpdir(), "apple-music-signed-in");
export const BASE_URL = "https://music.apple.com";

// Wait for a locator to become visible, with retry polling
export async function waitFor(locator, { timeout = 10000 } = {}) {
  try {
    await locator.waitFor({ state: "visible", timeout });
    return true;
  } catch {
    return false;
  }
}

// Click a locator after waiting for it to appear
export async function waitAndClick(locator, { timeout = 10000 } = {}) {
  if (!await waitFor(locator, { timeout })) return false;
  await locator.click();
  return true;
}

export async function launchBrowser({ headless = false } = {}) {
  const userAgent = process.platform === "win32"
    ? "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"
    : "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";

  const context = await chromium.launchPersistentContext(PROFILE_DIR, {
    headless,
    args: ["--disable-blink-features=AutomationControlled", "--hide-crash-restore-bubble"],
    userAgent,
  });

  const page = context.pages()[0] || (await context.newPage());
  return { context, page };
}

export async function waitForSignIn(page) {
  console.log("Checking sign-in status...");
  await page.goto(`${BASE_URL}/`, { waitUntil: "load" });

  // The sidebar shows "Recently Added" and "All Playlists" links when signed in.
  // Use a generous timeout since the authenticated UI renders after JS hydration.
  const authIndicator = page.locator('a:has-text("Recently Added")').first();
  const signedIn = await waitFor(authIndicator, { timeout: 15000 });

  if (signedIn) {
    console.log("Already signed in. Starting sync...\n");
    return;
  }

  // Not signed in — wait for the user
  try { unlinkSync(SIGNAL_FILE); } catch {}

  console.log("Please sign in to Apple Music in the browser window.");
  console.log(`Waiting for signal file: ${SIGNAL_FILE}`);
  console.log("Once signed in, create the signal file to continue.\n");

  while (!existsSync(SIGNAL_FILE)) {
    await setTimeout(1000);
  }
  try { unlinkSync(SIGNAL_FILE); } catch {}
  console.log("Sign-in confirmed. Starting sync...\n");
}
