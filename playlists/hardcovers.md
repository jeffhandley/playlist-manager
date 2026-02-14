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

| # | Song | Artist | Album | Year | Note |
|---|------|--------|-------|------|------|
| 1 | [Live and Let Die][1] | Paul McCartney | Pure McCartney (Deluxe Edition) | 1978 | 70s Bond theme |
| 2 | [Live and Let Die][2] | Guns N' Roses | Use Your Illusion I | 1991 | Hard rock concert staple |
| 3 | [House of the Rising Sun][3] | The Animals | The Animals (Bonus Track) | 1964 | 60s/70s folk-rock standard |
| 4 | [House of the Rising Sun][4] | Five Finger Death Punch | The Wrong Side of Heaven and the Righteous Side of Hell, Vol. 2 | 2013 | Modern metal overhaul |
| 5 | [Stripped][5] | Depeche Mode | The Singles 86-98 | 1986 | 80s synthpop |
| 6 | [Stripped][6] | Rammstein | Raritäten (1994 - 2012) | 1998 | Pounding Teutonic industrial metal |
| 7 | [Another Brick In the Wall, Pt. 2][7] | Pink Floyd | The Wall | 1979 | 70s prog-rock anthem |
| 8 | [Another Brick in the Wall, Pt. 1, 2, 3 (Pink Floyd Cover)][8] | Korn | The Essential Korn | 2004 | Down-tuned nu-metal spin |
| 9 | [Smooth Criminal][9] | Michael Jackson | The Essential Michael Jackson | 1987 | 80s pop perfection |
| 10 | [Smooth Criminal][10] | Alien Ant Farm | ANThology | 2001 | Nu-metal energy |
| 11 | [Imagine][11] | John Lennon | Imagine | 1971 | Gentle 70s piano ballad |
| 12 | [Imagine][12] | A Perfect Circle | Three Sixty (Deluxe Edition) | 2013 | Brooding alt-metal reimagining |
| 13 | [I'm Your Boogie Man][13] | KC and the Sunshine Band | KC and the Sunshine Band, Pt. 3...And More | 1976 | 70s disco hit |
| 14 | [I'm Your Boogie Man][14] | White Zombie | Past, Present & Future | 2003 | Horror-industrial rework |
| 15 | [Sweet Dreams (Are Made of This)][15] | Eurythmics | Ultimate Collection (Remastered) | 1983 | Synth-pop chart-topper |
| 16 | [Sweet Dreams (Are Made of This)][16] | Marilyn Manson | Lest We Forget: The Best of Marilyn Manson | 1994 | Quintessential industrial cover |
| 17 | [Faith][17] | George Michael | Twenty Five | 1987 | 80s pop hit |
| 18 | [Faith][18] | Limp Bizkit | Three Dollar Bill, Y'all | 1997 | Rap-metal rework |
| 19 | [The Sound of Silence][19] | Simon & Garfunkel | Sounds of Silence | 1965 | Iconic folk original |
| 20 | [The Sound of Silence][20] | Disturbed | Immortalized (Deluxe Edition) | 2015 | Thunderous dramatic reimagining |
| 21 | [Got the Time][21] | Joe Jackson | Look Sharp! (Bonus Track Version) | 1979 | 70s new wave punk energy |
| 22 | [Got the Time][22] | Anthrax | Persistence of Time | 1990 | Tight thrash metal |
| 23 | [Behind Blue Eyes][23] | The Who | Who's Next (Bonus Track Version) | 1971 | 70s rock ballad classic |
| 24 | [Behind Blue Eyes][24] | Limp Bizkit | Results May Vary | 2003 | Nu-metal emotional rework |
| 25 | [Shout][25] | Tears for Fears | Songs from the Big Chair | 1984 | 80s new wave anthem |
| 26 | [Shout 2000][26] | Disturbed | The Sickness | 2000 | Aggressive metal take |
| 27 | [Bad Company][27] | Bad Company | Bad Company | 1974 | 70s classic rock anthem |
| 28 | [Bad Company][28] | Five Finger Death Punch | War Is the Answer | 2009 | Muscular modern metal |
| 29 | [Land of Confusion (2007 Remaster)][29] | Genesis | Invisible Touch (2007 Remaster) | 1986 | 80s art-pop chart hit |
| 30 | [Land of Confusion][30] | Disturbed | Ten Thousand Fists | 2005 | Pounding industrial metal |
| 31 | [Cars][31] | Gary Numan | The Pleasure Principle (Bonus Tracks) | 1979 | 70s synthpop pioneer |
| 32 | [Cars (Remix)][32] | Fear Factory | Obsolete | 1998 | Industrial metal with Numan guest vocals |
| 33 | [Whiskey in the Jar][33] | Thin Lizzy | Vagabonds of the Western World | 1973 | 70s rock classic |
| 34 | [Whiskey In the Jar][34] | Metallica | Garage Inc. | 1998 | Metal anthem |
| 35 | [It's a Sin][35] | Pet Shop Boys | Actually: Further Listening 1987-1988 (Deluxe) [2018 Remaster] | 1987 | 80s synthpop classic |
| 36 | [It's A Sin][36] | Ghost | It's A Sin - Single | 2026 | Theatrical heavy metal |
| 37 | [Summer Breeze][37] | Seals & Crofts | Summer Breeze | 1972 | Breezy 70s folk rock |
| 38 | [Summer Breeze][38] | Type O Negative | Bloody Kisses | 1993 | Gothic doom-metal transformation |
| 39 | [Get Down, Make Love][39] | Queen | News of the World | 1977 | 70s rock deep cut |
| 40 | [Get Down, Make Love][40] | Nine Inch Nails | Pretty Hate Machine (Remastered) | 1989 | Abrasive industrial reimagining |
| 41 | [Blue Monday][41] | New Order | Total | 1983 | 80s synthpop landmark |
| 42 | [Blue Monday][42] | Orgy | Candyass | 1998 | Industrial/glam metal crunch |
| 43 | [Lay, Lady, Lay][43] | Bob Dylan | Nashville Skyline | 1969 | 70s folk classic |
| 44 | [Lay Lady Lay][44] | Ministry | Filth Pig | 1995 | Industrial powerhouse remake |
| 45 | [Gone Away][45] | The Offspring | Ixnay on the Hombre | 1997 | 90s punk rock ballad |
| 46 | [Gone Away][46] | Five Finger Death Punch | And Justice for None (Deluxe) | 2017 | Heavy melancholic metal |
| 47 | [Turn the Page (Live In Detroit/1975)][47] | Bob Seger & The Silver Bullet Band | 'Live' Bullet | 1973 | Mellow 70s rock ballad |
| 48 | [Turn the Page][48] | Metallica | Garage Inc. | 1998 | Dark, crunching metal version |
| 49 | [Careless Whisper][49] | George Michael | Ladies & Gentlemen | 1984 | 80s pop sax classic |
| 50 | [Careless Whisper][50] | Seether | Finding Beauty In Negative Spaces (Bonus Track Version) | 2007 | Post-grunge guitar rework |


[1]: https://music.apple.com/us/song/live-and-let-die/1440952880
[2]: https://music.apple.com/us/song/live-and-let-die/1440896048
[3]: https://music.apple.com/us/song/house-of-the-rising-sun/1440781975
[4]: https://music.apple.com/us/song/house-of-the-rising-sun/1853954147
[5]: https://music.apple.com/us/song/stripped/665416551
[6]: https://music.apple.com/us/song/stripped/1443280019
[7]: https://music.apple.com/us/song/another-brick-in-the-wall-pt-2/1065975638
[8]: https://music.apple.com/us/song/another-brick-in-the-wall-pt-1-2-3-pink-floyd-cover/436138306
[9]: https://music.apple.com/us/song/smooth-criminal/159294551
[10]: https://music.apple.com/us/song/smooth-criminal/1440762729
[11]: https://music.apple.com/us/song/imagine/1440853776
[12]: https://music.apple.com/us/song/imagine/1440875188
[13]: https://music.apple.com/us/song/im-your-boogie-man/27496369
[14]: https://music.apple.com/us/song/im-your-boogie-man/1440735946
[15]: https://music.apple.com/us/song/sweet-dreams-are-made-of-this/303097827
[16]: https://music.apple.com/us/song/sweet-dreams-are-made-of-this/1440747077
[17]: https://music.apple.com/us/song/faith/282658468
[18]: https://music.apple.com/us/song/faith/1440869804
[19]: https://music.apple.com/us/song/the-sound-of-silence/192480260
[20]: https://music.apple.com/us/song/the-sound-of-silence/1006937459
[21]: https://music.apple.com/us/song/got-the-time/1440917806
[22]: https://music.apple.com/us/song/got-the-time/1440849615
[23]: https://music.apple.com/us/song/behind-blue-eyes/1440815888
[24]: https://music.apple.com/us/song/behind-blue-eyes/1440874577
[25]: https://music.apple.com/us/song/shout/1440813509
[26]: https://music.apple.com/us/song/shout-2000/1030601036
[27]: https://music.apple.com/us/song/bad-company/978942755
[28]: https://music.apple.com/us/song/bad-company/1849239970
[29]: https://music.apple.com/us/song/land-of-confusion-2007-remaster/396483791
[30]: https://music.apple.com/us/song/land-of-confusion/1030228543
[31]: https://music.apple.com/us/song/cars/251652727
[32]: https://music.apple.com/us/song/cars-remix/214470187
[33]: https://music.apple.com/us/song/whiskey-in-the-jar/1444118604
[34]: https://music.apple.com/us/song/whiskey-in-the-jar/579370556
[35]: https://music.apple.com/us/song/its-a-sin/1318903989
[36]: https://music.apple.com/us/song/its-a-sin/1861930282
[37]: https://music.apple.com/us/song/summer-breeze/303230013
[38]: https://music.apple.com/us/song/summer-breeze/214401985
[39]: https://music.apple.com/us/song/get-down-make-love/1440646559
[40]: https://music.apple.com/us/song/get-down-make-love/1440941593
[41]: https://music.apple.com/us/song/blue-monday/439593497
[42]: https://music.apple.com/us/song/blue-monday/302196515
[43]: https://music.apple.com/us/song/lay-lady-lay/177981171
[44]: https://music.apple.com/us/song/lay-lady-lay/366366151
[45]: https://music.apple.com/us/song/gone-away/1440901678
[46]: https://music.apple.com/us/song/gone-away/1848984946
[47]: https://music.apple.com/us/song/turn-the-page-live-in-detroit-1975/1422628864
[48]: https://music.apple.com/us/song/turn-the-page/579370550
[49]: https://music.apple.com/us/song/careless-whisper/429945616
[50]: https://music.apple.com/us/song/careless-whisper/1440747693
