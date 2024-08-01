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
		
- The idea is to have as much words as possible in the end.



## What does the actual game do:
1. Generates a random word
2. Alerts the user of the random word
3. Ask for his word
4. Processes the word 
	- This ensures it is a valid lower case string
	- Adds the word to the dictionary  << yes this somewhat learns new words!>>
	- Adds the word to the score/recap array
	- Returns the last letter of the user word
5. Generates a new random word
	- Takes the previous word last letter
	- Gets a new word from the dictionary which first letter should match previous letter
	- Returns the word
6. Handles the score
	- Check if the userFails array length is higher or equal to 3
	- If it is lower returns to step 2 
	- Goes to the next step if it is higher
7. Game over
	- will alert of game over 
	- will show the count of correct words > score
	- will show the provided words


	
## pseudo code? 
### (or something I just made up so I could understand what the heck I am doing)
```
 	- declare dictionary as array;
 	- declare userWord as string;
 	- declare userFails as array;
 	- declare userRecap as array; //userRecap element count can be used as the score, we do not need to have a separate count 
 	- declare randomWord as string = empty string here ;


- define function outputWords(prevWLetter){
   	  	If (randonWord === empty string){
			randomWord = dictionary[Math.floor(Math.random() * dictionary.length)];
			return randomWord;
		} else {
			do {
				randomWord = dictionary[Math.floor(Math.random() * dictionary.length)]; // get a random word from the dictionry withinm the length of the dictionary
			} while {
				prevWLetter !== first char at randomWord // While section continues returning  words from the dictionary until one matches the last letter of the prevWord
			}
			return randomWord;
   	  	}
   	  }


 	- define function processWord(userWord) {			// we cannot trust user input, but at the moment I do not have the capability to do real word checkup :sadge:
 		userWord = toLowerCase(userWord);
		if (userWord.length > 6 ){	
			if (first letter of the userWord === last letter previous random word){
				push userWord to dictionary;
				push userWord to userRecap;
			} else {
				push userWord to userFails;
			}
 			
 		} else {
			push userWord to userFails;				//userFails element count is also used as fail counter
 		}	
 		return prevWLetter = last char at userWord ;
   	  }
   	  
   	- define function actualGame() {
   	 	 randomWord = outputWords();
		 
		 do {

			 alert(randonWord);
		 
			 userWord = prompt 'give a word that starts with the last letter of the previous word ';

			 prevWLetter = processWord(userWord);

			 randomWord = outputWords(prevWLetter);
		
		} while { userFails.length <= 3 }

		 alert(`brah yu lost, shame on you`) 
		 alert(`your score is ${userRecap.length}`); 
		 alert(`your words are ${userRecap}`)
   	 	
   	  }

actualGame();
```

---

>Please be kind I have a cat to feed.
   	  
   	  