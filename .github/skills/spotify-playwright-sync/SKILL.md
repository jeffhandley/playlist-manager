# Spotify Playlist Sync (Playwright MCP)

Sync a playlist to Spotify using browser automation via the Playwright MCP server. Works with free Spotify accounts — no Premium subscription or API keys required.

## When to Use

Activate this skill when the user wants to:

- "Sync … to Spotify"
- "Save playlist to Spotify"
- "Export … to Spotify"
- "Add playlist to Spotify"
- "Push … to my Spotify account"

**Do NOT use** when the user mentions Apple Music — use the `apple-music-sync` or `apple-music-api` skills instead.

## Prerequisites

- **Playwright MCP server** configured and available (provides `browser_navigate`, `browser_click`, `browser_type`, `browser_snapshot` tools)
- **Node.js v18+** installed (for the parse helper)
- **Spotify account** (free or Premium)

## Workflow Overview

1. **Parse** the playlist markdown into a track list
2. **Launch browser** and navigate to Spotify web player
3. **Authenticate** (detect login state, wait for manual login if needed)
4. **Find or create** the target playlist (with 🤖 managed marker)
5. **Add tracks** by searching and selecting each one
6. **Verify** the final playlist

---

## Phase 1: Parse the Playlist

Run the parse helper to extract the track list as JSON:

```bash
node .github/skills/spotify-playwright-sync/parse-playlist.mjs playlists/<name>.md
```

This outputs JSON:
```json
{
  "name": "Playlist Name",
  "description": "Description text",
  "trackCount": 42,
  "tracks": [
    { "song": "Song Title", "artist": "Artist Name", "album": "Album Name" },
    ...
  ]
}
```

Capture this output. Report the playlist name and track count to the user before proceeding.

---

## Phase 2: Browser Setup

### Navigate to Spotify

```
browser_navigate: https://open.spotify.com
```

Wait for the page to load, then take a snapshot:

```
browser_snapshot
```

### Detect Login State

Look for indicators in the snapshot:

- **Logged in**: The page shows a home feed, "Your Library" sidebar, or the user's profile name/avatar
- **Not logged in**: The page shows a "Log in" button, a landing/marketing page, or a cookie consent banner

### If not logged in

1. Inform the user: *"Please log in to Spotify in the browser window. Let me know when you're done."*
2. Wait for the user to confirm they've logged in
3. Take another snapshot to verify the login succeeded
4. If a cookie consent banner appears, dismiss it by clicking "Accept" or "Accept All"

### If logged in

Proceed to Phase 3.

---

## Phase 3: Find or Create the Playlist

The managed playlist name is the playlist name from Phase 1 with ` 🤖` appended. For example, if the playlist is "Classic Rock", the Spotify playlist name is `Classic Rock 🤖`.

### Search for an existing playlist

1. Look at the sidebar for "Your Library" — if you see it, click on it
2. Take a snapshot to see the user's playlists
3. Look for a playlist whose name matches the managed name (with 🤖)
4. If the sidebar has a search/filter input, type the playlist name to narrow results

### If the playlist exists

1. Click on it to open it
2. Take a snapshot to see the current state
3. **Clear all existing tracks** to replace them:
   - Use keyboard shortcut Ctrl+A (or Cmd+A on Mac) to select all tracks in the playlist view
   - Then press Delete/Backspace to remove them
   - If that doesn't work, look for a "Remove all" or select-all option via the playlist menu (⋯ button)
   - Alternatively, you can remove tracks in batches: select visible tracks → right-click → "Remove from this playlist"
4. Confirm the playlist is empty before adding new tracks

### If the playlist does NOT exist

1. Click the **"+"** or **"Create playlist"** button (usually in the sidebar near "Your Library")
2. A new playlist will be created with a default name (e.g., "My Playlist #1")
3. Take a snapshot to find the name/title input field
4. Clear the default name and type the managed playlist name: `{name} 🤖`
5. If a description field is visible, enter the playlist description from Phase 1
6. Save/confirm the new playlist

---

## Phase 4: Add Tracks

Process each track from the parsed list. Work through them sequentially.

### For each track:

1. **Navigate to search**: Click the "Search" link/icon in the sidebar or top navigation

2. **Enter search query**: Click the search input field and type:
   ```
   {song} {artist}
   ```
   Keep the query concise — use just the song title and artist name. If the song title is very long (>50 chars), truncate it.

3. **Wait for results**: Take a snapshot after typing to see the search results

4. **Find the best match**:
   - Look for results in the "Songs" section (not Albums, Artists, or Playlists)
   - Prefer an exact match: same song title AND same artist name
   - Accept a close match: song title matches, artist is a slight variation (e.g., "feat." differences)
   - Skip "Live" or "Remix" versions unless the original track specifies those
   - If no "Songs" section is visible, look for individual track results with a play button

5. **Add to playlist**: Once you've identified the correct track:
   - Right-click on the track row (or look for a "⋯" / "more options" button on the track)
   - In the context menu, click **"Add to playlist"**
   - A submenu will appear listing the user's playlists
   - Click the managed playlist name (`{name} 🤖`)
   - If the playlist appears with a checkmark, the track is already in it

6. **Report progress**: After each track (or every 5–10 tracks), report progress:
   ```
   [12/42] ✓ Song Title — Artist Name
   ```

7. **Handle failures**: If a track can't be found after reasonable searching:
   - Try a simplified search: just the song title alone
   - Try alternate spelling or removing special characters
   - If still not found, log it as failed and move on:
     ```
     [13/42] ✗ Song Title — Artist Name (not found)
     ```

### Rate limiting and politeness

- Add a brief pause between searches (1–2 seconds) to avoid overwhelming the UI
- If the page becomes unresponsive, wait a few seconds and take a snapshot to reassess
- If errors accumulate (3+ consecutive failures), reload the page and try resuming

---

## Phase 5: Verification

After all tracks have been processed:

1. **Navigate to the playlist**: Click on the managed playlist in the sidebar, or navigate to it via "Your Library"

2. **Take a snapshot** of the playlist view

3. **Count tracks**: Check how many tracks are in the playlist vs. how many were expected

4. **Report results**:
   ```
   ✅ Synced {success_count}/{total_count} tracks to "Playlist Name 🤖"

   Failed tracks:
     ✗ Song Title — Artist Name (not found)
     ✗ Song Title — Artist Name (not found)
   ```

---

## Managed Playlist Safety

**CRITICAL**: Only modify playlists with the ` 🤖` marker in their name. Never modify playlists without this marker — they are the user's personal playlists.

- Managed playlists: `Playlist Name 🤖` — safe to create, update, and replace tracks
- All other playlists: **read-only** — do not modify, delete, or rename

---

## Troubleshooting

### Cookie consent banner blocks interaction
- Look for an "Accept" or "Accept All" button and click it
- Some regions show a cookie settings dialog — accept all cookies to proceed

### Search returns no results
- Simplify the query: use only the song title
- Remove special characters, parenthetical notes, or "Remastered" suffixes
- Try the artist name alone to verify Spotify has their catalog

### Context menu doesn't show "Add to playlist"
- The track might be unavailable in the user's region
- Try right-clicking directly on the song title text
- Take a snapshot and look for alternative UI patterns

### Playlist not appearing in sidebar
- Scroll down in the library/sidebar to load more playlists
- Use the search/filter within the library if available
- Refresh the page and check again

### Page becomes unresponsive
- Wait 5 seconds, then take a snapshot
- If still unresponsive, navigate back to `https://open.spotify.com` and resume from where you left off
