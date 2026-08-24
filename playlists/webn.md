# WEBN

Songs played on Cincinnati's 102.7 WEBN (https://webn.iheart.com/) — active/classic rock rotation drawn from iHeart track history, archived 2017–2026 WEBN recently-played/top-song pages, and recent airplay monitors (SpinCounts, RadioWave Monitor). Includes verified WEBN spins from publicly available airplay data, plus popular catalog additions (1–2 per artist) that fit the station's rock format.

## Playlist Instructions

### Management

- This file is the source of truth for the WEBN playlist
- Use the **playlist-creator** skill for updates
- Prefer tracks with documented WEBN airplay; avoid guessing deep cuts with no airplay evidence
- When expanding, scrape current airplay sources and merge new unique tracks
- Popular catalog additions (note: `popular catalog addition`) are limited to 1–2 well-known, format-fitting songs per artist already represented via airplay
- Sync with: `node .github/skills/apple-music-api/sync.mjs playlists/webn.md`

### Ordering

- Airplay tracks first, ordered by observed recent airplay frequency (highest first), then artist name, then song title
- Popular catalog additions after airplay tracks, sorted by artist name, then song title
- After edits, renumber rows sequentially from 1

### Scope

- Rock tracks associated with WEBN Cincinnati's active/classic rock format
- Studio recordings preferred; explicit versions preferred when available
- No live-only performances when a studio version exists
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
| 13 | [Something Wicked][13] | Breaking Benjamin | Something Wicked - Single | 2026 | ~9 recent spins |
| 14 | [Comedown][14] | Bush | Loaded: The Greatest Hits 1994-2023 | 1994 | ~9 recent spins |
| 15 | [Free][15] | Beartooth | Free - Single | 2026 | ~8 recent spins |
| 16 | [Need a Favor][16] | Jelly Roll | Whitsitt Chapel | 2023 | ~7 recent spins |
| 17 | [Broken Mirror][17] | Architects | The Sky, the Earth & All Between | 2025 | ~6 recent spins |
| 18 | [Higher][18] | Creed | Greatest Hits | 1999 | ~6 recent spins |
| 19 | [Bad Guy (feat. Saraya)][19] | Falling In Reverse | Popular Monster | 2024 | ~6 recent spins |
| 20 | [Eye of the Storm][20] | Five Finger Death Punch | Eye of the Storm - Single | 2026 | ~6 recent spins |
| 21 | [When I Come Around][21] | Green Day | Dookie | 1994 | ~6 recent spins |
| 22 | [Even Flow][22] | Pearl Jam | Ten | 1991 | ~6 recent spins |
| 23 | [Bother][23] | Stone Sour | Stone Sour | 2002 | ~6 recent spins |
| 24 | [Free Fallin'][24] | Tom Petty | Greatest Hits | 1989 | ~6 recent spins |
| 25 | [If You Could Only See][25] | Tonic | Lemon Parade | 1996 | ~6 recent spins |
| 26 | [Name In Blood][26] | Black Label Society | Engines of Demolition | 2026 | ~5 recent spins |
| 27 | [Glycerine][27] | Bush | Loaded: The Greatest Hits 1994-2023 | 1994 | ~5 recent spins |
| 28 | [December][28] | Collective Soul | Collective Soul | 1995 | ~5 recent spins |
| 29 | [Whatever][29] | Godsmack | Godsmack | 1997 | ~5 recent spins |
| 30 | [The Middle][30] | Jimmy Eat World | Bleed American | 2001 | ~5 recent spins |
| 31 | [Around the World][31] | Red Hot Chili Peppers | Californication (Remastered) | 1999 | ~5 recent spins |
| 32 | [Scar Tissue][32] | Red Hot Chili Peppers | Californication (Remastered) | 1999 | ~5 recent spins |
| 33 | [Cumbersome][33] | Seven Mary Three | American Standard | 1995 | ~5 recent spins |
| 34 | [Kerosene][34] | The Warning | Kerosene - Single | 2026 | ~5 recent spins |
| 35 | [Don't Wanna Go Home Tonight][35] | Three Days Grace | Alienation | 2025 | ~5 recent spins |
| 36 | [Janie's Got a Gun][36] | Aerosmith | 20th Century Masters - The Millennium Collection: The Best of Aerosmith | 1989 |  |
| 37 | [Down In a Hole][37] | Alice In Chains | Dirt (Remastered) | 1992 |  |
| 38 | [Monsters (feat. blackbear)][38] | All Time Low | Wake Up, Sunshine | 2020 |  |
| 39 | [My Own Prison][39] | Creed | My Own Prison | 1997 |  |
| 40 | [Touch, Peel and Stand][40] | Days of the New | Days of the New | 1997 |  |
| 41 | [Epic][41] | Faith No More | The Real Thing | 1989 |  |
| 42 | [Drive][42] | Incubus | Make Yourself | 1999 |  |
| 43 | [I Found Love (When I Found You)][43] | Kenny Wayne Shepherd | Trouble Is... 25 | 1997 |  |
| 44 | [Behind Blue Eyes][44] | Limp Bizkit | Results May Vary | 2003 |  |
| 45 | [Free Bird][45] | Lynyrd Skynyrd | Pronounced Leh-Nerd Skin-Nerd | 1973 |  |
| 46 | [For Whom the Bell Tolls][46] | Metallica | Ride the Lightning (Remastered) (2016 Remastered Version) | 1984 |  |
| 47 | [She Hates Me][47] | Puddle of Mudd | Come Clean | 2001 |  |
| 48 | [Savior][48] | Rise Against | Appeal to Reason | 2008 |  |
| 49 | [Click Click Boom][49] | Saliva | Every Six Seconds | 2001 |  |
| 50 | [Spoonman][50] | Soundgarden | Superunknown (20th Anniversary) | 1994 |  |
| 51 | [Creep][51] | Stone Temple Pilots | Thank You | 1992 |  |
| 52 | [Gone Away][52] | The Offspring | Ixnay on the Hombre | 1997 |  |
| 53 | [Paint It, Black][53] | The Rolling Stones | Aftermath (US Version) | 1966 |  |
| 54 | [The Kill][54] | Thirty Seconds to Mars | A Beautiful Lie (20 Year Anniversary) | 2005 |  |
| 55 | [Paranoid][55] | Black Sabbath | Paranoid | 1970 |  |
| 56 | [Shine][56] | Collective Soul | Hints, Allegations & Things Left Unsaid | 1993 |  |
| 57 | [The World I Know][57] | Collective Soul | Home | 2006 |  |
| 58 | [One Last Breath][58] | Creed | Weathered | 2001 |  |
| 59 | [Stupify][59] | Disturbed | The Sickness | 2000 |  |
| 60 | [Centuries][60] | Fall Out Boy | American Beauty / American Psycho | 2014 |  |
| 61 | [Paralyzer][61] | Finger Eleven | Them Vs. You Vs. Me (Deluxe Edition) | 2007 |  |
| 62 | [All My Life][62] | Foo Fighters | One By One (Deluxe Edition) | 2002 |  |
| 63 | [I Stand Alone][63] | Godsmack | Faceless | 2002 |  |
| 64 | [Good Riddance (Time of Your Life)][64] | Green Day | The Green Day Collection | 1997 |  |
| 65 | [Pardon Me][65] | Incubus | Make Yourself | 1999 |  |
| 66 | [Black Dog][66] | Led Zeppelin | Led Zeppelin IV (Remastered) | 1971 |  |
| 67 | [Break Stuff][67] | Limp Bizkit | Significant Other | 1999 |  |
| 68 | [My Way][68] | Limp Bizkit | Chocolate Starfish And The Hot Dog Flavored Water | 2000 |  |
| 69 | [Sex and Candy][69] | Marcy Playground | Sex and Candy - Single | 1997 |  |
| 70 | [Fade to Black][70] | Metallica | Ride the Lightning (Remastered) (2016 Remastered Version) | 1984 |  |
| 71 | [Closer][71] | Nine Inch Nails | The Downward Spiral | 1994 |  |
| 72 | [Smells Like Teen Spirit][72] | Nirvana | Nevermind | 1991 |  |
| 73 | [Every Rose Has Its Thorn][73] | Poison | Open Up and Say... Ahh! (20th Anniversary Edition) | 1988 |  |
| 74 | [Footsteps][74] | Pop Evil | Up | 2015 |  |
| 75 | [Dragula][75] | Rob Zombie | Hellbilly Deluxe | 1998 |  |
| 76 | [Save Me][76] | Shinedown | Us and Them | 2005 |  |
| 77 | [Black Hole Sun][77] | Soundgarden | Superunknown (Deluxe Edition) | 1994 |  |
| 78 | [Outside][78] | Staind | Break the Cycle | 2001 |  |
| 79 | [Toxicity][79] | System Of A Down | Toxicity | 2001 |  |
| 80 | [Stressed Out][80] | twenty one pilots | Blurryface | 2015 |  |
| 81 | [Highway to Hell][81] | AC/DC | Highway to Hell | 1979 |  |
| 82 | [Dream On][82] | Aerosmith | Aerosmith | 1973 |  |
| 83 | [Sweet Emotion][83] | Aerosmith | Toys In The Attic | 1975 |  |
| 84 | [I Stay Away][84] | Alice In Chains | Jar of Flies - EP | 1994 |  |
| 85 | [Man in the Box][85] | Alice In Chains | Facelift | 1990 |  |
| 86 | [Smooth Criminal][86] | Alien Ant Farm | Smooth Criminal - Single | 2001 |  |
| 87 | [Like a Stone][87] | Audioslave | Audioslave | 2002 |  |
| 88 | [War Pigs][88] | Black Sabbath | The Ultimate Collection | 1970 |  |
| 89 | [Wanted Dead or Alive][89] | Bon Jovi | Slippery When Wet | 1986 |  |
| 90 | [So Cold][90] | Breaking Benjamin | We Are Not Alone | 2004 |  |
| 91 | [Crazy Bitch][91] | Buckcherry | 15 | 2005 |  |
| 92 | [Mother][92] | Danzig | Danzig | 1988 |  |
| 93 | [Land of Confusion][93] | Disturbed | Ten Thousand Fists | 2005 |  |
| 94 | [Bodies][94] | Drowning Pool | Sinner | 2001 |  |
| 95 | [Sugar, We're Goin Down][95] | Fall Out Boy | Believers Never Die - Greatest Hits (Bonus Track Version) | 2005 |  |
| 96 | [Everlong][96] | Foo Fighters | The Colour And The Shape | 1997 |  |
| 97 | [Hemorrhage (In My Hands)][97] | Fuel | Something Like Human | 2000 |  |
| 98 | [Bulletproof][98] | Godsmack | When Legends Rise | 2018 |  |
| 99 | [Boulevard of Broken Dreams][99] | Green Day | American Idiot | 2004 |  |
| 100 | [Brain Stew][100] | Green Day | The Green Day Collection | 1995 |  |
| 101 | [Civil War][101] | Guns N' Roses | Greatest Hits | 1991 |  |
| 102 | [Knockin' On Heaven's Door][102] | Guns N' Roses | Use Your Illusion II | 1991 |  |
| 103 | [Paradise City][103] | Guns N' Roses | Appetite For Destruction | 1987 |  |
| 104 | [Jump Around][104] | House of Pain | House of Pain (Fine Malt Lyrics) | 1992 |  |
| 105 | [Wish You Were Here][105] | Incubus | Morning View | 2001 |  |
| 106 | [Coming Undone][106] | Korn | See You On the Other Side | 2005 |  |
| 107 | [Freak On a Leash][107] | Korn | Follow The Leader | 1998 |  |
| 108 | [Immigrant Song][108] | Led Zeppelin | Led Zeppelin III (Remastered) | 1970 |  |
| 109 | [Fly Away][109] | Lenny Kravitz | Greatest Hits | 1998 |  |
| 110 | [Somewhere I Belong][110] | LINKIN PARK | Meteora (Deluxe Edition) | 2003 |  |
| 111 | [Sad But True][111] | Metallica | Metallica (Deluxe Box Set) | 1991 |  |
| 112 | [Wherever I May Roam][112] | Metallica | Metallica (Deluxe Box Set) | 1991 |  |
| 113 | [All Apologies][113] | Nirvana | In Utero (20th Anniversary Edition) | 1993 |  |
| 114 | [Heart-Shaped Box][114] | Nirvana | In Utero (20th Anniversary Edition) | 1993 |  |
| 115 | [In Bloom][115] | Nirvana | Nevermind | 1991 |  |
| 116 | [Rape Me][116] | Nirvana | In Utero (20th Anniversary Edition) | 1993 |  |
| 117 | [Mama, I'm Coming Home][117] | Ozzy Osbourne | No More Tears (Bonus Track Version) | 1991 |  |
| 118 | [Alive][118] | P.O.D. | Greatest Hits: The Atlantic Years | 2001 |  |
| 119 | [Walk][119] | Pantera | Vulgar Display of Power | 1992 |  |
| 120 | [Last Resort][120] | Papa Roach | Infest | 2000 |  |
| 121 | [Black][121] | Pearl Jam | Ten | 1991 |  |
| 122 | [Yellow Ledbetter][122] | Pearl Jam | Jeremy - Single | 1992 |  |
| 123 | [Bohemian Rhapsody][123] | Queen | Greatest Hits I, II & III: The Platinum Collection | 1975 |  |
| 124 | [Killing In The Name][124] | Rage Against the Machine | Rage Against The Machine - XX (20th Anniversary Special Edition) | 1992 |  |
| 125 | [Black Betty][125] | Ram Jam | The Very Best of Ram Jam | 1977 |  |
| 126 | [Otherside][126] | Red Hot Chili Peppers | Californication (Deluxe Edition) | 1999 |  |
| 127 | [Soul to Squeeze][127] | Red Hot Chili Peppers | Greatest Hits | 1993 |  |
| 128 | [Broken][128] | Seether | Disclaimer II | 2002 |  |
| 129 | [Fine Again][129] | Seether | Disclaimer II | 2002 |  |
| 130 | [Young Again][130] | Shinedown | EI8HT | 2025 |  |
| 131 | [Fade][131] | Staind | Break the Cycle | 2001 |  |
| 132 | [Dead & Bloated][132] | Stone Temple Pilots | Stricken - Metal Hits | 1992 |  |
| 133 | [Plush][133] | Stone Temple Pilots | Thank You | 1992 |  |
| 134 | [Wicked Garden][134] | Stone Temple Pilots | Thank You | 1992 |  |
| 135 | [Zombie][135] | The Cranberries | Stars: The Best of the Cranberries 1992-2002 | 1994 |  |
| 136 | [Self Esteem][136] | The Offspring | Smash | 1994 |  |
| 137 | [You're Gonna Go Far, Kid][137] | The Offspring | Rise and Fall, Rage and Grace | 2008 |  |
| 138 | [Bullet with Butterfly Wings][138] | The Smashing Pumpkins | Rotten Apples: Greatest Hits | 1995 |  |
| 139 | [Seven Nation Army][139] | The White Stripes | Elephant | 2003 |  |
| 140 | [Animal I Have Become][140] | Three Days Grace | One-X (Deluxe Edition) | 2006 |  |
| 141 | [Just Like You][141] | Three Days Grace | Three Days Grace (Expanded Edition) | 2003 |  |
| 142 | [Never Too Late][142] | Three Days Grace | One-X (Deluxe Edition) | 2006 |  |
| 143 | [I Will Not Bow][143] | Breaking Benjamin | Dear Agony | 2009 |  |
| 144 | [Pour Some Sugar On Me][144] | Def Leppard | The Story So Far: The Best of Def Leppard (Deluxe Edition) | 1987 |  |
| 145 | [Stricken][145] | Disturbed | Ten Thousand Fists | 2005 |  |
| 146 | [Who Will You Follow][146] | Evanescence | Sanctuary | 2026 |  |
| 147 | [ZOMBIFIED][147] | Falling In Reverse | Voices in My Head - Single | 2022 |  |
| 148 | [Re-Align][148] | Godsmack | Faceless | 2003 |  |
| 149 | [Bawitdaba][149] | Kid Rock | Devil Without a Cause | 1998 |  |
| 150 | [Cult of Personality][150] | Living Colour | Cult of Personality EP | 1988 |  |
| 151 | [Come As You Are][151] | Nirvana | Nevermind | 1991 |  |
| 152 | [Crazy Train][152] | Ozzy Osbourne | Blizzard of Ozz (40th Anniversary Expanded Edition) | 1980 |  |
| 153 | [Mr. Crowley][153] | Ozzy Osbourne | Memoirs of a Madman | 1980 |  |
| 154 | [Over the Mountain][154] | Ozzy Osbourne | Diary of a Madman (Remastered Original Recording) | 1981 |  |
| 155 | [Under the Graveyard][155] | Ozzy Osbourne | Under the Graveyard - Single | 2019 |  |
| 156 | [Control][156] | Puddle of Mudd | Come Clean | 2001 |  |
| 157 | [We Will Rock You][157] | Queen | Greatest Hits I, II & III: The Platinum Collection | 1977 |  |
| 158 | [Cum On Feel the Noize][158] | Quiet Riot | Greatest Hits | 1983 |  |
| 159 | [Under the Bridge][159] | Red Hot Chili Peppers | Blood Sugar Sex Magik (Deluxe Edition) | 1991 |  |
| 160 | [Fake It][160] | Seether | Finding Beauty In Negative Spaces (Bonus Track Version) | 2007 |  |
| 161 | [Simple Man][161] | Shinedown | Simple Man - Single | 2003 |  |
| 162 | [Fat Lip][162] | Sum 41 | All Killer, No Filler | 2001 |  |
| 163 | [Aerials][163] | System Of A Down | Toxicity | 2001 |  |
| 164 | [The Kids Aren't Alright][164] | The Offspring | SUPERCHARGED: WORLDWIDE IN '25 | 1998 |  |
| 165 | [Sober][165] | TOOL | Undertow | 1993 |  |
| 166 | [Afterlife (From the Netflix Series "Devil May Cry")][166] | Evanescence | Afterlife (From the Netflix Series "Devil May Cry") - Single | 2025 | WEBN play history 2026; 24 sampled plays |
| 167 | [Darkness Settles In][167] | Five Finger Death Punch | F8 | 2020 | WEBN play history 2021–2026; 19 sampled plays |
| 168 | [Landmines][168] | Sum 41 | Heaven :x: Hell | 2023 | WEBN play history 2026; 16 sampled plays |
| 169 | [Just Pretend][169] | Bad Omens | THE DEATH OF PEACE OF MIND | 2022 | WEBN play history 2026; 15 sampled plays |
| 170 | [My Own Worst Enemy][170] | Lit | A Place In The Sun | 1999 | WEBN play history 2020–2026; 15 sampled plays |
| 171 | [Rx (Medicate)][171] | Theory of a Deadman | Wake Up Call | 2017 | WEBN play history 2020–2026; 15 sampled plays |
| 172 | [She Talks To Angels][172] | The Black Crowes | Shake Your Money Maker | 1990 | WEBN play history 2020–2026; 10 sampled plays |
| 173 | [My Hero][173] | Foo Fighters | Greatest Hits | 1997 | WEBN play history 2022–2026; 10 sampled plays |
| 174 | [Something In The Way (Remastered)][174] | Nirvana | Nevermind (30th Anniversary Super Deluxe) | 1991 | WEBN play history 2022–2026; 10 sampled plays |
| 175 | [The Man Who Sold the World (Live Acoustic)][175] | Nirvana | MTV Unplugged In New York (Live Acoustic) | 1994 | WEBN play history 2020–2026; 10 sampled plays; no Nirvana studio version exists |
| 176 | [Big Empty (2019 Remaster)][176] | Stone Temple Pilots | Purple (2019 Remaster) | 1994 | WEBN play history 2020–2026; 10 sampled plays |
| 177 | [Kryptonite][177] | 3 Doors Down | The Better Life (Deluxe Edition) | 1999 | WEBN play history 2020–2026; 9 sampled plays |
| 178 | [Angels Fall][178] | Breaking Benjamin | Dark Before Dawn | 2015 | WEBN play history 2021–2026; 9 sampled plays |
| 179 | [Ain't No Rest for the Wicked][179] | Cage the Elephant | Cage the Elephant (Expanded Edition) | 2008 | WEBN play history 2023–2026; 9 sampled plays |
| 180 | [The Unforgiven][180] | Metallica | Metallica (Deluxe Box Set) | 1991 | WEBN play history 2022–2026; 9 sampled plays |
| 181 | [Kill The Noise][181] | Papa Roach | Kill The Noise - Single | 2022 | WEBN play history 2021–2026; 9 sampled plays |
| 182 | [Last Kiss][182] | Pearl Jam | rearviewmirror (greatest hits 1991-2003) | 1998 | WEBN play history 2021–2026; 9 sampled plays |
| 183 | [For You][183] | Staind | Break the Cycle | 2001 | WEBN play history 2020–2026; 9 sampled plays |
| 184 | [Hunger Strike][184] | Temple of the Dog | Temple of the Dog | 1991 | WEBN play history 2021–2026; 9 sampled plays |
| 185 | [Say It Ain't So][185] | Weezer | Weezer (Deluxe Edition) | 1994 | WEBN play history 2020–2026; 9 sampled plays |
| 186 | [When I'm Gone (2023 Remaster)][186] | 3 Doors Down | Away From The Sun (Deluxe) | 2002 | WEBN play history 2020–2026; 8 sampled plays |
| 187 | [Sweet Dreams (Are Made of This)][187] | Marilyn Manson | Smells Like Children | 1995 | WEBN play history 2020–2026; 8 sampled plays |
| 188 | [Snow (Hey Oh)][188] | Red Hot Chili Peppers | Stadium Arcadium | 2006 | WEBN play history 2025–2026; 8 sampled plays |
| 189 | [MONSTERS][189] | Shinedown | ATTENTION ATTENTION | 2018 | WEBN play history 2020–2026; 8 sampled plays |
| 190 | [I Won't Back Down][190] | Tom Petty | Greatest Hits | 1989 | WEBN play history 2020–2026; 8 sampled plays |
| 191 | [Here I Go Again (1987 Version / 2017 Remaster)][191] | Whitesnake | Whitesnake (30th Anniversary Super Deluxe Edition) | 1987 | WEBN play history 2025–2026; 8 sampled plays |
| 192 | [Starless][192] | A Perfect Circle | Starless - Single | 2026 | WEBN play history 2026; 7 sampled plays |
| 193 | [You Shook Me All Night Long][193] | AC/DC | Back In Black | 1980 | WEBN play history 2021–2026; 7 sampled plays |
| 194 | [Sail][194] | AWOLNATION | Megalithic Symphony (10th Anniversary Deluxe Edition) | 2010 | WEBN play history 2025–2026; 7 sampled plays |
| 195 | [Comfortably Numb][195] | Pink Floyd | A Foot In the Door: The Best of Pink Floyd | 1980 | WEBN play history 2020–2026; 7 sampled plays |
| 196 | [When Legends Rise][196] | Godsmack | When Legends Rise | 2018 | WEBN play history 2020–2023; 7 sampled plays |
| 197 | [Keep Away][197] | Godsmack | Godsmack | 1997 | WEBN play history 2021–2026; 6 sampled plays |
| 198 | [Feel Good Inc][198] | Gorillaz | Feel Good Inc - EP | 2005 | WEBN play history 2025–2026; 6 sampled plays |
| 199 | [Hurt][199] | Johnny Cash | Unearthed (Box Set) | 2002 | WEBN play history 2023–2026; 6 sampled plays |
| 200 | [What I've Done][200] | LINKIN PARK | Minutes to Midnight (Deluxe Edition) | 2007 | WEBN play history 2022–2026; 6 sampled plays |
| 201 | [Lightning Crashes][201] | LIVE | Throwing Copper | 1994 | WEBN play history 2021–2026; 6 sampled plays |
| 202 | [Master of Puppets][202] | Metallica | Master of Puppets (Remastered) | 1986 | WEBN play history 2021–2026; 6 sampled plays |
| 203 | [Better Man][203] | Pearl Jam | rearviewmirror (greatest hits 1991-2003) | 1994 | WEBN play history 2020–2026; 6 sampled plays |
| 204 | [Headstrong][204] | Trapt | Trapt | 2002 | WEBN play history 2020–2026; 6 sampled plays |
| 205 | [More Human Than Human][205] | White Zombie | Astro Creep: 2000 Songs of Love, Destruction and Other Synthetic Delusions of the Electric Head | 1995 | WEBN play history 2025–2026; 6 sampled plays |
| 206 | [Screaming Suicide][206] | Metallica | 72 Seasons | 2023 | WEBN play history 2024–2025; 6 sampled plays |
| 207 | [King Nothing (Remastered)][207] | Metallica | Load (Remastered Deluxe Box Set) | 1996 | WEBN play history 2020–2025; 6 sampled plays |
| 208 | [Can't Stop][208] | Red Hot Chili Peppers | By the Way (Deluxe Edition) | 2002 | WEBN play history 2020–2025; 6 sampled plays |
| 209 | [Patience][209] | Chris Cornell | Patience - Single | 2020 | WEBN play history 2020–2022; 6 sampled plays |
| 210 | [Hail to the King][210] | Avenged Sevenfold | Hail to the King | 2013 | WEBN play history 2022–2026; 5 sampled plays |
| 211 | [Hard to Handle][211] | The Black Crowes | Shake Your Money Maker (30th Anniversary Deluxe Edition) | 1990 | WEBN play history 2020–2026; 5 sampled plays |
| 212 | [Cold][212] | Crossfade | Cold - Single | 2003 | WEBN play history 2025–2026; 5 sampled plays |
| 213 | [Going Under][213] | Evanescence | Fallen | 2003 | WEBN play history 2022–2026; 5 sampled plays |
| 214 | [Straight Out Of Line (2024 Remaster)][214] | Godsmack | Faceless (2024 Remaster) | 2003 | WEBN play history 2021–2026; 5 sampled plays |
| 215 | [Longview][215] | Green Day | International Superhits! | 1994 | WEBN play history 2022–2026; 5 sampled plays |
| 216 | [Lost][216] | LINKIN PARK | Lost Demos | 2023 | WEBN play history 2023–2026; 5 sampled plays |
| 217 | [One Step Closer][217] | LINKIN PARK | Hybrid Theory | 2000 | WEBN play history 2020–2026; 5 sampled plays |
| 218 | [One][218] | Metallica | ...And Justice for All (Remastered) | 1988 | WEBN play history 2025–2026; 5 sampled plays |
| 219 | [Turn the Page][219] | Metallica | Garage Inc. | 1998 | WEBN play history 2025–2026; 5 sampled plays |
| 220 | [I Don't Know][220] | Ozzy Osbourne | Blizzard of Ozz (40th Anniversary Expanded Edition) | 1980 | WEBN play history 2026; 5 sampled plays |
| 221 | [See U in Hell (From the Netflix Series "Devil May Cry")][221] | Papa Roach & Hanumankind | See U in Hell (From the Netflix Series "Devil May Cry") - Single | 2026 | WEBN play history 2026; 5 sampled plays |
| 222 | [Daughter (Remastered)][222] | Pearl Jam | Vs. | 1993 | WEBN play history 2026; 5 sampled plays |
| 223 | [Closing Time][223] | Semisonic | 20 #1's: One Hit Wonders | 1998 | WEBN play history 2022–2026; 5 sampled plays |
| 224 | [Duality][224] | Slipknot | Vol. 3 The Subliminal Verses | 2004 | WEBN play history 2021–2026; 5 sampled plays |
| 225 | [Meant to Live][225] | Switchfoot | The Beautiful Letdown (Deluxe Version) | 2003 | WEBN play history 2026; 5 sampled plays |
| 226 | [Kill Me Fast][226] | Three Days Grace | Alienation | 2025 | archived WEBN top songs 2025–2026; 5 snapshots |
| 227 | [Killing Fields][227] | Shinedown | Killing Fields - Single | 2025 | WEBN play history 2025; 5 sampled plays |
| 228 | [BRAINDEAD (feat. Toby Morse)][228] | Papa Roach | BRAINDEAD (feat. Toby Morse) - Single | 2025 | WEBN play history 2025; 5 sampled plays |
| 229 | [Song 2 (2012 Remaster)][229] | Blur | Blur | 1997 | WEBN play history 2020–2024; 5 sampled plays |
| 230 | [Nightmare][230] | Avenged Sevenfold | Nightmare | 2010 | WEBN play history 2021–2026; 4 sampled plays |
| 231 | [Send the Pain Below][231] | Chevelle | Wonder What's Next (Expanded Edition) | 2002 | WEBN play history 2020–2026; 4 sampled plays |
| 232 | [Prayer][232] | Disturbed | Believe | 2002 | WEBN play history 2021–2026; 4 sampled plays |
| 233 | [Lose Yourself][233] | Eminem | 8 Mile (Music From And Inspired By The Motion Picture) | 2002 | WEBN play history 2025–2026; 4 sampled plays |
| 234 | [Believer][234] | Imagine Dragons | Evolve | 2017 | WEBN play history 2023–2026; 4 sampled plays |
| 235 | [Faint][235] | LINKIN PARK | Meteora | 2003 | WEBN play history 2020–2026; 4 sampled plays |
| 236 | [Another Brick In the Wall, Pt. 2][236] | Pink Floyd | The Wall | 1979 | WEBN play history 2023–2026; 4 sampled plays |
| 237 | [You're Going Down][237] | SICK PUPPIES | Tri-Polar | 2009 | WEBN play history 2024–2026; 4 sampled plays |
| 238 | [The Kill (Bury Me)][238] | Thirty Seconds to Mars | A Beautiful Lie | 2005 | WEBN play history 2025–2026; 4 sampled plays |
| 239 | [We're Not Gonna Take It][239] | Twisted Sister | Stay Hungry | 1984 | WEBN play history 2020–2026; 4 sampled plays |
| 240 | [MORE THAN HATE][240] | Bilmuri | MORE THAN HATE - Single | 2025 | WEBN play history 2025; 4 sampled plays |
| 241 | [Kashmir][241] | Led Zeppelin | Physical Graffiti (Deluxe Edition) | 1975 | WEBN play history 2020–2023; 4 sampled plays |
| 242 | [Holiday][242] | Green Day | American Idiot | 2004 | WEBN play history 2022–2023; 4 sampled plays |
| 243 | [Dirty Deeds Done Dirt Cheap][243] | AC/DC | Dirty Deeds Done Dirt Cheap | 1976 | WEBN play history 2020–2022; 4 sampled plays |
| 244 | [Eye of the Storm][244] | Pop Evil | Eye of the Storm - Single | 2022 | archived WEBN top songs 2022; 4 snapshots |
| 245 | [Black Summer][245] | Red Hot Chili Peppers | Unlimited Love | 2022 | archived WEBN top songs 2022; 4 snapshots |
| 246 | [Give It Away][246] | Red Hot Chili Peppers | Blood Sugar Sex Magik | 1991 | WEBN play history 2020–2022; 4 sampled plays |
| 247 | [Help][247] | Papa Roach | Crooked Teeth (Deluxe) | 2017 | WEBN play history 2020–2021; 4 sampled plays |
| 248 | [Here Without You][248] | 3 Doors Down | Away from the Sun | 2002 | WEBN play history 2026; 3 sampled plays |
| 249 | [War Pigs / Luke's Wall][249] | Black Sabbath | Paranoid | 1970 | WEBN play history 2024–2026; 3 sampled plays |
| 250 | [Voices][250] | Disturbed | The Sickness | 2000 | WEBN play history 2025–2026; 3 sampled plays |
| 251 | [BURN IT DOWN][251] | LINKIN PARK | LIVING THINGS | 2012 | WEBN play history 2022–2026; 3 sampled plays |
| 252 | [New Divide][252] | LINKIN PARK | Papercuts (Singles Collection 2000-2023) | 2009 | WEBN play history 2025–2026; 3 sampled plays |
| 253 | [The Beautiful People][253] | Marilyn Manson | Antichrist Superstar | 1996 | WEBN play history 2025–2026; 3 sampled plays |
| 254 | [Until It Sleeps (Remastered)][254] | Metallica | Load (Remastered) | 1996 | WEBN play history 2021–2026; 3 sampled plays |
| 255 | [Not Falling][255] | Mudvayne | The End of All Things to Come | 2001 | WEBN play history 2025–2026; 3 sampled plays |
| 256 | [Hurt][256] | Nine Inch Nails | The Downward Spiral | 1994 | WEBN play history 2026; 3 sampled plays |
| 257 | [Brain Damage][257] | Pink Floyd | The Dark Side of the Moon (50th Anniversary) [Remastered] | 1973 | WEBN play history 2026; 3 sampled plays |
| 258 | [A Symptom Of Being Human][258] | Shinedown | Planet Zero | 2022 | WEBN play history 2025–2026; 3 sampled plays |
| 259 | [For I Am Death][259] | The Pretty Reckless | For I Am Death - Single | 2025 | WEBN play history 2025; 3 sampled plays |
| 260 | [ONE MORE TIME][260] | blink-182 | ONE MORE TIME... | 2023 | WEBN play history 2024–2025; 3 sampled plays |
| 261 | [Stuck in My Head][261] | Sleep Theory | Stuck in My Head - Single | 2025 | archived WEBN top songs 2025; 3 snapshots |
| 262 | [T.N.T.][262] | AC/DC | High Voltage | 1975 | WEBN play history 2021–2024; 3 sampled plays |
| 263 | [Wake Me Up When September Ends][263] | Green Day | American Idiot | 2004 | WEBN play history 2022–2024; 3 sampled plays |
| 264 | [Are You Ready][264] | Disturbed | Evolution (Deluxe Edition) | 2018 | WEBN play history 2020–2023; 3 sampled plays |
| 265 | [Nobody Wants to Die][265] | Rival Sons | DARKFIGHTER | 2022 | archived WEBN top songs 2023; 3 snapshots |
| 266 | [How Did You Love][266] | Shinedown | Threat to Survival | 2015 | WEBN play history 2020–2022; 3 sampled plays |
| 267 | [By the Way][267] | Red Hot Chili Peppers | By the Way (Deluxe Edition) | 2002 | WEBN play history 2021–2022; 3 sampled plays |
| 268 | [Like A Villain][268] | Bad Omens | THE DEATH OF PEACE OF MIND | 2022 | archived WEBN top songs 2022; 3 snapshots |
| 269 | [Dead Inside][269] | David Draiman, Disturbed & Nita Strauss | Dead Inside - Single | 2021 | WEBN play history 2022; 3 sampled plays |
| 270 | [Rest In Peace][270] | Dorothy | Rest In Peace - Single | 2022 | archived WEBN top songs 2022; 3 snapshots |
| 271 | [For Those About to Rock (We Salute You)][271] | AC/DC | For Those About to Rock (We Salute You) | 1981 | WEBN play history 2021–2022; 3 sampled plays |
| 272 | [Dead Man Walking][272] | Jelly Roll | Ballads of the Broken | 2021 | archived WEBN top songs 2022; 3 snapshots |
| 273 | [Livin' On The Edge][273] | Aerosmith | Get A Grip | 1993 | WEBN play history 2021–2022; 3 sampled plays |
| 274 | [Lifeline][274] | Bad Wolves | Dear Monsters | 2021 | archived WEBN top songs 2021; 3 snapshots |
| 275 | [Monkey Wrench][275] | Foo Fighters | Greatest Hits | 1997 | WEBN play history 2020–2021; 3 sampled plays |
| 276 | [Dazed and Confused][276] | Led Zeppelin | Led Zeppelin (Remastered) | 1969 | WEBN play history 2020–2021; 3 sampled plays |
| 277 | [Shot in the Dark][277] | AC/DC | POWER UP | 2020 | WEBN play history 2020–2021; 3 sampled plays |
| 278 | [Making A Fire][278] | Foo Fighters | Medicine At Midnight | 2021 | archived WEBN top songs 2021; 3 snapshots |
| 279 | [Flagpole Sitta][279] | Harvey Danger | Where Have All the Merrymakers Gone? | 1998 | WEBN play history 2020–2021; 3 sampled plays |
| 280 | [Rock You Like a Hurricane][280] | Scorpions | Deadly Sting: The Mercury Years | 1984 | WEBN play history 2020–2021; 3 sampled plays |
| 281 | [Shame Shame][281] | Foo Fighters | Medicine At Midnight | 2020 | archived WEBN top songs 2020–2021; 3 snapshots |
| 282 | [Distance][282] | Mammoth | Distance - Single | 2020 | archived WEBN top songs 2020–2021; 3 snapshots |
| 283 | [Hells Bells][283] | AC/DC | Back In Black | 1980 | WEBN play history 2020–2021; 3 sampled plays |
| 284 | [The Vengeful One][284] | Disturbed | Immortalized (Deluxe Edition) | 2015 | WEBN play history 2020; 3 sampled plays |
| 285 | [A Little Bit Off][285] | Five Finger Death Punch | F8 | 2020 | WEBN play history 2020; 3 sampled plays |
| 286 | [All Within My Hands][286] | Metallica | St. Anger | 2003 | WEBN play history 2020; 3 sampled plays |
| 287 | [Far Behind][287] | Candlebox | Candlebox | 1993 | WEBN play history 2026; 2 sampled plays |
| 288 | [Insane In the Brain][288] | Cypress Hill | Black Sunday | 1993 | WEBN play history 2025–2026; 2 sampled plays |
| 289 | [Bleed It Out][289] | LINKIN PARK | Minutes to Midnight (Deluxe Edition) | 2007 | WEBN play history 2021–2026; 2 sampled plays |
| 290 | [Crawling][290] | LINKIN PARK | Hybrid Theory | 2000 | WEBN play history 2026; 2 sampled plays |
| 291 | [Lying from You][291] | LINKIN PARK | Meteora (Deluxe Edition) | 2003 | WEBN play history 2026; 2 sampled plays |
| 292 | [Hardwired][292] | Metallica | Hardwired…To Self-Destruct (Deluxe Edition) | 2016 | WEBN play history 2022–2026; 2 sampled plays |
| 293 | [Kickstart My Heart][293] | Mötley Crüe | The Dirt Soundtrack | 1989 | WEBN play history 2021–2026; 2 sampled plays |
| 294 | [Gotta Get Away][294] | The Offspring | Smash (Remastered) | 1994 | WEBN play history 2020–2026; 2 sampled plays |
| 295 | [Flying High Again][295] | Ozzy Osbourne | Diary of a Madman (40th Anniversary Expanded Edition) | 1981 | WEBN play history 2026; 2 sampled plays |
| 296 | [45][296] | Shinedown | Leave a Whisper (Deluxe Edition) | 2003 | WEBN play history 2026; 2 sampled plays |
| 297 | [Jumper][297] | Third Eye Blind | Third Eye Blind | 1997 | WEBN play history 2026; 2 sampled plays |
| 298 | [Everything Ends][298] | Architects | The Sky, the Earth & All Between | 2025 | archived WEBN top songs 2026; 2 snapshots |
| 299 | [Crawl Back To My Coffin][299] | Dayseeker | Creature In The Black Night | 2025 | archived WEBN top songs 2026; 2 snapshots |
| 300 | [MAGNETIC][300] | Wage War | MAGNETIC - Single | 2024 | archived WEBN top songs 2026; 2 snapshots |
| 301 | [Breaking the Habit][301] | LINKIN PARK | Meteora | 2003 | WEBN play history 2021–2026; 2 sampled plays |
| 302 | [Specter][302] | Bad Omens | Specter - Single | 2025 | WEBN play history 2025; 2 sampled plays |
| 303 | [Bored][303] | Return to Dust | Speak Like the Dead - EP | 2025 | WEBN play history 2025; 2 sampled plays |
| 304 | [I Refuse (feat. Maria Brink) (2025 VERSION)][304] | Five Finger Death Punch | BEST OF (Volume 1) | 2025 | archived WEBN top songs 2025; 2 snapshots |
| 305 | [FREEFALL][305] | NOTHING MORE | CARNAL | 2024 | archived WEBN top songs 2025; 2 snapshots |
| 306 | [Apologies][306] | Three Days Grace | Alienation | 2025 | archived WEBN top songs 2025; 2 snapshots |
| 307 | [Water Song / Janie's Got a Gun][307] | Aerosmith | Pump | 1989 | WEBN play history 2025; 2 sampled plays |
| 308 | [Mayday][308] | Three Days Grace | Alienation | 2024 | archived WEBN top songs 2025; 2 snapshots |
| 309 | [I Am Machine][309] | Three Days Grace | Human | 2014 | WEBN play history 2022–2024; 2 sampled plays |
| 310 | [November Rain][310] | Guns N' Roses | Use Your Illusion I | 1991 | WEBN play history 2023–2024; 2 sampled plays |
| 311 | [Too Far Gone?][311] | Metallica | 72 Seasons | 2023 | archived WEBN top songs 2023; 2 snapshots |
| 312 | [I Write Sins Not Tragedies][312] | Panic! At the Disco | A Fever You Can't Sweat Out | 2005 | WEBN play history 2021–2023; 2 sampled plays |
| 313 | [Beyond][313] | Corey Taylor | CMF2 | 2023 | archived WEBN top songs 2023; 2 snapshots |
| 314 | [Unstoppable][314] | Disturbed | Divisive | 2022 | archived WEBN top songs 2023; 2 snapshots |
| 315 | [Are You Gonna Be My Girl][315] | Jet | Get Born (Deluxe Edition) | 2003 | WEBN play history 2020–2023; 2 sampled plays |
| 316 | [Down Rodeo][316] | Rage Against the Machine | Evil Empire | 1996 | WEBN play history 2022–2023; 2 sampled plays |
| 317 | [Loser][317] | Beck | Loser - EP | 1993 | WEBN play history 2021–2023; 2 sampled plays |
| 318 | [You Don't Know How It Feels][318] | Tom Petty | Wildflowers | 1994 | WEBN play history 2023; 2 sampled plays |
| 319 | [Shoot to Thrill][319] | AC/DC | Back In Black | 1980 | WEBN play history 2020–2023; 2 sampled plays |
| 320 | [Daylight][320] | Shinedown | Planet Zero | 2022 | WEBN play history 2022; 2 sampled plays |
| 321 | [Wasteland][321] | 10 Years | The Autumn Effect (Bonus Track Version) | 2005 | WEBN play history 2022; 2 sampled plays |
| 322 | [Fight for Your Right][322] | Beastie Boys | Licensed to Ill | 1986 | WEBN play history 2020–2022; 2 sampled plays |
| 323 | [Face Down][323] | The Red Jumpsuit Apparatus | Don't You Fake It | 2006 | WEBN play history 2022; 2 sampled plays |
| 324 | [Loser][324] | 3 Doors Down | The Better Life (Deluxe Edition) | 2000 | WEBN play history 2022; 2 sampled plays |
| 325 | [Panama][325] | Van Halen | Best of Van Halen, Vol. 1 | 1984 | WEBN play history 2021–2022; 2 sampled plays |
| 326 | [No One Like You][326] | Scorpions | Blackout | 1982 | WEBN play history 2020–2021; 2 sampled plays |
| 327 | [Trippin' On a Hole In a Paper Heart][327] | Stone Temple Pilots | Tiny Music...Songs from the Vatican Gift Shop | 1996 | WEBN play history 2021; 2 sampled plays |
| 328 | [Realize][328] | AC/DC | POWER UP | 2020 | archived WEBN top songs 2021; 2 snapshots |
| 329 | [No Sleep Till Brooklyn][329] | Beastie Boys | Solid Gold Hits | 1986 | WEBN play history 2020–2021; 2 sampled plays |
| 330 | [Ramble On][330] | Led Zeppelin | Led Zeppelin II (Remastered) | 1969 | WEBN play history 2021; 2 sampled plays |
| 331 | [Breaking Down][331] | I Prevail | TRAUMA | 2019 | WEBN play history 2021; 2 sampled plays |
| 332 | [Remember When][332] | Bad Wolves | Disobey | 2018 | WEBN play history 2020–2021; 2 sampled plays |
| 333 | [All Along the Watchtower][333] | The Jimi Hendrix Experience | Electric Ladyland | 1968 | WEBN play history 2020; 2 sampled plays |
| 334 | [Dangerous][334] | Seether | Si Vis Pacem, Para Bellum | 2020 | WEBN play history 2020; 2 sampled plays |
| 335 | [Santa Monica (Re-recorded - Slowed + Reverb)][335] | Everclear | Santa Monica (Re-Recorded - Sped Up) - Single | 2023 | WEBN play history 2020; 2 sampled plays |
| 336 | [Learning to Fly][336] | Tom Petty & The Heartbreakers | Greatest Hits | 1991 | WEBN play history 2020; 2 sampled plays |
| 337 | [Superblood Wolfmoon][337] | Pearl Jam | Gigaton | 2020 | archived WEBN top songs 2020; 2 snapshots |
| 338 | [Sickness][338] | Grey Daze | Amends | 2020 | WEBN play history 2020; 2 sampled plays |
| 339 | [Love In an Elevator][339] | Aerosmith | Big Ones | 1989 | WEBN play history 2026; 1 sampled play |
| 340 | [Beacon][340] | Blessed Black | Seasons:, Vol. 3 - Single | 2026 | WEBN play history 2026; 1 sampled play |
| 341 | [Manufactured Extinct][341] | Cattle Decapitation | The Anthropocene Extinction | 2015 | WEBN play history 2026; 1 sampled play |
| 342 | [Perfect Strangers][342] | Deep Purple | Perfect Strangers | 1984 | WEBN play history 2026; 1 sampled play |
| 343 | [Just Got Lucky][343] | Dokken | Tooth and Nail | 1984 | WEBN play history 2026; 1 sampled play |
| 344 | [New Messiah][344] | Fear Factory | The Industrialist | 2012 | WEBN play history 2026; 1 sampled play |
| 345 | [Hunter’s Moon][345] | Ghost | IMPERA | 2021 | WEBN play history 2026; 1 sampled play |
| 346 | [It's So Easy][346] | Guns N' Roses | Appetite For Destruction | 1987 | WEBN play history 2026; 1 sampled play |
| 347 | [This Is Now][347] | Hatebreed | The Rise of Brutality | 2003 | WEBN play history 2026; 1 sampled play |
| 348 | [Radioactive][348] | Imagine Dragons | Night Visions (Deluxe Version) | 2012 | WEBN play history 2026; 1 sampled play |
| 349 | [Numb / Encore][349] | JAŸ-Z & LINKIN PARK | Collision Course - EP | 2004 | WEBN play history 2026; 1 sampled play |
| 350 | [Over the Hills and Far Away][350] | Led Zeppelin | Houses of the Holy (Remastered) | 1973 | WEBN play history 2026; 1 sampled play |
| 351 | [Runaway][351] | LINKIN PARK | Hybrid Theory (20th Anniversary Edition) | 2000 | WEBN play history 2026; 1 sampled play |
| 352 | [Master of Disguise][352] | Lizzy Borden | The Best of Lizzy Borden | 1994 | WEBN play history 2026; 1 sampled play |
| 353 | [Tuesday's Gone][353] | Lynyrd Skynyrd | Playlist Plus | 1973 | WEBN play history 2026; 1 sampled play |
| 354 | [All Nightmare Long][354] | Metallica | Death Magnetic | 2008 | WEBN play history 2026; 1 sampled play |
| 355 | [Crash Course In Brain Surgery][355] | Metallica | Garage Inc. | 1987 | WEBN play history 2026; 1 sampled play |
| 356 | [Creeping Death][356] | Metallica | Ride the Lightning (Remastered) [2016 Remastered Version] | 1984 | WEBN play history 2026; 1 sampled play |
| 357 | [Halo On Fire][357] | Metallica | Hardwired…To Self-Destruct (Deluxe Edition) | 2016 | WEBN play history 2026; 1 sampled play |
| 358 | [Helpless][358] | Metallica | Garage Inc. | 1987 | WEBN play history 2026; 1 sampled play |
| 359 | [The Thing That Should Not Be][359] | Metallica | Master of Puppets (Remastered) | 1986 | WEBN play history 2026; 1 sampled play |
| 360 | [Don't Tell Me You Love Me][360] | Night Ranger | Dawn Patrol | 1982 | WEBN play history 2026; 1 sampled play |
| 361 | [The Great Southern Trendkill][361] | Pantera | The Great Southern Trendkill (20th Anniversary Edition) | 1996 | WEBN play history 2026; 1 sampled play |
| 362 | [Under Pressure (feat. David Bowie)][362] | Queen | Bohemian Rhapsody (The Original Soundtrack) | 1981 | WEBN play history 2026; 1 sampled play |
| 363 | [Start Me Up][363] | The Rolling Stones | Tattoo You (Deluxe Edition) | 1981 | WEBN play history 2026; 1 sampled play |
| 364 | [I Remember You][364] | Skid Row | Skid Row | 1989 | WEBN play history 2026; 1 sampled play |
| 365 | [Extra Sexual Extraterrestrial (Live)][365] | Sons of the Abyss | Zorp and Zeptar Live at the Cosmodome | 2025 | WEBN play history 2026; 1 sampled play; no studio version found |
| 366 | [Love Song][366] | Tesla | The Great Radio Controversy | 1989 | WEBN play history 2026; 1 sampled play |
| 367 | [The Covenant][367] | Thrown to Wolves | The Covenant - Single | 2025 | WEBN play history 2026; 1 sampled play |
| 368 | [LOOK OUT FOR ME][368] | Turnstile | NEVER ENOUGH | 2025 | archived WEBN top songs 2026; 1 snapshot |
| 369 | [So Far So Fake][369] | Pierce the Veil | The Jaws of Life | 2023 | archived WEBN top songs 2026; 1 snapshot |
| 370 | [Demonic Depression][370] | Volbeat | God Of Angels Trust | 2025 | archived WEBN top songs 2026; 1 snapshot |
| 371 | [Pale Horse][371] | Chevelle | Bright as Blasphemy | 2025 | archived WEBN top songs 2026; 1 snapshot |
| 372 | [infinite source][372] | Deftones | private music | 2025 | archived WEBN top songs 2026; 1 snapshot |
| 373 | [Nothin'][373] | Guns N' Roses | Nothin' - Single | 2025 | archived WEBN top songs 2026; 1 snapshot |
| 374 | [The Spell][374] | Mammoth | The End | 2025 | archived WEBN top songs 2026; 1 snapshot |
| 375 | [Searchlight][375] | Shinedown | Searchlight - Single | 2025 | archived WEBN top songs 2026; 1 snapshot |
| 376 | [Caramel][376] | Sleep Token | Even In Arcadia | 2025 | archived WEBN top songs 2026; 1 snapshot |
| 377 | [The End (feat. BABYMETAL) (2025 VERSION)][377] | Five Finger Death Punch | BEST OF (Volume 2) | 2025 | archived WEBN top songs 2025; 1 snapshot |
| 378 | [My Only Angel (feat. Steve Martin) (Desert Road Version)][378] | Aerosmith & YUNGBLUD | My Only Angel (Desert Road Version) [feat. Steve Martin] - Single | 2025 | WEBN play history 2025; 1 sampled play |
| 379 | [Asking For A Friend][379] | Foo Fighters | Asking For A Friend - Single | 2025 | WEBN play history 2025; 1 sampled play |
| 380 | [As Alive As You Need Me To Be][380] | Nine Inch Nails | TRON: Ares (Original Motion Picture Soundtrack) | 2025 | WEBN play history 2025; 1 sampled play |
| 381 | [my mind is a mountain][381] | Deftones | private music | 2025 | WEBN play history 2025; 1 sampled play |
| 382 | [Spit XXV][382] | Kittie | Spit XXV - EP | 2025 | WEBN play history 2025; 1 sampled play |
| 383 | [Today's Song][383] | Foo Fighters | Today's Song - Single | 2025 | WEBN play history 2025; 1 sampled play |
| 384 | [I Disappear][384] | Metallica | I Disappear - Single | 2000 | WEBN play history 2025; 1 sampled play |
| 385 | [The End][385] | Mammoth | The End - Single | 2025 | archived WEBN top songs 2025; 1 snapshot |
| 386 | [Wasting My Time][386] | Default | The Fallout (Limited Edition) | 2001 | WEBN play history 2025; 1 sampled play |
| 387 | [Emergence][387] | Sleep Token | Even In Arcadia | 2025 | archived WEBN top songs 2025; 1 snapshot |
| 388 | [By a Monster’s Hand][388] | Volbeat | God Of Angels Trust | 2025 | archived WEBN top songs 2025; 1 snapshot |
| 389 | [BLUR][389] | Wage War | STIGMA | 2024 | archived WEBN top songs 2025; 1 snapshot |
| 390 | [The Red][390] | Chevelle | Wonder What's Next (Expanded Edition) | 2002 | WEBN play history 2025; 1 sampled play |
| 391 | [Dance, Kid, Dance][391] | Shinedown | Three Six Five / Dance, Kid, Dance - Single | 2025 | WEBN play history 2025; 1 sampled play |
| 392 | [Black Butterfly][392] | Scott Stapp | Higher Power | 2024 | WEBN play history 2025; 1 sampled play |
| 393 | [Walls Come Down][393] | Seether | The Surface Seems So Far | 2024 | WEBN play history 2025; 1 sampled play |
| 394 | [What Remains][394] | Pop Evil | What Remains - Single | 2025 | archived WEBN top songs 2025; 1 snapshot |
| 395 | [Pieces][395] | Daughtry | Pieces - Single | 2024 | archived WEBN top songs 2024; 1 snapshot |
| 396 | [Barely Breathing (feat. Against The Current)][396] | From Ashes to New | Barely Breathing (feat. Against The Current) - Single | 2023 | archived WEBN top songs 2024; 1 snapshot |
| 397 | [Truth][397] | Godsmack | Lighting Up the Sky | 2023 | archived WEBN top songs 2024; 1 snapshot |
| 398 | [Make It All Right][398] | The Offspring | SUPERCHARGED | 2024 | archived WEBN top songs 2024; 1 snapshot |
| 399 | [I Was Alive][399] | Beartooth | The Surface | 2023 | WEBN play history 2024; 1 sampled play |
| 400 | [Rebel Yell][400] | Billy Idol | Rebel Yell (Deluxe Edition) | 1983 | WEBN play history 2024; 1 sampled play |
| 401 | [This Is the Way (feat. DMX)][401] | Five Finger Death Punch | AfterLife (Deluxe) | 2024 | archived WEBN top songs 2024; 1 snapshot |
| 402 | [Dilemma][402] | Green Day | Pop Nonstop | 2023 | archived WEBN top songs 2024; 1 snapshot |
| 403 | [Friendly Fire][403] | LINKIN PARK | Papercuts (Singles Collection 2000-2023) | 2024 | archived WEBN top songs 2024; 1 snapshot |
| 404 | [S!CK][404] | The Warning | S!CK - Single | 2024 | archived WEBN top songs 2024; 1 snapshot |
| 405 | [Devil You Know][405] | Tim Montana | Devil You Know - Single | 2023 | archived WEBN top songs 2023; 1 snapshot |
| 406 | [Bad Man][406] | Disturbed | Divisive | 2022 | WEBN play history 2023; 1 sampled play |
| 407 | [Testify][407] | Rage Against the Machine | The Battle of Los Angeles | 1999 | WEBN play history 2023; 1 sampled play |
| 408 | [Sex Type Thing][408] | Stone Temple Pilots | Core (Super Deluxe Edition) | 1992 | WEBN play history 2023; 1 sampled play |
| 409 | [The Dirt I'm Buried In][409] | Avatar | Dance Devil Dance | 2023 | WEBN play history 2023; 1 sampled play |
| 410 | [Blood In The Water][410] | Ayron Jones | Chronicles Of The Kid | 2023 | WEBN play history 2023; 1 sampled play |
| 411 | [Last Resort (Reimagined)][411] | Falling In Reverse | Last Resort (Reimagined) - Single | 2023 | WEBN play history 2023; 1 sampled play |
| 412 | [Best of You][412] | Foo Fighters | Greatest Hits | 2005 | WEBN play history 2023; 1 sampled play |
| 413 | [Somebody Told Me][413] | The Killers | Direct Hits | 2004 | WEBN play history 2023; 1 sampled play |
| 414 | [Nobody][414] | Avenged Sevenfold | nobody new rock | 2023 | WEBN play history 2023; 1 sampled play |
| 415 | [Rescued][415] | Foo Fighters | But Here We Are | 2023 | archived WEBN top songs 2023; 1 snapshot |
| 416 | [Clint Eastwood][416] | Gorillaz | The Singles Collection 2001-2011 | 2001 | WEBN play history 2023; 1 sampled play |
| 417 | [No Apologies][417] | Papa Roach | Ego Trip | 2022 | WEBN play history 2023; 1 sampled play |
| 418 | [Lowest In Me][418] | Staind | Confessions Of The Fallen (Deluxe) | 2023 | WEBN play history 2023; 1 sampled play |
| 419 | [Saviour II][419] | Black Veil Brides | Saviour II - Single | 2022 | WEBN play history 2023; 1 sampled play |
| 420 | [Beguiled][420] | The Smashing Pumpkins | Beguiled - Single | 2022 | archived WEBN top songs 2023; 1 snapshot |
| 421 | [I Am The Weapon][421] | Three Days Grace | EXPLOSIONS | 2022 | WEBN play history 2023; 1 sampled play |
| 422 | [Sabotage][422] | Beastie Boys | Solid Gold Hits | 2005 | WEBN play history 2023; 1 sampled play |
| 423 | [Mr. Brownstone][423] | Guns N' Roses | Appetite For Destruction | 1987 | WEBN play history 2023; 1 sampled play |
| 424 | [Painkiller][424] | Judas Priest | Painkiller (Bonus Track Version) | 1990 | WEBN play history 2023; 1 sampled play |
| 425 | [Symphony of Destruction][425] | Megadeth | Countdown to Extinction (Bonus Track Version) | 1992 | WEBN play history 2023; 1 sampled play |
| 426 | [Nevermore][426] | Morbid Angel | Illud Divinum Insanus | 2011 | WEBN play history 2023; 1 sampled play |
| 427 | [Bringing on the Pain][427] | One Day Alive | Bringing on the Pain - Single | 2022 | WEBN play history 2023; 1 sampled play |
| 428 | [Electric Head, Pt. 1 (The Agony)][428] | White Zombie | Astro-Creep: 2000 - Songs of Love, Destruction and Other Synthetic Delusions of the Electric Head | 1995 | WEBN play history 2023; 1 sampled play |
| 429 | [Times Like These][429] | Five Finger Death Punch | AfterLife | 2022 | archived WEBN top songs 2022; 1 snapshot |
| 430 | [Masterpiece][430] | Motionless In White | Masterpiece: Motion Picture Collection | 2022 | archived WEBN top songs 2022; 1 snapshot |
| 431 | [Tippa My Tongue][431] | Red Hot Chili Peppers | Tippa My Tongue - Rock Freshers | 2022 | WEBN play history 2022; 1 sampled play |
| 432 | [It's a Long Way to the Top (If You Wanna Rock 'N' Roll)][432] | AC/DC | High Voltage | 1975 | WEBN play history 2022; 1 sampled play |
| 433 | [No One Knows][433] | Queens of the Stone Age | Songs for the Deaf | 2002 | WEBN play history 2022; 1 sampled play |
| 434 | [If Tomorrow Never Comes][434] | Bad Wolves | Dear Monsters | 2021 | WEBN play history 2022; 1 sampled play |
| 435 | [MYSTERY][435] | Turnstile | MYSTERY - Single | 2021 | archived WEBN top songs 2022; 1 snapshot |
| 436 | [The Steeple][436] | Halestorm | The Steeple - Modern Rock Hits | 2022 | WEBN play history 2022; 1 sampled play |
| 437 | [The Memory Remains (feat. Marianne Faithfull)][437] | Metallica | Reload | 1997 | WEBN play history 2022; 1 sampled play |
| 438 | [Love Dies Young][438] | Foo Fighters | Medicine At Midnight | 2021 | archived WEBN top songs 2022; 1 snapshot |
| 439 | [Planet Zero][439] | Shinedown | Planet Zero | 2022 | WEBN play history 2022; 1 sampled play |
| 440 | [DiE4u][440] | Bring Me The Horizon | DiE4u - Single | 2021 | WEBN play history 2022; 1 sampled play |
| 441 | [Father Of Mine][441] | Everclear | In A Different Light (All New Recordings) | 2009 | WEBN play history 2022; 1 sampled play |
| 442 | [Shotgun Blues][442] | Volbeat | Servant Of The Mind (Deluxe) | 2021 | WEBN play history 2022; 1 sampled play |
| 443 | [Warrior (feat. Travis Barker)][443] | Atreyu | Baptize | 2021 | WEBN play history 2021; 1 sampled play |
| 444 | [Scarlet Cross][444] | Black Veil Brides | Scarlet Cross - Single | 2021 | WEBN play history 2021; 1 sampled play |
| 445 | [Hard Skool][445] | Guns N' Roses | Hard Skool - Single | 2021 | WEBN play history 2021; 1 sampled play |
| 446 | [All the Small Things][446] | blink-182 | Enema of the State | 1999 | WEBN play history 2021; 1 sampled play |
| 447 | [Dude (Looks Like a Lady)][447] | Aerosmith | 20th Century Masters - The Millennium Collection: The Best of Aerosmith | 1987 | archived WEBN top songs 2021; 1 snapshot |
| 448 | [Everything Zen][448] | Bush | Loaded: The Greatest Hits 1994-2023 | 1994 | archived WEBN top songs 2021; 1 snapshot |
| 449 | [Mars Simula][449] | Chevelle | NIRATIAS | 2021 | archived WEBN top songs 2021; 1 snapshot |
| 450 | [Unforgettable][450] | Godsmack | When Legends Rise | 2018 | WEBN play history 2021; 1 sampled play |
| 451 | [The Devil's Bleeding Crown][451] | Volbeat | Seal the Deal & Let's Boogie (Deluxe) | 2016 | WEBN play history 2021; 1 sampled play |
| 452 | [Cherry Pie][452] | Warrant | Cherry Pie (Bonus Track Version) | 1990 | WEBN play history 2021; 1 sampled play |
| 453 | [Nowhere Generation][453] | Rise Against | Nowhere Generation | 2021 | archived WEBN top songs 2021; 1 snapshot |
| 454 | [Wonderwall (Remastered)][454] | Oasis | (What's The Story) Morning Glory? [Deluxe Remastered Edition] | 1995 | WEBN play history 2021; 1 sampled play |
| 455 | [Burden In My Hand][455] | Soundgarden | Telephantasm (Deluxe Version) | 2010 | WEBN play history 2021; 1 sampled play |
| 456 | [Adrenaline][456] | Zero 9:36 | ...If You Don’t Save Yourself | 2020 | WEBN play history 2021; 1 sampled play |
| 457 | [Natural][457] | Imagine Dragons | Origins | 2018 | WEBN play history 2021; 1 sampled play |
| 458 | [Right Here (Album Version)][458] | Staind | Chapter V | 2005 | WEBN play history 2021; 1 sampled play |
| 459 | [Mercy][459] | Ayron Jones | Soundtrack To Summer 2021 | 2021 | WEBN play history 2021; 1 sampled play |
| 460 | [Living the Dream][460] | Five Finger Death Punch | F8 | 2020 | WEBN play history 2021; 1 sampled play |
| 461 | [Breathe Again][461] | Pop Evil | Versatile | 2020 | archived WEBN top songs 2021; 1 snapshot |
| 462 | [Death By Rock And Roll][462] | The Pretty Reckless | Death By Rock And Roll | 2020 | WEBN play history 2021; 1 sampled play |
| 463 | [TRIALS][463] | STARSET | Rock Gaming | 2019 | archived WEBN top songs 2021; 1 snapshot |
| 464 | [Runnin' Down a Dream][464] | Tom Petty | Full Moon Fever | 1989 | WEBN play history 2021; 1 sampled play |
| 465 | [Waiting On A War][465] | Foo Fighters | Medicine At Midnight | 2021 | archived WEBN top songs 2021; 1 snapshot |
| 466 | [hometown][466] | cleopatrick | the boys - EP | 2018 | archived WEBN top songs 2021; 1 snapshot |
| 467 | [Slow Ride (Single Version)][467] | Foghat | The Essentials: Foghat | 1975 | WEBN play history 2021; 1 sampled play |
| 468 | [Make Me Bad][468] | Korn | Issues | 1999 | WEBN play history 2021; 1 sampled play |
| 469 | [Learn to Walk Again][469] | Bad Wolves | N.A.T.I.O.N. | 2019 | archived WEBN top songs 2021; 1 snapshot |
| 470 | [Ohms][470] | Deftones | Ohms | 2020 | WEBN play history 2020; 1 sampled play |
| 471 | [My Way, Soon][471] | Greta Van Fleet | The Battle at Garden’s Gate | 2020 | WEBN play history 2020; 1 sampled play |
| 472 | [Why Don't You Get a Job][472] | The Offspring | Americana | 1998 | WEBN play history 2020; 1 sampled play |
| 473 | [Somebody That I Used to Know][473] | Three Days Grace | Somebody That I Used to Know - Single | 2020 | WEBN play history 2020; 1 sampled play |
| 474 | [Heavy Is the Head (feat. Chris Cornell)][474] | Zac Brown Band | Jekyll + Hyde | 2015 | WEBN play history 2020; 1 sampled play |
| 475 | [I Will Buy You a New Life (Re-Recorded)][475] | Everclear | Return to Santa Monica | 2011 | WEBN play history 2020; 1 sampled play |
| 476 | [Purple Haze][476] | The Jimi Hendrix Experience | Are You Experienced (Deluxe Version) | 1967 | WEBN play history 2020; 1 sampled play |
| 477 | [Bleeding Me (Remastered)][477] | Metallica | Load (Remastered) | 1996 | WEBN play history 2020; 1 sampled play |
| 478 | [Buddy Holly][478] | Weezer | Weezer (Deluxe Edition) | 1994 | WEBN play history 2020; 1 sampled play |
| 479 | [Atlas Falls][479] | Shinedown | Atlas Falls - Single | 2020 | WEBN play history 2020; 1 sampled play |
| 480 | [Beverly Hills][480] | Weezer | Make Believe | 2005 | WEBN play history 2020; 1 sampled play |
| 481 | [Radioactive (feat. Kendrick Lamar)][481] | Imagine Dragons | Radioactive (feat. Kendrick Lamar) - Single | 2014 | WEBN play history 2020; 1 sampled play |
| 482 | [Lake of Fire (Live Acoustic)][482] | Nirvana | MTV Unplugged In New York (Live Acoustic) | 1994 | WEBN play history 2020; 1 sampled play; no Nirvana studio version exists |
| 483 | [Flowers on a Grave][483] | Bush | The Kingdom | 2020 | WEBN play history 2020; 1 sampled play |
| 484 | [Some Kind of Monster][484] | Metallica | St. Anger | 2003 | WEBN play history 2020; 1 sampled play |
| 485 | [Ghost][485] | Badflower | Ghost - Single | 2018 | WEBN play history 2020; 1 sampled play |
| 486 | [Wolf Totem (feat. Jacoby Shaddix)][486] | The Hu | Wolf Totem (feat. Jacoby Shaddix) - Single | 2020 | WEBN play history 2020; 1 sampled play |
| 487 | [The Unforgiven III][487] | Metallica | Death Magnetic | 2008 | WEBN play history 2020; 1 sampled play |
| 488 | [Ordinary Man (feat. Elton John)][488] | Ozzy Osbourne | Ordinary Man | 2020 | WEBN play history 2020; 1 sampled play |
| 489 | [Wash It All Away][489] | Five Finger Death Punch | A Decade of Destruction | 2015 | WEBN play history 2020; 1 sampled play |
| 490 | [Work][490] | Pop Evil | Work - Single | 2020 | WEBN play history 2020; 1 sampled play |
| 491 | [Come Together][491] | Gary Clark Jr. & Junkie XL | Come Together - Single | 2017 | WEBN play history 2020; 1 sampled play |
| 492 | [1979][492] | The Smashing Pumpkins | Rotten Apples: Greatest Hits | 1995 | WEBN play history 2020; 1 sampled play |
| 493 | [Rolling 7s][493] | Dirty Honey | Dirty Honey - EP | 2019 | archived WEBN top songs 2020; 1 snapshot |
| 494 | [Inside Out][494] | Five Finger Death Punch | F8 | 2019 | WEBN play history 2020; 1 sampled play |
| 495 | [Back In Black][495] | AC/DC | Back In Black | 1980 | popular catalog addition |
| 496 | [Thunderstruck][496] | AC/DC | Iron Man 2 | 1990 | popular catalog addition |
| 497 | [Crazy][497] | Aerosmith | Big Ones | 1980 | popular catalog addition |
| 498 | [Walk This Way][498] | Aerosmith | Toys In The Attic | 1975 | popular catalog addition |
| 499 | [Rooster][499] | Alice In Chains | Dirt (Remastered) | 1992 | popular catalog addition |
| 500 | [Would?][500] | Alice In Chains | Dirt (Remastered) | 1992 | popular catalog addition |
| 501 | [Movies (2026 Remastered)][501] | Alien Ant Farm | ANThology (Deluxe Edition) | 2001 | popular catalog addition |
| 502 | [These Days][502] | Alien Ant Farm | truANT | 2003 | popular catalog addition |
| 503 | [Fight][503] | All Good Things | Battle Rock 2 | 2014 | popular catalog addition |
| 504 | [The Comeback (feat. Craig Mabbitt of Escape the Fate)][504] | All Good Things | The Comeback (feat. Craig Mabbitt of Escape the Fate) - EP | 2021 | popular catalog addition |
| 505 | [Dear Maria, Count Me In][505] | All Time Low | So Wrong, It's Right (Deluxe Version) | 2007 | popular catalog addition |
| 506 | [Weightless (Rerecorded)][506] | All Time Low | The Forever Sessions, Vol. 1 (Rerecorded) | 2024 | popular catalog addition |
| 507 | [Animals][507] | Architects | For Those That Wish to Exist | 2020 | popular catalog addition |
| 508 | [Doomsday][508] | Architects | Holy Hell | 2018 | popular catalog addition |
| 509 | [Cochise][509] | Audioslave | Audioslave | 2002 | popular catalog addition |
| 510 | [I Am the Highway][510] | Audioslave | Audioslave | 2002 | popular catalog addition |
| 511 | [In Between][511] | Beartooth | Disgusting | 2014 | popular catalog addition |
| 512 | [The Lines][512] | Beartooth | Disgusting | 2014 | popular catalog addition |
| 513 | [In This River][513] | Black Label Society | Skullage | 2005 | popular catalog addition |
| 514 | [Stillborn (feat. Ozzy Osbourne)][514] | Black Label Society | The Blessed Hellride | 2003 | popular catalog addition |
| 515 | [Iron Man][515] | Black Sabbath | Complete Studio Albums 1970-1978 | 1970 | popular catalog addition |
| 516 | [N.I.B.][516] | Black Sabbath | The Ultimate Collection | 1970 | popular catalog addition |
| 517 | [Livin' On a Prayer][517] | Bon Jovi | Slippery When Wet | 1986 | popular catalog addition |
| 518 | [You Give Love a Bad Name][518] | Bon Jovi | Slippery When Wet | 1986 | popular catalog addition |
| 519 | [Breath][519] | Breaking Benjamin | Phobia | 2006 | popular catalog addition |
| 520 | [The Diary of Jane (Single Version)][520] | Breaking Benjamin | Phobia (Explicit Version) | 2006 | popular catalog addition |
| 521 | [Lit Up][521] | Buckcherry | Buckcherry | 1999 | popular catalog addition |
| 522 | [Sorry][522] | Buckcherry | 15 | 2005 | popular catalog addition |
| 523 | [Machinehead (Remastered)][523] | Bush | Sixteen Stone (Remastered) | 1994 | popular catalog addition |
| 524 | [Swallowed (Remastered)][524] | Bush | Razorblade Suitcase (Remastered) | 1996 | popular catalog addition |
| 525 | [Gel][525] | Collective Soul | Collective Soul | 1995 | popular catalog addition |
| 526 | [Heavy][526] | Collective Soul | Dosage | 1999 | popular catalog addition |
| 527 | [My Sacrifice][527] | Creed | Greatest Hits | 2001 | popular catalog addition |
| 528 | [With Arms Wide Open][528] | Creed | Human Clay | 1999 | popular catalog addition |
| 529 | [Her Black Wings][529] | Danzig | Danzig II: Lucifuge | 1990 | popular catalog addition |
| 530 | [Twist of Cain][530] | Danzig | Danzig | 1988 | popular catalog addition |
| 531 | [Shelf in the Room][531] | Days of the New | Days of the New | 1997 | popular catalog addition |
| 532 | [The Down Town][532] | Days of the New | Days of the New | 1997 | popular catalog addition |
| 533 | [Photograph][533] | Def Leppard | Pyromania | 1983 | popular catalog addition |
| 534 | [Rock of Ages][534] | Def Leppard | Pyromania | 1983 | popular catalog addition |
| 535 | [Down with the Sickness][535] | Disturbed | The Sickness | 2000 | popular catalog addition |
| 536 | [The Sound of Silence][536] | Disturbed | Immortalized (Deluxe Edition) | 2015 | popular catalog addition |
| 537 | [Step Up][537] | Drowning Pool | Desensitized | 2004 | popular catalog addition |
| 538 | [Tear Away][538] | Drowning Pool | Sinner | 2001 | popular catalog addition |
| 539 | [Bring Me to Life][539] | Evanescence | Fallen | 2003 | popular catalog addition |
| 540 | [Call Me When You're Sober][540] | Evanescence | The Open Door | 2006 | popular catalog addition |
| 541 | [From Out of Nowhere][541] | Faith No More | The Real Thing | 1989 | popular catalog addition |
| 542 | [Midlife Crisis][542] | Faith No More | Angel Dust | 1992 | popular catalog addition |
| 543 | [Dance, Dance][543] | Fall Out Boy | Believers Never Die - Greatest Hits (Bonus Track Version) | 2005 | popular catalog addition |
| 544 | [Thnks Fr Th Mmrs][544] | Fall Out Boy | Infinity On High | 2007 | popular catalog addition |
| 545 | [Popular Monster][545] | Falling In Reverse | Popular Monster - Single | 2019 | popular catalog addition |
| 546 | [The Drug in Me Is You][546] | Falling In Reverse | The Drug in Me Is You | 2011 | popular catalog addition |
| 547 | [Falling On][547] | Finger Eleven | Them Vs. You Vs. Me (Deluxe Edition) | 2007 | popular catalog addition |
| 548 | [One Thing][548] | Finger Eleven | Finger Eleven | 2003 | popular catalog addition |
| 549 | [Bad Company][549] | Five Finger Death Punch | A Decade of Destruction | 2009 | popular catalog addition |
| 550 | [Wrong Side of Heaven][550] | Five Finger Death Punch | The Wrong Side of Heaven and the Righteous Side of Hell, Vol. 1 (Deluxe Edition) | 2013 | popular catalog addition |
| 551 | [Learn to Fly][551] | Foo Fighters | There Is Nothing Left to Lose | 1999 | popular catalog addition |
| 552 | [The Pretender][552] | Foo Fighters | Echoes, Silence, Patience & Grace | 2007 | popular catalog addition |
| 553 | [Bad Day][553] | Fuel | Something Like Human | 2000 | popular catalog addition |
| 554 | [Shimmer][554] | Fuel | Sunburn | 1998 | popular catalog addition |
| 555 | [Bad Habits][555] | Giovannie and the Hired Guns | Bad Habits | 2017 | popular catalog addition |
| 556 | [Overrated][556] | Giovannie and the Hired Guns | Tejano Punk Boyz | 2022 | popular catalog addition |
| 557 | [Awake][557] | Godsmack | Good Times, Bad Times... Ten Years of Godsmack | 2000 | popular catalog addition |
| 558 | [Voodoo][558] | Godsmack | Good Times, Bad Times... Ten Years of Godsmack | 1997 | popular catalog addition |
| 559 | [American Idiot][559] | Green Day | American Idiot (Deluxe Edition) | 2004 | popular catalog addition |
| 560 | [Basket Case][560] | Green Day | Dookie | 1994 | popular catalog addition |
| 561 | [Sweet Child O' Mine][561] | Guns N' Roses | Appetite For Destruction (Super Deluxe) | 1987 | popular catalog addition |
| 562 | [Welcome To The Jungle][562] | Guns N' Roses | Appetite For Destruction (Super Deluxe) | 1987 | popular catalog addition |
| 563 | [Shamrocks and Shenanigans][563] | House of Pain | House of Pain (Fine Malt Lyrics) | 1992 | popular catalog addition |
| 564 | [Who's the Man][564] | House of Pain | Same as It Ever Was | 1994 | popular catalog addition |
| 565 | [Nice to Know You][565] | Incubus | Morning View | 2001 | popular catalog addition |
| 566 | [Stellar][566] | Incubus | Make Yourself | 1999 | popular catalog addition |
| 567 | [Save Me][567] | Jelly Roll | Save Me - Single | 2020 | popular catalog addition |
| 568 | [Son of a Sinner][568] | Jelly Roll | Ballads of the Broken | 2021 | popular catalog addition |
| 569 | [Pain][569] | Jimmy Eat World | Futures | 2004 | popular catalog addition |
| 570 | [Sweetness][570] | Jimmy Eat World | Bleed American | 2001 | popular catalog addition |
| 571 | [Blue On Black][571] | Kenny Wayne Shepherd | Trouble Is... | 1997 | popular catalog addition |
| 572 | [Cowboy][572] | Kid Rock | Greatest Hits: You Never Saw Coming | 1998 | popular catalog addition |
| 573 | [Only God Knows Why][573] | Kid Rock | 00's US Hits | 1998 | popular catalog addition |
| 574 | [Falling Away from Me][574] | Korn | Issues | 1999 | popular catalog addition |
| 575 | [Got the Life][575] | Korn | Follow The Leader | 1998 | popular catalog addition |
| 576 | [Stairway to Heaven][576] | Led Zeppelin | Led Zeppelin IV (Remastered) | 1971 | popular catalog addition |
| 577 | [Whole Lotta Love][577] | Led Zeppelin | Led Zeppelin II (Remastered) | 1969 | popular catalog addition |
| 578 | [American Woman][578] | Lenny Kravitz | Greatest Hits | 1999 | popular catalog addition |
| 579 | [Are You Gonna Go My Way][579] | Lenny Kravitz | Are You Gonna Go My Way | 1993 | popular catalog addition |
| 580 | [Nookie][580] | Limp Bizkit | Significant Other | 1999 | popular catalog addition |
| 581 | [Rollin' (Air Raid Vehicle)][581] | Limp Bizkit | Greatest Hitz | 2000 | popular catalog addition |
| 582 | [In the End][582] | LINKIN PARK | Hybrid Theory (Deluxe Edition) | 2000 | popular catalog addition |
| 583 | [Numb][583] | LINKIN PARK | Meteora (Deluxe Edition) | 2003 | popular catalog addition |
| 584 | [Glamour Boys][584] | Living Colour | Pride | 1988 | popular catalog addition |
| 585 | [Type][585] | Living Colour | Time's Up | 1990 | popular catalog addition |
| 586 | [Sweet Home Alabama][586] | Lynyrd Skynyrd | All Time Greatest Hits | 1974 | popular catalog addition |
| 587 | [That Smell][587] | Lynyrd Skynyrd | Street Survivors | 1977 | popular catalog addition |
| 588 | [Saint Joe On the School Bus][588] | Marcy Playground | Marcy Playground | 1997 | popular catalog addition |
| 589 | [Sherry Fraser][589] | Marcy Playground | Marcy Playground | 1997 | popular catalog addition |
| 590 | [Enter Sandman][590] | Metallica | Metallica (Deluxe Box Set) | 1991 | popular catalog addition |
| 591 | [Nothing Else Matters][591] | Metallica | Metallica (Remastered) | 1991 | popular catalog addition |
| 592 | [Head Like a Hole][592] | Nine Inch Nails | Pretty Hate Machine (Remastered) | 1989 | popular catalog addition |
| 593 | [The Hand That Feeds][593] | Nine Inch Nails | With Teeth | 2005 | popular catalog addition |
| 594 | [About a Girl][594] | Nirvana | Bleach (Deluxe Edition) | 1989 | popular catalog addition |
| 595 | [Lithium][595] | Nirvana | Nevermind | 1991 | popular catalog addition |
| 596 | [Bark at the Moon][596] | Ozzy Osbourne | Bark at the Moon (Bonus Track Version) | 1983 | popular catalog addition |
| 597 | [No More Tears][597] | Ozzy Osbourne | No More Tears (Bonus Track Version) | 1991 | popular catalog addition |
| 598 | [Boom][598] | P.O.D. | Satellite | 2001 | popular catalog addition |
| 599 | [Youth of the Nation][599] | P.O.D. | Greatest Hits: The Atlantic Years | 2001 | popular catalog addition |
| 600 | [Cemetery Gates][600] | Pantera | Cowboys from Hell | 1990 | popular catalog addition |
| 601 | [Cowboys from Hell][601] | Pantera | Cowboys from Hell | 1990 | popular catalog addition |
| 602 | [Getting Away With Murder (2020)][602] | Papa Roach | 20/20 | 2007 | popular catalog addition |
| 603 | [Scars][603] | Papa Roach | To Be Loved: The Best of Papa Roach | 2004 | popular catalog addition |
| 604 | [Alive][604] | Pearl Jam | Ten | 1991 | popular catalog addition |
| 605 | [Jeremy][605] | Pearl Jam | Ten | 1991 | popular catalog addition |
| 606 | [Nothin' But a Good Time][606] | Poison | Open Up and Say... Ahh! (20th Anniversary Edition) | 1988 | popular catalog addition |
| 607 | [Talk Dirty to Me][607] | Poison | The Best of Poison: 20 Years of Rock (Remastered) | 1986 | popular catalog addition |
| 608 | [100 In a 55][608] | Pop Evil | Lipstick On the Mirror | 2008 | popular catalog addition |
| 609 | [Trenches][609] | Pop Evil | Onyx (Deluxe Edition) | 2013 | popular catalog addition |
| 610 | [Blurry][610] | Puddle of Mudd | Come Clean | 2001 | popular catalog addition |
| 611 | [Drift and Die][611] | Puddle of Mudd | Come Clean | 2001 | popular catalog addition |
| 612 | [Another One Bites the Dust][612] | Queen | Greatest Hits I, II & III: The Platinum Collection | 1980 | popular catalog addition |
| 613 | [We Are the Champions][613] | Queen | Greatest Hits I, II & III: The Platinum Collection | 1977 | popular catalog addition |
| 614 | [Mama Weer All Crazee Now][614] | Quiet Riot | Condition Critical | 1984 | popular catalog addition |
| 615 | [Metal Health (Bang Your Head)][615] | Quiet Riot | Metal Health (Bonus Track Version) | 1983 | popular catalog addition |
| 616 | [Bulls On Parade][616] | Rage Against the Machine | Evil Empire | 1996 | popular catalog addition |
| 617 | [Guerrilla Radio][617] | Rage Against the Machine | The Battle of Los Angeles | 1999 | popular catalog addition |
| 618 | [Californication][618] | Red Hot Chili Peppers | The Studio Album Collection 1991-2011 | 1999 | popular catalog addition |
| 619 | [Dani California][619] | Red Hot Chili Peppers | Dani California - EP | 2006 | popular catalog addition |
| 620 | [Prayer of the Refugee][620] | Rise Against | The Sufferer & the Witness | 2006 | popular catalog addition |
| 621 | [Ready To Fall][621] | Rise Against | The Sufferer & the Witness | 2006 | popular catalog addition |
| 622 | [Living Dead Girl][622] | Rob Zombie | Hellbilly Deluxe | 1998 | popular catalog addition |
| 623 | [Superbeast][623] | Rob Zombie | Hellbilly Deluxe | 1998 | popular catalog addition |
| 624 | [Always][624] | Saliva | Back Into Your System | 2002 | popular catalog addition |
| 625 | [Ladies and Gentlemen][625] | Saliva | Moving Forward In Reverse: Greatest Hits | 2006 | popular catalog addition |
| 626 | [Remedy][626] | Seether | Karma and Effect | 2005 | popular catalog addition |
| 627 | [Rise Above This][627] | Seether | Finding Beauty In Negative Spaces (Bonus Track Version) | 2007 | popular catalog addition |
| 628 | [Over Your Shoulder][628] | Seven Mary Three | Orange Ave. | 1998 | popular catalog addition |
| 629 | [Water's Edge][629] | Seven Mary Three | American Standard | 1995 | popular catalog addition |
| 630 | [Second Chance][630] | Shinedown | The Sound of Madness (Bonus Track Version) | 2008 | popular catalog addition |
| 631 | [Sound of Madness][631] | Shinedown | The Sound of Madness (Bonus Track Version) | 2008 | popular catalog addition |
| 632 | [Fell On Black Days][632] | Soundgarden | Superunknown (20th Anniversary) | 1994 | popular catalog addition |
| 633 | [Outshined][633] | Soundgarden | Badmotorfinger (Super Deluxe Edition) | 1991 | popular catalog addition |
| 634 | [It's Been Awhile][634] | Staind | Break the Cycle | 2001 | popular catalog addition |
| 635 | [So Far Away][635] | Staind | iTunes Originals: Staind | 2003 | popular catalog addition |
| 636 | [Absolute Zero][636] | Stone Sour | House of Gold & Bones, Pt. 1 | 2012 | popular catalog addition |
| 637 | [Through Glass][637] | Stone Sour | Come What(ever) May | 2006 | popular catalog addition |
| 638 | [Interstate Love Song][638] | Stone Temple Pilots | Thank You | 1994 | popular catalog addition |
| 639 | [Vasoline][639] | Stone Temple Pilots | Purple (Super Deluxe Edition) (2019 Remaster) | 1994 | popular catalog addition |
| 640 | [Still Waiting][640] | Sum 41 | Does This Look Infected? | 2002 | popular catalog addition |
| 641 | [B.Y.O.B.][641] | System Of A Down | Mezmerize | 2005 | popular catalog addition |
| 642 | [Chop Suey!][642] | System Of A Down | Toxicity | 2001 | popular catalog addition |
| 643 | [Spiders][643] | System Of A Down | System Of A Down | 1998 | popular catalog addition |
| 644 | [Dreams (Remastered 2026)][644] | The Cranberries | Everybody Else Is Doing It, So Why Can't We? (Remastered 2026) | 1993 | popular catalog addition |
| 645 | [Linger (Remastered 2026)][645] | The Cranberries | Everybody Else Is Doing It, So Why Can't We? (Remastered 2026) | 1993 | popular catalog addition |
| 646 | [Come Out and Play (Keep 'Em Separated)][646] | The Offspring | Smash | 1994 | popular catalog addition |
| 647 | [Pretty Fly (For a White Guy)][647] | The Offspring | Americana | 1998 | popular catalog addition |
| 648 | [(I Can't Get No) Satisfaction][648] | The Rolling Stones | Forty Licks | 1965 | popular catalog addition |
| 649 | [Gimme Shelter (Remastered 2019)][649] | The Rolling Stones | Let It Bleed (Remastered 2019) | 1969 | popular catalog addition |
| 650 | [1979 (Remastered 2012)][650] | The Smashing Pumpkins | Mellon Collie And The Infinite Sadness (2012 Remastered) | 1995 | popular catalog addition |
| 651 | [Today][651] | The Smashing Pumpkins | Siamese Dream | 1993 | popular catalog addition |
| 652 | [CHOKE][652] | The Warning | CHOKE - Single | 2021 | popular catalog addition |
| 653 | [MONEY][653] | The Warning | MONEY - Single | 2022 | popular catalog addition |
| 654 | [Fell In Love With a Girl][654] | The White Stripes | White Blood Cells | 2001 | popular catalog addition |
| 655 | [Icky Thump][655] | The White Stripes | Icky Thump | 2007 | popular catalog addition |
| 656 | [Closer To the Edge][656] | Thirty Seconds to Mars | This Is War | 2009 | popular catalog addition |
| 657 | [From Yesterday][657] | Thirty Seconds to Mars | A Beautiful Lie | 2005 | popular catalog addition |
| 658 | [I Hate Everything About You][658] | Three Days Grace | Three Days Grace (Expanded Edition) | 2003 | popular catalog addition |
| 659 | [Riot][659] | Three Days Grace | One-X (Deluxe Edition) | 2006 | popular catalog addition |
| 660 | [American Girl][660] | Tom Petty | The Best of Everything: The Definitive Career Spanning Hits Collection 1976-2016 | 1976 | popular catalog addition |
| 661 | [Mary Jane's Last Dance][661] | Tom Petty | The Best of Everything: The Definitive Career Spanning Hits Collection 1976-2016 | 1993 | popular catalog addition |
| 662 | [Open Up Your Eyes][662] | Tonic | Lemon Parade | 1996 | popular catalog addition |
| 663 | [You Wanted More][663] | Tonic | Sugar | 1999 | popular catalog addition |
| 664 | [Forty Six & 2][664] | TOOL | Ænima | 1996 | popular catalog addition |
| 665 | [Schism][665] | TOOL | Lateralus | 2001 | popular catalog addition |
| 666 | [Heathens][666] | twenty one pilots | Suicide Squad: The Album | 2016 | popular catalog addition |
| 667 | [Ride][667] | twenty one pilots | Blurryface | 2015 | popular catalog addition |

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
[13]: https://music.apple.com/us/song/something-wicked/6766252959
[14]: https://music.apple.com/us/song/comedown/1707602649
[15]: https://music.apple.com/us/song/free/1872250568
[16]: https://music.apple.com/us/song/need-a-favor/1688698795
[17]: https://music.apple.com/us/song/broken-mirror/1774393636
[18]: https://music.apple.com/us/song/higher/1440718218
[19]: https://music.apple.com/us/song/bad-guy-feat-saraya/1741617070
[20]: https://music.apple.com/us/song/eye-of-the-storm/6765775795
[21]: https://music.apple.com/us/song/when-i-come-around/1160082350
[22]: https://music.apple.com/us/song/even-flow/425465318
[23]: https://music.apple.com/us/song/bother/214470532
[24]: https://music.apple.com/us/song/free-fallin/1469579716
[25]: https://music.apple.com/us/song/if-you-could-only-see/1440911665
[26]: https://music.apple.com/us/song/name-in-blood/1859687600
[27]: https://music.apple.com/us/song/glycerine/1707602651
[28]: https://music.apple.com/us/song/december/1576793373
[29]: https://music.apple.com/us/song/whatever/1440715666
[30]: https://music.apple.com/us/song/the-middle/1450030115
[31]: https://music.apple.com/us/song/around-the-world/945575407
[32]: https://music.apple.com/us/song/scar-tissue/945575409
[33]: https://music.apple.com/us/song/cumbersome/321977255
[34]: https://music.apple.com/us/song/kerosene/1878542369
[35]: https://music.apple.com/us/song/don-t-wanna-go-home-tonight/1811868681
[36]: https://music.apple.com/us/song/janie-s-got-a-gun/1440746605
[37]: https://music.apple.com/us/song/down-in-a-hole/157316706
[38]: https://music.apple.com/us/song/monsters-feat-blackbear/1499013886
[39]: https://music.apple.com/us/song/my-own-prison/1440666233
[40]: https://music.apple.com/us/song/touch-peel-and-stand/1423333503
[41]: https://music.apple.com/us/song/epic/83385347
[42]: https://music.apple.com/us/song/drive/187454421
[43]: https://music.apple.com/us/song/i-found-love-when-i-found-you/1639863181
[44]: https://music.apple.com/us/song/behind-blue-eyes/1440874577
[45]: https://music.apple.com/us/song/free-bird/1440838661
[46]: https://music.apple.com/us/song/for-whom-the-bell-tolls/579149036
[47]: https://music.apple.com/us/song/she-hates-me/1450664889
[48]: https://music.apple.com/us/song/savior/1440852127
[49]: https://music.apple.com/us/song/click-click-boom/1423175286
[50]: https://music.apple.com/us/song/spoonman/1440811873
[51]: https://music.apple.com/us/song/creep/3631572
[52]: https://music.apple.com/us/song/gone-away/1440901678
[53]: https://music.apple.com/us/song/paint-it-black/1440745782
[54]: https://music.apple.com/us/song/the-kill/1867087254
[55]: https://music.apple.com/us/song/paranoid/785232521
[56]: https://music.apple.com/us/song/shine/1576789671
[57]: https://music.apple.com/us/song/the-world-i-know/120197145
[58]: https://music.apple.com/us/song/one-last-breath/1440738795
[59]: https://music.apple.com/us/song/stupify/1030601026
[60]: https://music.apple.com/us/song/centuries/1440826614
[61]: https://music.apple.com/us/song/paralyzer/1440767124
[62]: https://music.apple.com/us/song/all-my-life/538257185
[63]: https://music.apple.com/us/song/i-stand-alone/1440900494
[64]: https://music.apple.com/us/song/good-riddance-time-of-your-life/346251574
[65]: https://music.apple.com/us/song/pardon-me/187454524
[66]: https://music.apple.com/us/song/black-dog/580708177
[67]: https://music.apple.com/us/song/break-stuff/1440754477
[68]: https://music.apple.com/us/song/my-way/1440843064
[69]: https://music.apple.com/us/song/sex-and-candy/1518392883
[70]: https://music.apple.com/us/song/fade-to-black/579149037
[71]: https://music.apple.com/us/song/closer/1440837621
[72]: https://music.apple.com/us/song/smells-like-teen-spirit/1440783625
[73]: https://music.apple.com/us/song/every-rose-has-its-thorn/716552556
[74]: https://music.apple.com/us/song/footsteps/1030784080
[75]: https://music.apple.com/us/song/dragula/1440845806
[76]: https://music.apple.com/us/song/save-me/80809256
[77]: https://music.apple.com/us/song/black-hole-sun/1440855436
[78]: https://music.apple.com/us/song/outside/263059095
[79]: https://music.apple.com/us/song/toxicity/273714713
[80]: https://music.apple.com/us/song/stressed-out/974485474
[81]: https://music.apple.com/us/song/highway-to-hell/574044008
[82]: https://music.apple.com/us/song/dream-on/1658644941
[83]: https://music.apple.com/us/song/sweet-emotion/1883816642
[84]: https://music.apple.com/us/song/i-stay-away/268435302
[85]: https://music.apple.com/us/song/man-in-the-box/274953022
[86]: https://music.apple.com/us/song/smooth-criminal/406253466
[87]: https://music.apple.com/us/song/like-a-stone/208294873
[88]: https://music.apple.com/us/song/war-pigs/1198293356
[89]: https://music.apple.com/us/song/wanted-dead-or-alive/1422955215
[90]: https://music.apple.com/us/song/so-cold/1440809397
[91]: https://music.apple.com/us/song/crazy-bitch/140862717
[92]: https://music.apple.com/us/song/mother/1440880961
[93]: https://music.apple.com/us/song/land-of-confusion/1030228543
[94]: https://music.apple.com/us/song/bodies/1440777727
[95]: https://music.apple.com/us/song/sugar-we-re-goin-down/1440799364
[96]: https://music.apple.com/us/song/everlong/362133505
[97]: https://music.apple.com/us/song/hemorrhage-in-my-hands/203911976
[98]: https://music.apple.com/us/song/bulletproof/1710147290
[99]: https://music.apple.com/us/song/boulevard-of-broken-dreams/1161539476
[100]: https://music.apple.com/us/song/brain-stew/346249616
[101]: https://music.apple.com/us/song/civil-war/1533361064
[102]: https://music.apple.com/us/song/knockin-on-heaven-s-door/1389971325
[103]: https://music.apple.com/us/song/paradise-city/1377813298
[104]: https://music.apple.com/us/song/jump-around/1604628161
[105]: https://music.apple.com/us/song/wish-you-were-here/271792734
[106]: https://music.apple.com/us/song/coming-undone/1594715396
[107]: https://music.apple.com/us/song/freak-on-a-leash/1165631037
[108]: https://music.apple.com/us/song/immigrant-song/580708280
[109]: https://music.apple.com/us/song/fly-away/723338326
[110]: https://music.apple.com/us/song/somewhere-i-belong/590423282
[111]: https://music.apple.com/us/song/sad-but-true/1572051819
[112]: https://music.apple.com/us/song/wherever-i-may-roam/1572051822
[113]: https://music.apple.com/us/song/all-apologies/1440859612
[114]: https://music.apple.com/us/song/heart-shaped-box/1440859107
[115]: https://music.apple.com/us/song/in-bloom/1440783633
[116]: https://music.apple.com/us/song/rape-me/1440859114
[117]: https://music.apple.com/us/song/mama-i-m-coming-home/209695192
[118]: https://music.apple.com/us/song/alive/204672782
[119]: https://music.apple.com/us/song/walk/1049189260
[120]: https://music.apple.com/us/song/last-resort/1450006105
[121]: https://music.apple.com/us/song/black/425465351
[122]: https://music.apple.com/us/song/yellow-ledbetter/400864988
[123]: https://music.apple.com/us/song/bohemian-rhapsody/1440650711
[124]: https://music.apple.com/us/song/killing-in-the-name/578028952
[125]: https://music.apple.com/us/song/black-betty/216088341
[126]: https://music.apple.com/us/song/otherside/948446133
[127]: https://music.apple.com/us/song/soul-to-squeeze/947701037
[128]: https://music.apple.com/us/song/broken/1440652013
[129]: https://music.apple.com/us/song/fine-again/1440651869
[130]: https://music.apple.com/us/song/young-again/1877229743
[131]: https://music.apple.com/us/song/fade/263058447
[132]: https://music.apple.com/us/song/dead-bloated/1596122743
[133]: https://music.apple.com/us/song/plush/3631541
[134]: https://music.apple.com/us/song/wicked-garden/3631553
[135]: https://music.apple.com/us/song/zombie/1440735264
[136]: https://music.apple.com/us/song/self-esteem/1485034811
[137]: https://music.apple.com/us/song/you-re-gonna-go-far-kid/1440887175
[138]: https://music.apple.com/us/song/bullet-with-butterfly-wings/712732631
[139]: https://music.apple.com/us/song/seven-nation-army/1533513537
[140]: https://music.apple.com/us/song/animal-i-have-become/266221967
[141]: https://music.apple.com/us/song/just-like-you/269975543
[142]: https://music.apple.com/us/song/never-too-late/266221984
[143]: https://music.apple.com/us/song/i-will-not-bow/1440809138
[144]: https://music.apple.com/us/song/pour-some-sugar-on-me/1438626355
[145]: https://music.apple.com/us/song/stricken/1030228537
[146]: https://music.apple.com/us/song/who-will-you-follow/1891104594
[147]: https://music.apple.com/us/song/zombified/1622461653
[148]: https://music.apple.com/us/song/re-align/1440900495
[149]: https://music.apple.com/us/song/bawitdaba/586705734
[150]: https://music.apple.com/us/song/cult-of-personality/1734681083
[151]: https://music.apple.com/us/song/come-as-you-are/1440783636
[152]: https://music.apple.com/us/song/crazy-train/1531535287
[153]: https://music.apple.com/us/song/mr-crowley/911604129
[154]: https://music.apple.com/us/song/over-the-mountain/437515108
[155]: https://music.apple.com/us/song/under-the-graveyard/1486836089
[156]: https://music.apple.com/us/song/control/1450664882
[157]: https://music.apple.com/us/song/we-will-rock-you/1440651216
[158]: https://music.apple.com/us/song/cum-on-feel-the-noize/169782152
[159]: https://music.apple.com/us/song/under-the-bridge/948460560
[160]: https://music.apple.com/us/song/fake-it/1440747243
[161]: https://music.apple.com/us/song/simple-man/16232991
[162]: https://music.apple.com/us/song/fat-lip/1440921141
[163]: https://music.apple.com/us/song/aerials/273714765
[164]: https://music.apple.com/us/song/the-kids-aren-t-alright/1783160367
[165]: https://music.apple.com/us/song/sober/1474185453
[166]: https://music.apple.com/us/song/afterlife-from-the-netflix-series-devil-may-cry/1797189311
[167]: https://music.apple.com/us/song/darkness-settles-in/1487244866
[168]: https://music.apple.com/us/song/landmines/1716427583
[169]: https://music.apple.com/us/song/just-pretend/1817382450
[170]: https://music.apple.com/us/song/my-own-worst-enemy/258611995
[171]: https://music.apple.com/us/song/rx-medicate/1262126920
[172]: https://music.apple.com/us/song/she-talks-to-angels/1440810842
[173]: https://music.apple.com/us/song/my-hero/334812017
[174]: https://music.apple.com/us/song/something-in-the-way-remastered/1586410672
[175]: https://music.apple.com/us/song/the-man-who-sold-the-world-live-acoustic/1440892680
[176]: https://music.apple.com/us/song/big-empty-2019-remaster/1483793461
[177]: https://music.apple.com/us/song/kryptonite/1452011941
[178]: https://music.apple.com/us/song/angels-fall/1440811205
[179]: https://music.apple.com/us/song/ain-t-no-rest-for-the-wicked/1437697155
[180]: https://music.apple.com/us/song/the-unforgiven/1572051821
[181]: https://music.apple.com/us/song/kill-the-noise/1582007064
[182]: https://music.apple.com/us/song/last-kiss/1826659460
[183]: https://music.apple.com/us/song/for-you/263059083
[184]: https://music.apple.com/us/song/hunger-strike/1440657642
[185]: https://music.apple.com/us/song/say-it-ain-t-so/1440870181
[186]: https://music.apple.com/us/song/when-i-m-gone-2023-remaster/1699718921
[187]: https://music.apple.com/us/song/sweet-dreams-are-made-of-this/1540219923
[188]: https://music.apple.com/us/song/snow-hey-oh/945568999
[189]: https://music.apple.com/us/song/monsters/1352572895
[190]: https://music.apple.com/us/song/i-won-t-back-down/1469579709
[191]: https://music.apple.com/us/song/here-i-go-again-1987-version-2017-remaster/1862662882
[192]: https://music.apple.com/us/song/starless/6770568779
[193]: https://music.apple.com/us/song/you-shook-me-all-night-long/574050607
[194]: https://music.apple.com/us/song/sail/1555208311
[195]: https://music.apple.com/us/song/comfortably-numb/1067444896
[196]: https://music.apple.com/us/song/when-legends-rise/1710147288
[197]: https://music.apple.com/us/song/keep-away/1440715668
[198]: https://music.apple.com/us/song/feel-good-inc/693620735
[199]: https://music.apple.com/us/song/hurt/1452875626
[200]: https://music.apple.com/us/song/what-i-ve-done/1622311449
[201]: https://music.apple.com/us/song/lightning-crashes/1440487152
[202]: https://music.apple.com/us/song/master-of-puppets/1275600554
[203]: https://music.apple.com/us/song/better-man/1826659454
[204]: https://music.apple.com/us/song/headstrong/301126618
[205]: https://music.apple.com/us/song/more-human-than-human/1445662559
[206]: https://music.apple.com/us/song/screaming-suicide/1655432390
[207]: https://music.apple.com/us/song/king-nothing-remastered/1808799661
[208]: https://music.apple.com/us/song/can-t-stop/948438478
[209]: https://music.apple.com/us/song/patience/1523360171
[210]: https://music.apple.com/us/song/hail-to-the-king/672046531
[211]: https://music.apple.com/us/song/hard-to-handle/1547308255
[212]: https://music.apple.com/us/song/cold/190781606
[213]: https://music.apple.com/us/song/going-under/1440665975
[214]: https://music.apple.com/us/song/straight-out-of-line-2024-remaster/1758236963
[215]: https://music.apple.com/us/song/longview/1160990767
[216]: https://music.apple.com/us/song/lost/1668488811
[217]: https://music.apple.com/us/song/one-step-closer/528437411
[218]: https://music.apple.com/us/song/one/1434424172
[219]: https://music.apple.com/us/song/turn-the-page/579370550
[220]: https://music.apple.com/us/song/i-don-t-know/1531535104
[221]: https://music.apple.com/us/song/see-u-in-hell-from-the-netflix-series-devil-may-cry/1894386678
[222]: https://music.apple.com/us/song/daughter-remastered/426656373
[223]: https://music.apple.com/us/song/closing-time/1457749142
[224]: https://music.apple.com/us/song/duality/926184068
[225]: https://music.apple.com/us/song/meant-to-live/270003842
[226]: https://music.apple.com/us/song/kill-me-fast/1811868496
[227]: https://music.apple.com/us/song/killing-fields/1825930765
[228]: https://music.apple.com/us/song/braindead-feat-toby-morse/1817729936
[229]: https://music.apple.com/us/song/song-2-2012-remaster/726416473
[230]: https://music.apple.com/us/song/nightmare/378658664
[231]: https://music.apple.com/us/song/send-the-pain-below/270139033
[232]: https://music.apple.com/us/song/prayer/1030144488
[233]: https://music.apple.com/us/song/lose-yourself/1444221569
[234]: https://music.apple.com/us/song/believer/1411628233
[235]: https://music.apple.com/us/song/faint/528437024
[236]: https://music.apple.com/us/song/another-brick-in-the-wall-pt-2/1065975638
[237]: https://music.apple.com/us/song/you-re-going-down/715505186
[238]: https://music.apple.com/us/song/the-kill-bury-me/1440839332
[239]: https://music.apple.com/us/song/we-re-not-gonna-take-it/1788380899
[240]: https://music.apple.com/us/song/more-than-hate/1821279203
[241]: https://music.apple.com/us/song/kashmir/952919352
[242]: https://music.apple.com/us/song/holiday/1161539473
[243]: https://music.apple.com/us/song/dirty-deeds-done-dirt-cheap/575306356
[244]: https://music.apple.com/us/song/eye-of-the-storm/1618342155
[245]: https://music.apple.com/us/song/black-summer/1608013513
[246]: https://music.apple.com/us/song/give-it-away/945581838
[247]: https://music.apple.com/us/song/help/1699431734
[248]: https://music.apple.com/us/song/here-without-you/1440739980
[249]: https://music.apple.com/us/song/war-pigs-luke-s-wall/785232520
[250]: https://music.apple.com/us/song/voices/1030601024
[251]: https://music.apple.com/us/song/burn-it-down/518869937
[252]: https://music.apple.com/us/song/new-divide/1745057599
[253]: https://music.apple.com/us/song/the-beautiful-people/1440804361
[254]: https://music.apple.com/us/song/until-it-sleeps-remastered/1806720493
[255]: https://music.apple.com/us/song/not-falling/250762894
[256]: https://music.apple.com/us/song/hurt/1440838114
[257]: https://music.apple.com/us/song/brain-damage/1665304040
[258]: https://music.apple.com/us/song/a-symptom-of-being-human/1606457294
[259]: https://music.apple.com/us/song/for-i-am-death/1830382225
[260]: https://music.apple.com/us/song/one-more-time/1707258049
[261]: https://music.apple.com/us/song/stuck-in-my-head/1752949982
[262]: https://music.apple.com/us/song/t-n-t/574124824
[263]: https://music.apple.com/us/song/wake-me-up-when-september-ends/1161539483
[264]: https://music.apple.com/us/song/are-you-ready/1425820709
[265]: https://music.apple.com/us/song/nobody-wants-to-die/1649426787
[266]: https://music.apple.com/us/song/how-did-you-love/1025208967
[267]: https://music.apple.com/us/song/by-the-way/948438464
[268]: https://music.apple.com/us/song/like-a-villain/1817382445
[269]: https://music.apple.com/us/song/dead-inside/1820484064
[270]: https://music.apple.com/us/song/rest-in-peace/1589343379
[271]: https://music.apple.com/us/song/for-those-about-to-rock-we-salute-you/574055178
[272]: https://music.apple.com/us/song/dead-man-walking/1584623549
[273]: https://music.apple.com/us/song/livin-on-the-edge/1680799208
[274]: https://music.apple.com/us/song/lifeline/1581509335
[275]: https://music.apple.com/us/song/monkey-wrench/334812033
[276]: https://music.apple.com/us/song/dazed-and-confused/580708943
[277]: https://music.apple.com/us/song/shot-in-the-dark/1533816314
[278]: https://music.apple.com/us/song/making-a-fire/1538671508
[279]: https://music.apple.com/us/song/flagpole-sitta/1440923493
[280]: https://music.apple.com/us/song/rock-you-like-a-hurricane/1434894258
[281]: https://music.apple.com/us/song/shame-shame/1538671510
[282]: https://music.apple.com/us/song/distance/1685901195
[283]: https://music.apple.com/us/song/hells-bells/574050495
[284]: https://music.apple.com/us/song/the-vengeful-one/1006937451
[285]: https://music.apple.com/us/song/a-little-bit-off/1487244862
[286]: https://music.apple.com/us/song/all-within-my-hands/579379136
[287]: https://music.apple.com/us/song/far-behind/734450288
[288]: https://music.apple.com/us/song/insane-in-the-brain/266797417
[289]: https://music.apple.com/us/song/bleed-it-out/1622307215
[290]: https://music.apple.com/us/song/crawling/528437426
[291]: https://music.apple.com/us/song/lying-from-you/590423283
[292]: https://music.apple.com/us/song/hardwired/1145498517
[293]: https://music.apple.com/us/song/kickstart-my-heart/1606706536
[294]: https://music.apple.com/us/song/gotta-get-away/1485043446
[295]: https://music.apple.com/us/song/flying-high-again/1592004621
[296]: https://music.apple.com/us/song/45/321038527
[297]: https://music.apple.com/us/song/jumper/271978748
[298]: https://music.apple.com/us/song/everything-ends/1774393631
[299]: https://music.apple.com/us/song/crawl-back-to-my-coffin/1823939180
[300]: https://music.apple.com/us/song/magnetic/1734536497
[301]: https://music.apple.com/us/song/breaking-the-habit/528437026
[302]: https://music.apple.com/us/song/specter/1831595386
[303]: https://music.apple.com/us/song/bored/1820237458
[304]: https://music.apple.com/us/song/i-refuse-feat-maria-brink-2025-version/1810771131
[305]: https://music.apple.com/us/song/freefall/1739158021
[306]: https://music.apple.com/us/song/apologies/1811868494
[307]: https://music.apple.com/us/song/water-song-janie-s-got-a-gun/1440824725
[308]: https://music.apple.com/us/song/mayday/1811868495
[309]: https://music.apple.com/us/song/i-am-machine/967339624
[310]: https://music.apple.com/us/song/november-rain/1440896193
[311]: https://music.apple.com/us/song/too-far-gone/1655432397
[312]: https://music.apple.com/us/song/i-write-sins-not-tragedies/80456409
[313]: https://music.apple.com/us/song/beyond/1689546756
[314]: https://music.apple.com/us/song/unstoppable/1646032789
[315]: https://music.apple.com/us/song/are-you-gonna-be-my-girl/1778048261
[316]: https://music.apple.com/us/song/down-rodeo/390538410
[317]: https://music.apple.com/us/song/loser/1440891592
[318]: https://music.apple.com/us/song/you-don-t-know-how-it-feels/892018547
[319]: https://music.apple.com/us/song/shoot-to-thrill/574050498
[320]: https://music.apple.com/us/song/daylight/1606457302
[321]: https://music.apple.com/us/song/wasteland/1440760458
[322]: https://music.apple.com/us/song/fight-for-your-right/1440912353
[323]: https://music.apple.com/us/song/face-down/806224710
[324]: https://music.apple.com/us/song/loser/1452011949
[325]: https://music.apple.com/us/song/panama/977495522
[326]: https://music.apple.com/us/song/no-one-like-you/1440922031
[327]: https://music.apple.com/us/song/trippin-on-a-hole-in-a-paper-heart/302229819
[328]: https://music.apple.com/us/song/realize/1533816307
[329]: https://music.apple.com/us/song/no-sleep-till-brooklyn/724971792
[330]: https://music.apple.com/us/song/ramble-on/580708477
[331]: https://music.apple.com/us/song/breaking-down/1452693520
[332]: https://music.apple.com/us/song/remember-when/1694927629
[333]: https://music.apple.com/us/song/all-along-the-watchtower/357653191
[334]: https://music.apple.com/us/song/dangerous/1517736799
[335]: https://music.apple.com/us/song/santa-monica-re-recorded-slowed-reverb/1686253646
[336]: https://music.apple.com/us/song/learning-to-fly/1469579718
[337]: https://music.apple.com/us/song/superblood-wolfmoon/1495371459
[338]: https://music.apple.com/us/song/sickness/1496280504
[339]: https://music.apple.com/us/song/love-in-an-elevator/1440913404
[340]: https://music.apple.com/us/song/beacon/6764034396
[341]: https://music.apple.com/us/song/manufactured-extinct/995383352
[342]: https://music.apple.com/us/song/perfect-strangers/1470534347
[343]: https://music.apple.com/us/song/just-got-lucky/1727790314
[344]: https://music.apple.com/us/song/new-messiah/950232299
[345]: https://music.apple.com/us/song/hunters-moon/1603122626
[346]: https://music.apple.com/us/song/it-s-so-easy/1377813289
[347]: https://music.apple.com/us/song/this-is-now/1440737878
[348]: https://music.apple.com/us/song/radioactive/1440855760
[349]: https://music.apple.com/us/song/numb-encore/182601389
[350]: https://music.apple.com/us/song/over-the-hills-and-far-away/580707919
[351]: https://music.apple.com/us/song/runaway/1526170283
[352]: https://music.apple.com/us/song/master-of-disguise/60356363
[353]: https://music.apple.com/us/song/tuesday-s-gone/1484424554
[354]: https://music.apple.com/us/song/all-nightmare-long/579368315
[355]: https://music.apple.com/us/song/crash-course-in-brain-surgery/579370562
[356]: https://music.apple.com/us/song/creeping-death/579149040
[357]: https://music.apple.com/us/song/halo-on-fire/1145498742
[358]: https://music.apple.com/us/song/helpless/579370559
[359]: https://music.apple.com/us/song/the-thing-that-should-not-be/1275600555
[360]: https://music.apple.com/us/song/don-t-tell-me-you-love-me/1440767565
[361]: https://music.apple.com/us/song/the-great-southern-trendkill/1144142641
[362]: https://music.apple.com/us/song/under-pressure-feat-david-bowie/1434899944
[363]: https://music.apple.com/us/song/start-me-up/1584840350
[364]: https://music.apple.com/us/song/i-remember-you/1727790519
[365]: https://music.apple.com/us/song/extra-sexual-extraterrestrial-live/1861036472
[366]: https://music.apple.com/us/song/love-song/1440906840
[367]: https://music.apple.com/us/song/the-covenant/1826037358
[368]: https://music.apple.com/us/song/look-out-for-me/1805821337
[369]: https://music.apple.com/us/song/so-far-so-fake/1651691473
[370]: https://music.apple.com/us/song/demonic-depression/1794563071
[371]: https://music.apple.com/us/song/pale-horse/1813978941
[372]: https://music.apple.com/us/song/infinite-source/1825435153
[373]: https://music.apple.com/us/song/nothin/1858411509
[374]: https://music.apple.com/us/song/the-spell/1822843353
[375]: https://music.apple.com/us/song/searchlight/1852100382
[376]: https://music.apple.com/us/song/caramel/1800533447
[377]: https://music.apple.com/us/song/the-end-feat-babymetal-2025-version/1831370163
[378]: https://music.apple.com/us/song/my-only-angel-feat-steve-martin-desert-road-version/1844814769
[379]: https://music.apple.com/us/song/asking-for-a-friend/1847680351
[380]: https://music.apple.com/us/song/as-alive-as-you-need-me-to-be/1826198226
[381]: https://music.apple.com/us/song/my-mind-is-a-mountain/1825435149
[382]: https://music.apple.com/us/song/spit-xxv/1827898136
[383]: https://music.apple.com/us/song/today-s-song/1823739979
[384]: https://music.apple.com/us/song/i-disappear/579145451
[385]: https://music.apple.com/us/song/the-end/1808747032
[386]: https://music.apple.com/us/song/wasting-my-time/311276315
[387]: https://music.apple.com/us/song/emergence/1800533191
[388]: https://music.apple.com/us/song/by-a-monsters-hand/1794563062
[389]: https://music.apple.com/us/song/blur/1735828506
[390]: https://music.apple.com/us/song/the-red/270139035
[391]: https://music.apple.com/us/song/dance-kid-dance/1791163743
[392]: https://music.apple.com/us/song/black-butterfly/1709502277
[393]: https://music.apple.com/us/song/walls-come-down/1751901666
[394]: https://music.apple.com/us/song/what-remains/1757643932
[395]: https://music.apple.com/us/song/pieces/1734457811
[396]: https://music.apple.com/us/song/barely-breathing-feat-against-the-current/1721247250
[397]: https://music.apple.com/us/song/truth/1649793584
[398]: https://music.apple.com/us/song/make-it-all-right/1746794870
[399]: https://music.apple.com/us/song/i-was-alive/1692845771
[400]: https://music.apple.com/us/song/rebel-yell/1728132314
[401]: https://music.apple.com/us/song/this-is-the-way-feat-dmx/1724478365
[402]: https://music.apple.com/us/song/dilemma/1740966503
[403]: https://music.apple.com/us/song/friendly-fire/1745058115
[404]: https://music.apple.com/us/song/s-ck/1726673853
[405]: https://music.apple.com/us/song/devil-you-know/1700433422
[406]: https://music.apple.com/us/song/bad-man/1646032787
[407]: https://music.apple.com/us/song/testify/192816689
[408]: https://music.apple.com/us/song/sex-type-thing/1263219666
[409]: https://music.apple.com/us/song/the-dirt-i-m-buried-in/1650504522
[410]: https://music.apple.com/us/song/blood-in-the-water/1676323506
[411]: https://music.apple.com/us/song/last-resort-reimagined/1694040594
[412]: https://music.apple.com/us/song/best-of-you/334812012
[413]: https://music.apple.com/us/song/somebody-told-me/1440891175
[414]: https://music.apple.com/us/song/nobody/1748150708
[415]: https://music.apple.com/us/song/rescued/1682993467
[416]: https://music.apple.com/us/song/clint-eastwood/850583583
[417]: https://music.apple.com/us/song/no-apologies/1603609535
[418]: https://music.apple.com/us/song/lowest-in-me/1757733530
[419]: https://music.apple.com/us/song/saviour-ii/1819804343
[420]: https://music.apple.com/us/song/beguiled/6780521350
[421]: https://music.apple.com/us/song/i-am-the-weapon/1609130422
[422]: https://music.apple.com/us/song/sabotage/724971921
[423]: https://music.apple.com/us/song/mr-brownstone/1377813295
[424]: https://music.apple.com/us/song/painkiller/207178166
[425]: https://music.apple.com/us/song/symphony-of-destruction/725812418
[426]: https://music.apple.com/us/song/nevermore/573711282
[427]: https://music.apple.com/us/song/bringing-on-the-pain/1671108721
[428]: https://music.apple.com/us/song/electric-head-pt-1-the-agony/1440749910
[429]: https://music.apple.com/us/song/times-like-these/1619239934
[430]: https://music.apple.com/us/song/masterpiece/1640479585
[431]: https://music.apple.com/us/song/tippa-my-tongue/1653954334
[432]: https://music.apple.com/us/song/it-s-a-long-way-to-the-top-if-you-wanna-rock-n-roll/574124819
[433]: https://music.apple.com/us/song/no-one-knows/1443996879
[434]: https://music.apple.com/us/song/if-tomorrow-never-comes/1581509342
[435]: https://music.apple.com/us/song/mystery/1566166549
[436]: https://music.apple.com/us/song/the-steeple/1628825166
[437]: https://music.apple.com/us/song/the-memory-remains-feat-marianne-faithfull/579374219
[438]: https://music.apple.com/us/song/love-dies-young/1538671519
[439]: https://music.apple.com/us/song/planet-zero/1606457287
[440]: https://music.apple.com/us/song/die4u/1583959120
[441]: https://music.apple.com/us/song/father-of-mine/1435638466
[442]: https://music.apple.com/us/song/shotgun-blues/1586126256
[443]: https://music.apple.com/us/song/warrior-feat-travis-barker/1673098884
[444]: https://music.apple.com/us/song/scarlet-cross/1819701705
[445]: https://music.apple.com/us/song/hard-skool/1586724616
[446]: https://music.apple.com/us/song/all-the-small-things/1444118647
[447]: https://music.apple.com/us/song/dude-looks-like-a-lady/1440746591
[448]: https://music.apple.com/us/song/everything-zen/1707602646
[449]: https://music.apple.com/us/song/mars-simula/1545068582
[450]: https://music.apple.com/us/song/unforgettable/1710147292
[451]: https://music.apple.com/us/song/the-devil-s-bleeding-crown/1440847416
[452]: https://music.apple.com/us/song/cherry-pie/198468208
[453]: https://music.apple.com/us/song/nowhere-generation/1556349464
[454]: https://music.apple.com/us/song/wonderwall-remastered/1525933490
[455]: https://music.apple.com/us/song/burden-in-my-hand/1423646243
[456]: https://music.apple.com/us/song/adrenaline/1553258642
[457]: https://music.apple.com/us/song/natural/1437948594
[458]: https://music.apple.com/us/song/right-here-album-version/76773857
[459]: https://music.apple.com/us/song/mercy/1566904908
[460]: https://music.apple.com/us/song/living-the-dream/1487244861
[461]: https://music.apple.com/us/song/breathe-again/1555602517
[462]: https://music.apple.com/us/song/death-by-rock-and-roll/1537709140
[463]: https://music.apple.com/us/song/trials/1577242551
[464]: https://music.apple.com/us/song/runnin-down-a-dream/1440825631
[465]: https://music.apple.com/us/song/waiting-on-a-war/1538671512
[466]: https://music.apple.com/us/song/hometown/1549920531
[467]: https://music.apple.com/us/song/slow-ride-single-version/897227253
[468]: https://music.apple.com/us/song/make-me-bad/193153075
[469]: https://music.apple.com/us/song/learn-to-walk-again/1695703572
[470]: https://music.apple.com/us/song/ohms/1528075505
[471]: https://music.apple.com/us/song/my-way-soon/1543008227
[472]: https://music.apple.com/us/song/why-don-t-you-get-a-job/1440881849
[473]: https://music.apple.com/us/song/somebody-that-i-used-to-know/1522750649
[474]: https://music.apple.com/us/song/heavy-is-the-head-feat-chris-cornell/1585299008
[475]: https://music.apple.com/us/song/i-will-buy-you-a-new-life-re-recorded/461630881
[476]: https://music.apple.com/us/song/purple-haze/357225355
[477]: https://music.apple.com/us/song/bleeding-me-remastered/1806720496
[478]: https://music.apple.com/us/song/buddy-holly/1440869921
[479]: https://music.apple.com/us/song/atlas-falls/1512827486
[480]: https://music.apple.com/us/song/beverly-hills/1440865427
[481]: https://music.apple.com/us/song/radioactive-feat-kendrick-lamar/1445055476
[482]: https://music.apple.com/us/song/lake-of-fire-live-acoustic/1440893065
[483]: https://music.apple.com/us/song/flowers-on-a-grave/1501443858
[484]: https://music.apple.com/us/song/some-kind-of-monster/579379126
[485]: https://music.apple.com/us/song/ghost/1436744863
[486]: https://music.apple.com/us/song/wolf-totem-feat-jacoby-shaddix/1700686242
[487]: https://music.apple.com/us/song/the-unforgiven-iii/579368317
[488]: https://music.apple.com/us/song/ordinary-man-feat-elton-john/1493922866
[489]: https://music.apple.com/us/song/wash-it-all-away/1853963248
[490]: https://music.apple.com/us/song/work/1508238501
[491]: https://music.apple.com/us/song/come-together/1279719442
[492]: https://music.apple.com/us/song/1979/712732634
[493]: https://music.apple.com/us/song/rolling-7s/1482163911
[494]: https://music.apple.com/us/song/inside-out/1487244859
[495]: https://music.apple.com/us/song/back-in-black/574050602
[496]: https://music.apple.com/us/song/thunderstruck/575998661
[497]: https://music.apple.com/us/song/crazy/1440913824
[498]: https://music.apple.com/us/song/walk-this-way/1883816638
[499]: https://music.apple.com/us/song/rooster/157317003
[500]: https://music.apple.com/us/song/would/157317248
[501]: https://music.apple.com/us/song/movies-2026-remastered/6790972970
[502]: https://music.apple.com/us/song/these-days/1427759195
[503]: https://music.apple.com/us/song/fight/1757916760
[504]: https://music.apple.com/us/song/the-comeback-feat-craig-mabbitt-of-escape-the-fate/1577939784
[505]: https://music.apple.com/us/song/dear-maria-count-me-in/502522511
[506]: https://music.apple.com/us/song/weightless-rerecorded/1811919736
[507]: https://music.apple.com/us/song/animals/1533388859
[508]: https://music.apple.com/us/song/doomsday/1485076238
[509]: https://music.apple.com/us/song/cochise/208294752
[510]: https://music.apple.com/us/song/i-am-the-highway/208294980
[511]: https://music.apple.com/us/song/in-between/872815926
[512]: https://music.apple.com/us/song/the-lines/872815923
[513]: https://music.apple.com/us/song/in-this-river/1437331630
[514]: https://music.apple.com/us/song/stillborn-feat-ozzy-osbourne/1437328794
[515]: https://music.apple.com/us/song/iron-man/787845531
[516]: https://music.apple.com/us/song/n-i-b/1198293401
[517]: https://music.apple.com/us/song/livin-on-a-prayer/1422955211
[518]: https://music.apple.com/us/song/you-give-love-a-bad-name/1422954999
[519]: https://music.apple.com/us/song/breath/1440872268
[520]: https://music.apple.com/us/song/the-diary-of-jane-single-version/1440870739
[521]: https://music.apple.com/us/song/lit-up/1440627987
[522]: https://music.apple.com/us/song/sorry/140862708
[523]: https://music.apple.com/us/song/machinehead-remastered/1440946056
[524]: https://music.apple.com/us/song/swallowed-remastered/1443279742
[525]: https://music.apple.com/us/song/gel/1576793480
[526]: https://music.apple.com/us/song/heavy/1576791720
[527]: https://music.apple.com/us/song/my-sacrifice/1440718451
[528]: https://music.apple.com/us/song/with-arms-wide-open/1440631605
[529]: https://music.apple.com/us/song/her-black-wings/1440885826
[530]: https://music.apple.com/us/song/twist-of-cain/1440880563
[531]: https://music.apple.com/us/song/shelf-in-the-room/1423333492
[532]: https://music.apple.com/us/song/the-down-town/1423333760
[533]: https://music.apple.com/us/song/photograph/1440902940
[534]: https://music.apple.com/us/song/rock-of-ages/1440902947
[535]: https://music.apple.com/us/song/down-with-the-sickness/1030601027
[536]: https://music.apple.com/us/song/the-sound-of-silence/1006937459
[537]: https://music.apple.com/us/song/step-up/1440667118
[538]: https://music.apple.com/us/song/tear-away/1440777729
[539]: https://music.apple.com/us/song/bring-me-to-life/1440666111
[540]: https://music.apple.com/us/song/call-me-when-you-re-sober/1440634107
[541]: https://music.apple.com/us/song/from-out-of-nowhere/83385250
[542]: https://music.apple.com/us/song/midlife-crisis/184673165
[543]: https://music.apple.com/us/song/dance-dance/1440799368
[544]: https://music.apple.com/us/song/thnks-fr-th-mmrs/1440787031
[545]: https://music.apple.com/us/song/popular-monster/1487801237
[546]: https://music.apple.com/us/song/the-drug-in-me-is-you/1485046676
[547]: https://music.apple.com/us/song/falling-on/1440767128
[548]: https://music.apple.com/us/song/one-thing/1440630302
[549]: https://music.apple.com/us/song/bad-company/1848984983
[550]: https://music.apple.com/us/song/wrong-side-of-heaven/1853966266
[551]: https://music.apple.com/us/song/learn-to-fly/278229654
[552]: https://music.apple.com/us/song/the-pretender/262743414
[553]: https://music.apple.com/us/song/bad-day/203912551
[554]: https://music.apple.com/us/song/shimmer/158719348
[555]: https://music.apple.com/us/song/bad-habits/1731232203
[556]: https://music.apple.com/us/song/overrated/1647021683
[557]: https://music.apple.com/us/song/awake/1440733697
[558]: https://music.apple.com/us/song/voodoo/1440733692
[559]: https://music.apple.com/us/song/american-idiot/207192732
[560]: https://music.apple.com/us/song/basket-case/1160082180
[561]: https://music.apple.com/us/song/sweet-child-o-mine/1377826892
[562]: https://music.apple.com/us/song/welcome-to-the-jungle/1377826728
[563]: https://music.apple.com/us/song/shamrocks-and-shenanigans/1604628166
[564]: https://music.apple.com/us/song/who-s-the-man/1604619994
[565]: https://music.apple.com/us/song/nice-to-know-you/271792714
[566]: https://music.apple.com/us/song/stellar/187454389
[567]: https://music.apple.com/us/song/save-me/1520495045
[568]: https://music.apple.com/us/song/son-of-a-sinner/1584623553
[569]: https://music.apple.com/us/song/pain/1454825817
[570]: https://music.apple.com/us/song/sweetness/1450030117
[571]: https://music.apple.com/us/song/blue-on-black/316824647
[572]: https://music.apple.com/us/song/cowboy/1433803665
[573]: https://music.apple.com/us/song/only-god-knows-why/1556413814
[574]: https://music.apple.com/us/song/falling-away-from-me/193152917
[575]: https://music.apple.com/us/song/got-the-life/1165631038
[576]: https://music.apple.com/us/song/stairway-to-heaven/580708180
[577]: https://music.apple.com/us/song/whole-lotta-love/580708471
[578]: https://music.apple.com/us/song/american-woman/723338394
[579]: https://music.apple.com/us/song/are-you-gonna-go-my-way/712353794
[580]: https://music.apple.com/us/song/nookie/1440754476
[581]: https://music.apple.com/us/song/rollin-air-raid-vehicle/1440788202
[582]: https://music.apple.com/us/song/in-the-end/590431785
[583]: https://music.apple.com/us/song/numb/590423552
[584]: https://music.apple.com/us/song/glamour-boys/193145121
[585]: https://music.apple.com/us/song/type/158439925
[586]: https://music.apple.com/us/song/sweet-home-alabama/1413948381
[587]: https://music.apple.com/us/song/that-smell/1469583632
[588]: https://music.apple.com/us/song/saint-joe-on-the-school-bus/726131505
[589]: https://music.apple.com/us/song/sherry-fraser/726131508
[590]: https://music.apple.com/us/song/enter-sandman/1572051818
[591]: https://music.apple.com/us/song/nothing-else-matters/1572046444
[592]: https://music.apple.com/us/song/head-like-a-hole/1440941002
[593]: https://music.apple.com/us/song/the-hand-that-feeds/1440852198
[594]: https://music.apple.com/us/song/about-a-girl/669728225
[595]: https://music.apple.com/us/song/lithium/1440783764
[596]: https://music.apple.com/us/song/bark-at-the-moon/192826926
[597]: https://music.apple.com/us/song/no-more-tears/209695373
[598]: https://music.apple.com/us/song/boom/300206617
[599]: https://music.apple.com/us/song/youth-of-the-nation/204672806
[600]: https://music.apple.com/us/song/cemetery-gates/1163813975
[601]: https://music.apple.com/us/song/cowboys-from-hell/1163813971
[602]: https://music.apple.com/us/song/getting-away-with-murder-2020/1546439028
[603]: https://music.apple.com/us/song/scars/1440769664
[604]: https://music.apple.com/us/song/alive/425465319
[605]: https://music.apple.com/us/song/jeremy/425465353
[606]: https://music.apple.com/us/song/nothin-but-a-good-time/716552513
[607]: https://music.apple.com/us/song/talk-dirty-to-me/715750443
[608]: https://music.apple.com/us/song/100-in-a-55/1423252957
[609]: https://music.apple.com/us/song/trenches/634685023
[610]: https://music.apple.com/us/song/blurry/1450664888
[611]: https://music.apple.com/us/song/drift-and-die/1450664885
[612]: https://music.apple.com/us/song/another-one-bites-the-dust/1440650719
[613]: https://music.apple.com/us/song/we-are-the-champions/1440651281
[614]: https://music.apple.com/us/song/mama-weer-all-crazee-now/192486756
[615]: https://music.apple.com/us/song/metal-health-bang-your-head/190737658
[616]: https://music.apple.com/us/song/bulls-on-parade/390538384
[617]: https://music.apple.com/us/song/guerrilla-radio/192816698
[618]: https://music.apple.com/us/song/californication/947688104
[619]: https://music.apple.com/us/song/dani-california/208036515
[620]: https://music.apple.com/us/song/prayer-of-the-refugee/1440858616
[621]: https://music.apple.com/us/song/ready-to-fall/1440858505
[622]: https://music.apple.com/us/song/living-dead-girl/1440845809
[623]: https://music.apple.com/us/song/superbeast/1440845804
[624]: https://music.apple.com/us/song/always/1422924591
[625]: https://music.apple.com/us/song/ladies-and-gentlemen/1422939015
[626]: https://music.apple.com/us/song/remedy/1440645699
[627]: https://music.apple.com/us/song/rise-above-this/1440747418
[628]: https://music.apple.com/us/song/over-your-shoulder/79028233
[629]: https://music.apple.com/us/song/water-s-edge/321977253
[630]: https://music.apple.com/us/song/second-chance/279812225
[631]: https://music.apple.com/us/song/sound-of-madness/279812223
[632]: https://music.apple.com/us/song/fell-on-black-days/1440811476
[633]: https://music.apple.com/us/song/outshined/1440885678
[634]: https://music.apple.com/us/song/it-s-been-awhile/263058565
[635]: https://music.apple.com/us/song/so-far-away/1506599928
[636]: https://music.apple.com/us/song/absolute-zero/563994155
[637]: https://music.apple.com/us/song/through-glass/214473041
[638]: https://music.apple.com/us/song/interstate-love-song/3631594
[639]: https://music.apple.com/us/song/vasoline/1466652602
[640]: https://music.apple.com/us/song/still-waiting/1440665404
[641]: https://music.apple.com/us/song/b-y-o-b/187472354
[642]: https://music.apple.com/us/song/chop-suey/273714640
[643]: https://music.apple.com/us/song/spiders/1810760513
[644]: https://music.apple.com/us/song/dreams-remastered-2026/6765559422
[645]: https://music.apple.com/us/song/linger-remastered-2026/6765559429
[646]: https://music.apple.com/us/song/come-out-and-play-keep-em-separated/1485034810
[647]: https://music.apple.com/us/song/pretty-fly-for-a-white-guy/1440881518
[648]: https://music.apple.com/us/song/i-can-t-get-no-satisfaction/1706514941
[649]: https://music.apple.com/us/song/gimme-shelter-remastered-2019/1500642840
[650]: https://music.apple.com/us/song/1979-remastered-2012/721224621
[651]: https://music.apple.com/us/song/today/721207666
[652]: https://music.apple.com/us/song/choke/1565468402
[653]: https://music.apple.com/us/song/money/1614722179
[654]: https://music.apple.com/us/song/fell-in-love-with-a-girl/1533513365
[655]: https://music.apple.com/us/song/icky-thump/1533513465
[656]: https://music.apple.com/us/song/closer-to-the-edge/1440839706
[657]: https://music.apple.com/us/song/from-yesterday/1440839345
[658]: https://music.apple.com/us/song/i-hate-everything-about-you/269975544
[659]: https://music.apple.com/us/song/riot/266222076
[660]: https://music.apple.com/us/song/american-girl/1465207805
[661]: https://music.apple.com/us/song/mary-jane-s-last-dance/1465207045
[662]: https://music.apple.com/us/song/open-up-your-eyes/1440911509
[663]: https://music.apple.com/us/song/you-wanted-more/1443797582
[664]: https://music.apple.com/us/song/forty-six-2/1474185342
[665]: https://music.apple.com/us/song/schism/1474185654
[666]: https://music.apple.com/us/song/heathens/1125281487
[667]: https://music.apple.com/us/song/ride/974485805
