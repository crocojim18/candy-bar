var scene = 0;
var pic = "pics/0.png";
var seeniPod = false;
var end = false;
var tried = false;
			
//Begin actual game content

function changeScene(choice)
{
	end = ((scene==35||scene==36||scene==41)&&choice==2)||scene==45||scene==46;
	//The basic outline goes like this
	if (scene == 0)
	{
		if (choice)
		{
			scene = 1;
			message = "Birds are chirping. Light streams on your face. You begin to wake up.";
			changeValues1(' Where am I? ');
			pic = "pics/1.gif";
		}
	}
	else if (scene == 1)
	{
		if (choice)
		{

			scene = 2;
			message = "Oh.</br>Well, look at that. It looks like you're dead. That's definitely your gravestone.";
			changeValues1(' Bummer. ');
			pic = "pics/2.png";
		}
	}
	else if (scene == 2)
	{
		if (choice)
		{
			scene = 3;
			message = "You try and recollect how you died.";
			changeValues1(' Ahh yes, it was dangerous! ');
			show2(); show3();
			changeValues2(' Ahh yes, it was exciting! ');
			changeValues3(' Ahh yes, it was very monotonous. ');
			pic = "pics/3.png";
		}
	}
	else if (scene == 3)
	{
		hide2(); hide3();
		if (choice==1)
		{
			scene = 4;
			message = "You remember how you died. You were balancing two sharks on their noses while tight-roping over a canyon blindfolded.</br>You thought you could counteract it by tight-roping over Life Valley, Death Valley's evil twin cousin, but alas, that tanked bigtime.";
			changeValues1(' It was worth a shot! ');
			pic = "pics/4.png";
		}
		else if (choice==2)
		{
			scene = 5;
			message = "You remember in your last moments you were waterskiing at 7% the speed of light. However, the boat pulling you crashed into a rock, and you fell deep into the water. An octopus offered you a danish, which you accepted, but it was poisoned and you died. It was a good danish.</br></br>But you learned your lesson that day. That's the last time you waterski while it's cloudy.";
			changeValues1(' Lesson learned. ');
			pic = "pics/5.png";
		}
		else if (choice==3)
		{
			scene = 6;
			message = "You had just gotten home from work, when you sat down on the couch. You stared at the TV blankly for hours until you slowly faded away.";
			changeValues1(' Yeah, that was a hard time. ');
			pic = "pics/6.gif";
		}
	}
	else if (scene==4||scene==5||scene==6||scene==8||scene==9)
	{
		if (choice)
		{
			scene = 7;
			message = "Enough of that! This is a new time, and a new you! Here you are in the afterlife, sitting on your grave. What do you do next?";
			changeValues1(' Play with the grass ');
			show2(); show3();
			changeValues2(' Try and whistle a haunting tune ');
			changeValues3(' Look at your iPod ');
			pic = "pics/2.png";
		}
	}
	else if (scene == 7||(scene==20&&choice==4)||(scene==19&&choice==2))
	{
		hide2(); hide3();hide4();hide5();hideTextInput();
		if (choice==1)
		{
			scene = 8;
			message = "You look down at the grass and pick up a blade. You inspect it thoroughly, taking note of each bump and groove. You pick up another and compare it. It is very similar but there are some differences.</br>You pick up more and more blades, soon by the hundreds. Your hands and arms are overflowing with grass.</br></br>The grass asks for you to put it down.";
			changeValues1(' Listen to the grass. ');
			pic = "pics/8.png";
		}
		else if (choice==2&&scene!=19)
		{
			scene = 9;
			message = "You try and think of a good song for a ghost to whistle. You toss around perennial favorites, such as <i>The Sun is Dying and I'm Killing It</i> and <i>Look Through Me (You Can Do That Now)</i> and decide upon the spookiest song of them all.</br><i>Theme of the Haunted</i> by Craig A. Peters.</br></br>It goes a little like this.</br></br><iframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/290910801%3Fsecret_token%3Ds-IWtEW&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false\"></iframe>";
			changeValues1(' It sounded better in my head. ');
			pic = "pics/2.png";
		}
		else if (choice==3||scene==20||scene==19)
		{
			scene = 10;
			message = "You idly look at your iPod for some suggestion of what to do, but you forget your password.";
			changeValues1(' Wait a minute, I noticed something! ');
			show2();
			if (seeniPod!=true) changeValues2(' Try and figure out the password. ');
			else changeValues2(' Enter your password ');
			pic = "pics/10.png";
		}
	}
	else if (scene==10)
	{
		hide2();
		if(choice==1)
		{
			scene = 11;
			message = "You notice the date! It's Halloween!</br>You love Halloween, and you can't believe it. You haven't felt this happy since the time your father left you in an abandoned bowling alley and you got to name all the pins.";
			changeValues1(' Those were good times. ');
			pic = "pics/11.png";
		}
		else if (choice==2)
		{
			scene = 19;
			show(2);
			message = "What was your <u>password</u> again? ";
			changeValues1(' Enter Passcode ');
			changeValues2(' Stop Attempting Password ');
			showTextInput();
			pic = "pics/19.png";
		}
	}
	else if (scene==11)
	{
		if(choice)
		{
			scene = 12;
			message = "Suddenly, it hits you. You know exactly what you can do today.</br></br>Thousands of small, frightenable children will be walking the streets looking for candy under rocks and in mailboxes, and you can,</br>by golly, you can <b>JOIN</b> them.";
			changeValues1(' This gives me purpose. ');
			pic = "pics/2.png";
		}
	}
	else if (scene==12||scene==14||scene==17)
	{
		if(choice)
		{
			scene = 13;
			message = "Your stomach rumbles. You haven't eaten since you were alive. You know what you want to eat?";
			changeValues1(' A nice, 4-course meal. ');
			show2(); show3();
			changeValues2(' A single candy bar. ');
			changeValues3(' A knuckle sandwich. ');
			pic = "pics/2.png";
		}
	}
	else if (scene==13)
	{
		hide3(); 
		if(choice==1)
		{
			scene = 14;
			message = "You think about it.</br></br>Turkey, covered in gravy. A whole ham, stuffed with ice cubes and oranges. Green peas, arranged in a perfect triangular pyramid. A framed picture of a hashbrown. All 4 courses, with fries on the side and Sodium Pop&reg served to taste.</br></br>But then again, you had that the night before last, and it's awkward to have the same thing twice in one week.";
			changeValues1(' What else? ');
			hide2();
			pic = "pics/2.png";
		}
		else if(choice==2)
		{
			scene = 16;
			showContent();
			message = "In a dream, it shines above you. A single candy bar. It cries out to you.</br></br><i><h3>\"Please help me. I am hidden, and I must be consumed by the tongue of a confused ghost.\"</i></h3></br></br>You realize that <b>YOU</b> are the confused ghost.";
			changeValues1(' Set out to do your duty. ');
			show3();
			changeValues2(' "I shall come for you, my beloved!" ');
			changeValues3(' "K." ');
			pic = "pics/16.png";
		}
		else if(choice==3)
		{
			scene = 15;
			message = "You think about it, and you haven't had a knuckle sandwich in quite a while!</br>As you sit there contemplating it, a limousine rolls up to your grave. The back door opens, and Vice President Joe Biden walks out.";
			changeValues1(' Say, "Hello Mr. Biden! How is your day?" ');
			changeValues2(' Say, "Howdy-doo, the Honorable Joseph Robinette Biden, Jr. What brings you to this part of town?" ');
			pic = "pics/15.png";
		}
	}
	else if (scene==15)
	{
		hide2();
		if(choice)
		{
			scene = 17;
			message = "\"Enough of your talk!\", he shouts, before decking you square in the face. He scoffs at you, turns around, and goes back into his limousine.</br>The limousine ascends into Heaven.</br></br>You decide you didn't want a knuckle sandwich.";
			changeValues1(' What else? ');
			pic = "pics/15.png";
		}
	}
	else if(scene==16)
	{
		if(choice)
		{
			scene = 18;
			hide2(); hide3();
			message = "\"Alright, now where can a ghost find a single candy bar on Halloween?\", you think aloud. \"If only <i>someone</i> could get a candy bar for me. Man, how that'd be swell.\"</br>You look around.</br></br>This is going to be harder than you thought.";
			pic = "pics/2.png";
			changeValues1(' Okay, fine, I\'ll work for it ');
		}
	}
	else if(scene==18||(scene>=26&&scene<=27&&choice==1)||(scene==28&&choice==2)||((scene==35||scene==36||scene==41)&&choice==1))
	{
		if(choice)
		{
			scene = 21;
			show2(); show3();
			message = "You suppose that you have a couple of choices when it comes to getting a taste of Sir Goodtaste. You try and weigh the choices.";
			changeValues1(' I could go trick-or-treating ');
			changeValues2(' I could hunt for one in the wild ');
			changeValues3(' I could buy one in a store ');
			pic = "pics/2.png";
		}
	}
	else if((scene==19||(scene>=22&&scene<=25))&&choice==1)
	{
		if(choice==1)
		{
			var pass = getTextInput();
			if(pass=="password")
			{
				scene = 20;
				hide5();
				message = "The only app you have on your phone is Music.</br></br>Which songs do you want to listen to?";
				if(seeniPod==false) message = "Huh. It wasn't that before. Weird.</br></br>" + message;
				seeniPod = true;
				hideTextInput();
				show2(); show3(); show4();
				changeValues1(' "The Sun is Dying and I\'m Killing It" by Queen of the Scorched Earth ');
				changeValues2(' "Look Through Me (You Can Do That Now)" by Albert Glass ');
				//changeValues3(' "Sometime is Anytime with All Time" by The Clocknuts ');
				changeValues(3, ' "Theme of the Haunted" by Craig A. Peters ');
				changeValues4(' I\'m done listening to music ');
				pic = "pics/20.png";
				tried = false;
			}
			else
			{
				if(!tried)
				{
					message = message + "</br></br>Wrong password. Try again.";
					tried = true;
				}
			}
		}
	}
	else if(scene==20)
	{
		if(choice==1)
		{
			scene = 22;
			message = "<iframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/290752357&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false\"></iframe></br></br>You love <i>The Sun is Dying and I'm Killing It</i>. It's Queen of the Scorched Earth's stunning masterpiece about an anti-social hero who wants the Sun to blow up and destroy the Earth. It really resonated with you as a teenager, and was a hit amongst your peers at school dances. They would request this song about every 10 minutes, and the DJ always listened to them.</br></br><i>(Album art by the wonderfully talented <a href=\"https://mylameinternethome.tumblr.com/\">Emily</a>)</i>";
			hide2(); hide3(); hide4();hide5();
			changeValues1(' Go back to songs ');
			pic = "pics/22.png";
		}
		if(choice==2)
		{
			scene = 23;
			message = "<iframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/290892607&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false\"></iframe></br></br><i>Look Through Me (You Can Do That Now)</i> is one of the better songs by Albert Glass, off his 1981 album <i>Dear Lord, I'm a Ghost</i>. The song is kind of tainted for you because when you were in high school, and you were dating an old girlfriend of yours, it was <i>\"your song\"</i>, and eventually she left you for an invisible man that could fly, which in retrospect, is pretty ironic.</br></br><i>(Album art by the wonderfully talented <a href=\"https://justin1909.tumblr.com/\">Justin</a>)</i>";
			hide2(); hide3(); hide4();hide5();
			changeValues1(' Go back to songs ');
			pic = "pics/23.png";
		}
		if(choice==400)
		{
			scene = 24;
			message = "[embedded music]</br></br><i>Sometime is Anytime with All Time</i> commentary";
			hide2(); hide3(); hide4();hide5();
			changeValues1(' Go back to songs ');
			pic = "pics/24.png";
		}
		if(choice==3)
		{
			scene = 25;
			message = "<iframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/290910057&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false\"></iframe></br></br><i>Theme of the Haunted</i> is the ultimate song for a ghost, or anyone else otherwise. Coming from the soundtrack to the hit 1994 thriller <i>Mr. Haunted</i>, this song quickly reached #1 on the Australian and American charts, and came in at #2 on the British charts. This theme has become so universal that playing it immediately evokes the scene it's from, which is where Mr. Haunted does his first haunting.</br></br><i>(Album art by the wonderfully talented <a href=\"https://aristaresident.tumblr.com/\">Simone</a>)</i>";
			hide2(); hide3(); hide4();hide5();
			changeValues1(' Go back to songs ');
			pic = "pics/25.png";
		}
	}
	else if(scene==21)
	{
		if(choice==1)
		{
			scene = 26;
			hide2(); hide3();
			message = "Trick-or-treating. An ancient, sacred tradition where children wander the street alone, dressed in disguises, and beg the sky for candy. You remember when you would go trick-or-treating.</br>You used to have a neighbor, Mr. Simon. Every Halloween, you would break down his door and holler the Halloween Holler.</br></br><h3><i>\"HALLOWEEN, HALLOWEEN! I am in need of that sugar, so please throw some at me so that I can ingest it.\"</h3></i></br></br>Some years he would happily give it to you, and some years he would just cry.</br></br>If you decide to go through with this, it will eat up your night. Is it really the best way to get a candy bar?";
			//changeValues1(' Yep! ');
			changeValues1(' Maybe something else... ');
			pic = "pics/2.png";
		}
		else if(choice==2)
		{
			scene = 27;
			hide2(); hide3();
			message = "Ahh yes! The hunt!</br>You think back to when your grandfather used to tell you stories of the hunt. You can hear his crooked old voice now.</br></br><h3><i>\"Sonny, back in the day, I used to go on the hunt. Once, I was in the mall on an escalator, and I saw a huge elephant at the bottom! What a prize she was.</br>I readied my harpoon, put my nose between the crosshairs, and shot right at the ceiling. A chandelier fell from directly above her, and I took her home. What a great meal.\"</h3></i></br></br>Society has come a long way since your grandfather used to poach elephants to eat whole. Are you sure you want to go on the hunt for your candy bar?";
			//changeValues1(' Yep! ');
			changeValues1(' Maybe I\'ll do something else... ');
			pic = "pics/2.png";
		}
		else if(choice==3)
		{
			scene = 28;
			show2(); hide3();
			message = "Consumerism, one of the most cherished traditions in life. You enjoy going to stores, which are large prisons where products live. In fact, you just went to a store the other day.</br>You wanted to buy more peas to arrange into a pyramid, and you became immediately perplexed by the vast array of things the store sold. Diapers, playing cards, lightbulbs, you name it. They had nearly everything, except the little part of your soul that you lost wandering the aisles for days.</br>Actually they did have that, but you forgot your coupon at home.</br></br>Are you sure that you want to go to the proud institution that is a store?";
			changeValues1(' Yep! ');
			changeValues2(' Maybe something else... ');
			pic = "pics/2.png";
		}
	}
	else if(scene==28&&choice==1)
	{
		if(choice==1)
		{
			scene = 29;
			message = "Awesome!</br>You walk down the road a bit until you come to glowing metropolis that is DrugPlace&reg. Its large moat and many spires glisten in the late-October sun. You admire the fine architecture, and think of how many generations it must have taken to build this work of art. At least 7, you think, because their motto is <i>\"Welcome to DrugPlace&reg, which was built by more than 6 generations of humans in order that we may have a place to sell goods.\"</i></br></br>You arrive at the front door.";
			pic = "pics/29.png";
			changeValues1(' Throw all your weight at the door and barge into the store ');
			changeValues2(' Politely wait for the automatic door to open ');
		}
	}
	else if(scene==29)
	{
		if(choice)
		{
			scene = 30;
			message = "\"Welcome to DrugPlace&reg! Can I help you find something?\", a voice says from your left.</br>You look to your left and see a helpful employee. His nametag says \"Richard\".</br></br>\"Hi Richard,\" you respond. \"In fact, I am looking for something that can satisfy my greatest hunger. I have the hunger that an adult lion has when it sees thousands of zebras floating in the ocean. I have the same hunger passed down from my grandfather, though instead of eating elephants whole, I want to eat a single candy bar.\"</br>\"Ahh, yes, I can help with that,\" Richard says.";
			pic = "pics/30.png";
			changeValues1(' "What can you do?" ');
			changeValues2(' "Actually, I can find one myself." ');
		}
	}
	else if(scene==30)
	{
		if(choice==1)
		{
			scene = 31;
			message = "Richard comes closer to your face. \"I can tell you in which aisle you will find a single candy bar.\" You nod approvingly, in a trance. He comes closer and whispers in your ear.</br></br><i>\"7.\"</i>";
			pic = "pics/31.png";
			changeValues1(' "That is the most beautiful number I have ever heard." ');
			changeValues2(' Fall in love with Richard ');
		}
		else if(choice==2)
		{
			scene = 32;
			message = "\"Okey-dokey!\", Richard says before dissolving into a fine mist.</br></br>You're all alone now. A sense of tension comes over you. Have you ever been alone before? It's so hard to think of a time before Richard.";
			pic = "pics/32.png";
			changeValues1(' Descend into madness. ');
			changeValues2(' Stay calm. Be resolute. Walk towards an aisle. ');
		}
	}
	else if(scene==31)
	{
		if(choice==1)
		{
			scene = 33;
			show(3);
			message = "\"I know, right?\", Richard says to you. \"Well, if you need me, I'll be up front putting people's money into boxes.\" He dissolves into a fine mist.</br></br>What should you do next?";
			pic = "pics/33.png";
			changeValues(1, ' Go to aisle 7 ');
			changeValues(2, ' Wander the aisles ');
			changeValues(3, ' Go to the cash register ');
		}
		else if(choice==2)
		{
			scene = 34;
			hide(2);
			message = "You stare at Richard dreamily, and behind his face, you can tell he's staring back at you.</br>You've never felt this way, not even that time when you feel in love with the moon. The moon didn't love you back, but you feel Richard would at least give it a try.</br></br>You ask Richard on a date, and he says yes.";
			pic = "pics/31.png";
			changeValues(1, ' Grow old together ');
		}
	}
	else if(scene==32||(scene==33&&choice==2))
	{
		if(choice==1)
		{
			scene = 36;
			message = "Your world becomes a spiraling mess of <i>\"where did Richard go?\"</i>, <i>\"what do I do without Richard?\"</i>, and <i>\"Richardless life? How can that be?\"</i></br>You fall on the ground, crying more than any ghost has ever cried. The staff at DrugPlace&reg kicks you out after an hour.</br></br>You try and regather your life, but nothing is ever the same. When you look in a mirror, you see Richard instead of the nothingness most ghosts see in mirrors. You try and recall all the tender words he ever said to you, but it's nothing compared to the real deal.</br></br>You do not get a candy bar. You lose.";
			pic = "pics/36.gif";
			changeValues(1, ' Start from Checkpoint ');
			changeValues(2, ' Restart Game ');
		}
		else if(choice==2)
		{
			show1();hide2();hide3();hide4();
			scene = 37;
			message = "You start strolling down the aisles, still as amazed as before. They really <i>do</i> have it all. You twirl around in the middle of the aisle, overcome with the joy of the products you see before you.</br>You take a Sodium Pop&reg off the shelf and throw it in the air. You try and catch it, but miss, and it falls through the floor. You remember you're a ghost and now you wonder how you even picked it up in the first place.";
			changeValues(1, ' Continue down the aisle. ');
			pic = "pics/37.png";
		}
	}
	else if((scene==39&&choice==1)||(scene==33&&choice!=2)||(scene==42))
	{
		if(choice==1)
		{
			pic = "pics/40.png";
			hide(2);hide(3);
			message = "Aisle 7. On the ceiling of this aisle is a small plaque announcing what Products&reg are sold in this aisle. It says one item. <i>\"Sir Goodtaste\"</i>.</br></br>It's lying there on the ground in the middle of the aisle. You approach slowly, baffled that it could all be this easy. You look behind you, and you've been completely unfollowed. You pick it up.</br></br><b>You have acquired one (1) candy bar.</b>";
			if(scene==39) message = "You arrive at another aisle.</br>" + message;
			scene = 40;
			changeValues(1, ' Go up to the counter ');
		}
		else if(choice==3)
		{
			scene = 42;
			hide2(); hide3();
			pic = "pics/42.png";
			message = "\"Hey there,\" says Richard, as he shoves dollar bills into a small box. \"Was there not a single candy bar in aisle 7?\" You feel embarrassed for not even looking.</br>\"I won't be able to check you out until you get the candy bar to buy,\" he reminds you. You forgot about that part. Shopping is hard.";
			changeValues1(' Go to aisle 7 ');
		}
	}
	else if(scene==34)
	{
		if(choice)
		{
			scene = 35;
			show(2);
			message = "You and Richard start going steady. Your one year anniversary passes, then your two year anniversary. After 7 years together, the two of you go out for a fancy dinner, and you get down on your knee. You ask him to marry you, and you pull the ring out from behind your ear. He surprises you by pulling a ring out from behind <i>his</i> ear. He was planning on proposing to you this night. You laugh and cry in joy as the staff at the restaurant refill your Sodium Pop&regs and give you infinite breadsticks as congratulations.</br></br>You and Richard buy a small house on the outskirts of town and don't have kids, because you are a ghost after all. He dies at the ripe old age of 578 and you two have a wonderful afterlife together.</br></br>You, however, failed to get a candy bar. You lose.";
			changeValues(1, ' Start from checkpoint ');
			changeValues(2, ' Restart Game ');
			pic = "pics/35.png";
		}
	}
	else if(scene==37)
	{
		if(choice)
		{
			scene = 38;
			pic = "pics/38.png";
			message = "Oh man! They have Tissues&reg, which are one of your favorite Products&reg. You sometimes pray that you get a Runny Nose&reg so that you can rub the piece of paper on your Face&reg. You feel slightly guilty for this, but sometimes you've lied about having to sneeze so that you could use a Tissue&reg.</br></br>You try to pick up a box but it seems you can't pick this up either.";
		}
	}
	else if(scene==38)
	{
		if(choice)
		{
			scene = 39;
			pic = "pics/39.png";
			show2();
			message = "Wait a minute.</br>You just realized, you have no idea where you are. You look behind you and can't see the end of the aisle. You turn around again and swear that's a different exit than you just saw. You look up and there is a ceiling, but it's dark and musty.</br>Here you are, stuck in the bowels of DrugPlace&reg, with no exit in sight. It's last Tuesday through Thursday all over again.</br></br>Your thinking clears. You need a candy bar. This is a mission. You somehow reach the end of the aisle. Where should you go?";
			changeValues1(' To Another Aisle ');
			changeValues2(' To the Mysterious Dungeon at the end of the aisle ');
		}
	}
	else if(scene==39&&choice==2)
	{
		if(choice==2)
		{
			scene = 41;
			pic = "pics/41.png";
			message = "You roll back the stone to go into the Mysterious Dungeon at the end of the aisle. You look down into the hole, which descends miles into the Earth's crust. You start climbing down the ladder, rung after rung, but your foot slips and you start falling down the hole.</br>After a while, you 'hit' the bottom, but since you're a ghost and are technically intangible, you fall straight through the ground. You spend the rest of eternity falling through the Earth's crust, coming out the other side, and going back through, like a giant yo-yo.</br></br>You did not get a candy bar. You lose.";
			changeValues(1, ' Start from Checkpoint ');
			changeValues(2, ' Restart Game ');
		}
	}
	else if(scene==40)
	{
		if(choice)
		{
			scene = 43;
			pic = "pics/42.png";
			show2();
			message = "\"Howdy!\", shouts Richard. \"Are you ready to officially own your candy bar?\"</br>You walk closer to the counter, which is where Richard is putting other people's money in boxes. You're not sure whether you remember how to purchase items.</br></br>\"Don't worry,\" Richard responds, because he can read your mind. \"Purchasing an item is simple. First, you hand me the item.\"";
			changeValues1(' Hand him the candy bar ');
			changeValues2(' Run away with the candy bar ');
		}
	}
	else if(scene==43)
	{
		if(choice==1)
		{
			scene = 44;
			pic = "pics/42.png";
			show3();show4();
			message = "\"Next, I put both your candy bar and your money in seperate boxes. If you can correctly guess which box has your candy bar in it, then you get your candy bar.\"";
			changeValues1(' "Left" ');
			changeValues2(' "Right" ');
			changeValues3(' "Wait, your left or my left?" ');
			changeValues4(' "The one with the candy" ');
		}
		else if(choice==2)
		{
			scene = 45;
			pic = "pics/45.png";
			hide3();hide4();hide2();
			message = "You run out the door really quickly with an illegally obtained Sir Goodtaste. You hear Richard yelling behind you, but you have no idea what he's saying. You run faster and faster, and your legs become lightning and your mind becomes speed. Some number of miles away from DrugPlace&reg, you decide to rest, so you sit down on a rock.</br>As you sit down, a trap springs on you, and a police officer arrests you. You go to court, and are sentenced to life in prison, and since you're already dead, that means all eternity.</br></br>You spend all of eternity in a jail cell, <b>but you still got the candy bar. You win!";
			changeValues1(' Restart Game ');
		}
	}
	else if(scene==44)
	{
		if(choice)
		{
			scene = 46;
			pic = "pics/16.png";
			hide3();hide4();hide2();
			message = "\"That's right!\", cries Richard. Tears stream down your face. He hands you the candy bar.</br><i>\"Sir Goodtaste\"</i>, you mutter. <i>\"I have never been happier.\"</i></br></br>You leave with the candy bar in your hand. The two of you live happily ever after, or rather, you do, because you eat Sir Goodtaste immediately.</br></br><b>You have obtained one candy bar. You win!</b>";
			changeValues1(' Restart Game ');
		}
	}
	else if(end)
	{
		scene = 0;
		hide(2);hide(3);hide(4);hide(5);
		message = "<p><h1>Can You Obtain One Candy Bar?</h1></p><p><h2>a choose-your-own-adventure game by Marty Taylor</h2></p>";
		pic = "pics/0.png";
	}
	
	document.getElementById("scenetext").innerHTML = message;
	document.getElementById("sceneimg").src = pic;

}

// ---------------------------------------------------------------------
// | ## |Name of scene                    | Goes to              | Pic |
// ---------------------------------------------------------------------
// | 00 | Title screen                    | (01)                 | x   |
// | 01 | You wake up                     | (02)                 | x   |
// | 02 | It looks like you're dead       | (03)                 | x   |
// | 03 | Death recollection              | (04)(05)(06)         | x   |
// | 04 | Balancing two sharks            | (07)                 | x   |
// | 05 | Waterskiing death               | (07)                 | x   |
// | 06 | Disappearing death              | (07)                 | x   |
// | 07 | What do you do next?            | (08)(09)(10)         | x   |
// | 08 | Grass Inspection                | (07)                 | x   |
// | 09 | Whistling a song                | (07)                 | x   |
// | 10 | Looking at your iPod            | (11)(19)             | x   |
// | 11 | You notice the date!            | (12)                 | x   |
// | 12 | You know what to do             | (13)                 | x   |
// | 13 | What should you eat?            | (14)(16)(15)         | x   |
// | 14 | A 4-course meal                 | (13)                 |     |
// | 15 | Joe Biden shows up              | (17)(17)             | x   |
// | 16 | Chocolate vision                | (18)(18)(18)         | x   |
// | 17 | Joe Biden punches you           | (13)                 | x   |
// | 18 | Where could you get chocolate?  | (21)                 | x   |
// | 19 | Entering your password          | (20)(10)             | x   |
// | 20 | Your only app is Music          | (22)(23)(25)(10)     | x   |
// | 21 | Weighing the choices            | (26)(27)(28)         | x   |
// | 22 | The Sun is Dying (song)         | (20)                 | x   |
// | 23 | Look Through Me (song)          | (20)                 | x   |
// | 24 | Sometime is Anytime (song)      | (20)                 |     |
// | 25 | Theme of the Haunted (song)     | (20)                 | x   |
// | 26 | Consider trick-or-treating      | (21)                 |     |
// | 27 | Consider hunting                | (21)                 |     |
// | 28 | Consider going to a store       | (29)(21)             |     |
// | 29 | You arrive at DrugPlace®        | (30)(30)             | x   |
// | 30 | Richard's introduction          | (31)(32)             | x   |
// | 31 | Richard tells you the aisle     | (33)(34)             | x   |
// | 32 | Richard leaves you alone        | (36)(37)             | x   |
// | 33 | Richard goes to the counter     | (40)(37)(42)         | x   |
// | 34 | You fall in love with Richard   | (35)                 | x   |
// | 35 | You grow old with Richard       | (21)(00)             | x   |
// | 36 | You live your life without him  | (21)(00)             | x   |
// | 37 | You pick up Sodium Pop®         | (38)                 | x   |
// | 38 | You look at Tissues®            | (39)                 | x   |
// | 39 | Your aisle is a labyrinth       | (40)(41)             | x   |
// | 40 | Aisle 7                         | (42)                 | x   |
// | 41 | You go into the dungeon         | (21)(00)             | x   |
// | 42 | At the counter without candy    | (40)                 | x   |
// | 43 | You go to the counter with candy| (44)(45)             | x   |
// | 44 | Guess which box it's in         | (46)(46)(46)(46)     | x   |
// | 45 | You rot in jail forever         | (00)                 | x   |
// | 46 | You successfully buy a candy bar| (00)                 | x   |
// ---------------------------------------------------------------------

//TO IMPLEMENT
// 1. End of store storyline
// 2. Trick-or-treating storyline
// 3. Hunting storyline
// 6. Pictures