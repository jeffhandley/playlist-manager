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

Run the included authorization helper:

```bash
export APPLE_MUSIC_TEAM_ID="XXXXXXXXXX"
export APPLE_MUSIC_KEY_ID="XXXXXXXXXX"
export APPLE_MUSIC_PRIVATE_KEY="$(cat path/to/AuthKey_XXXXXXXXXX.p8)"
node .github/skills/apple-music-api/authorize.mjs
```

This opens a local web page where you sign in to Apple Music. The token is printed to stdout — copy it and store it as `APPLE_MUSIC_USER_TOKEN`. When it expires (~6 months), run `authorize.mjs` again.

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
# Sync a playlist (create if needed; on change, create a new numbered copy)
node .github/skills/apple-music-api/sync.mjs playlists/<name>.md

# Only add tracks to library (no playlist management)
node .github/skills/apple-music-api/sync.mjs playlists/<name>.md --library-only
```

The script:
1. Parses the playlist name from the `# heading` and tracks from the markdown table
2. **Appends the 🤖 emoji** to the playlist name — all managed playlists contain this marker
3. Resolves all track IDs from Apple Music URLs in the markdown (or falls back to catalog search)
4. **Skips work if nothing changed** — if the newest managed copy was built from the same tracks (matched via the `[sync:<id>]` fingerprint stamped in its description), the run is a no-op
5. Otherwise **creates a new copy** (the API cannot update an existing one). The first copy uses the clean name `<name> 🤖`; later copies are numbered `<name> 🤖 (N)` so the newest is always identifiable
6. Stamps the new copy's description with `Synced <ISO> • N tracks [sync:<id>]` **at the beginning**, so the sync date, track count, and newest copy are obvious at a glance
7. Reports any tracks that couldn't be found or added

**Playlist safety:** The script will only ever create/modify playlists that contain the 🤖 marker. User-created playlists without this marker are never touched.

### Duplicate handling (important API limitation)

The Apple Music API supports only **creating** a library playlist and **adding tracks** — it **cannot delete or rename** a library playlist, and it cannot replace/remove tracks (all return HTTP 401). Because a content change is applied by creating a *fresh* playlist, the superseded copy **cannot be removed via the API** and remains in your library.

To keep this manageable, the script uses **numbered copies** instead of mutating or backing up playlists:
- The first sync creates a clean `<name> 🤖`.
- Each subsequent content change creates the next number in the family: `<name> 🤖 (1)`, `<name> 🤖 (2)`, … The highest number is always the newest.
- Unchanged syncs are skipped entirely (fingerprint match), so numbered copies do **not** accumulate on no-op runs — only a genuine track-list change adds one.
- The `Synced <ISO> • N tracks [sync:<id>]` stamp at the **start** of the description confirms which copy is newest.

**Cleaning up:** After a change produces a numbered copy, tidy up manually in the Apple Music app (or via the browser-based `apple-music-sync` skill):
1. Delete the older copies in the family (the lower/plain-named ones).
2. Rename the newest copy to drop its ` (N)` suffix, returning it to the clean `<name> 🤖` name.

This cannot be automated through the API — deletion and rename both require the Music app / browser.

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
