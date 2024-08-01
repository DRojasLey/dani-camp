// mail file for the actual Js code of the game

//We will add the dictionary in this section, I will not add it yet to avoid all that clutter, we will use for now a small array
let dictionary = [ "pies", "black", "paddle", "organic", "report", "hateful", "consider", "belief", "dear", "ruthless", "jealous", "voracious", "memorize", "dirt", "languid", "even", "peaceful", "outrageous", "cobweb", "letter", "internal", "education", "sense", "lewd", "macabre", "diligent", "exuberant", "unite", "finger", "machine", "camera", "six", "unfasten", "cave", "complete", "invention", "permit", "rule"];
let userWord = '';
let randomWord = '';
let userFails = [];
let userRecap = [];

function randomWordGenerator(prevWLetter){
    if (prevWLetter === ''){
        randomWord = dictionary[Math.floor(Math.random() * dictionary.length)];
        return randomWord;
    } else {
        do {
            randomWord = dictionary[Math.floor(Math.random() * dictionary.length)];
        } while (prevWLetter !== randomWord.charAt(0));
            return randomWord;
    }
    
}

// NOTA IMPORTANTE< el array de userFails DEBE SER LIMPIADO si queremos implementar un menu lo mismo con el de Recap

function wordProcessor(userWord){
    //function that checks if the string is only letters
    isOnlyLetter = str => /^[A-Z]+$/i.test(str);
    isOnlyLetter(userWord) ? userWord = userWord.toLowerCase() : userFails.push(userWord); // makes it lower case if only letters or adds a fail to the fail array
    // checks if the character at 0 of the user word  is equal to the last character of the random word
    if (userWord.length > 6){
        if (userWord.charAt(0) === randomWord.charAt(randomWord.length-1)){ 
            dictionary.push(userWord);
            userRecap.push(userWord);
        } else {
            userFails.push(userWord);
        };
        
    } else {
        userFails.push(userWord);
    }
    
    return userWord.charAt(userWord.length-1); // I feel like including this task here will make me reprocess the word everytime, maybe we could implement a solution to this later
}

function actualGame(){
    randomWord = randomWordGenerator(''); // we initialize the game by assigning a random word to start?
    do{
       alert(`My turn! my word is ${randomWord}, dismiss the message to introduce yours`); 
       userWord = prompt(`Introduce a word of 7 letters or more, using the last letter of my word`);
       prevWLetter = wordProcessor(userWord);
       randomWord = randomWordGenerator(prevWLetter);
    } while (userFails.length <= 3);
    
    alert(`You lost!`);
    alert(`Your score is: ${userRecap.length}.`);
    alert(`Your words were: ${userRecap}`);
}

actualGame();