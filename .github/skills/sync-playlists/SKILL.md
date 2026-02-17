---
name: sync-playlists
description: Trigger Apple Music playlist syncing via GitHub Actions. Use when the user wants to sync one or all playlists to Apple Music without doing it locally. Can sync a specific playlist or all playlists at once.
---

# Sync Playlists

Trigger the **Sync Playlists to Apple Music** GitHub Actions workflow to sync playlist changes to Apple Music via the REST API. This runs in CI — no local setup or Apple Music sign-in needed.

## When to Use This Skill

Activate this skill when the user:
- Wants to sync a playlist to Apple Music remotely (not locally)
- Says "sync all playlists" or "push playlists to Apple Music"
- Wants to trigger the sync workflow manually
- Asks to re-sync after making playlist edits

## How It Works

The workflow at `.github/workflows/sync-playlists.yml` has two triggers:
1. **Automatic (push to main)** — syncs only changed `playlists/*.md` files
2. **Manual (workflow_dispatch)** — sync a specific playlist or all playlists

## Workflow

### To sync all playlists:

```bash
gh workflow run "Sync Playlists to Apple Music"
```

### To sync a specific playlist:

```bash
gh workflow run "Sync Playlists to Apple Music" -f playlist="playlists/<name>.md"
```

### To check the run status:

```bash
gh run list --workflow="Sync Playlists to Apple Music" --limit=1
```

### To view the run logs:

```bash
gh run view --log <run-id>
```

## Requirements

The following secrets must be configured in the repository:
- `APPLE_MUSIC_TEAM_ID` — Apple Developer Team ID
- `APPLE_MUSIC_KEY_ID` — MusicKit private key ID
- `APPLE_MUSIC_PRIVATE_KEY` — Contents of the `.p8` private key file
- `APPLE_MUSIC_USER_TOKEN` — Music User Token (~6 month expiry)

## Notes

- Syncing is done via the Apple Music REST API (`.github/skills/apple-music-api/sync.mjs`), not browser automation
- Each playlist is backed up before sync (renamed with 🔙 marker)
- Playlists are suffixed with 🤖 in Apple Music — the markdown heading should NOT include this marker
- The sync workflow also runs automatically when playlist files are pushed to `main`
