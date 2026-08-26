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
| 47 | [Savior][47] | Rise Against | Appeal to Reason | 2008 |  |
| 48 | [Click Click Boom][48] | Saliva | Every Six Seconds | 2001 |  |
| 49 | [Spoonman][49] | Soundgarden | Superunknown (20th Anniversary) | 1994 |  |
| 50 | [Creep][50] | Stone Temple Pilots | Thank You | 1992 |  |
| 51 | [Gone Away][51] | The Offspring | Ixnay on the Hombre | 1997 |  |
| 52 | [Paint It, Black][52] | The Rolling Stones | Aftermath (US Version) | 1966 |  |
| 53 | [The Kill][53] | Thirty Seconds to Mars | A Beautiful Lie (20 Year Anniversary) | 2005 |  |
| 54 | [Paranoid][54] | Black Sabbath | Paranoid | 1970 |  |
| 55 | [Shine][55] | Collective Soul | Hints, Allegations & Things Left Unsaid | 1993 |  |
| 56 | [The World I Know][56] | Collective Soul | Home | 2006 |  |
| 57 | [One Last Breath][57] | Creed | Weathered | 2001 |  |
| 58 | [Stupify][58] | Disturbed | The Sickness | 2000 |  |
| 59 | [Centuries][59] | Fall Out Boy | American Beauty / American Psycho | 2014 |  |
| 60 | [Paralyzer][60] | Finger Eleven | Them Vs. You Vs. Me (Deluxe Edition) | 2007 |  |
| 61 | [All My Life][61] | Foo Fighters | One By One (Deluxe Edition) | 2002 |  |
| 62 | [I Stand Alone][62] | Godsmack | Faceless | 2002 |  |
| 63 | [Good Riddance (Time of Your Life)][63] | Green Day | The Green Day Collection | 1997 |  |
| 64 | [Pardon Me][64] | Incubus | Make Yourself | 1999 |  |
| 65 | [Black Dog][65] | Led Zeppelin | Led Zeppelin IV (Remastered) | 1971 |  |
| 66 | [Break Stuff][66] | Limp Bizkit | Significant Other | 1999 |  |
| 67 | [My Way][67] | Limp Bizkit | Chocolate Starfish And The Hot Dog Flavored Water | 2000 |  |
| 68 | [Sex and Candy][68] | Marcy Playground | Sex and Candy - Single | 1997 |  |
| 69 | [Fade to Black][69] | Metallica | Ride the Lightning (Remastered) (2016 Remastered Version) | 1984 |  |
| 70 | [Closer][70] | Nine Inch Nails | The Downward Spiral | 1994 |  |
| 71 | [Smells Like Teen Spirit][71] | Nirvana | Nevermind | 1991 |  |
| 72 | [Every Rose Has Its Thorn][72] | Poison | Open Up and Say... Ahh! (20th Anniversary Edition) | 1988 |  |
| 73 | [Footsteps][73] | Pop Evil | Up | 2015 |  |
| 74 | [Dragula][74] | Rob Zombie | Hellbilly Deluxe | 1998 |  |
| 75 | [Save Me][75] | Shinedown | Us and Them | 2005 |  |
| 76 | [Black Hole Sun][76] | Soundgarden | Superunknown (Deluxe Edition) | 1994 |  |
| 77 | [Outside][77] | Staind | Break the Cycle | 2001 |  |
| 78 | [Toxicity][78] | System Of A Down | Toxicity | 2001 |  |
| 79 | [Stressed Out][79] | twenty one pilots | Blurryface | 2015 |  |
| 80 | [Highway to Hell][80] | AC/DC | Highway to Hell | 1979 |  |
| 81 | [Dream On][81] | Aerosmith | Aerosmith | 1973 |  |
| 82 | [Sweet Emotion][82] | Aerosmith | Toys In The Attic | 1975 |  |
| 83 | [I Stay Away][83] | Alice In Chains | Jar of Flies - EP | 1994 |  |
| 84 | [Man in the Box][84] | Alice In Chains | Facelift | 1990 |  |
| 85 | [Smooth Criminal][85] | Alien Ant Farm | Smooth Criminal - Single | 2001 |  |
| 86 | [Like a Stone][86] | Audioslave | Audioslave | 2002 |  |
| 87 | [War Pigs][87] | Black Sabbath | The Ultimate Collection | 1970 |  |
| 88 | [Wanted Dead or Alive][88] | Bon Jovi | Slippery When Wet | 1986 |  |
| 89 | [So Cold][89] | Breaking Benjamin | We Are Not Alone | 2004 |  |
| 90 | [Crazy Bitch][90] | Buckcherry | 15 | 2005 |  |
| 91 | [Mother][91] | Danzig | Danzig | 1988 |  |
| 92 | [Land of Confusion][92] | Disturbed | Ten Thousand Fists | 2005 |  |
| 93 | [Bodies][93] | Drowning Pool | Sinner | 2001 |  |
| 94 | [Sugar, We're Goin Down][94] | Fall Out Boy | Believers Never Die - Greatest Hits (Bonus Track Version) | 2005 |  |
| 95 | [Everlong][95] | Foo Fighters | The Colour And The Shape | 1997 |  |
| 96 | [Hemorrhage (In My Hands)][96] | Fuel | Something Like Human | 2000 |  |
| 97 | [Bulletproof][97] | Godsmack | When Legends Rise | 2018 |  |
| 98 | [Boulevard of Broken Dreams][98] | Green Day | American Idiot | 2004 |  |
| 99 | [Brain Stew][99] | Green Day | The Green Day Collection | 1995 |  |
| 100 | [Civil War][100] | Guns N' Roses | Greatest Hits | 1991 |  |
| 101 | [Knockin' On Heaven's Door][101] | Guns N' Roses | Use Your Illusion II | 1991 |  |
| 102 | [Paradise City][102] | Guns N' Roses | Appetite For Destruction | 1987 |  |
| 103 | [Jump Around][103] | House of Pain | House of Pain (Fine Malt Lyrics) | 1992 |  |
| 104 | [Wish You Were Here][104] | Incubus | Morning View | 2001 |  |
| 105 | [Coming Undone][105] | Korn | See You On the Other Side | 2005 |  |
| 106 | [Freak On a Leash][106] | Korn | Follow The Leader | 1998 |  |
| 107 | [Immigrant Song][107] | Led Zeppelin | Led Zeppelin III (Remastered) | 1970 |  |
| 108 | [Fly Away][108] | Lenny Kravitz | Greatest Hits | 1998 |  |
| 109 | [Somewhere I Belong][109] | LINKIN PARK | Meteora (Deluxe Edition) | 2003 |  |
| 110 | [Sad But True][110] | Metallica | Metallica (Deluxe Box Set) | 1991 |  |
| 111 | [Wherever I May Roam][111] | Metallica | Metallica (Deluxe Box Set) | 1991 |  |
| 112 | [All Apologies][112] | Nirvana | In Utero (20th Anniversary Edition) | 1993 |  |
| 113 | [Heart-Shaped Box][113] | Nirvana | In Utero (20th Anniversary Edition) | 1993 |  |
| 114 | [In Bloom][114] | Nirvana | Nevermind | 1991 |  |
| 115 | [Rape Me][115] | Nirvana | In Utero (20th Anniversary Edition) | 1993 |  |
| 116 | [Mama, I'm Coming Home][116] | Ozzy Osbourne | No More Tears (Bonus Track Version) | 1991 |  |
| 117 | [Alive][117] | P.O.D. | Greatest Hits: The Atlantic Years | 2001 |  |
| 118 | [Walk][118] | Pantera | Vulgar Display of Power | 1992 |  |
| 119 | [Last Resort][119] | Papa Roach | Infest | 2000 |  |
| 120 | [Black][120] | Pearl Jam | Ten | 1991 |  |
| 121 | [Yellow Ledbetter][121] | Pearl Jam | Jeremy - Single | 1992 |  |
| 122 | [Bohemian Rhapsody][122] | Queen | Greatest Hits I, II & III: The Platinum Collection | 1975 |  |
| 123 | [Killing In The Name][123] | Rage Against the Machine | Rage Against The Machine - XX (20th Anniversary Special Edition) | 1992 |  |
| 124 | [Black Betty][124] | Ram Jam | The Very Best of Ram Jam | 1977 |  |
| 125 | [Otherside][125] | Red Hot Chili Peppers | Californication (Deluxe Edition) | 1999 |  |
| 126 | [Soul to Squeeze][126] | Red Hot Chili Peppers | Greatest Hits | 1993 |  |
| 127 | [Broken][127] | Seether | Disclaimer II | 2002 |  |
| 128 | [Fine Again][128] | Seether | Disclaimer II | 2002 |  |
| 129 | [Young Again][129] | Shinedown | EI8HT | 2025 |  |
| 130 | [Fade][130] | Staind | Break the Cycle | 2001 |  |
| 131 | [Dead & Bloated][131] | Stone Temple Pilots | Stricken - Metal Hits | 1992 |  |
| 132 | [Plush][132] | Stone Temple Pilots | Thank You | 1992 |  |
| 133 | [Wicked Garden][133] | Stone Temple Pilots | Thank You | 1992 |  |
| 134 | [Zombie][134] | The Cranberries | Stars: The Best of the Cranberries 1992-2002 | 1994 |  |
| 135 | [Self Esteem][135] | The Offspring | Smash | 1994 |  |
| 136 | [You're Gonna Go Far, Kid][136] | The Offspring | Rise and Fall, Rage and Grace | 2008 |  |
| 137 | [Bullet with Butterfly Wings][137] | The Smashing Pumpkins | Rotten Apples: Greatest Hits | 1995 |  |
| 138 | [Seven Nation Army][138] | The White Stripes | Elephant | 2003 |  |
| 139 | [Animal I Have Become][139] | Three Days Grace | One-X (Deluxe Edition) | 2006 |  |
| 140 | [Just Like You][140] | Three Days Grace | Three Days Grace (Expanded Edition) | 2003 |  |
| 141 | [Never Too Late][141] | Three Days Grace | One-X (Deluxe Edition) | 2006 |  |
| 142 | [I Will Not Bow][142] | Breaking Benjamin | Dear Agony | 2009 |  |
| 143 | [Pour Some Sugar On Me][143] | Def Leppard | The Story So Far: The Best of Def Leppard (Deluxe Edition) | 1987 |  |
| 144 | [Stricken][144] | Disturbed | Ten Thousand Fists | 2005 |  |
| 145 | [Who Will You Follow][145] | Evanescence | Sanctuary | 2026 |  |
| 146 | [ZOMBIFIED][146] | Falling In Reverse | Voices in My Head - Single | 2022 |  |
| 147 | [Re-Align][147] | Godsmack | Faceless | 2003 |  |
| 148 | [Bawitdaba][148] | Kid Rock | Devil Without a Cause | 1998 |  |
| 149 | [Cult of Personality][149] | Living Colour | Cult of Personality EP | 1988 |  |
| 150 | [Come As You Are][150] | Nirvana | Nevermind | 1991 |  |
| 151 | [Crazy Train][151] | Ozzy Osbourne | Blizzard of Ozz (40th Anniversary Expanded Edition) | 1980 |  |
| 152 | [Mr. Crowley][152] | Ozzy Osbourne | Memoirs of a Madman | 1980 |  |
| 153 | [Over the Mountain][153] | Ozzy Osbourne | Diary of a Madman (Remastered Original Recording) | 1981 |  |
| 154 | [Under the Graveyard][154] | Ozzy Osbourne | Under the Graveyard - Single | 2019 |  |
| 155 | [Control][155] | Puddle of Mudd | Come Clean | 2001 |  |
| 156 | [We Will Rock You][156] | Queen | Greatest Hits I, II & III: The Platinum Collection | 1977 |  |
| 157 | [Cum On Feel the Noize][157] | Quiet Riot | Greatest Hits | 1983 |  |
| 158 | [Under the Bridge][158] | Red Hot Chili Peppers | Blood Sugar Sex Magik (Deluxe Edition) | 1991 |  |
| 159 | [Fake It][159] | Seether | Finding Beauty In Negative Spaces (Bonus Track Version) | 2007 |  |
| 160 | [Simple Man][160] | Shinedown | Simple Man - Single | 2003 |  |
| 161 | [Fat Lip][161] | Sum 41 | All Killer, No Filler | 2001 |  |
| 162 | [Aerials][162] | System Of A Down | Toxicity | 2001 |  |
| 163 | [The Kids Aren't Alright][163] | The Offspring | SUPERCHARGED: WORLDWIDE IN '25 | 1998 |  |
| 164 | [Sober][164] | TOOL | Undertow | 1993 |  |
| 165 | [Afterlife (From the Netflix Series "Devil May Cry")][165] | Evanescence | Afterlife (From the Netflix Series "Devil May Cry") - Single | 2025 | WEBN play history 2026; 24 sampled plays |
| 166 | [Darkness Settles In][166] | Five Finger Death Punch | F8 | 2020 | WEBN play history 2021–2026; 19 sampled plays |
| 167 | [Just Pretend][167] | Bad Omens | THE DEATH OF PEACE OF MIND | 2022 | WEBN play history 2026; 15 sampled plays |
| 168 | [My Own Worst Enemy][168] | Lit | A Place In The Sun | 1999 | WEBN play history 2020–2026; 15 sampled plays |
| 169 | [Rx (Medicate)][169] | Theory of a Deadman | Wake Up Call | 2017 | WEBN play history 2020–2026; 15 sampled plays |
| 170 | [She Talks To Angels][170] | The Black Crowes | Shake Your Money Maker | 1990 | WEBN play history 2020–2026; 10 sampled plays |
| 171 | [My Hero][171] | Foo Fighters | Greatest Hits | 1997 | WEBN play history 2022–2026; 10 sampled plays |
| 172 | [Something In The Way (Remastered)][172] | Nirvana | Nevermind (30th Anniversary Super Deluxe) | 1991 | WEBN play history 2022–2026; 10 sampled plays |
| 173 | [The Man Who Sold the World (Live Acoustic)][173] | Nirvana | MTV Unplugged In New York (Live Acoustic) | 1994 | WEBN play history 2020–2026; 10 sampled plays; no Nirvana studio version exists |
| 174 | [Big Empty (2019 Remaster)][174] | Stone Temple Pilots | Purple (2019 Remaster) | 1994 | WEBN play history 2020–2026; 10 sampled plays |
| 175 | [Kryptonite][175] | 3 Doors Down | The Better Life (Deluxe Edition) | 1999 | WEBN play history 2020–2026; 9 sampled plays |
| 176 | [Angels Fall][176] | Breaking Benjamin | Dark Before Dawn | 2015 | WEBN play history 2021–2026; 9 sampled plays |
| 177 | [Ain't No Rest for the Wicked][177] | Cage the Elephant | Cage the Elephant (Expanded Edition) | 2008 | WEBN play history 2023–2026; 9 sampled plays |
| 178 | [The Unforgiven][178] | Metallica | Metallica (Deluxe Box Set) | 1991 | WEBN play history 2022–2026; 9 sampled plays |
| 179 | [Kill The Noise][179] | Papa Roach | Kill The Noise - Single | 2022 | WEBN play history 2021–2026; 9 sampled plays |
| 180 | [Last Kiss][180] | Pearl Jam | rearviewmirror (greatest hits 1991-2003) | 1998 | WEBN play history 2021–2026; 9 sampled plays |
| 181 | [For You][181] | Staind | Break the Cycle | 2001 | WEBN play history 2020–2026; 9 sampled plays |
| 182 | [Hunger Strike][182] | Temple of the Dog | Temple of the Dog | 1991 | WEBN play history 2021–2026; 9 sampled plays |
| 183 | [Say It Ain't So][183] | Weezer | Weezer (Deluxe Edition) | 1994 | WEBN play history 2020–2026; 9 sampled plays |
| 184 | [When I'm Gone (2023 Remaster)][184] | 3 Doors Down | Away From The Sun (Deluxe) | 2002 | WEBN play history 2020–2026; 8 sampled plays |
| 185 | [Sweet Dreams (Are Made of This)][185] | Marilyn Manson | Smells Like Children | 1995 | WEBN play history 2020–2026; 8 sampled plays |
| 186 | [Snow (Hey Oh)][186] | Red Hot Chili Peppers | Stadium Arcadium | 2006 | WEBN play history 2025–2026; 8 sampled plays |
| 187 | [MONSTERS][187] | Shinedown | ATTENTION ATTENTION | 2018 | WEBN play history 2020–2026; 8 sampled plays |
| 188 | [I Won't Back Down][188] | Tom Petty | Greatest Hits | 1989 | WEBN play history 2020–2026; 8 sampled plays |
| 189 | [Here I Go Again (1987 Version / 2017 Remaster)][189] | Whitesnake | Whitesnake (30th Anniversary Super Deluxe Edition) | 1987 | WEBN play history 2025–2026; 8 sampled plays |
| 190 | [Starless][190] | A Perfect Circle | Starless - Single | 2026 | WEBN play history 2026; 7 sampled plays |
| 191 | [You Shook Me All Night Long][191] | AC/DC | Back In Black | 1980 | WEBN play history 2021–2026; 7 sampled plays |
| 192 | [Sail][192] | AWOLNATION | Megalithic Symphony (10th Anniversary Deluxe Edition) | 2010 | WEBN play history 2025–2026; 7 sampled plays |
| 193 | [Comfortably Numb][193] | Pink Floyd | A Foot In the Door: The Best of Pink Floyd | 1980 | WEBN play history 2020–2026; 7 sampled plays |
| 194 | [When Legends Rise][194] | Godsmack | When Legends Rise | 2018 | WEBN play history 2020–2023; 7 sampled plays |
| 195 | [Keep Away][195] | Godsmack | Godsmack | 1997 | WEBN play history 2021–2026; 6 sampled plays |
| 196 | [Feel Good Inc][196] | Gorillaz | Feel Good Inc - EP | 2005 | WEBN play history 2025–2026; 6 sampled plays |
| 197 | [Hurt][197] | Johnny Cash | Unearthed (Box Set) | 2002 | WEBN play history 2023–2026; 6 sampled plays |
| 198 | [What I've Done][198] | LINKIN PARK | Minutes to Midnight (Deluxe Edition) | 2007 | WEBN play history 2022–2026; 6 sampled plays |
| 199 | [Lightning Crashes][199] | LIVE | Throwing Copper | 1994 | WEBN play history 2021–2026; 6 sampled plays |
| 200 | [Master of Puppets][200] | Metallica | Master of Puppets (Remastered) | 1986 | WEBN play history 2021–2026; 6 sampled plays |
| 201 | [Better Man][201] | Pearl Jam | rearviewmirror (greatest hits 1991-2003) | 1994 | WEBN play history 2020–2026; 6 sampled plays |
| 202 | [Headstrong][202] | Trapt | Trapt | 2002 | WEBN play history 2020–2026; 6 sampled plays |
| 203 | [More Human Than Human][203] | White Zombie | Astro Creep: 2000 Songs of Love, Destruction and Other Synthetic Delusions of the Electric Head | 1995 | WEBN play history 2025–2026; 6 sampled plays |
| 204 | [Screaming Suicide][204] | Metallica | 72 Seasons | 2023 | WEBN play history 2024–2025; 6 sampled plays |
| 205 | [King Nothing (Remastered)][205] | Metallica | Load (Remastered Deluxe Box Set) | 1996 | WEBN play history 2020–2025; 6 sampled plays |
| 206 | [Can't Stop][206] | Red Hot Chili Peppers | By the Way (Deluxe Edition) | 2002 | WEBN play history 2020–2025; 6 sampled plays |
| 207 | [Patience][207] | Chris Cornell | Patience - Single | 2020 | WEBN play history 2020–2022; 6 sampled plays |
| 208 | [Hail to the King][208] | Avenged Sevenfold | Hail to the King | 2013 | WEBN play history 2022–2026; 5 sampled plays |
| 209 | [Hard to Handle][209] | The Black Crowes | Shake Your Money Maker (30th Anniversary Deluxe Edition) | 1990 | WEBN play history 2020–2026; 5 sampled plays |
| 210 | [Cold][210] | Crossfade | Cold - Single | 2003 | WEBN play history 2025–2026; 5 sampled plays |
| 211 | [Going Under][211] | Evanescence | Fallen | 2003 | WEBN play history 2022–2026; 5 sampled plays |
| 212 | [Straight Out Of Line (2024 Remaster)][212] | Godsmack | Faceless (2024 Remaster) | 2003 | WEBN play history 2021–2026; 5 sampled plays |
| 213 | [Longview][213] | Green Day | International Superhits! | 1994 | WEBN play history 2022–2026; 5 sampled plays |
| 214 | [Lost][214] | LINKIN PARK | Lost Demos | 2023 | WEBN play history 2023–2026; 5 sampled plays |
| 215 | [One Step Closer][215] | LINKIN PARK | Hybrid Theory | 2000 | WEBN play history 2020–2026; 5 sampled plays |
| 216 | [One][216] | Metallica | ...And Justice for All (Remastered) | 1988 | WEBN play history 2025–2026; 5 sampled plays |
| 217 | [Turn the Page][217] | Metallica | Garage Inc. | 1998 | WEBN play history 2025–2026; 5 sampled plays |
| 218 | [I Don't Know][218] | Ozzy Osbourne | Blizzard of Ozz (40th Anniversary Expanded Edition) | 1980 | WEBN play history 2026; 5 sampled plays |
| 219 | [See U in Hell (From the Netflix Series "Devil May Cry")][219] | Papa Roach & Hanumankind | See U in Hell (From the Netflix Series "Devil May Cry") - Single | 2026 | WEBN play history 2026; 5 sampled plays |
| 220 | [Daughter (Remastered)][220] | Pearl Jam | Vs. | 1993 | WEBN play history 2026; 5 sampled plays |
| 221 | [Closing Time][221] | Semisonic | 20 #1's: One Hit Wonders | 1998 | WEBN play history 2022–2026; 5 sampled plays |
| 222 | [Duality][222] | Slipknot | Vol. 3 The Subliminal Verses | 2004 | WEBN play history 2021–2026; 5 sampled plays |
| 223 | [Meant to Live][223] | Switchfoot | The Beautiful Letdown (Deluxe Version) | 2003 | WEBN play history 2026; 5 sampled plays |
| 224 | [Kill Me Fast][224] | Three Days Grace | Alienation | 2025 | archived WEBN top songs 2025–2026; 5 snapshots |
| 225 | [Killing Fields][225] | Shinedown | Killing Fields - Single | 2025 | WEBN play history 2025; 5 sampled plays |
| 226 | [BRAINDEAD (feat. Toby Morse)][226] | Papa Roach | BRAINDEAD (feat. Toby Morse) - Single | 2025 | WEBN play history 2025; 5 sampled plays |
| 227 | [Song 2 (2012 Remaster)][227] | Blur | Blur | 1997 | WEBN play history 2020–2024; 5 sampled plays |
| 228 | [Nightmare][228] | Avenged Sevenfold | Nightmare | 2010 | WEBN play history 2021–2026; 4 sampled plays |
| 229 | [Send the Pain Below][229] | Chevelle | Wonder What's Next (Expanded Edition) | 2002 | WEBN play history 2020–2026; 4 sampled plays |
| 230 | [Prayer][230] | Disturbed | Believe | 2002 | WEBN play history 2021–2026; 4 sampled plays |
| 231 | [Lose Yourself][231] | Eminem | 8 Mile (Music From And Inspired By The Motion Picture) | 2002 | WEBN play history 2025–2026; 4 sampled plays |
| 232 | [Believer][232] | Imagine Dragons | Evolve | 2017 | WEBN play history 2023–2026; 4 sampled plays |
| 233 | [Faint][233] | LINKIN PARK | Meteora | 2003 | WEBN play history 2020–2026; 4 sampled plays |
| 234 | [Another Brick In the Wall, Pt. 2][234] | Pink Floyd | The Wall | 1979 | WEBN play history 2023–2026; 4 sampled plays |
| 235 | [You're Going Down][235] | SICK PUPPIES | Tri-Polar | 2009 | WEBN play history 2024–2026; 4 sampled plays |
| 236 | [The Kill (Bury Me)][236] | Thirty Seconds to Mars | A Beautiful Lie | 2005 | WEBN play history 2025–2026; 4 sampled plays |
| 237 | [We're Not Gonna Take It][237] | Twisted Sister | Stay Hungry | 1984 | WEBN play history 2020–2026; 4 sampled plays |
| 238 | [MORE THAN HATE][238] | Bilmuri | MORE THAN HATE - Single | 2025 | WEBN play history 2025; 4 sampled plays |
| 239 | [Kashmir][239] | Led Zeppelin | Physical Graffiti (Deluxe Edition) | 1975 | WEBN play history 2020–2023; 4 sampled plays |
| 240 | [Holiday][240] | Green Day | American Idiot | 2004 | WEBN play history 2022–2023; 4 sampled plays |
| 241 | [Dirty Deeds Done Dirt Cheap][241] | AC/DC | Dirty Deeds Done Dirt Cheap | 1976 | WEBN play history 2020–2022; 4 sampled plays |
| 242 | [Eye of the Storm][242] | Pop Evil | Eye of the Storm - Single | 2022 | archived WEBN top songs 2022; 4 snapshots |
| 243 | [Black Summer][243] | Red Hot Chili Peppers | Unlimited Love | 2022 | archived WEBN top songs 2022; 4 snapshots |
| 244 | [Give It Away][244] | Red Hot Chili Peppers | Blood Sugar Sex Magik | 1991 | WEBN play history 2020–2022; 4 sampled plays |
| 245 | [Help][245] | Papa Roach | Crooked Teeth (Deluxe) | 2017 | WEBN play history 2020–2021; 4 sampled plays |
| 246 | [Here Without You][246] | 3 Doors Down | Away from the Sun | 2002 | WEBN play history 2026; 3 sampled plays |
| 247 | [War Pigs / Luke's Wall][247] | Black Sabbath | Paranoid | 1970 | WEBN play history 2024–2026; 3 sampled plays |
| 248 | [Voices][248] | Disturbed | The Sickness | 2000 | WEBN play history 2025–2026; 3 sampled plays |
| 249 | [BURN IT DOWN][249] | LINKIN PARK | LIVING THINGS | 2012 | WEBN play history 2022–2026; 3 sampled plays |
| 250 | [New Divide][250] | LINKIN PARK | Papercuts (Singles Collection 2000-2023) | 2009 | WEBN play history 2025–2026; 3 sampled plays |
| 251 | [The Beautiful People][251] | Marilyn Manson | Antichrist Superstar | 1996 | WEBN play history 2025–2026; 3 sampled plays |
| 252 | [Until It Sleeps (Remastered)][252] | Metallica | Load (Remastered) | 1996 | WEBN play history 2021–2026; 3 sampled plays |
| 253 | [Not Falling][253] | Mudvayne | The End of All Things to Come | 2001 | WEBN play history 2025–2026; 3 sampled plays |
| 254 | [Hurt][254] | Nine Inch Nails | The Downward Spiral | 1994 | WEBN play history 2026; 3 sampled plays |
| 255 | [Brain Damage][255] | Pink Floyd | The Dark Side of the Moon (50th Anniversary) [Remastered] | 1973 | WEBN play history 2026; 3 sampled plays |
| 256 | [A Symptom Of Being Human][256] | Shinedown | Planet Zero | 2022 | WEBN play history 2025–2026; 3 sampled plays |
| 257 | [For I Am Death][257] | The Pretty Reckless | For I Am Death - Single | 2025 | WEBN play history 2025; 3 sampled plays |
| 258 | [ONE MORE TIME][258] | blink-182 | ONE MORE TIME... | 2023 | WEBN play history 2024–2025; 3 sampled plays |
| 259 | [Stuck in My Head][259] | Sleep Theory | Stuck in My Head - Single | 2025 | archived WEBN top songs 2025; 3 snapshots |
| 260 | [T.N.T.][260] | AC/DC | High Voltage | 1975 | WEBN play history 2021–2024; 3 sampled plays |
| 261 | [Wake Me Up When September Ends][261] | Green Day | American Idiot | 2004 | WEBN play history 2022–2024; 3 sampled plays |
| 262 | [Are You Ready][262] | Disturbed | Evolution (Deluxe Edition) | 2018 | WEBN play history 2020–2023; 3 sampled plays |
| 263 | [Nobody Wants to Die][263] | Rival Sons | DARKFIGHTER | 2022 | archived WEBN top songs 2023; 3 snapshots |
| 264 | [How Did You Love][264] | Shinedown | Threat to Survival | 2015 | WEBN play history 2020–2022; 3 sampled plays |
| 265 | [By the Way][265] | Red Hot Chili Peppers | By the Way (Deluxe Edition) | 2002 | WEBN play history 2021–2022; 3 sampled plays |
| 266 | [Like A Villain][266] | Bad Omens | THE DEATH OF PEACE OF MIND | 2022 | archived WEBN top songs 2022; 3 snapshots |
| 267 | [Dead Inside][267] | David Draiman, Disturbed & Nita Strauss | Dead Inside - Single | 2021 | WEBN play history 2022; 3 sampled plays |
| 268 | [Rest In Peace][268] | Dorothy | Rest In Peace - Single | 2022 | archived WEBN top songs 2022; 3 snapshots |
| 269 | [For Those About to Rock (We Salute You)][269] | AC/DC | For Those About to Rock (We Salute You) | 1981 | WEBN play history 2021–2022; 3 sampled plays |
| 270 | [Dead Man Walking][270] | Jelly Roll | Ballads of the Broken | 2021 | archived WEBN top songs 2022; 3 snapshots |
| 271 | [Livin' On The Edge][271] | Aerosmith | Get A Grip | 1993 | WEBN play history 2021–2022; 3 sampled plays |
| 272 | [Lifeline][272] | Bad Wolves | Dear Monsters | 2021 | archived WEBN top songs 2021; 3 snapshots |
| 273 | [Monkey Wrench][273] | Foo Fighters | Greatest Hits | 1997 | WEBN play history 2020–2021; 3 sampled plays |
| 274 | [Dazed and Confused][274] | Led Zeppelin | Led Zeppelin (Remastered) | 1969 | WEBN play history 2020–2021; 3 sampled plays |
| 275 | [Shot in the Dark][275] | AC/DC | POWER UP | 2020 | WEBN play history 2020–2021; 3 sampled plays |
| 276 | [Making A Fire][276] | Foo Fighters | Medicine At Midnight | 2021 | archived WEBN top songs 2021; 3 snapshots |
| 277 | [Flagpole Sitta][277] | Harvey Danger | Where Have All the Merrymakers Gone? | 1998 | WEBN play history 2020–2021; 3 sampled plays |
| 278 | [Rock You Like a Hurricane][278] | Scorpions | Deadly Sting: The Mercury Years | 1984 | WEBN play history 2020–2021; 3 sampled plays |
| 279 | [Shame Shame][279] | Foo Fighters | Medicine At Midnight | 2020 | archived WEBN top songs 2020–2021; 3 snapshots |
| 280 | [Distance][280] | Mammoth | Distance - Single | 2020 | archived WEBN top songs 2020–2021; 3 snapshots |
| 281 | [Hells Bells][281] | AC/DC | Back In Black | 1980 | WEBN play history 2020–2021; 3 sampled plays |
| 282 | [The Vengeful One][282] | Disturbed | Immortalized (Deluxe Edition) | 2015 | WEBN play history 2020; 3 sampled plays |
| 283 | [A Little Bit Off][283] | Five Finger Death Punch | F8 | 2020 | WEBN play history 2020; 3 sampled plays |
| 284 | [All Within My Hands][284] | Metallica | St. Anger | 2003 | WEBN play history 2020; 3 sampled plays |
| 285 | [Far Behind][285] | Candlebox | Candlebox | 1993 | WEBN play history 2026; 2 sampled plays |
| 286 | [Insane In the Brain][286] | Cypress Hill | Black Sunday | 1993 | WEBN play history 2025–2026; 2 sampled plays |
| 287 | [Bleed It Out][287] | LINKIN PARK | Minutes to Midnight (Deluxe Edition) | 2007 | WEBN play history 2021–2026; 2 sampled plays |
| 288 | [Crawling][288] | LINKIN PARK | Hybrid Theory | 2000 | WEBN play history 2026; 2 sampled plays |
| 289 | [Lying from You][289] | LINKIN PARK | Meteora (Deluxe Edition) | 2003 | WEBN play history 2026; 2 sampled plays |
| 290 | [Hardwired][290] | Metallica | Hardwired…To Self-Destruct (Deluxe Edition) | 2016 | WEBN play history 2022–2026; 2 sampled plays |
| 291 | [Kickstart My Heart][291] | Mötley Crüe | The Dirt Soundtrack | 1989 | WEBN play history 2021–2026; 2 sampled plays |
| 292 | [Gotta Get Away][292] | The Offspring | Smash (Remastered) | 1994 | WEBN play history 2020–2026; 2 sampled plays |
| 293 | [Flying High Again][293] | Ozzy Osbourne | Diary of a Madman (40th Anniversary Expanded Edition) | 1981 | WEBN play history 2026; 2 sampled plays |
| 294 | [45][294] | Shinedown | Leave a Whisper (Deluxe Edition) | 2003 | WEBN play history 2026; 2 sampled plays |
| 295 | [Jumper][295] | Third Eye Blind | Third Eye Blind | 1997 | WEBN play history 2026; 2 sampled plays |
| 296 | [Everything Ends][296] | Architects | The Sky, the Earth & All Between | 2025 | archived WEBN top songs 2026; 2 snapshots |
| 297 | [Crawl Back To My Coffin][297] | Dayseeker | Creature In The Black Night | 2025 | archived WEBN top songs 2026; 2 snapshots |
| 298 | [MAGNETIC][298] | Wage War | MAGNETIC - Single | 2024 | archived WEBN top songs 2026; 2 snapshots |
| 299 | [Breaking the Habit][299] | LINKIN PARK | Meteora | 2003 | WEBN play history 2021–2026; 2 sampled plays |
| 300 | [Specter][300] | Bad Omens | Specter - Single | 2025 | WEBN play history 2025; 2 sampled plays |
| 301 | [Bored][301] | Return to Dust | Speak Like the Dead - EP | 2025 | WEBN play history 2025; 2 sampled plays |
| 302 | [I Refuse (feat. Maria Brink) (2025 VERSION)][302] | Five Finger Death Punch | BEST OF (Volume 1) | 2025 | archived WEBN top songs 2025; 2 snapshots |
| 303 | [FREEFALL][303] | NOTHING MORE | CARNAL | 2024 | archived WEBN top songs 2025; 2 snapshots |
| 304 | [Apologies][304] | Three Days Grace | Alienation | 2025 | archived WEBN top songs 2025; 2 snapshots |
| 305 | [Water Song / Janie's Got a Gun][305] | Aerosmith | Pump | 1989 | WEBN play history 2025; 2 sampled plays |
| 306 | [Mayday][306] | Three Days Grace | Alienation | 2024 | archived WEBN top songs 2025; 2 snapshots |
| 307 | [I Am Machine][307] | Three Days Grace | Human | 2014 | WEBN play history 2022–2024; 2 sampled plays |
| 308 | [November Rain][308] | Guns N' Roses | Use Your Illusion I | 1991 | WEBN play history 2023–2024; 2 sampled plays |
| 309 | [Too Far Gone?][309] | Metallica | 72 Seasons | 2023 | archived WEBN top songs 2023; 2 snapshots |
| 310 | [I Write Sins Not Tragedies][310] | Panic! At the Disco | A Fever You Can't Sweat Out | 2005 | WEBN play history 2021–2023; 2 sampled plays |
| 311 | [Beyond][311] | Corey Taylor | CMF2 | 2023 | archived WEBN top songs 2023; 2 snapshots |
| 312 | [Unstoppable][312] | Disturbed | Divisive | 2022 | archived WEBN top songs 2023; 2 snapshots |
| 313 | [Are You Gonna Be My Girl][313] | Jet | Get Born (Deluxe Edition) | 2003 | WEBN play history 2020–2023; 2 sampled plays |
| 314 | [Down Rodeo][314] | Rage Against the Machine | Evil Empire | 1996 | WEBN play history 2022–2023; 2 sampled plays |
| 315 | [Loser][315] | Beck | Loser - EP | 1993 | WEBN play history 2021–2023; 2 sampled plays |
| 316 | [You Don't Know How It Feels][316] | Tom Petty | Wildflowers | 1994 | WEBN play history 2023; 2 sampled plays |
| 317 | [Shoot to Thrill][317] | AC/DC | Back In Black | 1980 | WEBN play history 2020–2023; 2 sampled plays |
| 318 | [Daylight][318] | Shinedown | Planet Zero | 2022 | WEBN play history 2022; 2 sampled plays |
| 319 | [Wasteland][319] | 10 Years | The Autumn Effect (Bonus Track Version) | 2005 | WEBN play history 2022; 2 sampled plays |
| 320 | [Fight for Your Right][320] | Beastie Boys | Licensed to Ill | 1986 | WEBN play history 2020–2022; 2 sampled plays |
| 321 | [Face Down][321] | The Red Jumpsuit Apparatus | Don't You Fake It | 2006 | WEBN play history 2022; 2 sampled plays |
| 322 | [Loser][322] | 3 Doors Down | The Better Life (Deluxe Edition) | 2000 | WEBN play history 2022; 2 sampled plays |
| 323 | [Panama][323] | Van Halen | Best of Van Halen, Vol. 1 | 1984 | WEBN play history 2021–2022; 2 sampled plays |
| 324 | [No One Like You][324] | Scorpions | Blackout | 1982 | WEBN play history 2020–2021; 2 sampled plays |
| 325 | [Trippin' On a Hole In a Paper Heart][325] | Stone Temple Pilots | Tiny Music...Songs from the Vatican Gift Shop | 1996 | WEBN play history 2021; 2 sampled plays |
| 326 | [Realize][326] | AC/DC | POWER UP | 2020 | archived WEBN top songs 2021; 2 snapshots |
| 327 | [No Sleep Till Brooklyn][327] | Beastie Boys | Solid Gold Hits | 1986 | WEBN play history 2020–2021; 2 sampled plays |
| 328 | [Ramble On][328] | Led Zeppelin | Led Zeppelin II (Remastered) | 1969 | WEBN play history 2021; 2 sampled plays |
| 329 | [Breaking Down][329] | I Prevail | TRAUMA | 2019 | WEBN play history 2021; 2 sampled plays |
| 330 | [Remember When][330] | Bad Wolves | Disobey | 2018 | WEBN play history 2020–2021; 2 sampled plays |
| 331 | [All Along the Watchtower][331] | The Jimi Hendrix Experience | Electric Ladyland | 1968 | WEBN play history 2020; 2 sampled plays |
| 332 | [Dangerous][332] | Seether | Si Vis Pacem, Para Bellum | 2020 | WEBN play history 2020; 2 sampled plays |
| 333 | [Santa Monica (Re-recorded - Slowed + Reverb)][333] | Everclear | Santa Monica (Re-Recorded - Sped Up) - Single | 2023 | WEBN play history 2020; 2 sampled plays |
| 334 | [Learning to Fly][334] | Tom Petty & The Heartbreakers | Greatest Hits | 1991 | WEBN play history 2020; 2 sampled plays |
| 335 | [Superblood Wolfmoon][335] | Pearl Jam | Gigaton | 2020 | archived WEBN top songs 2020; 2 snapshots |
| 336 | [Sickness][336] | Grey Daze | Amends | 2020 | WEBN play history 2020; 2 sampled plays |
| 337 | [Love In an Elevator][337] | Aerosmith | Big Ones | 1989 | WEBN play history 2026; 1 sampled play |
| 338 | [Beacon][338] | Blessed Black | Seasons:, Vol. 3 - Single | 2026 | WEBN play history 2026; 1 sampled play |
| 339 | [Manufactured Extinct][339] | Cattle Decapitation | The Anthropocene Extinction | 2015 | WEBN play history 2026; 1 sampled play |
| 340 | [Perfect Strangers][340] | Deep Purple | Perfect Strangers | 1984 | WEBN play history 2026; 1 sampled play |
| 341 | [Just Got Lucky][341] | Dokken | Tooth and Nail | 1984 | WEBN play history 2026; 1 sampled play |
| 342 | [New Messiah][342] | Fear Factory | The Industrialist | 2012 | WEBN play history 2026; 1 sampled play |
| 343 | [Hunter’s Moon][343] | Ghost | IMPERA | 2021 | WEBN play history 2026; 1 sampled play |
| 344 | [It's So Easy][344] | Guns N' Roses | Appetite For Destruction | 1987 | WEBN play history 2026; 1 sampled play |
| 345 | [This Is Now][345] | Hatebreed | The Rise of Brutality | 2003 | WEBN play history 2026; 1 sampled play |
| 346 | [Radioactive][346] | Imagine Dragons | Night Visions (Deluxe Version) | 2012 | WEBN play history 2026; 1 sampled play |
| 347 | [Numb / Encore][347] | JAŸ-Z & LINKIN PARK | Collision Course - EP | 2004 | WEBN play history 2026; 1 sampled play |
| 348 | [Over the Hills and Far Away][348] | Led Zeppelin | Houses of the Holy (Remastered) | 1973 | WEBN play history 2026; 1 sampled play |
| 349 | [Runaway][349] | LINKIN PARK | Hybrid Theory (20th Anniversary Edition) | 2000 | WEBN play history 2026; 1 sampled play |
| 350 | [Master of Disguise][350] | Lizzy Borden | The Best of Lizzy Borden | 1994 | WEBN play history 2026; 1 sampled play |
| 351 | [Tuesday's Gone][351] | Lynyrd Skynyrd | Playlist Plus | 1973 | WEBN play history 2026; 1 sampled play |
| 352 | [All Nightmare Long][352] | Metallica | Death Magnetic | 2008 | WEBN play history 2026; 1 sampled play |
| 353 | [Crash Course In Brain Surgery][353] | Metallica | Garage Inc. | 1987 | WEBN play history 2026; 1 sampled play |
| 354 | [Creeping Death][354] | Metallica | Ride the Lightning (Remastered) [2016 Remastered Version] | 1984 | WEBN play history 2026; 1 sampled play |
| 355 | [Halo On Fire][355] | Metallica | Hardwired…To Self-Destruct (Deluxe Edition) | 2016 | WEBN play history 2026; 1 sampled play |
| 356 | [Helpless][356] | Metallica | Garage Inc. | 1987 | WEBN play history 2026; 1 sampled play |
| 357 | [The Thing That Should Not Be][357] | Metallica | Master of Puppets (Remastered) | 1986 | WEBN play history 2026; 1 sampled play |
| 358 | [Don't Tell Me You Love Me][358] | Night Ranger | Dawn Patrol | 1982 | WEBN play history 2026; 1 sampled play |
| 359 | [The Great Southern Trendkill][359] | Pantera | The Great Southern Trendkill (20th Anniversary Edition) | 1996 | WEBN play history 2026; 1 sampled play |
| 360 | [Under Pressure (feat. David Bowie)][360] | Queen | Bohemian Rhapsody (The Original Soundtrack) | 1981 | WEBN play history 2026; 1 sampled play |
| 361 | [Start Me Up][361] | The Rolling Stones | Tattoo You (Deluxe Edition) | 1981 | WEBN play history 2026; 1 sampled play |
| 362 | [I Remember You][362] | Skid Row | Skid Row | 1989 | WEBN play history 2026; 1 sampled play |
| 363 | [Extra Sexual Extraterrestrial (Live)][363] | Sons of the Abyss | Zorp and Zeptar Live at the Cosmodome | 2025 | WEBN play history 2026; 1 sampled play; no studio version found |
| 364 | [Love Song][364] | Tesla | The Great Radio Controversy | 1989 | WEBN play history 2026; 1 sampled play |
| 365 | [The Covenant][365] | Thrown to Wolves | The Covenant - Single | 2025 | WEBN play history 2026; 1 sampled play |
| 366 | [LOOK OUT FOR ME][366] | Turnstile | NEVER ENOUGH | 2025 | archived WEBN top songs 2026; 1 snapshot |
| 367 | [So Far So Fake][367] | Pierce the Veil | The Jaws of Life | 2023 | archived WEBN top songs 2026; 1 snapshot |
| 368 | [Demonic Depression][368] | Volbeat | God Of Angels Trust | 2025 | archived WEBN top songs 2026; 1 snapshot |
| 369 | [Pale Horse][369] | Chevelle | Bright as Blasphemy | 2025 | archived WEBN top songs 2026; 1 snapshot |
| 370 | [infinite source][370] | Deftones | private music | 2025 | archived WEBN top songs 2026; 1 snapshot |
| 371 | [Nothin'][371] | Guns N' Roses | Nothin' - Single | 2025 | archived WEBN top songs 2026; 1 snapshot |
| 372 | [The Spell][372] | Mammoth | The End | 2025 | archived WEBN top songs 2026; 1 snapshot |
| 373 | [Searchlight][373] | Shinedown | Searchlight - Single | 2025 | archived WEBN top songs 2026; 1 snapshot |
| 374 | [Caramel][374] | Sleep Token | Even In Arcadia | 2025 | archived WEBN top songs 2026; 1 snapshot |
| 375 | [The End (feat. BABYMETAL) (2025 VERSION)][375] | Five Finger Death Punch | BEST OF (Volume 2) | 2025 | archived WEBN top songs 2025; 1 snapshot |
| 376 | [My Only Angel (feat. Steve Martin) (Desert Road Version)][376] | Aerosmith & YUNGBLUD | My Only Angel (Desert Road Version) [feat. Steve Martin] - Single | 2025 | WEBN play history 2025; 1 sampled play |
| 377 | [Asking For A Friend][377] | Foo Fighters | Asking For A Friend - Single | 2025 | WEBN play history 2025; 1 sampled play |
| 378 | [As Alive As You Need Me To Be][378] | Nine Inch Nails | TRON: Ares (Original Motion Picture Soundtrack) | 2025 | WEBN play history 2025; 1 sampled play |
| 379 | [my mind is a mountain][379] | Deftones | private music | 2025 | WEBN play history 2025; 1 sampled play |
| 380 | [Spit XXV][380] | Kittie | Spit XXV - EP | 2025 | WEBN play history 2025; 1 sampled play |
| 381 | [Today's Song][381] | Foo Fighters | Today's Song - Single | 2025 | WEBN play history 2025; 1 sampled play |
| 382 | [I Disappear][382] | Metallica | I Disappear - Single | 2000 | WEBN play history 2025; 1 sampled play |
| 383 | [The End][383] | Mammoth | The End - Single | 2025 | archived WEBN top songs 2025; 1 snapshot |
| 384 | [Wasting My Time][384] | Default | The Fallout (Limited Edition) | 2001 | WEBN play history 2025; 1 sampled play |
| 385 | [Emergence][385] | Sleep Token | Even In Arcadia | 2025 | archived WEBN top songs 2025; 1 snapshot |
| 386 | [By a Monster’s Hand][386] | Volbeat | God Of Angels Trust | 2025 | archived WEBN top songs 2025; 1 snapshot |
| 387 | [BLUR][387] | Wage War | STIGMA | 2024 | archived WEBN top songs 2025; 1 snapshot |
| 388 | [The Red][388] | Chevelle | Wonder What's Next (Expanded Edition) | 2002 | WEBN play history 2025; 1 sampled play |
| 389 | [Dance, Kid, Dance][389] | Shinedown | Three Six Five / Dance, Kid, Dance - Single | 2025 | WEBN play history 2025; 1 sampled play |
| 390 | [Black Butterfly][390] | Scott Stapp | Higher Power | 2024 | WEBN play history 2025; 1 sampled play |
| 391 | [Walls Come Down][391] | Seether | The Surface Seems So Far | 2024 | WEBN play history 2025; 1 sampled play |
| 392 | [What Remains][392] | Pop Evil | What Remains - Single | 2025 | archived WEBN top songs 2025; 1 snapshot |
| 393 | [Pieces][393] | Daughtry | Pieces - Single | 2024 | archived WEBN top songs 2024; 1 snapshot |
| 394 | [Barely Breathing (feat. Against The Current)][394] | From Ashes to New | Barely Breathing (feat. Against The Current) - Single | 2023 | archived WEBN top songs 2024; 1 snapshot |
| 395 | [Truth][395] | Godsmack | Lighting Up the Sky | 2023 | archived WEBN top songs 2024; 1 snapshot |
| 396 | [I Was Alive][396] | Beartooth | The Surface | 2023 | WEBN play history 2024; 1 sampled play |
| 397 | [Rebel Yell][397] | Billy Idol | Rebel Yell (Deluxe Edition) | 1983 | WEBN play history 2024; 1 sampled play |
| 398 | [This Is the Way (feat. DMX)][398] | Five Finger Death Punch | AfterLife (Deluxe) | 2024 | archived WEBN top songs 2024; 1 snapshot |
| 399 | [Dilemma][399] | Green Day | Pop Nonstop | 2023 | archived WEBN top songs 2024; 1 snapshot |
| 400 | [Friendly Fire][400] | LINKIN PARK | Papercuts (Singles Collection 2000-2023) | 2024 | archived WEBN top songs 2024; 1 snapshot |
| 401 | [S!CK][401] | The Warning | S!CK - Single | 2024 | archived WEBN top songs 2024; 1 snapshot |
| 402 | [Devil You Know][402] | Tim Montana | Devil You Know - Single | 2023 | archived WEBN top songs 2023; 1 snapshot |
| 403 | [Bad Man][403] | Disturbed | Divisive | 2022 | WEBN play history 2023; 1 sampled play |
| 404 | [Testify][404] | Rage Against the Machine | The Battle of Los Angeles | 1999 | WEBN play history 2023; 1 sampled play |
| 405 | [Sex Type Thing][405] | Stone Temple Pilots | Core (Super Deluxe Edition) | 1992 | WEBN play history 2023; 1 sampled play |
| 406 | [The Dirt I'm Buried In][406] | Avatar | Dance Devil Dance | 2023 | WEBN play history 2023; 1 sampled play |
| 407 | [Blood In The Water][407] | Ayron Jones | Chronicles Of The Kid | 2023 | WEBN play history 2023; 1 sampled play |
| 408 | [Last Resort (Reimagined)][408] | Falling In Reverse | Last Resort (Reimagined) - Single | 2023 | WEBN play history 2023; 1 sampled play |
| 409 | [Best of You][409] | Foo Fighters | Greatest Hits | 2005 | WEBN play history 2023; 1 sampled play |
| 410 | [Somebody Told Me][410] | The Killers | Direct Hits | 2004 | WEBN play history 2023; 1 sampled play |
| 411 | [Nobody][411] | Avenged Sevenfold | nobody new rock | 2023 | WEBN play history 2023; 1 sampled play |
| 412 | [Rescued][412] | Foo Fighters | But Here We Are | 2023 | archived WEBN top songs 2023; 1 snapshot |
| 413 | [Clint Eastwood][413] | Gorillaz | The Singles Collection 2001-2011 | 2001 | WEBN play history 2023; 1 sampled play |
| 414 | [No Apologies][414] | Papa Roach | Ego Trip | 2022 | WEBN play history 2023; 1 sampled play |
| 415 | [Lowest In Me][415] | Staind | Confessions Of The Fallen (Deluxe) | 2023 | WEBN play history 2023; 1 sampled play |
| 416 | [Saviour II][416] | Black Veil Brides | Saviour II - Single | 2022 | WEBN play history 2023; 1 sampled play |
| 417 | [Beguiled][417] | The Smashing Pumpkins | Beguiled - Single | 2022 | archived WEBN top songs 2023; 1 snapshot |
| 418 | [I Am The Weapon][418] | Three Days Grace | EXPLOSIONS | 2022 | WEBN play history 2023; 1 sampled play |
| 419 | [Sabotage][419] | Beastie Boys | Solid Gold Hits | 2005 | WEBN play history 2023; 1 sampled play |
| 420 | [Mr. Brownstone][420] | Guns N' Roses | Appetite For Destruction | 1987 | WEBN play history 2023; 1 sampled play |
| 421 | [Painkiller][421] | Judas Priest | Painkiller (Bonus Track Version) | 1990 | WEBN play history 2023; 1 sampled play |
| 422 | [Symphony of Destruction][422] | Megadeth | Countdown to Extinction (Bonus Track Version) | 1992 | WEBN play history 2023; 1 sampled play |
| 423 | [Nevermore][423] | Morbid Angel | Illud Divinum Insanus | 2011 | WEBN play history 2023; 1 sampled play |
| 424 | [Bringing on the Pain][424] | One Day Alive | Bringing on the Pain - Single | 2022 | WEBN play history 2023; 1 sampled play |
| 425 | [Electric Head, Pt. 1 (The Agony)][425] | White Zombie | Astro-Creep: 2000 - Songs of Love, Destruction and Other Synthetic Delusions of the Electric Head | 1995 | WEBN play history 2023; 1 sampled play |
| 426 | [Times Like These][426] | Five Finger Death Punch | AfterLife | 2022 | archived WEBN top songs 2022; 1 snapshot |
| 427 | [Masterpiece][427] | Motionless In White | Masterpiece: Motion Picture Collection | 2022 | archived WEBN top songs 2022; 1 snapshot |
| 428 | [Tippa My Tongue][428] | Red Hot Chili Peppers | Tippa My Tongue - Rock Freshers | 2022 | WEBN play history 2022; 1 sampled play |
| 429 | [It's a Long Way to the Top (If You Wanna Rock 'N' Roll)][429] | AC/DC | High Voltage | 1975 | WEBN play history 2022; 1 sampled play |
| 430 | [No One Knows][430] | Queens of the Stone Age | Songs for the Deaf | 2002 | WEBN play history 2022; 1 sampled play |
| 431 | [If Tomorrow Never Comes][431] | Bad Wolves | Dear Monsters | 2021 | WEBN play history 2022; 1 sampled play |
| 432 | [MYSTERY][432] | Turnstile | MYSTERY - Single | 2021 | archived WEBN top songs 2022; 1 snapshot |
| 433 | [The Steeple][433] | Halestorm | The Steeple - Modern Rock Hits | 2022 | WEBN play history 2022; 1 sampled play |
| 434 | [The Memory Remains (feat. Marianne Faithfull)][434] | Metallica | Reload | 1997 | WEBN play history 2022; 1 sampled play |
| 435 | [Love Dies Young][435] | Foo Fighters | Medicine At Midnight | 2021 | archived WEBN top songs 2022; 1 snapshot |
| 436 | [Planet Zero][436] | Shinedown | Planet Zero | 2022 | WEBN play history 2022; 1 sampled play |
| 437 | [DiE4u][437] | Bring Me The Horizon | DiE4u - Single | 2021 | WEBN play history 2022; 1 sampled play |
| 438 | [Father Of Mine][438] | Everclear | In A Different Light (All New Recordings) | 2009 | WEBN play history 2022; 1 sampled play |
| 439 | [Shotgun Blues][439] | Volbeat | Servant Of The Mind (Deluxe) | 2021 | WEBN play history 2022; 1 sampled play |
| 440 | [Warrior (feat. Travis Barker)][440] | Atreyu | Baptize | 2021 | WEBN play history 2021; 1 sampled play |
| 441 | [Scarlet Cross][441] | Black Veil Brides | Scarlet Cross - Single | 2021 | WEBN play history 2021; 1 sampled play |
| 442 | [Hard Skool][442] | Guns N' Roses | Hard Skool - Single | 2021 | WEBN play history 2021; 1 sampled play |
| 443 | [All the Small Things][443] | blink-182 | Enema of the State | 1999 | WEBN play history 2021; 1 sampled play |
| 444 | [Dude (Looks Like a Lady)][444] | Aerosmith | 20th Century Masters - The Millennium Collection: The Best of Aerosmith | 1987 | archived WEBN top songs 2021; 1 snapshot |
| 445 | [Everything Zen][445] | Bush | Loaded: The Greatest Hits 1994-2023 | 1994 | archived WEBN top songs 2021; 1 snapshot |
| 446 | [Mars Simula][446] | Chevelle | NIRATIAS | 2021 | archived WEBN top songs 2021; 1 snapshot |
| 447 | [Unforgettable][447] | Godsmack | When Legends Rise | 2018 | WEBN play history 2021; 1 sampled play |
| 448 | [The Devil's Bleeding Crown][448] | Volbeat | Seal the Deal & Let's Boogie (Deluxe) | 2016 | WEBN play history 2021; 1 sampled play |
| 449 | [Cherry Pie][449] | Warrant | Cherry Pie (Bonus Track Version) | 1990 | WEBN play history 2021; 1 sampled play |
| 450 | [Nowhere Generation][450] | Rise Against | Nowhere Generation | 2021 | archived WEBN top songs 2021; 1 snapshot |
| 451 | [Wonderwall (Remastered)][451] | Oasis | (What's The Story) Morning Glory? [Deluxe Remastered Edition] | 1995 | WEBN play history 2021; 1 sampled play |
| 452 | [Burden In My Hand][452] | Soundgarden | Telephantasm (Deluxe Version) | 2010 | WEBN play history 2021; 1 sampled play |
| 453 | [Adrenaline][453] | Zero 9:36 | ...If You Don’t Save Yourself | 2020 | WEBN play history 2021; 1 sampled play |
| 454 | [Natural][454] | Imagine Dragons | Origins | 2018 | WEBN play history 2021; 1 sampled play |
| 455 | [Right Here (Album Version)][455] | Staind | Chapter V | 2005 | WEBN play history 2021; 1 sampled play |
| 456 | [Mercy][456] | Ayron Jones | Soundtrack To Summer 2021 | 2021 | WEBN play history 2021; 1 sampled play |
| 457 | [Living the Dream][457] | Five Finger Death Punch | F8 | 2020 | WEBN play history 2021; 1 sampled play |
| 458 | [Breathe Again][458] | Pop Evil | Versatile | 2020 | archived WEBN top songs 2021; 1 snapshot |
| 459 | [Death By Rock And Roll][459] | The Pretty Reckless | Death By Rock And Roll | 2020 | WEBN play history 2021; 1 sampled play |
| 460 | [TRIALS][460] | STARSET | Rock Gaming | 2019 | archived WEBN top songs 2021; 1 snapshot |
| 461 | [Runnin' Down a Dream][461] | Tom Petty | Full Moon Fever | 1989 | WEBN play history 2021; 1 sampled play |
| 462 | [Waiting On A War][462] | Foo Fighters | Medicine At Midnight | 2021 | archived WEBN top songs 2021; 1 snapshot |
| 463 | [hometown][463] | cleopatrick | the boys - EP | 2018 | archived WEBN top songs 2021; 1 snapshot |
| 464 | [Slow Ride (Single Version)][464] | Foghat | The Essentials: Foghat | 1975 | WEBN play history 2021; 1 sampled play |
| 465 | [Make Me Bad][465] | Korn | Issues | 1999 | WEBN play history 2021; 1 sampled play |
| 466 | [Learn to Walk Again][466] | Bad Wolves | N.A.T.I.O.N. | 2019 | archived WEBN top songs 2021; 1 snapshot |
| 467 | [Ohms][467] | Deftones | Ohms | 2020 | WEBN play history 2020; 1 sampled play |
| 468 | [My Way, Soon][468] | Greta Van Fleet | The Battle at Garden’s Gate | 2020 | WEBN play history 2020; 1 sampled play |
| 469 | [Somebody That I Used to Know][469] | Three Days Grace | Somebody That I Used to Know - Single | 2020 | WEBN play history 2020; 1 sampled play |
| 470 | [Heavy Is the Head (feat. Chris Cornell)][470] | Zac Brown Band | Jekyll + Hyde | 2015 | WEBN play history 2020; 1 sampled play |
| 471 | [I Will Buy You a New Life (Re-Recorded)][471] | Everclear | Return to Santa Monica | 2011 | WEBN play history 2020; 1 sampled play |
| 472 | [Purple Haze][472] | The Jimi Hendrix Experience | Are You Experienced (Deluxe Version) | 1967 | WEBN play history 2020; 1 sampled play |
| 473 | [Bleeding Me (Remastered)][473] | Metallica | Load (Remastered) | 1996 | WEBN play history 2020; 1 sampled play |
| 474 | [Buddy Holly][474] | Weezer | Weezer (Deluxe Edition) | 1994 | WEBN play history 2020; 1 sampled play |
| 475 | [Atlas Falls][475] | Shinedown | Atlas Falls - Single | 2020 | WEBN play history 2020; 1 sampled play |
| 476 | [Beverly Hills][476] | Weezer | Make Believe | 2005 | WEBN play history 2020; 1 sampled play |
| 477 | [Radioactive (feat. Kendrick Lamar)][477] | Imagine Dragons | Radioactive (feat. Kendrick Lamar) - Single | 2014 | WEBN play history 2020; 1 sampled play |
| 478 | [Lake of Fire (Live Acoustic)][478] | Nirvana | MTV Unplugged In New York (Live Acoustic) | 1994 | WEBN play history 2020; 1 sampled play; no Nirvana studio version exists |
| 479 | [Flowers on a Grave][479] | Bush | The Kingdom | 2020 | WEBN play history 2020; 1 sampled play |
| 480 | [Some Kind of Monster][480] | Metallica | St. Anger | 2003 | WEBN play history 2020; 1 sampled play |
| 481 | [Ghost][481] | Badflower | Ghost - Single | 2018 | WEBN play history 2020; 1 sampled play |
| 482 | [Wolf Totem (feat. Jacoby Shaddix)][482] | The Hu | Wolf Totem (feat. Jacoby Shaddix) - Single | 2020 | WEBN play history 2020; 1 sampled play |
| 483 | [The Unforgiven III][483] | Metallica | Death Magnetic | 2008 | WEBN play history 2020; 1 sampled play |
| 484 | [Ordinary Man (feat. Elton John)][484] | Ozzy Osbourne | Ordinary Man | 2020 | WEBN play history 2020; 1 sampled play |
| 485 | [Wash It All Away][485] | Five Finger Death Punch | A Decade of Destruction | 2015 | WEBN play history 2020; 1 sampled play |
| 486 | [Work][486] | Pop Evil | Work - Single | 2020 | WEBN play history 2020; 1 sampled play |
| 487 | [Come Together][487] | Gary Clark Jr. & Junkie XL | Come Together - Single | 2017 | WEBN play history 2020; 1 sampled play |
| 488 | [1979][488] | The Smashing Pumpkins | Rotten Apples: Greatest Hits | 1995 | WEBN play history 2020; 1 sampled play |
| 489 | [Rolling 7s][489] | Dirty Honey | Dirty Honey - EP | 2019 | archived WEBN top songs 2020; 1 snapshot |
| 490 | [Inside Out][490] | Five Finger Death Punch | F8 | 2019 | WEBN play history 2020; 1 sampled play |
| 491 | [Back In Black][491] | AC/DC | Back In Black | 1980 | popular catalog addition |
| 492 | [Thunderstruck][492] | AC/DC | Iron Man 2 | 1990 | popular catalog addition |
| 493 | [Crazy][493] | Aerosmith | Big Ones | 1980 | popular catalog addition |
| 494 | [Walk This Way][494] | Aerosmith | Toys In The Attic | 1975 | popular catalog addition |
| 495 | [Rooster][495] | Alice In Chains | Dirt (Remastered) | 1992 | popular catalog addition |
| 496 | [Would?][496] | Alice In Chains | Dirt (Remastered) | 1992 | popular catalog addition |
| 497 | [Movies (2026 Remastered)][497] | Alien Ant Farm | ANThology (Deluxe Edition) | 2001 | popular catalog addition |
| 498 | [These Days][498] | Alien Ant Farm | truANT | 2003 | popular catalog addition |
| 499 | [Fight][499] | All Good Things | Battle Rock 2 | 2014 | popular catalog addition |
| 500 | [The Comeback (feat. Craig Mabbitt of Escape the Fate)][500] | All Good Things | The Comeback (feat. Craig Mabbitt of Escape the Fate) - EP | 2021 | popular catalog addition |
| 501 | [Dear Maria, Count Me In][501] | All Time Low | So Wrong, It's Right (Deluxe Version) | 2007 | popular catalog addition |
| 502 | [Weightless (Rerecorded)][502] | All Time Low | The Forever Sessions, Vol. 1 (Rerecorded) | 2024 | popular catalog addition |
| 503 | [Animals][503] | Architects | For Those That Wish to Exist | 2020 | popular catalog addition |
| 504 | [Doomsday][504] | Architects | Holy Hell | 2018 | popular catalog addition |
| 505 | [Cochise][505] | Audioslave | Audioslave | 2002 | popular catalog addition |
| 506 | [I Am the Highway][506] | Audioslave | Audioslave | 2002 | popular catalog addition |
| 507 | [In Between][507] | Beartooth | Disgusting | 2014 | popular catalog addition |
| 508 | [The Lines][508] | Beartooth | Disgusting | 2014 | popular catalog addition |
| 509 | [In This River][509] | Black Label Society | Skullage | 2005 | popular catalog addition |
| 510 | [Stillborn (feat. Ozzy Osbourne)][510] | Black Label Society | The Blessed Hellride | 2003 | popular catalog addition |
| 511 | [Iron Man][511] | Black Sabbath | Complete Studio Albums 1970-1978 | 1970 | popular catalog addition |
| 512 | [N.I.B.][512] | Black Sabbath | The Ultimate Collection | 1970 | popular catalog addition |
| 513 | [Livin' On a Prayer][513] | Bon Jovi | Slippery When Wet | 1986 | popular catalog addition |
| 514 | [You Give Love a Bad Name][514] | Bon Jovi | Slippery When Wet | 1986 | popular catalog addition |
| 515 | [Breath][515] | Breaking Benjamin | Phobia | 2006 | popular catalog addition |
| 516 | [The Diary of Jane (Single Version)][516] | Breaking Benjamin | Phobia (Explicit Version) | 2006 | popular catalog addition |
| 517 | [Lit Up][517] | Buckcherry | Buckcherry | 1999 | popular catalog addition |
| 518 | [Sorry][518] | Buckcherry | 15 | 2005 | popular catalog addition |
| 519 | [Machinehead (Remastered)][519] | Bush | Sixteen Stone (Remastered) | 1994 | popular catalog addition |
| 520 | [Swallowed (Remastered)][520] | Bush | Razorblade Suitcase (Remastered) | 1996 | popular catalog addition |
| 521 | [Gel][521] | Collective Soul | Collective Soul | 1995 | popular catalog addition |
| 522 | [Heavy][522] | Collective Soul | Dosage | 1999 | popular catalog addition |
| 523 | [My Sacrifice][523] | Creed | Greatest Hits | 2001 | popular catalog addition |
| 524 | [With Arms Wide Open][524] | Creed | Human Clay | 1999 | popular catalog addition |
| 525 | [Her Black Wings][525] | Danzig | Danzig II: Lucifuge | 1990 | popular catalog addition |
| 526 | [Twist of Cain][526] | Danzig | Danzig | 1988 | popular catalog addition |
| 527 | [Shelf in the Room][527] | Days of the New | Days of the New | 1997 | popular catalog addition |
| 528 | [The Down Town][528] | Days of the New | Days of the New | 1997 | popular catalog addition |
| 529 | [Photograph][529] | Def Leppard | Pyromania | 1983 | popular catalog addition |
| 530 | [Rock of Ages][530] | Def Leppard | Pyromania | 1983 | popular catalog addition |
| 531 | [Down with the Sickness][531] | Disturbed | The Sickness | 2000 | popular catalog addition |
| 532 | [The Sound of Silence][532] | Disturbed | Immortalized (Deluxe Edition) | 2015 | popular catalog addition |
| 533 | [Step Up][533] | Drowning Pool | Desensitized | 2004 | popular catalog addition |
| 534 | [Tear Away][534] | Drowning Pool | Sinner | 2001 | popular catalog addition |
| 535 | [Bring Me to Life][535] | Evanescence | Fallen | 2003 | popular catalog addition |
| 536 | [Call Me When You're Sober][536] | Evanescence | The Open Door | 2006 | popular catalog addition |
| 537 | [From Out of Nowhere][537] | Faith No More | The Real Thing | 1989 | popular catalog addition |
| 538 | [Midlife Crisis][538] | Faith No More | Angel Dust | 1992 | popular catalog addition |
| 539 | [Dance, Dance][539] | Fall Out Boy | Believers Never Die - Greatest Hits (Bonus Track Version) | 2005 | popular catalog addition |
| 540 | [Thnks Fr Th Mmrs][540] | Fall Out Boy | Infinity On High | 2007 | popular catalog addition |
| 541 | [Popular Monster][541] | Falling In Reverse | Popular Monster - Single | 2019 | popular catalog addition |
| 542 | [The Drug in Me Is You][542] | Falling In Reverse | The Drug in Me Is You | 2011 | popular catalog addition |
| 543 | [Falling On][543] | Finger Eleven | Them Vs. You Vs. Me (Deluxe Edition) | 2007 | popular catalog addition |
| 544 | [One Thing][544] | Finger Eleven | Finger Eleven | 2003 | popular catalog addition |
| 545 | [Bad Company][545] | Five Finger Death Punch | A Decade of Destruction | 2009 | popular catalog addition |
| 546 | [Wrong Side of Heaven][546] | Five Finger Death Punch | The Wrong Side of Heaven and the Righteous Side of Hell, Vol. 1 (Deluxe Edition) | 2013 | popular catalog addition |
| 547 | [Learn to Fly][547] | Foo Fighters | There Is Nothing Left to Lose | 1999 | popular catalog addition |
| 548 | [The Pretender][548] | Foo Fighters | Echoes, Silence, Patience & Grace | 2007 | popular catalog addition |
| 549 | [Bad Day][549] | Fuel | Something Like Human | 2000 | popular catalog addition |
| 550 | [Shimmer][550] | Fuel | Sunburn | 1998 | popular catalog addition |
| 551 | [Bad Habits][551] | Giovannie and the Hired Guns | Bad Habits | 2017 | popular catalog addition |
| 552 | [Overrated][552] | Giovannie and the Hired Guns | Tejano Punk Boyz | 2022 | popular catalog addition |
| 553 | [Awake][553] | Godsmack | Good Times, Bad Times... Ten Years of Godsmack | 2000 | popular catalog addition |
| 554 | [Voodoo][554] | Godsmack | Good Times, Bad Times... Ten Years of Godsmack | 1997 | popular catalog addition |
| 555 | [American Idiot][555] | Green Day | American Idiot (Deluxe Edition) | 2004 | popular catalog addition |
| 556 | [Basket Case][556] | Green Day | Dookie | 1994 | popular catalog addition |
| 557 | [Sweet Child O' Mine][557] | Guns N' Roses | Appetite For Destruction (Super Deluxe) | 1987 | popular catalog addition |
| 558 | [Welcome To The Jungle][558] | Guns N' Roses | Appetite For Destruction (Super Deluxe) | 1987 | popular catalog addition |
| 559 | [Shamrocks and Shenanigans][559] | House of Pain | House of Pain (Fine Malt Lyrics) | 1992 | popular catalog addition |
| 560 | [Who's the Man][560] | House of Pain | Same as It Ever Was | 1994 | popular catalog addition |
| 561 | [Nice to Know You][561] | Incubus | Morning View | 2001 | popular catalog addition |
| 562 | [Stellar][562] | Incubus | Make Yourself | 1999 | popular catalog addition |
| 563 | [Save Me][563] | Jelly Roll | Save Me - Single | 2020 | popular catalog addition |
| 564 | [Son of a Sinner][564] | Jelly Roll | Ballads of the Broken | 2021 | popular catalog addition |
| 565 | [Pain][565] | Jimmy Eat World | Futures | 2004 | popular catalog addition |
| 566 | [Sweetness][566] | Jimmy Eat World | Bleed American | 2001 | popular catalog addition |
| 567 | [Blue On Black][567] | Kenny Wayne Shepherd | Trouble Is... | 1997 | popular catalog addition |
| 568 | [Cowboy][568] | Kid Rock | Greatest Hits: You Never Saw Coming | 1998 | popular catalog addition |
| 569 | [Only God Knows Why][569] | Kid Rock | 00's US Hits | 1998 | popular catalog addition |
| 570 | [Falling Away from Me][570] | Korn | Issues | 1999 | popular catalog addition |
| 571 | [Got the Life][571] | Korn | Follow The Leader | 1998 | popular catalog addition |
| 572 | [Stairway to Heaven][572] | Led Zeppelin | Led Zeppelin IV (Remastered) | 1971 | popular catalog addition |
| 573 | [Whole Lotta Love][573] | Led Zeppelin | Led Zeppelin II (Remastered) | 1969 | popular catalog addition |
| 574 | [American Woman][574] | Lenny Kravitz | Greatest Hits | 1999 | popular catalog addition |
| 575 | [Are You Gonna Go My Way][575] | Lenny Kravitz | Are You Gonna Go My Way | 1993 | popular catalog addition |
| 576 | [Nookie][576] | Limp Bizkit | Significant Other | 1999 | popular catalog addition |
| 577 | [Rollin' (Air Raid Vehicle)][577] | Limp Bizkit | Greatest Hitz | 2000 | popular catalog addition |
| 578 | [In the End][578] | LINKIN PARK | Hybrid Theory (Deluxe Edition) | 2000 | popular catalog addition |
| 579 | [Numb][579] | LINKIN PARK | Meteora (Deluxe Edition) | 2003 | popular catalog addition |
| 580 | [Glamour Boys][580] | Living Colour | Pride | 1988 | popular catalog addition |
| 581 | [Type][581] | Living Colour | Time's Up | 1990 | popular catalog addition |
| 582 | [Sweet Home Alabama][582] | Lynyrd Skynyrd | All Time Greatest Hits | 1974 | popular catalog addition |
| 583 | [That Smell][583] | Lynyrd Skynyrd | Street Survivors | 1977 | popular catalog addition |
| 584 | [Saint Joe On the School Bus][584] | Marcy Playground | Marcy Playground | 1997 | popular catalog addition |
| 585 | [Sherry Fraser][585] | Marcy Playground | Marcy Playground | 1997 | popular catalog addition |
| 586 | [Enter Sandman][586] | Metallica | Metallica (Deluxe Box Set) | 1991 | popular catalog addition |
| 587 | [Nothing Else Matters][587] | Metallica | Metallica (Remastered) | 1991 | popular catalog addition |
| 588 | [Head Like a Hole][588] | Nine Inch Nails | Pretty Hate Machine (Remastered) | 1989 | popular catalog addition |
| 589 | [The Hand That Feeds][589] | Nine Inch Nails | With Teeth | 2005 | popular catalog addition |
| 590 | [About a Girl][590] | Nirvana | Bleach (Deluxe Edition) | 1989 | popular catalog addition |
| 591 | [Lithium][591] | Nirvana | Nevermind | 1991 | popular catalog addition |
| 592 | [Bark at the Moon][592] | Ozzy Osbourne | Bark at the Moon (Bonus Track Version) | 1983 | popular catalog addition |
| 593 | [No More Tears][593] | Ozzy Osbourne | No More Tears (Bonus Track Version) | 1991 | popular catalog addition |
| 594 | [Boom][594] | P.O.D. | Satellite | 2001 | popular catalog addition |
| 595 | [Youth of the Nation][595] | P.O.D. | Greatest Hits: The Atlantic Years | 2001 | popular catalog addition |
| 596 | [Cemetery Gates][596] | Pantera | Cowboys from Hell | 1990 | popular catalog addition |
| 597 | [Cowboys from Hell][597] | Pantera | Cowboys from Hell | 1990 | popular catalog addition |
| 598 | [Getting Away With Murder (2020)][598] | Papa Roach | 20/20 | 2007 | popular catalog addition |
| 599 | [Scars][599] | Papa Roach | To Be Loved: The Best of Papa Roach | 2004 | popular catalog addition |
| 600 | [Alive][600] | Pearl Jam | Ten | 1991 | popular catalog addition |
| 601 | [Jeremy][601] | Pearl Jam | Ten | 1991 | popular catalog addition |
| 602 | [Nothin' But a Good Time][602] | Poison | Open Up and Say... Ahh! (20th Anniversary Edition) | 1988 | popular catalog addition |
| 603 | [Talk Dirty to Me][603] | Poison | The Best of Poison: 20 Years of Rock (Remastered) | 1986 | popular catalog addition |
| 604 | [100 In a 55][604] | Pop Evil | Lipstick On the Mirror | 2008 | popular catalog addition |
| 605 | [Trenches][605] | Pop Evil | Onyx (Deluxe Edition) | 2013 | popular catalog addition |
| 606 | [Blurry][606] | Puddle of Mudd | Come Clean | 2001 | popular catalog addition |
| 607 | [Drift and Die][607] | Puddle of Mudd | Come Clean | 2001 | popular catalog addition |
| 608 | [Another One Bites the Dust][608] | Queen | Greatest Hits I, II & III: The Platinum Collection | 1980 | popular catalog addition |
| 609 | [We Are the Champions][609] | Queen | Greatest Hits I, II & III: The Platinum Collection | 1977 | popular catalog addition |
| 610 | [Mama Weer All Crazee Now][610] | Quiet Riot | Condition Critical | 1984 | popular catalog addition |
| 611 | [Metal Health (Bang Your Head)][611] | Quiet Riot | Metal Health (Bonus Track Version) | 1983 | popular catalog addition |
| 612 | [Bulls On Parade][612] | Rage Against the Machine | Evil Empire | 1996 | popular catalog addition |
| 613 | [Guerrilla Radio][613] | Rage Against the Machine | The Battle of Los Angeles | 1999 | popular catalog addition |
| 614 | [Californication][614] | Red Hot Chili Peppers | The Studio Album Collection 1991-2011 | 1999 | popular catalog addition |
| 615 | [Dani California][615] | Red Hot Chili Peppers | Dani California - EP | 2006 | popular catalog addition |
| 616 | [Prayer of the Refugee][616] | Rise Against | The Sufferer & the Witness | 2006 | popular catalog addition |
| 617 | [Ready To Fall][617] | Rise Against | The Sufferer & the Witness | 2006 | popular catalog addition |
| 618 | [Living Dead Girl][618] | Rob Zombie | Hellbilly Deluxe | 1998 | popular catalog addition |
| 619 | [Superbeast][619] | Rob Zombie | Hellbilly Deluxe | 1998 | popular catalog addition |
| 620 | [Always][620] | Saliva | Back Into Your System | 2002 | popular catalog addition |
| 621 | [Ladies and Gentlemen][621] | Saliva | Moving Forward In Reverse: Greatest Hits | 2006 | popular catalog addition |
| 622 | [Remedy][622] | Seether | Karma and Effect | 2005 | popular catalog addition |
| 623 | [Rise Above This][623] | Seether | Finding Beauty In Negative Spaces (Bonus Track Version) | 2007 | popular catalog addition |
| 624 | [Over Your Shoulder][624] | Seven Mary Three | Orange Ave. | 1998 | popular catalog addition |
| 625 | [Water's Edge][625] | Seven Mary Three | American Standard | 1995 | popular catalog addition |
| 626 | [Second Chance][626] | Shinedown | The Sound of Madness (Bonus Track Version) | 2008 | popular catalog addition |
| 627 | [Sound of Madness][627] | Shinedown | The Sound of Madness (Bonus Track Version) | 2008 | popular catalog addition |
| 628 | [Fell On Black Days][628] | Soundgarden | Superunknown (20th Anniversary) | 1994 | popular catalog addition |
| 629 | [Outshined][629] | Soundgarden | Badmotorfinger (Super Deluxe Edition) | 1991 | popular catalog addition |
| 630 | [It's Been Awhile][630] | Staind | Break the Cycle | 2001 | popular catalog addition |
| 631 | [So Far Away][631] | Staind | iTunes Originals: Staind | 2003 | popular catalog addition |
| 632 | [Absolute Zero][632] | Stone Sour | House of Gold & Bones, Pt. 1 | 2012 | popular catalog addition |
| 633 | [Through Glass][633] | Stone Sour | Come What(ever) May | 2006 | popular catalog addition |
| 634 | [Interstate Love Song][634] | Stone Temple Pilots | Thank You | 1994 | popular catalog addition |
| 635 | [Vasoline][635] | Stone Temple Pilots | Purple (Super Deluxe Edition) (2019 Remaster) | 1994 | popular catalog addition |
| 636 | [Still Waiting][636] | Sum 41 | Does This Look Infected? | 2002 | popular catalog addition |
| 637 | [B.Y.O.B.][637] | System Of A Down | Mezmerize | 2005 | popular catalog addition |
| 638 | [Chop Suey!][638] | System Of A Down | Toxicity | 2001 | popular catalog addition |
| 639 | [Spiders][639] | System Of A Down | System Of A Down | 1998 | popular catalog addition |
| 640 | [Dreams (Remastered 2026)][640] | The Cranberries | Everybody Else Is Doing It, So Why Can't We? (Remastered 2026) | 1993 | popular catalog addition |
| 641 | [Linger (Remastered 2026)][641] | The Cranberries | Everybody Else Is Doing It, So Why Can't We? (Remastered 2026) | 1993 | popular catalog addition |
| 642 | [Come Out and Play (Keep 'Em Separated)][642] | The Offspring | Smash | 1994 | popular catalog addition |
| 643 | [(I Can't Get No) Satisfaction][643] | The Rolling Stones | Forty Licks | 1965 | popular catalog addition |
| 644 | [Gimme Shelter (Remastered 2019)][644] | The Rolling Stones | Let It Bleed (Remastered 2019) | 1969 | popular catalog addition |
| 645 | [1979 (Remastered 2012)][645] | The Smashing Pumpkins | Mellon Collie And The Infinite Sadness (2012 Remastered) | 1995 | popular catalog addition |
| 646 | [Today][646] | The Smashing Pumpkins | Siamese Dream | 1993 | popular catalog addition |
| 647 | [CHOKE][647] | The Warning | CHOKE - Single | 2021 | popular catalog addition |
| 648 | [MONEY][648] | The Warning | MONEY - Single | 2022 | popular catalog addition |
| 649 | [Fell In Love With a Girl][649] | The White Stripes | White Blood Cells | 2001 | popular catalog addition |
| 650 | [Icky Thump][650] | The White Stripes | Icky Thump | 2007 | popular catalog addition |
| 651 | [Closer To the Edge][651] | Thirty Seconds to Mars | This Is War | 2009 | popular catalog addition |
| 652 | [From Yesterday][652] | Thirty Seconds to Mars | A Beautiful Lie | 2005 | popular catalog addition |
| 653 | [I Hate Everything About You][653] | Three Days Grace | Three Days Grace (Expanded Edition) | 2003 | popular catalog addition |
| 654 | [Riot][654] | Three Days Grace | One-X (Deluxe Edition) | 2006 | popular catalog addition |
| 655 | [American Girl][655] | Tom Petty | The Best of Everything: The Definitive Career Spanning Hits Collection 1976-2016 | 1976 | popular catalog addition |
| 656 | [Mary Jane's Last Dance][656] | Tom Petty | The Best of Everything: The Definitive Career Spanning Hits Collection 1976-2016 | 1993 | popular catalog addition |
| 657 | [Open Up Your Eyes][657] | Tonic | Lemon Parade | 1996 | popular catalog addition |
| 658 | [You Wanted More][658] | Tonic | Sugar | 1999 | popular catalog addition |
| 659 | [Forty Six & 2][659] | TOOL | Ænima | 1996 | popular catalog addition |
| 660 | [Schism][660] | TOOL | Lateralus | 2001 | popular catalog addition |
| 661 | [Heathens][661] | twenty one pilots | Suicide Squad: The Album | 2016 | popular catalog addition |
| 662 | [Ride][662] | twenty one pilots | Blurryface | 2015 | popular catalog addition |

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
[47]: https://music.apple.com/us/song/savior/1440852127
[48]: https://music.apple.com/us/song/click-click-boom/1423175286
[49]: https://music.apple.com/us/song/spoonman/1440811873
[50]: https://music.apple.com/us/song/creep/3631572
[51]: https://music.apple.com/us/song/gone-away/1440901678
[52]: https://music.apple.com/us/song/paint-it-black/1440745782
[53]: https://music.apple.com/us/song/the-kill/1867087254
[54]: https://music.apple.com/us/song/paranoid/785232521
[55]: https://music.apple.com/us/song/shine/1576789671
[56]: https://music.apple.com/us/song/the-world-i-know/120197145
[57]: https://music.apple.com/us/song/one-last-breath/1440738795
[58]: https://music.apple.com/us/song/stupify/1030601026
[59]: https://music.apple.com/us/song/centuries/1440826614
[60]: https://music.apple.com/us/song/paralyzer/1440767124
[61]: https://music.apple.com/us/song/all-my-life/538257185
[62]: https://music.apple.com/us/song/i-stand-alone/1440900494
[63]: https://music.apple.com/us/song/good-riddance-time-of-your-life/346251574
[64]: https://music.apple.com/us/song/pardon-me/187454524
[65]: https://music.apple.com/us/song/black-dog/580708177
[66]: https://music.apple.com/us/song/break-stuff/1440754477
[67]: https://music.apple.com/us/song/my-way/1440843064
[68]: https://music.apple.com/us/song/sex-and-candy/1518392883
[69]: https://music.apple.com/us/song/fade-to-black/579149037
[70]: https://music.apple.com/us/song/closer/1440837621
[71]: https://music.apple.com/us/song/smells-like-teen-spirit/1440783625
[72]: https://music.apple.com/us/song/every-rose-has-its-thorn/716552556
[73]: https://music.apple.com/us/song/footsteps/1030784080
[74]: https://music.apple.com/us/song/dragula/1440845806
[75]: https://music.apple.com/us/song/save-me/80809256
[76]: https://music.apple.com/us/song/black-hole-sun/1440855436
[77]: https://music.apple.com/us/song/outside/263059095
[78]: https://music.apple.com/us/song/toxicity/273714713
[79]: https://music.apple.com/us/song/stressed-out/974485474
[80]: https://music.apple.com/us/song/highway-to-hell/574044008
[81]: https://music.apple.com/us/song/dream-on/1658644941
[82]: https://music.apple.com/us/song/sweet-emotion/1883816642
[83]: https://music.apple.com/us/song/i-stay-away/268435302
[84]: https://music.apple.com/us/song/man-in-the-box/274953022
[85]: https://music.apple.com/us/song/smooth-criminal/406253466
[86]: https://music.apple.com/us/song/like-a-stone/208294873
[87]: https://music.apple.com/us/song/war-pigs/1198293356
[88]: https://music.apple.com/us/song/wanted-dead-or-alive/1422955215
[89]: https://music.apple.com/us/song/so-cold/1440809397
[90]: https://music.apple.com/us/song/crazy-bitch/140862717
[91]: https://music.apple.com/us/song/mother/1440880961
[92]: https://music.apple.com/us/song/land-of-confusion/1030228543
[93]: https://music.apple.com/us/song/bodies/1440777727
[94]: https://music.apple.com/us/song/sugar-we-re-goin-down/1440799364
[95]: https://music.apple.com/us/song/everlong/362133505
[96]: https://music.apple.com/us/song/hemorrhage-in-my-hands/203911976
[97]: https://music.apple.com/us/song/bulletproof/1710147290
[98]: https://music.apple.com/us/song/boulevard-of-broken-dreams/1161539476
[99]: https://music.apple.com/us/song/brain-stew/346249616
[100]: https://music.apple.com/us/song/civil-war/1533361064
[101]: https://music.apple.com/us/song/knockin-on-heaven-s-door/1389971325
[102]: https://music.apple.com/us/song/paradise-city/1377813298
[103]: https://music.apple.com/us/song/jump-around/1604628161
[104]: https://music.apple.com/us/song/wish-you-were-here/271792734
[105]: https://music.apple.com/us/song/coming-undone/1594715396
[106]: https://music.apple.com/us/song/freak-on-a-leash/1165631037
[107]: https://music.apple.com/us/song/immigrant-song/580708280
[108]: https://music.apple.com/us/song/fly-away/723338326
[109]: https://music.apple.com/us/song/somewhere-i-belong/590423282
[110]: https://music.apple.com/us/song/sad-but-true/1572051819
[111]: https://music.apple.com/us/song/wherever-i-may-roam/1572051822
[112]: https://music.apple.com/us/song/all-apologies/1440859612
[113]: https://music.apple.com/us/song/heart-shaped-box/1440859107
[114]: https://music.apple.com/us/song/in-bloom/1440783633
[115]: https://music.apple.com/us/song/rape-me/1440859114
[116]: https://music.apple.com/us/song/mama-i-m-coming-home/209695192
[117]: https://music.apple.com/us/song/alive/204672782
[118]: https://music.apple.com/us/song/walk/1049189260
[119]: https://music.apple.com/us/song/last-resort/1450006105
[120]: https://music.apple.com/us/song/black/425465351
[121]: https://music.apple.com/us/song/yellow-ledbetter/400864988
[122]: https://music.apple.com/us/song/bohemian-rhapsody/1440650711
[123]: https://music.apple.com/us/song/killing-in-the-name/578028952
[124]: https://music.apple.com/us/song/black-betty/216088341
[125]: https://music.apple.com/us/song/otherside/948446133
[126]: https://music.apple.com/us/song/soul-to-squeeze/947701037
[127]: https://music.apple.com/us/song/broken/1440652013
[128]: https://music.apple.com/us/song/fine-again/1440651869
[129]: https://music.apple.com/us/song/young-again/1877229743
[130]: https://music.apple.com/us/song/fade/263058447
[131]: https://music.apple.com/us/song/dead-bloated/1596122743
[132]: https://music.apple.com/us/song/plush/3631541
[133]: https://music.apple.com/us/song/wicked-garden/3631553
[134]: https://music.apple.com/us/song/zombie/1440735264
[135]: https://music.apple.com/us/song/self-esteem/1485034811
[136]: https://music.apple.com/us/song/you-re-gonna-go-far-kid/1440887175
[137]: https://music.apple.com/us/song/bullet-with-butterfly-wings/712732631
[138]: https://music.apple.com/us/song/seven-nation-army/1533513537
[139]: https://music.apple.com/us/song/animal-i-have-become/266221967
[140]: https://music.apple.com/us/song/just-like-you/269975543
[141]: https://music.apple.com/us/song/never-too-late/266221984
[142]: https://music.apple.com/us/song/i-will-not-bow/1440809138
[143]: https://music.apple.com/us/song/pour-some-sugar-on-me/1438626355
[144]: https://music.apple.com/us/song/stricken/1030228537
[145]: https://music.apple.com/us/song/who-will-you-follow/1891104594
[146]: https://music.apple.com/us/song/zombified/1622461653
[147]: https://music.apple.com/us/song/re-align/1440900495
[148]: https://music.apple.com/us/song/bawitdaba/586705734
[149]: https://music.apple.com/us/song/cult-of-personality/1734681083
[150]: https://music.apple.com/us/song/come-as-you-are/1440783636
[151]: https://music.apple.com/us/song/crazy-train/1531535287
[152]: https://music.apple.com/us/song/mr-crowley/911604129
[153]: https://music.apple.com/us/song/over-the-mountain/437515108
[154]: https://music.apple.com/us/song/under-the-graveyard/1486836089
[155]: https://music.apple.com/us/song/control/1450664882
[156]: https://music.apple.com/us/song/we-will-rock-you/1440651216
[157]: https://music.apple.com/us/song/cum-on-feel-the-noize/169782152
[158]: https://music.apple.com/us/song/under-the-bridge/948460560
[159]: https://music.apple.com/us/song/fake-it/1440747243
[160]: https://music.apple.com/us/song/simple-man/16232991
[161]: https://music.apple.com/us/song/fat-lip/1440921141
[162]: https://music.apple.com/us/song/aerials/273714765
[163]: https://music.apple.com/us/song/the-kids-aren-t-alright/1783160367
[164]: https://music.apple.com/us/song/sober/1474185453
[165]: https://music.apple.com/us/song/afterlife-from-the-netflix-series-devil-may-cry/1797189311
[166]: https://music.apple.com/us/song/darkness-settles-in/1487244866
[167]: https://music.apple.com/us/song/just-pretend/1817382450
[168]: https://music.apple.com/us/song/my-own-worst-enemy/258611995
[169]: https://music.apple.com/us/song/rx-medicate/1262126920
[170]: https://music.apple.com/us/song/she-talks-to-angels/1440810842
[171]: https://music.apple.com/us/song/my-hero/334812017
[172]: https://music.apple.com/us/song/something-in-the-way-remastered/1586410672
[173]: https://music.apple.com/us/song/the-man-who-sold-the-world-live-acoustic/1440892680
[174]: https://music.apple.com/us/song/big-empty-2019-remaster/1483793461
[175]: https://music.apple.com/us/song/kryptonite/1452011941
[176]: https://music.apple.com/us/song/angels-fall/1440811205
[177]: https://music.apple.com/us/song/ain-t-no-rest-for-the-wicked/1437697155
[178]: https://music.apple.com/us/song/the-unforgiven/1572051821
[179]: https://music.apple.com/us/song/kill-the-noise/1582007064
[180]: https://music.apple.com/us/song/last-kiss/1826659460
[181]: https://music.apple.com/us/song/for-you/263059083
[182]: https://music.apple.com/us/song/hunger-strike/1440657642
[183]: https://music.apple.com/us/song/say-it-ain-t-so/1440870181
[184]: https://music.apple.com/us/song/when-i-m-gone-2023-remaster/1699718921
[185]: https://music.apple.com/us/song/sweet-dreams-are-made-of-this/1540219923
[186]: https://music.apple.com/us/song/snow-hey-oh/945568999
[187]: https://music.apple.com/us/song/monsters/1352572895
[188]: https://music.apple.com/us/song/i-won-t-back-down/1469579709
[189]: https://music.apple.com/us/song/here-i-go-again-1987-version-2017-remaster/1862662882
[190]: https://music.apple.com/us/song/starless/6770568779
[191]: https://music.apple.com/us/song/you-shook-me-all-night-long/574050607
[192]: https://music.apple.com/us/song/sail/1555208311
[193]: https://music.apple.com/us/song/comfortably-numb/1067444896
[194]: https://music.apple.com/us/song/when-legends-rise/1710147288
[195]: https://music.apple.com/us/song/keep-away/1440715668
[196]: https://music.apple.com/us/song/feel-good-inc/693620735
[197]: https://music.apple.com/us/song/hurt/1452875626
[198]: https://music.apple.com/us/song/what-i-ve-done/1622311449
[199]: https://music.apple.com/us/song/lightning-crashes/1440487152
[200]: https://music.apple.com/us/song/master-of-puppets/1275600554
[201]: https://music.apple.com/us/song/better-man/1826659454
[202]: https://music.apple.com/us/song/headstrong/301126618
[203]: https://music.apple.com/us/song/more-human-than-human/1445662559
[204]: https://music.apple.com/us/song/screaming-suicide/1655432390
[205]: https://music.apple.com/us/song/king-nothing-remastered/1808799661
[206]: https://music.apple.com/us/song/can-t-stop/948438478
[207]: https://music.apple.com/us/song/patience/1523360171
[208]: https://music.apple.com/us/song/hail-to-the-king/672046531
[209]: https://music.apple.com/us/song/hard-to-handle/1547308255
[210]: https://music.apple.com/us/song/cold/190781606
[211]: https://music.apple.com/us/song/going-under/1440665975
[212]: https://music.apple.com/us/song/straight-out-of-line-2024-remaster/1758236963
[213]: https://music.apple.com/us/song/longview/1160990767
[214]: https://music.apple.com/us/song/lost/1668488811
[215]: https://music.apple.com/us/song/one-step-closer/528437411
[216]: https://music.apple.com/us/song/one/1434424172
[217]: https://music.apple.com/us/song/turn-the-page/579370550
[218]: https://music.apple.com/us/song/i-don-t-know/1531535104
[219]: https://music.apple.com/us/song/see-u-in-hell-from-the-netflix-series-devil-may-cry/1894386678
[220]: https://music.apple.com/us/song/daughter-remastered/426656373
[221]: https://music.apple.com/us/song/closing-time/1457749142
[222]: https://music.apple.com/us/song/duality/926184068
[223]: https://music.apple.com/us/song/meant-to-live/270003842
[224]: https://music.apple.com/us/song/kill-me-fast/1811868496
[225]: https://music.apple.com/us/song/killing-fields/1825930765
[226]: https://music.apple.com/us/song/braindead-feat-toby-morse/1817729936
[227]: https://music.apple.com/us/song/song-2-2012-remaster/726416473
[228]: https://music.apple.com/us/song/nightmare/378658664
[229]: https://music.apple.com/us/song/send-the-pain-below/270139033
[230]: https://music.apple.com/us/song/prayer/1030144488
[231]: https://music.apple.com/us/song/lose-yourself/1444221569
[232]: https://music.apple.com/us/song/believer/1411628233
[233]: https://music.apple.com/us/song/faint/528437024
[234]: https://music.apple.com/us/song/another-brick-in-the-wall-pt-2/1065975638
[235]: https://music.apple.com/us/song/you-re-going-down/715505186
[236]: https://music.apple.com/us/song/the-kill-bury-me/1440839332
[237]: https://music.apple.com/us/song/we-re-not-gonna-take-it/1788380899
[238]: https://music.apple.com/us/song/more-than-hate/1821279203
[239]: https://music.apple.com/us/song/kashmir/952919352
[240]: https://music.apple.com/us/song/holiday/1161539473
[241]: https://music.apple.com/us/song/dirty-deeds-done-dirt-cheap/575306356
[242]: https://music.apple.com/us/song/eye-of-the-storm/1618342155
[243]: https://music.apple.com/us/song/black-summer/1608013513
[244]: https://music.apple.com/us/song/give-it-away/945581838
[245]: https://music.apple.com/us/song/help/1699431734
[246]: https://music.apple.com/us/song/here-without-you/1440739980
[247]: https://music.apple.com/us/song/war-pigs-luke-s-wall/785232520
[248]: https://music.apple.com/us/song/voices/1030601024
[249]: https://music.apple.com/us/song/burn-it-down/518869937
[250]: https://music.apple.com/us/song/new-divide/1745057599
[251]: https://music.apple.com/us/song/the-beautiful-people/1440804361
[252]: https://music.apple.com/us/song/until-it-sleeps-remastered/1806720493
[253]: https://music.apple.com/us/song/not-falling/250762894
[254]: https://music.apple.com/us/song/hurt/1440838114
[255]: https://music.apple.com/us/song/brain-damage/1665304040
[256]: https://music.apple.com/us/song/a-symptom-of-being-human/1606457294
[257]: https://music.apple.com/us/song/for-i-am-death/1830382225
[258]: https://music.apple.com/us/song/one-more-time/1707258049
[259]: https://music.apple.com/us/song/stuck-in-my-head/1752949982
[260]: https://music.apple.com/us/song/t-n-t/574124824
[261]: https://music.apple.com/us/song/wake-me-up-when-september-ends/1161539483
[262]: https://music.apple.com/us/song/are-you-ready/1425820709
[263]: https://music.apple.com/us/song/nobody-wants-to-die/1649426787
[264]: https://music.apple.com/us/song/how-did-you-love/1025208967
[265]: https://music.apple.com/us/song/by-the-way/948438464
[266]: https://music.apple.com/us/song/like-a-villain/1817382445
[267]: https://music.apple.com/us/song/dead-inside/1820484064
[268]: https://music.apple.com/us/song/rest-in-peace/1589343379
[269]: https://music.apple.com/us/song/for-those-about-to-rock-we-salute-you/574055178
[270]: https://music.apple.com/us/song/dead-man-walking/1584623549
[271]: https://music.apple.com/us/song/livin-on-the-edge/1680799208
[272]: https://music.apple.com/us/song/lifeline/1581509335
[273]: https://music.apple.com/us/song/monkey-wrench/334812033
[274]: https://music.apple.com/us/song/dazed-and-confused/580708943
[275]: https://music.apple.com/us/song/shot-in-the-dark/1533816314
[276]: https://music.apple.com/us/song/making-a-fire/1538671508
[277]: https://music.apple.com/us/song/flagpole-sitta/1440923493
[278]: https://music.apple.com/us/song/rock-you-like-a-hurricane/1434894258
[279]: https://music.apple.com/us/song/shame-shame/1538671510
[280]: https://music.apple.com/us/song/distance/1685901195
[281]: https://music.apple.com/us/song/hells-bells/574050495
[282]: https://music.apple.com/us/song/the-vengeful-one/1006937451
[283]: https://music.apple.com/us/song/a-little-bit-off/1487244862
[284]: https://music.apple.com/us/song/all-within-my-hands/579379136
[285]: https://music.apple.com/us/song/far-behind/734450288
[286]: https://music.apple.com/us/song/insane-in-the-brain/266797417
[287]: https://music.apple.com/us/song/bleed-it-out/1622307215
[288]: https://music.apple.com/us/song/crawling/528437426
[289]: https://music.apple.com/us/song/lying-from-you/590423283
[290]: https://music.apple.com/us/song/hardwired/1145498517
[291]: https://music.apple.com/us/song/kickstart-my-heart/1606706536
[292]: https://music.apple.com/us/song/gotta-get-away/1485043446
[293]: https://music.apple.com/us/song/flying-high-again/1592004621
[294]: https://music.apple.com/us/song/45/321038527
[295]: https://music.apple.com/us/song/jumper/271978748
[296]: https://music.apple.com/us/song/everything-ends/1774393631
[297]: https://music.apple.com/us/song/crawl-back-to-my-coffin/1823939180
[298]: https://music.apple.com/us/song/magnetic/1734536497
[299]: https://music.apple.com/us/song/breaking-the-habit/528437026
[300]: https://music.apple.com/us/song/specter/1831595386
[301]: https://music.apple.com/us/song/bored/1820237458
[302]: https://music.apple.com/us/song/i-refuse-feat-maria-brink-2025-version/1810771131
[303]: https://music.apple.com/us/song/freefall/1739158021
[304]: https://music.apple.com/us/song/apologies/1811868494
[305]: https://music.apple.com/us/song/water-song-janie-s-got-a-gun/1440824725
[306]: https://music.apple.com/us/song/mayday/1811868495
[307]: https://music.apple.com/us/song/i-am-machine/967339624
[308]: https://music.apple.com/us/song/november-rain/1440896193
[309]: https://music.apple.com/us/song/too-far-gone/1655432397
[310]: https://music.apple.com/us/song/i-write-sins-not-tragedies/80456409
[311]: https://music.apple.com/us/song/beyond/1689546756
[312]: https://music.apple.com/us/song/unstoppable/1646032789
[313]: https://music.apple.com/us/song/are-you-gonna-be-my-girl/1778048261
[314]: https://music.apple.com/us/song/down-rodeo/390538410
[315]: https://music.apple.com/us/song/loser/1440891592
[316]: https://music.apple.com/us/song/you-don-t-know-how-it-feels/892018547
[317]: https://music.apple.com/us/song/shoot-to-thrill/574050498
[318]: https://music.apple.com/us/song/daylight/1606457302
[319]: https://music.apple.com/us/song/wasteland/1440760458
[320]: https://music.apple.com/us/song/fight-for-your-right/1440912353
[321]: https://music.apple.com/us/song/face-down/806224710
[322]: https://music.apple.com/us/song/loser/1452011949
[323]: https://music.apple.com/us/song/panama/977495522
[324]: https://music.apple.com/us/song/no-one-like-you/1440922031
[325]: https://music.apple.com/us/song/trippin-on-a-hole-in-a-paper-heart/302229819
[326]: https://music.apple.com/us/song/realize/1533816307
[327]: https://music.apple.com/us/song/no-sleep-till-brooklyn/724971792
[328]: https://music.apple.com/us/song/ramble-on/580708477
[329]: https://music.apple.com/us/song/breaking-down/1452693520
[330]: https://music.apple.com/us/song/remember-when/1694927629
[331]: https://music.apple.com/us/song/all-along-the-watchtower/357653191
[332]: https://music.apple.com/us/song/dangerous/1517736799
[333]: https://music.apple.com/us/song/santa-monica-re-recorded-slowed-reverb/1686253646
[334]: https://music.apple.com/us/song/learning-to-fly/1469579718
[335]: https://music.apple.com/us/song/superblood-wolfmoon/1495371459
[336]: https://music.apple.com/us/song/sickness/1496280504
[337]: https://music.apple.com/us/song/love-in-an-elevator/1440913404
[338]: https://music.apple.com/us/song/beacon/6764034396
[339]: https://music.apple.com/us/song/manufactured-extinct/995383352
[340]: https://music.apple.com/us/song/perfect-strangers/1470534347
[341]: https://music.apple.com/us/song/just-got-lucky/1727790314
[342]: https://music.apple.com/us/song/new-messiah/950232299
[343]: https://music.apple.com/us/song/hunters-moon/1603122626
[344]: https://music.apple.com/us/song/it-s-so-easy/1377813289
[345]: https://music.apple.com/us/song/this-is-now/1440737878
[346]: https://music.apple.com/us/song/radioactive/1440855760
[347]: https://music.apple.com/us/song/numb-encore/182601389
[348]: https://music.apple.com/us/song/over-the-hills-and-far-away/580707919
[349]: https://music.apple.com/us/song/runaway/1526170283
[350]: https://music.apple.com/us/song/master-of-disguise/60356363
[351]: https://music.apple.com/us/song/tuesday-s-gone/1484424554
[352]: https://music.apple.com/us/song/all-nightmare-long/579368315
[353]: https://music.apple.com/us/song/crash-course-in-brain-surgery/579370562
[354]: https://music.apple.com/us/song/creeping-death/579149040
[355]: https://music.apple.com/us/song/halo-on-fire/1145498742
[356]: https://music.apple.com/us/song/helpless/579370559
[357]: https://music.apple.com/us/song/the-thing-that-should-not-be/1275600555
[358]: https://music.apple.com/us/song/don-t-tell-me-you-love-me/1440767565
[359]: https://music.apple.com/us/song/the-great-southern-trendkill/1144142641
[360]: https://music.apple.com/us/song/under-pressure-feat-david-bowie/1434899944
[361]: https://music.apple.com/us/song/start-me-up/1584840350
[362]: https://music.apple.com/us/song/i-remember-you/1727790519
[363]: https://music.apple.com/us/song/extra-sexual-extraterrestrial-live/1861036472
[364]: https://music.apple.com/us/song/love-song/1440906840
[365]: https://music.apple.com/us/song/the-covenant/1826037358
[366]: https://music.apple.com/us/song/look-out-for-me/1805821337
[367]: https://music.apple.com/us/song/so-far-so-fake/1651691473
[368]: https://music.apple.com/us/song/demonic-depression/1794563071
[369]: https://music.apple.com/us/song/pale-horse/1813978941
[370]: https://music.apple.com/us/song/infinite-source/1825435153
[371]: https://music.apple.com/us/song/nothin/1858411509
[372]: https://music.apple.com/us/song/the-spell/1822843353
[373]: https://music.apple.com/us/song/searchlight/1852100382
[374]: https://music.apple.com/us/song/caramel/1800533447
[375]: https://music.apple.com/us/song/the-end-feat-babymetal-2025-version/1831370163
[376]: https://music.apple.com/us/song/my-only-angel-feat-steve-martin-desert-road-version/1844814769
[377]: https://music.apple.com/us/song/asking-for-a-friend/1847680351
[378]: https://music.apple.com/us/song/as-alive-as-you-need-me-to-be/1826198226
[379]: https://music.apple.com/us/song/my-mind-is-a-mountain/1825435149
[380]: https://music.apple.com/us/song/spit-xxv/1827898136
[381]: https://music.apple.com/us/song/today-s-song/1823739979
[382]: https://music.apple.com/us/song/i-disappear/579145451
[383]: https://music.apple.com/us/song/the-end/1808747032
[384]: https://music.apple.com/us/song/wasting-my-time/311276315
[385]: https://music.apple.com/us/song/emergence/1800533191
[386]: https://music.apple.com/us/song/by-a-monsters-hand/1794563062
[387]: https://music.apple.com/us/song/blur/1735828506
[388]: https://music.apple.com/us/song/the-red/270139035
[389]: https://music.apple.com/us/song/dance-kid-dance/1791163743
[390]: https://music.apple.com/us/song/black-butterfly/1709502277
[391]: https://music.apple.com/us/song/walls-come-down/1751901666
[392]: https://music.apple.com/us/song/what-remains/1757643932
[393]: https://music.apple.com/us/song/pieces/1734457811
[394]: https://music.apple.com/us/song/barely-breathing-feat-against-the-current/1721247250
[395]: https://music.apple.com/us/song/truth/1649793584
[396]: https://music.apple.com/us/song/i-was-alive/1692845771
[397]: https://music.apple.com/us/song/rebel-yell/1728132314
[398]: https://music.apple.com/us/song/this-is-the-way-feat-dmx/1724478365
[399]: https://music.apple.com/us/song/dilemma/1740966503
[400]: https://music.apple.com/us/song/friendly-fire/1745058115
[401]: https://music.apple.com/us/song/s-ck/1726673853
[402]: https://music.apple.com/us/song/devil-you-know/1700433422
[403]: https://music.apple.com/us/song/bad-man/1646032787
[404]: https://music.apple.com/us/song/testify/192816689
[405]: https://music.apple.com/us/song/sex-type-thing/1263219666
[406]: https://music.apple.com/us/song/the-dirt-i-m-buried-in/1650504522
[407]: https://music.apple.com/us/song/blood-in-the-water/1676323506
[408]: https://music.apple.com/us/song/last-resort-reimagined/1694040594
[409]: https://music.apple.com/us/song/best-of-you/334812012
[410]: https://music.apple.com/us/song/somebody-told-me/1440891175
[411]: https://music.apple.com/us/song/nobody/1748150708
[412]: https://music.apple.com/us/song/rescued/1682993467
[413]: https://music.apple.com/us/song/clint-eastwood/850583583
[414]: https://music.apple.com/us/song/no-apologies/1603609535
[415]: https://music.apple.com/us/song/lowest-in-me/1757733530
[416]: https://music.apple.com/us/song/saviour-ii/1819804343
[417]: https://music.apple.com/us/song/beguiled/6780521350
[418]: https://music.apple.com/us/song/i-am-the-weapon/1609130422
[419]: https://music.apple.com/us/song/sabotage/724971921
[420]: https://music.apple.com/us/song/mr-brownstone/1377813295
[421]: https://music.apple.com/us/song/painkiller/207178166
[422]: https://music.apple.com/us/song/symphony-of-destruction/725812418
[423]: https://music.apple.com/us/song/nevermore/573711282
[424]: https://music.apple.com/us/song/bringing-on-the-pain/1671108721
[425]: https://music.apple.com/us/song/electric-head-pt-1-the-agony/1440749910
[426]: https://music.apple.com/us/song/times-like-these/1619239934
[427]: https://music.apple.com/us/song/masterpiece/1640479585
[428]: https://music.apple.com/us/song/tippa-my-tongue/1653954334
[429]: https://music.apple.com/us/song/it-s-a-long-way-to-the-top-if-you-wanna-rock-n-roll/574124819
[430]: https://music.apple.com/us/song/no-one-knows/1443996879
[431]: https://music.apple.com/us/song/if-tomorrow-never-comes/1581509342
[432]: https://music.apple.com/us/song/mystery/1566166549
[433]: https://music.apple.com/us/song/the-steeple/1628825166
[434]: https://music.apple.com/us/song/the-memory-remains-feat-marianne-faithfull/579374219
[435]: https://music.apple.com/us/song/love-dies-young/1538671519
[436]: https://music.apple.com/us/song/planet-zero/1606457287
[437]: https://music.apple.com/us/song/die4u/1583959120
[438]: https://music.apple.com/us/song/father-of-mine/1435638466
[439]: https://music.apple.com/us/song/shotgun-blues/1586126256
[440]: https://music.apple.com/us/song/warrior-feat-travis-barker/1673098884
[441]: https://music.apple.com/us/song/scarlet-cross/1819701705
[442]: https://music.apple.com/us/song/hard-skool/1586724616
[443]: https://music.apple.com/us/song/all-the-small-things/1444118647
[444]: https://music.apple.com/us/song/dude-looks-like-a-lady/1440746591
[445]: https://music.apple.com/us/song/everything-zen/1707602646
[446]: https://music.apple.com/us/song/mars-simula/1545068582
[447]: https://music.apple.com/us/song/unforgettable/1710147292
[448]: https://music.apple.com/us/song/the-devil-s-bleeding-crown/1440847416
[449]: https://music.apple.com/us/song/cherry-pie/198468208
[450]: https://music.apple.com/us/song/nowhere-generation/1556349464
[451]: https://music.apple.com/us/song/wonderwall-remastered/1525933490
[452]: https://music.apple.com/us/song/burden-in-my-hand/1423646243
[453]: https://music.apple.com/us/song/adrenaline/1553258642
[454]: https://music.apple.com/us/song/natural/1437948594
[455]: https://music.apple.com/us/song/right-here-album-version/76773857
[456]: https://music.apple.com/us/song/mercy/1566904908
[457]: https://music.apple.com/us/song/living-the-dream/1487244861
[458]: https://music.apple.com/us/song/breathe-again/1555602517
[459]: https://music.apple.com/us/song/death-by-rock-and-roll/1537709140
[460]: https://music.apple.com/us/song/trials/1577242551
[461]: https://music.apple.com/us/song/runnin-down-a-dream/1440825631
[462]: https://music.apple.com/us/song/waiting-on-a-war/1538671512
[463]: https://music.apple.com/us/song/hometown/1549920531
[464]: https://music.apple.com/us/song/slow-ride-single-version/897227253
[465]: https://music.apple.com/us/song/make-me-bad/193153075
[466]: https://music.apple.com/us/song/learn-to-walk-again/1695703572
[467]: https://music.apple.com/us/song/ohms/1528075505
[468]: https://music.apple.com/us/song/my-way-soon/1543008227
[469]: https://music.apple.com/us/song/somebody-that-i-used-to-know/1522750649
[470]: https://music.apple.com/us/song/heavy-is-the-head-feat-chris-cornell/1585299008
[471]: https://music.apple.com/us/song/i-will-buy-you-a-new-life-re-recorded/461630881
[472]: https://music.apple.com/us/song/purple-haze/357225355
[473]: https://music.apple.com/us/song/bleeding-me-remastered/1806720496
[474]: https://music.apple.com/us/song/buddy-holly/1440869921
[475]: https://music.apple.com/us/song/atlas-falls/1512827486
[476]: https://music.apple.com/us/song/beverly-hills/1440865427
[477]: https://music.apple.com/us/song/radioactive-feat-kendrick-lamar/1445055476
[478]: https://music.apple.com/us/song/lake-of-fire-live-acoustic/1440893065
[479]: https://music.apple.com/us/song/flowers-on-a-grave/1501443858
[480]: https://music.apple.com/us/song/some-kind-of-monster/579379126
[481]: https://music.apple.com/us/song/ghost/1436744863
[482]: https://music.apple.com/us/song/wolf-totem-feat-jacoby-shaddix/1700686242
[483]: https://music.apple.com/us/song/the-unforgiven-iii/579368317
[484]: https://music.apple.com/us/song/ordinary-man-feat-elton-john/1493922866
[485]: https://music.apple.com/us/song/wash-it-all-away/1853963248
[486]: https://music.apple.com/us/song/work/1508238501
[487]: https://music.apple.com/us/song/come-together/1279719442
[488]: https://music.apple.com/us/song/1979/712732634
[489]: https://music.apple.com/us/song/rolling-7s/1482163911
[490]: https://music.apple.com/us/song/inside-out/1487244859
[491]: https://music.apple.com/us/song/back-in-black/574050602
[492]: https://music.apple.com/us/song/thunderstruck/575998661
[493]: https://music.apple.com/us/song/crazy/1440913824
[494]: https://music.apple.com/us/song/walk-this-way/1883816638
[495]: https://music.apple.com/us/song/rooster/157317003
[496]: https://music.apple.com/us/song/would/157317248
[497]: https://music.apple.com/us/song/movies-2026-remastered/6790972970
[498]: https://music.apple.com/us/song/these-days/1427759195
[499]: https://music.apple.com/us/song/fight/1757916760
[500]: https://music.apple.com/us/song/the-comeback-feat-craig-mabbitt-of-escape-the-fate/1577939784
[501]: https://music.apple.com/us/song/dear-maria-count-me-in/502522511
[502]: https://music.apple.com/us/song/weightless-rerecorded/1811919736
[503]: https://music.apple.com/us/song/animals/1533388859
[504]: https://music.apple.com/us/song/doomsday/1485076238
[505]: https://music.apple.com/us/song/cochise/208294752
[506]: https://music.apple.com/us/song/i-am-the-highway/208294980
[507]: https://music.apple.com/us/song/in-between/872815926
[508]: https://music.apple.com/us/song/the-lines/872815923
[509]: https://music.apple.com/us/song/in-this-river/1437331630
[510]: https://music.apple.com/us/song/stillborn-feat-ozzy-osbourne/1437328794
[511]: https://music.apple.com/us/song/iron-man/787845531
[512]: https://music.apple.com/us/song/n-i-b/1198293401
[513]: https://music.apple.com/us/song/livin-on-a-prayer/1422955211
[514]: https://music.apple.com/us/song/you-give-love-a-bad-name/1422954999
[515]: https://music.apple.com/us/song/breath/1440872268
[516]: https://music.apple.com/us/song/the-diary-of-jane-single-version/1440870739
[517]: https://music.apple.com/us/song/lit-up/1440627987
[518]: https://music.apple.com/us/song/sorry/140862708
[519]: https://music.apple.com/us/song/machinehead-remastered/1440946056
[520]: https://music.apple.com/us/song/swallowed-remastered/1443279742
[521]: https://music.apple.com/us/song/gel/1576793480
[522]: https://music.apple.com/us/song/heavy/1576791720
[523]: https://music.apple.com/us/song/my-sacrifice/1440718451
[524]: https://music.apple.com/us/song/with-arms-wide-open/1440631605
[525]: https://music.apple.com/us/song/her-black-wings/1440885826
[526]: https://music.apple.com/us/song/twist-of-cain/1440880563
[527]: https://music.apple.com/us/song/shelf-in-the-room/1423333492
[528]: https://music.apple.com/us/song/the-down-town/1423333760
[529]: https://music.apple.com/us/song/photograph/1440902940
[530]: https://music.apple.com/us/song/rock-of-ages/1440902947
[531]: https://music.apple.com/us/song/down-with-the-sickness/1030601027
[532]: https://music.apple.com/us/song/the-sound-of-silence/1006937459
[533]: https://music.apple.com/us/song/step-up/1440667118
[534]: https://music.apple.com/us/song/tear-away/1440777729
[535]: https://music.apple.com/us/song/bring-me-to-life/1440666111
[536]: https://music.apple.com/us/song/call-me-when-you-re-sober/1440634107
[537]: https://music.apple.com/us/song/from-out-of-nowhere/83385250
[538]: https://music.apple.com/us/song/midlife-crisis/184673165
[539]: https://music.apple.com/us/song/dance-dance/1440799368
[540]: https://music.apple.com/us/song/thnks-fr-th-mmrs/1440787031
[541]: https://music.apple.com/us/song/popular-monster/1487801237
[542]: https://music.apple.com/us/song/the-drug-in-me-is-you/1485046676
[543]: https://music.apple.com/us/song/falling-on/1440767128
[544]: https://music.apple.com/us/song/one-thing/1440630302
[545]: https://music.apple.com/us/song/bad-company/1848984983
[546]: https://music.apple.com/us/song/wrong-side-of-heaven/1853966266
[547]: https://music.apple.com/us/song/learn-to-fly/278229654
[548]: https://music.apple.com/us/song/the-pretender/262743414
[549]: https://music.apple.com/us/song/bad-day/203912551
[550]: https://music.apple.com/us/song/shimmer/158719348
[551]: https://music.apple.com/us/song/bad-habits/1731232203
[552]: https://music.apple.com/us/song/overrated/1647021683
[553]: https://music.apple.com/us/song/awake/1440733697
[554]: https://music.apple.com/us/song/voodoo/1440733692
[555]: https://music.apple.com/us/song/american-idiot/207192732
[556]: https://music.apple.com/us/song/basket-case/1160082180
[557]: https://music.apple.com/us/song/sweet-child-o-mine/1377826892
[558]: https://music.apple.com/us/song/welcome-to-the-jungle/1377826728
[559]: https://music.apple.com/us/song/shamrocks-and-shenanigans/1604628166
[560]: https://music.apple.com/us/song/who-s-the-man/1604619994
[561]: https://music.apple.com/us/song/nice-to-know-you/271792714
[562]: https://music.apple.com/us/song/stellar/187454389
[563]: https://music.apple.com/us/song/save-me/1520495045
[564]: https://music.apple.com/us/song/son-of-a-sinner/1584623553
[565]: https://music.apple.com/us/song/pain/1454825817
[566]: https://music.apple.com/us/song/sweetness/1450030117
[567]: https://music.apple.com/us/song/blue-on-black/316824647
[568]: https://music.apple.com/us/song/cowboy/1433803665
[569]: https://music.apple.com/us/song/only-god-knows-why/1556413814
[570]: https://music.apple.com/us/song/falling-away-from-me/193152917
[571]: https://music.apple.com/us/song/got-the-life/1165631038
[572]: https://music.apple.com/us/song/stairway-to-heaven/580708180
[573]: https://music.apple.com/us/song/whole-lotta-love/580708471
[574]: https://music.apple.com/us/song/american-woman/723338394
[575]: https://music.apple.com/us/song/are-you-gonna-go-my-way/712353794
[576]: https://music.apple.com/us/song/nookie/1440754476
[577]: https://music.apple.com/us/song/rollin-air-raid-vehicle/1440788202
[578]: https://music.apple.com/us/song/in-the-end/590431785
[579]: https://music.apple.com/us/song/numb/590423552
[580]: https://music.apple.com/us/song/glamour-boys/193145121
[581]: https://music.apple.com/us/song/type/158439925
[582]: https://music.apple.com/us/song/sweet-home-alabama/1413948381
[583]: https://music.apple.com/us/song/that-smell/1469583632
[584]: https://music.apple.com/us/song/saint-joe-on-the-school-bus/726131505
[585]: https://music.apple.com/us/song/sherry-fraser/726131508
[586]: https://music.apple.com/us/song/enter-sandman/1572051818
[587]: https://music.apple.com/us/song/nothing-else-matters/1572046444
[588]: https://music.apple.com/us/song/head-like-a-hole/1440941002
[589]: https://music.apple.com/us/song/the-hand-that-feeds/1440852198
[590]: https://music.apple.com/us/song/about-a-girl/669728225
[591]: https://music.apple.com/us/song/lithium/1440783764
[592]: https://music.apple.com/us/song/bark-at-the-moon/192826926
[593]: https://music.apple.com/us/song/no-more-tears/209695373
[594]: https://music.apple.com/us/song/boom/300206617
[595]: https://music.apple.com/us/song/youth-of-the-nation/204672806
[596]: https://music.apple.com/us/song/cemetery-gates/1163813975
[597]: https://music.apple.com/us/song/cowboys-from-hell/1163813971
[598]: https://music.apple.com/us/song/getting-away-with-murder-2020/1546439028
[599]: https://music.apple.com/us/song/scars/1440769664
[600]: https://music.apple.com/us/song/alive/425465319
[601]: https://music.apple.com/us/song/jeremy/425465353
[602]: https://music.apple.com/us/song/nothin-but-a-good-time/716552513
[603]: https://music.apple.com/us/song/talk-dirty-to-me/715750443
[604]: https://music.apple.com/us/song/100-in-a-55/1423252957
[605]: https://music.apple.com/us/song/trenches/634685023
[606]: https://music.apple.com/us/song/blurry/1450664888
[607]: https://music.apple.com/us/song/drift-and-die/1450664885
[608]: https://music.apple.com/us/song/another-one-bites-the-dust/1440650719
[609]: https://music.apple.com/us/song/we-are-the-champions/1440651281
[610]: https://music.apple.com/us/song/mama-weer-all-crazee-now/192486756
[611]: https://music.apple.com/us/song/metal-health-bang-your-head/190737658
[612]: https://music.apple.com/us/song/bulls-on-parade/390538384
[613]: https://music.apple.com/us/song/guerrilla-radio/192816698
[614]: https://music.apple.com/us/song/californication/947688104
[615]: https://music.apple.com/us/song/dani-california/208036515
[616]: https://music.apple.com/us/song/prayer-of-the-refugee/1440858616
[617]: https://music.apple.com/us/song/ready-to-fall/1440858505
[618]: https://music.apple.com/us/song/living-dead-girl/1440845809
[619]: https://music.apple.com/us/song/superbeast/1440845804
[620]: https://music.apple.com/us/song/always/1422924591
[621]: https://music.apple.com/us/song/ladies-and-gentlemen/1422939015
[622]: https://music.apple.com/us/song/remedy/1440645699
[623]: https://music.apple.com/us/song/rise-above-this/1440747418
[624]: https://music.apple.com/us/song/over-your-shoulder/79028233
[625]: https://music.apple.com/us/song/water-s-edge/321977253
[626]: https://music.apple.com/us/song/second-chance/279812225
[627]: https://music.apple.com/us/song/sound-of-madness/279812223
[628]: https://music.apple.com/us/song/fell-on-black-days/1440811476
[629]: https://music.apple.com/us/song/outshined/1440885678
[630]: https://music.apple.com/us/song/it-s-been-awhile/263058565
[631]: https://music.apple.com/us/song/so-far-away/1506599928
[632]: https://music.apple.com/us/song/absolute-zero/563994155
[633]: https://music.apple.com/us/song/through-glass/214473041
[634]: https://music.apple.com/us/song/interstate-love-song/3631594
[635]: https://music.apple.com/us/song/vasoline/1466652602
[636]: https://music.apple.com/us/song/still-waiting/1440665404
[637]: https://music.apple.com/us/song/b-y-o-b/187472354
[638]: https://music.apple.com/us/song/chop-suey/273714640
[639]: https://music.apple.com/us/song/spiders/1810760513
[640]: https://music.apple.com/us/song/dreams-remastered-2026/6765559422
[641]: https://music.apple.com/us/song/linger-remastered-2026/6765559429
[642]: https://music.apple.com/us/song/come-out-and-play-keep-em-separated/1485034810
[643]: https://music.apple.com/us/song/i-can-t-get-no-satisfaction/1706514941
[644]: https://music.apple.com/us/song/gimme-shelter-remastered-2019/1500642840
[645]: https://music.apple.com/us/song/1979-remastered-2012/721224621
[646]: https://music.apple.com/us/song/today/721207666
[647]: https://music.apple.com/us/song/choke/1565468402
[648]: https://music.apple.com/us/song/money/1614722179
[649]: https://music.apple.com/us/song/fell-in-love-with-a-girl/1533513365
[650]: https://music.apple.com/us/song/icky-thump/1533513465
[651]: https://music.apple.com/us/song/closer-to-the-edge/1440839706
[652]: https://music.apple.com/us/song/from-yesterday/1440839345
[653]: https://music.apple.com/us/song/i-hate-everything-about-you/269975544
[654]: https://music.apple.com/us/song/riot/266222076
[655]: https://music.apple.com/us/song/american-girl/1465207805
[656]: https://music.apple.com/us/song/mary-jane-s-last-dance/1465207045
[657]: https://music.apple.com/us/song/open-up-your-eyes/1440911509
[658]: https://music.apple.com/us/song/you-wanted-more/1443797582
[659]: https://music.apple.com/us/song/forty-six-2/1474185342
[660]: https://music.apple.com/us/song/schism/1474185654
[661]: https://music.apple.com/us/song/heathens/1125281487
[662]: https://music.apple.com/us/song/ride/974485805
