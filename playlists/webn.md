# WEBN

Songs played on Cincinnati's 102.7 WEBN (https://webn.iheart.com/) — active/classic rock rotation drawn from recent airplay monitors (SpinCounts, RadioWave Monitor) and the station's published top/recently-played lists. Includes verified WEBN spins from publicly available airplay data, plus popular catalog additions (1–2 per artist) that fit the station's rock format.

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
| 166 | [Back In Black][166] | AC/DC | Back In Black | 1980 | popular catalog addition |
| 167 | [Thunderstruck][167] | AC/DC | Iron Man 2 | 1990 | popular catalog addition |
| 168 | [Crazy][168] | Aerosmith | Big Ones | 1980 | popular catalog addition |
| 169 | [Walk This Way][169] | Aerosmith | Toys In The Attic | 1975 | popular catalog addition |
| 170 | [Rooster][170] | Alice In Chains | Dirt (Remastered) | 1992 | popular catalog addition |
| 171 | [Would?][171] | Alice In Chains | Dirt (Remastered) | 1992 | popular catalog addition |
| 172 | [Movies (2026 Remastered)][172] | Alien Ant Farm | ANThology (Deluxe Edition) | 2001 | popular catalog addition |
| 173 | [These Days][173] | Alien Ant Farm | truANT | 2003 | popular catalog addition |
| 174 | [Fight][174] | All Good Things | Battle Rock 2 | 2014 | popular catalog addition |
| 175 | [The Comeback (feat. Craig Mabbitt of Escape the Fate)][175] | All Good Things | The Comeback (feat. Craig Mabbitt of Escape the Fate) - EP | 2021 | popular catalog addition |
| 176 | [Dear Maria, Count Me In][176] | All Time Low | So Wrong, It's Right (Deluxe Version) | 2007 | popular catalog addition |
| 177 | [Weightless (Rerecorded)][177] | All Time Low | The Forever Sessions, Vol. 1 (Rerecorded) | 2024 | popular catalog addition |
| 178 | [Animals][178] | Architects | For Those That Wish to Exist | 2020 | popular catalog addition |
| 179 | [Doomsday][179] | Architects | Holy Hell | 2018 | popular catalog addition |
| 180 | [Cochise][180] | Audioslave | Audioslave | 2002 | popular catalog addition |
| 181 | [I Am the Highway][181] | Audioslave | Audioslave | 2002 | popular catalog addition |
| 182 | [In Between][182] | Beartooth | Disgusting | 2014 | popular catalog addition |
| 183 | [The Lines][183] | Beartooth | Disgusting | 2014 | popular catalog addition |
| 184 | [In This River][184] | Black Label Society | Skullage | 2005 | popular catalog addition |
| 185 | [Stillborn (feat. Ozzy Osbourne)][185] | Black Label Society | The Blessed Hellride | 2003 | popular catalog addition |
| 186 | [Iron Man][186] | Black Sabbath | Complete Studio Albums 1970-1978 | 1970 | popular catalog addition |
| 187 | [N.I.B.][187] | Black Sabbath | The Ultimate Collection | 1970 | popular catalog addition |
| 188 | [Livin' On a Prayer][188] | Bon Jovi | Slippery When Wet | 1986 | popular catalog addition |
| 189 | [You Give Love a Bad Name][189] | Bon Jovi | Slippery When Wet | 1986 | popular catalog addition |
| 190 | [Breath][190] | Breaking Benjamin | Phobia | 2006 | popular catalog addition |
| 191 | [The Diary of Jane (Single Version)][191] | Breaking Benjamin | Phobia (Explicit Version) | 2006 | popular catalog addition |
| 192 | [Lit Up][192] | Buckcherry | Buckcherry | 1999 | popular catalog addition |
| 193 | [Sorry][193] | Buckcherry | 15 | 2005 | popular catalog addition |
| 194 | [Machinehead (Remastered)][194] | Bush | Sixteen Stone (Remastered) | 1994 | popular catalog addition |
| 195 | [Swallowed (Remastered)][195] | Bush | Razorblade Suitcase (Remastered) | 1996 | popular catalog addition |
| 196 | [Gel][196] | Collective Soul | Collective Soul | 1995 | popular catalog addition |
| 197 | [Heavy][197] | Collective Soul | Dosage | 1999 | popular catalog addition |
| 198 | [My Sacrifice][198] | Creed | Greatest Hits | 2001 | popular catalog addition |
| 199 | [With Arms Wide Open][199] | Creed | Human Clay | 1999 | popular catalog addition |
| 200 | [Her Black Wings][200] | Danzig | Danzig II: Lucifuge | 1990 | popular catalog addition |
| 201 | [Twist of Cain][201] | Danzig | Danzig | 1988 | popular catalog addition |
| 202 | [Shelf in the Room][202] | Days of the New | Days of the New | 1997 | popular catalog addition |
| 203 | [The Down Town][203] | Days of the New | Days of the New | 1997 | popular catalog addition |
| 204 | [Photograph][204] | Def Leppard | Pyromania | 1983 | popular catalog addition |
| 205 | [Rock of Ages][205] | Def Leppard | Pyromania | 1983 | popular catalog addition |
| 206 | [Down with the Sickness][206] | Disturbed | The Sickness | 2000 | popular catalog addition |
| 207 | [The Sound of Silence][207] | Disturbed | Immortalized (Deluxe Edition) | 2015 | popular catalog addition |
| 208 | [Step Up][208] | Drowning Pool | Desensitized | 2004 | popular catalog addition |
| 209 | [Tear Away][209] | Drowning Pool | Sinner | 2001 | popular catalog addition |
| 210 | [Bring Me to Life][210] | Evanescence | Fallen | 2003 | popular catalog addition |
| 211 | [Call Me When You're Sober][211] | Evanescence | The Open Door | 2006 | popular catalog addition |
| 212 | [From Out of Nowhere][212] | Faith No More | The Real Thing | 1989 | popular catalog addition |
| 213 | [Midlife Crisis][213] | Faith No More | Angel Dust | 1992 | popular catalog addition |
| 214 | [Dance, Dance][214] | Fall Out Boy | Believers Never Die - Greatest Hits (Bonus Track Version) | 2005 | popular catalog addition |
| 215 | [Thnks Fr Th Mmrs][215] | Fall Out Boy | Infinity On High | 2007 | popular catalog addition |
| 216 | [Popular Monster][216] | Falling In Reverse | Popular Monster - Single | 2019 | popular catalog addition |
| 217 | [The Drug in Me Is You][217] | Falling In Reverse | The Drug in Me Is You | 2011 | popular catalog addition |
| 218 | [Falling On][218] | Finger Eleven | Them Vs. You Vs. Me (Deluxe Edition) | 2007 | popular catalog addition |
| 219 | [One Thing][219] | Finger Eleven | Finger Eleven | 2003 | popular catalog addition |
| 220 | [Bad Company][220] | Five Finger Death Punch | A Decade of Destruction | 2009 | popular catalog addition |
| 221 | [Wrong Side of Heaven][221] | Five Finger Death Punch | The Wrong Side of Heaven and the Righteous Side of Hell, Vol. 1 (Deluxe Edition) | 2013 | popular catalog addition |
| 222 | [Learn to Fly][222] | Foo Fighters | There Is Nothing Left to Lose | 1999 | popular catalog addition |
| 223 | [The Pretender][223] | Foo Fighters | Echoes, Silence, Patience & Grace | 2007 | popular catalog addition |
| 224 | [Bad Day][224] | Fuel | Something Like Human | 2000 | popular catalog addition |
| 225 | [Shimmer][225] | Fuel | Sunburn | 1998 | popular catalog addition |
| 226 | [Bad Habits][226] | Giovannie and the Hired Guns | Bad Habits | 2017 | popular catalog addition |
| 227 | [Overrated][227] | Giovannie and the Hired Guns | Tejano Punk Boyz | 2022 | popular catalog addition |
| 228 | [Awake][228] | Godsmack | Good Times, Bad Times... Ten Years of Godsmack | 2000 | popular catalog addition |
| 229 | [Voodoo][229] | Godsmack | Good Times, Bad Times... Ten Years of Godsmack | 1997 | popular catalog addition |
| 230 | [American Idiot][230] | Green Day | American Idiot (Deluxe Edition) | 2004 | popular catalog addition |
| 231 | [Basket Case][231] | Green Day | Dookie | 1994 | popular catalog addition |
| 232 | [Sweet Child O' Mine][232] | Guns N' Roses | Appetite For Destruction (Super Deluxe) | 1987 | popular catalog addition |
| 233 | [Welcome To The Jungle][233] | Guns N' Roses | Appetite For Destruction (Super Deluxe) | 1987 | popular catalog addition |
| 234 | [Shamrocks and Shenanigans][234] | House of Pain | House of Pain (Fine Malt Lyrics) | 1992 | popular catalog addition |
| 235 | [Who's the Man][235] | House of Pain | Same as It Ever Was | 1994 | popular catalog addition |
| 236 | [Nice to Know You][236] | Incubus | Morning View | 2001 | popular catalog addition |
| 237 | [Stellar][237] | Incubus | Make Yourself | 1999 | popular catalog addition |
| 238 | [Save Me][238] | Jelly Roll | Save Me - Single | 2020 | popular catalog addition |
| 239 | [Son of a Sinner][239] | Jelly Roll | Ballads of the Broken | 2021 | popular catalog addition |
| 240 | [Pain][240] | Jimmy Eat World | Futures | 2004 | popular catalog addition |
| 241 | [Sweetness][241] | Jimmy Eat World | Bleed American | 2001 | popular catalog addition |
| 242 | [Blue On Black][242] | Kenny Wayne Shepherd | Trouble Is... | 1997 | popular catalog addition |
| 243 | [Cowboy][243] | Kid Rock | Greatest Hits: You Never Saw Coming | 1998 | popular catalog addition || 244 | [Only God Knows Why][244] | Kid Rock | 00's US Hits | 1998 | popular catalog addition || 245 | [Falling Away from Me][245] | Korn | Issues | 1999 | popular catalog addition || 246 | [Got the Life][246] | Korn | Follow The Leader | 1998 | popular catalog addition || 247 | [Stairway to Heaven][247] | Led Zeppelin | Led Zeppelin IV (Remastered) | 1971 | popular catalog addition || 248 | [Whole Lotta Love][248] | Led Zeppelin | Led Zeppelin II (Remastered) | 1969 | popular catalog addition || 249 | [American Woman][249] | Lenny Kravitz | Greatest Hits | 1999 | popular catalog addition || 250 | [Are You Gonna Go My Way][250] | Lenny Kravitz | Are You Gonna Go My Way | 1993 | popular catalog addition || 251 | [Nookie][251] | Limp Bizkit | Significant Other | 1999 | popular catalog addition || 252 | [Rollin' (Air Raid Vehicle)][252] | Limp Bizkit | Greatest Hitz | 2000 | popular catalog addition || 253 | [In the End][253] | LINKIN PARK | Hybrid Theory (Deluxe Edition) | 2000 | popular catalog addition || 254 | [Numb][254] | LINKIN PARK | Meteora (Deluxe Edition) | 2003 | popular catalog addition || 255 | [Glamour Boys][255] | Living Colour | Pride | 1988 | popular catalog addition || 256 | [Type][256] | Living Colour | Time's Up | 1990 | popular catalog addition || 257 | [Sweet Home Alabama][257] | Lynyrd Skynyrd | All Time Greatest Hits | 1974 | popular catalog addition || 258 | [That Smell][258] | Lynyrd Skynyrd | Street Survivors | 1977 | popular catalog addition || 259 | [Saint Joe On the School Bus][259] | Marcy Playground | Marcy Playground | 1997 | popular catalog addition || 260 | [Sherry Fraser][260] | Marcy Playground | Marcy Playground | 1997 | popular catalog addition || 261 | [Enter Sandman][261] | Metallica | Metallica (Deluxe Box Set) | 1991 | popular catalog addition || 262 | [Nothing Else Matters][262] | Metallica | Metallica (Remastered) | 1991 | popular catalog addition || 263 | [Head Like a Hole][263] | Nine Inch Nails | Pretty Hate Machine (Remastered) | 1989 | popular catalog addition || 264 | [The Hand That Feeds][264] | Nine Inch Nails | With Teeth | 2005 | popular catalog addition || 265 | [About a Girl][265] | Nirvana | Bleach (Deluxe Edition) | 1989 | popular catalog addition || 266 | [Lithium][266] | Nirvana | Nevermind | 1991 | popular catalog addition || 267 | [Bark at the Moon][267] | Ozzy Osbourne | Bark at the Moon (Bonus Track Version) | 1983 | popular catalog addition || 268 | [No More Tears][268] | Ozzy Osbourne | No More Tears (Bonus Track Version) | 1991 | popular catalog addition || 269 | [Boom][269] | P.O.D. | Satellite | 2001 | popular catalog addition || 270 | [Youth of the Nation][270] | P.O.D. | Greatest Hits: The Atlantic Years | 2001 | popular catalog addition || 271 | [Cemetery Gates][271] | Pantera | Cowboys from Hell | 1990 | popular catalog addition || 272 | [Cowboys from Hell][272] | Pantera | Cowboys from Hell | 1990 | popular catalog addition || 273 | [Getting Away With Murder (2020)][273] | Papa Roach | 20/20 | 2007 | popular catalog addition || 274 | [Scars][274] | Papa Roach | To Be Loved: The Best of Papa Roach | 2004 | popular catalog addition || 275 | [Alive][275] | Pearl Jam | Ten | 1991 | popular catalog addition || 276 | [Jeremy][276] | Pearl Jam | Ten | 1991 | popular catalog addition || 277 | [Nothin' But a Good Time][277] | Poison | Open Up and Say... Ahh! (20th Anniversary Edition) | 1988 | popular catalog addition || 278 | [Talk Dirty to Me][278] | Poison | The Best of Poison: 20 Years of Rock (Remastered) | 1986 | popular catalog addition || 279 | [100 In a 55][279] | Pop Evil | Lipstick On the Mirror | 2008 | popular catalog addition || 280 | [Trenches][280] | Pop Evil | Onyx (Deluxe Edition) | 2013 | popular catalog addition || 281 | [Blurry][281] | Puddle of Mudd | Come Clean | 2001 | popular catalog addition || 282 | [Drift and Die][282] | Puddle of Mudd | Come Clean | 2001 | popular catalog addition || 283 | [Another One Bites the Dust][283] | Queen | Greatest Hits I, II & III: The Platinum Collection | 1980 | popular catalog addition || 284 | [We Are the Champions][284] | Queen | Greatest Hits I, II & III: The Platinum Collection | 1977 | popular catalog addition || 285 | [Mama Weer All Crazee Now][285] | Quiet Riot | Condition Critical | 1984 | popular catalog addition || 286 | [Metal Health (Bang Your Head)][286] | Quiet Riot | Metal Health (Bonus Track Version) | 1983 | popular catalog addition || 287 | [Bulls On Parade][287] | Rage Against the Machine | Evil Empire | 1996 | popular catalog addition || 288 | [Guerrilla Radio][288] | Rage Against the Machine | The Battle of Los Angeles | 1999 | popular catalog addition || 289 | [Californication][289] | Red Hot Chili Peppers | The Studio Album Collection 1991-2011 | 1999 | popular catalog addition || 290 | [Dani California][290] | Red Hot Chili Peppers | Dani California - EP | 2006 | popular catalog addition || 291 | [Prayer of the Refugee][291] | Rise Against | The Sufferer & the Witness | 2006 | popular catalog addition || 292 | [Ready To Fall][292] | Rise Against | The Sufferer & the Witness | 2006 | popular catalog addition || 293 | [Living Dead Girl][293] | Rob Zombie | Hellbilly Deluxe | 1998 | popular catalog addition || 294 | [Superbeast][294] | Rob Zombie | Hellbilly Deluxe | 1998 | popular catalog addition || 295 | [Always][295] | Saliva | Back Into Your System | 2002 | popular catalog addition || 296 | [Ladies and Gentlemen][296] | Saliva | Moving Forward In Reverse: Greatest Hits | 2006 | popular catalog addition || 297 | [Remedy][297] | Seether | Karma and Effect | 2005 | popular catalog addition || 298 | [Rise Above This][298] | Seether | Finding Beauty In Negative Spaces (Bonus Track Version) | 2007 | popular catalog addition || 299 | [Over Your Shoulder][299] | Seven Mary Three | Orange Ave. | 1998 | popular catalog addition || 300 | [Water's Edge][300] | Seven Mary Three | American Standard | 1995 | popular catalog addition || 301 | [Second Chance][301] | Shinedown | The Sound of Madness (Bonus Track Version) | 2008 | popular catalog addition || 302 | [Sound of Madness][302] | Shinedown | The Sound of Madness (Bonus Track Version) | 2008 | popular catalog addition || 303 | [Fell On Black Days][303] | Soundgarden | Superunknown (20th Anniversary) | 1994 | popular catalog addition || 304 | [Outshined][304] | Soundgarden | Badmotorfinger (Super Deluxe Edition) | 1991 | popular catalog addition || 305 | [It's Been Awhile][305] | Staind | Break the Cycle | 2001 | popular catalog addition || 306 | [So Far Away][306] | Staind | iTunes Originals: Staind | 2003 | popular catalog addition || 307 | [Absolute Zero][307] | Stone Sour | House of Gold & Bones, Pt. 1 | 2012 | popular catalog addition || 308 | [Through Glass][308] | Stone Sour | Come What(ever) May | 2006 | popular catalog addition || 309 | [Interstate Love Song][309] | Stone Temple Pilots | Thank You | 1994 | popular catalog addition || 310 | [Vasoline][310] | Stone Temple Pilots | Purple (Super Deluxe Edition) (2019 Remaster) | 1994 | popular catalog addition || 311 | [In Too Deep][311] | Sum 41 | All Killer, No Filler | 2001 | popular catalog addition || 312 | [Still Waiting][312] | Sum 41 | Does This Look Infected? | 2002 | popular catalog addition || 313 | [B.Y.O.B.][313] | System Of A Down | Mezmerize | 2005 | popular catalog addition || 314 | [Chop Suey!][314] | System Of A Down | Toxicity | 2001 | popular catalog addition || 315 | [Spiders][315] | System Of A Down | System Of A Down | 1998 | popular catalog addition || 316 | [Dreams (Remastered 2026)][316] | The Cranberries | Everybody Else Is Doing It, So Why Can't We? (Remastered 2026) | 1993 | popular catalog addition || 317 | [Linger (Remastered 2026)][317] | The Cranberries | Everybody Else Is Doing It, So Why Can't We? (Remastered 2026) | 1993 | popular catalog addition || 318 | [Come Out and Play (Keep 'Em Separated)][318] | The Offspring | Smash | 1994 | popular catalog addition || 319 | [Pretty Fly (For a White Guy)][319] | The Offspring | Americana | 1998 | popular catalog addition || 320 | [(I Can't Get No) Satisfaction][320] | The Rolling Stones | Forty Licks | 1965 | popular catalog addition || 321 | [Gimme Shelter (Remastered 2019)][321] | The Rolling Stones | Let It Bleed (Remastered 2019) | 1969 | popular catalog addition || 322 | [1979 (Remastered 2012)][322] | The Smashing Pumpkins | Mellon Collie And The Infinite Sadness (2012 Remastered) | 1995 | popular catalog addition || 323 | [Today][323] | The Smashing Pumpkins | Siamese Dream | 1993 | popular catalog addition || 324 | [CHOKE][324] | The Warning | CHOKE - Single | 2021 | popular catalog addition || 325 | [MONEY][325] | The Warning | MONEY - Single | 2022 | popular catalog addition || 326 | [Fell In Love With a Girl][326] | The White Stripes | White Blood Cells | 2001 | popular catalog addition || 327 | [Icky Thump][327] | The White Stripes | Icky Thump | 2007 | popular catalog addition || 328 | [Closer To the Edge][328] | Thirty Seconds to Mars | This Is War | 2009 | popular catalog addition || 329 | [From Yesterday][329] | Thirty Seconds to Mars | A Beautiful Lie | 2005 | popular catalog addition || 330 | [I Hate Everything About You][330] | Three Days Grace | Three Days Grace (Expanded Edition) | 2003 | popular catalog addition || 331 | [Riot][331] | Three Days Grace | One-X (Deluxe Edition) | 2006 | popular catalog addition || 332 | [American Girl][332] | Tom Petty | The Best of Everything: The Definitive Career Spanning Hits Collection 1976-2016 | 1976 | popular catalog addition || 333 | [Mary Jane's Last Dance][333] | Tom Petty | The Best of Everything: The Definitive Career Spanning Hits Collection 1976-2016 | 1993 | popular catalog addition || 334 | [Open Up Your Eyes][334] | Tonic | Lemon Parade | 1996 | popular catalog addition || 335 | [You Wanted More][335] | Tonic | Sugar | 1999 | popular catalog addition || 336 | [Forty Six & 2][336] | TOOL | Ænima | 1996 | popular catalog addition || 337 | [Schism][337] | TOOL | Lateralus | 2001 | popular catalog addition || 338 | [Heathens][338] | twenty one pilots | Suicide Squad: The Album | 2016 | popular catalog addition || 339 | [Ride][339] | twenty one pilots | Blurryface | 2015 | popular catalog addition |
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
[166]: https://music.apple.com/us/song/back-in-black/574050602
[167]: https://music.apple.com/us/song/thunderstruck/575998661
[168]: https://music.apple.com/us/song/crazy/1440913824
[169]: https://music.apple.com/us/song/walk-this-way/1883816638
[170]: https://music.apple.com/us/song/rooster/157317003
[171]: https://music.apple.com/us/song/would/157317248
[172]: https://music.apple.com/us/song/movies-2026-remastered/6790972970
[173]: https://music.apple.com/us/song/these-days/1427759195
[174]: https://music.apple.com/us/song/fight/1757916760
[175]: https://music.apple.com/us/song/the-comeback-feat-craig-mabbitt-of-escape-the-fate/1577939784
[176]: https://music.apple.com/us/song/dear-maria-count-me-in/502522511
[177]: https://music.apple.com/us/song/weightless-rerecorded/1811919736
[178]: https://music.apple.com/us/song/animals/1533388859
[179]: https://music.apple.com/us/song/doomsday/1485076238
[180]: https://music.apple.com/us/song/cochise/208294752
[181]: https://music.apple.com/us/song/i-am-the-highway/208294980
[182]: https://music.apple.com/us/song/in-between/872815926
[183]: https://music.apple.com/us/song/the-lines/872815923
[184]: https://music.apple.com/us/song/in-this-river/1437331630
[185]: https://music.apple.com/us/song/stillborn-feat-ozzy-osbourne/1437328794
[186]: https://music.apple.com/us/song/iron-man/787845531
[187]: https://music.apple.com/us/song/n-i-b/1198293401
[188]: https://music.apple.com/us/song/livin-on-a-prayer/1422955211
[189]: https://music.apple.com/us/song/you-give-love-a-bad-name/1422954999
[190]: https://music.apple.com/us/song/breath/1440872268
[191]: https://music.apple.com/us/song/the-diary-of-jane-single-version/1440870739
[192]: https://music.apple.com/us/song/lit-up/1440627987
[193]: https://music.apple.com/us/song/sorry/140862708
[194]: https://music.apple.com/us/song/machinehead-remastered/1440946056
[195]: https://music.apple.com/us/song/swallowed-remastered/1443279742
[196]: https://music.apple.com/us/song/gel/1576793480
[197]: https://music.apple.com/us/song/heavy/1576791720
[198]: https://music.apple.com/us/song/my-sacrifice/1440718451
[199]: https://music.apple.com/us/song/with-arms-wide-open/1440631605
[200]: https://music.apple.com/us/song/her-black-wings/1440885826
[201]: https://music.apple.com/us/song/twist-of-cain/1440880563
[202]: https://music.apple.com/us/song/shelf-in-the-room/1423333492
[203]: https://music.apple.com/us/song/the-down-town/1423333760
[204]: https://music.apple.com/us/song/photograph/1440902940
[205]: https://music.apple.com/us/song/rock-of-ages/1440902947
[206]: https://music.apple.com/us/song/down-with-the-sickness/1030601027
[207]: https://music.apple.com/us/song/the-sound-of-silence/1006937459
[208]: https://music.apple.com/us/song/step-up/1440667118
[209]: https://music.apple.com/us/song/tear-away/1440777729
[210]: https://music.apple.com/us/song/bring-me-to-life/1440666111
[211]: https://music.apple.com/us/song/call-me-when-you-re-sober/1440634107
[212]: https://music.apple.com/us/song/from-out-of-nowhere/83385250
[213]: https://music.apple.com/us/song/midlife-crisis/184673165
[214]: https://music.apple.com/us/song/dance-dance/1440799368
[215]: https://music.apple.com/us/song/thnks-fr-th-mmrs/1440787031
[216]: https://music.apple.com/us/song/popular-monster/1487801237
[217]: https://music.apple.com/us/song/the-drug-in-me-is-you/1485046676
[218]: https://music.apple.com/us/song/falling-on/1440767128
[219]: https://music.apple.com/us/song/one-thing/1440630302
[220]: https://music.apple.com/us/song/bad-company/1848984983
[221]: https://music.apple.com/us/song/wrong-side-of-heaven/1853966266
[222]: https://music.apple.com/us/song/learn-to-fly/278229654
[223]: https://music.apple.com/us/song/the-pretender/262743414
[224]: https://music.apple.com/us/song/bad-day/203912551
[225]: https://music.apple.com/us/song/shimmer/158719348
[226]: https://music.apple.com/us/song/bad-habits/1731232203
[227]: https://music.apple.com/us/song/overrated/1647021683
[228]: https://music.apple.com/us/song/awake/1440733697
[229]: https://music.apple.com/us/song/voodoo/1440733692
[230]: https://music.apple.com/us/song/american-idiot/207192732
[231]: https://music.apple.com/us/song/basket-case/1160082180
[232]: https://music.apple.com/us/song/sweet-child-o-mine/1377826892
[233]: https://music.apple.com/us/song/welcome-to-the-jungle/1377826728
[234]: https://music.apple.com/us/song/shamrocks-and-shenanigans/1604628166
[235]: https://music.apple.com/us/song/who-s-the-man/1604619994
[236]: https://music.apple.com/us/song/nice-to-know-you/271792714
[237]: https://music.apple.com/us/song/stellar/187454389
[238]: https://music.apple.com/us/song/save-me/1520495045
[239]: https://music.apple.com/us/song/son-of-a-sinner/1584623553
[240]: https://music.apple.com/us/song/pain/1454825817
[241]: https://music.apple.com/us/song/sweetness/1450030117
[242]: https://music.apple.com/us/song/blue-on-black/316824647
[243]: https://music.apple.com/us/song/cowboy/1433803665[244]: https://music.apple.com/us/song/only-god-knows-why/1556413814[245]: https://music.apple.com/us/song/falling-away-from-me/193152917[246]: https://music.apple.com/us/song/got-the-life/1165631038[247]: https://music.apple.com/us/song/stairway-to-heaven/580708180[248]: https://music.apple.com/us/song/whole-lotta-love/580708471[249]: https://music.apple.com/us/song/american-woman/723338394[250]: https://music.apple.com/us/song/are-you-gonna-go-my-way/712353794[251]: https://music.apple.com/us/song/nookie/1440754476[252]: https://music.apple.com/us/song/rollin-air-raid-vehicle/1440788202[253]: https://music.apple.com/us/song/in-the-end/590431785[254]: https://music.apple.com/us/song/numb/590423552[255]: https://music.apple.com/us/song/glamour-boys/193145121[256]: https://music.apple.com/us/song/type/158439925[257]: https://music.apple.com/us/song/sweet-home-alabama/1413948381[258]: https://music.apple.com/us/song/that-smell/1469583632[259]: https://music.apple.com/us/song/saint-joe-on-the-school-bus/726131505[260]: https://music.apple.com/us/song/sherry-fraser/726131508[261]: https://music.apple.com/us/song/enter-sandman/1572051818[262]: https://music.apple.com/us/song/nothing-else-matters/1572046444[263]: https://music.apple.com/us/song/head-like-a-hole/1440941002[264]: https://music.apple.com/us/song/the-hand-that-feeds/1440852198[265]: https://music.apple.com/us/song/about-a-girl/669728225[266]: https://music.apple.com/us/song/lithium/1440783764[267]: https://music.apple.com/us/song/bark-at-the-moon/192826926[268]: https://music.apple.com/us/song/no-more-tears/209695373[269]: https://music.apple.com/us/song/boom/300206617[270]: https://music.apple.com/us/song/youth-of-the-nation/204672806[271]: https://music.apple.com/us/song/cemetery-gates/1163813975[272]: https://music.apple.com/us/song/cowboys-from-hell/1163813971[273]: https://music.apple.com/us/song/getting-away-with-murder-2020/1546439028[274]: https://music.apple.com/us/song/scars/1440769664[275]: https://music.apple.com/us/song/alive/425465319[276]: https://music.apple.com/us/song/jeremy/425465353[277]: https://music.apple.com/us/song/nothin-but-a-good-time/716552513[278]: https://music.apple.com/us/song/talk-dirty-to-me/715750443[279]: https://music.apple.com/us/song/100-in-a-55/1423252957[280]: https://music.apple.com/us/song/trenches/634685023[281]: https://music.apple.com/us/song/blurry/1450664888[282]: https://music.apple.com/us/song/drift-and-die/1450664885[283]: https://music.apple.com/us/song/another-one-bites-the-dust/1440650719[284]: https://music.apple.com/us/song/we-are-the-champions/1440651281[285]: https://music.apple.com/us/song/mama-weer-all-crazee-now/192486756[286]: https://music.apple.com/us/song/metal-health-bang-your-head/190737658[287]: https://music.apple.com/us/song/bulls-on-parade/390538384[288]: https://music.apple.com/us/song/guerrilla-radio/192816698[289]: https://music.apple.com/us/song/californication/947688104[290]: https://music.apple.com/us/song/dani-california/208036515[291]: https://music.apple.com/us/song/prayer-of-the-refugee/1440858616[292]: https://music.apple.com/us/song/ready-to-fall/1440858505[293]: https://music.apple.com/us/song/living-dead-girl/1440845809[294]: https://music.apple.com/us/song/superbeast/1440845804[295]: https://music.apple.com/us/song/always/1422924591[296]: https://music.apple.com/us/song/ladies-and-gentlemen/1422939015[297]: https://music.apple.com/us/song/remedy/1440645699[298]: https://music.apple.com/us/song/rise-above-this/1440747418[299]: https://music.apple.com/us/song/over-your-shoulder/79028233[300]: https://music.apple.com/us/song/water-s-edge/321977253[301]: https://music.apple.com/us/song/second-chance/279812225[302]: https://music.apple.com/us/song/sound-of-madness/279812223[303]: https://music.apple.com/us/song/fell-on-black-days/1440811476[304]: https://music.apple.com/us/song/outshined/1440885678[305]: https://music.apple.com/us/song/it-s-been-awhile/263058565[306]: https://music.apple.com/us/song/so-far-away/1506599928[307]: https://music.apple.com/us/song/absolute-zero/563994155[308]: https://music.apple.com/us/song/through-glass/214473041[309]: https://music.apple.com/us/song/interstate-love-song/3631594[310]: https://music.apple.com/us/song/vasoline/1466652602[311]: https://music.apple.com/us/song/in-too-deep/1440921233[312]: https://music.apple.com/us/song/still-waiting/1440665404[313]: https://music.apple.com/us/song/b-y-o-b/187472354[314]: https://music.apple.com/us/song/chop-suey/273714640[315]: https://music.apple.com/us/song/spiders/1810760513[316]: https://music.apple.com/us/song/dreams-remastered-2026/6765559422[317]: https://music.apple.com/us/song/linger-remastered-2026/6765559429[318]: https://music.apple.com/us/song/come-out-and-play-keep-em-separated/1485034810[319]: https://music.apple.com/us/song/pretty-fly-for-a-white-guy/1440881518[320]: https://music.apple.com/us/song/i-can-t-get-no-satisfaction/1706514941[321]: https://music.apple.com/us/song/gimme-shelter-remastered-2019/1500642840[322]: https://music.apple.com/us/song/1979-remastered-2012/721224621[323]: https://music.apple.com/us/song/today/721207666[324]: https://music.apple.com/us/song/choke/1565468402[325]: https://music.apple.com/us/song/money/1614722179[326]: https://music.apple.com/us/song/fell-in-love-with-a-girl/1533513365[327]: https://music.apple.com/us/song/icky-thump/1533513465[328]: https://music.apple.com/us/song/closer-to-the-edge/1440839706[329]: https://music.apple.com/us/song/from-yesterday/1440839345[330]: https://music.apple.com/us/song/i-hate-everything-about-you/269975544[331]: https://music.apple.com/us/song/riot/266222076[332]: https://music.apple.com/us/song/american-girl/1465207805[333]: https://music.apple.com/us/song/mary-jane-s-last-dance/1465207045[334]: https://music.apple.com/us/song/open-up-your-eyes/1440911509[335]: https://music.apple.com/us/song/you-wanted-more/1443797582[336]: https://music.apple.com/us/song/forty-six-2/1474185342[337]: https://music.apple.com/us/song/schism/1474185654[338]: https://music.apple.com/us/song/heathens/1125281487[339]: https://music.apple.com/us/song/ride/974485805