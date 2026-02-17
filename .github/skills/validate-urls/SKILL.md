---
name: validate-urls
description: Validate and fix Apple Music song URLs across all playlists. Runs the validation script via the Apple Music API, corrects any stale or broken links, and creates a PR with the fixes.
---

# Validate URLs

Run the **validate-urls.mjs** script to check every Apple Music permalink across all playlists. Invalid or stale song IDs are automatically corrected, and a PR is created with the fixes.

## When to Use This Skill

Activate this skill when the user:
- Wants to check if playlist URLs are still valid
- Says "validate URLs," "check links," or "fix broken links"
- Suspects some Apple Music permalinks may be stale or broken
- Wants to ensure playlists are ready for syncing

## How It Works

The validation script at `.github/skills/apple-music-api/validate-urls.mjs`:
1. Parses every `playlists/*.md` file
2. For each track with an Apple Music permalink, calls the API to verify the song ID
3. If a song ID is invalid, searches the catalog for the correct track and rewrites the URL
4. If a track can't be found at all, removes the broken link (leaving the song title as plain text)
5. Returns exit code 1 if any corrections were made, 0 if all URLs are valid

## Workflow

### Step 1: Set Environment Variables

Ensure the following Apple Music API credentials are available as environment variables:
- `APPLE_MUSIC_TEAM_ID` — Apple Developer Team ID
- `APPLE_MUSIC_KEY_ID` — MusicKit private key ID
- `APPLE_MUSIC_PRIVATE_KEY` — Contents of the `.p8` private key file
- `APPLE_MUSIC_USER_TOKEN` — Music User Token (~6 month expiry)

If running in a GitHub Copilot agent context, these should be available from repository secrets.

### Step 2: Run the Validation Script

```bash
node .github/skills/apple-music-api/validate-urls.mjs
```

### Step 3: Create a PR if Changes Were Made

If the script exits with code 1, changes were made to playlist files. Create a PR with:
- **Title**: `Fix stale Apple Music URLs`
- **Description**: Explain that the validation script found and corrected invalid URLs
- **Branch**: Use a branch name like `validate-urls/auto-fix-YYYY-MM-DD`

The PR should include all modified `playlists/*.md` files.

## What Happens Next

- **All valid** — The script exits with code 0. No changes needed.
- **Corrections found** — The script exits with code 1 and files are modified. Create a PR for review.
- After the PR is merged, the sync workflow will automatically update Apple Music playlists.

## Running Locally

You can run the validation script locally for testing:

```bash
# Validate all playlists
export APPLE_MUSIC_TEAM_ID="..."
export APPLE_MUSIC_KEY_ID="..."
export APPLE_MUSIC_PRIVATE_KEY="$(cat path/to/AuthKey_XXXXXXXXXX.p8)"
export APPLE_MUSIC_USER_TOKEN="..."
node .github/skills/apple-music-api/validate-urls.mjs

# Validate specific playlists
node .github/skills/apple-music-api/validate-urls.mjs playlists/classic-rock.md playlists/90s-alternative-rock.md
```

## Notes

- The script modifies playlist files in place when corrections are needed
- Invalid song IDs are replaced with corrected URLs found via catalog search
- If a track cannot be found in the Apple Music catalog, its link reference is removed
- The script provides detailed output showing which URLs were corrected or removed
