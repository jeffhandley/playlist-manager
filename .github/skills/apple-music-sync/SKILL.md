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
# Sync a playlist (create if needed, or reorder existing to match markdown)
node .github/skills/apple-music-sync/sync.mjs playlists/<name>.md [--headless]

# Rename an existing playlist (old name → new name from markdown heading)
node .github/skills/apple-music-sync/sync.mjs playlists/<name>.md --rename-from="Old Name" [--headless]

# Only add tracks to library (no playlist management)
node .github/skills/apple-music-sync/sync.mjs playlists/<name>.md --library-only [--headless]
```

The script:
1. Parses the playlist name from the `# heading` and tracks from the markdown table
2. **Appends the 🤖 emoji** to the playlist name — all managed playlists are suffixed with this marker
3. **Creates a daily backup** before any sync operation (see Backups below)
4. Opens Chromium with the Apple Music web player
5. Waits for the user to sign in (persistent browser profile — only needed once)
6. If the playlist doesn't exist, creates it and adds all tracks
7. If the playlist exists, compares current order to the markdown and fixes any mismatches by deleting out-of-sync tracks and re-adding them in the correct order
8. Reports any tracks that couldn't be found or added

**Playlist safety:** The script will only ever modify playlists that end with the 🤖 suffix. User-created playlists without this marker are never touched.

### Backups

Before every sync, the script creates a backup by **renaming** the existing 🤖 playlist to `<name> 🔙 (yyyy-MM-dd)`. This preserves all tracks and the description. The sync then creates a fresh 🤖 playlist from scratch.

**⚠️ Backups are immutable.** Once created, a backup must **NEVER** be modified, renamed, or deleted by automation. The `assertManaged` guard will throw an error if any operation attempts to touch a playlist containing the 🔙 marker. Only one backup per playlist per day is created; if today's backup already exists, it is skipped.

**Flags:**
- `--rename-from="Old Name"` — Rename an existing playlist. The old name is looked up in Apple Music; the new name comes from the markdown `# heading`.
- `--library-only` — Only add tracks to the user's library without managing the playlist
- `--headless` — Run in headless browser mode (no visible window)

## Workflow

### Step 1: Identify the Playlist

Determine which playlist markdown file to sync from the `playlists/` folder.

### Step 2: Sync to Apple Music

```bash
node .github/skills/apple-music-sync/sync.mjs playlists/<name>.md [--headless]
```

The browser will open. The script uses a persistent browser profile, so if the user has previously signed in, it will detect this automatically and proceed without prompting.

If sign-in is required (first run or expired session), the script will pause and wait. Tell the user to sign in interactively in the browser window and let you know when they've signed in. Once they confirm, create the signal file to proceed (the script prints the exact path).

The sync will automatically compare the existing playlist (if any) to the markdown and fix any mismatches — deleting out-of-sync tracks and re-adding them in the correct order. If the playlist doesn't exist, it will be created.

For renaming (uses the Edit dialog on the playlist page):
```bash
node .github/skills/apple-music-sync/sync.mjs playlists/<name>.md --rename-from="Old Name" [--headless]
```

### Step 3: Verify

Ask the user to check the playlist in Apple Music. Confirm the track count and order look correct.

## Error Handling

- If a track cannot be found in search results, the script reports it and continues with the remaining tracks
- If the playlist already exists, the script compares it to the markdown and fixes any mismatches
- The user may need to manually add tracks that the script couldn't find (e.g., region restrictions, name mismatches)
- If Playwright or Chromium is not installed, the script will fail with an import error — run `npm install playwright && npx playwright install chromium` to fix
