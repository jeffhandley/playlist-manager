# Copilot Instructions

This repository manages music playlists as markdown files in the `playlists/` folder. Playlists are automatically synced to Apple Music when merged to `main`.

## Creating and Editing Playlists

When asked to create or modify a playlist, use the **playlist-creator** skill (`.github/skills/playlist-creator/SKILL.md`). Follow its workflow phases — especially **Phase 4: Harvest Apple Music Permalinks**.

### Apple Music URL Requirements

**Every track must have a verified Apple Music permalink.** Do NOT generate URLs from memory or training data — they will be stale and broken.

To get valid permalinks:
1. **Web search** for each track on Apple Music: search `site:music.apple.com "{song title}" "{artist}"`
2. **Fetch the search results page** to extract the actual URL
3. URLs must match the format: `https://music.apple.com/us/song/{slug}/{songId}`
4. If a track cannot be verified on Apple Music, include it without a link and add a note

### Artist Catalog Playlists

For complete artist discography playlists, use the **artist-catalog** skill (`.github/skills/artist-catalog/SKILL.md`). It produces chronologically ordered track listings with Apple Music permalinks scraped from album pages.

## Playlist File Format

Playlists use markdown tables with footnote-style link references:

```markdown
# Playlist Name

Description of the playlist.

| # | Song | Artist | Album | Year | Note |
|---|------|--------|-------|------|------|
| 1 | [Song Title][1] | Artist Name | Album Name | 2024 | |
| 2 | [Song Title][2] | Artist Name | Album Name | 2024 | |

[1]: https://music.apple.com/us/song/song-slug/123456789
[2]: https://music.apple.com/us/song/song-slug/987654321
```

## PR Workflow

When creating a new playlist or updating an existing one:
1. Create a branch and add/edit the playlist markdown file in `playlists/`
2. Open a PR for review
3. Iterate on feedback — re-read the playlist file and apply changes using the playlist-creator skill
4. Once merged to `main`, the GitHub Action automatically syncs changed playlists to Apple Music

## Preferences

Always check `PREFERENCES.md` before adding tracks. It lists blocked songs and artists that must never be included in any playlist.

## Security — Secrets

**NEVER include secrets, API keys, tokens, or private key material in any file, commit, PR, or comment.** This includes:
- Apple Music private keys (`.p8` file contents)
- Music User Tokens
- Team IDs and Key IDs
- Any `APPLE_MUSIC_*` environment variable values

Secrets are stored exclusively in **GitHub repository secrets** and injected into workflows via `${{ secrets.* }}`. If a user shares a secret value in conversation, do not echo it back or write it to any file. If you encounter what appears to be a leaked secret, alert the user immediately.

## Syncing and Validation

Two GitHub Actions workflows are available and can be triggered on request:

- **Sync Playlists** — Use the **sync-playlists** skill to sync one or all playlists to Apple Music via the API. Runs automatically on push to `main`, or trigger manually with `gh workflow run "Sync Playlists to Apple Music"`.

For playlist validation:

- **Validate URLs** — Use the **validate-urls** skill to check all Apple Music permalinks and fix stale/broken ones. This is an agent skill that runs the validation script and creates a PR with corrections. Uses the API if credentials are available, falls back to web scraping if not.

## Available Skills

| Skill | Purpose |
|-------|---------|
| **playlist-creator** | Create or edit playlists with web-scraped Apple Music URLs |
| **artist-catalog** | Build complete artist discography playlists |
| **sync-playlists** | Trigger Apple Music sync via GitHub Actions |
| **validate-urls** | Validate and fix Apple Music permalinks (agent skill) |
| **apple-music-sync** | Local browser-based sync (Playwright) |
| **apple-music-api** | API-based sync tools and utilities |

## Managed Playlist Marker

All synced playlists get a 🤖 emoji appended to their name in Apple Music. Backup playlists use a 🔙 marker. These markers are managed by the sync tools — do not include them in playlist markdown headings.
