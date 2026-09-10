---
name: Update WEBN playlist
description: Adds songs played at least three times per day on WEBN to the repository playlist
on:
  schedule: daily
  workflow_dispatch:
permissions:
  contents: read
  pull-requests: read
concurrency:
  group: update-webn-playlist
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
  web-fetch:
mcp-scripts:
  fetch-webn-history:
    description: Fetch WEBN track plays from the previous 24 hours
    script: |
      const stationId = 1701;
      const now = Math.floor(Date.now() / 1000);
      const cutoff = now - (24 * 60 * 60);
      const baseUrl = `https://api.iheart.com/api/v3/live-meta/stream/${stationId}/trackHistory`;
      const plays = [];
      const seenPageKeys = new Set();
      let pageKey;

      for (let page = 0; page < 200; page++) {
        const url = new URL(baseUrl);
        if (pageKey) url.searchParams.set("pageKey", pageKey);

        const response = await fetch(url, { headers: { Accept: "application/json" } });
        if (!response.ok) {
          throw new Error(`iHeart track history request failed with HTTP ${response.status}`);
        }

        const body = await response.json();
        const tracks = Array.isArray(body.data) ? body.data : [];
        let reachedCutoff = false;

        for (const track of tracks) {
          if (!Number.isFinite(track.startTime)) continue;
          if (track.startTime > now + 60) continue;
          if (track.startTime < cutoff) {
            reachedCutoff = true;
            continue;
          }

          plays.push({
            title: track.title,
            artist: track.artist,
            album: track.album || "",
            startTime: track.startTime,
            explicitLyrics: Boolean(track.explicitLyrics),
          });
        }

        const nextPageKey = body.links?.next;
        if (reachedCutoff || !nextPageKey || seenPageKeys.has(nextPageKey)) break;
        seenPageKeys.add(nextPageKey);
        pageKey = nextPageKey;
      }

      return plays;
    timeout: 180
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
    title-prefix: "[webn-playlist] "
    draft: false
    if-no-changes: ignore
    allowed-files:
      - "playlists/webn.md"
  push-to-pull-request-branch:
    target: "*"
    required-title-prefix: "[webn-playlist] "
    if-no-changes: ignore
    allowed-files:
      - "playlists/webn.md"
---

# Update the WEBN playlist

Add new songs that Cincinnati's 102.7 WEBN has played at least three times during the previous 24 hours to `playlists/webn.md`.

Follow these steps in order:

1. **Consume an existing WEBN playlist pull request before checking for additions.**
   - Use the GitHub pull request tools to list open pull requests in `${{ github.repository }}`.
   - Inspect candidate pull requests and their changed files. Find same-repository pull requests whose title starts exactly with `[webn-playlist] ` and whose changes add tracks to `playlists/webn.md`. Use the `<!-- webn-playlist-update -->` body marker as additional confirmation when present.
   - Never use a pull request from a fork.
   - If more than one pull request matches, stop and report the ambiguity without changing files.
   - If one matches, record its number and head branch, then switch the checkout to that existing head branch before continuing. Treat the version of `playlists/webn.md` on that branch as already containing represented additions so they are never added twice.
   - If none matches, continue on the default branch and create a pull request only if new songs qualify.

2. **Fetch and count the last 24 hours of WEBN airplay.**
   - Call the `fetch-webn-history` tool exactly once. It returns WEBN track plays from iHeart station 1701.
   - Group plays by artist and title using a case-insensitive, punctuation-tolerant comparison.
   - Retain only songs with at least three plays. Sort them by play count descending, then artist name, then song title.

3. **Remove tracks that must not be added.**
   - Read `playlists/webn.md` from the checked-out branch. Remove every qualifying song already represented there, using the same case-insensitive, punctuation-tolerant artist-and-title comparison.
   - Read and follow `PREFERENCES.md`. Remove blocked songs, blocked artists, and excluded genres or styles.
   - If no new songs remain, emit a noop summary and stop without creating or updating a pull request.

4. **Find verified Apple Music metadata and permalinks.**
   - For each remaining song, use web fetch to search Apple Music using its title and artist.
   - Select the matching studio recording, preferring explicit over clean when both exist.
   - Use only a verified canonical US song permalink in the form `https://music.apple.com/us/song/{slug}/{songId}`. Never guess or generate a URL.
   - If no matching `/song/` permalink can be verified, skip the song and mention it in the summary.

5. **Update only the WEBN playlist.**
   - Read `playlists/webn.md` and its Playlist Instructions again before editing.
   - Add each new song to the airplay section with its verified Song, Artist, Album, and Year metadata. Use the note `N plays in the last 24 hours`, where N is the observed count.
   - Generate each reference label with `trackReference` from `.github/skills/shared/playlist-format.mjs`; never generate labels from row positions.
   - Preserve the playlist description and do not add a track count to it.
   - Keep airplay rows ordered by observed recent airplay frequency, then artist name, then song title, and keep all rows numberless.
   - Do not change any file other than `playlists/webn.md`.

6. **Validate and publish exactly one update.**
   - Inspect `git status` and `git diff`. Stop if any file other than `playlists/webn.md` changed or if the diff contains anything except the intended track additions and reference definitions.
   - If step 1 found an existing pull request, call `push_to_pull_request_branch` with that pull request number and a concise commit message. Do not create another pull request.
   - Otherwise call `create_pull_request` with title `Add WEBN tracks played at least three times daily`, branch `automation/update-webn-playlist`, and a body listing each added song and its 24-hour play count. Include `<!-- webn-playlist-update -->` in the body.

Never sync the playlist to Apple Music or Spotify from this workflow.
