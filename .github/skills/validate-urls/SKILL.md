---
name: validate-urls
description: Validate and fix Apple Music song URLs across all playlists. Triggers a GitHub Actions workflow that checks every permalink via the Apple Music API and opens a PR to correct any stale or broken links.
---

# Validate URLs

Trigger the **Validate Playlist URLs** GitHub Actions workflow to check every Apple Music permalink across all playlists. Invalid or stale song IDs are automatically corrected, and a PR is opened with the fixes.

## When to Use This Skill

Activate this skill when the user:
- Wants to check if playlist URLs are still valid
- Says "validate URLs," "check links," or "fix broken links"
- Suspects some Apple Music permalinks may be stale or broken
- Wants to ensure playlists are ready for syncing

## How It Works

The workflow at `.github/workflows/validate-urls.yml`:
1. Parses every `playlists/*.md` file
2. For each track with an Apple Music permalink, calls the API to verify the song ID
3. If a song ID is invalid, searches the catalog for the correct track and rewrites the URL
4. If a track can't be found at all, removes the broken link (leaving the song title as plain text)
5. If any corrections are made, opens a PR with the changes

## Workflow

### To trigger validation:

```bash
gh workflow run "Validate Playlist URLs"
```

### To check the run status:

```bash
gh run list --workflow="Validate Playlist URLs" --limit=1
```

### To view the run logs:

```bash
gh run view --log <run-id>
```

## What Happens Next

- **All valid** — The workflow completes with exit code 0. Nothing to do.
- **Corrections found** — A PR is created with the title "Fix invalid Apple Music URLs". Review and merge it to trigger an automatic sync.

## Requirements

Same Apple Music API secrets as the sync workflow:
- `APPLE_MUSIC_TEAM_ID`, `APPLE_MUSIC_KEY_ID`, `APPLE_MUSIC_PRIVATE_KEY`, `APPLE_MUSIC_USER_TOKEN`

## Notes

- The validation script is at `.github/skills/apple-music-api/validate-urls.mjs`
- You can also run it locally: `node .github/skills/apple-music-api/validate-urls.mjs`
- To validate specific playlists: `node .github/skills/apple-music-api/validate-urls.mjs playlists/classic-rock.md`
