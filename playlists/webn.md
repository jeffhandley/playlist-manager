# WEBN

Songs played on Cincinnati's 102.7 WEBN (https://webn.iheart.com/) — active/classic rock rotation drawn from recent airplay monitors (SpinCounts, RadioWave Monitor) and the station's published top/recently-played lists. Includes as many verified WEBN spins as could be recovered from publicly available airplay data.

## Playlist Instructions

### Management

- This file is the source of truth for the WEBN playlist
- Use the **playlist-creator** skill for updates
- Prefer tracks with documented WEBN airplay; avoid guessing deep cuts with no airplay evidence
- When expanding, scrape current airplay sources and merge new unique tracks
- Sync with: `node .github/skills/apple-music-api/sync.mjs playlists/webn.md`

### Ordering

- Ordered by observed recent airplay frequency (highest first), then artist name, then song title
- After edits, renumber rows sequentially from 1

### Scope

- Rock tracks associated with WEBN Cincinnati's active/classic rock format
- Studio recordings preferred; explicit versions preferred when available
- Follow root `PREFERENCES.md` exclusions

| # | Song | Artist | Album | Year | Note |
|---|------|--------|-------|------|------|
| 1 | [Voices in My Head][1] | Falling In Reverse | Voices in My Head - Single | 2022 | ~42 recent spins |
| 2 | [Awaken][2] | Breaking Benjamin | Awaken - Single | 2024 | ~37 recent spins |
| 3 | [Afterlife][3] | Evanescence | Sanctuary | 2025 | ~33 recent spins |
| 4 | [Heavy Is the Crown][4] | LINKIN PARK | From Zero | 2024 | ~33 recent spins |
| 5 | [Even If It Kills Me][5] | Papa Roach | Even If It Kills Me - Single | 2024 | ~31 recent spins |
| 6 | [I Will Not Break][6] | Disturbed | I Will Not Break - Single | 2025 | ~28 recent spins |
| 7 | [Hey You][7] | Disturbed | Divisive | 2022 | ~26 recent spins |
| 8 | [For the Glory][8] | All Good Things | Machines | 2017 | ~25 recent spins |
| 9 | [Liar][9] | Jelly Roll | Liar - Single | 2024 | ~23 recent spins |
| 10 | [Dead Don’t Die][10] | Shinedown | Planet Zero | 2022 | ~17 recent spins |
| 11 | [So Called Life][11] | Three Days Grace | EXPLOSIONS | 2022 | ~14 recent spins |
| 12 | [Ramon Ayala][12] | Giovannie and the Hired Guns | Tejano Punk Boyz | 2021 | ~10 recent spins |
| 13 | [How You Remind Me][13] | Nickelback | Silver Side Up | 2001 | ~10 recent spins |
| 14 | [Ensenada][14] | Sublime | Ensenada - Single | 2025 | ~10 recent spins |
| 15 | [Something Wicked][15] | Breaking Benjamin | Something Wicked - Single | 2026 | ~9 recent spins |
| 16 | [Comedown][16] | Bush | Loaded: The Greatest Hits 1994-2023 | 1994 | ~9 recent spins |
| 17 | [Free][17] | Beartooth | Free - Single | 2026 | ~8 recent spins |
| 18 | [Need a Favor][18] | Jelly Roll | Whitsitt Chapel | 2023 | ~7 recent spins |
| 19 | [What I Got][19] | Sublime | Sublime | 1996 | ~7 recent spins |
| 20 | [Broken Mirror][20] | Architects | The Sky, the Earth & All Between | 2025 | ~6 recent spins |
| 21 | [Higher][21] | Creed | Greatest Hits | 1999 | ~6 recent spins |
| 22 | [Bad Guy (feat. Saraya)][22] | Falling In Reverse | Popular Monster | 2024 | ~6 recent spins |
| 23 | [Eye of the Storm][23] | Five Finger Death Punch | Eye of the Storm - Single | 2026 | ~6 recent spins |
| 24 | [When I Come Around][24] | Green Day | Dookie | 1994 | ~6 recent spins |
| 25 | [Even Flow][25] | Pearl Jam | Ten | 1991 | ~6 recent spins |
| 26 | [Bother][26] | Stone Sour | Stone Sour | 2002 | ~6 recent spins |
| 27 | [Free Fallin'][27] | Tom Petty | Greatest Hits | 1989 | ~6 recent spins |
| 28 | [If You Could Only See][28] | Tonic | Lemon Parade | 1996 | ~6 recent spins |
| 29 | [Name In Blood][29] | Black Label Society | Engines of Demolition | 2026 | ~5 recent spins |
| 30 | [Glycerine][30] | Bush | Loaded: The Greatest Hits 1994-2023 | 1994 | ~5 recent spins |
| 31 | [December][31] | Collective Soul | Collective Soul | 1995 | ~5 recent spins |
| 32 | [Whatever][32] | Godsmack | Godsmack | 1997 | ~5 recent spins |
| 33 | [The Middle][33] | Jimmy Eat World | Bleed American | 2001 | ~5 recent spins |
| 34 | [Around the World][34] | Red Hot Chili Peppers | Californication (Remastered) | 1999 | ~5 recent spins |
| 35 | [Scar Tissue][35] | Red Hot Chili Peppers | Californication (Remastered) | 1999 | ~5 recent spins |
| 36 | [Cumbersome][36] | Seven Mary Three | American Standard | 1995 | ~5 recent spins |
| 37 | [Kerosene][37] | The Warning | Kerosene - Single | 2026 | ~5 recent spins |
| 38 | [Don't Wanna Go Home Tonight][38] | Three Days Grace | Alienation | 2025 | ~5 recent spins |
| 39 | [Janie's Got a Gun][39] | Aerosmith | 20th Century Masters - The Millennium Collection: The Best of Aerosmith | 1989 |  |
| 40 | [Down In a Hole][40] | Alice In Chains | Dirt (Remastered) | 1992 |  |
| 41 | [Monsters (feat. blackbear)][41] | All Time Low | Wake Up, Sunshine | 2020 |  |
| 42 | [My Own Prison][42] | Creed | My Own Prison | 1997 |  |
| 43 | [Touch, Peel and Stand][43] | Days of the New | Days of the New | 1997 |  |
| 44 | [Epic][44] | Faith No More | The Real Thing | 1989 |  |
| 45 | [Drive][45] | Incubus | Make Yourself | 1999 |  |
| 46 | [I Found Love (When I Found You)][46] | Kenny Wayne Shepherd | Trouble Is... 25 | 1997 |  |
| 47 | [Behind Blue Eyes][47] | Limp Bizkit | Results May Vary | 2003 |  |
| 48 | [Free Bird][48] | Lynyrd Skynyrd | Pronounced Leh-Nerd Skin-Nerd | 1973 |  |
| 49 | [For Whom the Bell Tolls][49] | Metallica | Ride the Lightning (Remastered) [2016 Remastered Version] | 1984 |  |
| 50 | [She Hates Me][50] | Puddle of Mudd | Come Clean | 2001 |  |
| 51 | [Savior][51] | Rise Against | Appeal to Reason | 2008 |  |
| 52 | [Click Click Boom][52] | Saliva | Every Six Seconds | 2001 |  |
| 53 | [Spoonman][53] | Soundgarden | Superunknown (20th Anniversary) | 1994 |  |
| 54 | [Creep][54] | Stone Temple Pilots | Thank You | 1992 |  |
| 55 | [Gone Away][55] | The Offspring | Ixnay on the Hombre | 1997 |  |
| 56 | [Paint It, Black][56] | The Rolling Stones | Aftermath (US Version) | 1966 |  |
| 57 | [The Kill][57] | Thirty Seconds to Mars | A Beautiful Lie (20 Year Anniversary) | 2005 |  |
| 58 | [Paranoid][58] | Black Sabbath | Paranoid | 1970 |  |
| 59 | [Shine][59] | Collective Soul | Hints, Allegations & Things Left Unsaid | 1993 |  |
| 60 | [The World I Know][60] | Collective Soul | Home | 2006 |  |
| 61 | [One Last Breath][61] | Creed | Weathered | 2001 |  |
| 62 | [Stupify][62] | Disturbed | The Sickness | 2000 |  |
| 63 | [Centuries][63] | Fall Out Boy | American Beauty / American Psycho | 2014 |  |
| 64 | [Paralyzer][64] | Finger Eleven | Them Vs. You Vs. Me (Deluxe Edition) | 2007 |  |
| 65 | [All My Life][65] | Foo Fighters | One By One (Deluxe Edition) | 2002 |  |
| 66 | [I Stand Alone][66] | Godsmack | Faceless | 2002 |  |
| 67 | [Good Riddance (Time of Your Life)][67] | Green Day | The Green Day Collection | 1997 |  |
| 68 | [Pardon Me][68] | Incubus | Make Yourself | 1999 |  |
| 69 | [Black Dog][69] | Led Zeppelin | Led Zeppelin IV (Remastered) | 1971 |  |
| 70 | [Break Stuff][70] | Limp Bizkit | Significant Other | 1999 |  |
| 71 | [My Way][71] | Limp Bizkit | Chocolate Starfish And The Hot Dog Flavored Water | 2000 |  |
| 72 | [Sex and Candy][72] | Marcy Playground | Sex and Candy - Single | 1997 |  |
| 73 | [Fade to Black][73] | Metallica | Ride the Lightning (Remastered) [2016 Remastered Version] | 1984 |  |
| 74 | [Closer][74] | Nine Inch Nails | The Downward Spiral | 1994 |  |
| 75 | [Smells Like Teen Spirit][75] | Nirvana | Nevermind | 1991 |  |
| 76 | [Every Rose Has Its Thorn][76] | Poison | Open Up and Say... Ahh! (20th Anniversary Edition) | 1988 |  |
| 77 | [Footsteps][77] | Pop Evil | Up | 2015 |  |
| 78 | [Dragula][78] | Rob Zombie | Hellbilly Deluxe | 1998 |  |
| 79 | [Save Me][79] | Shinedown | Us and Them | 2005 |  |
| 80 | [Black Hole Sun][80] | Soundgarden | Superunknown (Deluxe Edition) | 1994 |  |
| 81 | [Outside][81] | Staind | Break the Cycle | 2001 |  |
| 82 | [Toxicity][82] | System Of A Down | Toxicity | 2001 |  |
| 83 | [Stressed Out][83] | twenty one pilots | Blurryface | 2015 |  |
| 84 | [Highway to Hell][84] | AC/DC | Highway to Hell | 1979 |  |
| 85 | [Dream On][85] | Aerosmith | Aerosmith | 1973 |  |
| 86 | [Sweet Emotion][86] | Aerosmith | Toys In The Attic | 1975 |  |
| 87 | [I Stay Away][87] | Alice In Chains | Jar of Flies - EP | 1994 |  |
| 88 | [Man in the Box][88] | Alice In Chains | Facelift | 1990 |  |
| 89 | [Smooth Criminal][89] | Alien Ant Farm | Smooth Criminal - Single | 2001 |  |
| 90 | [Like a Stone][90] | Audioslave | Audioslave | 2002 |  |
| 91 | [War Pigs][91] | Black Sabbath | The Ultimate Collection | 1970 |  |
| 92 | [Wanted Dead or Alive][92] | Bon Jovi | Slippery When Wet | 1986 |  |
| 93 | [So Cold][93] | Breaking Benjamin | We Are Not Alone | 2004 |  |
| 94 | [Crazy Bitch][94] | Buckcherry | 15 | 2005 |  |
| 95 | [Mother][95] | Danzig | Danzig | 1988 |  |
| 96 | [Land of Confusion][96] | Disturbed | Ten Thousand Fists | 2005 |  |
| 97 | [Bodies][97] | Drowning Pool | Sinner | 2001 |  |
| 98 | [Sugar, We're Goin Down][98] | Fall Out Boy | Believers Never Die - Greatest Hits (Bonus Track Version) | 2005 |  |
| 99 | [Everlong][99] | Foo Fighters | The Colour And The Shape | 1997 |  |
| 100 | [Hemorrhage (In My Hands)][100] | Fuel | Something Like Human | 2000 |  |
| 101 | [Bulletproof][101] | Godsmack | When Legends Rise | 2018 |  |
| 102 | [Boulevard of Broken Dreams][102] | Green Day | American Idiot | 2004 |  |
| 103 | [Brain Stew][103] | Green Day | The Green Day Collection | 1995 |  |
| 104 | [Civil War][104] | Guns N' Roses | Greatest Hits | 1991 |  |
| 105 | [Knockin' On Heaven's Door][105] | Guns N' Roses | Use Your Illusion II | 1991 |  |
| 106 | [Paradise City][106] | Guns N' Roses | Appetite For Destruction | 1987 |  |
| 107 | [Jump Around][107] | House of Pain | House of Pain (Fine Malt Lyrics) | 1992 |  |
| 108 | [Wish You Were Here][108] | Incubus | Morning View | 2001 |  |
| 109 | [Coming Undone][109] | Korn | See You On the Other Side | 2005 |  |
| 110 | [Freak On a Leash][110] | Korn | Follow The Leader | 1998 |  |
| 111 | [Immigrant Song][111] | Led Zeppelin | Led Zeppelin III (Remastered) | 1970 |  |
| 112 | [Fly Away][112] | Lenny Kravitz | Greatest Hits | 1998 |  |
| 113 | [Somewhere I Belong][113] | LINKIN PARK | Meteora (Deluxe Edition) | 2003 |  |
| 114 | [Sad But True][114] | Metallica | Metallica (Deluxe Box Set) | 1991 |  |
| 115 | [Wherever I May Roam][115] | Metallica | Metallica (Deluxe Box Set) | 1991 |  |
| 116 | [Photograph][116] | Nickelback | All the Right Reasons | 2005 |  |
| 117 | [Rattle The Cage (feat. John 5)][117] | Nickelback | Everything Under The Sun | 2026 |  |
| 118 | [All Apologies][118] | Nirvana | In Utero (20th Anniversary Edition) | 1993 |  |
| 119 | [Heart-Shaped Box][119] | Nirvana | In Utero (20th Anniversary Edition) | 1993 |  |
| 120 | [In Bloom][120] | Nirvana | Nevermind | 1991 |  |
| 121 | [Rape Me][121] | Nirvana | In Utero (20th Anniversary Edition) | 1993 |  |
| 122 | [The Man Who Sold the World (Rehearsal)][122] | Nirvana | MTV Unplugged In New York (Live Acoustic) [25th Anniversary Edition] | 1994 |  |
| 123 | [Mama, I'm Coming Home][123] | Ozzy Osbourne | No More Tears (Bonus Track Version) | 1991 |  |
| 124 | [Alive][124] | P.O.D. | Greatest Hits: The Atlantic Years | 2001 |  |
| 125 | [Walk][125] | Pantera | Vulgar Display of Power | 1992 |  |
| 126 | [Last Resort][126] | Papa Roach | Infest | 2000 |  |
| 127 | [Black][127] | Pearl Jam | Ten | 1991 |  |
| 128 | [Yellow Ledbetter][128] | Pearl Jam | Jeremy - Single | 1992 |  |
| 129 | [Bohemian Rhapsody][129] | Queen | Greatest Hits I, II & III: The Platinum Collection | 1975 |  |
| 130 | [Killing In The Name][130] | Rage Against the Machine | Rage Against The Machine - XX (20th Anniversary Special Edition) | 1992 |  |
| 131 | [Black Betty][131] | Ram Jam | The Very Best of Ram Jam | 1977 |  |
| 132 | [Otherside][132] | Red Hot Chili Peppers | Californication (Deluxe Edition) | 1999 |  |
| 133 | [Soul to Squeeze][133] | Red Hot Chili Peppers | Greatest Hits | 1993 |  |
| 134 | [Broken][134] | Seether | Disclaimer II | 2002 |  |
| 135 | [Fine Again][135] | Seether | Disclaimer II | 2002 |  |
| 136 | [Young Again][136] | Shinedown | EI8HT | 2025 |  |
| 137 | [Fade][137] | Staind | Break the Cycle | 2001 |  |
| 138 | [Dead & Bloated][138] | Stone Temple Pilots | Stricken - Metal Hits | 1992 |  |
| 139 | [Plush][139] | Stone Temple Pilots | Thank You | 1992 |  |
| 140 | [Wicked Garden][140] | Stone Temple Pilots | Thank You | 1992 |  |
| 141 | [Zombie][141] | The Cranberries | Stars: The Best of the Cranberries 1992-2002 | 1994 |  |
| 142 | [Self Esteem][142] | The Offspring | Smash | 1994 |  |
| 143 | [You're Gonna Go Far, Kid][143] | The Offspring | Rise and Fall, Rage and Grace | 2008 |  |
| 144 | [Bullet with Butterfly Wings][144] | The Smashing Pumpkins | Rotten Apples: Greatest Hits | 1995 |  |
| 145 | [Seven Nation Army][145] | The White Stripes | Elephant | 2003 |  |
| 146 | [Semi-Charmed Life][146] | Third Eye Blind | A Collection (Remastered) | 1997 |  |
| 147 | [Animal I Have Become][147] | Three Days Grace | One-X (Deluxe Edition) | 2006 |  |
| 148 | [Just Like You][148] | Three Days Grace | Three Days Grace (Expanded Edition) | 2003 |  |
| 149 | [Never Too Late][149] | Three Days Grace | One-X (Deluxe Edition) | 2006 |  |
| 150 | [I Will Not Bow][150] | Breaking Benjamin | Dear Agony | 2009 |  |
| 151 | [Pour Some Sugar On Me][151] | Def Leppard | The Story So Far: The Best of Def Leppard (Deluxe Edition) | 1987 |  |
| 152 | [Stricken][152] | Disturbed | Ten Thousand Fists | 2005 |  |
| 153 | [Who Will You Follow][153] | Evanescence | Sanctuary | 2026 |  |
| 154 | [ZOMBIFIED][154] | Falling In Reverse | Voices in My Head - Single | 2022 |  |
| 155 | [Re-Align][155] | Godsmack | Faceless | 2003 |  |
| 156 | [Bawitdaba][156] | Kid Rock | Devil Without a Cause | 1998 |  |
| 157 | [Cult of Personality][157] | Living Colour | Cult of Personality EP | 1988 |  |
| 158 | [Come As You Are][158] | Nirvana | Nevermind | 1991 |  |
| 159 | [Crazy Train][159] | Ozzy Osbourne | Blizzard of Ozz (40th Anniversary Expanded Edition) | 1980 |  |
| 160 | [Mr. Crowley][160] | Ozzy Osbourne | Memoirs of a Madman | 1980 |  |
| 161 | [Over the Mountain][161] | Ozzy Osbourne | Diary of a Madman (Remastered Original Recording) | 1981 |  |
| 162 | [Under the Graveyard][162] | Ozzy Osbourne | Under the Graveyard - Single | 2019 |  |
| 163 | [Control][163] | Puddle of Mudd | Come Clean | 2001 |  |
| 164 | [We Will Rock You][164] | Queen | Greatest Hits I, II & III: The Platinum Collection | 1977 |  |
| 165 | [Cum On Feel the Noize][165] | Quiet Riot | Greatest Hits | 1983 |  |
| 166 | [Under the Bridge][166] | Red Hot Chili Peppers | Blood Sugar Sex Magik (Deluxe Edition) | 1991 |  |
| 167 | [Fake It][167] | Seether | Finding Beauty In Negative Spaces (Bonus Track Version) | 2007 |  |
| 168 | [Simple Man][168] | Shinedown | Simple Man - Single | 2003 |  |
| 169 | [Fat Lip][169] | Sum 41 | All Killer, No Filler | 2001 |  |
| 170 | [Aerials][170] | System Of A Down | Toxicity | 2001 |  |
| 171 | [The Kids Aren't Alright][171] | The Offspring | SUPERCHARGED: WORLDWIDE IN '25 | 1998 |  |
| 172 | [Sober][172] | TOOL | Undertow | 1993 |  |

[1]: https://music.apple.com/us/song/voices-in-my-head/1622461652
[2]: https://music.apple.com/us/song/awaken/1771475246
[3]: https://music.apple.com/us/song/afterlife/1891104596
[4]: https://music.apple.com/us/song/heavy-is-the-crown/1766137053
[5]: https://music.apple.com/us/song/even-if-it-kills-me/1786479803
[6]: https://music.apple.com/us/song/i-will-not-break/1793862191
[7]: https://music.apple.com/us/song/hey-you/1646032786
[8]: https://music.apple.com/us/song/for-the-glory/1695704310
[9]: https://music.apple.com/us/song/liar/1759651765
[10]: https://music.apple.com/us/song/dead-don-t-die/1606457290
[11]: https://music.apple.com/us/song/so-called-life/1609130421
[12]: https://music.apple.com/us/song/ramon-ayala/1647021685
[13]: https://music.apple.com/us/song/how-you-remind-me/214475478
[14]: https://music.apple.com/us/song/ensenada/1820485970
[15]: https://music.apple.com/us/song/something-wicked/6766252959
[16]: https://music.apple.com/us/song/comedown/1707602649
[17]: https://music.apple.com/us/song/free/1872250568
[18]: https://music.apple.com/us/song/need-a-favor/1688698795
[19]: https://music.apple.com/us/song/what-i-got/1440839096
[20]: https://music.apple.com/us/song/broken-mirror/1774393636
[21]: https://music.apple.com/us/song/higher/1440718218
[22]: https://music.apple.com/us/song/bad-guy-feat-saraya/1741617070
[23]: https://music.apple.com/us/song/eye-of-the-storm/6765775795
[24]: https://music.apple.com/us/song/when-i-come-around/1160082350
[25]: https://music.apple.com/us/song/even-flow/425465318
[26]: https://music.apple.com/us/song/bother/214470532
[27]: https://music.apple.com/us/song/free-fallin/1469579716
[28]: https://music.apple.com/us/song/if-you-could-only-see/1440911665
[29]: https://music.apple.com/us/song/name-in-blood/1859687600
[30]: https://music.apple.com/us/song/glycerine/1707602651
[31]: https://music.apple.com/us/song/december/1576793373
[32]: https://music.apple.com/us/song/whatever/1440715666
[33]: https://music.apple.com/us/song/the-middle/1450030115
[34]: https://music.apple.com/us/song/around-the-world/945575407
[35]: https://music.apple.com/us/song/scar-tissue/945575409
[36]: https://music.apple.com/us/song/cumbersome/321977255
[37]: https://music.apple.com/us/song/kerosene/1878542369
[38]: https://music.apple.com/us/song/don-t-wanna-go-home-tonight/1811868681
[39]: https://music.apple.com/us/song/janie-s-got-a-gun/1440746605
[40]: https://music.apple.com/us/song/down-in-a-hole/157316706
[41]: https://music.apple.com/us/song/monsters-feat-blackbear/1499013886
[42]: https://music.apple.com/us/song/my-own-prison/1440666233
[43]: https://music.apple.com/us/song/touch-peel-and-stand/1423333503
[44]: https://music.apple.com/us/song/epic/83385347
[45]: https://music.apple.com/us/song/drive/187454421
[46]: https://music.apple.com/us/song/i-found-love-when-i-found-you/1639863181
[47]: https://music.apple.com/us/song/behind-blue-eyes/1440874577
[48]: https://music.apple.com/us/song/free-bird/1440838661
[49]: https://music.apple.com/us/song/for-whom-the-bell-tolls/579149036
[50]: https://music.apple.com/us/song/she-hates-me/1450664889
[51]: https://music.apple.com/us/song/savior/1440852127
[52]: https://music.apple.com/us/song/click-click-boom/1423175286
[53]: https://music.apple.com/us/song/spoonman/1440811873
[54]: https://music.apple.com/us/song/creep/3631572
[55]: https://music.apple.com/us/song/gone-away/1440901678
[56]: https://music.apple.com/us/song/paint-it-black/1440745782
[57]: https://music.apple.com/us/song/the-kill/1867087254
[58]: https://music.apple.com/us/song/paranoid/785232521
[59]: https://music.apple.com/us/song/shine/1576789671
[60]: https://music.apple.com/us/song/the-world-i-know/120197145
[61]: https://music.apple.com/us/song/one-last-breath/1440738795
[62]: https://music.apple.com/us/song/stupify/1030601026
[63]: https://music.apple.com/us/song/centuries/1440826614
[64]: https://music.apple.com/us/song/paralyzer/1440767124
[65]: https://music.apple.com/us/song/all-my-life/538257185
[66]: https://music.apple.com/us/song/i-stand-alone/1440900494
[67]: https://music.apple.com/us/song/good-riddance-time-of-your-life/346251574
[68]: https://music.apple.com/us/song/pardon-me/187454524
[69]: https://music.apple.com/us/song/black-dog/580708177
[70]: https://music.apple.com/us/song/break-stuff/1440754477
[71]: https://music.apple.com/us/song/my-way/1440843064
[72]: https://music.apple.com/us/song/sex-and-candy/1518392883
[73]: https://music.apple.com/us/song/fade-to-black/579149037
[74]: https://music.apple.com/us/song/closer/1440837621
[75]: https://music.apple.com/us/song/smells-like-teen-spirit/1440783625
[76]: https://music.apple.com/us/song/every-rose-has-its-thorn/716552556
[77]: https://music.apple.com/us/song/footsteps/1030784080
[78]: https://music.apple.com/us/song/dragula/1440845806
[79]: https://music.apple.com/us/song/save-me/80809256
[80]: https://music.apple.com/us/song/black-hole-sun/1440855436
[81]: https://music.apple.com/us/song/outside/263059095
[82]: https://music.apple.com/us/song/toxicity/273714713
[83]: https://music.apple.com/us/song/stressed-out/974485474
[84]: https://music.apple.com/us/song/highway-to-hell/574044008
[85]: https://music.apple.com/us/song/dream-on/1658644941
[86]: https://music.apple.com/us/song/sweet-emotion/1883816642
[87]: https://music.apple.com/us/song/i-stay-away/268435302
[88]: https://music.apple.com/us/song/man-in-the-box/274953022
[89]: https://music.apple.com/us/song/smooth-criminal/406253466
[90]: https://music.apple.com/us/song/like-a-stone/208294873
[91]: https://music.apple.com/us/song/war-pigs/1198293356
[92]: https://music.apple.com/us/song/wanted-dead-or-alive/1422955215
[93]: https://music.apple.com/us/song/so-cold/1440809397
[94]: https://music.apple.com/us/song/crazy-bitch/140862717
[95]: https://music.apple.com/us/song/mother/1440880961
[96]: https://music.apple.com/us/song/land-of-confusion/1030228543
[97]: https://music.apple.com/us/song/bodies/1440777727
[98]: https://music.apple.com/us/song/sugar-we-re-goin-down/1440799364
[99]: https://music.apple.com/us/song/everlong/362133505
[100]: https://music.apple.com/us/song/hemorrhage-in-my-hands/203911976
[101]: https://music.apple.com/us/song/bulletproof/1710147290
[102]: https://music.apple.com/us/song/boulevard-of-broken-dreams/1161539476
[103]: https://music.apple.com/us/song/brain-stew/346249616
[104]: https://music.apple.com/us/song/civil-war/1533361064
[105]: https://music.apple.com/us/song/knockin-on-heaven-s-door/1389971325
[106]: https://music.apple.com/us/song/paradise-city/1377813298
[107]: https://music.apple.com/us/song/jump-around/1604628161
[108]: https://music.apple.com/us/song/wish-you-were-here/271792734
[109]: https://music.apple.com/us/song/coming-undone/1594715396
[110]: https://music.apple.com/us/song/freak-on-a-leash/1165631037
[111]: https://music.apple.com/us/song/immigrant-song/580708280
[112]: https://music.apple.com/us/song/fly-away/723338326
[113]: https://music.apple.com/us/song/somewhere-i-belong/590423282
[114]: https://music.apple.com/us/song/sad-but-true/1572051819
[115]: https://music.apple.com/us/song/wherever-i-may-roam/1572051822
[116]: https://music.apple.com/us/song/photograph/214403497
[117]: https://music.apple.com/us/song/rattle-the-cage-feat-john-5/6784018118
[118]: https://music.apple.com/us/song/all-apologies/1440859612
[119]: https://music.apple.com/us/song/heart-shaped-box/1440859107
[120]: https://music.apple.com/us/song/in-bloom/1440783633
[121]: https://music.apple.com/us/song/rape-me/1440859114
[122]: https://music.apple.com/us/song/the-man-who-sold-the-world-rehearsal/1545867152
[123]: https://music.apple.com/us/song/mama-i-m-coming-home/209695192
[124]: https://music.apple.com/us/song/alive/204672782
[125]: https://music.apple.com/us/song/walk/1049189260
[126]: https://music.apple.com/us/song/last-resort/1450006105
[127]: https://music.apple.com/us/song/black/425465351
[128]: https://music.apple.com/us/song/yellow-ledbetter/400864988
[129]: https://music.apple.com/us/song/bohemian-rhapsody/1440650711
[130]: https://music.apple.com/us/song/killing-in-the-name/578028952
[131]: https://music.apple.com/us/song/black-betty/216088341
[132]: https://music.apple.com/us/song/otherside/948446133
[133]: https://music.apple.com/us/song/soul-to-squeeze/947701037
[134]: https://music.apple.com/us/song/broken/1440652013
[135]: https://music.apple.com/us/song/fine-again/1440651869
[136]: https://music.apple.com/us/song/young-again/1877229743
[137]: https://music.apple.com/us/song/fade/263058447
[138]: https://music.apple.com/us/song/dead-bloated/1596122743
[139]: https://music.apple.com/us/song/plush/3631541
[140]: https://music.apple.com/us/song/wicked-garden/3631553
[141]: https://music.apple.com/us/song/zombie/1440735264
[142]: https://music.apple.com/us/song/self-esteem/1485034811
[143]: https://music.apple.com/us/song/you-re-gonna-go-far-kid/1440887175
[144]: https://music.apple.com/us/song/bullet-with-butterfly-wings/712732631
[145]: https://music.apple.com/us/song/seven-nation-army/1533513537
[146]: https://music.apple.com/us/song/semi-charmed-life/164394654
[147]: https://music.apple.com/us/song/animal-i-have-become/266221967
[148]: https://music.apple.com/us/song/just-like-you/269975543
[149]: https://music.apple.com/us/song/never-too-late/266221984
[150]: https://music.apple.com/us/song/i-will-not-bow/1440809138
[151]: https://music.apple.com/us/song/pour-some-sugar-on-me/1438626355
[152]: https://music.apple.com/us/song/stricken/1030228537
[153]: https://music.apple.com/us/song/who-will-you-follow/1891104594
[154]: https://music.apple.com/us/song/zombified/1622461653
[155]: https://music.apple.com/us/song/re-align/1440900495
[156]: https://music.apple.com/us/song/bawitdaba/586705734
[157]: https://music.apple.com/us/song/cult-of-personality/1734681083
[158]: https://music.apple.com/us/song/come-as-you-are/1440783636
[159]: https://music.apple.com/us/song/crazy-train/1531535287
[160]: https://music.apple.com/us/song/mr-crowley/911604129
[161]: https://music.apple.com/us/song/over-the-mountain/437515108
[162]: https://music.apple.com/us/song/under-the-graveyard/1486836089
[163]: https://music.apple.com/us/song/control/1450664882
[164]: https://music.apple.com/us/song/we-will-rock-you/1440651216
[165]: https://music.apple.com/us/song/cum-on-feel-the-noize/169782152
[166]: https://music.apple.com/us/song/under-the-bridge/948460560
[167]: https://music.apple.com/us/song/fake-it/1440747243
[168]: https://music.apple.com/us/song/simple-man/16232991
[169]: https://music.apple.com/us/song/fat-lip/1440921141
[170]: https://music.apple.com/us/song/aerials/273714765
[171]: https://music.apple.com/us/song/the-kids-aren-t-alright/1783160367
[172]: https://music.apple.com/us/song/sober/1474185453
