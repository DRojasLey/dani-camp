# Project 1: Shiritori - v1.2.0

`Kid: Mom I want しりとり`

`Mom: No!, we have しりとり at home`

`しりとり at home:`

Shiritori is a Japanese game in which you take the last letter of your opponent word to create a new word:

- Only words that are longer than 7 letters count
- Only words which start with the last letter of the previous word are valid
- You have only 3 lives 'YOL3T'; you lose a live by:

		* providing words that are not 7 letters long at least
		* providing words that don't start with the last letter of the previous word
		* providing words that are not real words
		* providing wrongly typoed words

- providing words that are not only letters will cause an immediate lost
- The idea is to have as much words as possible in the end.



## What does the actual game do:
1. Generates a random word
2. Alerts the user of the random word
3. Ask for his word
4. Processes the word
	- This ensures it is a valid input and lower cases the string
	- If it's not valid input will return an exiting causing value
	- Adds the word to the dictionary  << yes this somewhat learns new words!>> (for each session)
	- Adds the word to the score/recap array
	- Returns the last letter of the user word
5. Generates a new random word
	- Takes the previous word last letter
	- Gets a new word from the dictionary which first letter should match previous letter
	- Returns the word
6. Handles the score
	- checks if the processed word is valid (longer than 7 letters, starts with the last letter of the previous word, it is a valid dictinonary word) if not exits to point 7
	- Check if the userFails array length is higher or equal to 3
	- If it is lower returns to step 2
	- Goes to the next step if it is higher
7. Game over
	- If arriving from an incorrect value provided path will show the incorrect value
	- alert it was not the correct type of value
	- will alert of game over
	- will show the count of correct words "score"


---

>Please be kind I have a cat to feed.
