// Apple Music playlist operations via the web player

import { BASE_URL, waitFor, waitAndClick } from "./browser.mjs";

// Managed playlist marker — all playlists created by this script are suffixed
// with this marker so that delete/update operations never touch user-created playlists.
const PLAYLIST_MARKER = " 🤖";

export function managedName(name) {
  return name.endsWith(PLAYLIST_MARKER) ? name : name + PLAYLIST_MARKER;
}

export function isManaged(name) {
  return name.endsWith(PLAYLIST_MARKER);
}

function assertManaged(name) {
  if (!isManaged(name)) {
    throw new Error(`Refusing to modify "${name}" — only playlists ending with "${PLAYLIST_MARKER}" are managed by this script.`);
  }
}

// Returns true if a label looks like a "Live" version and the target song doesn't ask for one.
function isUnwantedLive(label, targetSong) {
  if (/\blive\b/i.test(targetSong)) return false; // song explicitly wants "Live"
  return /\b(live|live at|live from|live in)\b/i.test(label);
}

// Navigate to a managed playlist and return an array of { song, artist } currently on it.
export async function readPlaylistTracks(page, playlistName) {
  assertManaged(playlistName);

  // Retry navigation — the playlist may take a moment to appear after creation
  let playlistLink;
  for (let attempt = 0; attempt < 3; attempt++) {
    await page.goto(`${BASE_URL}/library/all-playlists/`, { waitUntil: "load" });
    playlistLink = page.locator(`a:has-text("${playlistName}")`).first();
    if (await waitFor(playlistLink, { timeout: 5000 })) break;
    playlistLink = null;
  }

  if (!playlistLink) return null; // playlist doesn't exist

  await playlistLink.click();
  await waitFor(page.locator('.songs-list-row').first(), { timeout: 10000 });

  const rows = page.locator('.songs-list-row');
  const count = await rows.count();
  const tracks = [];

  for (let i = 0; i < count; i++) {
    const row = rows.nth(i);
    const playBtn = row.locator('button[aria-label^="Play"]').first();
    const label = await playBtn.getAttribute('aria-label').catch(() => '');
    // Format: "Play {Song} by {Artist}"
    const match = label?.match(/^Play (.+?) by (.+)$/);
    if (match) {
      tracks.push({ song: match[1], artist: match[2] });
    } else {
      tracks.push({ song: label || '?', artist: '?' });
    }
  }

  return tracks;
}

export async function deletePlaylist(page, playlistName) {
  assertManaged(playlistName);

  let deleted = 0;
  while (true) {
    await page.goto(`${BASE_URL}/library/all-playlists/`, { waitUntil: "load" });

    const playlistLink = page.locator(`a:has-text("${playlistName}")`).first();
    if (!await waitFor(playlistLink)) break;

    await playlistLink.click();

    const moreButton = page.locator('button[aria-label="more"]').first();
    if (!await waitAndClick(moreButton)) break;

    const deleteOption = page.locator('button:has-text("Delete From Library")').first();
    if (!await waitAndClick(deleteOption)) {
      await page.keyboard.press("Escape");
      break;
    }

    // Confirm deletion — dialog has "OK" and "Cancel" buttons
    const confirmButton = page.locator('article.error-modal__container button:has-text("OK")').first();
    if (await waitAndClick(confirmButton)) {
      await page.waitForURL(/\/library\//, { timeout: 10000 }).catch(() => {});
    }
    deleted++;
  }

  if (deleted > 0) {
    console.log(`Deleted ${deleted} playlist(s) named "${playlistName}".`);
  } else {
    console.log(`Playlist "${playlistName}" not found — nothing to delete.`);
  }
}

// Navigate directly to a song permalink and return the song-level "more" button.
// Song URLs lead to a song detail page with a more button for the specific track.
export async function navigateToSongUrl(page, url) {
  await page.goto(url, { waitUntil: "load" });

  // The song detail page has a "Favorite" button and a "more" button at the top.
  // The first visible "more" button is the song-level one.
  const favoriteBtn = page.locator('button[aria-label="Favorite"]').first();
  await waitFor(favoriteBtn, { timeout: 10000 });

  const moreBtn = page.locator('button[aria-label="more"]').first();
  if (await waitFor(moreBtn, { timeout: 5000 })) {
    return moreBtn;
  }

  return null;
}

// Search for a song and return the "more" button locator for the matching track row.
// Navigates to the album page via autocomplete, then finds the track-level more button.
// Avoids "Live" versions unless the song title explicitly contains "Live".
export async function findTrackMoreButton(page, song, artist) {
  await page.goto(`${BASE_URL}/us/search`, { waitUntil: "load" });
  const searchInput = page.locator('input.search-input__text-field, input[type="search"], input[placeholder*="earch"]').first();
  if (!await waitFor(searchInput)) throw new Error("Search input not found");

  await searchInput.click();
  await searchInput.pressSequentially(`${song} ${artist}`, { delay: 30 });

  // Wait for autocomplete song hints (lockup items with "Song · Artist")
  const songHints = page.locator('li.search-hint--lockup');
  if (!await waitFor(songHints.first(), { timeout: 10000 })) {
    return null;
  }

  const count = await songHints.count();
  let clicked = false;
  const songLower = song.toLowerCase();
  const artistLower = artist.toLowerCase();

  // Collect all "Song" hints, filtering out unwanted Live versions
  const candidates = [];
  for (let i = 0; i < count; i++) {
    const hint = songHints.nth(i);
    const text = await hint.innerText();
    if (!text.includes("Song")) continue;
    if (isUnwantedLive(text, song)) continue;

    const textLower = text.toLowerCase();
    const matchesSong = textLower.includes(songLower);
    const matchesArtist = textLower.includes(artistLower);
    candidates.push({ hint, matchesSong, matchesArtist, text });
  }

  // Pick best match: song+artist > song only > any
  const best = candidates.find(c => c.matchesSong && c.matchesArtist)
    || candidates.find(c => c.matchesSong)
    || candidates[0];

  if (best) {
    await best.hint.click();
    clicked = true;
  }

  if (!clicked) {
    // Fallback: click any non-Live Song hint, or first hint
    for (let i = 0; i < count; i++) {
      const hint = songHints.nth(i);
      const text = await hint.innerText();
      if (text.includes("Song") && !isUnwantedLive(text, song)) {
        await hint.click();
        clicked = true;
        break;
      }
    }
    if (!clicked) {
      await songHints.first().click();
    }
  }

  // Wait for the album page to load with track rows
  await waitFor(page.locator('.songs-list-row').first(), { timeout: 10000 });

  // Find the correct track row — skip Live versions
  const rows = page.locator('.songs-list-row');
  const rowCount = await rows.count();

  for (let i = 0; i < rowCount; i++) {
    const row = rows.nth(i);
    const playBtn = row.locator('button[aria-label^="Play"]').first();
    const label = await playBtn.getAttribute('aria-label').catch(() => '');
    if (!label) continue;
    if (!label.toLowerCase().includes(songLower)) continue;
    if (isUnwantedLive(label, song)) continue;

    const trackMore = row.locator('button[aria-label="more"]').first();
    if (await waitFor(trackMore, { timeout: 3000 })) {
      return trackMore;
    }
  }

  return null;
}

export async function addTrackToPlaylist(page, song, artist, playlistName, { url, onCreatePlaylist, forceCreate } = {}) {
  // Use permalink URL if available, otherwise fall back to search
  const moreBtn = url
    ? await navigateToSongUrl(page, url)
    : await findTrackMoreButton(page, song, artist);

  if (!moreBtn) {
    return { status: "missing", reason: "no results found" };
  }

  // Retry loop for finding the playlist in the "Add to Playlist" submenu
  const maxAttempts = 5;
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    if (attempt > 0) {
      // Re-navigate to the song page and find the more button again
      const retryMoreBtn = url
        ? await navigateToSongUrl(page, url)
        : await findTrackMoreButton(page, song, artist);
      if (!retryMoreBtn) {
        return { status: "missing", reason: "no results found on retry" };
      }
      await retryMoreBtn.click();
    } else {
      await moreBtn.click();
    }

    const addToPlaylist = page.locator('button:has-text("Add to Playlist")').first();
    if (!await waitAndClick(addToPlaylist)) {
      await page.keyboard.press("Escape");
      if (attempt === maxAttempts - 1) return { status: "missing", reason: "Add to Playlist option not found" };
      continue;
    }

    // If forceCreate, skip looking for existing playlist and go straight to New Playlist
    if (forceCreate && onCreatePlaylist) {
      const newPlaylist = page.locator('button:has-text("New Playlist")').first();
      if (await waitAndClick(newPlaylist)) {
        const created = await onCreatePlaylist(page);
        if (created === false) {
          return { status: "missing", reason: "playlist creation failed" };
        }
        return { status: "created" };
      }
    }

    const targetPlaylist = page.locator(`button:has-text("${playlistName}")`).first();
    if (await waitAndClick(targetPlaylist, { timeout: 10000 })) {
      return { status: "added" };
    }

    // Playlist doesn't exist yet — create it if a callback was provided
    if (onCreatePlaylist) {
      const newPlaylist = page.locator('button:has-text("New Playlist")').first();
      if (await waitAndClick(newPlaylist)) {
        const created = await onCreatePlaylist(page);
        if (created === false) {
          return { status: "missing", reason: "playlist creation failed" };
        }
        return { status: "created" };
      }
    }

    // Dismiss the menu and retry
    await page.keyboard.press("Escape");
    await page.keyboard.press("Escape");
    console.log(`    (retry ${attempt + 1}/${maxAttempts}: playlist not found in submenu)`);
  }

  return { status: "missing", reason: `playlist "${playlistName}" not found in menu after ${maxAttempts} retries` };
}

export async function addTrackToLibrary(page, song, artist) {
  const moreBtn = await findTrackMoreButton(page, song, artist);
  if (!moreBtn) {
    return { status: "skipped", reason: "no results found" };
  }

  // The track row has its own "Add to library" button
  const trackRow = page.locator(`.songs-list-row:has(button[aria-label*="Play ${song.replace(/"/g, '\\"')}"])`).first();
  const addButton = trackRow.locator('button[aria-label="Add to library"]').first();
  if (await waitAndClick(addButton, { timeout: 5000 })) {
    return { status: "added" };
  }

  // Fallback to page-level add button
  const pageAddButton = page.locator('button[aria-label="Add to library"]').first();
  if (await waitAndClick(pageAddButton, { timeout: 3000 })) {
    return { status: "added" };
  }

  return { status: "skipped", reason: "already in library or not found" };
}
