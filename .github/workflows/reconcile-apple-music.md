---
name: Reconcile Apple Music playlist edits
description: Reflects Apple Music playlist additions and removals in repository playlists
on:
  schedule: daily
  workflow_dispatch:
    inputs:
      playlist:
        description: Playlist name or markdown path to scan; leave empty to scan all playlists
        required: false
        type: string
permissions:
  contents: read
  pull-requests: read
concurrency:
  group: reconcile-apple-music
  cancel-in-progress: false
engine: copilot
strict: true
timeout-minutes: 45
checkout:
  fetch: ["*"]
  fetch-depth: 0
tools:
  cli-proxy: false
  github:
    toolsets: [pull_requests, repos]
  bash:
    - "git status"
    - "git diff:*"
mcp-scripts:
  reconcile-apple-music:
    description: Reconcile Apple Music playlist contents into repository markdown files
    inputs:
      playlist:
        description: Optional playlist name or markdown path; omit to scan all playlists
        required: false
        type: string
    run: |
      set -euo pipefail
      cd "$GITHUB_WORKSPACE"
      if [[ -n "${INPUT_PLAYLIST:-}" ]]; then
        node .github/skills/apple-music-api/reconcile.mjs --playlist "$INPUT_PLAYLIST"
      else
        node .github/skills/apple-music-api/reconcile.mjs
      fi
    env:
      APPLE_MUSIC_TEAM_ID: ${{ secrets.APPLE_MUSIC_TEAM_ID }}
      APPLE_MUSIC_KEY_ID: ${{ secrets.APPLE_MUSIC_KEY_ID }}
      APPLE_MUSIC_PRIVATE_KEY: ${{ secrets.APPLE_MUSIC_PRIVATE_KEY }}
      APPLE_MUSIC_USER_TOKEN: ${{ secrets.APPLE_MUSIC_USER_TOKEN }}
    timeout: 1800
  test-reconciliation:
    description: Run the playlist format and Apple Music reconciliation test suites
    run: node --test .github/skills/apple-music-api/reconcile.test.mjs .github/skills/apple-music-sync/parser.test.mjs .github/skills/shared/playlist-format.test.mjs
    timeout: 120
steps:
  - name: Set up Node.js
    uses: actions/setup-node@v7
    with:
      node-version: "22"
      cache: npm
  - name: Install dependencies
    run: npm ci
safe-outputs:
  create-pull-request:
    title-prefix: "[playlist-maintenance] "
    draft: false
    if-no-changes: ignore
    allowed-files:
      - "playlists/*.md"
      - "PREFERENCES.md"
  push-to-pull-request-branch:
    target: "*"
    required-title-prefix: "[playlist-maintenance] "
    if-no-changes: ignore
    allowed-files:
      - "playlists/*.md"
      - "PREFERENCES.md"
---

# Reconcile Apple Music playlist edits

Reflect user-made Apple Music playlist additions and removals in this repository.

The optional manual playlist input is `${{ github.event.inputs.playlist }}`. An empty value means all repository playlists.

Follow these steps in order:

1. **Consume an existing maintenance pull request before doing any reconciliation.**
   - Use the GitHub pull request tools to list open pull requests in `${{ github.repository }}`.
   - Find an open pull request whose title starts exactly with `[playlist-maintenance] `.
   - If more than one matches, stop and report the ambiguity without changing files.
   - If one matches, record its number and head branch, then switch the checkout to that existing head branch before continuing. Never use a pull request from a fork.
   - Do not call the reconciliation tool until this search and any branch switch are complete.

2. Call the `reconcile-apple-music` tool exactly once.
   - Pass the manual playlist input when it is non-empty.
   - Otherwise omit the playlist argument so every corresponding Apple Music playlist is scanned.
   - The tool accesses Apple Music credentials in an isolated process. Never request, print, inspect, or expose credential values.
   - The tool is authoritative for markdown changes: do not manually add, remove, or rewrite tracks.

3. Inspect `git status` and `git diff`.
   - Only `playlists/*.md` and `PREFERENCES.md` may be changed.
   - Removed songs must be absent from every playlist and listed once under `PREFERENCES.md` Blocked Songs.
   - Added songs belong only in the scanned playlist and must have Apple Music `/song/` permalinks.
   - If there are no changes, emit a noop summary and stop.

4. Call the `test-reconciliation` tool exactly once.
   - If tests fail, do not create or update a pull request. Report the failure.

5. Publish exactly one maintenance update.
   - If step 1 found an existing marker pull request, use `push_to_pull_request_branch` with its pull request number and a concise commit message. Do not create another pull request.
   - Otherwise use `create_pull_request` with the title `Sync Apple Music playlist edits`, branch name `automation/reconcile-apple-music`, and a body summarizing additions, removals, and affected files.
   - Include `<!-- apple-music-playlist-maintenance -->` in a newly created pull request body as an additional machine-readable marker.

Never sync repository markdown back to Apple Music in this workflow. Apple Music is the source of truth for this reconciliation run.
