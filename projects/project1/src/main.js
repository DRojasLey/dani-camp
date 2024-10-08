// main file for the actual Js code of the game

        //We will add the dictionary in this section, I will not add it yet to avoid all that clutter, we will use for now a small array
        let randomWord = '';
        let userFails = [];
        let userRecap = [];

        //Function to generate random words

        function randomWordGenerator(lastLetter){
            if (lastLetter === ''){
                randomWord = dictionary[Math.floor(Math.random() * dictionary.length)];
                return randomWord;
            } else {
                do {
                    randomWord = dictionary[Math.floor(Math.random() * dictionary.length)];
                } while (lastLetter !== randomWord.charAt(0));
                return randomWord;
            }

        }
        //function that checks if the string is only letters
        let isOnlyLetter = str => /^[A-Z]+$/i.test(str);


        //function to validate the word and apply scoring

        function wordProcessor(userInput){
            if (isOnlyLetter(userInput)){
                userInput = userInput.toLowerCase()
                if (userInput.length > 6){
                    if (userInput.charAt(0) === randomWord.charAt(randomWord.length-1)){    // checks if the character at 0 of the user word  is equal to the last character of the random word
                        dictionary.push(userInput);
                        userRecap.push(userInput);
                    } else {
                        userFails.push(userInput); // adds a fail to the fail array
                    };

                } else {
                    userFails.push(userInput);// adds a fail to the fail array
                }
            } else {
                console.log(`bad input "more than words"`);
                return ''; //WordProcessor will return false to the actualGame if the input is not correct
            }
            return userInput.charAt(userInput.length-1); // I feel like including this task here will make me reprocess the word everytime, maybe we could implement a solution to this later
        }

        // main game function (for now? I mean I think if I add a menu it will need another function over this one :V)

        const messages = {
            machineTurn: (ourWord) => `My turn! my word is "${ourWord}", \n hit OK to introduce yours. \n (only letters no numbers nor symbols)`,
            userTurn: () => `Introduce a word of 7 letters or more, \n using the last letter of my word.`,
            lost1: () =>`You lost!`,
            lost2: (userRecap) => `Your score is: ${userRecap.length === 0 ? '0' : userRecap.length}.`,
            lost3: (userRecap) => `Your valid words were: ${userRecap.length === 0 ? 'no valid words' : userRecap}`,
            lost4: (userFails, userWord) => `Your Invalid words were: ${userFails.length === 0 ? userWord : userFails}`,
            wrongInput: (userWord) => `Your last Input was ${userWord} which is not a valid word`
        }

        function actualGame(){
            let userWord = '';
            let ourWord = '';
            let prevWLetter ;

            ourWord = randomWordGenerator(''); // we initialize the game by assigning a random word to start?

            do{
                alert(messages.machineTurn(ourWord));
                userWord = prompt(messages.userTurn());
                prevWLetter = wordProcessor(userWord);
                if (prevWLetter){
                    ourWord = randomWordGenerator(prevWLetter);
                }
            } while (userFails.length < 3 && prevWLetter);

            if (!prevWLetter) {
                alert(messages.wrongInput(userWord));
            }

            alert(messages.lost1());
            alert(messages.lost2(userRecap));
            alert(messages.lost3(userRecap));
            alert(messages.lost4(userFails, userWord));
        }

        actualGame();