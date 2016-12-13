/*Album abbreviations, used repeatedly through application
AKM = Almost Killed Me
SS = Separation Sunday
BAGIA = Boys and Girls in America
SP = Stay Positive
HIW = Heaven Is Whenever
TD = Teeth Dreams*/

var lyricArray=[];

function lyricLoad() {
	if ($("#akm").prop("checked")) {
		akmLoad();
	}
	if ($("#ss").prop("checked")) {
		ssLoad();
	}
	if ($("#bagia").prop("checked")) {
		bagiaLoad();
	}
	if ($("#sp").prop("checked")) {
		spLoad();
	}
	if ($("#hiw").prop("checked")) {
		hiwLoad();
	}
	if ($("#td").prop("checked")) {
		tdLoad();
	}	
}

function lyricArrayReset(){
	lyricArray = [];
}

function generateIpsum(){	
	var targetParagraphs = $("#paragraphs").val();
	
	for(j=0; j<targetParagraphs; j++){
			for(i=0; i<=5; i++){
			var ranNum = Math.floor(Math.random()*lyricArray.length);
			var lyric = (lyricArray[ranNum]);
			$("#output").append(lyric+"\n");
			lyricArray.splice(ranNum,1);
			}	
		$("#output").append("\n");	
	}
}

function akmLoad() {
	var akmArray = ["Woke up in the \'20s and there were flappers and fruits in white suits",
		"It was right before the crash, we got thrashed throughout the \'30s",
		"Queuing up for soup with scabby sores",
		"Then they sent us off to war",
		"We came back in the \'40s and there were wheelchairs, guns and tickertape",
		"We poured it on the floor and we made love to the interstates",
		"We got shiftless in the \'50s, holding hands and going steady",
		"Twisting into dark parts of the large midwestern cities",
		"Tripped right through the \'60s with some blissful little hippie",
		"Some Kennedys got shot while you were screwing San Francisco",
		"And the \'70s got heavy, we woke up on bloody carpets",
		"Got tangled up in gaslines, and I guess that\'s where it started",
		"The \'80s almost killed me, let\'s not recall them quite so fondly",
		"Some Kennedy OD\'ed while we watched on MTV",
		"And in the \'90s we were wired and well connected",
		"Put it all down on technology and lost everything we invested",
		"We gotta start it off with a positive jam",
		"We gotta start it with a positive jam, man",
		"Gotta start it with a positive jam",
		"All the sniffling indie kids: hold steady",
		"And all you clustered-up clever kids: hold steady",
		"And I got bored when I didn\'t have a band",
		"And so I started a band, man",
		"We\'re gonna start it with a positive jam",
		"Hold steady",
		"Pills and powders, baby, powders and pills",
		"We spent the night last night in Beverly Hills",
		"This chick, she looked just like Beverly Sills",
		"We got killed",
		"Tights and skirts, baby, skirts and tights",
		"We used to shake it up in Shaker Heights",
		"This chick, she looked just like Patty Smythe",
		"She seemed shaky but nice",
		"She said my name\'s Rick Danko, baby",
		"People call me One-Hour Photo",
		"I got some hazardous chemicals",
		"So drive around to the window",
		"She said my name\'s Robbie Robertson but people call me Robo",
		"I blew red white and blue right into a tissue",
		"I came right over the counter just to kiss you",
		"I came right over the counter just to kiss you",
		"Ginger and Jack and four or five Feminax",
		"Psycho eyes and a stovepipe hat",
		"A ray of light through tight white rayon slacks",
		"We got cracked",
		"Shoes and socks, baby, socks and shoes",
		"We spent the night last night in Newport News",
		"This chick, she looked just like Elizabeth Shue",
		"We got bruised",
		"She said my name\'s Steve Perry, baby",
		"People call me Circuit City",
		"I\'m so well connected",
		"My UPC is dialed into the system",
		"She said my name\'s Neal Schon but people call me Nina Simone",
		"Some people call me André Cymone",
		"\'Cause I survived the \'80s one time already",
		"And I don\'t recall it all that fondly",
		"So hold steady",
		"It was a blockbuster summer",
		"Moving pictures got us through to September",
		"They made a movie about me and you",
		"They made it half nude and half true",
		"It was a bloodsucking summer",
		"I spent half the time trying to get paid from our savior",
		"Swishing though the City Center",
		"I did a couple favors for these guys who looked like Tusken Raiders",
		"Kids with broken hearts, kids with broken bones",
		"Kids with kidney stones giving birth to bloody stereos",
		"Systems are all dripping wet with the gristle piss and the swizzlesticks",
		"Mary got a bloody nose from sniffing margarita mix",
		"She licked her lower lip and then she kissed that Hallelujah chick",
		"She came off kind of spicy but she tasted like those pickle chips",
		"Thought she was a dancer but her steps they made the records skip",
		"She came off kind of crunchy but she went down like a chicken strip",
		"Dripping wet with the special sauce",
		"She had a confident smile and a nervous cough",
		"And we got off",
		"She said, \"It\'s good to see you back in a bar band, baby.\"",
		"I said, \"It\'s great to see you\'re still in the bars.\"",
		"She said, \"It\'s good to see you back in a bar band, baby.\"",
		"I said, \"It\'s great to see you\'re still in the bars.\"",
		"Went down with a tallboy can and he woke up in a cargo van",
		"Went down with the girls gone wild and he woke up with a middle man",
		"Went down with like fourteen bucks and woke up with like sixteen grand",
		"Went down with some crust punk junk and woke up with a straight edge band",
		"That\'s not how he planned it",
		"Holly can\'t speak, she don\'t feel all that sweet",
		"About the places she sometimes has to go to get some sleep",
		"She said \"I\'m sorry, people think I\'m pretty.\"",
		"These clever kids are killing me",
		"For one they ain\'t that clever",
		"Number two, it really sucks when you get stuck here with these Trevors",
		"This was supposed to be a party",
		"Half the crowd is calling out for \"Born To Run\"",
		"The other half is calling out for \"Born To Lose\"",
		"Baby, we were born to choose",
		"We got the last call bar band really, really, really big decision blues",
		"We were born to bruise",];

	for(i=0; i<akmArray.length; i++){
		lyricArray.push(akmArray[i]);
	};
}

function ssLoad() {
	ssArray = ["They got to the part with the cattle and the creeping things, said I\'m pretty sure we\'ve heard this one before",
"Don\'t it all end up in some revelation with four guys on horses and violent red visions",
"Famine and death and pestilence and war?",
"I\'m pretty sure I heard this one before",
"You in the corner with a good looking drifter, two cups of coffee and ten packs of sugar",
"I heard Gideon saw you in Denver, he said you\'re contagious",
"Silly rabbit, tripping is for teenagers, murder is for murderers and hard drugs are for bartenders",
"I think I might have mentioned that before",
"He\'s got the pages in his pockets that he ripped out of the Bible from his bed stand in the motel",
"He likes the part where the traders get chased out from the temple",
"I guess I heard about original sin, I heard the dude blamed the chick, I heard the chick blamed the snake",
"I heard they were naked when they got busted and I heard things ain\'t been the same since",
"You on the streets with a tendency to preach to the choir, wired for sound and down with whatever",
"I heard Gideon did you in Denver",
"She\'s got a cross around her neck that she ripped off from a schoolgirl in the subway on a visit to the city",
"She likes how it looks on her chest with three open buttons",
"She likes the part where one brother kills the other, she has to wonder if the world ever will recover",
"\'Cause Cain and Abel seem to still be causing trouble",
"She said I was seeing double for three straight days after I got born again",
"It felt strange but it was nice and peaceful and it really pleased me to be around so many people",
"Of course, half of them were visions, half of them were friends from going through the program with me",
"Later on we did some sexy things, took a couple photographs and carved them into wood reliefs",
"But that\'s enough about me",
"Come on, tell me how you got down here into Ybor City",
"He said I got to the part about the exodus",
"And up to then I only knew it was a movement of the people",
"But if small town cops are like swarms of flies and blackened foil is like boils and hail",
"I\'m pretty sure I\'ve been through this before",
"It seemed like a simple place to score",
"And it seemed like a simple place to score",
"It seemed like a simple place to score and then some old lady came to the door",
"And said McKenzie Phillips doesn\'t live here anymore",
"Your little hoodrat friend makes me sick",
"But after I get sick I just get sad",
"\'Cause it burns being broke, hurts to be heartbroken",
"And always being both must be a drag",
"She\'s been calling me again",
"Your little hoodrat friend\'s been calling me again",
"And I can\'t stand all the things that she sticks into her skin",
"Like sharpened ballpoint pens and steel guitar strings",
"She says it hurts, but it\'s worth it",
"Tiny little text etched into her neck",
"It said \"Jesus lived and died for all your sins\"",
"She\'s got blue black ink and it\'s scratched into her lower back",
"Says \"Damn right, He\'ll rise again\" Yeah, damn right, she\'ll rise again",
"Damn right, she\'ll rise again",
"And I\'ve been dusted in the dark up in penetration park",
"And I\'ve been plastered",
"I\'ve been shaking hard and searching in a dirty storefront church",
"And I\'ve been plowed",
"But I ain\'t never been with your little hoodrat friend",
"I ain\'t never been with your little hoodrat friend",
"What makes you think I\'m getting with your little hoodrat friend?",
"Your little hoodrat friend got me high though",
"We were 17 and stuck up up in Osseo",
"She said it\'s funny how true love gets troubled by still water",
"And washed up in the Mississippi River",
"Her claddagh ring was pointed at the people",
"She said St. Theresa came to me in dreams",
"She said I ain\'t gonna do anything sexual with you",
"I\'m kinda saving myself for the scene",
"She said city center used to be the center of our scene",
"Now city center\'s over, no one really goes there",
"Back then we used to drink beneath this railroad bridge",
"Some nights the bus wouldn\'t even stop, there were just too many kids",
"I was waiting for my ride and I got jumped from behind",
"And I got punctured",
"I got stopped by the cops and they found it in my socks",
"And I got probed",
"Holly wore a string around her finger",
"She said it helps her to remember all the nights that we got over",
"Besides, it ties her outfit all together",
"Holly wore a string around her finger",
"There are strings attached to every single lover",
"But they still can\'t even tether us together",
"Listen to the back of the theater, I think they really love one another",
"There are strings attached to every single lover",
"When they say \"great white sharks\"",
"They mean the kind in big black cars",
"When they say \"killer whales\"",
"They mean they wailed on him \'til they killed him up in Penetration Park",
"Holly wore a cross to ward them off",
"She said, \"If they think you\'re a Christian then they won\'t bring in the dogs",
"And if they think you\'re a Catholic then they\'ll want to meet your boss.\"",
"Holly wore a cross to ward them off",
"Yeah, there\'s camps down by the banks of the river",
"And it\'s sketchy in the night but they mostly lay low in the light",
"Hey sweet recovery, come on, won\'t you wade into the water with me?",
"You know, there\'s camps down by the banks of the river",
"When they say \"black and tans\"",
"You know they mean the kind from the cans",
"We don\'t got time to mix it all together",
"I\'m a very busy man, man",
"She said, \"I dig those awkward silences",
"\'Cause I grew up in denial and went to school in Massachusetts.\"",
"And he said, \"Hi! I like to party on the problem blocks",
"And I can\'t stand it when the banging stops.\"",
"I saw her at the Party Pit",
"Yeah she was shaky but still trying to shake it",
"Half-naked and three-quarters wasted",
"She was completely alone",
"And I saw him at the riverbank",
"He was breaking bread and giving thanks",
"With crosses made of pipes and planks",
"Leaned up against the nitrous tanks",
"And he said, \"Take a hit,",
"Hold your breath and I\'ll dunk your head",
"And then when you wake up again",
"Yeah, you\'ll be high as hell and born again.\"",
"Yeah, there\'s strings attached to every single lover",
"There\'s strings attached to every single lover",
,];

	for(i=0; i<ssArray.length; i++){
		lyricArray.push(ssArray[i]);
	};
}

function bagiaLoad() {
	bagiaArray = ["You don\'t have to deal with the dealers",
"Let your boyfriend deal with the dealers",
"It only gets inconvenient",
"When you want to get high alone",
"You don\'t have to know how to get home",
"Let your boyfriend tell the driver the best way to go",
"It only gets kind of weird",
"When you wanna go home alone",
"You don\'t have to know the inspiring people",
"Let your boyfriend know the inspiring people",
"You can hang in the kitchen",
"Talk about the stars and the upcoming sequel",
"If you get tired of your boyfriend\'s things",
"There\'s always other boys, there\'s always other boyfriends",
"If you get tired of your boyfriend\'s scene",
"There\'s always other scenes, there\'s always other boyfriends",
"You don\'t have to deal with the dealers",
"Let your boyfriend deal with the dealers",
"It only gets inconvenient",
"When you want to get high alone",
"You don\'t have to go to the right kind of schools",
"Let your boyfriend come from the right kind of schools",
"You can wear his old sweatshirt",
"You can cover yourself like a bruise",
"If you get tired of your boyfriend\'s things",
"If you get tired of your football friends",
"If you get tired of the the car he drives",
"There\'s always other boys, you can make him like you",
"If you get tired of the music he likes",
"They say you don\'t have a problem until you start to do it alone",
"They say you don\'t have a problem until you start bringing it home",
"They say you don\'t have a problem until you start sleeping alone",
"She put $900 on the fifth horse in the sixth race",
"I think its name was Chips Ahoy",
"Came in six lengths ahead, we spent the whole next week getting high",
"At first I thought that shit hit on some tip that she got from some other boy",
"We were overjoyed",
"I got a girl and she don\'t have to work",
"She can tell which horse is gonna finish in first",
"Some nights the painkillers make the pain even worse",
"Came in six lengths ahead",
"We spent the whole next week getting high",
"I love but girl but I can\'t tell if she\'s having a good time",
"How am I supposed to know that you\'re high if you won\'t let me touch you?",
"How am I supposed to know that you\'re high if you won\'t even dance?",
"She\'s hard on the heart",
"She\'s soft to the touch",
"She gets migraine headaches",
"When she does it too much",
"She always does it too much",
"The guys were feeling good about their liquor run",
"The girls were kinda flirting with the setting sun",
"We all kinda fumbled through the Jitterbug",
"We were all powered up on some new upper drug",
"Everyone was funny and everyone was pretty",
"And everyone was coming towards the center of the city",
"The dance floor was crowded, the bathrooms were worse",
"We kissed in your car and we drank from your purse",
"I had my mouth on her nose",
"When the chaperon said that we were dancing too close",
"We had some massive nights, every song was right",
"All that wine was tight",
"And your friends were pretty cool",
"And my friends were acting cool",
"And there weren\'t any fights",
"There\'s usually one or two",
"Some guys they get a little bit uptight",
"Some girls they got something to prove",
"We had some massive highs",
"We had some crushing lows",
"We had some lusty little crushes",
"We had those all ages hardcore matinee shows",
"I was down on my knees",
"When the chaperon said that it was time for me to leave",
"We had some massive nights",
"She had the gun in her mouth",
"And she was shooting up at her dreams",
"When the chaperon said that we\'d been crowned",
"The king and the queen",
];

	for(i=0; i<bagiaArray.length; i++){
		lyricArray.push(bagiaArray[i]);
	};
}

function spLoad() {
	spArray = ["Me and my friends are like",
"The drums on \"Lust for Life\"",
"We pound it out on floor toms",
"Our psalms are sing-along songs",
"This old town is lifeless",
"Been that way our whole lives, just",
"Work at the mill until you die",
"Work at the mill and then you die",
"We\'re gonna build something this summer",
"(Gonna build something this summer)",
"We\'ll put it back together",
"Raise up a giant ladder",
"With love and trust and friends and hammers",
"We\'re gonna lean this ladder",
"Up against the water tower",
"Climb up to the top and drink and talk",
"(This summer!)",
"Me and my friends are like",
"Doublewhiskeycokenoice",
"We drink along in double time",
"Might drink too much but we feel fine",
"Summer grant us all the power",
"To drink on top of watertowers",
"With love and trust and shows all summer",
"(Get hammered!)",
"Let this be my annual reminder",
"That we could all be something bigger",
"I went to your schools. I did my detention",
"But the walls were so gray that I couldn\'t pay attention",
"I read your gospel, it moved me to tears",
"But I couldn\'t find the hate and I couldn\'t find the fear",
"I met your saviour, I knelt at his feet",
"And he took my ten bucks and he went down the street",
"I tried to believe all the things that you said",
"But my friends that aren\'t dying are already dead",
"Raise a toast to Saint Joe Strummer",
"I think he might have been our only decent teacher",
"Getting older makes it harder to remember",
"We are our only saviours",
"(Whoa-oh-oh-oh, whoa-oh-oh-oh, whoa-oh-oh-oh)",
"I gotta lotta old friends that are gettin\' back in touch",
"And it\'s a pretty good feelin, yeah it feels pretty good",
"I get a lotta double-takes when I\'m comin\' around the corners",
"And it\'s mostly pretty nice, yeah it\'s mostly pretty alright",
"\'Cause most kids give me credit for being down with it",
"When it was back in the day, back when things were way different",
"When the Youth of Today and the early 7 Seconds",
"Taught me some of life\'s most valuable lessons",
"There\'s gonna come a time when the scene\'ll seem less sunny",
"It\'ll probably get druggy and the kids\'ll seem too skinny",
"There\'s gonna come a time when she\'s gonna have to go",
"With whoever\'s gonna get her the highest",
"There\'s gonna come a time when the true scene leaders",
"Forget where they differ and get big picture",
"\'Cause the kids at the shows, they\'ll have kids of their own",
"The sing-along songs will be our scriptures",
"When the chaperone crowned us the king and the queen",
"I knew that we\'d arrived at a unified scene",
"And all those little lambs from my dreams",
"Well, they were there too",
"\'Cause it\'s one thing to start it with a positive jam",
"And it\'s another thing to see it all through",
"And we couldn\'t have even done this if it wasn\'t for you",
"We gotta stay positive",
"They used to think it was so cute when she said Dy\'er Mak\'er",
"All the boys knew it was a joke about Jamaica",
"She\'d always find a ride back home from the bar",
"She used to feel so stupid when they\'d talk about the music",
"Born into every single tune",
"They used to hum against her lips with their hands on her hips",
"They used to kiss in the car",
"Dancing days, houses of the holy",
"Hot child in the city in the middle of the prairie",
"Flirting with the boys with all her charms",
"First the laugh, then the eyes",
"Then the touch him on the arms",
"Then the drinks, they never seemed to cost money",
"Saturday night was a runway that extended into Sunday",
"And sometimes Monday",
"Back then it was beautiful",
"The boys were sweet and musical",
"The laser lights looked mystical",
"Messed up still felt magical",
"Girls didn\'t seem so difficult",
"Boys didn\'t seem so typical",
"It was warm and white and wonderful",
"We were all invincible",
"Tired eyes, trampled under foot",
"Dazed and confused, c-c-c-cocaine blues",
"She hasn\'t gotten any eye contact tonight",
"The boys are getting younger and the bands are getting louder",
"And the new girls are coming up like some white unopened flowers",
"She\'s pretty sure that that\'s where their power is",
"Back then it was unified",
"The punks, the skins, the greaser guys",
"Then one summer two kids died",
"One of them was crucified",
"Now it\'s so competitive",
"The sleeplessness and sedatives",
"I know it sounds repetitive",
"Every show can\'t be a benefit",
"We were kids in the crowd, now we\'re dogs in this war",
"We were wasps with new wings, now we\'re bugs in the jar",
"We were hot soft and pure, now we\'re scratched up in scars",
"We were counting carbs, now we eat in our cars",
"The boys in the band, they know they\'ll never be stars",
"Back then we weren\'t quite convinced",
"Flyering and stickering",
"The front-row girls were posturing",
"We were all imagining",
"Man, we had some massive nights",
"Some bashes and some bloody fights",
"Back before those two kids died",
];

	for(i=0; i<spArray.length; i++){
		lyricArray.push(spArray[i]);
	};
}

function hiwLoad() {
	hiwArray = ["There was that whole weird thing with the horses",
"I think they know exactly what happened",
"I don\'t think it needs any explaining",
"I\'m pretty sure I wasn\'t your first choice",
"I think I was the last one remaining",
"I wish we hadn\'t gone and destroyed it",
"\'Cause I was thinking we could pull another weekender",
"If you\'ve still got a little bit of clairvoyance",
"I remember the metal bar",
"I remember the reservoir",
"You could say our paths had crossed before",
"So if it has to be a secret",
"Then I guess that I can deal with it",
"You and I both know it\'s a negative thing",
"In the end, only the girls know the whole truth",
"There were a couple pretty crass propositions",
"There were some bugs in the bars",
"There was a kid camped out by the coat check",
"She said the theme of this party\'s \"The Industrial Age\"",
"And you came in dressed like a train wreck",
"I remember the OTB",
"Five second delivery",
"You could say our paths had crossed before",
"God only knows it\'s not always a positive thing",
"To see a few seconds into the future",
"And if you swear to keep it decent",
"Then yeah, I\'ll come and see you",
"But it\'s not gonna be like in romantic comedies",
"In the end, I bet no one learns a lesson",
"And if you swear to keep it decent",
"Then yeah, I\'ll come and see you",
"But it\'s not gonna be like in romantic comedies",
"In the end, I bet no one learns a lesson",
"Jessie, I\'m not joking around",
"I see the crowd you\'re hanging with and those kids don\'t seem positive",
"Don\'t all the cigs make you tired?",
"You know I\'d never ask you to change, I\'ll only ask you to try",
"I know you\'re gonna do what I know you\'re gonna do",
"But 22 and banging around in restaurants",
"Isn\'t that much prettier than banging around in bars",
"And why do you keep going to his car?",
"I don\'t want this to stop, I want you to know",
"I don\'t want you to settle, I want you to grow",
"Forget all the boys that you had at the harbor",
"They\'re too hard already, they\'ll only get harder",
"Jessie, let\'s go for a ride",
"I know a place that we can stop",
"I know a place that we could drink and kiss for awhile",
"I know a place that always makes you smile",
"I know you\'re gonna say what I know you\'re gonna say",
"I know you\'ll look at the ground, I know you\'ll probably cry",
"You\'re a beautiful girl and you\'re a pretty good waitress",
"But Jessie, I don\'t think I\'m the guy",
"Forget everything that I showed you this summer",
"You\'re too hard already, you\'ll only get harder",
"But they didn\'t name her for a saint",
"They named her for a storm",
"So how\'s she supposed to think about",
"How it\'s gonna feel in the morning?",
"She said if heaven\'s hypothetical",
"And if the cigs keep you warm",
"Then how\'s she supposed to think about",
"How it\'s gonna move in the morning?",
"About how it\'s gonna move in the morning",
"Hurricane Jessie\'s gonna crash into the harbor this summer",
"She don\'t want to wait till she gets older",
"She don\'t want to wait, she said it only gets harder",
"Back when we were living up on Hennepin",
"She kept threatening to turn us in",
"At night she mostly liked us",
"We used to pass around the thermos",
"Some nights she was gorgeous",
"We were living it",
"We delivered it",
"We didn\'t feel a thing",
"We were living in",
"The sweet part of the city",
"The part with the bars and restaurants",
"We used to meet underneath the marquees",
"We used to nod off in the matinees",
"She always claimed that she was from Tennessee",
"And now it seems to me",
"Like distance doesn\'t equal rate and time no more",
"It\'s like gravity doesn\'t apply",
"No, everything sparkles and appears like we\'re on wheels",
"It was dark but I guess that\'s the deal",
"St. Theresa showed up wearing see-thru",
"It was standard issue",
"We went out to get some more wine",
"But it\'s a long haul to the corner store",
"From the center of the universe",
"When you can\'t get your car off the curb",
"And so we shot ourselves out into outer space",
"It was tough to place the aftertaste",
"It was stark but it was spacious",
"It\'s a long way from Cedar Riverside to Cedar Sinai",
"Three times St. Paul to Cheyenne",
"And it\'s a long way from Sacramento, too",
"We were bored so we started a band",
"We like to play for you",
];

	for(i=0; i<hiwArray.length; i++){
		lyricArray.push(hiwArray[i]);
	};
}

function tdLoad() {
	tdArray = ["She says she always smoked cigarettes.",
"Ever since she was seven.",
"She always likes the big ones best.",
"You get more for your money.",
"I know that she\'s gorgeous.",
"I can\'t take her serious.",
"She looks kinda ridiculous.",
"With her Malibu 120s.",
"Some nights she\'s a scientist.",
"She pulls me into experiments.",
"Squeezes hard and ",
"Charts the forward progress.",
"Some nights she\'s a pharmacist.",
"She\'s got some pills some in her purse.",
"One to wake you up ",
"One if your nervous.",
"That\'s fine.",
"I mostly dig.",
"Her and her big cigs.",
"We met at a benefit.",
"It was a pretty big opening.",
"Her therapist says it\'s dangerous.",
"The way she seeks validation.",
"Some nights she\'s a magic trick.",
"Some nights she\'s a sinking ship.",
"She pokes around with a paper clip ",
"She\'s the pistol at the party.",
"Once we get started ",
"Burns on her skirt and smoke in her eyes.",
"I serve my purpose.",
"We power down and try to socialize.",
"I serve my purpose.",
"She can probably find a better guy.",
"I serve my purpose.",
"She used to fool around with some friends of mine.",
"I\'m pretty sure we both agree.",
"We can both take some liberties.",
"We all have our anxieties.",
"This little tryst is hard to quit.",
"So we just sit here and live with it.",
"It\'s not love.",
"It\'s not even a crush.",
"I heard the Cityscape Skins are kind of kicking it again.",
"Heard they finally got some discipline.",
"Running up the score and stocking up like it\'s World War Four.",
"I heard that some are getting sprung and some are back in.",
"You know it\'s always back and forth.",
"And most of them are dead and some don\'t even live here anymore.",
"So when I brought you back here for Christmas.",
"I didn\'t think we would see them.",
"I guess I should have explained.",
"There was a side of this city I didn\'t want you to see.",
"There\'s just these guys that I know and we go back pretty deep.",
"I hope this whole thing didn\'t frighten you.",
"There were times that it terrified me.",
"They\'re building a bunker down by the river.",
"And someone said that that\'s where they\'ve been getting together.",
"They\'ve got masks for the gas.",
"They\'re sleeping in their bulletproof vests.",
"I guess Shepard came out of St. Cloud with a little ideology.",
"Some new way of thinking man.",
"A view to the future.",
"Jesus this might be a mess.",
"For me it was mostly the music.",
"A crew to go to the shows with.",
"I know what they said. I don\'t know if it\'s true.",
"I hope this whole thing didn\'t frighten you.",
"They never care if it\'s true as long as they\'ve got something to prove.",
"And they\'ve always got something to prove.",
"And the room filled with dudes.",
"And they cranked up the tunes.",
"And I could tell this whole thing kind of frightened you.",
"There was a side of this city I didn\'t want you to see.",
"There\'s just these guys that I know and we go back pretty deep.",
"I saw you look at their shoes. I saw you look at their teeth.",
"I could tell this whole thing kind of frightened you.",
"I saw you tapping your arm like you wanted to cruise.",
];

	for(i=0; i<tdArray.length; i++){
		lyricArray.push(tdArray[i]);
	};
}

function toggleAllCheckboxes(){
	$("input:checkbox").prop("checked",($("input:checkbox")).prop("checked") == true ? false : true);
}

function toggleAllCheckmarks(){
	$("img").attr("src",($("img").attr("src") == "./images/check.png" ? "" : "./images/check.png"));
}

$(document).ready(function () {
		
	$(".albumDiv").click(function() {
		$("input:checkbox", this).prop("checked",($("input:checkbox",this)).prop("checked") == true ? false : true);
		$("img", this).attr("src",($("img",this)).attr("src") == "./images/check.png" ? "" : "./images/check.png");
	});
		
	$('#selectAll').click(function(){
		toggleAllCheckboxes();
		toggleAllCheckmarks();
    });
    
	$("#submit").click(function () {
		if($("input:checkbox:checked").length===0){
			alert("Please select at least one album to include");
		}		
		else{
			lyricArrayReset();
			lyricLoad();
			$("#output").empty();
			generateIpsum();
		}		
	});
	
	$("#helpLink").click(function () {
		$("#helpOverlay").fadeIn(1000);	
	});
	
	$("#closeOverlay").click(function () {
		$("#helpOverlay").fadeOut(1000);	
	});
	
	$("#reset").click(function () {
		toggleAllCheckboxes();
		toggleAllCheckmarks();
		lyricArrayReset();
		$("#output").empty();
		$("input:checkbox").prop("checked",false);
		$("#paragraphs").prop("value",1);
	});
});