// main file for the actual Js code of the game

//We will add the dictionary in this section, I will not add it yet to avoid all that clutter, we will use for now a small array
let randomWord = '';
let userFails = [];
let userRecap = [];
let ourWord = '';
let prevWLetter ;
// DOM variables

//back to menu button

const sendingToHome = () =>{
    window.location.href = './index.html';
};

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



//Function to dynamically update the points

function updatePoint(gOrB){
    if (gOrB === 'g'){
        return `HITS: ${userRecap.length}`;
    } else if (gOrB === 'b'){
        return `FAILS: ${userFails.length}`;
    } else {
        alert('Bad Good Or Bad Input')
    }
};


//finish the game action:

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

//restart the game function:

const gameAgain =  () =>{
    //TODO: reset the  scores
    //hid the alert
    userFails = [];
    userRecap = [];
    lostMsg.remove()
    gameContainer.style.display = 'flex'
    gudPointo.innerText = updatePoint('g');
    badPointo.innerText = updatePoint('b');
    pointoInsert.appendChild(pointoCont);
    submitButton.style.display = 'block'
    finishBtnCtn.style.display = 'flex'
    scoreContainer.style.display = 'flex';
    finishSection.style.display = 'none';
    invalidInputBlock.style.display = 'none'
    tryAgainBtn.style.display = 'none'
    
    
};

//generate a random word and pass it to the computer word

window.addEventListener("load", (event) => {
    ourWord = randomWordGenerator(''); // we initialize the game by assigning a random word to start?
    computerWord.innerText = ourWord;
});


//clear the list function:

function clearList(list){
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
};

//actions to take when the user loses

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

//user losses message creation

function userLoses(){
    lostMsg.innerText = 'You Lost'
    lostMsg.setAttribute('id','lostTxt');
    lostMsg.setAttribute('class','lostTxt');
};


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

};

//function that checks if the string is only letters

function isOnlyLetter(str){
    return /^[A-Z]+$/i.test(str)
};

//function to add words to the good words list

function goodList(){
    let newWordToList = document.createElement('li');
    newWordToList.textContent = userRecap[userRecap.length -1];
    gudList.appendChild(newWordToList);
};

//function to add words to the good words list
function badListo(){
    const newWordToList = document.createElement('li');
    newWordToList.textContent = userFails[userFails.length -1];
    badList.appendChild(newWordToList);
};

//add a correct invalid input alert

function invalidWord(word){
    const newMsgToAdd = document.createElement('h3');
    let badInputMsg = word ? `Your last Input was ${word} which is not a valid word` : `Your last Input was empty which is not valid`;
    newMsgToAdd.innerText = badInputMsg
    invalidInputBlock.appendChild(newMsgToAdd)
};

//function to validate the word and apply scoring

function wordProcessor(userInput){
    if (isOnlyLetter(userInput)){
        userInput = userInput.toLowerCase()
        if (userInput.length > 6){
            if (userInput.charAt(0) === randomWord.charAt(randomWord.length-1)){    // checks if the character at 0 of the user word  is equal to the last character of the random word
                dictionary.push(userInput);
                userRecap.push(userInput);
                gudPointo.innerText = updatePoint('g');
                goodList();
            } else {
                userFails.push(userInput); // adds a fail to the fail array
                badPointo.innerText = updatePoint('b');
                badListo();
            };
        } else {
            userFails.push(userInput);// adds a fail to the fail array
            badPointo.innerText = updatePoint('b');
            badListo();
        }
    } else {
        console.log(`bad input "more than words"`);
        return ''; //WordProcessor will return false to the actualGame if the input is not correct
    }
    return userInput.charAt(userInput.length-1); // I feel like including this task here will make me reprocess the word everytime, maybe we could implement a solution to this later
};

// Main action event

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



