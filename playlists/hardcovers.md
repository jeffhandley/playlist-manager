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
- After reordering, keep all track rows numberless
- Update this markdown file to reflect the new order, then sync to Apple Music

| Song | Artist | Album | Year | Note |
|---|---|---|---|---|
| [Live and Let Die][1ccb82b062] | Paul McCartney | Pure McCartney (Deluxe Edition) | 1978 | 70s Bond theme |
| [Live and Let Die][60cbab750a] | Guns N' Roses | Use Your Illusion I | 1991 | Hard rock concert staple |
| [House of the Rising Sun][477062d960] | The Animals | The Animals (Bonus Track) | 1964 | 60s/70s folk-rock standard |
| [House of the Rising Sun][b79944865d] | Five Finger Death Punch | The Wrong Side of Heaven and the Righteous Side of Hell, Vol. 2 | 2013 | Modern metal overhaul |
| [Stripped][e073203bf6] | Depeche Mode | The Singles 86-98 | 1986 | 80s synthpop |
| [Stripped][cd3ff61646] | Rammstein | Raritäten (1994 - 2012) | 1998 | Pounding Teutonic industrial metal |
| [Another Brick In the Wall, Pt. 2][0e43915b77] | Pink Floyd | The Wall | 1979 | 70s prog-rock anthem |
| [Another Brick in the Wall, Pt. 1, 2, 3 (Pink Floyd Cover)][47cd19e3b0] | Korn | The Essential Korn | 2004 | Down-tuned nu-metal spin |
| [Smooth Criminal][2554a5675a] | Michael Jackson | The Essential Michael Jackson | 1987 | 80s pop perfection |
| [Smooth Criminal][06539f420a] | Alien Ant Farm | ANThology | 2001 | Nu-metal energy |
| [Imagine][8e7fac322a] | John Lennon | Imagine | 1971 | Gentle 70s piano ballad |
| [Imagine][f7aa08b8f3] | A Perfect Circle | Three Sixty (Deluxe Edition) | 2013 | Brooding alt-metal reimagining |
| [I'm Your Boogie Man][b336bffa18] | KC and the Sunshine Band | KC and the Sunshine Band, Pt. 3...And More | 1976 | 70s disco hit |
| [I'm Your Boogie Man][5b37d3b5dc] | White Zombie | Past, Present & Future | 2003 | Horror-industrial rework |
| [Sweet Dreams (Are Made of This)][88b6a00054] | Eurythmics | Ultimate Collection (Remastered) | 1983 | Synth-pop chart-topper |
| [Sweet Dreams (Are Made of This)][f3dd77cb0f] | Marilyn Manson | Lest We Forget: The Best of Marilyn Manson | 1994 | Quintessential industrial cover |
| [Faith][721e616bce] | George Michael | Twenty Five | 1987 | 80s pop hit |
| [Faith][64f920e7ff] | Limp Bizkit | Three Dollar Bill, Y'all | 1997 | Rap-metal rework |
| [The Sound of Silence][1e9e4974d3] | Simon & Garfunkel | Sounds of Silence | 1965 | Iconic folk original |
| [The Sound of Silence][149279c38f] | Disturbed | Immortalized (Deluxe Edition) | 2015 | Thunderous dramatic reimagining |
| [Got the Time][b1d55b31ab] | Joe Jackson | Look Sharp! (Bonus Track Version) | 1979 | 70s new wave punk energy |
| [Got the Time][df8ac27d13] | Anthrax | Persistence of Time | 1990 | Tight thrash metal |
| [Behind Blue Eyes][00b4d58196] | The Who | Who's Next (Bonus Track Version) | 1971 | 70s rock ballad classic |
| [Behind Blue Eyes][e99626d8cd] | Limp Bizkit | Results May Vary | 2003 | Nu-metal emotional rework |
| [Shout][813bf3334f] | Tears for Fears | Songs from the Big Chair | 1984 | 80s new wave anthem |
| [Shout 2000][e8427e8557] | Disturbed | The Sickness | 2000 | Aggressive metal take |
| [Bad Company][3fafa45b85] | Bad Company | Bad Company | 1974 | 70s classic rock anthem |
| [Bad Company][87b1564581] | Five Finger Death Punch | War Is the Answer | 2009 | Muscular modern metal |
| [Land of Confusion (2007 Remaster)][f4fe81949b] | Genesis | Invisible Touch (2007 Remaster) | 1986 | 80s art-pop chart hit |
| [Land of Confusion][39654a7610] | Disturbed | Ten Thousand Fists | 2005 | Pounding industrial metal |
| [Cars][30613a46bc] | Gary Numan | The Pleasure Principle (Bonus Tracks) | 1979 | 70s synthpop pioneer |
| [Cars (Remix)][be1872463d] | Fear Factory | Obsolete | 1998 | Industrial metal with Numan guest vocals |
| [Whiskey in the Jar][274cdcadcd] | Thin Lizzy | Vagabonds of the Western World | 1973 | 70s rock classic |
| [Whiskey In the Jar][16005e34f9] | Metallica | Garage Inc. | 1998 | Metal anthem |
| [Summer Breeze][4c3daf5988] | Seals & Crofts | Summer Breeze | 1972 | Breezy 70s folk rock |
| [Summer Breeze][3e786e0d02] | Type O Negative | Bloody Kisses | 1993 | Gothic doom-metal transformation |
| [Get Down, Make Love][2b806e2eea] | Queen | News of the World | 1977 | 70s rock deep cut |
| [Get Down, Make Love][c3f2d3992c] | Nine Inch Nails | Pretty Hate Machine (Remastered) | 1989 | Abrasive industrial reimagining |
| [Blue Monday][4a43ea2e0e] | New Order | Total | 1983 | 80s synthpop landmark |
| [Blue Monday][0000c7ec40] | Orgy | Candyass | 1998 | Industrial/glam metal crunch |
| [Lay, Lady, Lay][cca124439e] | Bob Dylan | Nashville Skyline | 1969 | 70s folk classic |
| [Lay Lady Lay][f35758233f] | Ministry | Filth Pig | 1995 | Industrial powerhouse remake |
| [Gone Away][30ce6fa57e] | The Offspring | Ixnay on the Hombre | 1997 | 90s punk rock ballad |
| [Gone Away][ae82d2234f] | Five Finger Death Punch | And Justice for None (Deluxe) | 2017 | Heavy melancholic metal |
| [Careless Whisper][b5895a60a0] | George Michael | Ladies & Gentlemen | 1984 | 80s pop sax classic |
| [Careless Whisper][5643b9850d] | Seether | Finding Beauty In Negative Spaces (Bonus Track Version) | 2007 | Post-grunge guitar rework |
| [Turn the Page (Live In Detroit/1975)][dfab84a901] | Bob Seger & The Silver Bullet Band | 'Live' Bullet | 1973 | Mellow 70s rock ballad |
| [Turn the Page][22beade348] | Metallica | Garage Inc. | 1998 | Dark, crunching metal version |
| [Hurt][7283d8a795] | Nine Inch Nails | The Downward Spiral | 1994 | Raw industrial original |
| [Hurt][27d763b539] | Johnny Cash | American IV: The Man Comes Around | 2002 | Devastating stripped-down country reimagining |
| [You Spin Me Round (Like a Record)][f868385fb2] | Dead or Alive | Rip It Up | 1984 | 80s Hi-NRG dance hit |
| [You Spin Me Round (Like a Record)][4464b21db6] | 3TEETH | Guns Akimbo - Single | 2020 | Thumping industrial metal |
| [Enjoy the Silence][9d6ca8500f] | Depeche Mode | Violator (Deluxe) | 1990 | 80s/90s synthpop masterpiece |
| [Enjoy the Silence][df3fa94336] | Lacuna Coil | Karmacode | 2006 | Gothic metal reimagining |
| [Wicked Game][f27c6f17d0] | Chris Isaak | Heart Shaped World | 1989 | Sultry 80s rock ballad |
| [Wicked Game][d20bff3a7e] | HIM | Greatest Lovesongs Vol. 666 (Deluxe Versions) [Remastered] | 1997 | Dark love-metal transformation |
| [Word Up!][7b6d737f31] | Cameo | Word Up! | 1986 | 80s funk-pop smash |
| [Word Up!][7118a3cb75] | Korn | Greatest Hits, Vol. 1 | 2004 | Groovy nu-metal rework |
| [Message In a Bottle][0c8eec50ae] | The Police | The Very Best of Sting & The Police | 1979 | 70s new wave rock classic |
| [Message In a Bottle][2918a9e1ce] | Machine Head | The Burning Red | 1999 | Aggressive metal overhaul |
| [Rasputin][11401a3650] | Boney M. | The Essential Boney M. | 1978 | 70s disco classic |
| [Rasputin][6109825472] | Turisas | Rasputin - Single | 2007 | High-octane folk-metal frenzy |
| [Da Ya Think I'm Sexy?][4300f58ba9] | Rod Stewart | Blondes Have More Fun | 1978 | 70s disco-rock hit |
| [Da Ya Think I'm Sexy?][0d7e666d3b] | Revolting Cocks | Linger Ficken' Good... and Other Barnyard Oddities | 1993 | Brash industrial rework |
| [Tainted Love][8442d6cb5e] | Soft Cell | Tainted Love / Where Did Our Love Go - Single | 1981 | 80s synthpop smash |
| [Tainted Love][f188400c83] | Marilyn Manson | Lest We Forget: The Best of Marilyn Manson | 2003 | Grinding industrial menace |
| [Shock the Monkey][5d70e8a725] | Peter Gabriel | Peter Gabriel 4: Security (Remastered) | 1982 | 80s art-rock classic |
| [Shock the Monkey][5eabdf806a] | Coal Chamber | Chamber Music | 1999 | Nu-metal chaos with Ozzy guest vocals |
| [No Ordinary Love][be48d4fe5b] | Sade | Love Deluxe | 1992 | Sultry 90s R&B ballad |
| [No Ordinary Love][2afe50e0b4] | Deftones | Covers | 2005 | Dark, heavy alt-metal reimagining |
| [Ride Like the Wind][a74742b9d9] | Saxon | Destiny | 1988 | NWOBHM powerhouse |
| [The Metro][c2e6dc1ed1] | Berlin | Pleasure Victim | 1981 | 80s new wave classic |
| [The Metro][744baa1f39] | System Of A Down | Not Another Teen Movie (Music from the Motion Picture) | 2001 | Aggressive alt-metal overhaul |
| [Dead Souls][20c6dd446c] | Joy Division | Substance 1977-1980 | 1980 | Post-punk original |
| [Dead Souls][f900b6c03a] | Nine Inch Nails | The Crow (Original Motion Picture Soundtrack) | 1994 | Raging industrial reimagining |
| [Gimme! Gimme! Gimme! (A Man After Midnight)][045ddb7b77] | ABBA | ABBA Gold: Greatest Hits | 1979 | 70s disco-pop anthem |
| [Gimme! Gimme! Gimme!][b493b2a666] | Feuerschwanz | Todsünden | 2022 | Folk-metal headbanger |
| [Holy Diver][5298611f8d] | Dio | Holy Diver | 1983 | 80s metal anthem |
| [Holy Diver][710f57e06c] | Killswitch Engage | As Daylight Dies (Special Edition) | 2006 | Metalcore powerhouse |
| [We're An American Band (Remastered 2002)][9bc031166a] | Grand Funk Railroad | We're An American Band (Expanded Edition / Remastered 2002) | 1973 | 70s rock anthem |
| [We're an American Band][4cef1dff3d] | Rob Zombie | Venomous Rat Regeneration Vendor | 2013 | Gritty industrial metal |
| [The Green Manalishi (With the Two Prong Crown) (Remastered)][530826b9f9] | Fleetwood Mac | 50 Years - Don't Stop | 1970 | 70s blues-rock deep cut |
| [The Green Manalishi (With the Two-Pronged Crown)][ed99070ca9] | Judas Priest | Hell Bent for Leather (Bonus Track Version) | 1978 | NWOBHM landmark cover |
| [Since U Been Gone][c4b36672dc] | Kelly Clarkson | Breakaway | 2004 | 2000s pop powerhouse |
| [Since U Been Gone][9b72c32703] | A Day to Remember | For Those Who Have Heart (Deluxe Edition) | 2007 | Post-hardcore explosion |
| [99 Luftballons][a1bf7718cc] | Nena | Nena | 1983 | 80s German new wave smash |
| [99 Red Balloons][14f9ee6552] | Goldfinger | The Best of Goldfinger | 2000 | High-energy ska-punk |
| [Supernaut][9292ddb499] | Black Sabbath | Black Sabbath, Vol. 4 | 1972 | 70s heavy metal classic |
| [Supernaut][375bb75d65] | 1000 Homo DJs | Supernaut - EP | 1990 | Industrial metal with Ministry's Al Jourgensen |
| [Lovesong][70f90d801a] | The Cure | Disintegration (Deluxe Edition - Remastered) | 1989 | 80s dream-pop ballad |
| [Lovesong][41d140ff19] | Snake River Conspiracy | Sonic Jihad | 2000 | Electro-industrial stomp |
| [Cat Scratch Fever][1f9f1eae87] | Ted Nugent | '70s Greatest Hits | 1977 | 70s hard rock classic |
| [Cat Scratch Fever][ce14df3b59] | Pantera | The Best of Pantera: Far Beyond the Great Southern Cowboys' Vulgar Hits! (Remastered) | 1999 | Crushing groove-metal |
| [In-A-Gadda-Da-Vida][4339cdc6a6] | Iron Butterfly | In-A-Gadda-Da-Vida | 1968 | 60s/70s psychedelic rock epic |
| [In a Gadda Da Vida][6c78fa1142] | Slayer | Soundtrack to the Apocalypse | 2003 | Thrash metal demolition |
| [Personal Jesus][7dd6d476c4] | Depeche Mode | Violator (Deluxe) | 1989 | 80s synthpop dark classic |
| [Personal Jesus][e9bd201942] | Marilyn Manson | Lest We Forget: The Best of Marilyn Manson | 2004 | Grinding industrial metal |
| [It's a Sin][f0868ee57b] | Pet Shop Boys | Actually: Further Listening 1987-1988 (Deluxe) [2018 Remaster] | 1987 | 80s synthpop classic |
| [It's A Sin][fded2225f9] | Ghost | It's A Sin - Single | 2026 | Theatrical heavy metal |
| [Zombie][2834b9b713] | The Cranberries | No Need to Argue | 1994 | 90s alt-rock protest anthem |
| [Zombie][51ac726b39] | Bad Wolves | Disobey | 2018 | Powerful modern metal cover |
| [Signs][6313b06f67] | Five Man Electrical Band | Good-byes and Butterflies | 1971 | 70s protest anthem |
| [Signs (Live)][248101632c] | Tesla | Five Man Acoustical Jam (Live) | 1990 | Acoustic rock cover |
| [Have You Ever Seen the Rain][e6548473bb] | Creedence Clearwater Revival | Pendulum | 1970 | Classic rock anthem |
| [Have You Ever Seen the Rain (feat. Mt. Joy)][0ffe44ea19] | Jesse Welles | Have You Ever Seen the Rain (feat. Mt. Joy) - Single | 2024 | Modern folk-rock cover |
| [Blue On Black][9609af080b] | Kenny Wayne Shepherd | Trouble Is... | 1997 | 90s blues-rock smash |
| [Blue on Black][77fac1998f] | Five Finger Death Punch | A Decade of Destruction, Vol. 2 | 2018 | Heavy metal cover feat. Brian May, Brantley Gilbert & Kenny Wayne Shepherd |


[1ccb82b062]: https://music.apple.com/us/song/live-and-let-die/1440952880
[60cbab750a]: https://music.apple.com/us/song/live-and-let-die/1440896048
[477062d960]: https://music.apple.com/us/song/house-of-the-rising-sun/1440781975
[b79944865d]: https://music.apple.com/us/song/house-of-the-rising-sun/1853954147
[e073203bf6]: https://music.apple.com/us/song/stripped/665416551
[cd3ff61646]: https://music.apple.com/us/song/stripped/1443280019
[0e43915b77]: https://music.apple.com/us/song/another-brick-in-the-wall-pt-2/1065975638
[47cd19e3b0]: https://music.apple.com/us/song/another-brick-in-the-wall-pt-1-2-3-pink-floyd-cover/436138306
[2554a5675a]: https://music.apple.com/us/song/smooth-criminal/159294551
[06539f420a]: https://music.apple.com/us/song/smooth-criminal/1440762729
[8e7fac322a]: https://music.apple.com/us/song/imagine/1440853776
[f7aa08b8f3]: https://music.apple.com/us/song/imagine/1440875188
[b336bffa18]: https://music.apple.com/us/song/im-your-boogie-man/27496369
[5b37d3b5dc]: https://music.apple.com/us/song/im-your-boogie-man/1440735946
[88b6a00054]: https://music.apple.com/us/song/sweet-dreams-are-made-of-this/303097827
[f3dd77cb0f]: https://music.apple.com/us/song/sweet-dreams-are-made-of-this/1440747077
[721e616bce]: https://music.apple.com/us/song/faith/282658468
[64f920e7ff]: https://music.apple.com/us/song/faith/1440869804
[1e9e4974d3]: https://music.apple.com/us/song/the-sound-of-silence/192480260
[149279c38f]: https://music.apple.com/us/song/the-sound-of-silence/1006937459
[b1d55b31ab]: https://music.apple.com/us/song/got-the-time/1440917806
[df8ac27d13]: https://music.apple.com/us/song/got-the-time/1440849615
[00b4d58196]: https://music.apple.com/us/song/behind-blue-eyes/1440815888
[e99626d8cd]: https://music.apple.com/us/song/behind-blue-eyes/1440874577
[813bf3334f]: https://music.apple.com/us/song/shout/1440813509
[e8427e8557]: https://music.apple.com/us/song/shout-2000/1030601036
[3fafa45b85]: https://music.apple.com/us/song/bad-company/978942755
[87b1564581]: https://music.apple.com/us/song/bad-company/1849239970
[f4fe81949b]: https://music.apple.com/us/song/land-of-confusion-2007-remaster/396483791
[39654a7610]: https://music.apple.com/us/song/land-of-confusion/1030228543
[30613a46bc]: https://music.apple.com/us/song/cars/251652727
[be1872463d]: https://music.apple.com/us/song/cars-remix/214470187
[274cdcadcd]: https://music.apple.com/us/song/whiskey-in-the-jar/1444118604
[16005e34f9]: https://music.apple.com/us/song/whiskey-in-the-jar/579370556
[4c3daf5988]: https://music.apple.com/us/song/summer-breeze/303230013
[3e786e0d02]: https://music.apple.com/us/song/summer-breeze/214401985
[2b806e2eea]: https://music.apple.com/us/song/get-down-make-love/1440646559
[c3f2d3992c]: https://music.apple.com/us/song/get-down-make-love/1440941593
[4a43ea2e0e]: https://music.apple.com/us/song/blue-monday/439593497
[0000c7ec40]: https://music.apple.com/us/song/blue-monday/302196515
[cca124439e]: https://music.apple.com/us/song/lay-lady-lay/177981171
[f35758233f]: https://music.apple.com/us/song/lay-lady-lay/366366151
[30ce6fa57e]: https://music.apple.com/us/song/gone-away/1440901678
[ae82d2234f]: https://music.apple.com/us/song/gone-away/1848984946
[b5895a60a0]: https://music.apple.com/us/song/careless-whisper/429945616
[5643b9850d]: https://music.apple.com/us/song/careless-whisper/1440747693
[dfab84a901]: https://music.apple.com/us/song/turn-the-page-live-in-detroit-1975/1422628864
[22beade348]: https://music.apple.com/us/song/turn-the-page/579370550
[7283d8a795]: https://music.apple.com/us/song/hurt/1440838114
[27d763b539]: https://music.apple.com/us/song/hurt/1440811252
[f868385fb2]: https://music.apple.com/us/song/you-spin-me-round-like-a-record/187305118
[4464b21db6]: https://music.apple.com/us/song/you-spin-me-round-like-a-record/1527220013
[9d6ca8500f]: https://music.apple.com/us/song/enjoy-the-silence/1174246889
[df3fa94336]: https://music.apple.com/us/song/enjoy-the-silence/1045283175
[f27c6f17d0]: https://music.apple.com/us/song/wicked-game/1570350115
[d20bff3a7e]: https://music.apple.com/us/song/wicked-game/1710182985
[7b6d737f31]: https://music.apple.com/us/song/word-up/1443854526
[7118a3cb75]: https://music.apple.com/us/song/word-up/1831584253
[0c8eec50ae]: https://music.apple.com/us/song/message-in-a-bottle/1440882889
[2918a9e1ce]: https://music.apple.com/us/song/message-in-a-bottle/214356293
[11401a3650]: https://music.apple.com/us/song/rasputin/553356946
[6109825472]: https://music.apple.com/us/song/rasputin/1070811550
[4300f58ba9]: https://music.apple.com/us/song/da-ya-think-im-sexy/295535860
[0d7e666d3b]: https://music.apple.com/us/song/da-ya-think-im-sexy/302160761
[8442d6cb5e]: https://music.apple.com/us/song/tainted-love/1440517679
[f188400c83]: https://music.apple.com/us/song/tainted-love/1440746942
[5d70e8a725]: https://music.apple.com/us/song/shock-the-monkey/986723832
[5eabdf806a]: https://music.apple.com/us/song/shock-the-monkey/1349403205
[be48d4fe5b]: https://music.apple.com/us/song/no-ordinary-love/158796562
[2afe50e0b4]: https://music.apple.com/us/song/no-ordinary-love/1099841621
[a74742b9d9]: https://music.apple.com/us/song/ride-like-the-wind/1437341375
[c2e6dc1ed1]: https://music.apple.com/us/song/the-metro/1440915717
[744baa1f39]: https://music.apple.com/us/song/the-metro/324595750
[20c6dd446c]: https://music.apple.com/us/song/dead-souls/996111412
[f900b6c03a]: https://music.apple.com/us/song/dead-souls/322025504
[045ddb7b77]: https://music.apple.com/us/song/gimme-gimme-gimme-a-man-after-midnight/1422648970
[b493b2a666]: https://music.apple.com/us/song/gimme-gimme-gimme/1645165941
[5298611f8d]: https://music.apple.com/us/song/holy-diver/1048475974
[710f57e06c]: https://music.apple.com/us/song/holy-diver/262091719
[9bc031166a]: https://music.apple.com/us/song/were-an-american-band-remastered-2002/724670493
[4cef1dff3d]: https://music.apple.com/us/song/were-an-american-band/1443098924
[530826b9f9]: https://music.apple.com/us/song/the-green-manalishi-with-the-two-prong-crown-remastered/1441359158
[ed99070ca9]: https://music.apple.com/us/song/the-green-manalishi-with-the-two-pronged-crown/193031460
[c4b36672dc]: https://music.apple.com/us/song/since-u-been-gone/275765380
[9b72c32703]: https://music.apple.com/us/song/since-u-been-gone/1558597897
[a1bf7718cc]: https://music.apple.com/us/song/99-luftballons/1446014714
[14f9ee6552]: https://music.apple.com/us/song/99-red-balloons/309670420
[9292ddb499]: https://music.apple.com/us/song/supernaut/785242022
[375bb75d65]: https://music.apple.com/us/song/supernaut/811772364
[70f90d801a]: https://music.apple.com/us/song/lovesong/371772239
[41d140ff19]: https://music.apple.com/us/song/lovesong/1244226631
[1f9f1eae87]: https://music.apple.com/us/song/cat-scratch-fever/260302358
[ce14df3b59]: https://music.apple.com/us/song/cat-scratch-fever/262515859
[4339cdc6a6]: https://music.apple.com/us/song/in-a-gadda-da-vida/780234010
[6c78fa1142]: https://music.apple.com/us/song/in-a-gadda-da-vida/1443269252
[7dd6d476c4]: https://music.apple.com/us/song/personal-jesus/1174246806
[e9bd201942]: https://music.apple.com/us/song/personal-jesus/1440746931
[f0868ee57b]: https://music.apple.com/us/song/its-a-sin/1318903989
[fded2225f9]: https://music.apple.com/us/song/its-a-sin/1861930282
[2834b9b713]: https://music.apple.com/us/song/zombie/1440735264
[51ac726b39]: https://music.apple.com/us/song/zombie/1440844617
[6313b06f67]: https://music.apple.com/us/song/signs/1443005908
[248101632c]: https://music.apple.com/us/song/signs/1440918486
[e6548473bb]: https://music.apple.com/us/song/have-you-ever-seen-the-rain/1440956341
[0ffe44ea19]: https://music.apple.com/us/song/have-you-ever-seen-the-rain-feat-mt-joy/1774004540
[9609af080b]: https://music.apple.com/us/song/blue-on-black/316824647
[77fac1998f]: https://music.apple.com/us/song/blue-on-black/1854207123
