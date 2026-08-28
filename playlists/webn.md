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
- After edits, keep all track rows numberless

### Scope

- Rock tracks associated with WEBN Cincinnati's active/classic rock format
- Studio recordings preferred; explicit versions preferred when available
- No live-only performances when a studio version exists
- Follow root `PREFERENCES.md` exclusions

| Song | Artist | Album | Year | Note |
|---|---|---|---|---|
| [Voices in My Head][63fe2d70d6] | Falling In Reverse | Voices in My Head - Single | 2022 | ~42 recent spins |
| [Awaken][23edc3ebf3] | Breaking Benjamin | Awaken - Single | 2024 | ~37 recent spins |
| [Afterlife][10c4286044] | Evanescence | Sanctuary | 2025 | ~33 recent spins |
| [Heavy Is the Crown][903178cfe0] | LINKIN PARK | From Zero | 2024 | ~33 recent spins |
| [Even If It Kills Me][3f3b3d86d7] | Papa Roach | Even If It Kills Me - Single | 2024 | ~31 recent spins |
| [I Will Not Break][a83148ee6f] | Disturbed | I Will Not Break - Single | 2025 | ~28 recent spins |
| [Hey You][8b94de228e] | Disturbed | Divisive | 2022 | ~26 recent spins |
| [For the Glory][f95ae60abc] | All Good Things | Machines | 2017 | ~25 recent spins |
| [Liar][2078cd9466] | Jelly Roll | Liar - Single | 2024 | ~23 recent spins |
| [Dead Don’t Die][668c75c06c] | Shinedown | Planet Zero | 2022 | ~17 recent spins |
| [So Called Life][890bbfcf6d] | Three Days Grace | EXPLOSIONS | 2022 | ~14 recent spins |
| [Ramon Ayala][720c635dac] | Giovannie and the Hired Guns | Tejano Punk Boyz | 2021 | ~10 recent spins |
| [Something Wicked][3d7b772852] | Breaking Benjamin | Something Wicked - Single | 2026 | ~9 recent spins |
| [Comedown][4605dedba5] | Bush | Loaded: The Greatest Hits 1994-2023 | 1994 | ~9 recent spins |
| [Free][2e3b6f8cf2] | Beartooth | Free - Single | 2026 | ~8 recent spins |
| [Need a Favor][dbd71266c6] | Jelly Roll | Whitsitt Chapel | 2023 | ~7 recent spins |
| [Broken Mirror][8439e78416] | Architects | The Sky, the Earth & All Between | 2025 | ~6 recent spins |
| [Higher][77786f8748] | Creed | Greatest Hits | 1999 | ~6 recent spins |
| [Bad Guy (feat. Saraya)][ed63cc9dca] | Falling In Reverse | Popular Monster | 2024 | ~6 recent spins |
| [Eye of the Storm][a7c62ffc8b] | Five Finger Death Punch | Eye of the Storm - Single | 2026 | ~6 recent spins |
| [When I Come Around][0d6659fddd] | Green Day | Dookie | 1994 | ~6 recent spins |
| [Even Flow][573cd16dd4] | Pearl Jam | Ten | 1991 | ~6 recent spins |
| [Bother][7dfbc3663e] | Stone Sour | Stone Sour | 2002 | ~6 recent spins |
| [Free Fallin'][432be472fb] | Tom Petty | Greatest Hits | 1989 | ~6 recent spins |
| [If You Could Only See][2f9ff803bc] | Tonic | Lemon Parade | 1996 | ~6 recent spins |
| [Name In Blood][f61596766a] | Black Label Society | Engines of Demolition | 2026 | ~5 recent spins |
| [Glycerine][9b36bfd59d] | Bush | Loaded: The Greatest Hits 1994-2023 | 1994 | ~5 recent spins |
| [December][a09afc90d0] | Collective Soul | Collective Soul | 1995 | ~5 recent spins |
| [Whatever][f299baa46d] | Godsmack | Godsmack | 1997 | ~5 recent spins |
| [The Middle][40740ebc34] | Jimmy Eat World | Bleed American | 2001 | ~5 recent spins |
| [Around the World][42fd6187dd] | Red Hot Chili Peppers | Californication (Remastered) | 1999 | ~5 recent spins |
| [Scar Tissue][a4b3b53a59] | Red Hot Chili Peppers | Californication (Remastered) | 1999 | ~5 recent spins |
| [Cumbersome][f0d0815e72] | Seven Mary Three | American Standard | 1995 | ~5 recent spins |
| [Kerosene][683468ece1] | The Warning | Kerosene - Single | 2026 | ~5 recent spins |
| [Don't Wanna Go Home Tonight][e36c340307] | Three Days Grace | Alienation | 2025 | ~5 recent spins |
| [Janie's Got a Gun][7fb96d893f] | Aerosmith | 20th Century Masters - The Millennium Collection: The Best of Aerosmith | 1989 |  |
| [Down In a Hole][28b1fa299a] | Alice In Chains | Dirt (Remastered) | 1992 |  |
| [Monsters (feat. blackbear)][84efd099c3] | All Time Low | Wake Up, Sunshine | 2020 |  |
| [My Own Prison][f5569be82d] | Creed | My Own Prison | 1997 |  |
| [Touch, Peel and Stand][5be82be993] | Days of the New | Days of the New | 1997 |  |
| [Epic][77828ac1e7] | Faith No More | The Real Thing | 1989 |  |
| [Drive][8c71adac9a] | Incubus | Make Yourself | 1999 |  |
| [I Found Love (When I Found You)][ab6f911c1c] | Kenny Wayne Shepherd | Trouble Is... 25 | 1997 |  |
| [Behind Blue Eyes][e99626d8cd] | Limp Bizkit | Results May Vary | 2003 |  |
| [Free Bird][2db3d1dd7b] | Lynyrd Skynyrd | Pronounced Leh-Nerd Skin-Nerd | 1973 |  |
| [For Whom the Bell Tolls][ed23041eb5] | Metallica | Ride the Lightning (Remastered) (2016 Remastered Version) | 1984 |  |
| [Savior][1821f34414] | Rise Against | Appeal to Reason | 2008 |  |
| [Click Click Boom][3ff20db484] | Saliva | Every Six Seconds | 2001 |  |
| [Spoonman][d8799bfa4f] | Soundgarden | Superunknown (20th Anniversary) | 1994 |  |
| [Creep][98e84f4b6c] | Stone Temple Pilots | Thank You | 1992 |  |
| [Gone Away][30ce6fa57e] | The Offspring | Ixnay on the Hombre | 1997 |  |
| [Paint It, Black][6a0baffd00] | The Rolling Stones | Aftermath (US Version) | 1966 |  |
| [The Kill][24958a912e] | Thirty Seconds to Mars | A Beautiful Lie (20 Year Anniversary) | 2005 |  |
| [Paranoid][075038e885] | Black Sabbath | Paranoid | 1970 |  |
| [Shine][8c118bde13] | Collective Soul | Hints, Allegations & Things Left Unsaid | 1993 |  |
| [The World I Know][1325f78de0] | Collective Soul | Home | 2006 |  |
| [One Last Breath][6934dc6fd6] | Creed | Weathered | 2001 |  |
| [Stupify][57dcee5cda] | Disturbed | The Sickness | 2000 |  |
| [Centuries][30231ac034] | Fall Out Boy | American Beauty / American Psycho | 2014 |  |
| [Paralyzer][30c2db5928] | Finger Eleven | Them Vs. You Vs. Me (Deluxe Edition) | 2007 |  |
| [All My Life][1e715edcc1] | Foo Fighters | One By One (Deluxe Edition) | 2002 |  |
| [I Stand Alone][360d557aed] | Godsmack | Faceless | 2002 |  |
| [Good Riddance (Time of Your Life)][f6141c1f01] | Green Day | The Green Day Collection | 1997 |  |
| [Pardon Me][929f140a1c] | Incubus | Make Yourself | 1999 |  |
| [Black Dog][3b7615da43] | Led Zeppelin | Led Zeppelin IV (Remastered) | 1971 |  |
| [Break Stuff][2a43b099ee] | Limp Bizkit | Significant Other | 1999 |  |
| [My Way][06f589eb2d] | Limp Bizkit | Chocolate Starfish And The Hot Dog Flavored Water | 2000 |  |
| [Sex and Candy][7060abef96] | Marcy Playground | Sex and Candy - Single | 1997 |  |
| [Fade to Black][f2f29e861d] | Metallica | Ride the Lightning (Remastered) (2016 Remastered Version) | 1984 |  |
| [Closer][6d038641d1] | Nine Inch Nails | The Downward Spiral | 1994 |  |
| [Smells Like Teen Spirit][99b172d954] | Nirvana | Nevermind | 1991 |  |
| [Every Rose Has Its Thorn][4ace908db0] | Poison | Open Up and Say... Ahh! (20th Anniversary Edition) | 1988 |  |
| [Footsteps][f656f0a2ea] | Pop Evil | Up | 2015 |  |
| [Dragula][8d1206790f] | Rob Zombie | Hellbilly Deluxe | 1998 |  |
| [Save Me][e698ac38bd] | Shinedown | Us and Them | 2005 |  |
| [Black Hole Sun][6b2a6b4ae1] | Soundgarden | Superunknown (Deluxe Edition) | 1994 |  |
| [Outside][eb94b2cf6a] | Staind | Break the Cycle | 2001 |  |
| [Toxicity][fefdd885f7] | System Of A Down | Toxicity | 2001 |  |
| [Stressed Out][bc2828c38b] | twenty one pilots | Blurryface | 2015 |  |
| [Highway to Hell][42fc514c5e] | AC/DC | Highway to Hell | 1979 |  |
| [Dream On][4f2c93579f] | Aerosmith | Aerosmith | 1973 |  |
| [Sweet Emotion][9139897122] | Aerosmith | Toys In the Attic | 1975 |  |
| [I Stay Away][50a05e79de] | Alice In Chains | Jar of Flies - EP | 1994 |  |
| [Man in the Box][b3cea82da5] | Alice In Chains | Facelift | 1990 |  |
| [Smooth Criminal][324d29862c] | Alien Ant Farm | Smooth Criminal - Single | 2001 |  |
| [Like a Stone][0dd2e6e0bc] | Audioslave | Audioslave | 2002 |  |
| [War Pigs][c25d5646c1] | Black Sabbath | The Ultimate Collection | 1970 |  |
| [Wanted Dead or Alive][e0ea5a207c] | Bon Jovi | Slippery When Wet | 1986 |  |
| [So Cold][9a365523fa] | Breaking Benjamin | We Are Not Alone | 2004 |  |
| [Crazy Bitch][afde09064d] | Buckcherry | 15 | 2005 |  |
| [Mother][6ac7a1285e] | Danzig | Danzig | 1988 |  |
| [Land of Confusion][39654a7610] | Disturbed | Ten Thousand Fists | 2005 |  |
| [Bodies][6a39952ce0] | Drowning Pool | Sinner | 2001 |  |
| [Sugar, We're Goin Down][1c80ddae9c] | Fall Out Boy | Believers Never Die - Greatest Hits (Bonus Track Version) | 2005 |  |
| [Everlong][91c1186ac9] | Foo Fighters | The Colour And The Shape | 1997 |  |
| [Hemorrhage (In My Hands)][1a4abda85e] | Fuel | Something Like Human | 2000 |  |
| [Bulletproof][91dceebe58] | Godsmack | When Legends Rise | 2018 |  |
| [Boulevard of Broken Dreams][8d405d62c0] | Green Day | American Idiot | 2004 |  |
| [Brain Stew][b9acb19d78] | Green Day | The Green Day Collection | 1995 |  |
| [Civil War][1dab74c8cd] | Guns N' Roses | Greatest Hits | 1991 |  |
| [Knockin' On Heaven's Door][2d84bb01b2] | Guns N' Roses | Use Your Illusion II | 1991 |  |
| [Paradise City][b6faffd8c6] | Guns N' Roses | Appetite For Destruction | 1987 |  |
| [Jump Around][500c5931ea] | House of Pain | House of Pain (Fine Malt Lyrics) | 1992 |  |
| [Wish You Were Here][6e8ba1a8e8] | Incubus | Morning View | 2001 |  |
| [Coming Undone][2d58dc9661] | Korn | See You On the Other Side | 2005 |  |
| [Freak On a Leash][7c95c24ef7] | Korn | Follow The Leader | 1998 |  |
| [Immigrant Song][cd3d20bd10] | Led Zeppelin | Led Zeppelin III (Remastered) | 1970 |  |
| [Fly Away][6e194982c3] | Lenny Kravitz | Greatest Hits | 1998 |  |
| [Somewhere I Belong][eb2eb6c9b8] | LINKIN PARK | Meteora (Deluxe Edition) | 2003 |  |
| [Sad But True][57ce44f09f] | Metallica | Metallica (Deluxe Box Set) | 1991 |  |
| [Wherever I May Roam][567cd83b04] | Metallica | Metallica (Deluxe Box Set) | 1991 |  |
| [All Apologies][1a187458ed] | Nirvana | In Utero (20th Anniversary Edition) | 1993 |  |
| [Heart-Shaped Box][78c95c0607] | Nirvana | In Utero (20th Anniversary Edition) | 1993 |  |
| [In Bloom][2ec909ff2c] | Nirvana | Nevermind | 1991 |  |
| [Rape Me][e14bc9c860] | Nirvana | In Utero (20th Anniversary Edition) | 1993 |  |
| [Mama, I'm Coming Home][138881e281] | Ozzy Osbourne | No More Tears (Bonus Track Version) | 1991 |  |
| [Alive][4f6ffc80fa] | P.O.D. | Greatest Hits: The Atlantic Years | 2001 |  |
| [Walk][14074b7243] | Pantera | Vulgar Display of Power | 1992 |  |
| [Last Resort][6c06203d1d] | Papa Roach | Infest | 2000 |  |
| [Black][9fcd744324] | Pearl Jam | Ten | 1991 |  |
| [Yellow Ledbetter][ce80584f11] | Pearl Jam | Jeremy - Single | 1992 |  |
| [Bohemian Rhapsody][6e68a1d7d3] | Queen | Greatest Hits I, II & III: The Platinum Collection | 1975 |  |
| [Killing In The Name][77a5d10883] | Rage Against the Machine | Rage Against The Machine - XX (20th Anniversary Special Edition) | 1992 |  |
| [Black Betty][4f41b7ed28] | Ram Jam | The Very Best of Ram Jam | 1977 |  |
| [Otherside][85c397a5b8] | Red Hot Chili Peppers | Californication (Deluxe Edition) | 1999 |  |
| [Soul to Squeeze][c76cbd6da3] | Red Hot Chili Peppers | Greatest Hits | 1993 |  |
| [Broken][c403094128] | Seether | Disclaimer II | 2002 |  |
| [Fine Again][5c84d7ca8a] | Seether | Disclaimer II | 2002 |  |
| [Young Again][38adadcf72] | Shinedown | EI8HT | 2025 |  |
| [Fade][914ce97859] | Staind | Break the Cycle | 2001 |  |
| [Dead & Bloated][2c595e4aec] | Stone Temple Pilots | Stricken - Metal Hits | 1992 |  |
| [Plush][eb69e8042b] | Stone Temple Pilots | Thank You | 1992 |  |
| [Wicked Garden][9d831ceaa3] | Stone Temple Pilots | Thank You | 1992 |  |
| [Zombie][2834b9b713] | The Cranberries | Stars: The Best of the Cranberries 1992-2002 | 1994 |  |
| [Self Esteem][c013866f82] | The Offspring | Smash | 1994 |  |
| [You're Gonna Go Far, Kid][dc83b0b2d0] | The Offspring | Rise and Fall, Rage and Grace | 2008 |  |
| [Bullet with Butterfly Wings][2220e3eaa1] | The Smashing Pumpkins | Rotten Apples: Greatest Hits | 1995 |  |
| [Seven Nation Army][7d2f791943] | The White Stripes | Elephant | 2003 |  |
| [Animal I Have Become][2100e76aad] | Three Days Grace | One-X (Deluxe Edition) | 2006 |  |
| [Just Like You][99eb841298] | Three Days Grace | Three Days Grace (Expanded Edition) | 2003 |  |
| [Never Too Late][2d4f139da9] | Three Days Grace | One-X (Deluxe Edition) | 2006 |  |
| [I Will Not Bow][ac86b5589f] | Breaking Benjamin | Dear Agony | 2009 |  |
| [Pour Some Sugar On Me][7adf342faa] | Def Leppard | The Story So Far: The Best of Def Leppard (Deluxe Edition) | 1987 |  |
| [Stricken][2a76fd7bcf] | Disturbed | Ten Thousand Fists | 2005 |  |
| [Who Will You Follow][54f1481347] | Evanescence | Sanctuary | 2026 |  |
| [ZOMBIFIED][1f64f5f6f3] | Falling In Reverse | Voices in My Head - Single | 2022 |  |
| [Re-Align][e24fe2b9d5] | Godsmack | Faceless | 2003 |  |
| [Bawitdaba][59032eebd1] | Kid Rock | Devil Without a Cause | 1998 |  |
| [Cult of Personality][ce1100f536] | Living Colour | Cult of Personality EP | 1988 |  |
| [Come As You Are][8b670ffb20] | Nirvana | Nevermind | 1991 |  |
| [Crazy Train][a88a96ca85] | Ozzy Osbourne | Blizzard of Ozz (40th Anniversary Expanded Edition) | 1980 |  |
| [Mr. Crowley][47ace1ed23] | Ozzy Osbourne | Memoirs of a Madman | 1980 |  |
| [Over the Mountain][195381e4b2] | Ozzy Osbourne | Diary of a Madman (Remastered Original Recording) | 1981 |  |
| [Under the Graveyard][d9d92a4604] | Ozzy Osbourne | Under the Graveyard - Single | 2019 |  |
| [Control][175b9f6c70] | Puddle of Mudd | Come Clean | 2001 |  |
| [We Will Rock You][90099fddc8] | Queen | Greatest Hits I, II & III: The Platinum Collection | 1977 |  |
| [Cum On Feel the Noize][771f058c9c] | Quiet Riot | Greatest Hits | 1983 |  |
| [Under the Bridge][61a74d8cf0] | Red Hot Chili Peppers | Blood Sugar Sex Magik (Deluxe Edition) | 1991 |  |
| [Fake It][97e926d2e1] | Seether | Finding Beauty In Negative Spaces (Bonus Track Version) | 2007 |  |
| [Simple Man][f47c30c75a] | Shinedown | Simple Man - Single | 2003 |  |
| [Fat Lip][feb4e04d04] | Sum 41 | All Killer, No Filler | 2001 |  |
| [Aerials][daef409470] | System Of A Down | Toxicity | 2001 |  |
| [The Kids Aren't Alright][eaa97af2ff] | The Offspring | SUPERCHARGED: WORLDWIDE IN '25 | 1998 |  |
| [Sober][b012ad61a3] | TOOL | Undertow | 1993 |  |
| [Afterlife (From the Netflix Series "Devil May Cry")][5f9d7ec2a0] | Evanescence | Afterlife (From the Netflix Series "Devil May Cry") - Single | 2025 | WEBN play history 2026; 24 sampled plays |
| [Darkness Settles In][d498097edf] | Five Finger Death Punch | F8 | 2020 | WEBN play history 2021–2026; 19 sampled plays |
| [Just Pretend][feb2fd79a4] | Bad Omens | THE DEATH OF PEACE OF MIND | 2022 | WEBN play history 2026; 15 sampled plays |
| [My Own Worst Enemy][18eabb19bf] | Lit | A Place In The Sun | 1999 | WEBN play history 2020–2026; 15 sampled plays |
| [Rx (Medicate)][a197c67ec0] | Theory of a Deadman | Wake Up Call | 2017 | WEBN play history 2020–2026; 15 sampled plays |
| [She Talks To Angels][167bd98bf6] | The Black Crowes | Shake Your Money Maker | 1990 | WEBN play history 2020–2026; 10 sampled plays |
| [My Hero][ca3294493b] | Foo Fighters | Greatest Hits | 1997 | WEBN play history 2022–2026; 10 sampled plays |
| [Something In The Way (Remastered)][27751155b1] | Nirvana | Nevermind (30th Anniversary Super Deluxe) | 1991 | WEBN play history 2022–2026; 10 sampled plays |
| [The Man Who Sold the World (Live Acoustic)][7a4c672b45] | Nirvana | MTV Unplugged In New York (Live Acoustic) | 1994 | WEBN play history 2020–2026; 10 sampled plays; no Nirvana studio version exists |
| [Big Empty (2019 Remaster)][4bce9d2a8b] | Stone Temple Pilots | Purple (2019 Remaster) | 1994 | WEBN play history 2020–2026; 10 sampled plays |
| [Kryptonite][930c1ac904] | 3 Doors Down | The Better Life (Deluxe Edition) | 1999 | WEBN play history 2020–2026; 9 sampled plays |
| [Angels Fall][8b6b3f9b13] | Breaking Benjamin | Dark Before Dawn | 2015 | WEBN play history 2021–2026; 9 sampled plays |
| [Ain't No Rest for the Wicked][564a7ad80c] | Cage the Elephant | Cage the Elephant (Expanded Edition) | 2008 | WEBN play history 2023–2026; 9 sampled plays |
| [The Unforgiven][b4d5f8d8e3] | Metallica | Metallica (Deluxe Box Set) | 1991 | WEBN play history 2022–2026; 9 sampled plays |
| [Kill The Noise][4598293199] | Papa Roach | Kill The Noise - Single | 2022 | WEBN play history 2021–2026; 9 sampled plays |
| [Last Kiss][ea757f53f8] | Pearl Jam | rearviewmirror (greatest hits 1991-2003) | 1998 | WEBN play history 2021–2026; 9 sampled plays |
| [For You][408e6bb99e] | Staind | Break the Cycle | 2001 | WEBN play history 2020–2026; 9 sampled plays |
| [Hunger Strike][65c8e7ab8b] | Temple of the Dog | Temple of the Dog | 1991 | WEBN play history 2021–2026; 9 sampled plays |
| [Say It Ain't So][9252d61516] | Weezer | Weezer (Deluxe Edition) | 1994 | WEBN play history 2020–2026; 9 sampled plays |
| [When I'm Gone (2023 Remaster)][b0a8e3d1fe] | 3 Doors Down | Away From The Sun (Deluxe) | 2002 | WEBN play history 2020–2026; 8 sampled plays |
| [Sweet Dreams (Are Made of This)][65f5c851c8] | Marilyn Manson | Smells Like Children | 1995 | WEBN play history 2020–2026; 8 sampled plays |
| [Snow (Hey Oh)][56ace89ad1] | Red Hot Chili Peppers | Stadium Arcadium | 2006 | WEBN play history 2025–2026; 8 sampled plays |
| [MONSTERS][40c741166b] | Shinedown | ATTENTION ATTENTION | 2018 | WEBN play history 2020–2026; 8 sampled plays |
| [I Won't Back Down][79de245cbd] | Tom Petty | Greatest Hits | 1989 | WEBN play history 2020–2026; 8 sampled plays |
| [Here I Go Again (1987 Version / 2017 Remaster)][3591d91de9] | Whitesnake | Whitesnake (30th Anniversary Super Deluxe Edition) | 1987 | WEBN play history 2025–2026; 8 sampled plays |
| [Starless][57a9933922] | A Perfect Circle | Starless - Single | 2026 | WEBN play history 2026; 7 sampled plays |
| [You Shook Me All Night Long][0f99cf5e8d] | AC/DC | Back In Black | 1980 | WEBN play history 2021–2026; 7 sampled plays |
| [Sail][35931391af] | AWOLNATION | Megalithic Symphony (10th Anniversary Deluxe Edition) | 2010 | WEBN play history 2025–2026; 7 sampled plays |
| [Comfortably Numb][6b56b5b37e] | Pink Floyd | A Foot In the Door: The Best of Pink Floyd | 1980 | WEBN play history 2020–2026; 7 sampled plays |
| [When Legends Rise][336e790ded] | Godsmack | When Legends Rise | 2018 | WEBN play history 2020–2023; 7 sampled plays |
| [Keep Away][ccdbc2cde4] | Godsmack | Godsmack | 1997 | WEBN play history 2021–2026; 6 sampled plays |
| [Feel Good Inc][3dadef5689] | Gorillaz | Feel Good Inc - EP | 2005 | WEBN play history 2025–2026; 6 sampled plays |
| [Hurt][12f86d1c83] | Johnny Cash | Unearthed (Box Set) | 2002 | WEBN play history 2023–2026; 6 sampled plays |
| [What I've Done][206448ad0b] | LINKIN PARK | Minutes to Midnight (Deluxe Edition) | 2007 | WEBN play history 2022–2026; 6 sampled plays |
| [Lightning Crashes][d18a69a01b] | LIVE | Throwing Copper | 1994 | WEBN play history 2021–2026; 6 sampled plays |
| [Master of Puppets][4684f1a604] | Metallica | Master of Puppets (Remastered) | 1986 | WEBN play history 2021–2026; 6 sampled plays |
| [Better Man][b9ba2b1c94] | Pearl Jam | rearviewmirror (greatest hits 1991-2003) | 1994 | WEBN play history 2020–2026; 6 sampled plays |
| [Headstrong][4b6ec77365] | Trapt | Trapt | 2002 | WEBN play history 2020–2026; 6 sampled plays |
| [More Human Than Human][12dcea8d4f] | White Zombie | Astro Creep: 2000 Songs of Love, Destruction and Other Synthetic Delusions of the Electric Head | 1995 | WEBN play history 2025–2026; 6 sampled plays |
| [Screaming Suicide][a405f3bc8b] | Metallica | 72 Seasons | 2023 | WEBN play history 2024–2025; 6 sampled plays |
| [King Nothing (Remastered)][604a234597] | Metallica | Load (Remastered Deluxe Box Set) | 1996 | WEBN play history 2020–2025; 6 sampled plays |
| [Can't Stop][1d5ec3130b] | Red Hot Chili Peppers | By the Way (Deluxe Edition) | 2002 | WEBN play history 2020–2025; 6 sampled plays |
| [Patience][fc8757fdcc] | Chris Cornell | Patience - Single | 2020 | WEBN play history 2020–2022; 6 sampled plays |
| [Hail to the King][c45c612fe7] | Avenged Sevenfold | Hail to the King | 2013 | WEBN play history 2022–2026; 5 sampled plays |
| [Hard to Handle][a20cd48d2f] | The Black Crowes | Shake Your Money Maker (30th Anniversary Deluxe Edition) | 1990 | WEBN play history 2020–2026; 5 sampled plays |
| [Cold][8f0564008c] | Crossfade | Cold - Single | 2003 | WEBN play history 2025–2026; 5 sampled plays |
| [Going Under][b84ccdcb8a] | Evanescence | Fallen | 2003 | WEBN play history 2022–2026; 5 sampled plays |
| [Straight Out Of Line (2024 Remaster)][8c12f5b9a8] | Godsmack | Faceless (2024 Remaster) | 2003 | WEBN play history 2021–2026; 5 sampled plays |
| [Longview][adb4f74f79] | Green Day | International Superhits! | 1994 | WEBN play history 2022–2026; 5 sampled plays |
| [Lost][6fb6a6cba6] | LINKIN PARK | Lost Demos | 2023 | WEBN play history 2023–2026; 5 sampled plays |
| [One Step Closer][c0343402f8] | LINKIN PARK | Hybrid Theory | 2000 | WEBN play history 2020–2026; 5 sampled plays |
| [One][52b43b97d0] | Metallica | ...And Justice for All (Remastered) | 1988 | WEBN play history 2025–2026; 5 sampled plays |
| [Turn the Page][22beade348] | Metallica | Garage Inc. | 1998 | WEBN play history 2025–2026; 5 sampled plays |
| [I Don't Know][f333a4ecc8] | Ozzy Osbourne | Blizzard of Ozz (40th Anniversary Expanded Edition) | 1980 | WEBN play history 2026; 5 sampled plays |
| [See U in Hell (From the Netflix Series "Devil May Cry")][73e4b115c9] | Papa Roach & Hanumankind | See U in Hell (From the Netflix Series "Devil May Cry") - Single | 2026 | WEBN play history 2026; 5 sampled plays |
| [Daughter (Remastered)][2a07015b22] | Pearl Jam | Vs. | 1993 | WEBN play history 2026; 5 sampled plays |
| [Closing Time][faa81cda01] | Semisonic | 20 #1's: One Hit Wonders | 1998 | WEBN play history 2022–2026; 5 sampled plays |
| [Duality][0af8da633f] | Slipknot | Vol. 3 The Subliminal Verses | 2004 | WEBN play history 2021–2026; 5 sampled plays |
| [Meant to Live][0ab5c8de35] | Switchfoot | The Beautiful Letdown (Deluxe Version) | 2003 | WEBN play history 2026; 5 sampled plays |
| [Kill Me Fast][9e9e0faf08] | Three Days Grace | Alienation | 2025 | archived WEBN top songs 2025–2026; 5 snapshots |
| [Killing Fields][0c1283bf26] | Shinedown | Killing Fields - Single | 2025 | WEBN play history 2025; 5 sampled plays |
| [BRAINDEAD (feat. Toby Morse)][4ef1d72d8b] | Papa Roach | BRAINDEAD (feat. Toby Morse) - Single | 2025 | WEBN play history 2025; 5 sampled plays |
| [Song 2 (2012 Remaster)][e9d13ae3a9] | Blur | Blur | 1997 | WEBN play history 2020–2024; 5 sampled plays |
| [Nightmare][2586538880] | Avenged Sevenfold | Nightmare | 2010 | WEBN play history 2021–2026; 4 sampled plays |
| [Send the Pain Below][1304e60c53] | Chevelle | Wonder What's Next (Expanded Edition) | 2002 | WEBN play history 2020–2026; 4 sampled plays |
| [Prayer][a0108eb317] | Disturbed | Believe | 2002 | WEBN play history 2021–2026; 4 sampled plays |
| [Lose Yourself][0e5064a15b] | Eminem | 8 Mile (Music From And Inspired By The Motion Picture) | 2002 | WEBN play history 2025–2026; 4 sampled plays |
| [Believer][bc829f7b87] | Imagine Dragons | Evolve | 2017 | WEBN play history 2023–2026; 4 sampled plays |
| [Faint][3e89b2a3bd] | LINKIN PARK | Meteora | 2003 | WEBN play history 2020–2026; 4 sampled plays |
| [Another Brick In the Wall, Pt. 2][0e43915b77] | Pink Floyd | The Wall | 1979 | WEBN play history 2023–2026; 4 sampled plays |
| [You're Going Down][e87fe665c8] | SICK PUPPIES | Tri-Polar | 2009 | WEBN play history 2024–2026; 4 sampled plays |
| [The Kill (Bury Me)][b9a96bed53] | Thirty Seconds to Mars | A Beautiful Lie | 2005 | WEBN play history 2025–2026; 4 sampled plays |
| [We're Not Gonna Take It][a4818506c4] | Twisted Sister | Stay Hungry | 1984 | WEBN play history 2020–2026; 4 sampled plays |
| [MORE THAN HATE][c5e069e160] | Bilmuri | MORE THAN HATE - Single | 2025 | WEBN play history 2025; 4 sampled plays |
| [Kashmir][668564a514] | Led Zeppelin | Physical Graffiti (Deluxe Edition) | 1975 | WEBN play history 2020–2023; 4 sampled plays |
| [Holiday][e60cdabffc] | Green Day | American Idiot | 2004 |  |
| [Dirty Deeds Done Dirt Cheap][9aec9fba0a] | AC/DC | Dirty Deeds Done Dirt Cheap | 1976 | WEBN play history 2020–2022; 4 sampled plays |
| [Eye of the Storm][47d148cb5b] | Pop Evil | Eye of the Storm - Single | 2022 | archived WEBN top songs 2022; 4 snapshots |
| [Black Summer][7cda1f673c] | Red Hot Chili Peppers | Unlimited Love | 2022 | archived WEBN top songs 2022; 4 snapshots |
| [Give It Away][31200825ac] | Red Hot Chili Peppers | Blood Sugar Sex Magik | 1991 | WEBN play history 2020–2022; 4 sampled plays |
| [Help][9e121e025c] | Papa Roach | Crooked Teeth (Deluxe) | 2017 | WEBN play history 2020–2021; 4 sampled plays |
| [Here Without You][deedf9db51] | 3 Doors Down | Away from the Sun | 2002 | WEBN play history 2026; 3 sampled plays |
| [War Pigs / Luke's Wall][3cfbc4ca5c] | Black Sabbath | Paranoid | 1970 | WEBN play history 2024–2026; 3 sampled plays |
| [Voices][ea928ce7ba] | Disturbed | The Sickness | 2000 | WEBN play history 2025–2026; 3 sampled plays |
| [BURN IT DOWN][519023dd4f] | LINKIN PARK | LIVING THINGS | 2012 | WEBN play history 2022–2026; 3 sampled plays |
| [New Divide][053746421f] | LINKIN PARK | Papercuts (Singles Collection 2000-2023) | 2009 | WEBN play history 2025–2026; 3 sampled plays |
| [The Beautiful People][b35f5750a2] | Marilyn Manson | Antichrist Superstar | 1996 | WEBN play history 2025–2026; 3 sampled plays |
| [Until It Sleeps (Remastered)][1a83a25e78] | Metallica | Load (Remastered) | 1996 | WEBN play history 2021–2026; 3 sampled plays |
| [Not Falling][1e628e1180] | Mudvayne | The End of All Things to Come | 2001 | WEBN play history 2025–2026; 3 sampled plays |
| [Hurt][7283d8a795] | Nine Inch Nails | The Downward Spiral | 1994 | WEBN play history 2026; 3 sampled plays |
| [Brain Damage][89a055f1ef] | Pink Floyd | The Dark Side of the Moon (50th Anniversary) [Remastered] | 1973 | WEBN play history 2026; 3 sampled plays |
| [A Symptom Of Being Human][ab69697b6a] | Shinedown | Planet Zero | 2022 | WEBN play history 2025–2026; 3 sampled plays |
| [For I Am Death][124dd10cb6] | The Pretty Reckless | For I Am Death - Single | 2025 | WEBN play history 2025; 3 sampled plays |
| [ONE MORE TIME][e494ca3150] | blink-182 | ONE MORE TIME... | 2023 | WEBN play history 2024–2025; 3 sampled plays |
| [Stuck in My Head][8817125acf] | Sleep Theory | Stuck in My Head - Single | 2025 | archived WEBN top songs 2025; 3 snapshots |
| [T.N.T.][9b742259d5] | AC/DC | High Voltage | 1975 | WEBN play history 2021–2024; 3 sampled plays |
| [Wake Me Up When September Ends][c473308dbe] | Green Day | American Idiot | 2004 | WEBN play history 2022–2024; 3 sampled plays |
| [Are You Ready][a48f6c1a25] | Disturbed | Evolution (Deluxe Edition) | 2018 | WEBN play history 2020–2023; 3 sampled plays |
| [Nobody Wants to Die][fa6bb23975] | Rival Sons | DARKFIGHTER | 2022 | archived WEBN top songs 2023; 3 snapshots |
| [How Did You Love][c052f755d5] | Shinedown | Threat to Survival | 2015 | WEBN play history 2020–2022; 3 sampled plays |
| [By the Way][4215da5de1] | Red Hot Chili Peppers | By the Way (Deluxe Edition) | 2002 | WEBN play history 2021–2022; 3 sampled plays |
| [Like A Villain][cd03fcfb65] | Bad Omens | THE DEATH OF PEACE OF MIND | 2022 | archived WEBN top songs 2022; 3 snapshots |
| [Dead Inside][cc70fecc0e] | David Draiman, Disturbed & Nita Strauss | Dead Inside - Single | 2021 | WEBN play history 2022; 3 sampled plays |
| [Rest In Peace][e01c25a87f] | Dorothy | Rest In Peace - Single | 2022 | archived WEBN top songs 2022; 3 snapshots |
| [For Those About to Rock (We Salute You)][47a50545ab] | AC/DC | For Those About to Rock (We Salute You) | 1981 | WEBN play history 2021–2022; 3 sampled plays |
| [Dead Man Walking][5d79e7bdb0] | Jelly Roll | Ballads of the Broken | 2021 | archived WEBN top songs 2022; 3 snapshots |
| [Livin' On The Edge][cd0bd4fcf2] | Aerosmith | Get A Grip | 1993 | WEBN play history 2021–2022; 3 sampled plays |
| [Lifeline][bc0560e6bd] | Bad Wolves | Dear Monsters | 2021 | archived WEBN top songs 2021; 3 snapshots |
| [Monkey Wrench][f8a52ef5df] | Foo Fighters | Greatest Hits | 1997 | WEBN play history 2020–2021; 3 sampled plays |
| [Dazed and Confused][ded72076bb] | Led Zeppelin | Led Zeppelin (Remastered) | 1969 | WEBN play history 2020–2021; 3 sampled plays |
| [Shot in the Dark][41f1497697] | AC/DC | POWER UP | 2020 | WEBN play history 2020–2021; 3 sampled plays |
| [Making A Fire][9c6aa66b37] | Foo Fighters | Medicine At Midnight | 2021 | archived WEBN top songs 2021; 3 snapshots |
| [Flagpole Sitta][815a30b848] | Harvey Danger | Where Have All the Merrymakers Gone? | 1998 | WEBN play history 2020–2021; 3 sampled plays |
| [Rock You Like a Hurricane][d1ab3fdd92] | Scorpions | Deadly Sting: The Mercury Years | 1984 | WEBN play history 2020–2021; 3 sampled plays |
| [Shame Shame][def0f20e5c] | Foo Fighters | Medicine At Midnight | 2020 | archived WEBN top songs 2020–2021; 3 snapshots |
| [Distance][28f0dd3683] | Mammoth | Distance - Single | 2020 | archived WEBN top songs 2020–2021; 3 snapshots |
| [Hells Bells][8569e88864] | AC/DC | Back In Black | 1980 | WEBN play history 2020–2021; 3 sampled plays |
| [The Vengeful One][160ede491e] | Disturbed | Immortalized (Deluxe Edition) | 2015 | WEBN play history 2020; 3 sampled plays |
| [A Little Bit Off][c06c8d9101] | Five Finger Death Punch | F8 | 2020 | WEBN play history 2020; 3 sampled plays |
| [All Within My Hands][2bf9173d9b] | Metallica | St. Anger | 2003 | WEBN play history 2020; 3 sampled plays |
| [Far Behind][84c9814d41] | Candlebox | Candlebox | 1993 | WEBN play history 2026; 2 sampled plays |
| [Insane In the Brain][e304527bf8] | Cypress Hill | Black Sunday | 1993 | WEBN play history 2025–2026; 2 sampled plays |
| [Bleed It Out][38d5dab50c] | LINKIN PARK | Minutes to Midnight (Deluxe Edition) | 2007 | WEBN play history 2021–2026; 2 sampled plays |
| [Crawling][3b081063ba] | LINKIN PARK | Hybrid Theory | 2000 | WEBN play history 2026; 2 sampled plays |
| [Lying from You][43d4b5b503] | LINKIN PARK | Meteora (Deluxe Edition) | 2003 | WEBN play history 2026; 2 sampled plays |
| [Hardwired][cd24ab080a] | Metallica | Hardwired…To Self-Destruct (Deluxe Edition) | 2016 | WEBN play history 2022–2026; 2 sampled plays |
| [Kickstart My Heart][4785f21022] | Mötley Crüe | The Dirt Soundtrack | 1989 | WEBN play history 2021–2026; 2 sampled plays |
| [Gotta Get Away][1d0e088724] | The Offspring | Smash (Remastered) | 1994 | WEBN play history 2020–2026; 2 sampled plays |
| [Flying High Again][d5b803ad98] | Ozzy Osbourne | Diary of a Madman (40th Anniversary Expanded Edition) | 1981 | WEBN play history 2026; 2 sampled plays |
| [45][0e5a26a11f] | Shinedown | Leave a Whisper (Deluxe Edition) | 2003 | WEBN play history 2026; 2 sampled plays |
| [Jumper][33f7e99c4e] | Third Eye Blind | Third Eye Blind | 1997 | WEBN play history 2026; 2 sampled plays |
| [Everything Ends][7f39da8d96] | Architects | The Sky, the Earth & All Between | 2025 | archived WEBN top songs 2026; 2 snapshots |
| [Crawl Back To My Coffin][693f0406e5] | Dayseeker | Creature In The Black Night | 2025 | archived WEBN top songs 2026; 2 snapshots |
| [MAGNETIC][75fa33a73a] | Wage War | MAGNETIC - Single | 2024 | archived WEBN top songs 2026; 2 snapshots |
| [Breaking the Habit][b5256ddd06] | LINKIN PARK | Meteora | 2003 | WEBN play history 2021–2026; 2 sampled plays |
| [Specter][401b96d41e] | Bad Omens | Specter - Single | 2025 | WEBN play history 2025; 2 sampled plays |
| [Bored][9f082d98cb] | Return to Dust | Speak Like the Dead - EP | 2025 | WEBN play history 2025; 2 sampled plays |
| [I Refuse (feat. Maria Brink) (2025 VERSION)][06df83ce91] | Five Finger Death Punch | BEST OF (Volume 1) | 2025 | archived WEBN top songs 2025; 2 snapshots |
| [FREEFALL][ac8ee76a4a] | NOTHING MORE | CARNAL | 2024 | archived WEBN top songs 2025; 2 snapshots |
| [Apologies][b84630a300] | Three Days Grace | Alienation | 2025 | archived WEBN top songs 2025; 2 snapshots |
| [Water Song / Janie's Got a Gun][6ed20b4e6c] | Aerosmith | Pump | 1989 | WEBN play history 2025; 2 sampled plays |
| [Mayday][535f40aeb4] | Three Days Grace | Alienation | 2024 | archived WEBN top songs 2025; 2 snapshots |
| [I Am Machine][b41836f8b5] | Three Days Grace | Human | 2014 | WEBN play history 2022–2024; 2 sampled plays |
| [November Rain][d70bad9018] | Guns N' Roses | Use Your Illusion I | 1991 | WEBN play history 2023–2024; 2 sampled plays |
| [Too Far Gone?][8066c1b191] | Metallica | 72 Seasons | 2023 | archived WEBN top songs 2023; 2 snapshots |
| [I Write Sins Not Tragedies][de3ec0ff23] | Panic! At the Disco | A Fever You Can't Sweat Out | 2005 | WEBN play history 2021–2023; 2 sampled plays |
| [Beyond][3552874fdb] | Corey Taylor | CMF2 | 2023 | archived WEBN top songs 2023; 2 snapshots |
| [Unstoppable][721241095b] | Disturbed | Divisive | 2022 | archived WEBN top songs 2023; 2 snapshots |
| [Are You Gonna Be My Girl][47fdc03632] | Jet | Get Born (Deluxe Edition) | 2003 | WEBN play history 2020–2023; 2 sampled plays |
| [Down Rodeo][92e9c99ba3] | Rage Against the Machine | Evil Empire | 1996 | WEBN play history 2022–2023; 2 sampled plays |
| [Loser][01836177ce] | Beck | Loser - EP | 1993 | WEBN play history 2021–2023; 2 sampled plays |
| [You Don't Know How It Feels][1a37ce99e8] | Tom Petty | Wildflowers | 1994 | WEBN play history 2023; 2 sampled plays |
| [Shoot to Thrill][31709f4306] | AC/DC | Back In Black | 1980 | WEBN play history 2020–2023; 2 sampled plays |
| [Daylight][18ce940c3a] | Shinedown | Planet Zero | 2022 | WEBN play history 2022; 2 sampled plays |
| [Wasteland][9b80d3e96f] | 10 Years | The Autumn Effect (Bonus Track Version) | 2005 | WEBN play history 2022; 2 sampled plays |
| [Fight for Your Right][dd5222248d] | Beastie Boys | Licensed to Ill | 1986 | WEBN play history 2020–2022; 2 sampled plays |
| [Face Down][baf6c8539d] | The Red Jumpsuit Apparatus | Don't You Fake It | 2006 | WEBN play history 2022; 2 sampled plays |
| [Loser][9a45e6e31d] | 3 Doors Down | The Better Life (Deluxe Edition) | 2000 | WEBN play history 2022; 2 sampled plays |
| [Panama][d9115e77ac] | Van Halen | Best of Van Halen, Vol. 1 | 1984 | WEBN play history 2021–2022; 2 sampled plays |
| [No One Like You][a0f565c4c6] | Scorpions | Blackout | 1982 | WEBN play history 2020–2021; 2 sampled plays |
| [Trippin' On a Hole In a Paper Heart][518bdde4bf] | Stone Temple Pilots | Tiny Music...Songs from the Vatican Gift Shop | 1996 | WEBN play history 2021; 2 sampled plays |
| [Realize][20ffe34e94] | AC/DC | POWER UP | 2020 | archived WEBN top songs 2021; 2 snapshots |
| [No Sleep Till Brooklyn][6f690104b8] | Beastie Boys | Solid Gold Hits | 1986 | WEBN play history 2020–2021; 2 sampled plays |
| [Ramble On][a1b6c818e6] | Led Zeppelin | Led Zeppelin II (Remastered) | 1969 | WEBN play history 2021; 2 sampled plays |
| [Breaking Down][7b80203ac8] | I Prevail | TRAUMA | 2019 | WEBN play history 2021; 2 sampled plays |
| [Remember When][e939e558e8] | Bad Wolves | Disobey | 2018 | WEBN play history 2020–2021; 2 sampled plays |
| [All Along the Watchtower][bbb6efc86c] | The Jimi Hendrix Experience | Electric Ladyland | 1968 | WEBN play history 2020; 2 sampled plays |
| [Dangerous][72abfdeba0] | Seether | Si Vis Pacem, Para Bellum | 2020 | WEBN play history 2020; 2 sampled plays |
| [Santa Monica (Re-recorded - Slowed + Reverb)][e2086b57a8] | Everclear | Santa Monica (Re-Recorded - Sped Up) - Single | 2023 | WEBN play history 2020; 2 sampled plays |
| [Learning to Fly][e5e92dda9b] | Tom Petty & The Heartbreakers | Greatest Hits | 1991 | WEBN play history 2020; 2 sampled plays |
| [Superblood Wolfmoon][3643f21187] | Pearl Jam | Gigaton | 2020 | archived WEBN top songs 2020; 2 snapshots |
| [Sickness][7bbc1172c5] | Grey Daze | Amends | 2020 | WEBN play history 2020; 2 sampled plays |
| [Love In an Elevator][2093835e5e] | Aerosmith | Big Ones | 1989 | WEBN play history 2026; 1 sampled play |
| [Beacon][4bf3d6e219] | Blessed Black | Seasons:, Vol. 3 - Single | 2026 | WEBN play history 2026; 1 sampled play |
| [Manufactured Extinct][614ee134f2] | Cattle Decapitation | The Anthropocene Extinction | 2015 | WEBN play history 2026; 1 sampled play |
| [Perfect Strangers][3c9ca3ed62] | Deep Purple | Perfect Strangers | 1984 | WEBN play history 2026; 1 sampled play |
| [Just Got Lucky][2333655738] | Dokken | Tooth and Nail | 1984 | WEBN play history 2026; 1 sampled play |
| [New Messiah][1b4f2a175f] | Fear Factory | The Industrialist | 2012 | WEBN play history 2026; 1 sampled play |
| [Hunter’s Moon][7736a8c8c8] | Ghost | IMPERA | 2021 | WEBN play history 2026; 1 sampled play |
| [It's So Easy][70d7a53b26] | Guns N' Roses | Appetite For Destruction | 1987 | WEBN play history 2026; 1 sampled play |
| [This Is Now][57771385ac] | Hatebreed | The Rise of Brutality | 2003 | WEBN play history 2026; 1 sampled play |
| [Radioactive][ad925e1c73] | Imagine Dragons | Night Visions (Deluxe Version) | 2012 | WEBN play history 2026; 1 sampled play |
| [Numb / Encore][fbac549980] | JAŸ-Z & LINKIN PARK | Collision Course - EP | 2004 | WEBN play history 2026; 1 sampled play |
| [Over the Hills and Far Away][606a381c18] | Led Zeppelin | Houses of the Holy (Remastered) | 1973 | WEBN play history 2026; 1 sampled play |
| [Runaway][fd9c249b63] | LINKIN PARK | Hybrid Theory (20th Anniversary Edition) | 2000 | WEBN play history 2026; 1 sampled play |
| [Master of Disguise][4c5409ac09] | Lizzy Borden | The Best of Lizzy Borden | 1994 | WEBN play history 2026; 1 sampled play |
| [Tuesday's Gone][de4eb17e9e] | Lynyrd Skynyrd | Playlist Plus | 1973 | WEBN play history 2026; 1 sampled play |
| [All Nightmare Long][461656014a] | Metallica | Death Magnetic | 2008 | WEBN play history 2026; 1 sampled play |
| [Crash Course In Brain Surgery][be1729fd1f] | Metallica | Garage Inc. | 1987 | WEBN play history 2026; 1 sampled play |
| [Creeping Death][76fee08b8d] | Metallica | Ride the Lightning (Remastered) [2016 Remastered Version] | 1984 | WEBN play history 2026; 1 sampled play |
| [Halo On Fire][b76edd020d] | Metallica | Hardwired…To Self-Destruct (Deluxe Edition) | 2016 | WEBN play history 2026; 1 sampled play |
| [Helpless][6885cdb69d] | Metallica | Garage Inc. | 1987 | WEBN play history 2026; 1 sampled play |
| [The Thing That Should Not Be][d182b784b7] | Metallica | Master of Puppets (Remastered) | 1986 | WEBN play history 2026; 1 sampled play |
| [Don't Tell Me You Love Me][0a3b317ad4] | Night Ranger | Dawn Patrol | 1982 | WEBN play history 2026; 1 sampled play |
| [The Great Southern Trendkill][fda014ae42] | Pantera | The Great Southern Trendkill (20th Anniversary Edition) | 1996 | WEBN play history 2026; 1 sampled play |
| [Under Pressure (feat. David Bowie)][f40673d674] | Queen | Bohemian Rhapsody (The Original Soundtrack) | 1981 | WEBN play history 2026; 1 sampled play |
| [Start Me Up][d9671c6e69] | The Rolling Stones | Tattoo You (Deluxe Edition) | 1981 | WEBN play history 2026; 1 sampled play |
| [I Remember You][2bf1ede43c] | Skid Row | Skid Row | 1989 | WEBN play history 2026; 1 sampled play |
| [Extra Sexual Extraterrestrial (Live)][b72a3c4011] | Sons of the Abyss | Zorp and Zeptar Live at the Cosmodome | 2025 | WEBN play history 2026; 1 sampled play; no studio version found |
| [Love Song][1e139cad9a] | Tesla | The Great Radio Controversy | 1989 | WEBN play history 2026; 1 sampled play |
| [The Covenant][e2c289e92a] | Thrown to Wolves | The Covenant - Single | 2025 | WEBN play history 2026; 1 sampled play |
| [LOOK OUT FOR ME][1ee2ca91e3] | Turnstile | NEVER ENOUGH | 2025 | archived WEBN top songs 2026; 1 snapshot |
| [So Far So Fake][6f56a4bf83] | Pierce the Veil | The Jaws of Life | 2023 | archived WEBN top songs 2026; 1 snapshot |
| [Demonic Depression][fba3a0d3af] | Volbeat | God Of Angels Trust | 2025 | archived WEBN top songs 2026; 1 snapshot |
| [Pale Horse][5f346c52eb] | Chevelle | Bright as Blasphemy | 2025 | archived WEBN top songs 2026; 1 snapshot |
| [infinite source][ea80e28cc3] | Deftones | private music | 2025 | archived WEBN top songs 2026; 1 snapshot |
| [Nothin'][7c50dcb73f] | Guns N' Roses | Nothin' - Single | 2025 | archived WEBN top songs 2026; 1 snapshot |
| [The Spell][2dc96aedda] | Mammoth | The End | 2025 | archived WEBN top songs 2026; 1 snapshot |
| [Searchlight][da6b9b4a2e] | Shinedown | Searchlight - Single | 2025 | archived WEBN top songs 2026; 1 snapshot |
| [Caramel][0c54047a1c] | Sleep Token | Even In Arcadia | 2025 | archived WEBN top songs 2026; 1 snapshot |
| [The End (feat. BABYMETAL) (2025 VERSION)][73273a58d8] | Five Finger Death Punch | BEST OF (Volume 2) | 2025 | archived WEBN top songs 2025; 1 snapshot |
| [My Only Angel (feat. Steve Martin) (Desert Road Version)][8dc01fbb5b] | Aerosmith & YUNGBLUD | My Only Angel (Desert Road Version) [feat. Steve Martin] - Single | 2025 | WEBN play history 2025; 1 sampled play |
| [Asking For A Friend][464d5a7632] | Foo Fighters | Asking For A Friend - Single | 2025 | WEBN play history 2025; 1 sampled play |
| [As Alive As You Need Me To Be][1c7c57df87] | Nine Inch Nails | TRON: Ares (Original Motion Picture Soundtrack) | 2025 | WEBN play history 2025; 1 sampled play |
| [my mind is a mountain][f6d7b4c94c] | Deftones | private music | 2025 | WEBN play history 2025; 1 sampled play |
| [Spit XXV][cd236d2f72] | Kittie | Spit XXV - EP | 2025 | WEBN play history 2025; 1 sampled play |
| [Today's Song][d9f28d8f2e] | Foo Fighters | Today's Song - Single | 2025 | WEBN play history 2025; 1 sampled play |
| [I Disappear][be0f68a3a9] | Metallica | I Disappear - Single | 2000 | WEBN play history 2025; 1 sampled play |
| [The End][07d84007d8] | Mammoth | The End - Single | 2025 | archived WEBN top songs 2025; 1 snapshot |
| [Wasting My Time][d4caaff34c] | Default | The Fallout (Limited Edition) | 2001 | WEBN play history 2025; 1 sampled play |
| [Emergence][93876a360d] | Sleep Token | Even In Arcadia | 2025 | archived WEBN top songs 2025; 1 snapshot |
| [By a Monster’s Hand][196a36af69] | Volbeat | God Of Angels Trust | 2025 | archived WEBN top songs 2025; 1 snapshot |
| [BLUR][93f66e2aab] | Wage War | STIGMA | 2024 | archived WEBN top songs 2025; 1 snapshot |
| [The Red][f846b988dc] | Chevelle | Wonder What's Next (Expanded Edition) | 2002 | WEBN play history 2025; 1 sampled play |
| [Dance, Kid, Dance][fcdfcba89f] | Shinedown | Three Six Five / Dance, Kid, Dance - Single | 2025 | WEBN play history 2025; 1 sampled play |
| [Black Butterfly][2fe81f4154] | Scott Stapp | Higher Power | 2024 | WEBN play history 2025; 1 sampled play |
| [Walls Come Down][8f0c54fffe] | Seether | The Surface Seems So Far | 2024 | WEBN play history 2025; 1 sampled play |
| [What Remains][4daeac04c5] | Pop Evil | What Remains - Single | 2025 | archived WEBN top songs 2025; 1 snapshot |
| [Pieces][29751592fa] | Daughtry | Pieces - Single | 2024 | archived WEBN top songs 2024; 1 snapshot |
| [Barely Breathing (feat. Against The Current)][58e2d35071] | From Ashes to New | Barely Breathing (feat. Against The Current) - Single | 2023 | archived WEBN top songs 2024; 1 snapshot |
| [Truth][27b53886fd] | Godsmack | Lighting Up the Sky | 2023 | archived WEBN top songs 2024; 1 snapshot |
| [I Was Alive][d2c1054c95] | Beartooth | The Surface | 2023 | WEBN play history 2024; 1 sampled play |
| [Rebel Yell][934e07921d] | Billy Idol | Rebel Yell (Deluxe Edition) | 1983 | WEBN play history 2024; 1 sampled play |
| [This Is the Way (feat. DMX)][a177ea3d50] | Five Finger Death Punch | AfterLife (Deluxe) | 2024 | archived WEBN top songs 2024; 1 snapshot |
| [Dilemma][d088f550ca] | Green Day | Pop Nonstop | 2023 | archived WEBN top songs 2024; 1 snapshot |
| [Friendly Fire][e40a47fc92] | LINKIN PARK | Papercuts (Singles Collection 2000-2023) | 2024 | archived WEBN top songs 2024; 1 snapshot |
| [S!CK][9bfb2c8249] | The Warning | S!CK - Single | 2024 | archived WEBN top songs 2024; 1 snapshot |
| [Devil You Know][f1d56d8913] | Tim Montana | Devil You Know - Single | 2023 | archived WEBN top songs 2023; 1 snapshot |
| [Bad Man][f39c4a7561] | Disturbed | Divisive | 2022 | WEBN play history 2023; 1 sampled play |
| [Testify][4f192c847b] | Rage Against the Machine | The Battle of Los Angeles | 1999 | WEBN play history 2023; 1 sampled play |
| [Sex Type Thing][688df6838b] | Stone Temple Pilots | Core (Super Deluxe Edition) | 1992 | WEBN play history 2023; 1 sampled play |
| [The Dirt I'm Buried In][bdd8b06d59] | Avatar | Dance Devil Dance | 2023 | WEBN play history 2023; 1 sampled play |
| [Blood In The Water][49303b08bd] | Ayron Jones | Chronicles Of The Kid | 2023 | WEBN play history 2023; 1 sampled play |
| [Last Resort (Reimagined)][0124ab5da1] | Falling In Reverse | Last Resort (Reimagined) - Single | 2023 | WEBN play history 2023; 1 sampled play |
| [Best of You][d18b825e8d] | Foo Fighters | Greatest Hits | 2005 | WEBN play history 2023; 1 sampled play |
| [Somebody Told Me][15f858573f] | The Killers | Direct Hits | 2004 | WEBN play history 2023; 1 sampled play |
| [Nobody][b10cb05bbe] | Avenged Sevenfold | nobody new rock | 2023 | WEBN play history 2023; 1 sampled play |
| [Rescued][c5ffbc06c3] | Foo Fighters | But Here We Are | 2023 | archived WEBN top songs 2023; 1 snapshot |
| [Clint Eastwood][0505825be8] | Gorillaz | The Singles Collection 2001-2011 | 2001 | WEBN play history 2023; 1 sampled play |
| [No Apologies][28259c5a2d] | Papa Roach | Ego Trip | 2022 | WEBN play history 2023; 1 sampled play |
| [Lowest In Me][a6b0996ec1] | Staind | Confessions Of The Fallen (Deluxe) | 2023 | WEBN play history 2023; 1 sampled play |
| [Saviour II][3a206373b0] | Black Veil Brides | Saviour II - Single | 2022 | WEBN play history 2023; 1 sampled play |
| [Beguiled][736154e0fe] | The Smashing Pumpkins | Beguiled - Single | 2022 | archived WEBN top songs 2023; 1 snapshot |
| [I Am The Weapon][9898837cbd] | Three Days Grace | EXPLOSIONS | 2022 | WEBN play history 2023; 1 sampled play |
| [Sabotage][10591ff0ff] | Beastie Boys | Solid Gold Hits | 2005 | WEBN play history 2023; 1 sampled play |
| [Mr. Brownstone][f2dcd5abae] | Guns N' Roses | Appetite For Destruction | 1987 | WEBN play history 2023; 1 sampled play |
| [Painkiller][c1808fb99f] | Judas Priest | Painkiller (Bonus Track Version) | 1990 | WEBN play history 2023; 1 sampled play |
| [Symphony of Destruction][b1abd661d6] | Megadeth | Countdown to Extinction (Bonus Track Version) | 1992 | WEBN play history 2023; 1 sampled play |
| [Nevermore][ecb72de7b6] | Morbid Angel | Illud Divinum Insanus | 2011 | WEBN play history 2023; 1 sampled play |
| [Bringing on the Pain][2267a85954] | One Day Alive | Bringing on the Pain - Single | 2022 | WEBN play history 2023; 1 sampled play |
| [Electric Head, Pt. 1 (The Agony)][24ee9a9630] | White Zombie | Astro-Creep: 2000 - Songs of Love, Destruction and Other Synthetic Delusions of the Electric Head | 1995 | WEBN play history 2023; 1 sampled play |
| [Times Like These][1c7b252929] | Five Finger Death Punch | AfterLife | 2022 | archived WEBN top songs 2022; 1 snapshot |
| [Masterpiece][aa32ec952b] | Motionless In White | Masterpiece: Motion Picture Collection | 2022 | archived WEBN top songs 2022; 1 snapshot |
| [Tippa My Tongue][ce54fee457] | Red Hot Chili Peppers | Tippa My Tongue - Rock Freshers | 2022 | WEBN play history 2022; 1 sampled play |
| [It's a Long Way to the Top (If You Wanna Rock 'N' Roll)][1511ed8429] | AC/DC | High Voltage | 1975 | WEBN play history 2022; 1 sampled play |
| [No One Knows][f9c533842b] | Queens of the Stone Age | Songs for the Deaf | 2002 | WEBN play history 2022; 1 sampled play |
| [If Tomorrow Never Comes][8c447fcce6] | Bad Wolves | Dear Monsters | 2021 | WEBN play history 2022; 1 sampled play |
| [MYSTERY][7bf69a92f4] | Turnstile | MYSTERY - Single | 2021 | archived WEBN top songs 2022; 1 snapshot |
| [The Steeple][5255af3525] | Halestorm | The Steeple - Modern Rock Hits | 2022 | WEBN play history 2022; 1 sampled play |
| [The Memory Remains (feat. Marianne Faithfull)][a236b928ab] | Metallica | Reload | 1997 | WEBN play history 2022; 1 sampled play |
| [Love Dies Young][002a32cfb9] | Foo Fighters | Medicine At Midnight | 2021 | archived WEBN top songs 2022; 1 snapshot |
| [Planet Zero][f852aa2a49] | Shinedown | Planet Zero | 2022 | WEBN play history 2022; 1 sampled play |
| [DiE4u][c3836e67a4] | Bring Me The Horizon | DiE4u - Single | 2021 | WEBN play history 2022; 1 sampled play |
| [Father Of Mine][744a24ae68] | Everclear | In A Different Light (All New Recordings) | 2009 | WEBN play history 2022; 1 sampled play |
| [Shotgun Blues][8c42058a20] | Volbeat | Servant Of The Mind (Deluxe) | 2021 | WEBN play history 2022; 1 sampled play |
| [Warrior (feat. Travis Barker)][9467b0a374] | Atreyu | Baptize | 2021 | WEBN play history 2021; 1 sampled play |
| [Scarlet Cross][958071af87] | Black Veil Brides | Scarlet Cross - Single | 2021 | WEBN play history 2021; 1 sampled play |
| [Hard Skool][e3fd5b4cd6] | Guns N' Roses | Hard Skool - Single | 2021 | WEBN play history 2021; 1 sampled play |
| [All the Small Things][82016332cd] | blink-182 | Enema of the State | 1999 | WEBN play history 2021; 1 sampled play |
| [Dude (Looks Like a Lady)][71398c072f] | Aerosmith | 20th Century Masters - The Millennium Collection: The Best of Aerosmith | 1987 | archived WEBN top songs 2021; 1 snapshot |
| [Everything Zen][75c20cd572] | Bush | Loaded: The Greatest Hits 1994-2023 | 1994 | archived WEBN top songs 2021; 1 snapshot |
| [Mars Simula][11f7fc09b0] | Chevelle | NIRATIAS | 2021 | archived WEBN top songs 2021; 1 snapshot |
| [Unforgettable][23b6e2e893] | Godsmack | When Legends Rise | 2018 | WEBN play history 2021; 1 sampled play |
| [The Devil's Bleeding Crown][e9e40f99d9] | Volbeat | Seal the Deal & Let's Boogie (Deluxe) | 2016 | WEBN play history 2021; 1 sampled play |
| [Cherry Pie][f25723c36a] | Warrant | Cherry Pie (Bonus Track Version) | 1990 | WEBN play history 2021; 1 sampled play |
| [Nowhere Generation][ea95def1a1] | Rise Against | Nowhere Generation | 2021 | archived WEBN top songs 2021; 1 snapshot |
| [Wonderwall (Remastered)][7fa2e8ca69] | Oasis | (What's The Story) Morning Glory? [Deluxe Remastered Edition] | 1995 | WEBN play history 2021; 1 sampled play |
| [Burden In My Hand][915d46dc34] | Soundgarden | Telephantasm (Deluxe Version) | 2010 | WEBN play history 2021; 1 sampled play |
| [Adrenaline][b95dc2f8c8] | Zero 9:36 | ...If You Don’t Save Yourself | 2020 | WEBN play history 2021; 1 sampled play |
| [Natural][b869bddb19] | Imagine Dragons | Origins | 2018 | WEBN play history 2021; 1 sampled play |
| [Right Here (Album Version)][b49e4dde3f] | Staind | Chapter V | 2005 | WEBN play history 2021; 1 sampled play |
| [Mercy][8a295c5242] | Ayron Jones | Soundtrack To Summer 2021 | 2021 | WEBN play history 2021; 1 sampled play |
| [Living the Dream][33e762b070] | Five Finger Death Punch | F8 | 2020 | WEBN play history 2021; 1 sampled play |
| [Breathe Again][b33655b659] | Pop Evil | Versatile | 2020 | archived WEBN top songs 2021; 1 snapshot |
| [Death By Rock And Roll][be1fda337a] | The Pretty Reckless | Death By Rock And Roll | 2020 | WEBN play history 2021; 1 sampled play |
| [TRIALS][92bd5d3510] | STARSET | Rock Gaming | 2019 | archived WEBN top songs 2021; 1 snapshot |
| [Runnin' Down a Dream][acc44ea777] | Tom Petty | Full Moon Fever | 1989 | WEBN play history 2021; 1 sampled play |
| [Waiting On A War][21895df9af] | Foo Fighters | Medicine At Midnight | 2021 | archived WEBN top songs 2021; 1 snapshot |
| [hometown][7d81090033] | cleopatrick | the boys - EP | 2018 | archived WEBN top songs 2021; 1 snapshot |
| [Slow Ride (Single Version)][642c2624f0] | Foghat | The Essentials: Foghat | 1975 | WEBN play history 2021; 1 sampled play |
| [Make Me Bad][0ba047cefe] | Korn | Issues | 1999 | WEBN play history 2021; 1 sampled play |
| [Learn to Walk Again][4f809fcd38] | Bad Wolves | N.A.T.I.O.N. | 2019 | archived WEBN top songs 2021; 1 snapshot |
| [Ohms][50ef97ff66] | Deftones | Ohms | 2020 | WEBN play history 2020; 1 sampled play |
| [My Way, Soon][6d6ef496d0] | Greta Van Fleet | The Battle at Garden’s Gate | 2020 | WEBN play history 2020; 1 sampled play |
| [Somebody That I Used to Know][45ea2f684f] | Three Days Grace | Somebody That I Used to Know - Single | 2020 | WEBN play history 2020; 1 sampled play |
| [Heavy Is the Head (feat. Chris Cornell)][8d28aed1b8] | Zac Brown Band | Jekyll + Hyde | 2015 | WEBN play history 2020; 1 sampled play |
| [I Will Buy You a New Life (Re-Recorded)][018b6ccc1b] | Everclear | Return to Santa Monica | 2011 | WEBN play history 2020; 1 sampled play |
| [Purple Haze][4379601395] | The Jimi Hendrix Experience | Are You Experienced (Deluxe Version) | 1967 | WEBN play history 2020; 1 sampled play |
| [Bleeding Me (Remastered)][22cc40d7ef] | Metallica | Load (Remastered) | 1996 | WEBN play history 2020; 1 sampled play |
| [Buddy Holly][0206006bad] | Weezer | Weezer (Deluxe Edition) | 1994 | WEBN play history 2020; 1 sampled play |
| [Atlas Falls][2695cf9a6a] | Shinedown | Atlas Falls - Single | 2020 | WEBN play history 2020; 1 sampled play |
| [Beverly Hills][d7390b3a0c] | Weezer | Make Believe | 2005 | WEBN play history 2020; 1 sampled play |
| [Radioactive (feat. Kendrick Lamar)][365341f01d] | Imagine Dragons | Radioactive (feat. Kendrick Lamar) - Single | 2014 | WEBN play history 2020; 1 sampled play |
| [Lake of Fire (Live Acoustic)][1149f7fa4e] | Nirvana | MTV Unplugged In New York (Live Acoustic) | 1994 | WEBN play history 2020; 1 sampled play; no Nirvana studio version exists |
| [Flowers on a Grave][15f386a8cc] | Bush | The Kingdom | 2020 | WEBN play history 2020; 1 sampled play |
| [Some Kind of Monster][36a8b5aff1] | Metallica | St. Anger | 2003 | WEBN play history 2020; 1 sampled play |
| [Ghost][8c1230613a] | Badflower | Ghost - Single | 2018 | WEBN play history 2020; 1 sampled play |
| [Wolf Totem (feat. Jacoby Shaddix)][27cb9cb433] | The Hu | Wolf Totem (feat. Jacoby Shaddix) - Single | 2020 | WEBN play history 2020; 1 sampled play |
| [The Unforgiven III][e2bafedc80] | Metallica | Death Magnetic | 2008 | WEBN play history 2020; 1 sampled play |
| [Ordinary Man (feat. Elton John)][df48d16118] | Ozzy Osbourne | Ordinary Man | 2020 | WEBN play history 2020; 1 sampled play |
| [Wash It All Away][19e780379f] | Five Finger Death Punch | A Decade of Destruction | 2015 | WEBN play history 2020; 1 sampled play |
| [Work][f103d8b256] | Pop Evil | Work - Single | 2020 | WEBN play history 2020; 1 sampled play |
| [Come Together][9d78983be1] | Gary Clark Jr. & Junkie XL | Come Together - Single | 2017 | WEBN play history 2020; 1 sampled play |
| [1979][20080e3d39] | The Smashing Pumpkins | Rotten Apples: Greatest Hits | 1995 | WEBN play history 2020; 1 sampled play |
| [Rolling 7s][40ed43c8c0] | Dirty Honey | Dirty Honey - EP | 2019 | archived WEBN top songs 2020; 1 snapshot |
| [Inside Out][1fb7e57c63] | Five Finger Death Punch | F8 | 2019 | WEBN play history 2020; 1 sampled play |
| [Back In Black][3626c7a3e3] | AC/DC | Back In Black | 1980 | popular catalog addition |
| [Thunderstruck][bf6906d1cb] | AC/DC | Iron Man 2 | 1990 | popular catalog addition |
| [Crazy][9d48b07526] | Aerosmith | Big Ones | 1980 | popular catalog addition |
| [Walk This Way][2aba29c1bf] | Aerosmith | Toys In the Attic | 1975 |  |
| [Rooster][9829bc87e1] | Alice In Chains | Dirt (Remastered) | 1992 | popular catalog addition |
| [Would?][81be661a13] | Alice In Chains | Dirt (Remastered) | 1992 | popular catalog addition |
| [Movies (2026 Remastered)][07a661234d] | Alien Ant Farm | ANThology (Deluxe Edition) | 2001 | popular catalog addition |
| [These Days][9b1edb7865] | Alien Ant Farm | truANT | 2003 | popular catalog addition |
| [Fight][ca5d27d1b6] | All Good Things | Battle Rock 2 | 2014 | popular catalog addition |
| [The Comeback (feat. Craig Mabbitt of Escape the Fate)][b6d00f2d76] | All Good Things | The Comeback (feat. Craig Mabbitt of Escape the Fate) - EP | 2021 | popular catalog addition |
| [Dear Maria, Count Me In][14886d6a07] | All Time Low | So Wrong, It's Right (Deluxe Version) | 2007 | popular catalog addition |
| [Weightless (Rerecorded)][4362960b20] | All Time Low | The Forever Sessions, Vol. 1 (Rerecorded) | 2024 | popular catalog addition |
| [Animals][914de1b579] | Architects | For Those That Wish to Exist | 2020 | popular catalog addition |
| [Doomsday][e24a23a909] | Architects | Holy Hell | 2018 | popular catalog addition |
| [Cochise][8a922464b5] | Audioslave | Audioslave | 2002 | popular catalog addition |
| [I Am the Highway][7f2337a34c] | Audioslave | Audioslave | 2002 | popular catalog addition |
| [In Between][3c27038d60] | Beartooth | Disgusting | 2014 | popular catalog addition |
| [The Lines][5bb15a6240] | Beartooth | Disgusting | 2014 | popular catalog addition |
| [In This River][6aa81e4d00] | Black Label Society | Skullage | 2005 | popular catalog addition |
| [Stillborn (feat. Ozzy Osbourne)][284ce0081f] | Black Label Society | The Blessed Hellride | 2003 | popular catalog addition |
| [Iron Man][b36729e049] | Black Sabbath | Complete Studio Albums 1970-1978 | 1970 | popular catalog addition |
| [N.I.B.][9e0a0a759a] | Black Sabbath | The Ultimate Collection | 1970 | popular catalog addition |
| [Livin' On a Prayer][4523670b42] | Bon Jovi | Slippery When Wet | 1986 | popular catalog addition |
| [You Give Love a Bad Name][b4fedd42e6] | Bon Jovi | Slippery When Wet | 1986 | popular catalog addition |
| [Breath][f08397a9c8] | Breaking Benjamin | Phobia | 2006 | popular catalog addition |
| [The Diary of Jane (Single Version)][055baa9138] | Breaking Benjamin | Phobia (Explicit Version) | 2006 | popular catalog addition |
| [Lit Up][81ebdb0534] | Buckcherry | Buckcherry | 1999 | popular catalog addition |
| [Sorry][e9ee441aa0] | Buckcherry | 15 | 2005 | popular catalog addition |
| [Machinehead (Remastered)][e5da319967] | Bush | Sixteen Stone (Remastered) | 1994 | popular catalog addition |
| [Swallowed (Remastered)][7344f9bf4d] | Bush | Razorblade Suitcase (Remastered) | 1996 | popular catalog addition |
| [Gel][45be8e9e54] | Collective Soul | Collective Soul | 1995 | popular catalog addition |
| [Heavy][85543ad3ac] | Collective Soul | Dosage | 1999 | popular catalog addition |
| [My Sacrifice][85b48bdb16] | Creed | Greatest Hits | 2001 | popular catalog addition |
| [With Arms Wide Open][3096da5f7e] | Creed | Human Clay | 1999 | popular catalog addition |
| [Her Black Wings][69ac2e7f1e] | Danzig | Danzig II: Lucifuge | 1990 | popular catalog addition |
| [Twist of Cain][d445236f4f] | Danzig | Danzig | 1988 | popular catalog addition |
| [Shelf in the Room][85b03c0234] | Days of the New | Days of the New | 1997 | popular catalog addition |
| [The Down Town][2b1399bca5] | Days of the New | Days of the New | 1997 | popular catalog addition |
| [Photograph][8e179e40bf] | Def Leppard | Pyromania | 1983 | popular catalog addition |
| [Rock of Ages][2c11b0e6cf] | Def Leppard | Pyromania | 1983 | popular catalog addition |
| [Down with the Sickness][a70ab7e7fd] | Disturbed | The Sickness | 2000 | popular catalog addition |
| [The Sound of Silence][149279c38f] | Disturbed | Immortalized (Deluxe Edition) | 2015 | popular catalog addition |
| [Step Up][ec645951e7] | Drowning Pool | Desensitized | 2004 | popular catalog addition |
| [Tear Away][be18d58e0c] | Drowning Pool | Sinner | 2001 | popular catalog addition |
| [Bring Me to Life][ba4a8b86ca] | Evanescence | Fallen | 2003 | popular catalog addition |
| [Call Me When You're Sober][b5405cfe8e] | Evanescence | The Open Door | 2006 | popular catalog addition |
| [From Out of Nowhere][2f0cb74674] | Faith No More | The Real Thing | 1989 | popular catalog addition |
| [Midlife Crisis][f067ace371] | Faith No More | Angel Dust | 1992 | popular catalog addition |
| [Dance, Dance][e2039c8444] | Fall Out Boy | Believers Never Die - Greatest Hits (Bonus Track Version) | 2005 | popular catalog addition |
| [Thnks Fr Th Mmrs][d31b9e6882] | Fall Out Boy | Infinity On High | 2007 | popular catalog addition |
| [Popular Monster][ad841c862b] | Falling In Reverse | Popular Monster - Single | 2019 | popular catalog addition |
| [The Drug in Me Is You][7975dacf47] | Falling In Reverse | The Drug in Me Is You | 2011 | popular catalog addition |
| [Falling On][16677d6c32] | Finger Eleven | Them Vs. You Vs. Me (Deluxe Edition) | 2007 | popular catalog addition |
| [One Thing][bb61183d92] | Finger Eleven | Finger Eleven | 2003 | popular catalog addition |
| [Bad Company][a4f9dfeb6b] | Five Finger Death Punch | A Decade of Destruction | 2009 | popular catalog addition |
| [Wrong Side of Heaven][0b702d38d2] | Five Finger Death Punch | The Wrong Side of Heaven and the Righteous Side of Hell, Vol. 1 (Deluxe Edition) | 2013 | popular catalog addition |
| [Learn to Fly][f4ffcd6ac0] | Foo Fighters | There Is Nothing Left to Lose | 1999 | popular catalog addition |
| [The Pretender][c53ddb2429] | Foo Fighters | Echoes, Silence, Patience & Grace | 2007 | popular catalog addition |
| [Bad Day][5b392dd59a] | Fuel | Something Like Human | 2000 | popular catalog addition |
| [Shimmer][2878e8d63d] | Fuel | Sunburn | 1998 | popular catalog addition |
| [Bad Habits][fac2431f2f] | Giovannie and the Hired Guns | Bad Habits | 2017 | popular catalog addition |
| [Overrated][ba62bd9188] | Giovannie and the Hired Guns | Tejano Punk Boyz | 2022 | popular catalog addition |
| [Awake][194488cd0a] | Godsmack | Good Times, Bad Times... Ten Years of Godsmack | 2000 | popular catalog addition |
| [Voodoo][8e3f1cc4d6] | Godsmack | Good Times, Bad Times... Ten Years of Godsmack | 1997 | popular catalog addition |
| [American Idiot][272233efc3] | Green Day | American Idiot (Deluxe Edition) | 2004 | popular catalog addition |
| [Basket Case][616d783455] | Green Day | Dookie | 1994 | popular catalog addition |
| [Sweet Child O' Mine][c930fbd049] | Guns N' Roses | Appetite For Destruction (Super Deluxe) | 1987 | popular catalog addition |
| [Welcome To The Jungle][0cbbeeabc2] | Guns N' Roses | Appetite For Destruction (Super Deluxe) | 1987 | popular catalog addition |
| [Shamrocks and Shenanigans][68f3a0fb7f] | House of Pain | House of Pain (Fine Malt Lyrics) | 1992 | popular catalog addition |
| [Who's the Man][9e5c48d919] | House of Pain | Same as It Ever Was | 1994 | popular catalog addition |
| [Nice to Know You][7e554aaeba] | Incubus | Morning View | 2001 | popular catalog addition |
| [Stellar][6037dee1cc] | Incubus | Make Yourself | 1999 | popular catalog addition |
| [Save Me][54b5e3ee46] | Jelly Roll | Save Me - Single | 2020 | popular catalog addition |
| [Son of a Sinner][6f3a3ec261] | Jelly Roll | Ballads of the Broken | 2021 | popular catalog addition |
| [Pain][1ea798f16c] | Jimmy Eat World | Futures | 2004 | popular catalog addition |
| [Sweetness][9add53e2ad] | Jimmy Eat World | Bleed American | 2001 | popular catalog addition |
| [Blue On Black][9609af080b] | Kenny Wayne Shepherd | Trouble Is... | 1997 | popular catalog addition |
| [Cowboy][49e341c72d] | Kid Rock | Greatest Hits: You Never Saw Coming | 1998 | popular catalog addition |
| [Only God Knows Why][e68337d1df] | Kid Rock | 00's US Hits | 1998 | popular catalog addition |
| [Falling Away from Me][659ef77be6] | Korn | Issues | 1999 | popular catalog addition |
| [Got the Life][293cbb29d3] | Korn | Follow The Leader | 1998 | popular catalog addition |
| [Stairway to Heaven][78771c168d] | Led Zeppelin | Led Zeppelin IV (Remastered) | 1971 | popular catalog addition |
| [Whole Lotta Love][0597535a1c] | Led Zeppelin | Led Zeppelin II (Remastered) | 1969 | popular catalog addition |
| [American Woman][0e0cc23e48] | Lenny Kravitz | Greatest Hits | 1999 | popular catalog addition |
| [Are You Gonna Go My Way][7eec44e048] | Lenny Kravitz | Are You Gonna Go My Way | 1993 | popular catalog addition |
| [Nookie][f3a3ade138] | Limp Bizkit | Significant Other | 1999 | popular catalog addition |
| [Rollin' (Air Raid Vehicle)][d7da5fadc7] | Limp Bizkit | Greatest Hitz | 2000 | popular catalog addition |
| [In the End][0d68dab58d] | LINKIN PARK | Hybrid Theory (Deluxe Edition) | 2000 | popular catalog addition |
| [Numb][d5a6e047e2] | LINKIN PARK | Meteora (Deluxe Edition) | 2003 | popular catalog addition |
| [Glamour Boys][ac72fefbe6] | Living Colour | Pride | 1988 | popular catalog addition |
| [Type][c408e55cda] | Living Colour | Time's Up | 1990 | popular catalog addition |
| [Sweet Home Alabama][77b4396058] | Lynyrd Skynyrd | All Time Greatest Hits | 1974 | popular catalog addition |
| [That Smell][366789ab56] | Lynyrd Skynyrd | Street Survivors | 1977 | popular catalog addition |
| [Saint Joe On the School Bus][29a87137bb] | Marcy Playground | Marcy Playground | 1997 | popular catalog addition |
| [Sherry Fraser][969d9211a5] | Marcy Playground | Marcy Playground | 1997 | popular catalog addition |
| [Enter Sandman][dc906674f2] | Metallica | Metallica (Deluxe Box Set) | 1991 | popular catalog addition |
| [Nothing Else Matters][f67c8e476c] | Metallica | Metallica (Remastered) | 1991 | popular catalog addition |
| [Head Like a Hole][d960d9580f] | Nine Inch Nails | Pretty Hate Machine (Remastered) | 1989 | popular catalog addition |
| [The Hand That Feeds][2ec42d1d03] | Nine Inch Nails | With Teeth | 2005 | popular catalog addition |
| [About a Girl][98ccbb2f41] | Nirvana | Bleach (Deluxe Edition) | 1989 | popular catalog addition |
| [Lithium][c574f313f4] | Nirvana | Nevermind | 1991 | popular catalog addition |
| [Bark at the Moon][c04826b79b] | Ozzy Osbourne | Bark at the Moon (Bonus Track Version) | 1983 | popular catalog addition |
| [No More Tears][67417d0e23] | Ozzy Osbourne | No More Tears (Bonus Track Version) | 1991 | popular catalog addition |
| [Boom][9cecdb6558] | P.O.D. | Satellite | 2001 | popular catalog addition |
| [Youth of the Nation][fd98ada7aa] | P.O.D. | Greatest Hits: The Atlantic Years | 2001 | popular catalog addition |
| [Cemetery Gates][a3836a4835] | Pantera | Cowboys from Hell | 1990 | popular catalog addition |
| [Cowboys from Hell][f8b3e34b05] | Pantera | Cowboys from Hell | 1990 | popular catalog addition |
| [Getting Away With Murder (2020)][6750762bbe] | Papa Roach | 20/20 | 2007 | popular catalog addition |
| [Scars][7a4eb13ed4] | Papa Roach | To Be Loved: The Best of Papa Roach | 2004 | popular catalog addition |
| [Alive][20fcab6820] | Pearl Jam | Ten | 1991 | popular catalog addition |
| [Jeremy][1c90e10fdc] | Pearl Jam | Ten | 1991 | popular catalog addition |
| [Nothin' But a Good Time][183ac20a9c] | Poison | Open Up and Say... Ahh! (20th Anniversary Edition) | 1988 | popular catalog addition |
| [Talk Dirty to Me][da7c1256ac] | Poison | The Best of Poison: 20 Years of Rock (Remastered) | 1986 | popular catalog addition |
| [100 In a 55][ef8e75571d] | Pop Evil | Lipstick On the Mirror | 2008 | popular catalog addition |
| [Trenches][acae1208bc] | Pop Evil | Onyx (Deluxe Edition) | 2013 | popular catalog addition |
| [Blurry][ba7001043c] | Puddle of Mudd | Come Clean | 2001 | popular catalog addition |
| [Drift and Die][66d20e346b] | Puddle of Mudd | Come Clean | 2001 | popular catalog addition |
| [Another One Bites the Dust][8b8aad1894] | Queen | Greatest Hits I, II & III: The Platinum Collection | 1980 | popular catalog addition |
| [We Are the Champions][eaed4b2623] | Queen | Greatest Hits I, II & III: The Platinum Collection | 1977 | popular catalog addition |
| [Mama Weer All Crazee Now][bc24b764ab] | Quiet Riot | Condition Critical | 1984 | popular catalog addition |
| [Metal Health (Bang Your Head)][9586cc36ba] | Quiet Riot | Metal Health (Bonus Track Version) | 1983 | popular catalog addition |
| [Bulls On Parade][a3f4237d6b] | Rage Against the Machine | Evil Empire | 1996 | popular catalog addition |
| [Guerrilla Radio][1e46fd047d] | Rage Against the Machine | The Battle of Los Angeles | 1999 | popular catalog addition |
| [Californication][6555a0355c] | Red Hot Chili Peppers | The Studio Album Collection 1991-2011 | 1999 | popular catalog addition |
| [Dani California][087944cb79] | Red Hot Chili Peppers | Dani California - EP | 2006 | popular catalog addition |
| [Prayer of the Refugee][70af4e0b20] | Rise Against | The Sufferer & the Witness | 2006 | popular catalog addition |
| [Ready To Fall][48e19ead01] | Rise Against | The Sufferer & the Witness | 2006 | popular catalog addition |
| [Living Dead Girl][eaeb6f4143] | Rob Zombie | Hellbilly Deluxe | 1998 | popular catalog addition |
| [Superbeast][00bac6aea1] | Rob Zombie | Hellbilly Deluxe | 1998 | popular catalog addition |
| [Always][aaae7f4d57] | Saliva | Back Into Your System | 2002 | popular catalog addition |
| [Ladies and Gentlemen][696f53bdd2] | Saliva | Moving Forward In Reverse: Greatest Hits | 2006 | popular catalog addition |
| [Remedy][d504901508] | Seether | Karma and Effect | 2005 | popular catalog addition |
| [Rise Above This][37b3ba3155] | Seether | Finding Beauty In Negative Spaces (Bonus Track Version) | 2007 | popular catalog addition |
| [Over Your Shoulder][3c1e5f8738] | Seven Mary Three | Orange Ave. | 1998 | popular catalog addition |
| [Water's Edge][053c7543d5] | Seven Mary Three | American Standard | 1995 | popular catalog addition |
| [Second Chance][ef84c8b7a4] | Shinedown | The Sound of Madness (Bonus Track Version) | 2008 | popular catalog addition |
| [Sound of Madness][3a89b6c418] | Shinedown | The Sound of Madness (Bonus Track Version) | 2008 | popular catalog addition |
| [Fell On Black Days][1e7295db6d] | Soundgarden | Superunknown (20th Anniversary) | 1994 | popular catalog addition |
| [Outshined][ebe6106b6f] | Soundgarden | Badmotorfinger (Super Deluxe Edition) | 1991 | popular catalog addition |
| [It's Been Awhile][3cf8affeec] | Staind | Break the Cycle | 2001 | popular catalog addition |
| [So Far Away][6527a9df0c] | Staind | iTunes Originals: Staind | 2003 | popular catalog addition |
| [Absolute Zero][2e9cf50c1b] | Stone Sour | House of Gold & Bones, Pt. 1 | 2012 | popular catalog addition |
| [Through Glass][9d9b178ec6] | Stone Sour | Come What(ever) May | 2006 | popular catalog addition |
| [Interstate Love Song][d5a966f807] | Stone Temple Pilots | Thank You | 1994 | popular catalog addition |
| [Vasoline][daeb5a7231] | Stone Temple Pilots | Purple (Super Deluxe Edition) (2019 Remaster) | 1994 | popular catalog addition |
| [Still Waiting][b1677a24e6] | Sum 41 | Does This Look Infected? | 2002 | popular catalog addition |
| [B.Y.O.B.][0b1b69d25d] | System Of A Down | Mezmerize | 2005 | popular catalog addition |
| [Chop Suey!][1230f74b9a] | System Of A Down | Toxicity | 2001 | popular catalog addition |
| [Spiders][1afc94aca9] | System Of A Down | System Of A Down | 1998 | popular catalog addition |
| [Dreams (Remastered 2026)][aa844dcf27] | The Cranberries | Everybody Else Is Doing It, So Why Can't We? (Remastered 2026) | 1993 | popular catalog addition |
| [Linger (Remastered 2026)][cfd753ae41] | The Cranberries | Everybody Else Is Doing It, So Why Can't We? (Remastered 2026) | 1993 | popular catalog addition |
| [Come Out and Play (Keep 'Em Separated)][4dbb3646dd] | The Offspring | Smash | 1994 | popular catalog addition |
| [(I Can't Get No) Satisfaction][5c21f65f76] | The Rolling Stones | Forty Licks | 1965 | popular catalog addition |
| [Gimme Shelter (Remastered 2019)][d272446650] | The Rolling Stones | Let It Bleed (Remastered 2019) | 1969 | popular catalog addition |
| [1979 (Remastered 2012)][b4eb2992a3] | The Smashing Pumpkins | Mellon Collie And The Infinite Sadness (2012 Remastered) | 1995 | popular catalog addition |
| [Today][67b937fdb5] | The Smashing Pumpkins | Siamese Dream | 1993 | popular catalog addition |
| [CHOKE][cd92ebef1e] | The Warning | CHOKE - Single | 2021 | popular catalog addition |
| [MONEY][d64976a613] | The Warning | MONEY - Single | 2022 | popular catalog addition |
| [Fell In Love With a Girl][83c2b8a566] | The White Stripes | White Blood Cells | 2001 | popular catalog addition |
| [Icky Thump][2642eab970] | The White Stripes | Icky Thump | 2007 | popular catalog addition |
| [Closer To the Edge][22cf656b4a] | Thirty Seconds to Mars | This Is War | 2009 | popular catalog addition |
| [From Yesterday][40ba0e732e] | Thirty Seconds to Mars | A Beautiful Lie | 2005 | popular catalog addition |
| [I Hate Everything About You][9c15299a70] | Three Days Grace | Three Days Grace (Expanded Edition) | 2003 | popular catalog addition |
| [Riot][614adea5f4] | Three Days Grace | One-X (Deluxe Edition) | 2006 | popular catalog addition |
| [American Girl][f6f3d3a435] | Tom Petty | The Best of Everything: The Definitive Career Spanning Hits Collection 1976-2016 | 1976 | popular catalog addition |
| [Mary Jane's Last Dance][58a92aac1e] | Tom Petty | The Best of Everything: The Definitive Career Spanning Hits Collection 1976-2016 | 1993 | popular catalog addition |
| [Open Up Your Eyes][3793ab6d2b] | Tonic | Lemon Parade | 1996 | popular catalog addition |
| [You Wanted More][dba4fa014e] | Tonic | Sugar | 1999 | popular catalog addition |
| [Forty Six & 2][4e7b1da1f9] | TOOL | Ænima | 1996 | popular catalog addition |
| [Schism][a4b8e0f38c] | TOOL | Lateralus | 2001 | popular catalog addition |
| [Heathens][88e94860f8] | twenty one pilots | Suicide Squad: The Album | 2016 | popular catalog addition |
| [Ride][eeaf86d943] | twenty one pilots | Blurryface | 2015 | popular catalog addition |

[63fe2d70d6]: https://music.apple.com/us/song/voices-in-my-head/1622461652
[23edc3ebf3]: https://music.apple.com/us/song/awaken/1771475246
[10c4286044]: https://music.apple.com/us/song/afterlife/1891104596
[903178cfe0]: https://music.apple.com/us/song/heavy-is-the-crown/1766137053
[3f3b3d86d7]: https://music.apple.com/us/song/even-if-it-kills-me/1786479803
[a83148ee6f]: https://music.apple.com/us/song/i-will-not-break/1793862191
[8b94de228e]: https://music.apple.com/us/song/hey-you/1646032786
[f95ae60abc]: https://music.apple.com/us/song/for-the-glory/1695704310
[2078cd9466]: https://music.apple.com/us/song/liar/1759651765
[668c75c06c]: https://music.apple.com/us/song/dead-don-t-die/1606457290
[890bbfcf6d]: https://music.apple.com/us/song/so-called-life/1609130421
[720c635dac]: https://music.apple.com/us/song/ramon-ayala/1647021685
[3d7b772852]: https://music.apple.com/us/song/something-wicked/6766252959
[4605dedba5]: https://music.apple.com/us/song/comedown/1707602649
[2e3b6f8cf2]: https://music.apple.com/us/song/free/1872250568
[dbd71266c6]: https://music.apple.com/us/song/need-a-favor/1688698795
[8439e78416]: https://music.apple.com/us/song/broken-mirror/1774393636
[77786f8748]: https://music.apple.com/us/song/higher/1440718218
[ed63cc9dca]: https://music.apple.com/us/song/bad-guy-feat-saraya/1741617070
[a7c62ffc8b]: https://music.apple.com/us/song/eye-of-the-storm/6765775795
[0d6659fddd]: https://music.apple.com/us/song/when-i-come-around/1160082350
[573cd16dd4]: https://music.apple.com/us/song/even-flow/425465318
[7dfbc3663e]: https://music.apple.com/us/song/bother/214470532
[432be472fb]: https://music.apple.com/us/song/free-fallin/1469579716
[2f9ff803bc]: https://music.apple.com/us/song/if-you-could-only-see/1440911665
[f61596766a]: https://music.apple.com/us/song/name-in-blood/1859687600
[9b36bfd59d]: https://music.apple.com/us/song/glycerine/1707602651
[a09afc90d0]: https://music.apple.com/us/song/december/1576793373
[f299baa46d]: https://music.apple.com/us/song/whatever/1440715666
[40740ebc34]: https://music.apple.com/us/song/the-middle/1450030115
[42fd6187dd]: https://music.apple.com/us/song/around-the-world/945575407
[a4b3b53a59]: https://music.apple.com/us/song/scar-tissue/945575409
[f0d0815e72]: https://music.apple.com/us/song/cumbersome/321977255
[683468ece1]: https://music.apple.com/us/song/kerosene/1878542369
[e36c340307]: https://music.apple.com/us/song/don-t-wanna-go-home-tonight/1811868681
[7fb96d893f]: https://music.apple.com/us/song/janie-s-got-a-gun/1440746605
[28b1fa299a]: https://music.apple.com/us/song/down-in-a-hole/157316706
[84efd099c3]: https://music.apple.com/us/song/monsters-feat-blackbear/1499013886
[f5569be82d]: https://music.apple.com/us/song/my-own-prison/1440666233
[5be82be993]: https://music.apple.com/us/song/touch-peel-and-stand/1423333503
[77828ac1e7]: https://music.apple.com/us/song/epic/83385347
[8c71adac9a]: https://music.apple.com/us/song/drive/187454421
[ab6f911c1c]: https://music.apple.com/us/song/i-found-love-when-i-found-you/1639863181
[e99626d8cd]: https://music.apple.com/us/song/behind-blue-eyes/1440874577
[2db3d1dd7b]: https://music.apple.com/us/song/free-bird/1440838661
[ed23041eb5]: https://music.apple.com/us/song/for-whom-the-bell-tolls/579149036
[1821f34414]: https://music.apple.com/us/song/savior/1440852127
[3ff20db484]: https://music.apple.com/us/song/click-click-boom/1423175286
[d8799bfa4f]: https://music.apple.com/us/song/spoonman/1440811873
[98e84f4b6c]: https://music.apple.com/us/song/creep/3631572
[30ce6fa57e]: https://music.apple.com/us/song/gone-away/1440901678
[6a0baffd00]: https://music.apple.com/us/song/paint-it-black/1440745782
[24958a912e]: https://music.apple.com/us/song/the-kill/1867087254
[075038e885]: https://music.apple.com/us/song/paranoid/785232521
[8c118bde13]: https://music.apple.com/us/song/shine/1576789671
[1325f78de0]: https://music.apple.com/us/song/the-world-i-know/120197145
[6934dc6fd6]: https://music.apple.com/us/song/one-last-breath/1440738795
[57dcee5cda]: https://music.apple.com/us/song/stupify/1030601026
[30231ac034]: https://music.apple.com/us/song/centuries/1440826614
[30c2db5928]: https://music.apple.com/us/song/paralyzer/1440767124
[1e715edcc1]: https://music.apple.com/us/song/all-my-life/538257185
[360d557aed]: https://music.apple.com/us/song/i-stand-alone/1440900494
[f6141c1f01]: https://music.apple.com/us/song/good-riddance-time-of-your-life/346251574
[929f140a1c]: https://music.apple.com/us/song/pardon-me/187454524
[3b7615da43]: https://music.apple.com/us/song/black-dog/580708177
[2a43b099ee]: https://music.apple.com/us/song/break-stuff/1440754477
[06f589eb2d]: https://music.apple.com/us/song/my-way/1440843064
[7060abef96]: https://music.apple.com/us/song/sex-and-candy/1518392883
[f2f29e861d]: https://music.apple.com/us/song/fade-to-black/579149037
[6d038641d1]: https://music.apple.com/us/song/closer/1440837621
[99b172d954]: https://music.apple.com/us/song/smells-like-teen-spirit/1440783625
[4ace908db0]: https://music.apple.com/us/song/every-rose-has-its-thorn/716552556
[f656f0a2ea]: https://music.apple.com/us/song/footsteps/1030784080
[8d1206790f]: https://music.apple.com/us/song/dragula/1440845806
[e698ac38bd]: https://music.apple.com/us/song/save-me/80809256
[6b2a6b4ae1]: https://music.apple.com/us/song/black-hole-sun/1440855436
[eb94b2cf6a]: https://music.apple.com/us/song/outside/263059095
[fefdd885f7]: https://music.apple.com/us/song/toxicity/273714713
[bc2828c38b]: https://music.apple.com/us/song/stressed-out/974485474
[42fc514c5e]: https://music.apple.com/us/song/highway-to-hell/574044008
[4f2c93579f]: https://music.apple.com/us/song/dream-on/1658644941
[9139897122]: https://music.apple.com/us/song/sweet-emotion/1660109293
[50a05e79de]: https://music.apple.com/us/song/i-stay-away/268435302
[b3cea82da5]: https://music.apple.com/us/song/man-in-the-box/274953022
[324d29862c]: https://music.apple.com/us/song/smooth-criminal/406253466
[0dd2e6e0bc]: https://music.apple.com/us/song/like-a-stone/208294873
[c25d5646c1]: https://music.apple.com/us/song/war-pigs/1198293356
[e0ea5a207c]: https://music.apple.com/us/song/wanted-dead-or-alive/1422955215
[9a365523fa]: https://music.apple.com/us/song/so-cold/1440809397
[afde09064d]: https://music.apple.com/us/song/crazy-bitch/140862717
[6ac7a1285e]: https://music.apple.com/us/song/mother/1440880961
[39654a7610]: https://music.apple.com/us/song/land-of-confusion/1030228543
[6a39952ce0]: https://music.apple.com/us/song/bodies/1440777727
[1c80ddae9c]: https://music.apple.com/us/song/sugar-we-re-goin-down/1440799364
[91c1186ac9]: https://music.apple.com/us/song/everlong/362133505
[1a4abda85e]: https://music.apple.com/us/song/hemorrhage-in-my-hands/203911976
[91dceebe58]: https://music.apple.com/us/song/bulletproof/1710147290
[8d405d62c0]: https://music.apple.com/us/song/boulevard-of-broken-dreams/1161539476
[b9acb19d78]: https://music.apple.com/us/song/brain-stew/346249616
[1dab74c8cd]: https://music.apple.com/us/song/civil-war/1533361064
[2d84bb01b2]: https://music.apple.com/us/song/knockin-on-heaven-s-door/1389971325
[b6faffd8c6]: https://music.apple.com/us/song/paradise-city/1377813298
[500c5931ea]: https://music.apple.com/us/song/jump-around/1604628161
[6e8ba1a8e8]: https://music.apple.com/us/song/wish-you-were-here/271792734
[2d58dc9661]: https://music.apple.com/us/song/coming-undone/1594715396
[7c95c24ef7]: https://music.apple.com/us/song/freak-on-a-leash/1165631037
[cd3d20bd10]: https://music.apple.com/us/song/immigrant-song/580708280
[6e194982c3]: https://music.apple.com/us/song/fly-away/723338326
[eb2eb6c9b8]: https://music.apple.com/us/song/somewhere-i-belong/590423282
[57ce44f09f]: https://music.apple.com/us/song/sad-but-true/1572051819
[567cd83b04]: https://music.apple.com/us/song/wherever-i-may-roam/1572051822
[1a187458ed]: https://music.apple.com/us/song/all-apologies/1440859612
[78c95c0607]: https://music.apple.com/us/song/heart-shaped-box/1440859107
[2ec909ff2c]: https://music.apple.com/us/song/in-bloom/1440783633
[e14bc9c860]: https://music.apple.com/us/song/rape-me/1440859114
[138881e281]: https://music.apple.com/us/song/mama-i-m-coming-home/209695192
[4f6ffc80fa]: https://music.apple.com/us/song/alive/204672782
[14074b7243]: https://music.apple.com/us/song/walk/1049189260
[6c06203d1d]: https://music.apple.com/us/song/last-resort/1450006105
[9fcd744324]: https://music.apple.com/us/song/black/425465351
[ce80584f11]: https://music.apple.com/us/song/yellow-ledbetter/400864988
[6e68a1d7d3]: https://music.apple.com/us/song/bohemian-rhapsody/1440650711
[77a5d10883]: https://music.apple.com/us/song/killing-in-the-name/578028952
[4f41b7ed28]: https://music.apple.com/us/song/black-betty/216088341
[85c397a5b8]: https://music.apple.com/us/song/otherside/948446133
[c76cbd6da3]: https://music.apple.com/us/song/soul-to-squeeze/947701037
[c403094128]: https://music.apple.com/us/song/broken/1440652013
[5c84d7ca8a]: https://music.apple.com/us/song/fine-again/1440651869
[38adadcf72]: https://music.apple.com/us/song/young-again/1877229743
[914ce97859]: https://music.apple.com/us/song/fade/263058447
[2c595e4aec]: https://music.apple.com/us/song/dead-bloated/1596122743
[eb69e8042b]: https://music.apple.com/us/song/plush/3631541
[9d831ceaa3]: https://music.apple.com/us/song/wicked-garden/3631553
[2834b9b713]: https://music.apple.com/us/song/zombie/1440735264
[c013866f82]: https://music.apple.com/us/song/self-esteem/1485034811
[dc83b0b2d0]: https://music.apple.com/us/song/you-re-gonna-go-far-kid/1440887175
[2220e3eaa1]: https://music.apple.com/us/song/bullet-with-butterfly-wings/712732631
[7d2f791943]: https://music.apple.com/us/song/seven-nation-army/1533513537
[2100e76aad]: https://music.apple.com/us/song/animal-i-have-become/266221967
[99eb841298]: https://music.apple.com/us/song/just-like-you/269975543
[2d4f139da9]: https://music.apple.com/us/song/never-too-late/266221984
[ac86b5589f]: https://music.apple.com/us/song/i-will-not-bow/1440809138
[7adf342faa]: https://music.apple.com/us/song/pour-some-sugar-on-me/1438626355
[2a76fd7bcf]: https://music.apple.com/us/song/stricken/1030228537
[54f1481347]: https://music.apple.com/us/song/who-will-you-follow/1891104594
[1f64f5f6f3]: https://music.apple.com/us/song/zombified/1622461653
[e24fe2b9d5]: https://music.apple.com/us/song/re-align/1440900495
[59032eebd1]: https://music.apple.com/us/song/bawitdaba/586705734
[ce1100f536]: https://music.apple.com/us/song/cult-of-personality/1734681083
[8b670ffb20]: https://music.apple.com/us/song/come-as-you-are/1440783636
[a88a96ca85]: https://music.apple.com/us/song/crazy-train/1531535287
[47ace1ed23]: https://music.apple.com/us/song/mr-crowley/911604129
[195381e4b2]: https://music.apple.com/us/song/over-the-mountain/437515108
[d9d92a4604]: https://music.apple.com/us/song/under-the-graveyard/1486836089
[175b9f6c70]: https://music.apple.com/us/song/control/1450664882
[90099fddc8]: https://music.apple.com/us/song/we-will-rock-you/1440651216
[771f058c9c]: https://music.apple.com/us/song/cum-on-feel-the-noize/169782152
[61a74d8cf0]: https://music.apple.com/us/song/under-the-bridge/948460560
[97e926d2e1]: https://music.apple.com/us/song/fake-it/1440747243
[f47c30c75a]: https://music.apple.com/us/song/simple-man/16232991
[feb4e04d04]: https://music.apple.com/us/song/fat-lip/1440921141
[daef409470]: https://music.apple.com/us/song/aerials/273714765
[eaa97af2ff]: https://music.apple.com/us/song/the-kids-aren-t-alright/1783160367
[b012ad61a3]: https://music.apple.com/us/song/sober/1474185453
[5f9d7ec2a0]: https://music.apple.com/us/song/afterlife-from-the-netflix-series-devil-may-cry/1797189311
[d498097edf]: https://music.apple.com/us/song/darkness-settles-in/1487244866
[feb2fd79a4]: https://music.apple.com/us/song/just-pretend/1817382450
[18eabb19bf]: https://music.apple.com/us/song/my-own-worst-enemy/258611995
[a197c67ec0]: https://music.apple.com/us/song/rx-medicate/1262126920
[167bd98bf6]: https://music.apple.com/us/song/she-talks-to-angels/1440810842
[ca3294493b]: https://music.apple.com/us/song/my-hero/334812017
[27751155b1]: https://music.apple.com/us/song/something-in-the-way-remastered/1586410672
[7a4c672b45]: https://music.apple.com/us/song/the-man-who-sold-the-world-live-acoustic/1440892680
[4bce9d2a8b]: https://music.apple.com/us/song/big-empty-2019-remaster/1483793461
[930c1ac904]: https://music.apple.com/us/song/kryptonite/1452011941
[8b6b3f9b13]: https://music.apple.com/us/song/angels-fall/1440811205
[564a7ad80c]: https://music.apple.com/us/song/ain-t-no-rest-for-the-wicked/1437697155
[b4d5f8d8e3]: https://music.apple.com/us/song/the-unforgiven/1572051821
[4598293199]: https://music.apple.com/us/song/kill-the-noise/1582007064
[ea757f53f8]: https://music.apple.com/us/song/last-kiss/1826659460
[408e6bb99e]: https://music.apple.com/us/song/for-you/263059083
[65c8e7ab8b]: https://music.apple.com/us/song/hunger-strike/1440657642
[9252d61516]: https://music.apple.com/us/song/say-it-ain-t-so/1440870181
[b0a8e3d1fe]: https://music.apple.com/us/song/when-i-m-gone-2023-remaster/1699718921
[65f5c851c8]: https://music.apple.com/us/song/sweet-dreams-are-made-of-this/1540219923
[56ace89ad1]: https://music.apple.com/us/song/snow-hey-oh/945568999
[40c741166b]: https://music.apple.com/us/song/monsters/1352572895
[79de245cbd]: https://music.apple.com/us/song/i-won-t-back-down/1469579709
[3591d91de9]: https://music.apple.com/us/song/here-i-go-again-1987-version-2017-remaster/1862662882
[57a9933922]: https://music.apple.com/us/song/starless/6770568779
[0f99cf5e8d]: https://music.apple.com/us/song/you-shook-me-all-night-long/574050607
[35931391af]: https://music.apple.com/us/song/sail/1555208311
[6b56b5b37e]: https://music.apple.com/us/song/comfortably-numb/1067444896
[336e790ded]: https://music.apple.com/us/song/when-legends-rise/1710147288
[ccdbc2cde4]: https://music.apple.com/us/song/keep-away/1440715668
[3dadef5689]: https://music.apple.com/us/song/feel-good-inc/693620735
[12f86d1c83]: https://music.apple.com/us/song/hurt/1452875626
[206448ad0b]: https://music.apple.com/us/song/what-i-ve-done/1622311449
[d18a69a01b]: https://music.apple.com/us/song/lightning-crashes/1440487152
[4684f1a604]: https://music.apple.com/us/song/master-of-puppets/1275600554
[b9ba2b1c94]: https://music.apple.com/us/song/better-man/1826659454
[4b6ec77365]: https://music.apple.com/us/song/headstrong/301126618
[12dcea8d4f]: https://music.apple.com/us/song/more-human-than-human/1445662559
[a405f3bc8b]: https://music.apple.com/us/song/screaming-suicide/1655432390
[604a234597]: https://music.apple.com/us/song/king-nothing-remastered/1808799661
[1d5ec3130b]: https://music.apple.com/us/song/can-t-stop/948438478
[fc8757fdcc]: https://music.apple.com/us/song/patience/1523360171
[c45c612fe7]: https://music.apple.com/us/song/hail-to-the-king/672046531
[a20cd48d2f]: https://music.apple.com/us/song/hard-to-handle/1547308255
[8f0564008c]: https://music.apple.com/us/song/cold/190781606
[b84ccdcb8a]: https://music.apple.com/us/song/going-under/1440665975
[8c12f5b9a8]: https://music.apple.com/us/song/straight-out-of-line-2024-remaster/1758236963
[adb4f74f79]: https://music.apple.com/us/song/longview/1160990767
[6fb6a6cba6]: https://music.apple.com/us/song/lost/1668488811
[c0343402f8]: https://music.apple.com/us/song/one-step-closer/528437411
[52b43b97d0]: https://music.apple.com/us/song/one/1434424172
[22beade348]: https://music.apple.com/us/song/turn-the-page/579370550
[f333a4ecc8]: https://music.apple.com/us/song/i-don-t-know/1531535104
[73e4b115c9]: https://music.apple.com/us/song/see-u-in-hell-from-the-netflix-series-devil-may-cry/1894386678
[2a07015b22]: https://music.apple.com/us/song/daughter-remastered/426656373
[faa81cda01]: https://music.apple.com/us/song/closing-time/1457749142
[0af8da633f]: https://music.apple.com/us/song/duality/926184068
[0ab5c8de35]: https://music.apple.com/us/song/meant-to-live/270003842
[9e9e0faf08]: https://music.apple.com/us/song/kill-me-fast/1811868496
[0c1283bf26]: https://music.apple.com/us/song/killing-fields/1825930765
[4ef1d72d8b]: https://music.apple.com/us/song/braindead-feat-toby-morse/1817729936
[e9d13ae3a9]: https://music.apple.com/us/song/song-2-2012-remaster/726416473
[2586538880]: https://music.apple.com/us/song/nightmare/378658664
[1304e60c53]: https://music.apple.com/us/song/send-the-pain-below/270139033
[a0108eb317]: https://music.apple.com/us/song/prayer/1030144488
[0e5064a15b]: https://music.apple.com/us/song/lose-yourself/1444221569
[bc829f7b87]: https://music.apple.com/us/song/believer/1411628233
[3e89b2a3bd]: https://music.apple.com/us/song/faint/528437024
[0e43915b77]: https://music.apple.com/us/song/another-brick-in-the-wall-pt-2/1065975638
[e87fe665c8]: https://music.apple.com/us/song/you-re-going-down/715505186
[b9a96bed53]: https://music.apple.com/us/song/the-kill-bury-me/1440839332
[a4818506c4]: https://music.apple.com/us/song/we-re-not-gonna-take-it/1788380899
[c5e069e160]: https://music.apple.com/us/song/more-than-hate/1821279203
[668564a514]: https://music.apple.com/us/song/kashmir/952919352
[e60cdabffc]: https://music.apple.com/us/song/holiday/1161539473
[9aec9fba0a]: https://music.apple.com/us/song/dirty-deeds-done-dirt-cheap/575306356
[47d148cb5b]: https://music.apple.com/us/song/eye-of-the-storm/1618342155
[7cda1f673c]: https://music.apple.com/us/song/black-summer/1608013513
[31200825ac]: https://music.apple.com/us/song/give-it-away/945581838
[9e121e025c]: https://music.apple.com/us/song/help/1699431734
[deedf9db51]: https://music.apple.com/us/song/here-without-you/1440739980
[3cfbc4ca5c]: https://music.apple.com/us/song/war-pigs-luke-s-wall/785232520
[ea928ce7ba]: https://music.apple.com/us/song/voices/1030601024
[519023dd4f]: https://music.apple.com/us/song/burn-it-down/518869937
[053746421f]: https://music.apple.com/us/song/new-divide/1745057599
[b35f5750a2]: https://music.apple.com/us/song/the-beautiful-people/1440804361
[1a83a25e78]: https://music.apple.com/us/song/until-it-sleeps-remastered/1806720493
[1e628e1180]: https://music.apple.com/us/song/not-falling/250762894
[7283d8a795]: https://music.apple.com/us/song/hurt/1440838114
[89a055f1ef]: https://music.apple.com/us/song/brain-damage/1665304040
[ab69697b6a]: https://music.apple.com/us/song/a-symptom-of-being-human/1606457294
[124dd10cb6]: https://music.apple.com/us/song/for-i-am-death/1830382225
[e494ca3150]: https://music.apple.com/us/song/one-more-time/1707258049
[8817125acf]: https://music.apple.com/us/song/stuck-in-my-head/1752949982
[9b742259d5]: https://music.apple.com/us/song/t-n-t/574124824
[c473308dbe]: https://music.apple.com/us/song/wake-me-up-when-september-ends/1161539483
[a48f6c1a25]: https://music.apple.com/us/song/are-you-ready/1425820709
[fa6bb23975]: https://music.apple.com/us/song/nobody-wants-to-die/1649426787
[c052f755d5]: https://music.apple.com/us/song/how-did-you-love/1025208967
[4215da5de1]: https://music.apple.com/us/song/by-the-way/948438464
[cd03fcfb65]: https://music.apple.com/us/song/like-a-villain/1817382445
[cc70fecc0e]: https://music.apple.com/us/song/dead-inside/1820484064
[e01c25a87f]: https://music.apple.com/us/song/rest-in-peace/1589343379
[47a50545ab]: https://music.apple.com/us/song/for-those-about-to-rock-we-salute-you/574055178
[5d79e7bdb0]: https://music.apple.com/us/song/dead-man-walking/1584623549
[cd0bd4fcf2]: https://music.apple.com/us/song/livin-on-the-edge/1680799208
[bc0560e6bd]: https://music.apple.com/us/song/lifeline/1581509335
[f8a52ef5df]: https://music.apple.com/us/song/monkey-wrench/334812033
[ded72076bb]: https://music.apple.com/us/song/dazed-and-confused/580708943
[41f1497697]: https://music.apple.com/us/song/shot-in-the-dark/1533816314
[9c6aa66b37]: https://music.apple.com/us/song/making-a-fire/1538671508
[815a30b848]: https://music.apple.com/us/song/flagpole-sitta/1440923493
[d1ab3fdd92]: https://music.apple.com/us/song/rock-you-like-a-hurricane/1434894258
[def0f20e5c]: https://music.apple.com/us/song/shame-shame/1538671510
[28f0dd3683]: https://music.apple.com/us/song/distance/1685901195
[8569e88864]: https://music.apple.com/us/song/hells-bells/574050495
[160ede491e]: https://music.apple.com/us/song/the-vengeful-one/1006937451
[c06c8d9101]: https://music.apple.com/us/song/a-little-bit-off/1487244862
[2bf9173d9b]: https://music.apple.com/us/song/all-within-my-hands/579379136
[84c9814d41]: https://music.apple.com/us/song/far-behind/734450288
[e304527bf8]: https://music.apple.com/us/song/insane-in-the-brain/266797417
[38d5dab50c]: https://music.apple.com/us/song/bleed-it-out/1622307215
[3b081063ba]: https://music.apple.com/us/song/crawling/528437426
[43d4b5b503]: https://music.apple.com/us/song/lying-from-you/590423283
[cd24ab080a]: https://music.apple.com/us/song/hardwired/1145498517
[4785f21022]: https://music.apple.com/us/song/kickstart-my-heart/1606706536
[1d0e088724]: https://music.apple.com/us/song/gotta-get-away/1485043446
[d5b803ad98]: https://music.apple.com/us/song/flying-high-again/1592004621
[0e5a26a11f]: https://music.apple.com/us/song/45/321038527
[33f7e99c4e]: https://music.apple.com/us/song/jumper/271978748
[7f39da8d96]: https://music.apple.com/us/song/everything-ends/1774393631
[693f0406e5]: https://music.apple.com/us/song/crawl-back-to-my-coffin/1823939180
[75fa33a73a]: https://music.apple.com/us/song/magnetic/1734536497
[b5256ddd06]: https://music.apple.com/us/song/breaking-the-habit/528437026
[401b96d41e]: https://music.apple.com/us/song/specter/1831595386
[9f082d98cb]: https://music.apple.com/us/song/bored/1820237458
[06df83ce91]: https://music.apple.com/us/song/i-refuse-feat-maria-brink-2025-version/1810771131
[ac8ee76a4a]: https://music.apple.com/us/song/freefall/1739158021
[b84630a300]: https://music.apple.com/us/song/apologies/1811868494
[6ed20b4e6c]: https://music.apple.com/us/song/water-song-janie-s-got-a-gun/1440824725
[535f40aeb4]: https://music.apple.com/us/song/mayday/1811868495
[b41836f8b5]: https://music.apple.com/us/song/i-am-machine/967339624
[d70bad9018]: https://music.apple.com/us/song/november-rain/1440896193
[8066c1b191]: https://music.apple.com/us/song/too-far-gone/1655432397
[de3ec0ff23]: https://music.apple.com/us/song/i-write-sins-not-tragedies/80456409
[3552874fdb]: https://music.apple.com/us/song/beyond/1689546756
[721241095b]: https://music.apple.com/us/song/unstoppable/1646032789
[47fdc03632]: https://music.apple.com/us/song/are-you-gonna-be-my-girl/1778048261
[92e9c99ba3]: https://music.apple.com/us/song/down-rodeo/390538410
[01836177ce]: https://music.apple.com/us/song/loser/1440891592
[1a37ce99e8]: https://music.apple.com/us/song/you-don-t-know-how-it-feels/892018547
[31709f4306]: https://music.apple.com/us/song/shoot-to-thrill/574050498
[18ce940c3a]: https://music.apple.com/us/song/daylight/1606457302
[9b80d3e96f]: https://music.apple.com/us/song/wasteland/1440760458
[dd5222248d]: https://music.apple.com/us/song/fight-for-your-right/1440912353
[baf6c8539d]: https://music.apple.com/us/song/face-down/806224710
[9a45e6e31d]: https://music.apple.com/us/song/loser/1452011949
[d9115e77ac]: https://music.apple.com/us/song/panama/977495522
[a0f565c4c6]: https://music.apple.com/us/song/no-one-like-you/1440922031
[518bdde4bf]: https://music.apple.com/us/song/trippin-on-a-hole-in-a-paper-heart/302229819
[20ffe34e94]: https://music.apple.com/us/song/realize/1533816307
[6f690104b8]: https://music.apple.com/us/song/no-sleep-till-brooklyn/724971792
[a1b6c818e6]: https://music.apple.com/us/song/ramble-on/580708477
[7b80203ac8]: https://music.apple.com/us/song/breaking-down/1452693520
[e939e558e8]: https://music.apple.com/us/song/remember-when/1694927629
[bbb6efc86c]: https://music.apple.com/us/song/all-along-the-watchtower/357653191
[72abfdeba0]: https://music.apple.com/us/song/dangerous/1517736799
[e2086b57a8]: https://music.apple.com/us/song/santa-monica-re-recorded-slowed-reverb/1686253646
[e5e92dda9b]: https://music.apple.com/us/song/learning-to-fly/1469579718
[3643f21187]: https://music.apple.com/us/song/superblood-wolfmoon/1495371459
[7bbc1172c5]: https://music.apple.com/us/song/sickness/1496280504
[2093835e5e]: https://music.apple.com/us/song/love-in-an-elevator/1440913404
[4bf3d6e219]: https://music.apple.com/us/song/beacon/6764034396
[614ee134f2]: https://music.apple.com/us/song/manufactured-extinct/995383352
[3c9ca3ed62]: https://music.apple.com/us/song/perfect-strangers/1470534347
[2333655738]: https://music.apple.com/us/song/just-got-lucky/1727790314
[1b4f2a175f]: https://music.apple.com/us/song/new-messiah/950232299
[7736a8c8c8]: https://music.apple.com/us/song/hunters-moon/1603122626
[70d7a53b26]: https://music.apple.com/us/song/it-s-so-easy/1377813289
[57771385ac]: https://music.apple.com/us/song/this-is-now/1440737878
[ad925e1c73]: https://music.apple.com/us/song/radioactive/1440855760
[fbac549980]: https://music.apple.com/us/song/numb-encore/182601389
[606a381c18]: https://music.apple.com/us/song/over-the-hills-and-far-away/580707919
[fd9c249b63]: https://music.apple.com/us/song/runaway/1526170283
[4c5409ac09]: https://music.apple.com/us/song/master-of-disguise/60356363
[de4eb17e9e]: https://music.apple.com/us/song/tuesday-s-gone/1484424554
[461656014a]: https://music.apple.com/us/song/all-nightmare-long/579368315
[be1729fd1f]: https://music.apple.com/us/song/crash-course-in-brain-surgery/579370562
[76fee08b8d]: https://music.apple.com/us/song/creeping-death/579149040
[b76edd020d]: https://music.apple.com/us/song/halo-on-fire/1145498742
[6885cdb69d]: https://music.apple.com/us/song/helpless/579370559
[d182b784b7]: https://music.apple.com/us/song/the-thing-that-should-not-be/1275600555
[0a3b317ad4]: https://music.apple.com/us/song/don-t-tell-me-you-love-me/1440767565
[fda014ae42]: https://music.apple.com/us/song/the-great-southern-trendkill/1144142641
[f40673d674]: https://music.apple.com/us/song/under-pressure-feat-david-bowie/1434899944
[d9671c6e69]: https://music.apple.com/us/song/start-me-up/1584840350
[2bf1ede43c]: https://music.apple.com/us/song/i-remember-you/1727790519
[b72a3c4011]: https://music.apple.com/us/song/extra-sexual-extraterrestrial-live/1861036472
[1e139cad9a]: https://music.apple.com/us/song/love-song/1440906840
[e2c289e92a]: https://music.apple.com/us/song/the-covenant/1826037358
[1ee2ca91e3]: https://music.apple.com/us/song/look-out-for-me/1805821337
[6f56a4bf83]: https://music.apple.com/us/song/so-far-so-fake/1651691473
[fba3a0d3af]: https://music.apple.com/us/song/demonic-depression/1794563071
[5f346c52eb]: https://music.apple.com/us/song/pale-horse/1813978941
[ea80e28cc3]: https://music.apple.com/us/song/infinite-source/1825435153
[7c50dcb73f]: https://music.apple.com/us/song/nothin/1858411509
[2dc96aedda]: https://music.apple.com/us/song/the-spell/1822843353
[da6b9b4a2e]: https://music.apple.com/us/song/searchlight/1852100382
[0c54047a1c]: https://music.apple.com/us/song/caramel/1800533447
[73273a58d8]: https://music.apple.com/us/song/the-end-feat-babymetal-2025-version/1831370163
[8dc01fbb5b]: https://music.apple.com/us/song/my-only-angel-feat-steve-martin-desert-road-version/1844814769
[464d5a7632]: https://music.apple.com/us/song/asking-for-a-friend/1847680351
[1c7c57df87]: https://music.apple.com/us/song/as-alive-as-you-need-me-to-be/1826198226
[f6d7b4c94c]: https://music.apple.com/us/song/my-mind-is-a-mountain/1825435149
[cd236d2f72]: https://music.apple.com/us/song/spit-xxv/1827898136
[d9f28d8f2e]: https://music.apple.com/us/song/today-s-song/1823739979
[be0f68a3a9]: https://music.apple.com/us/song/i-disappear/579145451
[07d84007d8]: https://music.apple.com/us/song/the-end/1808747032
[d4caaff34c]: https://music.apple.com/us/song/wasting-my-time/311276315
[93876a360d]: https://music.apple.com/us/song/emergence/1800533191
[196a36af69]: https://music.apple.com/us/song/by-a-monsters-hand/1794563062
[93f66e2aab]: https://music.apple.com/us/song/blur/1735828506
[f846b988dc]: https://music.apple.com/us/song/the-red/270139035
[fcdfcba89f]: https://music.apple.com/us/song/dance-kid-dance/1791163743
[2fe81f4154]: https://music.apple.com/us/song/black-butterfly/1709502277
[8f0c54fffe]: https://music.apple.com/us/song/walls-come-down/1751901666
[4daeac04c5]: https://music.apple.com/us/song/what-remains/1757643932
[29751592fa]: https://music.apple.com/us/song/pieces/1734457811
[58e2d35071]: https://music.apple.com/us/song/barely-breathing-feat-against-the-current/1721247250
[27b53886fd]: https://music.apple.com/us/song/truth/1649793584
[d2c1054c95]: https://music.apple.com/us/song/i-was-alive/1692845771
[934e07921d]: https://music.apple.com/us/song/rebel-yell/1728132314
[a177ea3d50]: https://music.apple.com/us/song/this-is-the-way-feat-dmx/1724478365
[d088f550ca]: https://music.apple.com/us/song/dilemma/1740966503
[e40a47fc92]: https://music.apple.com/us/song/friendly-fire/1745058115
[9bfb2c8249]: https://music.apple.com/us/song/s-ck/1726673853
[f1d56d8913]: https://music.apple.com/us/song/devil-you-know/1700433422
[f39c4a7561]: https://music.apple.com/us/song/bad-man/1646032787
[4f192c847b]: https://music.apple.com/us/song/testify/192816689
[688df6838b]: https://music.apple.com/us/song/sex-type-thing/1263219666
[bdd8b06d59]: https://music.apple.com/us/song/the-dirt-i-m-buried-in/1650504522
[49303b08bd]: https://music.apple.com/us/song/blood-in-the-water/1676323506
[0124ab5da1]: https://music.apple.com/us/song/last-resort-reimagined/1694040594
[d18b825e8d]: https://music.apple.com/us/song/best-of-you/334812012
[15f858573f]: https://music.apple.com/us/song/somebody-told-me/1440891175
[b10cb05bbe]: https://music.apple.com/us/song/nobody/1748150708
[c5ffbc06c3]: https://music.apple.com/us/song/rescued/1682993467
[0505825be8]: https://music.apple.com/us/song/clint-eastwood/850583583
[28259c5a2d]: https://music.apple.com/us/song/no-apologies/1603609535
[a6b0996ec1]: https://music.apple.com/us/song/lowest-in-me/1757733530
[3a206373b0]: https://music.apple.com/us/song/saviour-ii/1819804343
[736154e0fe]: https://music.apple.com/us/song/beguiled/6780521350
[9898837cbd]: https://music.apple.com/us/song/i-am-the-weapon/1609130422
[10591ff0ff]: https://music.apple.com/us/song/sabotage/724971921
[f2dcd5abae]: https://music.apple.com/us/song/mr-brownstone/1377813295
[c1808fb99f]: https://music.apple.com/us/song/painkiller/207178166
[b1abd661d6]: https://music.apple.com/us/song/symphony-of-destruction/725812418
[ecb72de7b6]: https://music.apple.com/us/song/nevermore/573711282
[2267a85954]: https://music.apple.com/us/song/bringing-on-the-pain/1671108721
[24ee9a9630]: https://music.apple.com/us/song/electric-head-pt-1-the-agony/1440749910
[1c7b252929]: https://music.apple.com/us/song/times-like-these/1619239934
[aa32ec952b]: https://music.apple.com/us/song/masterpiece/1640479585
[ce54fee457]: https://music.apple.com/us/song/tippa-my-tongue/1653954334
[1511ed8429]: https://music.apple.com/us/song/it-s-a-long-way-to-the-top-if-you-wanna-rock-n-roll/574124819
[f9c533842b]: https://music.apple.com/us/song/no-one-knows/1443996879
[8c447fcce6]: https://music.apple.com/us/song/if-tomorrow-never-comes/1581509342
[7bf69a92f4]: https://music.apple.com/us/song/mystery/1566166549
[5255af3525]: https://music.apple.com/us/song/the-steeple/1628825166
[a236b928ab]: https://music.apple.com/us/song/the-memory-remains-feat-marianne-faithfull/579374219
[002a32cfb9]: https://music.apple.com/us/song/love-dies-young/1538671519
[f852aa2a49]: https://music.apple.com/us/song/planet-zero/1606457287
[c3836e67a4]: https://music.apple.com/us/song/die4u/1583959120
[744a24ae68]: https://music.apple.com/us/song/father-of-mine/1435638466
[8c42058a20]: https://music.apple.com/us/song/shotgun-blues/1586126256
[9467b0a374]: https://music.apple.com/us/song/warrior-feat-travis-barker/1673098884
[958071af87]: https://music.apple.com/us/song/scarlet-cross/1819701705
[e3fd5b4cd6]: https://music.apple.com/us/song/hard-skool/1586724616
[82016332cd]: https://music.apple.com/us/song/all-the-small-things/1444118647
[71398c072f]: https://music.apple.com/us/song/dude-looks-like-a-lady/1440746591
[75c20cd572]: https://music.apple.com/us/song/everything-zen/1707602646
[11f7fc09b0]: https://music.apple.com/us/song/mars-simula/1545068582
[23b6e2e893]: https://music.apple.com/us/song/unforgettable/1710147292
[e9e40f99d9]: https://music.apple.com/us/song/the-devil-s-bleeding-crown/1440847416
[f25723c36a]: https://music.apple.com/us/song/cherry-pie/198468208
[ea95def1a1]: https://music.apple.com/us/song/nowhere-generation/1556349464
[7fa2e8ca69]: https://music.apple.com/us/song/wonderwall-remastered/1525933490
[915d46dc34]: https://music.apple.com/us/song/burden-in-my-hand/1423646243
[b95dc2f8c8]: https://music.apple.com/us/song/adrenaline/1553258642
[b869bddb19]: https://music.apple.com/us/song/natural/1437948594
[b49e4dde3f]: https://music.apple.com/us/song/right-here-album-version/76773857
[8a295c5242]: https://music.apple.com/us/song/mercy/1566904908
[33e762b070]: https://music.apple.com/us/song/living-the-dream/1487244861
[b33655b659]: https://music.apple.com/us/song/breathe-again/1555602517
[be1fda337a]: https://music.apple.com/us/song/death-by-rock-and-roll/1537709140
[92bd5d3510]: https://music.apple.com/us/song/trials/1577242551
[acc44ea777]: https://music.apple.com/us/song/runnin-down-a-dream/1440825631
[21895df9af]: https://music.apple.com/us/song/waiting-on-a-war/1538671512
[7d81090033]: https://music.apple.com/us/song/hometown/1549920531
[642c2624f0]: https://music.apple.com/us/song/slow-ride-single-version/897227253
[0ba047cefe]: https://music.apple.com/us/song/make-me-bad/193153075
[4f809fcd38]: https://music.apple.com/us/song/learn-to-walk-again/1695703572
[50ef97ff66]: https://music.apple.com/us/song/ohms/1528075505
[6d6ef496d0]: https://music.apple.com/us/song/my-way-soon/1543008227
[45ea2f684f]: https://music.apple.com/us/song/somebody-that-i-used-to-know/1522750649
[8d28aed1b8]: https://music.apple.com/us/song/heavy-is-the-head-feat-chris-cornell/1585299008
[018b6ccc1b]: https://music.apple.com/us/song/i-will-buy-you-a-new-life-re-recorded/461630881
[4379601395]: https://music.apple.com/us/song/purple-haze/357225355
[22cc40d7ef]: https://music.apple.com/us/song/bleeding-me-remastered/1806720496
[0206006bad]: https://music.apple.com/us/song/buddy-holly/1440869921
[2695cf9a6a]: https://music.apple.com/us/song/atlas-falls/1512827486
[d7390b3a0c]: https://music.apple.com/us/song/beverly-hills/1440865427
[365341f01d]: https://music.apple.com/us/song/radioactive-feat-kendrick-lamar/1445055476
[1149f7fa4e]: https://music.apple.com/us/song/lake-of-fire-live-acoustic/1440893065
[15f386a8cc]: https://music.apple.com/us/song/flowers-on-a-grave/1501443858
[36a8b5aff1]: https://music.apple.com/us/song/some-kind-of-monster/579379126
[8c1230613a]: https://music.apple.com/us/song/ghost/1436744863
[27cb9cb433]: https://music.apple.com/us/song/wolf-totem-feat-jacoby-shaddix/1700686242
[e2bafedc80]: https://music.apple.com/us/song/the-unforgiven-iii/579368317
[df48d16118]: https://music.apple.com/us/song/ordinary-man-feat-elton-john/1493922866
[19e780379f]: https://music.apple.com/us/song/wash-it-all-away/1853963248
[f103d8b256]: https://music.apple.com/us/song/work/1508238501
[9d78983be1]: https://music.apple.com/us/song/come-together/1279719442
[20080e3d39]: https://music.apple.com/us/song/1979/712732634
[40ed43c8c0]: https://music.apple.com/us/song/rolling-7s/1482163911
[1fb7e57c63]: https://music.apple.com/us/song/inside-out/1487244859
[3626c7a3e3]: https://music.apple.com/us/song/back-in-black/574050602
[bf6906d1cb]: https://music.apple.com/us/song/thunderstruck/575998661
[9d48b07526]: https://music.apple.com/us/song/crazy/1440913824
[2aba29c1bf]: https://music.apple.com/us/song/walk-this-way/1660109283
[9829bc87e1]: https://music.apple.com/us/song/rooster/157317003
[81be661a13]: https://music.apple.com/us/song/would/157317248
[07a661234d]: https://music.apple.com/us/song/movies-2026-remastered/6790972970
[9b1edb7865]: https://music.apple.com/us/song/these-days/1427759195
[ca5d27d1b6]: https://music.apple.com/us/song/fight/1757916760
[b6d00f2d76]: https://music.apple.com/us/song/the-comeback-feat-craig-mabbitt-of-escape-the-fate/1577939784
[14886d6a07]: https://music.apple.com/us/song/dear-maria-count-me-in/502522511
[4362960b20]: https://music.apple.com/us/song/weightless-rerecorded/1811919736
[914de1b579]: https://music.apple.com/us/song/animals/1533388859
[e24a23a909]: https://music.apple.com/us/song/doomsday/1485076238
[8a922464b5]: https://music.apple.com/us/song/cochise/208294752
[7f2337a34c]: https://music.apple.com/us/song/i-am-the-highway/208294980
[3c27038d60]: https://music.apple.com/us/song/in-between/872815926
[5bb15a6240]: https://music.apple.com/us/song/the-lines/872815923
[6aa81e4d00]: https://music.apple.com/us/song/in-this-river/1437331630
[284ce0081f]: https://music.apple.com/us/song/stillborn-feat-ozzy-osbourne/1437328794
[b36729e049]: https://music.apple.com/us/song/iron-man/787845531
[9e0a0a759a]: https://music.apple.com/us/song/n-i-b/1198293401
[4523670b42]: https://music.apple.com/us/song/livin-on-a-prayer/1422955211
[b4fedd42e6]: https://music.apple.com/us/song/you-give-love-a-bad-name/1422954999
[f08397a9c8]: https://music.apple.com/us/song/breath/1440872268
[055baa9138]: https://music.apple.com/us/song/the-diary-of-jane-single-version/1440870739
[81ebdb0534]: https://music.apple.com/us/song/lit-up/1440627987
[e9ee441aa0]: https://music.apple.com/us/song/sorry/140862708
[e5da319967]: https://music.apple.com/us/song/machinehead-remastered/1440946056
[7344f9bf4d]: https://music.apple.com/us/song/swallowed-remastered/1443279742
[45be8e9e54]: https://music.apple.com/us/song/gel/1576793480
[85543ad3ac]: https://music.apple.com/us/song/heavy/1576791720
[85b48bdb16]: https://music.apple.com/us/song/my-sacrifice/1440718451
[3096da5f7e]: https://music.apple.com/us/song/with-arms-wide-open/1440631605
[69ac2e7f1e]: https://music.apple.com/us/song/her-black-wings/1440885826
[d445236f4f]: https://music.apple.com/us/song/twist-of-cain/1440880563
[85b03c0234]: https://music.apple.com/us/song/shelf-in-the-room/1423333492
[2b1399bca5]: https://music.apple.com/us/song/the-down-town/1423333760
[8e179e40bf]: https://music.apple.com/us/song/photograph/1440902940
[2c11b0e6cf]: https://music.apple.com/us/song/rock-of-ages/1440902947
[a70ab7e7fd]: https://music.apple.com/us/song/down-with-the-sickness/1030601027
[149279c38f]: https://music.apple.com/us/song/the-sound-of-silence/1006937459
[ec645951e7]: https://music.apple.com/us/song/step-up/1440667118
[be18d58e0c]: https://music.apple.com/us/song/tear-away/1440777729
[ba4a8b86ca]: https://music.apple.com/us/song/bring-me-to-life/1440666111
[b5405cfe8e]: https://music.apple.com/us/song/call-me-when-you-re-sober/1440634107
[2f0cb74674]: https://music.apple.com/us/song/from-out-of-nowhere/83385250
[f067ace371]: https://music.apple.com/us/song/midlife-crisis/184673165
[e2039c8444]: https://music.apple.com/us/song/dance-dance/1440799368
[d31b9e6882]: https://music.apple.com/us/song/thnks-fr-th-mmrs/1440787031
[ad841c862b]: https://music.apple.com/us/song/popular-monster/1487801237
[7975dacf47]: https://music.apple.com/us/song/the-drug-in-me-is-you/1485046676
[16677d6c32]: https://music.apple.com/us/song/falling-on/1440767128
[bb61183d92]: https://music.apple.com/us/song/one-thing/1440630302
[a4f9dfeb6b]: https://music.apple.com/us/song/bad-company/1848984983
[0b702d38d2]: https://music.apple.com/us/song/wrong-side-of-heaven/1853966266
[f4ffcd6ac0]: https://music.apple.com/us/song/learn-to-fly/278229654
[c53ddb2429]: https://music.apple.com/us/song/the-pretender/262743414
[5b392dd59a]: https://music.apple.com/us/song/bad-day/203912551
[2878e8d63d]: https://music.apple.com/us/song/shimmer/158719348
[fac2431f2f]: https://music.apple.com/us/song/bad-habits/1731232203
[ba62bd9188]: https://music.apple.com/us/song/overrated/1647021683
[194488cd0a]: https://music.apple.com/us/song/awake/1440733697
[8e3f1cc4d6]: https://music.apple.com/us/song/voodoo/1440733692
[272233efc3]: https://music.apple.com/us/song/american-idiot/207192732
[616d783455]: https://music.apple.com/us/song/basket-case/1160082180
[c930fbd049]: https://music.apple.com/us/song/sweet-child-o-mine/1377826892
[0cbbeeabc2]: https://music.apple.com/us/song/welcome-to-the-jungle/1377826728
[68f3a0fb7f]: https://music.apple.com/us/song/shamrocks-and-shenanigans/1604628166
[9e5c48d919]: https://music.apple.com/us/song/who-s-the-man/1604619994
[7e554aaeba]: https://music.apple.com/us/song/nice-to-know-you/271792714
[6037dee1cc]: https://music.apple.com/us/song/stellar/187454389
[54b5e3ee46]: https://music.apple.com/us/song/save-me/1520495045
[6f3a3ec261]: https://music.apple.com/us/song/son-of-a-sinner/1584623553
[1ea798f16c]: https://music.apple.com/us/song/pain/1454825817
[9add53e2ad]: https://music.apple.com/us/song/sweetness/1450030117
[9609af080b]: https://music.apple.com/us/song/blue-on-black/316824647
[49e341c72d]: https://music.apple.com/us/song/cowboy/1433803665
[e68337d1df]: https://music.apple.com/us/song/only-god-knows-why/1556413814
[659ef77be6]: https://music.apple.com/us/song/falling-away-from-me/193152917
[293cbb29d3]: https://music.apple.com/us/song/got-the-life/1165631038
[78771c168d]: https://music.apple.com/us/song/stairway-to-heaven/580708180
[0597535a1c]: https://music.apple.com/us/song/whole-lotta-love/580708471
[0e0cc23e48]: https://music.apple.com/us/song/american-woman/723338394
[7eec44e048]: https://music.apple.com/us/song/are-you-gonna-go-my-way/712353794
[f3a3ade138]: https://music.apple.com/us/song/nookie/1440754476
[d7da5fadc7]: https://music.apple.com/us/song/rollin-air-raid-vehicle/1440788202
[0d68dab58d]: https://music.apple.com/us/song/in-the-end/590431785
[d5a6e047e2]: https://music.apple.com/us/song/numb/590423552
[ac72fefbe6]: https://music.apple.com/us/song/glamour-boys/193145121
[c408e55cda]: https://music.apple.com/us/song/type/158439925
[77b4396058]: https://music.apple.com/us/song/sweet-home-alabama/1413948381
[366789ab56]: https://music.apple.com/us/song/that-smell/1469583632
[29a87137bb]: https://music.apple.com/us/song/saint-joe-on-the-school-bus/726131505
[969d9211a5]: https://music.apple.com/us/song/sherry-fraser/726131508
[dc906674f2]: https://music.apple.com/us/song/enter-sandman/1572051818
[f67c8e476c]: https://music.apple.com/us/song/nothing-else-matters/1572046444
[d960d9580f]: https://music.apple.com/us/song/head-like-a-hole/1440941002
[2ec42d1d03]: https://music.apple.com/us/song/the-hand-that-feeds/1440852198
[98ccbb2f41]: https://music.apple.com/us/song/about-a-girl/669728225
[c574f313f4]: https://music.apple.com/us/song/lithium/1440783764
[c04826b79b]: https://music.apple.com/us/song/bark-at-the-moon/192826926
[67417d0e23]: https://music.apple.com/us/song/no-more-tears/209695373
[9cecdb6558]: https://music.apple.com/us/song/boom/300206617
[fd98ada7aa]: https://music.apple.com/us/song/youth-of-the-nation/204672806
[a3836a4835]: https://music.apple.com/us/song/cemetery-gates/1163813975
[f8b3e34b05]: https://music.apple.com/us/song/cowboys-from-hell/1163813971
[6750762bbe]: https://music.apple.com/us/song/getting-away-with-murder-2020/1546439028
[7a4eb13ed4]: https://music.apple.com/us/song/scars/1440769664
[20fcab6820]: https://music.apple.com/us/song/alive/425465319
[1c90e10fdc]: https://music.apple.com/us/song/jeremy/425465353
[183ac20a9c]: https://music.apple.com/us/song/nothin-but-a-good-time/716552513
[da7c1256ac]: https://music.apple.com/us/song/talk-dirty-to-me/715750443
[ef8e75571d]: https://music.apple.com/us/song/100-in-a-55/1423252957
[acae1208bc]: https://music.apple.com/us/song/trenches/634685023
[ba7001043c]: https://music.apple.com/us/song/blurry/1450664888
[66d20e346b]: https://music.apple.com/us/song/drift-and-die/1450664885
[8b8aad1894]: https://music.apple.com/us/song/another-one-bites-the-dust/1440650719
[eaed4b2623]: https://music.apple.com/us/song/we-are-the-champions/1440651281
[bc24b764ab]: https://music.apple.com/us/song/mama-weer-all-crazee-now/192486756
[9586cc36ba]: https://music.apple.com/us/song/metal-health-bang-your-head/190737658
[a3f4237d6b]: https://music.apple.com/us/song/bulls-on-parade/390538384
[1e46fd047d]: https://music.apple.com/us/song/guerrilla-radio/192816698
[6555a0355c]: https://music.apple.com/us/song/californication/947688104
[087944cb79]: https://music.apple.com/us/song/dani-california/208036515
[70af4e0b20]: https://music.apple.com/us/song/prayer-of-the-refugee/1440858616
[48e19ead01]: https://music.apple.com/us/song/ready-to-fall/1440858505
[eaeb6f4143]: https://music.apple.com/us/song/living-dead-girl/1440845809
[00bac6aea1]: https://music.apple.com/us/song/superbeast/1440845804
[aaae7f4d57]: https://music.apple.com/us/song/always/1422924591
[696f53bdd2]: https://music.apple.com/us/song/ladies-and-gentlemen/1422939015
[d504901508]: https://music.apple.com/us/song/remedy/1440645699
[37b3ba3155]: https://music.apple.com/us/song/rise-above-this/1440747418
[3c1e5f8738]: https://music.apple.com/us/song/over-your-shoulder/79028233
[053c7543d5]: https://music.apple.com/us/song/water-s-edge/321977253
[ef84c8b7a4]: https://music.apple.com/us/song/second-chance/279812225
[3a89b6c418]: https://music.apple.com/us/song/sound-of-madness/279812223
[1e7295db6d]: https://music.apple.com/us/song/fell-on-black-days/1440811476
[ebe6106b6f]: https://music.apple.com/us/song/outshined/1440885678
[3cf8affeec]: https://music.apple.com/us/song/it-s-been-awhile/263058565
[6527a9df0c]: https://music.apple.com/us/song/so-far-away/1506599928
[2e9cf50c1b]: https://music.apple.com/us/song/absolute-zero/563994155
[9d9b178ec6]: https://music.apple.com/us/song/through-glass/214473041
[d5a966f807]: https://music.apple.com/us/song/interstate-love-song/3631594
[daeb5a7231]: https://music.apple.com/us/song/vasoline/1466652602
[b1677a24e6]: https://music.apple.com/us/song/still-waiting/1440665404
[0b1b69d25d]: https://music.apple.com/us/song/b-y-o-b/187472354
[1230f74b9a]: https://music.apple.com/us/song/chop-suey/273714640
[1afc94aca9]: https://music.apple.com/us/song/spiders/1810760513
[aa844dcf27]: https://music.apple.com/us/song/dreams-remastered-2026/6765559422
[cfd753ae41]: https://music.apple.com/us/song/linger-remastered-2026/6765559429
[4dbb3646dd]: https://music.apple.com/us/song/come-out-and-play-keep-em-separated/1485034810
[5c21f65f76]: https://music.apple.com/us/song/i-can-t-get-no-satisfaction/1706514941
[d272446650]: https://music.apple.com/us/song/gimme-shelter-remastered-2019/1500642840
[b4eb2992a3]: https://music.apple.com/us/song/1979-remastered-2012/721224621
[67b937fdb5]: https://music.apple.com/us/song/today/721207666
[cd92ebef1e]: https://music.apple.com/us/song/choke/1565468402
[d64976a613]: https://music.apple.com/us/song/money/1614722179
[83c2b8a566]: https://music.apple.com/us/song/fell-in-love-with-a-girl/1533513365
[2642eab970]: https://music.apple.com/us/song/icky-thump/1533513465
[22cf656b4a]: https://music.apple.com/us/song/closer-to-the-edge/1440839706
[40ba0e732e]: https://music.apple.com/us/song/from-yesterday/1440839345
[9c15299a70]: https://music.apple.com/us/song/i-hate-everything-about-you/269975544
[614adea5f4]: https://music.apple.com/us/song/riot/266222076
[f6f3d3a435]: https://music.apple.com/us/song/american-girl/1465207805
[58a92aac1e]: https://music.apple.com/us/song/mary-jane-s-last-dance/1465207045
[3793ab6d2b]: https://music.apple.com/us/song/open-up-your-eyes/1440911509
[dba4fa014e]: https://music.apple.com/us/song/you-wanted-more/1443797582
[4e7b1da1f9]: https://music.apple.com/us/song/forty-six-2/1474185342
[a4b8e0f38c]: https://music.apple.com/us/song/schism/1474185654
[88e94860f8]: https://music.apple.com/us/song/heathens/1125281487
[eeaf86d943]: https://music.apple.com/us/song/ride/974485805
