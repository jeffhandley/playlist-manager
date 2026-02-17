---
name: validate-urls
description: Validate and fix Apple Music song URLs across all playlists. Checks every permalink via the Apple Music API (if available) or web scraping, then opens a PR to correct any stale or broken links.
---

# Validate URLs

Validate all Apple Music permalinks across playlists and create a PR with corrections for any invalid or stale song IDs.

## When to Use This Skill

Activate this skill when the user:
- Wants to check if playlist URLs are still valid
- Says "validate URLs," "check links," or "fix broken links"
- Suspects some Apple Music permalinks may be stale or broken
- Wants to ensure playlists are ready for syncing

## How It Works

This skill validates Apple Music URLs using two methods (tries API first, falls back to web scraping):

### Method 1: Apple Music API (Preferred)

If Apple Music API credentials are available as environment variables:
1. Uses the validation script at `.github/skills/apple-music-api/validate-urls.mjs`
2. For each track with an Apple Music permalink, calls the API to verify the song ID
3. If a song ID is invalid, searches the catalog for the correct track and rewrites the URL
4. If a track can't be found at all, removes the broken link (leaving the song title as plain text)

**Required environment variables:**
- `APPLE_MUSIC_TEAM_ID` — Apple Developer Team ID
- `APPLE_MUSIC_KEY_ID` — MusicKit private key ID  
- `APPLE_MUSIC_PRIVATE_KEY` — Contents of the `.p8` private key file
- `APPLE_MUSIC_USER_TOKEN` — Music User Token

### Method 2: Web Scraping (Fallback)

If API credentials are not available:
1. Uses web_fetch to validate each Apple Music URL by fetching it directly
2. If a URL returns 404 or is invalid, uses web_search to find the correct song
3. Updates the URL with the correct link or removes it if the track can't be found

## Workflow

### Step 1: Check for API Credentials

First, check if the Apple Music API credentials are available:

```bash
if [ -n "$APPLE_MUSIC_TEAM_ID" ] && [ -n "$APPLE_MUSIC_KEY_ID" ] && [ -n "$APPLE_MUSIC_PRIVATE_KEY" ] && [ -n "$APPLE_MUSIC_USER_TOKEN" ]; then
  echo "Using Apple Music API"
else
  echo "API credentials not available, will use web scraping"
fi
```

### Step 2: Run Validation

**If API credentials are available:**

```bash
node .github/skills/apple-music-api/validate-urls.mjs
```

To validate specific playlists:
```bash
node .github/skills/apple-music-api/validate-urls.mjs playlists/classic-rock.md playlists/waves-and-soul.md
```

**If API credentials are not available:**

Use web_fetch and web_search tools to:
1. Read each playlist markdown file
2. Extract all Apple Music URLs
3. Validate each URL by fetching it
4. Search for corrections if needed
5. Update the markdown files with fixes

### Step 3: Review Changes

After validation completes, review the changes made to playlist files:

```bash
git diff playlists/
```

### Step 4: Create PR

If changes were made, commit and push them to create a PR.

Use the **report_progress** tool to commit and push changes. This tool:
- Commits all modified files
- Pushes to the current branch
- Updates the PR description

Provide a clear commit message and PR description including:
- How many URLs were validated
- How many were corrected vs. removed
- Which playlists were affected

## What to Report

When validation completes, report:
- **Total tracks checked** — number of tracks with URLs validated
- **Invalid URLs found** — number of stale/broken song IDs
- **Corrected** — URLs updated with new song IDs
- **Removed** — URLs removed because track couldn't be found
- **Files modified** — which playlist files were changed

If no changes were made, report: "All playlist URLs are valid!"

## Notes

- The API method is faster and more reliable than web scraping
- API credentials are typically available in CI/CD environments but may not be available locally
- The validation script exits with code 1 if changes were made (useful for automation)
- Always create a PR for review before merging validation fixes
