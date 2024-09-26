let randomWord = '';
let userFails = [];
let userRecap = [];
let ourWord = '';
let prevWLetter ;

/**
 * back to menu button
**/
const sendingToHome = () =>{
    window.location.href = './index.html';
};

// DOM variables
const computerWord = document.getElementById('computer');
const submitButton = document.getElementById('sbmtBtn');
const gameContainer = document.getElementById('gameContainer');
const invalidInputBlock = document.getElementById('invalidInputBlock');
const tryAgainBtn = document.getElementById('tryAgainBtnCont');
const backBtnGame = document.getElementById('backBtn2');
const finishBtnCtn = document.getElementById('finishBtnCont');
const finishSection = document.getElementById('finishScore')
const finishBtn = document.getElementById('finishBtn');
const scoreContainer = document.getElementById('playedWords');
const titutulCont = document.getElementById('titleContainer');
const lostMsg = titutulCont.appendChild(document.createElement('h3'));
const badPointo = document.getElementById('badPointo');
const gudPointo = document.getElementById('gudPointo');
const pointoCont = document.querySelector('#pointosContainer');
const userInputCont = document.querySelector('#userInputCont');
const pointoInsert = document.querySelector('#pointoIsert');
const gudList = document.getElementById('scoreTableGood');
const badList = document.getElementById('scoreTableBad');


backBtnGame.addEventListener('click', sendingToHome)
finishSection.style.display = 'none';
invalidInputBlock.style.display = 'none';
tryAgainBtn.style.display = 'none';


/**
* Takes good or bad word evaluation and returns current score
*
* @param {string} gOrB takes g or b good or bad
* @returns current game score
*/
function updatePoint(gOrB){
    gOrB = gOrB.toLowerCase();
    if (!gOrB) return console.error('No word evaluation provided - incorrect call to updatePoint');
    if (gOrB === 'g' || gOrB === 'good'){
        return `HITS: ${userRecap.length}`;
    } else if (gOrB === 'b' || gOrB === 'bad'){
        return `FAILS: ${userFails.length}`;
    } else {
        alert('Bad Good Or Bad Input')
    }
};



/**
* Finishes the game resets player facing information
*
*/
const finishGame = () =>{
    pointoCont.style.alignItems = 'center'
    finishSection.style.display = 'flex';
    finishSection.appendChild(pointoCont);
    pointoCont.setAttribute('align-items', 'center')
    gameContainer.style.display = 'none';
    finishBtnCtn.style.display = 'none';
    tryAgainBtn.style.display = 'none';
    submitButton.style.display = 'none';
    scoreContainer.style.display = 'none';
    clearList(gudList);
    clearList(badList);
};

finishBtn.addEventListener('click', finishGame)

/**
* restart the game actions
*
* resets scores and user facing information
*/
const gameAgain =  () =>{
    userFails = [];
    userRecap = [];
    lostMsg.remove()
    gameContainer.style.display = 'flex'
    gudPointo.innerText = updatePoint('good');
    badPointo.innerText = updatePoint('bad');
    pointoInsert.appendChild(pointoCont);
    submitButton.style.display = 'block'
    finishBtnCtn.style.display = 'flex'
    scoreContainer.style.display = 'flex';
    finishSection.style.display = 'none';
    invalidInputBlock.innerHTML = '';
    invalidInputBlock.style.display = 'none'
    tryAgainBtn.style.display = 'none'
};

/**
 * executes on load, generates the first computer word
 *
*/
window.addEventListener("load", (event) => {
    ourWord = randomWordGenerator('');
    computerWord.innerText = ourWord;
});


/**
* Removes the words from the list passed to it
*
* @param {string} list Dom element word list
*/
function clearList(list){
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
};

/**
* takes action when the user loses, clears score and user facing information
*
*/
function userLosesActions(){
    finishSection.style.display = 'flex';
    finishSection.appendChild(pointoCont);
    pointoCont.setAttribute('align-items', 'center')
    gameContainer.style.display = 'none';
    finishBtnCtn.style.display = 'none';
    tryAgainBtn.style.display = 'flex';
    submitButton.style.display = 'none';
    scoreContainer.style.display = 'none';
    clearList(gudList);
    clearList(badList);
    tryAgainBtn.addEventListener('click', gameAgain);
};

/**
*Creates a You lose error
*/
function userLoses(){
    lostMsg.innerText = 'You Lost'
    lostMsg.setAttribute('id','lostTxt');
    lostMsg.setAttribute('class','lostTxt');
};

/**
* executes actions when an incorrect input is given
* @param {string} word can be '' or an invalid string
*/
function badInputActions(word){
    gameContainer.style.display = 'none';
    submitButton.style.display = 'none';
    finishBtnCtn.style.display = 'none';
    scoreContainer.style.display = 'none';
    invalidWord(word);
    finishSection.style.display = 'flex';
    invalidInputBlock.style.display = 'flex';
    tryAgainBtn.style.display = 'flex';
    clearList(gudList);
    clearList(badList);
    tryAgainBtn.addEventListener('click', gameAgain);
};

/**
* Generate a new random word
* @param {string} lastLetter single character string representing the last letter of the previous word
* @returns a new random word based on the last provided letter
*/
function randomWordGenerator(lastLetter){
    if (!lastLetter){
        randomWord = dictionary[Math.floor(Math.random() * dictionary.length)];
        return randomWord;
    } else {
        do {
            randomWord = dictionary[Math.floor(Math.random() * dictionary.length)];
        } while (lastLetter !== randomWord.charAt(0));
        return randomWord;
    }
};

/**
* validate word data to be only alphabetical characters
* @param {string} str word to validate
* @returns boolean if the word passes the test
*/
function isOnlyLetter(str){
    return /^[A-Z]+$/i.test(str)
};

/**
* Add the most recent word to the Good words list
* player facing information
*/
function goodList(){
    let newWordToList = document.createElement('li');
    newWordToList.textContent = userRecap[userRecap.length -1];
    gudList.appendChild(newWordToList);
};

/**
* Add the most recent word to the bad words list
* player facing information
*/
function badListo(){
    const newWordToList = document.createElement('li');
    newWordToList.textContent = userFails[userFails.length -1];
    badList.appendChild(newWordToList);
};

/**
* Append the error message when the provided word is not valid
*
* player facing information
* @param {string} word string or empty
*/
function invalidWord(word){
    const newMsgToAdd = document.createElement('h3');
    let badInputMsg = word ? `Your last Input was ${word} which is not a valid word` : `Your last Input was empty which is not valid`;
    newMsgToAdd.innerText = badInputMsg
    invalidInputBlock.appendChild(newMsgToAdd)
};

/**
* Handle user input, apply scoring
* @param {string} userInput user submission
* @returns last character of a valid word or false if word is not valid
*/
function wordProcessor(userInput){
    if (!isOnlyLetter(userInput)) return false ;
    userInput = userInput.toLowerCase()
    if ((userInput.length <= 6) || (!(userInput.charAt(0) === randomWord.charAt(randomWord.length-1)))){
        userFails.push(userInput);
        badPointo.innerText = updatePoint('b');
        badListo();
        return userInput.charAt(userInput.length-1);
    }
    dictionary.push(userInput);
    userRecap.push(userInput);
    gudPointo.innerText = updatePoint('g');
    goodList();
    return userInput.charAt(userInput.length-1);
};

/**
 * Submit a new word button
 */
submitButton.addEventListener('click', () => {
    const userWordinput = document.getElementById('iuserInput').value
    const inputElement = document.getElementById('iuserInput')
    prevWLetter = wordProcessor(userWordinput);
    if (userFails.length < 3 && prevWLetter){
        ourWord = randomWordGenerator(prevWLetter);
        computerWord.innerText = ourWord;
        inputElement.value = ""
    } else if (!prevWLetter) {
        badInputActions(userWordinput);
        inputElement.value = ""
    } else {
        //when user loses
        userLoses();
        userLosesActions()
        inputElement.value = ""
    };
});



