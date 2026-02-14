# Hard Covers

Classic chart hits from the 70s, 80s, and 90s paired with their harder rock, metal, and industrial cover versions. Each original is immediately followed by its heavier counterpart.

## Playlist Instructions

This playlist is built around **original/cover pairings**. Follow these rules when adding, removing, or syncing tracks.

### Management

- The playlist is defined in this file (`playlists/hardcovers.md`) — this is the source of truth
- Use the **playlist-creator** skill for searching and curating new songs to add
- Use the **apple-music-sync** skill for syncing to Apple Music
- For any modifications (adding, removing, reordering):
  1. Update this file first
  2. Sync to Apple Music: `node .github/skills/apple-music-sync/sync.mjs playlists/hardcovers.md`
  3. For reordering, delete and recreate: `node .github/skills/apple-music-sync/sync.mjs playlists/hardcovers.md --delete-first`

### Pairing Rules

- Each entry is a pair: an original song followed by one or more heavier cover versions
- An original may have **multiple covers** — that's encouraged
- When syncing to a streaming service, if a cover is unavailable, keep the original only if **at least one other cover** of that song is present
- If no covers of an original can be added, **remove the original too** — don't leave unpaired tracks
- Before removing a pairing, search for alternative covers by other artists
- Report any removed pairings and the reason (e.g., "not available on Apple Music")
- New additions should follow the same pattern: a chart hit from the 70s, 80s, or 90s paired with a harder rock, metal, or industrial cover

### Ordering

- Songs are grouped by pairing: the original comes first, followed by its cover(s) in chronological order (earliest cover first)
- The **order of the groups** is randomized to give a sense of variety throughout the playlist
- When the user asks to "reorder" the playlist, shuffle the group order randomly while preserving the original-then-covers sequence within each group
- After reordering, renumber all rows sequentially starting from 1
- Update this markdown file to reflect the new order, then sync to Apple Music with `--delete-first` if requested

| # | Song | Artist | Note |
|---|------|--------|------|
| 1 | [Live and Let Die][1] | Paul McCartney & Wings | 70s Bond theme |
| 2 | [Live and Let Die][2] | Guns N' Roses | Hard rock concert staple |
| 3 | [House of the Rising Sun][3] | The Animals | 60s/70s folk-rock standard |
| 4 | [House of the Rising Sun][4] | Five Finger Death Punch | Modern metal overhaul |
| 5 | [Stripped][5] | Depeche Mode | 80s synthpop |
| 6 | [Stripped][6] | Rammstein | Pounding Teutonic industrial metal |
| 7 | [Another Brick in the Wall][7] | Pink Floyd | 70s prog-rock anthem |
| 8 | [Another Brick in the Wall][8] | Korn | Down-tuned nu-metal spin |
| 9 | [Smooth Criminal][9] | Michael Jackson | 80s pop perfection |
| 10 | [Smooth Criminal][10] | Alien Ant Farm | Nu-metal energy |
| 11 | [Imagine][11] | John Lennon | Gentle 70s piano ballad |
| 12 | [Imagine][12] | A Perfect Circle | Brooding alt-metal reimagining |
| 13 | [I'm Your Boogie Man][13] | KC and the Sunshine Band | 70s disco hit |
| 14 | [I'm Your Boogie Man][14] | White Zombie | Horror-industrial rework |
| 15 | [Sweet Dreams (Are Made of This)][15] | Eurythmics | Synth-pop chart-topper |
| 16 | [Sweet Dreams (Are Made of This)][16] | Marilyn Manson | Quintessential industrial cover |
| 17 | [Faith][17] | George Michael | 80s pop hit |
| 18 | [Faith][18] | Limp Bizkit | Rap-metal rework |
| 19 | [The Sound of Silence][19] | Simon & Garfunkel | Iconic folk original |
| 20 | [The Sound of Silence][20] | Disturbed | Thunderous dramatic reimagining |
| 21 | [Got the Time][21] | Joe Jackson | 70s new wave punk energy |
| 22 | [Got the Time][22] | Anthrax | Tight thrash metal |
| 23 | [Behind Blue Eyes][23] | The Who | 70s rock ballad classic |
| 24 | [Behind Blue Eyes][24] | Limp Bizkit | Nu-metal emotional rework |
| 25 | [Shout][25] | Tears for Fears | 80s new wave anthem |
| 26 | [Shout][26] | Disturbed | Aggressive metal take |
| 27 | [Bad Company][27] | Bad Company | 70s classic rock anthem |
| 28 | [Bad Company][28] | Five Finger Death Punch | Muscular modern metal |
| 29 | [Land of Confusion][29] | Genesis | 80s art-pop chart hit |
| 30 | [Land of Confusion][30] | Disturbed | Pounding industrial metal |
| 31 | [Cars][31] | Gary Numan | 70s synthpop pioneer |
| 32 | [Cars][32] | Fear Factory | Industrial metal with Numan guest vocals |
| 33 | [Whiskey in the Jar][33] | Thin Lizzy | 70s rock classic |
| 34 | [Whiskey in the Jar][34] | Metallica | Metal anthem |
| 35 | [It's a Sin][35] | Pet Shop Boys | 80s synthpop classic |
| 36 | [It's a Sin][36] | Ghost | Theatrical heavy metal |
| 37 | [Summer Breeze][37] | Seals & Crofts | Breezy 70s folk rock |
| 38 | [Summer Breeze][38] | Type O Negative | Gothic doom-metal transformation |
| 39 | [Get Down, Make Love][39] | Queen | 70s rock deep cut |
| 40 | [Get Down, Make Love][40] | Nine Inch Nails | Abrasive industrial reimagining |
| 41 | [Blue Monday][41] | New Order | 80s synthpop landmark |
| 42 | [Blue Monday][42] | Orgy | Industrial/glam metal crunch |
| 43 | [Lay, Lady, Lay][43] | Bob Dylan | 70s folk classic |
| 44 | [Lay Lady Lay][44] | Ministry | Industrial powerhouse remake |
| 45 | [Gone Away][45] | The Offspring | 90s punk rock ballad |
| 46 | [Gone Away][46] | Five Finger Death Punch | Heavy melancholic metal |
| 47 | [Turn the Page][47] | Bob Seger | Mellow 70s rock ballad |
| 48 | [Turn the Page][48] | Metallica | Dark, crunching metal version |
| 49 | [Careless Whisper][49] | George Michael | 80s pop sax classic |
| 50 | [Careless Whisper][50] | Seether | Post-grunge guitar rework |


[1]: https://music.apple.com/us/song/1689817361
[2]: https://music.apple.com/us/song/1440896048
[3]: https://music.apple.com/us/song/1440743961
[4]: https://music.apple.com/us/song/1853954147
[5]: https://music.apple.com/us/song/1174246889
[6]: https://music.apple.com/us/song/1456593977
[7]: https://music.apple.com/us/song/1065975638
[8]: https://music.apple.com/us/song/436138306
[9]: https://music.apple.com/us/song/159294551
[10]: https://music.apple.com/us/song/1440762729
[11]: https://music.apple.com/us/song/1440853776
[12]: https://music.apple.com/us/song/1440875188
[13]: https://music.apple.com/us/song/27496369
[14]: https://music.apple.com/us/song/1440905491
[15]: https://music.apple.com/us/song/303097827
[16]: https://music.apple.com/us/song/1440747077
[17]: https://music.apple.com/us/song/282658468
[18]: https://music.apple.com/us/song/1440869804
[19]: https://music.apple.com/us/song/1445669342
[20]: https://music.apple.com/us/song/1006937459
[21]: https://music.apple.com/us/song/1440917806
[22]: https://music.apple.com/us/song/1440849615
[23]: https://music.apple.com/us/song/1434897600
[24]: https://music.apple.com/us/song/1440874577
[25]: https://music.apple.com/us/song/1440813509
[26]: https://music.apple.com/us/song/1030601036
[27]: https://music.apple.com/us/song/968637160
[28]: https://music.apple.com/us/song/1849239970
[29]: https://music.apple.com/us/song/396483791
[30]: https://music.apple.com/us/song/1030228543
[31]: https://music.apple.com/us/song/251652727
[32]: https://music.apple.com/us/song/214470187
[33]: https://music.apple.com/us/song/1444118604
[34]: https://music.apple.com/us/song/579370556
[35]: https://music.apple.com/us/song/1318903989
[36]: https://music.apple.com/us/song/1861930282
[37]: https://music.apple.com/us/song/13545321
[38]: https://music.apple.com/us/song/214401985
[39]: https://music.apple.com/us/song/1440628282
[40]: https://music.apple.com/us/song/1440941593
[41]: https://music.apple.com/us/song/264135997
[42]: https://music.apple.com/us/song/302196515
[43]: https://music.apple.com/us/song/177981171
[44]: https://music.apple.com/us/song/366366151
[45]: https://music.apple.com/us/song/1440901678
[46]: https://music.apple.com/us/song/1848984946
[47]: https://music.apple.com/us/song/turn-the-page-live-in-detroit-1975/1422628864
[48]: https://music.apple.com/us/song/579370550
[49]: https://music.apple.com/us/song/429945616
[50]: https://music.apple.com/us/song/1440747693
