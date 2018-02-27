	
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
				lettersGuessed.push(userGuess);	
				$('#lettersGuessed').text("Letters Already Guessed: " + lettersGuessed.join(" ").toUpperCase());
				$('#remaining').text('Number of Guesses Remaining: ' + guessesLeft);
				$('#textdisplay').hide();
			} 
			else {
				$('#textdisplay').show();
				$('#textdisplay').text("You already guessed that letter try again.")
			}


			// if (letterArr.indexOf(e) > -1){
			// 	for (let i = 0; i < blanksArr.length; i++){
			// 		if (letterArr[i] === e){
			// 			blanksArr[i] === e;
			// 			$('#blanks').html(userGuess);
			// 		}
			// 	}
			// }
			// 	$('#blanks').text(blanksArr.join(" "));
			// }
			if (userGuess === letterArr){
				for (let i = 0; i < letterArr.length; i++) {
					console.log("hi");
				}
			}
			// 	console.log('found');
			// } else {
			// 	guessesLeft === guessesLeft--;
			// }
			// console.log(blanksArr);
		  	

		// function checkWin() {
		//   if (correctGuesses.indexOf('_') === -1) {
		//     alert('You Won!');
		//   } else if (allowedGuesses === 0) {
		//     alert('You Lost!');
		//   }
		// }
	
		})
	}
	events();

	// function check(event){
	// 		if (letterArr.indexOf(e) > -1){
	// 			for (let i = 0; i < blanksArr.length; i++){
	// 				if (letterArr[i] === e){
	// 					blanksArr[i] === e;
	// 					$('#blanks').html(blanksArr.join(" "));
	// 				}
	// 			}
	// 		}
	// }
	// check();