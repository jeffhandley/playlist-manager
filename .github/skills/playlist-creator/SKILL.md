---
name: playlist-creator
description: Create and manage music playlists. Build new playlists by searching for songs, or manage existing playlists in the playlists/ folder. Use when the user wants to build, modify, reorder, or manage a playlist. Each playlist markdown file may contain its own instructions.
---

# Playlist Creator

Create and manage music playlists. Build new playlists by searching the web for songs that match a description, or manage existing playlists defined as markdown files in the `playlists/` folder.

## When to Use This Skill

Activate this skill when the user:
- Wants to create a new music playlist
- Describes a mood, theme, activity, or vibe and wants song suggestions
- Asks for song recommendations to build a playlist
- Wants to modify, reorder, or manage an existing playlist
- Mentions a playlist by name (e.g., "Hard Covers")
- Mentions "playlist," "mix," "songs for," "tracks for," or similar music curation language

## Workflow

Follow these phases in order. Do not skip ahead.

### Phase 1: Gather Playlist Description

Ask the user to describe what they want. Gather details such as:
- **Mood or vibe**: e.g., chill, energetic, melancholy, uplifting
- **Activity or occasion**: e.g., workout, road trip, dinner party, studying
- **Genre preferences**: e.g., indie rock, jazz, hip-hop, classical
- **Era or decade**: e.g., 80s, 90s, modern, timeless
- **Artists they like**: for reference points
- **Number of songs**: how long should the playlist be (suggest 15-25 if not specified)
- **Any songs to exclude**: artists or styles to avoid

If the user provides a brief description, that's sufficient to get started. You do not need every detail before proceeding.

### Phase 2: Search for Songs

Use web search to find songs that match the user's description. Search for:
- "best [mood/genre] songs for [activity]"
- "songs like [artist] for [mood]"
- "[decade] [genre] playlist essentials"
- Curated playlist recommendations from music publications

Build a candidate list of **20-30 songs** (more than the target count) to give room for refinement.

Present the proposed playlist to the user as a numbered list with:
- Song title
- Artist name
- A brief note on why it fits (1 sentence max)

### Phase 3: Iterate and Refine

Ask the user for feedback on the proposed playlist:
- Which songs to remove
- Which songs to keep
- Whether to add more songs in a particular style
- Whether to replace specific tracks
- Any adjustments to the overall direction

Repeat this cycle until the user is satisfied. When presenting revisions, show the full updated playlist each time so the user can see the complete picture.

### Phase 4: Lock In and Save

When the user confirms they are happy with the playlist, explicitly confirm the final track list. Present the complete, final playlist and ask: **"Are you ready to lock this in?"**

Do not proceed until the user confirms.

Once confirmed, save the playlist as a markdown file in the `playlists/` folder. Use a table format:

```markdown
# Playlist Name

Brief description of the playlist.

| # | Song | Artist | Note |
|---|------|--------|------|
| 1 | Song Title | Artist Name | Brief note |
```

## Playlist-Specific Instructions

Playlist markdown files in `playlists/` may contain a `## Playlist Instructions` section with rules specific to that playlist. **Always read the target playlist's markdown file before making changes.**

When the user refers to an existing playlist by name:
1. Find the corresponding markdown file in `playlists/`
2. Read the entire file, including any `## Playlist Instructions` section
3. Follow those instructions for all operations — adding songs, removing songs, reordering, syncing, and cleanup

Playlist-specific instructions take precedence over the general guidelines below. Examples of what they may define:
- Pairing or grouping rules (e.g., each original must be followed by its cover)
- Genre constraints beyond the playlist description
- Track ordering and reordering requirements
- Cleanup rules for tracks that can't be found on a streaming service
- Management workflow (which skills to delegate to, how to regenerate sync scripts)

## Important Guidelines

### Song Search Quality
- Prioritize well-known, highly-regarded songs that genuinely fit the description
- Include a mix of popular and deeper cuts when appropriate
- Consider the flow and sequencing of the playlist — transitions between songs matter
- Avoid adding filler tracks just to reach a target count

### Iteration
- Be responsive to feedback — if the user says "more upbeat," shift the entire playlist direction
- When replacing tracks, suggest specific alternatives rather than removing without replacement
- Show the complete playlist after each round of changes, not just the diffs
