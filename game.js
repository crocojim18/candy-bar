var scene = 0;
var pic = "pics/0.png";
			
//Begin actual game content

function changeScene(choice)
{
	//The basic outline goes like this
	if (scene == 0)
	{
		if (choice)
		{
			hideContent();
			scene = 1;
			message = "Birds are chirping. Light streams on your face. You begin to wake up.";
			changeValues1(' Where am I? ');
			pic = "1.png";
		}
	}
	else if (scene == 1)
	{
		if (choice)
		{
			scene = 2;
			message = "Oh.</br>Well, look at that. It looks like you're dead. That's your name on a gravestone.";
			changeValues1(' Bummer. ');
			pic = "2.png";
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
			pic = "3.png";
		}
	}
	else if (scene == 3)
	{
		hide2(); hide3();
		if (choice==1)
		{
			scene = 4;
			message = "You remember how you died. You were balancing two sharks on their noses while tight-roping over a canyon.</br>You thought you could counteract it by tight-roping over Life Valley, Death Valley's evil twin cousin, but alas, that tanked bigtime.";
			changeValues1(' It was worth a shot! ');
			pic = "4.png";
		}
		else if (choice==2)
		{
			scene = 5;
			message = "You remember in your last moments you were waterskiing at 7% the speed of light. However, the boat pulling you crashed into a rock, and you fell deep into the water. An octopus offered you a danish, which you accepted, but it was poisoned and you died.";
			changeValues1(' It still tasted good though! ');
			pic = "5.png";
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
			pic = "7.png";
		}
	}
	else if (scene == 7)
	{
		hide2(); hide3();
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
			message = "You try and think of a good song for a ghost to whistle. You toss around perennial favorites, such as \"The Sun is Dying and I am Killing It\" and \"Look Through Me (You Can Do That Now)\" and decide upon the spookiest song of them all.</br>\"Theme of the Haunted\" by Craig A. Peters.</br></br>It goes a little like this.";
			changeValues1(' It sounded better in my head. ');
			pic = "9.png";
		}
		else if (choice==3)
		{
			scene = 10;
			message = "You idly look at your iPhone for some suggestion of what to do, but you forget your password.";
			changeValues1(' Wait a minute, I noticed something! ');
			show2();
			changeValues2(' Try and figure out the password. ');
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
		hideContent();
		if(choice)
		{
			scene = 18;
			hide2(); hide3();hide1();
			message = "THE ADVENTURE CONTINUES";
			pic = "18.png";
		}
	}
	else if(scene == 19)
	{
		if(choice)
		{
			var pass = getTextInput();
			if(pass=="3323")
			{
				scene = 20;
				message = "Huh. It wasn't that before. Weird.</br></br>Anyway, what songs do you want to listen to?";
				hideTextInput();
				show2(); show3(); show4();
				changeValues1(' "The Sun is Dying and I am Killing It" by Queen of the Scorched Earth ');
				changeValues2(' "Look Through Me (You Can Do That Now)" by Albert Glass ');
				changeValues3(' "Sometime is Anytime with All Time" by The Clocknuts ');
				changeValues4(' "Theme of the Haunted" by Craig A. Peters ');
				pic = "20.png";
			}
		}
	}
	
	document.getElementById("scenetext").innerHTML = message;
	document.getElementById("sceneimg").src = pic;
}