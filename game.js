var scene = 0;
var pic = "pics/0.png";
var seeniPod = false;
			
//Begin actual game content

function changeScene(choice)
{
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
			pic = "6.png";
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
			changeValues3(' Look at your iPhone ');
			pic = "pics/2.png";
		}
	}
	else if (scene == 7||(scene==20&&choice==5))
	{
		hide2(); hide3();hide4();hide5();
		if (choice==1)
		{
			scene = 8;
			message = "You look down at the grass and pick up a blade. You inspect it thoroughly, taking note of each bump and groove. You pick up another and compare it. It is very similar but there are some differences.</br>You pick up more and more blades, soon by the hundreds. Your hands and arms are overflowing with grass.</br></br>The grass asks for you to put it down.";
			changeValues1(' Listen to the grass. ');
			pic = "8.png";
		}
		else if (choice==2)
		{
			scene = 9;
			message = "You try and think of a good song for a ghost to whistle. You toss around perennial favorites, such as \"The Sun is Dying and I'm Killing It\" and \"Look Through Me (You Can Do That Now)\" and decide upon the spookiest song of them all.</br>\"Theme of the Haunted\" by Craig A. Peters.</br></br>It goes a little like this.";
			changeValues1(' It sounded better in my head. ');
			pic = "9.png";
		}
		else if (choice==3||choice==5)
		{
			scene = 10;
			message = "You idly look at your iPod for some suggestion of what to do, but you forget your password.";
			changeValues1(' Wait a minute, I noticed something! ');
			show2();
			if (seeniPod!=true) changeValues2(' Try and figure out the password. ');
			else changeValues2(' Enter your password ');
			pic = "10.png";
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
			pic = "11.png";
		}
		else if (choice==2)
		{
			scene = 19;
			message = "What was your password again? ";
			changeValues1(' Enter Passcode ');
			showTextInput();
			pic = "19.png";
		}
	}
	else if (scene==11)
	{
		if(choice)
		{
			scene = 12;
			message = "Suddenly, it hits you. You know exactly what you can do today.</br></br>Thousands of small, frightenable children will be walking the streets looking for candy under rocks and in mailboxes, and you can,</br>by golly, you can <b>JOIN</b> them.";
			changeValues1(' This gives me purpose. ');
			pic = "12.png";
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
			pic = "13.png";
		}
	}
	else if (scene==13)
	{
		hide3(); 
		if(choice==1)
		{
			scene = 14;
			message = "You think about it.</br></br>Turkey, covered in gravy. A whole ham, stuffed with ice cubes and oranges. Green peas, arranged in a perfect triangular pyramid. A framed picture of a hashbrown. All 4 courses, with fries on the side and root beer served from a baseball cap.</br></br>But then again, you had that the night before last, and it's awkward to have the same thing twice in one week.";
			changeValues1(' What else? ');
			hide2();
			pic = "14.png";
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
			changeValues2(' Say, "Howdy-doo, the Honorable Joseph R. Biden, Jr. What brings you to this part of town?" ');
			pic = "15.png";
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
			pic = "17.png";
		}
	}
	else if(scene==16)
	{
		if(choice)
		{
			scene = 18;
			hide2(); hide3();
			message = "\"Alright, now where can a ghost find a single candy bar on Halloween?\", you think aloud. \"If only <i>someone</i> could get a candy bar for me. Man, how that'd be swell.\"</br>You look around.</br></br>This is going to be harder than you thought.";
			pic = "18.png";
			changeValues1(' Okay, fine, I\'ll work for it ');
		}
	}
	else if(scene==18||(scene>=26&&scene<=28&&choice==2))
	{
		if(choice)
		{
			scene = 21;
			show2(); show3();
			message = "You suppose that you have a couple of choices when it comes to getting a taste of Sir Goodtaste. You try and weigh the choices.";
			changeValues1(' I could go trick-or-treating ');
			changeValues2(' I could hunt for one in the wild ');
			changeValues3(' I could buy one in a store ');
			pic = "21.png";
		}
	}
	else if(scene == 19||(scene>=22&&scene<=25))
	{
		if(choice)
		{
			var pass = getTextInput();
			if(pass=="3323")
			{
				scene = 20;
				message = "The only app you have on your phone is Music.</br></br>What songs do you want to listen to?";
				if(seeniPod==false) message = "Huh. It wasn't that before. Weird.</br></br>" + message;
				seeniPod = true;
				hideTextInput();
				show2(); show3(); show4();show5();
				changeValues1(' "The Sun is Dying and I\'m Killing It" by Queen of the Scorched Earth ');
				changeValues2(' "Look Through Me (You Can Do That Now)" by Albert Glass ');
				changeValues3(' "Sometime is Anytime with All Time" by The Clocknuts ');
				changeValues4(' "Theme of the Haunted" by Craig A. Peters ');
				changeValues5(' I\'m done listening to music ');
				pic = "20.png";
			}
		}
	}
	else if(scene==20)
	{
		if(choice==1)
		{
			scene = 22;
			message = "[embedded music]</br></br><i>The Sun is Dying and I'm Killing It</i> commentary";
			hide2(); hide3(); hide4();hide5();
			changeValues1(' Go back to songs ');
			pic = "pics/22.png";
		}
		if(choice==2)
		{
			scene = 23;
			message = "[embedded music]</br></br><i>Look Through Me (You Can Do That Now)</i> commentary";
			hide2(); hide3(); hide4();hide5();
			changeValues1(' Go back to songs ');
			pic = "pics/23.png";
		}
		if(choice==3)
		{
			scene = 24;
			message = "[embedded music]</br></br><i>Sometime is Anytime with All Time</i> commentary";
			hide2(); hide3(); hide4();hide5();
			changeValues1(' Go back to songs ');
			pic = "pics/24.png";
		}
		if(choice==4)
		{
			scene = 25;
			message = "[embedded music]</br></br><i>Theme of the Haunted</i> commentary";
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
			show2(); hide3();
			message = "Trick-or-treating. An ancient, sacred tradition where children wander the street alone, dressed in disguises, and beg the sky for candy. You remember when you would go trick-or-treating.</br>You used to have a neighbor, Mr. Simon. Every Halloween, you would break down his door and holler the Halloween Holler.</br></br><h3><i>\"HALLOWEEN, HALLOWEEN! I am in need of that sugar, so please throw some at me so that I can ingest it.\"</h3></i></br></br>Some years he would happily give it to you, and some years he would just cry.</br></br>If you decide to go through with this, it will eat up your night. Is it really the best way to get a candy bar?";
			changeValues1(' Yep! ');
			changeValues2(' Maybe something else... ');
			pic = "pics/26.png";
		}
		else if(choice==2)
		{
			scene = 27;
			show2(); hide3();
			message = "Ahh yes! The hunt!</br>You think back to when your grandfather used to tell you stories of the hunt. You can hear his crooked old voice now.</br></br><h3><i>\"Sonny, back in the day, I used to go on the hunt. Once, I was in the mall on an escalator, and I saw a huge elephant at the bottom! What a prize she was.</br>I readied my harpoon, put my nose between the crosshairs, and shot right at the ceiling. A chandelier fell from directly above her, and I took her home. What a great meal.\"</h3></i></br></br>Society has come a long way since your grandfather used to poach elephants to eat whole. Are you sure you want to go on the hunt for your candy bar?";
			changeValues1(' Yep! ');
			changeValues2(' Maybe I\'ll do something else... ');
			pic = "pics/27.png";
		}
		else if(choice==3)
		{
			scene = 28;
			show2(); hide3();
			message = "Consumerism, one of the most cherished traditions in life. You enjoy going to stores, which are large prisons where products live. In fact, you just went to a store the other day.</br>You wanted to buy more peas to arrange into a pyramid, and you became immediately perplexed by the vast array of things the store sold. Diapers, playing cards, lightbulbs, you name it. They had nearly everything, except the little part of your soul that you lost wandering the aisles for days.</br>Actually they did have that, but you forgot your coupon at home.</br></br>Are you sure that you want to go to the proud institution that is a store?";
			changeValues1(' Yep! ');
			changeValues2(' Maybe something else... ');
			pic = "pics/28.png";
		}
	}
	else if(scene==28)
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
			message = "\"Welcome to DrugPlace&reg! Can I help you find something?\", voice says from your left.</br>You look to your left and see a helpful employee. His nametag says \"Richard\".</br></br>\"Hi Richard,\" you respond. \"In fact, I am looking for something that can satisfy my greatest hunger. I have the hunger that an adult lion has when it sees thousands of zebras floating in the ocean. I have the same hunger passed down from my grandfather, though instead of eating elephants whole, I want to eat a single candy bar.\"</br>\"Ahh, yes, I can help with that,\" Richard says.";
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
	
	document.getElementById("scenetext").innerHTML = message;
	document.getElementById("sceneimg").src = pic;

}

//    A LIST OF WHICH SCENES ARE WHICH   
// --------------------------------------
// | 00 | Title screen					|
// | 01 | You wake up					|
// | 02 | It looks like you're dead		|
// | 03 | Death recollection			|
// | 04 | Balancing two sharks			|
// | 05 | Waterskiing death				|
// | 06 | Disappearing death			|
// | 07 | What do you do next?			|
// | 08 | Grass Inspection				|
// | 09 | Whistling a song				|
// | 10 | Looking at your iPod			|
// | 11 | You notice the date!			|
// | 12 | You know what to do			|
// | 13 | What should you eat?			|
// | 14 | A 4-course meal				|
// | 15 | Joe Biden shows up			|
// | 16 | Chocolate vision				|
// | 17 | Joe Biden punches you			|
// | 18 | Where could you get chocolate?|
// | 19 | Entering your password		|
// | 20 | Your only app is Music		|
// | 21 | Weighing the choices			|
// | 22 | The Sun is Dying (song)		|
// | 23 | Look Through Me (song)		|
// | 24 | Sometime is Anytime (song)	|
// | 25 | Theme of the Haunted (song)	|
// | 26 | Consider trick-or-treating	|
// | 27 | Consider hunting				|
// | 28 | Consider going to a store		|
// | 29 | You arrive at DrugPlace®		|
// | 30 | Richard's introduction		|
// | 31 | Richard tells you the aisle	|
// | 32 | Richard leaves you alone		|
// | 33 | |
// | 34 | |
// | 35 | |
// | 36 | |
// | 37 | |
// --------------------------------------