# Project 1: Shiritori

`Kid: Mom I want しりとり`

`Mom: No!, we have しりとり at home`

`しりとり at home:`

Shiritori is a Japanese game in which you take the last letter of your opponent word to create a new word:

- Only words that are longer than 6 letters count
- Only words which start with the last letter of the previous word are valid
- You have only 3 lives 'YOL3T'; you lose a live by:

		* providing words that are not 7 letters long at least
		* providing words that don't start with the last letter of the previous word

- providing words that are not only letters will cause an immediate lost
- The idea is to have as much words as possible in the end.



## What does the actual game do:
1. Generates a random word
2. Alerts the user of the random word
3. Ask for his word
4. Processes the word
	- This ensures it is a valid input and lower cases the string
	- If it's not valid input will return an exiting causing value
	- Adds the word to the dictionary  << yes this somewhat learns new words!>>
	- Adds the word to the score/recap array
	- Returns the last letter of the user word
5. Generates a new random word
	- Takes the previous word last letter
	- Gets a new word from the dictionary which first letter should match previous letter
	- Returns the word
6. Handles the score
	- checks if the processed word is valid if not exits to point 7
	- Check if the userFails array length is higher or equal to 3
	- If it is lower returns to step 2
	- Goes to the next step if it is higher
7. Game over
	- If arriving from an incorrect value provided path will show the incorrect value
	- alert it was not the correct type of value
	- will alert of game over
	- will show the count of correct words > score
	- will show the provided words



## pseudo code?
### (or something I just made up so I could understand what the heck I am doing)
```javascript

 	- import dictionary as array; // we do this now with the HTML file and window import
 	- declare userFails as array;
 	- declare userRecap as array; //userRecap element count can be used as the score, we do not need to have a separate count
 	- declare randomWord as string = empty string here ;


- define function randomWordGenerator(lastLetter){
   	  	If (lastLetter === empty string){
			randomWord = dictionary[Math.floor(Math.random() * dictionary.length)]; //random word from the array
			return randomWord;
		} else {
			do {
				randomWord = dictionary[Math.floor(Math.random() * dictionary.length)]; // get a random word from the dictionry
			} while (lastLetter !== first char at randomWord )
			// While section continues returning  words from the dictionary until one matches the last letter of the prevWord
			return randomWord;
   	  	}
   	  }

	- define function isOnlyLetter(string){
		if (string evaluated regex for alphabet){
			return true;
		} else {
			return false;
		}
	}

 	- define function wordProcessor(userInput) { // user input cannot be trusted, right now I don't know how to do real word checkup :sadge:
		if (isOnlyLetter(userInput)){
 			userInput = toLowerCase(userInput);
			if (userInput.length > 6 ){
				if ('first letter' of the userInput === last letter previous random word){
					push userInput to dictionary;
					push userInput to userRecap;
				} else {
					push userInput to userFails; // adds a fail to the life counter array
			}
 			} else {
				push userInput to userFails;	// adds a fail to the life counter array
 			}
		} else {
			return ''; //This returns a falsy statement of the same type String
		}
 		return  last char at userInput ;
   	  }

- define function actualGame() {
	 	- declare userWord as string;
		- declare ourWord as string;
		- declare prevWLetter ;

   	 	 ourWord = randomWordGenerator('');// we initialize the game by assigning a random word to start?
		 do {

            alert(`My turn! my word is ${ourWord}, hit OK to introduce yours.  (only letters no numbers nor symbols)`);

			userWord = prompt(`Introduce a word of 7 letters or more, \n using the last letter of my word.`);
            prevWLetter = wordProcessor(userWord);
			if(prevWLetter is truthy){
				ourWord = randomWordGenerator(prevWLetter); // we only generate a new random word if the input is valid
			}
		} while { userFails.length <= 3 && prevWLetter is truthy }

		if (prevWLetter is falsy) {
                alert(`Your last Input was ${userWord} which is not a valid word`);
            }

            alert(`You lost!`);
            alert(`Your score is: ${userRecap.length}.`);
            alert(`Your valid words were: ${userRecap}`);
            alert(`Your Invalid words were: ${userFails}`);

   	  }

actualGame();
```

---

>Please be kind I have a cat to feed.
