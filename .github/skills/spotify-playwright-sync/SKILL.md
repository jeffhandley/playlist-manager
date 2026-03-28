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

### Playwright MCP Server Setup

The Playwright MCP server must be configured before this skill can be used. Add the following to your MCP server configuration:

**For VS Code / GitHub Copilot** (`.vscode/mcp.json`):
```json
{
  "servers": {
    "playwright": {
      "command": "npx",
      "args": ["@playwright/mcp@latest"]
    }
  }
}
```

**For Claude Desktop** (`claude_desktop_config.json`):
```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["@playwright/mcp@latest"]
    }
  }
}
```

After adding the configuration, restart your editor or AI client. Verify the MCP server is active by checking that browser tools (`browser_navigate`, `browser_snapshot`, etc.) appear in the available tools.

> **If the Playwright MCP server tools are not available**, this skill cannot execute. Ask the user to configure the MCP server using the instructions above.

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
3. To rename: click the **playlist title heading** on the playlist page — this opens the **"Edit details"** dialog
4. In the dialog, clear the **"Name"** field and type the managed playlist name: `{name} 🤖`
5. Fill in the **"Description"** field with the playlist description from Phase 1
6. Click **"Save"** to confirm

---

## Phase 4: Add Tracks

Use the **in-playlist search** to add tracks. This is faster and more reliable than the main Spotify search.

### Open the in-playlist search

While viewing the playlist, look for the **"Find more"** button or a searchbox labeled **"Search for songs or episodes"** at the bottom of the track list. Click it to activate the in-playlist search.

### CRITICAL: Selector for the Add button

The Spotify web player shows **three grids** with "Add to Playlist" buttons:

1. **`aria-label="{Playlist Name} 🤖"`** — existing playlist tracks (these have `aria-label="Add to playlist"` with lowercase 'p', no `data-testid`)
2. **`aria-label="Top"`** — search results ← **USE THIS ONE**
3. **`aria-label="Recommended based on what's in this playlist"`** — recommendations (looks identical to #2)

⚠️ If you use a generic selector like `button[data-testid="add-to-playlist-button"].first()`, it will match buttons from the **Recommended** section, NOT the search results. You **must** scope to the `[aria-label="Top"]` grid.

### Automation pattern

Process tracks in batches of 20–25 using `browser_run_code` for efficiency:

```javascript
async (page) => {
  const tracks = [
    { idx: 1, song: "Song Title", artist: "Artist Name" },
    // ... more tracks
  ];

  const searchBox = page.getByRole('searchbox', { name: 'Search for songs or episodes' });
  const topGrid = page.locator('[aria-label="Top"]').first();
  const results = [];

  for (const track of tracks) {
    try {
      await searchBox.click();
      await searchBox.fill('');
      await searchBox.fill(`${track.song} ${track.artist}`);
      await page.waitForTimeout(2000); // Wait for search results to load

      const addBtn = topGrid.locator('button[data-testid="add-to-playlist-button"]').first();
      try {
        await addBtn.waitFor({ state: 'visible', timeout: 5000 });
        await addBtn.click();
        await page.waitForTimeout(800); // Wait for add confirmation
        results.push(`[${track.idx}/${tracks.length}] ✓ ${track.song} — ${track.artist}`);
      } catch {
        results.push(`[${track.idx}/${tracks.length}] ✗ ${track.song} — ${track.artist} (not found)`);
      }
    } catch (e) {
      results.push(`[${track.idx}/${tracks.length}] ✗ ${track.song} — ${track.artist} (error)`);
    }
  }

  return results.join('\n');
}
```

### Key timing values

- **2000ms** after filling the search box — allows search results to load
- **800ms** after clicking add — allows the confirmation toast to appear
- **5000ms** timeout waiting for the add button — handles slow searches

### Handle failures

If a track can't be found:
- Try a simplified search: just the song title alone
- Try alternate spelling or removing special characters
- If still not found, log it as failed and continue with the next track

### Progress reporting

Report progress after each batch:
```
[1/108] ✓ Song Title — Artist Name
[2/108] ✓ Song Title — Artist Name
[3/108] ✗ Song Title — Artist Name (not found)
```

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
