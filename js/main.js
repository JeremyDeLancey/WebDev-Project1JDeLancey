console.log("ready!");

// Retrieving form inputs from HTML
function submitMeleeQuiz(){
	//Create a variable to hold user's input for question number 1
	var userCont = document.querySelector("input[name='bestCont']:checked").value;

	//Create a variable to hold user's input for question number 2
	var userChar = document.querySelector("input[name='bestChar']:checked").value;

	//Create a variable to hold user's input for question number 3
	var userMove = document.querySelector("input[name='bestMove']:checked").value;

	//Create a variable to hold user's input for question number 4
	var userKing = document.querySelector("input[name='bestKing']:checked").value;

	//Create a variable to hold user's input for question number 5
	var userEvo = document.querySelector("input[name='bestEvo']:checked").value;

	//Create a variable to hold user's input for question number 6
	var userPlayer = document.querySelector("input[name='bestPlayer']:checked").value;

	//Create a variable to hold user's input for question number 7
	var userMuf = document.querySelector("input[name='bestMuf']:checked").value;

	//Create a variable to hold user's input for question number 8
	var userSuper = document.querySelector("input[name='bestSuper']:checked").value;

	//Create a variable to hold user's input for question number 9
	var userMessiah = document.querySelector("input[name='bestMessiah']:checked").value;

	//Create a variable to hold user's input for question number 10
	var userRoy = document.querySelector(".users-Roy").value;

	//Create a variable to hold the user's number of questions guessed correctly
	var userScore = 0;

	//This is an if/else conditional statement that tells the user whether they selected the correct answer or not.
	if(userCont == 1){
			document.querySelector(".users-Cont").innerHTML = "Gamecube Controller, that is correct";
			userScore++;
	}else{
		document.querySelector(".users-Cont").innerHTML = "Your answer was incorrect, please try again.";
	}

	//This is an if/else conditional statement that tells the user whether they selected the correct answer or not.
	if(userChar == 4){
			document.querySelector(".users-Char").innerHTML = "Fox, that is correct";
			userScore++;
	}else{
		document.querySelector(".users-Char").innerHTML = "Your answer was incorrect, please try again.";
	}

	//This is an if/else conditional statement that tells the user whether they selected the correct answer or not.
	if(userMove == 7){
			document.querySelector(".users-Move").innerHTML = "Wavedash, that is correct";
			userScore++;
	}else{
		document.querySelector(".users-Move").innerHTML = "Your answer was incorrect, please try again.";
	}

	//This is an if/else conditional statement that tells the user whether they selected the correct answer or not.
	if(userKing == 10){
			document.querySelector(".users-King").innerHTML = "Ken, that is correct";
			userScore++;
	}else{
		document.querySelector(".users-King").innerHTML = "Your answer was incorrect, please try again.";
	}

	//This is an if/else conditional statement that tells the user whether they selected the correct answer or not.
	if(userEvo == 13){
			document.querySelector(".users-Evo").innerHTML = "Two, that is correct";
			userScore++;
	}else{
		document.querySelector(".users-Evo").innerHTML = "Your answer was incorrect, please try again.";
	}

	//This is an if/else conditional statement that tells the user whether they selected the correct answer or not.
	if(userPlayer == 16){
			document.querySelector(".users-Player").innerHTML = "Hungrybox, that is correct";
			userScore++;
	}else{
		document.querySelector(".users-Player").innerHTML = "Your answer was incorrect, please try again.";
	}

	//This is an if/else conditional statement that tells the user whether they selected the correct answer or not.
	if(userMuf == 19){
			document.querySelector(".users-Muf").innerHTML = "Scar (The People's Champ)";
			userScore++;
	}else{
		document.querySelector(".users-Muf").innerHTML = "Your answer was incorrect, please try again.";
	}

	//This is an if/else conditional statement that tells the user whether they selected the correct answer or not.
	if(userSuper == 22){
			document.querySelector(".users-Super").innerHTML = "Samus, that is correct";
			userScore++;
	}else{
		document.querySelector(".users-Super").innerHTML = "Your answer was incorrect, please try again.";
	}

	//This is an if/else conditional statement that tells the user whether they selected the correct answer or not.
	if(userMessiah == 25){
			document.querySelector(".users-Messiah").innerHTML = "Hax$, that is correct";
			userScore++;
	}else{
		document.querySelector(".users-Messiah").innerHTML = "Your answer was incorrect, please try again.";
	}

	//This is an if/else conditional statement that tells the user whether they selected the correct answer or not.
	if(userRoy = "boy"){
		document.querySelector(".users-Roy").innerHTML = "Yes, he is our boy";
		userScore++;
	}else{
		document.querySelector(".users-Roy").innerHTML = "Your answer was incorrect, please try again.";
	}

	//Tells the user what their quiz score is in easily digestible way
	document.querySelector(".users-Score").innerHTML = userScore;

	//If/else conditional statement meant to display a message to user that coincides with their score.
	if(userScore >= 7){
		document.querySelector(".users-Message").innerHTML = "Professor Chillin says: Wow, you know your stuff!";
	}else if(userScore <= 6 && userScore >= 5){
		document.querySelector(".users-Message").innerHTML = "Professor Chillin says: Well, at least you're not a casual";
	}else if(userScore <= 4){
		document.querySelector(".users-Message").innerHTML = "Professor Chillin says: Git Gud, Respect your Elders";
	}




}





