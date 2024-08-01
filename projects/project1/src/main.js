// mail file for the actual Js code of the game

//We will add the dictionary in this section, I will not add it yet to avoid all that clutter, we will use for now a small array
let dictionary = [ "pies", "black", "paddle", "organic", "report", "hateful", "consider", "belief", "dear", "ruthless", "jealous", "voracious", "memorize", "dirt", "languid", "even", "peaceful", "outrageous", "cobweb", "letter", "internal", "education", "sense", "lewd", "macabre", "diligent", "exuberant", "unite", "finger", "machine", "camera", "six", "unfasten", "cave", "complete", "invention", "permit", "rule"];
let userWord = '';
let randomWord = '';
let userFails = [];
let userRecap = [];

function randomWordGenerator(prevWLetter){
    if (randomWord === ''){
        randomWord = dictionary[Math.floor(Math.random() * dictionary.length)];
        return randomWord;
    } else {
        do {
            randomWord = dictionary[Math.floor(Math.random() * dictionary.length)];
        } while (prevWLetter !== randomWord.charAt(0))
        return randomWord;
    }

}
