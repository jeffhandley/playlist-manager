# Playlist Manager

A GitHub Copilot skill for creating and managing music playlists. Describe the mood, genre, activity, or vibe you're going for, and the skill searches for matching songs, iterates with you to refine the selection, and saves the finalized playlist to your streaming service account.

## Features

- **Song Discovery** — searches the web for songs matching your description
- **Iterative Refinement** — add, remove, or swap tracks until the playlist is perfect
- **Streaming Service Integration** — syncs playlists to Apple Music via the web player
- **Playlist Archive** — finalized playlists are saved as markdown in the `playlists/` folder

## Getting Started

This repo includes two [GitHub Copilot skills](.github/skills/) that work together:

| Skill | Description |
|-------|-------------|
| [playlist-creator](.github/skills/playlist-creator/SKILL.md) | Build and manage playlists — create new ones interactively or manage existing ones using their playlist-specific instructions |
| [apple-music-sync](.github/skills/apple-music-sync/SKILL.md) | Sync a playlist to Apple Music via the web player using Playwright — no developer enrollment or API keys needed |

Just describe what you want:

- *"Make me a chill indie folk playlist for a rainy day"*
- *"I need a high-energy workout mix with 90s hip-hop"*
- *"Sync the Hard Covers playlist to Apple Music"*

### Apple Music Setup

To save playlists to Apple Music, you need Node.js (v18+) and Playwright. The apple-music-sync skill automates the [Apple Music web player](https://music.apple.com) via Chromium — no Apple Developer enrollment, API keys, or native apps required. Works on macOS, Windows, and Linux.

```bash
npm install playwright
npx playwright install chromium
```

See the [apple-music-sync skill](.github/skills/apple-music-sync/SKILL.md) for details.

## License

[MIT](LICENSE)
