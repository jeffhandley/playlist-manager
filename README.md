# Playlist Manager

A GitHub Copilot skill for creating music playlists. Describe the mood, genre, activity, or vibe you're going for, and the skill searches for matching songs, iterates with you to refine the selection, and saves the finalized playlist to your streaming service account.

## Features

- **Song Discovery** — searches the web for songs matching your description
- **Iterative Refinement** — add, remove, or swap tracks until the playlist is perfect
- **Streaming Service Integration** — saves the playlist directly to your account (Apple Music supported)
- **Playlist Archive** — finalized playlists are saved as markdown in the `playlists/` folder

## Getting Started

This repo includes a [GitHub Copilot skill](.github/skills/playlist-creator/SKILL.md) that activates when you ask to create a playlist. Just describe what you want:

- *"Make me a chill indie folk playlist for a rainy day"*
- *"I need a high-energy workout mix with 90s hip-hop"*
- *"Find classic songs that got heavy metal covers and pair them together"*

### Apple Music Setup

To save playlists to Apple Music, you need the [epheterson/mcp-applemusic](https://github.com/epheterson/mcp-applemusic) MCP server configured. See the [skill instructions](.github/skills/playlist-creator/SKILL.md#apple-music) for setup details.

## Playlists

| Playlist | Description |
|----------|-------------|
| [Hard Covers](playlists/hardcovers.md) | 70s/80s/90s chart hits paired with their hard rock, metal, and industrial covers |

## License

[MIT](LICENSE)
