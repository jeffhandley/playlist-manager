---
name: apple-music-sync
description: Sync a playlist to Apple Music using Playwright browser automation of the Apple Music web player. Works on macOS, Windows, and Linux. Use when the user wants to save or sync a playlist to Apple Music, add a playlist to their library, or export a playlist to Apple Music.
---

# Apple Music Sync

Sync a playlist from this repository to Apple Music using Playwright browser automation of the [Apple Music web player](https://music.apple.com). Works on any platform. No Apple Developer enrollment, API keys, or native apps are required.

## When to Use This Skill

Activate this skill when the user:
- Wants to save a playlist to Apple Music
- Asks to sync, export, or push a playlist to their library
- Wants to create an Apple Music playlist from a markdown file
- Mentions "Apple Music," "sync," or "add to my library" in the context of a playlist

## Prerequisites

- An **Apple Music subscription**
- **Node.js** (v18+)
- **Playwright** — install with `npm install playwright && npx playwright install chromium`

## Tools

### `sync.mjs` — Sync playlist to Apple Music

A single cross-platform script that manages playlists entirely through the Apple Music web player.

```bash
# Sync a playlist (create if needed, add tracks)
node .github/skills/apple-music-sync/sync.mjs playlists/<name>.md

# Delete and recreate (for reordering)
node .github/skills/apple-music-sync/sync.mjs playlists/<name>.md --delete-first

# Only add tracks to library (no playlist management)
node .github/skills/apple-music-sync/sync.mjs playlists/<name>.md --library-only
```

The script:
1. Parses the playlist name from the `# heading` and tracks from the markdown table
2. **Appends the 🤖 emoji** to the playlist name — all managed playlists are suffixed with this marker
3. Opens Chromium with the Apple Music web player
4. Waits for the user to sign in (persistent browser profile — only needed once)
5. Creates the playlist if it doesn't exist (or deletes and recreates with `--delete-first`)
6. Searches for each track and adds it to the playlist via the web player's context menu
7. Reports any tracks that couldn't be found or added

**Playlist safety:** The script will only ever delete or modify playlists that end with the 🤖 suffix. User-created playlists without this marker are never touched.

**Flags:**
- `--delete-first` — Delete the existing playlist before recreating it (use when reordering)
- `--library-only` — Only add tracks to the user's library without managing the playlist

## Workflow

### Step 1: Identify the Playlist

Determine which playlist markdown file to sync from the `playlists/` folder.

### Step 2: Sync to Apple Music

```bash
node .github/skills/apple-music-sync/sync.mjs playlists/<name>.md
```

The browser will open. The script uses a persistent browser profile, so if the user has previously signed in, it will detect this automatically and proceed without prompting.

If sign-in is required (first run or expired session), the script will pause and wait. Tell the user to sign in interactively in the browser window and let you know when they've signed in. Once they confirm, create the signal file to proceed (the script prints the exact path).

For reordering (delete and recreate):
```bash
node .github/skills/apple-music-sync/sync.mjs playlists/<name>.md --delete-first
```

### Step 3: Verify

Ask the user to check the playlist in Apple Music. Confirm the track count and order look correct.

## Error Handling

- If a track cannot be found in search results, the script reports it and continues with the remaining tracks
- If the playlist already exists and `--delete-first` is not set, the script adds tracks to the existing playlist
- The user may need to manually add tracks that the script couldn't find (e.g., region restrictions, name mismatches)
- If Playwright or Chromium is not installed, the script will fail with an import error — run `npm install playwright && npx playwright install chromium` to fix
