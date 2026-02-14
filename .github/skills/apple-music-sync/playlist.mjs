// Apple Music playlist operations via the web player

import { BASE_URL, waitFor, waitAndClick } from "./browser.mjs";
import { setTimeout } from "timers/promises";

// Managed playlist marker — all playlists created by this script are suffixed
// with this marker so that delete/update operations never touch user-created playlists.
const PLAYLIST_MARKER = " 🤖";

// Backup marker — backups use a different emoji so they are visually distinct
// from managed playlists and are NEVER modified or deleted by automation.
const BACKUP_MARKER = " 🔙";

export function managedName(name) {
  return name.endsWith(PLAYLIST_MARKER) ? name : name + PLAYLIST_MARKER;
}

export function isManaged(name) {
  return name.endsWith(PLAYLIST_MARKER);
}

export function isBackup(name) {
  return name.includes(BACKUP_MARKER);
}

function assertManaged(name) {
  if (!isManaged(name)) {
    throw new Error(`Refusing to modify "${name}" — only playlists ending with "${PLAYLIST_MARKER}" are managed by this script.`);
  }
  if (isBackup(name)) {
    throw new Error(`Refusing to modify backup "${name}" — backups are immutable and must never be modified or deleted by automation.`);
  }
}

// Returns true if a label looks like a "Live" version and the target song doesn't ask for one.
function isUnwantedLive(label, targetSong) {
  if (/\blive\b/i.test(targetSong)) return false; // song explicitly wants "Live"
  return /\b(live|live at|live from|live in)\b/i.test(label);
}

// Navigate to a managed playlist and return an array of { song, artist } currently on it.
export async function readPlaylistTracks(page, playlistName) {
  const count = await navigateToPlaylistPage(page, playlistName);
  if (count === null) return null;

  const rows = page.locator('.songs-list-row');
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

// Create a new managed playlist via the "New Playlist" dialog.
// Called as a callback from addTrackToPlaylist when the playlist doesn't exist.
export async function createPlaylist(page, playlistName, { description } = {}) {
  assertManaged(playlistName);

  const nameInput = page.locator('input.playlist-title').first();
  if (!await waitFor(nameInput, { timeout: 10000 })) {
    console.log("Warning: playlist title input not found in create dialog.");
    await page.keyboard.press("Escape");
    return false;
  }

  await nameInput.fill(playlistName);

  // Fill in the description if provided
  if (description) {
    const descInput = page.locator('textarea.description').first();
    if (await waitFor(descInput, { timeout: 3000 })) {
      await descInput.fill(description);
    } else {
      console.log("  Note: description field not found in create dialog.");
    }
  }

  const createButton = page.locator('button:has-text("Create")').first();
  if (!await waitAndClick(createButton, { timeout: 5000 })) {
    console.log("Warning: Create button not found in create dialog.");
    await page.keyboard.press("Escape");
    return false;
  }

  // Wait for the dialog to dismiss and playlist to propagate
  await nameInput.waitFor({ state: "hidden", timeout: 10000 }).catch(() => {});

  // Navigate to the playlist page to force Apple Music to register it
  console.log(`  Waiting for playlist to register...`);
  for (let warmup = 0; warmup < 6; warmup++) {
    await setTimeout(5000);
    const count = await navigateToPlaylistPage(page, playlistName);
    if (count !== null) {
      console.log(`Created playlist "${playlistName}".`);
      return true;
    }
  }

  console.log(`  Warning: playlist page not accessible yet, continuing anyway...`);
  console.log(`Created playlist "${playlistName}".`);
  return true;
}

// Add a track to a playlist with verification and retry for transient failures.
// Returns { added: boolean, count: number } where count is the playlist track count.
export async function addTrackWithRetry(page, track, playlistName, opts = {}) {
  const { song, artist, url } = track;
  const { expectedCount, retries = 3 } = opts;

  for (let attempt = 0; attempt < retries; attempt++) {
    if (attempt > 0) {
      console.log(`    (add retry ${attempt}/${retries - 1}: re-adding ${song})`);
      await setTimeout(5000);
    }

    const result = await addTrackToPlaylist(page, song, artist, playlistName, opts);

    if (result.status === "created") {
      return { added: true, created: true };
    }

    if (result.status === "added") {
      if (expectedCount == null) return { added: true };

      const actual = await readPlaylistTracks(page, playlistName);
      if (!actual) {
        console.error(`\n✗ Verification failed: playlist "${playlistName}" not found after adding track.`);
        process.exit(1);
      }

      const target = expectedCount + 1;
      if (actual.length === target) {
        return { added: true, count: actual.length };
      } else if (actual.length === expectedCount) {
        // Add didn't persist — retry
        if (attempt === retries - 1) {
          return { added: false, reason: `add did not persist after ${retries} attempts, playlist has ${actual.length} tracks` };
        }
      } else {
        // Unexpected count
        return { added: true, count: actual.length, unexpected: true };
      }
    } else {
      return { added: false, reason: result.reason };
    }
  }

  return { added: false, reason: "retries exhausted" };
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

// Navigate to an album page and add all its tracks to a playlist at once.
// Uses the album-level "more" button → "Add to Playlist" → select playlist.
// Returns { status, trackCount } where trackCount is the number of tracks on the album.
export async function addAlbumToPlaylist(page, albumUrl, playlistName, { onCreatePlaylist, forceCreate } = {}) {
  assertManaged(playlistName);

  await page.goto(albumUrl, { waitUntil: "load" });

  // Wait for the album page to load — look for track rows
  const firstRow = page.locator('.songs-list-row').first();
  if (!await waitFor(firstRow, { timeout: 15000 })) {
    return { status: "missing", reason: "album page did not load" };
  }

  const trackCount = await page.locator('.songs-list-row').count();

  // The album-level "more" button is at the top of the page, near the album art.
  // It's distinct from the per-track "more" buttons inside .songs-list-row elements.
  // Look for the more button that is NOT inside a songs-list-row.
  const albumMoreBtn = page.locator('button[aria-label="more"]').first();
  if (!await waitAndClick(albumMoreBtn, { timeout: 5000 })) {
    return { status: "missing", reason: "album more button not found" };
  }

  const addToPlaylist = page.locator('button:has-text("Add to Playlist")').first();
  if (!await waitAndClick(addToPlaylist)) {
    await page.keyboard.press("Escape");
    return { status: "missing", reason: "Add to Playlist option not found" };
  }

  // If forceCreate, go straight to New Playlist
  if (forceCreate && onCreatePlaylist) {
    const newPlaylist = page.locator('button:has-text("New Playlist")').first();
    if (await waitAndClick(newPlaylist)) {
      const created = await onCreatePlaylist(page);
      if (created === false) {
        return { status: "missing", reason: "playlist creation failed" };
      }
      return { status: "created", trackCount };
    }
  }

  const targetPlaylist = page.locator(`button:has-text("${playlistName}")`).first();
  if (await waitAndClick(targetPlaylist, { timeout: 10000 })) {
    return { status: "added", trackCount };
  }

  // Playlist doesn't exist yet — create it if a callback was provided
  if (onCreatePlaylist) {
    const newPlaylist = page.locator('button:has-text("New Playlist")').first();
    if (await waitAndClick(newPlaylist)) {
      const created = await onCreatePlaylist(page);
      if (created === false) {
        return { status: "missing", reason: "playlist creation failed" };
      }
      return { status: "created", trackCount };
    }
  }

  await page.keyboard.press("Escape");
  await page.keyboard.press("Escape");
  return { status: "missing", reason: `playlist "${playlistName}" not found in menu` };
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

  // Pick best match: song+artist > song only > first candidate > first hint
  const best = candidates.find(c => c.matchesSong && c.matchesArtist)
    || candidates.find(c => c.matchesSong)
    || candidates[0];

  if (best) {
    await best.hint.click();
  } else {
    await songHints.first().click();
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
    // Wait before retrying to allow playlist to propagate
    await setTimeout(5000);
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

// Internal: rename a playlist via the Edit dialog. No safety checks — callers must validate.
async function _renameTo(page, playlistName, newName) {
  // Navigate to the playlist without assertManaged (backup names contain 🔙)
  let playlistLink;
  for (let attempt = 0; attempt < 3; attempt++) {
    await page.goto(`${BASE_URL}/library/all-playlists/`, { waitUntil: "load" });
    playlistLink = page.getByRole('link', { name: playlistName, exact: true }).first();
    if (await waitFor(playlistLink, { timeout: 5000 })) break;
    playlistLink = null;
  }
  if (!playlistLink) {
    console.log(`Playlist "${playlistName}" not found — cannot rename.`);
    return false;
  }
  await playlistLink.click();
  await waitFor(page.locator('.songs-list-row').first(), { timeout: 10000 });

  const moreButton = page.locator('button[aria-label="more"]').first();
  if (!await waitAndClick(moreButton)) {
    console.log("  Note: could not find more button on playlist page.");
    return false;
  }

  const editBtn = page.locator('amp-contextual-menu button[title="Edit"]').first();
  if (!await waitAndClick(editBtn)) {
    await page.keyboard.press("Escape");
    console.log("  Note: could not find Edit option in menu.");
    return false;
  }

  await setTimeout(1000);

  const nameInput = page.locator('input.playlist-title').first();
  if (await waitFor(nameInput, { timeout: 5000 })) {
    await nameInput.fill(newName);
  } else {
    console.log("  Note: playlist title input not found in edit mode.");
    return false;
  }

  const doneBtn = page.locator('button:has-text("Done")').first();
  if (await waitAndClick(doneBtn, { timeout: 3000 })) {
    // Done button found and clicked
  } else {
    await page.locator('.songs-list').first().click().catch(() => {});
  }

  await setTimeout(1000);
  return true;
}

// Rename an existing managed playlist.
// Opens the playlist's Edit dialog via the "more" menu, clears the title input, and types the new name.
export async function renamePlaylist(page, oldName, newName) {
  assertManaged(oldName);
  assertManaged(newName);

  const result = await _renameTo(page, oldName, newName);
  if (result) console.log(`Renamed "${oldName}" to "${newName}".`);
  return result;
}

// Update the description on an existing managed playlist.
// Opens the playlist's Edit dialog via the "more" menu, fills the description textarea, and saves.
export async function updatePlaylistDescription(page, playlistName, description) {
  assertManaged(playlistName);

  const count = await navigateToPlaylistPage(page, playlistName);
  if (count === null) {
    console.log(`Playlist "${playlistName}" not found — cannot update description.`);
    return false;
  }

  // Open the "more" context menu
  const moreButton = page.locator('button[aria-label="more"]').first();
  if (!await waitAndClick(moreButton)) {
    console.log("  Note: could not find more button on playlist page.");
    return false;
  }

  // Click "Edit" in the context menu
  const editBtn = page.locator('amp-contextual-menu button[title="Edit"]').first();
  if (!await waitAndClick(editBtn)) {
    await page.keyboard.press("Escape");
    console.log("  Note: could not find Edit option in menu.");
    return false;
  }

  await setTimeout(1000);

  // Fill the description textarea
  const descInput = page.locator('textarea.description').first();
  if (await waitFor(descInput, { timeout: 5000 })) {
    await descInput.fill(description);
  } else {
    console.log("  Note: description textarea not found in edit mode.");
    return false;
  }

  // Save by clicking "Done" or pressing Escape to dismiss edit mode
  const doneBtn = page.locator('button:has-text("Done")').first();
  if (await waitAndClick(doneBtn, { timeout: 3000 })) {
    // Done button found and clicked
  } else {
    // No explicit Done button — click away from the edit area to save
    await page.locator('.songs-list').first().click().catch(() => {});
  }

  await setTimeout(1000);
  console.log(`Updated description for "${playlistName}".`);
  return true;
}

// Create a backup of a managed playlist for today's date.
// The backup is created by RENAMING the existing 🤖 playlist to a 🔙 backup
// name. The sync will then create a fresh 🤖 playlist. This preserves all
// tracks (the old "Add to Playlist" approach only copied ~100 tracks).
// Once renamed to 🔙, the backup is immutable — never modified or deleted.
// If a backup for today already exists, this is a no-op.
export async function backupPlaylist(page, playlistName) {
  assertManaged(playlistName);

  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  const baseName = playlistName.replace(PLAYLIST_MARKER, "");
  const backupName = `${baseName}${BACKUP_MARKER} (${yyyy}-${mm}-${dd})`;

  // Check if today's backup already exists
  await page.goto(`${BASE_URL}/library/all-playlists/`, { waitUntil: "load" });
  const existingBackup = page.getByRole('link', { name: backupName, exact: true }).first();
  if (await waitFor(existingBackup, { timeout: 5000 })) {
    console.log(`Backup "${backupName}" already exists. Skipping backup.\n`);
    return true;
  }

  // Check if the managed playlist exists
  const existingPlaylist = page.getByRole('link', { name: playlistName, exact: true }).first();
  if (!await waitFor(existingPlaylist, { timeout: 3000 })) {
    console.log(`Playlist "${playlistName}" not found — nothing to back up.\n`);
    return false;
  }

  // Rename the 🤖 playlist to the 🔙 backup name
  const result = await _renameTo(page, playlistName, backupName);
  if (!result) {
    console.log(`  Warning: could not rename playlist for backup.\n`);
    return false;
  }

  console.log(`Created backup "${backupName}" (renamed from "${playlistName}").\n`);
  return true;
}

// Navigate to a managed playlist page. Returns the track row count, or null if not found.
async function navigateToPlaylistPage(page, playlistName) {
  assertManaged(playlistName);

  let playlistLink;
  for (let attempt = 0; attempt < 3; attempt++) {
    await page.goto(`${BASE_URL}/library/all-playlists/`, { waitUntil: "load" });
    playlistLink = page.getByRole('link', { name: playlistName, exact: true }).first();
    if (await waitFor(playlistLink, { timeout: 5000 })) break;
    playlistLink = null;
  }

  if (!playlistLink) return null;

  await playlistLink.click();
  await waitFor(page.locator('.songs-list-row').first(), { timeout: 10000 });

  // Scroll to load all rows — Apple Music uses virtual scrolling and only
  // renders a subset of rows initially. mouse.wheel triggers the virtual
  // scroller; window.scrollTo does not.
  let count = await page.locator('.songs-list-row').count();
  let stable = 0;
  while (stable < 2) {
    await page.mouse.wheel(0, 5000);
    await setTimeout(1000);
    const newCount = await page.locator('.songs-list-row').count();
    stable = newCount === count ? stable + 1 : 0;
    count = newCount;
  }

  return count;
}

// Reorder tracks on a managed playlist to match the desired order.
// Since "Delete From Playlist" removes ALL copies of a song,
// in-place reorder via copy-then-delete doesn't work. Instead:
//   1. Compare current playlist order to desired order
//   2. Find the first track that's out of place
//   3. Check if removing specific tracks from the current list would
//      align the remainder with the desired order (optimized path)
//   4. Otherwise, delete all tracks from the mismatch point to the end
//      and re-add them in the correct order using their permalinks
export async function reorderPlaylist(page, playlistName, desiredOrder) {
  assertManaged(playlistName);

  // Read current state
  let currentTracks = await readPlaylistTracks(page, playlistName);
  if (!currentTracks) throw new Error(`Playlist "${playlistName}" not found`);

  const key = (t) => t.song.toLowerCase();
  const artistMatch = (a, b) => {
    const al = a.toLowerCase(), bl = b.toLowerCase();
    return al === bl || al.includes(bl) || bl.includes(al);
  };
  const tracksMatch = (a, b) => key(a) === key(b) && artistMatch(a.artist, b.artist);

  // Find the first mismatch
  let firstMismatch = 0;
  for (let i = 0; i < desiredOrder.length && i < currentTracks.length; i++) {
    if (tracksMatch(currentTracks[i], desiredOrder[i])) {
      firstMismatch = i + 1;
    } else {
      break;
    }
  }

  if (firstMismatch >= desiredOrder.length) {
    console.log("Playlist is already in the correct order.");
    return { deleted: 0, added: 0 };
  }

  // Optimization: check if removing specific tracks from the current list
  // would align the remainder with the desired order. This avoids mass
  // delete+re-add when tracks are simply moved to the end.
  //
  // Walk through current tracks from the mismatch point; any track that
  // matches the next expected track in the desired order is "kept". Tracks
  // that don't match are candidates for deletion. If the kept tracks form
  // a contiguous prefix of the desired suffix, we can just delete the
  // extras and append the new tracks.
  const desiredSuffix = desiredOrder.slice(firstMismatch);
  const currentSuffix = currentTracks.slice(firstMismatch);
  let desiredIdx = 0;
  const deleteIndices = []; // indices within currentSuffix to delete

  for (let ci = 0; ci < currentSuffix.length; ci++) {
    if (desiredIdx < desiredSuffix.length && tracksMatch(currentSuffix[ci], desiredSuffix[desiredIdx])) {
      desiredIdx++; // this track stays
    } else {
      deleteIndices.push(ci); // this track needs to be removed
    }
  }

  const tracksToAppend = desiredSuffix.slice(desiredIdx);
  const useOptimized = deleteIndices.length + tracksToAppend.length <
                       currentSuffix.length + desiredSuffix.length - desiredIdx;

  if (useOptimized && (deleteIndices.length > 0 || tracksToAppend.length > 0)) {
    console.log(`Optimized reorder: deleting ${deleteIndices.length} track(s) and appending ${tracksToAppend.length} track(s).\n`);

    // Delete the specific tracks (in reverse order so indices stay valid)
    if (deleteIndices.length > 0) {
      console.log(`Deleting ${deleteIndices.length} track(s)...`);
      await navigateToPlaylistPage(page, playlistName);

      let deletedSoFar = 0;
      for (const relIdx of deleteIndices) {
        // Adjust index: absolute position minus how many we've already deleted
        const absIdx = firstMismatch + relIdx - deletedSoFar;

        let rows = page.locator('.songs-list-row');
        let rowCount = await rows.count();

        // If the target row isn't visible, re-navigate to reload all rows
        if (absIdx >= rowCount) {
          await navigateToPlaylistPage(page, playlistName);
          rows = page.locator('.songs-list-row');
          rowCount = await rows.count();
          if (absIdx >= rowCount) break;
        }

        const row = rows.nth(absIdx);
        await row.hover();
        const playBtn = row.locator('button[aria-label^="Play"]').first();
        const label = await playBtn.getAttribute('aria-label').catch(() => '');

        const moreBtn = row.locator('button[aria-label="more"]').first();
        if (!await waitAndClick(moreBtn, { timeout: 5000 })) {
          await navigateToPlaylistPage(page, playlistName);
          const retryRow = page.locator('.songs-list-row').nth(absIdx);
          await retryRow.hover();
          const retryMore = retryRow.locator('button[aria-label="more"]').first();
          if (!await waitAndClick(retryMore, { timeout: 5000 })) {
            console.log(`  ✗ Could not click more button for row ${absIdx}`);
            break;
          }
        }

        const deleteOption = page.locator('button:has-text("Remove from Playlist")').first();
        if (!await waitAndClick(deleteOption, { timeout: 5000 })) {
          await page.keyboard.press("Escape");
          console.log(`  ✗ "Remove from Playlist" not found`);
          break;
        }

        await setTimeout(1000);
        const songName = label?.replace(/^Play (.+?) by .+$/, '$1') || '?';
        deletedSoFar++;
        console.log(`  Deleted ${deletedSoFar}/${deleteIndices.length}: ${songName}`);
      }
    }

    // Append new tracks
    if (tracksToAppend.length > 0) {
      console.log(`\nAppending ${tracksToAppend.length} track(s)...\n`);

      let added = 0;
      const failed = [];
      for (let i = 0; i < tracksToAppend.length; i++) {
        const track = tracksToAppend[i];
        const progress = `[${i + 1}/${tracksToAppend.length}]`;

        const result = await addTrackWithRetry(page, track, playlistName, {
          url: track.url,
        });

        if (result.added) {
          added++;
          console.log(`  ${progress} ✓ ${track.song} — ${track.artist}`);
        } else {
          failed.push(track);
          console.log(`  ${progress} ✗ ${track.song} — ${track.artist} (${result.reason})`);
        }
      }

      if (failed.length > 0) {
        console.log(`\n${failed.length} track(s) could not be added:`);
        for (const t of failed) console.log(`  • ${t.song} — ${t.artist}`);
      }
    }

    const finalTracks = await readPlaylistTracks(page, playlistName);
    console.log(`\nReorder complete. Playlist now has ${finalTracks?.length} tracks.`);
    return { deleted: deleteIndices.length, added: tracksToAppend.length };
  }

  // Fallback: delete from the mismatch point to the end and re-add all
  const tracksToReAdd = desiredSuffix;
  console.log(`First mismatch at position ${firstMismatch + 1}. Will delete ${currentTracks.length - firstMismatch} track(s) and re-add ${tracksToReAdd.length} in correct order.\n`);

  // Delete tracks from the mismatch point to the end.
  // We delete the track at position firstMismatch repeatedly (since rows shift up).
  // Stay on the playlist page between deletes for speed — only re-navigate if needed.
  let deleteCount = currentTracks.length - firstMismatch;
  console.log(`Deleting ${deleteCount} track(s) from position ${firstMismatch + 1}...`);
  await navigateToPlaylistPage(page, playlistName);

  for (let d = 0; d < deleteCount; d++) {
    let rows = page.locator('.songs-list-row');
    let rowCount = await rows.count();

    // If the target row isn't visible, re-navigate to reload all rows
    // (virtual scrolling may have hidden rows after bulk deletes)
    if (firstMismatch >= rowCount) {
      await navigateToPlaylistPage(page, playlistName);
      rows = page.locator('.songs-list-row');
      rowCount = await rows.count();
      if (firstMismatch >= rowCount) break; // truly no more rows
    }

    const row = rows.nth(firstMismatch);
    await row.hover();
    const playBtn = row.locator('button[aria-label^="Play"]').first();
    const label = await playBtn.getAttribute('aria-label').catch(() => '');

    const moreBtn = row.locator('button[aria-label="more"]').first();
    if (!await waitAndClick(moreBtn, { timeout: 5000 })) {
      // Re-navigate and retry once
      await navigateToPlaylistPage(page, playlistName);
      const retryRow = page.locator('.songs-list-row').nth(firstMismatch);
      await retryRow.hover();
      const retryMore = retryRow.locator('button[aria-label="more"]').first();
      if (!await waitAndClick(retryMore, { timeout: 5000 })) {
        console.log(`  ✗ Could not click more button for row ${firstMismatch}`);
        break;
      }
    }

    const deleteOption = page.locator('button:has-text("Remove from Playlist")').first();
    if (!await waitAndClick(deleteOption, { timeout: 5000 })) {
      await page.keyboard.press("Escape");
      console.log(`  ✗ "Remove from Playlist" not found`);
      break;
    }

    await setTimeout(1000);
    const songName = label?.replace(/^Play (.+?) by .+$/, '$1') || '?';
    if ((d + 1) % 10 === 0 || d === deleteCount - 1) {
      console.log(`  Deleted ${d + 1}/${deleteCount}: ${songName}`);
    }
  }

  console.log(`\nRe-adding ${tracksToReAdd.length} track(s) in correct order...\n`);

  // Re-add tracks without per-track verification (skip navigating back to
  // the playlist page after each add — much faster and more reliable).
  // A final count check is done after all tracks are re-added.
  let added = firstMismatch;
  const failed = [];
  for (let i = 0; i < tracksToReAdd.length; i++) {
    const track = tracksToReAdd[i];
    const progress = `[${firstMismatch + i + 1}/${desiredOrder.length}]`;

    const result = await addTrackWithRetry(page, track, playlistName, {
      url: track.url,
    });

    if (result.added) {
      added++;
      console.log(`  ${progress} ✓ ${track.song} — ${track.artist}`);
    } else {
      failed.push(track);
      console.log(`  ${progress} ✗ ${track.song} — ${track.artist} (${result.reason})`);
    }
  }

  const finalTracks = await readPlaylistTracks(page, playlistName);
  console.log(`\nReorder complete. Playlist now has ${finalTracks?.length} tracks.`);

  if (failed.length > 0) {
    console.log(`\n${failed.length} track(s) could not be added:`);
    for (const t of failed) console.log(`  • ${t.song} — ${t.artist}`);
  }

  return { deleted: deleteCount, added: added - firstMismatch };
}
