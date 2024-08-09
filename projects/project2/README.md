# Project 2: Dictionary Scrapping
## Ver 1.0.0

>`Connor MacLeod : How do you fight such a savage? `


>`Ramirez : With heart, faith and steel. In the end there can be only one.`

> ***Highlander 1986***

We will process our 3471 words dictionary, we will inflate it, deflate it, filter it, stab it, decapitate it, until there is only one word left ***(In the end there can be only one.)***

The point is to apply as many Array methods as possible to remove most words.


Each step should be logged in the console in natural language explaining what transformation/operation was applied to the array.

Between each step there must be an array stats log as a result of a function.

Make sure that the data is sanitized and validated.


## What does the script do:

1. It will provide a briefing of the array status, at the start, each step and the end.

1. It will add console logs of each step and methods applied
	>"You Can't Manage What You Can't Measure"
1. It will remove any duplicated words and elements


1. It will 'dirty' the array by adding some additional information
	* It will duplicate the size of the array by adding elements in between each word
	*  These elements could be anything as they will be taken from a random string generator, (using random numbers and ASCII codes should contain symbols and numbers not only letters so we can weed out).

	>`[after Connor has called Ramirez a "haggis"]
Ramirez: Haggis? What is haggis?
Connor MacLeod: Sheep's stomach, stuffed with meat and barley.
	> *(horrible strings\*)*

1. It will duplicate the array size by adding a number element as an identifier before each word element.

	> Only a few had The Quickening, forced to play a sadistic game over the eras

1. It will validate the words and identifier numbers and clean the dirty words and the respective identifier
	* All elements after this step should be lower case words and numbers for the identifiers, so the dirtiness should be removed.
	>Macleod, it's good to see you again. It seems like a hundred years.
	> *(Sunda Kastagir)*


1. Identifiers have been declared illegal by the government of Nicolas Maduro, remove the remaining numeric identifiers

	>“Todos los territorios del Alba son libres de ‘alfabetismo’”. *(Nicolas Maduro)*

1. Are three letter words real words? well yes, but also no, remove all words that are only 3 letters or less.

	> ... utterly destroy all that they have, and spare them not; but slay both man and woman, infant and suckling ... *(All loving YHWH)*

1. There must be at least a 9 letter word, find the first 2
	>Connor MacLeod: What Gathering?
Ramirez: When only a few of us are left, we will feel an irresistible pull towards a far away land... to fight for the prize.

1. With only 2 words left convert all characters into numeric values, and add them, whichever gets the higher result will be the **[ONE](https://youtu.be/ZAETcSK97F0)**

## Next steps

Adding functions:

1. We don't really like odd numbers in this house, we follow the rule of 2, remove any word element which number identifier is an odd number

	> "Two there should be; no more, no less. One to embody power, the other to crave it." *(Sheev Palpatine)*

1. We really mean it, remove any word which identifier includes at least an odd number.

