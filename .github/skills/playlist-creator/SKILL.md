---
name: playlist-creator
description: Create music playlists by searching for songs matching user descriptions, iterating to refine the playlist, then saving it to a streaming service. Supports Apple Music. Use when the user wants to build a playlist, find songs for a mood/theme/activity, or create a mix of tracks and save it to their music account.
---

# Playlist Creator

Create music playlists by searching the web for songs that match a description, iterating with the user to refine the selection, and then saving the finalized playlist to their streaming service account.

## When to Use This Skill

Activate this skill when the user:
- Wants to create a new music playlist
- Describes a mood, theme, activity, or vibe and wants song suggestions
- Asks for song recommendations to build a playlist
- Wants to save a curated list of songs to Apple Music or another streaming service
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

### Phase 4: Lock In the Playlist

When the user confirms they are happy with the playlist, explicitly confirm the final track list. Present the complete, final playlist and ask: **"Are you ready to lock this in?"**

Do not proceed to the next phase until the user confirms.

### Phase 5: Select Streaming Service

Ask the user which streaming service they want to save the playlist to. Currently supported:
- **Apple Music**

If the user selects a service that is not yet supported, let them know it's not available yet and offer Apple Music as the current option.

### Phase 6: Connect to Streaming Service

#### Apple Music

Use the Apple Music MCP tools to connect to the user's account. The connection requires the `epheterson/mcp-applemusic` MCP server to be configured with API access.

##### Prerequisites

Before using this skill, the user must complete the following one-time setup:

1. **Get a MusicKit key** from the [Apple Developer Portal → Keys](https://developer.apple.com/account/resources/authkeys/list):
   - Click **+** to create a new key
   - Name it anything, check **MusicKit**, click Continue → Register
   - **Download the `.p8` file** (this is a one-time download — save it carefully)
   - Note the **Key ID** (10 characters) and **Team ID** (from [Membership](https://developer.apple.com/account/#!/membership))

2. **Install and configure the MCP server**:
   ```bash
   git clone https://github.com/epheterson/mcp-applemusic.git
   cd mcp-applemusic
   python3 -m venv venv && source venv/bin/activate
   pip install -e .
   ```

3. **Place the key and create config**:
   ```bash
   mkdir -p ~/.config/applemusic-mcp
   cp ~/Downloads/AuthKey_XXXXXXXXXX.p8 ~/.config/applemusic-mcp/
   ```

   Create `~/.config/applemusic-mcp/config.json`:
   ```json
   {
     "team_id": "YOUR_TEAM_ID",
     "key_id": "YOUR_KEY_ID",
     "private_key_path": "~/.config/applemusic-mcp/AuthKey_XXXXXXXXXX.p8"
   }
   ```

4. **Generate tokens and authorize**:
   ```bash
   applemusic-mcp generate-token   # Creates developer token (valid 180 days)
   applemusic-mcp authorize        # Opens browser for Apple Music user authorization
   applemusic-mcp status           # Verify everything is connected
   ```

If the user has not completed this setup, walk them through these steps before proceeding.

##### Verify Connection

**Verify the connection by listing the user's existing playlists:**

| Tool | Parameters |
|------|------------|
| `playlist` | `{ "action": "list" }` |

Present the list of existing playlists to the user. This serves two purposes:
1. **Confirms the connection is working** — the user can see their own playlists
2. **Helps avoid name conflicts** — the user can see what playlist names are already taken

Then ask the user to **name the new playlist**. Suggest a name based on the theme/description if helpful, but let the user decide.

### Phase 7: Create the Playlist

Create the playlist and add all tracks:

**Step 1: Create the empty playlist**

| Tool | Parameters |
|------|------------|
| `playlist` | `{ "action": "create", "name": "<playlist name>", "description": "<brief description based on the theme>" }` |

**Step 2: Add each track to the playlist**

For each song in the finalized playlist, add it using the track name and artist:

| Tool | Parameters |
|------|------------|
| `playlist` | `{ "action": "add", "playlist": "<playlist name>", "track": "<song title>", "artist": "<artist name>" }` |

Add tracks one at a time. If a track cannot be found in the Apple Music catalog, note it and continue with the remaining tracks. After all tracks have been processed, report any that could not be added.

### Phase 8: Confirm Playlist Creation

After all tracks are added, verify the playlist was created successfully:

**Step 1: List all playlists to confirm the new one appears**

| Tool | Parameters |
|------|------------|
| `playlist` | `{ "action": "list" }` |

Show the user that their new playlist now appears in the list.

**Step 2: Show the playlist contents**

| Tool | Parameters |
|------|------------|
| `playlist` | `{ "action": "tracks", "playlist": "<playlist name>" }` |

Present the final playlist contents to the user, confirming which tracks were successfully added. If any tracks were skipped, summarize them and suggest alternatives if possible.

**Step 3: Celebrate!**

Let the user know their playlist is ready to enjoy. 🎶

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

### Error Handling
- If the Apple Music MCP tools are not available, inform the user that the streaming service connection requires the `epheterson/mcp-applemusic` MCP server to be installed and configured (see Phase 6 prerequisites)
- If authentication fails (401 Unauthorized), instruct the user to run `applemusic-mcp authorize` to refresh their user token
- If the developer token has expired (valid for 180 days), instruct the user to run `applemusic-mcp generate-token` to create a new one
- If a track cannot be found in Apple Music, note the song title and artist that couldn't be matched, and continue with the rest
- If playlist creation fails, provide the error details and suggest troubleshooting steps
- If the connection to Apple Music cannot be established, present the finalized playlist as a text list the user can manually recreate

### Streaming Service Extensibility
- The skill is designed to support additional streaming services in the future
- When new services are added, the Phase 5 selection and Phase 6-8 service-specific steps will expand
- The song search and curation phases (1-4) are service-agnostic and remain unchanged
