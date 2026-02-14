---
name: artist-catalog
description: Build a playlist of all studio songs by a given artist, organized by album in chronological order. Use when the user wants a complete catalog playlist for an artist, or wants all songs by an artist gathered into one playlist. Excludes live recordings, remixes, demos, and compilations by default.
---

# Artist Catalog

Build a playlist containing every studio song by a given artist, organized by album in chronological release order. The playlist includes only original studio recordings — no live versions, remixes, demos, or compilation-only tracks unless explicitly requested.

## When to Use This Skill

Activate this skill when the user:
- Wants all songs by an artist in a playlist
- Asks for a "complete discography" or "catalog" playlist
- Says "gather all studio songs" for an artist
- Wants an artist's albums collected into one playlist

## Workflow

### Phase 1: Identify the Artist

Confirm the artist name. If ambiguous (e.g., "Genesis" could be the band or Phil Collins solo), ask for clarification.

### Phase 2: Research the Discography

Use web search to find the artist's complete studio album discography:
- Search for "[artist] discography wikipedia" or "[artist] studio albums"
- Collect all studio albums in chronological release order
- Note the release year for each album
- Exclude: live albums, compilation albums, EPs (unless user requests), soundtrack-only releases, remix albums

Present the album list to the user for confirmation:
```
Found N studio albums for [Artist]:
1. Album Name (Year)
2. Album Name (Year)
...
```

Ask: **"Does this look right? Any albums to add or skip?"**

### Phase 3: Find Album Permalinks

For each confirmed album, find its Apple Music album permalink:
- Search Apple Music for "[artist] [album name]"
- Navigate to the album page and capture the permalink URL
- Format: `https://music.apple.com/us/album/{album-slug}/{albumId}`

Present the albums with their Apple Music links for the user to verify.

### Phase 4: Build the Track List

For each album permalink, visit the album page to get the exact track listing as it appears on Apple Music. This ensures:
- Track titles match Apple Music exactly (capitalization, punctuation, subtitles)
- Track order matches the album
- Only available tracks are included

Record each track with: song title, artist, album name, year, and the individual song permalink (derived from the album page).

### Phase 5: Save the Playlist

Save the playlist as a markdown file in the `playlists/` folder. The file uses **album permalink references** — each album is listed once in the link references section, and individual song links are derived during sync.

```markdown
# [Artist] — Studio Catalog

Complete studio discography for [Artist], organized by album in chronological order.

## Playlist Instructions

### Management

- The playlist is defined in this file — this is the source of truth
- Use the **artist-catalog** skill for rebuilding or updating
- Use the **apple-music-sync** skill for syncing to Apple Music
- Sync with: `node .github/skills/apple-music-sync/sync.mjs playlists/<name>.md --headless`

### Ordering

- Tracks are ordered by album release date, then by track number within each album
- Do not shuffle — the chronological album order is intentional

### Sync Strategy

- Sync adds tracks **album-at-a-time** — navigating to each album page and adding all tracks to the playlist in sequence
- This is faster and more reliable than individual song lookups

| # | Song | Artist | Album | Year | Note |
|---|------|--------|-------|------|------|
| 1 | [Track Title][1] | Artist | Album Name | Year | |
| 2 | [Track Title][2] | Artist | Album Name | Year | |
```

Use footnote-style link references for Apple Music permalinks:
```
[1]: https://music.apple.com/us/song/slug/id
[2]: https://music.apple.com/us/song/slug/id
```

### Phase 6: Sync to Apple Music

Use the apple-music-sync skill to sync the playlist:
```bash
node .github/skills/apple-music-sync/sync.mjs playlists/<artist-catalog>.md --headless
```

## Important Guidelines

### What to Include
- All tracks from standard studio album editions
- Bonus tracks only if requested by the user
- Greatest hits / best-of albums are excluded (tracks already appear on their original albums)

### What to Exclude
- Live recordings and live albums
- Remixes and remix albums
- Demo versions
- Compilation-only tracks (unless they are original studio recordings not on any album)
- Interludes, skits, and tracks under 30 seconds
- Soundtrack contributions (unless the user specifically requests them)

### Handling Variants
- If a song appears on multiple albums (e.g., remastered reissue), use the original album version
- For remastered editions: prefer the remastered version on Apple Music if available, but list the original album name and year
- For self-titled albums: use "[Artist] (Album)" in the Note column to distinguish from the artist name

### Naming Convention
- Playlist file: `playlists/<artist-slug>-catalog.md` (e.g., `playlists/nine-inch-nails-catalog.md`)
- Playlist title: `[Artist] — Studio Catalog`
