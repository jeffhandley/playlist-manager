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
- Update this markdown file to reflect the new order, then sync to Apple Music

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
| 35 | [Summer Breeze][37] | Seals & Crofts | Summer Breeze | 1972 | Breezy 70s folk rock |
| 36 | [Summer Breeze][38] | Type O Negative | Bloody Kisses | 1993 | Gothic doom-metal transformation |
| 37 | [Get Down, Make Love][39] | Queen | News of the World | 1977 | 70s rock deep cut |
| 38 | [Get Down, Make Love][40] | Nine Inch Nails | Pretty Hate Machine (Remastered) | 1989 | Abrasive industrial reimagining |
| 39 | [Blue Monday][41] | New Order | Total | 1983 | 80s synthpop landmark |
| 40 | [Blue Monday][42] | Orgy | Candyass | 1998 | Industrial/glam metal crunch |
| 41 | [Lay, Lady, Lay][43] | Bob Dylan | Nashville Skyline | 1969 | 70s folk classic |
| 42 | [Lay Lady Lay][44] | Ministry | Filth Pig | 1995 | Industrial powerhouse remake |
| 43 | [Gone Away][45] | The Offspring | Ixnay on the Hombre | 1997 | 90s punk rock ballad |
| 44 | [Gone Away][46] | Five Finger Death Punch | And Justice for None (Deluxe) | 2017 | Heavy melancholic metal |
| 45 | [Careless Whisper][49] | George Michael | Ladies & Gentlemen | 1984 | 80s pop sax classic |
| 46 | [Careless Whisper][50] | Seether | Finding Beauty In Negative Spaces (Bonus Track Version) | 2007 | Post-grunge guitar rework |
| 47 | [Turn the Page (Live In Detroit/1975)][47] | Bob Seger & The Silver Bullet Band | 'Live' Bullet | 1973 | Mellow 70s rock ballad |
| 48 | [Turn the Page][48] | Metallica | Garage Inc. | 1998 | Dark, crunching metal version |
| 49 | [Hurt][51] | Nine Inch Nails | The Downward Spiral | 1994 | Raw industrial original |
| 50 | [Hurt][52] | Johnny Cash | American IV: The Man Comes Around | 2002 | Devastating stripped-down country reimagining |
| 51 | [You Spin Me Round (Like a Record)][53] | Dead or Alive | Rip It Up | 1984 | 80s Hi-NRG dance hit |
| 52 | [You Spin Me Round (Like a Record)][54] | 3TEETH | Guns Akimbo - Single | 2020 | Thumping industrial metal |
| 53 | [Enjoy the Silence][55] | Depeche Mode | Violator (Deluxe) | 1990 | 80s/90s synthpop masterpiece |
| 54 | [Enjoy the Silence][56] | Lacuna Coil | Karmacode | 2006 | Gothic metal reimagining |
| 55 | [Wicked Game][57] | Chris Isaak | Heart Shaped World | 1989 | Sultry 80s rock ballad |
| 56 | [Wicked Game][58] | HIM | Greatest Lovesongs Vol. 666 (Deluxe Versions) [Remastered] | 1997 | Dark love-metal transformation |
| 57 | [Word Up!][59] | Cameo | Word Up! | 1986 | 80s funk-pop smash |
| 58 | [Word Up!][60] | Korn | Greatest Hits, Vol. 1 | 2004 | Groovy nu-metal rework |
| 59 | [Message In a Bottle][61] | The Police | The Very Best of Sting & The Police | 1979 | 70s new wave rock classic |
| 60 | [Message In a Bottle][62] | Machine Head | The Burning Red | 1999 | Aggressive metal overhaul |
| 61 | [Rasputin][63] | Boney M. | The Essential Boney M. | 1978 | 70s disco classic |
| 62 | [Rasputin][64] | Turisas | Rasputin - Single | 2007 | High-octane folk-metal frenzy |
| 63 | [Da Ya Think I'm Sexy?][65] | Rod Stewart | Blondes Have More Fun | 1978 | 70s disco-rock hit |
| 64 | [Da Ya Think I'm Sexy?][66] | Revolting Cocks | Linger Ficken' Good... and Other Barnyard Oddities | 1993 | Brash industrial rework |
| 65 | [Tainted Love][67] | Soft Cell | Tainted Love / Where Did Our Love Go - Single | 1981 | 80s synthpop smash |
| 66 | [Tainted Love][68] | Marilyn Manson | Lest We Forget: The Best of Marilyn Manson | 2003 | Grinding industrial menace |
| 67 | [Shock the Monkey][69] | Peter Gabriel | Peter Gabriel 4: Security (Remastered) | 1982 | 80s art-rock classic |
| 68 | [Shock the Monkey][70] | Coal Chamber | Chamber Music | 1999 | Nu-metal chaos with Ozzy guest vocals |
| 69 | [No Ordinary Love][71] | Sade | Love Deluxe | 1992 | Sultry 90s R&B ballad |
| 70 | [No Ordinary Love][72] | Deftones | Covers | 2005 | Dark, heavy alt-metal reimagining |
| 71 | [Ride Like the Wind (2019 Remaster)][73] | Christopher Cross | Christopher Cross (2019 Remaster) | 1979 | 70s/80s yacht-rock hit |
| 72 | [Ride Like the Wind][74] | Saxon | Destiny | 1988 | NWOBHM powerhouse |
| 73 | [The Metro][75] | Berlin | Pleasure Victim | 1981 | 80s new wave classic |
| 74 | [The Metro][76] | System Of A Down | Not Another Teen Movie (Music from the Motion Picture) | 2001 | Aggressive alt-metal overhaul |
| 75 | [Dead Souls][77] | Joy Division | Substance 1977-1980 | 1980 | Post-punk original |
| 76 | [Dead Souls][78] | Nine Inch Nails | The Crow (Original Motion Picture Soundtrack) | 1994 | Raging industrial reimagining |
| 77 | [Gimme! Gimme! Gimme! (A Man After Midnight)][79] | ABBA | ABBA Gold: Greatest Hits | 1979 | 70s disco-pop anthem |
| 78 | [Gimme! Gimme! Gimme!][80] | Feuerschwanz | Todsünden | 2022 | Folk-metal headbanger |
| 79 | [Holy Diver][81] | Dio | Holy Diver | 1983 | 80s metal anthem |
| 80 | [Holy Diver][82] | Killswitch Engage | As Daylight Dies (Special Edition) | 2006 | Metalcore powerhouse |
| 81 | [We're An American Band (Remastered 2002)][83] | Grand Funk Railroad | We're An American Band (Expanded Edition / Remastered 2002) | 1973 | 70s rock anthem |
| 82 | [We're an American Band][84] | Rob Zombie | Venomous Rat Regeneration Vendor | 2013 | Gritty industrial metal |
| 83 | [The Green Manalishi (With the Two Prong Crown) (Remastered)][85] | Fleetwood Mac | 50 Years - Don't Stop | 1970 | 70s blues-rock deep cut |
| 84 | [The Green Manalishi (With the Two-Pronged Crown)][86] | Judas Priest | Hell Bent for Leather (Bonus Track Version) | 1978 | NWOBHM landmark cover |
| 85 | [Since U Been Gone][87] | Kelly Clarkson | Breakaway | 2004 | 2000s pop powerhouse |
| 86 | [Since U Been Gone][88] | A Day to Remember | For Those Who Have Heart (Deluxe Edition) | 2007 | Post-hardcore explosion |
| 87 | [99 Luftballons][89] | Nena | Nena | 1983 | 80s German new wave smash |
| 88 | [99 Red Balloons][90] | Goldfinger | The Best of Goldfinger | 2000 | High-energy ska-punk |
| 89 | [Supernaut][91] | Black Sabbath | Black Sabbath, Vol. 4 | 1972 | 70s heavy metal classic |
| 90 | [Supernaut][92] | 1000 Homo DJs | Supernaut - EP | 1990 | Industrial metal with Ministry's Al Jourgensen |
| 91 | [Lovesong][93] | The Cure | Disintegration (Deluxe Edition - Remastered) | 1989 | 80s dream-pop ballad |
| 92 | [Lovesong][94] | Snake River Conspiracy | Sonic Jihad | 2000 | Electro-industrial stomp |
| 93 | [Cat Scratch Fever][95] | Ted Nugent | '70s Greatest Hits | 1977 | 70s hard rock classic |
| 94 | [Cat Scratch Fever][96] | Pantera | The Best of Pantera: Far Beyond the Great Southern Cowboys' Vulgar Hits! (Remastered) | 1999 | Crushing groove-metal |
| 95 | [In-A-Gadda-Da-Vida][97] | Iron Butterfly | In-A-Gadda-Da-Vida | 1968 | 60s/70s psychedelic rock epic |
| 96 | [In a Gadda Da Vida][98] | Slayer | Soundtrack to the Apocalypse | 2003 | Thrash metal demolition |
| 97 | [Personal Jesus][99] | Depeche Mode | Violator (Deluxe) | 1989 | 80s synthpop dark classic |
| 98 | [Personal Jesus][100] | Marilyn Manson | Lest We Forget: The Best of Marilyn Manson | 2004 | Grinding industrial metal |
| 99 | [It's a Sin][35] | Pet Shop Boys | Actually: Further Listening 1987-1988 (Deluxe) [2018 Remaster] | 1987 | 80s synthpop classic |
| 100 | [It's A Sin][36] | Ghost | It's A Sin - Single | 2026 | Theatrical heavy metal |
| 101 | [Zombie][101] | The Cranberries | No Need to Argue | 1994 | 90s alt-rock protest anthem |
| 102 | [Zombie][102] | Bad Wolves | Disobey | 2018 | Powerful modern metal cover |


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
[51]: https://music.apple.com/us/song/hurt/1440838114
[52]: https://music.apple.com/us/song/hurt/1440811252
[53]: https://music.apple.com/us/song/you-spin-me-round-like-a-record/187305118
[54]: https://music.apple.com/us/song/you-spin-me-round-like-a-record/1527220013
[55]: https://music.apple.com/us/song/enjoy-the-silence/1174246889
[56]: https://music.apple.com/us/song/enjoy-the-silence/1045283175
[57]: https://music.apple.com/us/song/wicked-game/1570350115
[58]: https://music.apple.com/us/song/wicked-game/1710182985
[59]: https://music.apple.com/us/song/word-up/1443854526
[60]: https://music.apple.com/us/song/word-up/1831584253
[61]: https://music.apple.com/us/song/message-in-a-bottle/1440882889
[62]: https://music.apple.com/us/song/message-in-a-bottle/214356293
[63]: https://music.apple.com/us/song/rasputin/553356946
[64]: https://music.apple.com/us/song/rasputin/1070811550
[65]: https://music.apple.com/us/song/da-ya-think-im-sexy/295535860
[66]: https://music.apple.com/us/song/da-ya-think-im-sexy/302160761
[67]: https://music.apple.com/us/song/tainted-love/1440517679
[68]: https://music.apple.com/us/song/tainted-love/1440746942
[69]: https://music.apple.com/us/song/shock-the-monkey/986723832
[70]: https://music.apple.com/us/song/shock-the-monkey/1349403205
[71]: https://music.apple.com/us/song/no-ordinary-love/158796562
[72]: https://music.apple.com/us/song/no-ordinary-love/1099841621
[73]: https://music.apple.com/us/song/ride-like-the-wind-2019-remaster/1754701784
[74]: https://music.apple.com/us/song/ride-like-the-wind/1437341375
[75]: https://music.apple.com/us/song/the-metro/1440915717
[76]: https://music.apple.com/us/song/the-metro/324595750
[77]: https://music.apple.com/us/song/dead-souls/996111412
[78]: https://music.apple.com/us/song/dead-souls/322025504
[79]: https://music.apple.com/us/song/gimme-gimme-gimme-a-man-after-midnight/1422648970
[80]: https://music.apple.com/us/song/gimme-gimme-gimme/1645165941
[81]: https://music.apple.com/us/song/holy-diver/1048475974
[82]: https://music.apple.com/us/song/holy-diver/262091719
[83]: https://music.apple.com/us/song/were-an-american-band-remastered-2002/724670493
[84]: https://music.apple.com/us/song/were-an-american-band/1443098924
[85]: https://music.apple.com/us/song/the-green-manalishi-with-the-two-prong-crown-remastered/1441359158
[86]: https://music.apple.com/us/song/the-green-manalishi-with-the-two-pronged-crown/193031460
[87]: https://music.apple.com/us/song/since-u-been-gone/275765380
[88]: https://music.apple.com/us/song/since-u-been-gone/1558597897
[89]: https://music.apple.com/us/song/99-luftballons/1446014714
[90]: https://music.apple.com/us/song/99-red-balloons/309670420
[91]: https://music.apple.com/us/song/supernaut/785242022
[92]: https://music.apple.com/us/song/supernaut/811772364
[93]: https://music.apple.com/us/song/lovesong/371772239
[94]: https://music.apple.com/us/song/lovesong/1244226631
[95]: https://music.apple.com/us/song/cat-scratch-fever/260302358
[96]: https://music.apple.com/us/song/cat-scratch-fever/262515859
[97]: https://music.apple.com/us/song/in-a-gadda-da-vida/780234010
[98]: https://music.apple.com/us/song/in-a-gadda-da-vida/1443269252
[99]: https://music.apple.com/us/song/personal-jesus/1174246806
[100]: https://music.apple.com/us/song/personal-jesus/1440746931
[101]: https://music.apple.com/us/song/zombie/1524339422
[102]: https://music.apple.com/us/song/zombie/1440844617
