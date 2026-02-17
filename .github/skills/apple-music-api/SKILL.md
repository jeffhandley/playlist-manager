---
name: apple-music-api
description: Sync a playlist to Apple Music using the Apple Music REST API. Faster and more reliable than browser automation. Requires Apple Developer credentials via environment variables. Use when the user wants to save or sync a playlist to Apple Music, add a playlist to their library, or export a playlist to Apple Music.
---

# Apple Music API Sync

Sync a playlist from this repository to Apple Music using the [Apple Music REST API](https://developer.apple.com/documentation/applemusicapi). No browser automation or Playwright required — all operations are pure HTTP API calls.

## When to Use This Skill

Activate this skill when the user:
- Wants to save a playlist to Apple Music
- Asks to sync, export, or push a playlist to their library
- Wants to create an Apple Music playlist from a markdown file
- Mentions "Apple Music," "sync," or "add to my library" in the context of a playlist
- Wants a headless/automated sync (CI, GitHub Agent tasks)

**Prefer this skill over `apple-music-sync`** when environment variables are configured. Fall back to the browser-based `apple-music-sync` skill if credentials are not available.

## Prerequisites

- **Apple Developer Program** membership
- **MusicKit private key** (.p8 file) from the Apple Developer portal
- **Apple Music subscription** for the user account
- **Node.js** (v18+)

## Environment Variables

All credentials are passed as environment variables (compatible with GitHub secrets):

| Variable | Description |
|----------|-------------|
| `APPLE_MUSIC_TEAM_ID` | Your Apple Developer Team ID (10 characters) |
| `APPLE_MUSIC_KEY_ID` | Your MusicKit private key ID (10 characters) |
| `APPLE_MUSIC_PRIVATE_KEY` | Contents of your `.p8` private key file (including `BEGIN`/`END` lines) |
| `APPLE_MUSIC_USER_TOKEN` | Music User Token obtained via MusicKit JS authorization |

### Obtaining Your Music User Token

The Music User Token requires a one-time browser-based authorization flow using MusicKit JS. It lasts approximately 6 months.

1. Open any webpage that loads MusicKit JS (or use the Apple Music web player developer tools)
2. In the browser console, configure MusicKit with your Developer Token:
   ```javascript
   // Generate your developer token first (JWT signed with your .p8 key)
   const developerToken = 'your-developer-token-here';

   await MusicKit.configure({ developerToken, app: { name: 'Playlist Manager', build: '1.0' } });
   const music = MusicKit.getInstance();
   await music.authorize();
   console.log('Music User Token:', music.musicUserToken);
   ```
3. Copy the output token and store it as `APPLE_MUSIC_USER_TOKEN`
4. The token is valid for ~6 months. When it expires, repeat this process.

### Setting Up Locally

```bash
# Option 1: Export directly
export APPLE_MUSIC_TEAM_ID="XXXXXXXXXX"
export APPLE_MUSIC_KEY_ID="XXXXXXXXXX"
export APPLE_MUSIC_PRIVATE_KEY="$(cat path/to/AuthKey_XXXXXXXXXX.p8)"
export APPLE_MUSIC_USER_TOKEN="your-music-user-token"

# Option 2: Use a .env file (not committed — add to .gitignore)
```

### Setting Up for GitHub Agent Tasks

Add each variable as a repository secret in GitHub Settings → Secrets and Variables → Actions.

## Tools

### `sync.mjs` — Sync playlist to Apple Music

```bash
# Sync a playlist (create if needed, or recreate to match markdown order)
node .github/skills/apple-music-api/sync.mjs playlists/<name>.md

# Only add tracks to library (no playlist management)
node .github/skills/apple-music-api/sync.mjs playlists/<name>.md --library-only

# Rename an existing playlist
node .github/skills/apple-music-api/sync.mjs playlists/<name>.md --rename-from="Old Name"
```

The script:
1. Parses the playlist name from the `# heading` and tracks from the markdown table
2. **Appends the 🤖 emoji** to the playlist name — all managed playlists are suffixed with this marker
3. **Creates a daily backup** before any sync operation (see Backups below)
4. Resolves all track IDs from Apple Music URLs in the markdown (or falls back to catalog search)
5. Creates a fresh playlist and adds all tracks in the correct order
6. Reports any tracks that couldn't be found or added

**Playlist safety:** The script will only ever modify playlists that end with the 🤖 suffix. User-created playlists without this marker are never touched.

### Backups

Before every sync, the script creates a backup by **renaming** the existing 🤖 playlist to `<name> 🔙 (yyyy-MM-dd)`. The sync then creates a fresh 🤖 playlist from scratch.

**⚠️ Backups are immutable.** Once created, a backup must **NEVER** be modified, renamed, or deleted by automation. The `assertManaged` guard will throw an error if any operation attempts to touch a playlist containing the 🔙 marker. Only one backup per playlist per day is created; if today's backup already exists, it is skipped.

## Workflow

### Step 1: Check Environment

Verify that all required environment variables are set. If any are missing, inform the user and suggest either setting them up or falling back to the browser-based `apple-music-sync` skill.

### Step 2: Identify the Playlist

Determine which playlist markdown file to sync from the `playlists/` folder.

### Step 3: Run the Sync

```bash
node .github/skills/apple-music-api/sync.mjs playlists/<name>.md
```

The sync runs entirely via API calls — no browser window, no sign-in flow, no user interaction needed. It can be run headlessly in CI or GitHub Agent tasks.

### Step 4: Monitor Progress

The script outputs progress to stdout:
- Track resolution phase: shows each track being resolved from URL or search
- Sync phase: shows album-by-album progress as tracks are added

### Step 5: Verify

Ask the user to check the playlist in Apple Music. Confirm the track count and order look correct.

## Error Handling

- If a track cannot be found in the Apple Music catalog, the script reports it and continues with the remaining tracks
- If the Apple Music API returns rate-limiting errors (429), the script backs off and retries
- Server errors (5xx) are retried with exponential backoff
- The user may need to manually add tracks that the script couldn't find (e.g., region restrictions, name mismatches)
- If environment variables are missing, the script fails immediately with a clear error message

## Differences from Browser-Based Skill

| Feature | `apple-music-api` (this skill) | `apple-music-sync` (browser) |
|---------|-------------------------------|-------------------------------|
| Speed | Fast (API calls) | Slow (browser navigation) |
| Reliability | High (no DOM scraping) | Medium (virtual scrolling, HTTP/2 errors) |
| User interaction | None (fully automated) | Sign-in required on first use |
| Headless | Always headless | Optional `--headless` flag |
| Requirements | Apple Developer credentials | Just a browser |
| CI/CD compatible | Yes (via secrets) | No |
