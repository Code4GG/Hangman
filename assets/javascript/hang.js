
	let lettersGuessed = [];
	let wins = 0;
	let guessesLeft = 10;
	let wordArr = ['react','angular','vue'];
	let randomWord = wordArr[Math.floor(Math.random()*wordArr.length)];
	let letterArr = randomWord.split("");
	let blanksArr = [];
	
	function blanks(){
		for (let i = 0; i < letterArr.length; i++){
			blanks = "_";
			blanksArr.push(blanks);
		}
		console.log(blanksArr);
		$('#blanks').html(blanksArr.join(" "));
	}

	blanks();


	function events(){

		window.addEventListener('keyup', function(e){
			$('#keystart').hide();
			const regex = /^[A-z]+$/i;
			const userGuess = e.key;
			
			const check = lettersGuessed.find(function(letter){
				if (letter === userGuess){
					return true;
				}
			})				
		

			console.log(check);
			
			console.log(userGuess); 
			console.log(letterArr.indexOf(userGuess));

				
				// console.log(lettersGuessed);
			if (check === undefined){
				guessesLeft === guessesLeft--;
				lettersGuessed.push(userGuess);	
				$('#lettersGuessed').text("Letters Already Guessed: " + lettersGuessed.join(" ").toUpperCase());
				$('#remaining').text('Number of Guesses Remaining: ' + guessesLeft);
				$('#textdisplay').hide();
			} 
			else {
				$('#textdisplay').show();
				$('#textdisplay').text("You already guessed that letter try again.");
			}


			for(let i = 0; i < letterArr.length; i++){
				if (userGuess === letterArr[i]){
					blanksArr.splice(i,1, letterArr[i]);
						console.log(blanksArr);
						$('#blanks').html(blanksArr.join(" ").toUpperCase());
				} 
			}


			if (blanksArr.join("") === randomWord){
				alert("you won!");
				wins++;
				$('#wins').html('Wins: ' + wins);
			} else if(guessesLeft === 0){
				alert("You lost!");
			}
		})
	}
	events();




	
	