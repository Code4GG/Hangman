	
	let lettersGuessed = [];
	let wins = 0;
	let guessesLeft = 10;
	let wordArr = ['React','Angular','Vue'];
	let randomWord = wordArr[Math.floor(Math.random()*wordArr.length)];
	let letterArr = randomWord.split("");
	let blanksArr = [];

	function blanks(){
		for (let i = 0; i < letterArr.length; i++){
			blanks = "_";
			blanksArr.push(blanks);
		}
		console.log(blanksArr);
		$('#blanks').text(blanksArr.join(" "));
	}
	blanks();

	function events(){
		window.addEventListener('keyup', function(e){
			$('#keystart').hide();

			const userGuess = e.key;
			console.log(userGuess); 

			lettersGuessed.push(userGuess);
			$('#lettersGuessed').text("Letters Already Guessed: " + lettersGuessed.join(" ").toUpperCase());
			$('#remaining').text('Number of Guesses Remaining: ' + guessesLeft);

			if (letterArr.indexOf(userGuess) > -1){
				console.log('hi');
			} else {
				guessesLeft === guessesLeft--;
			}

		})
	}
	events();