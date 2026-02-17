# Playlist URL Validation Instructions

## Overview

This document describes how to validate Apple Music URLs in playlists while excluding specific playlists.

## What Was Done

1. Enhanced the `Validate Playlist URLs` workflow to accept an `exclude_playlists` input parameter
2. Updated the workflow to filter out excluded playlists before validation
3. Updated the validate-urls skill documentation

## How to Run Validation

### Using GitHub CLI

To validate all playlists EXCEPT `90s-alternative-rock.md` and `hardcovers.md`:

```bash
gh workflow run "Validate Playlist URLs" \
  -f exclude_playlists="90s-alternative-rock.md,hardcovers.md"
```

To validate all playlists without exclusions:

```bash
gh workflow run "Validate Playlist URLs"
```

### Using GitHub Web UI

1. Go to the repository on GitHub
2. Click on "Actions" tab
3. Select "Validate Playlist URLs" workflow from the left sidebar
4. Click "Run workflow" button
5. (Optional) In the "exclude_playlists" field, enter comma-separated filenames to exclude
6. Click "Run workflow"

## What Happens Next

The workflow will:
1. Validate all specified playlists
2. Check each Apple Music URL against the Apple Music API  
3. Correct any invalid or stale song IDs
4. Automatically create a PR with the corrections if any are found

## Checking Workflow Status

```bash
# List recent runs
gh run list --workflow="Validate Playlist URLs" --limit=5

# View specific run logs
gh run view <run-id> --log
```

## Example: Current Task

To validate all playlists except the two specified by this task:

```bash
gh workflow run "Validate Playlist URLs" \
  -f exclude_playlists="90s-alternative-rock.md,hardcovers.md"
```

This will validate all remaining playlists in the playlists/ directory.

## Requirements

The workflow requires the following repository secrets to be configured:
- `APPLE_MUSIC_TEAM_ID`
- `APPLE_MUSIC_KEY_ID`
- `APPLE_MUSIC_PRIVATE_KEY`
- `APPLE_MUSIC_USER_TOKEN`
