//DOM definitions
const body = document.getElementById('body')
const mainBlock = document.getElementById('mainBlock');
const startBlock = document.getElementById('startBlock');
const storyText = document.createElement('h2');
const startButton = document.getElementById('startbutton');
const continueButton = document.createElement('button');
const nextButton = document.createElement('button');
const ageBackground = document.createElement('div')
const valarBackground = document.createElement('div')
const ageBackgroundContainer = document.createElement('div')
const valarBackgroundContainer = document.createElement('div')
const selectionContainer = document.createElement('div');
const inputContainer = document.createElement('div');

//global variables definitions:
let userinput = [0 , 0 , 0];
let actionCounter = 0;

//start screen functionality:
// just needs to add the first event listener to the index button
function startSection(){
    userinput = userinput
    startButton.setAttribute('onclick', 'firstAction(userinput)' );
};
startSection();

function firstAction(userinput) {
    setMainSpace(1, userinput);
    createMessage(msg.initialMsg[0], 1, userinput);
    continueButton.addEventListener('click', () => {
        console.log('first action click')
        nextStep(msg.initialMsg[1])});
};


// data type checking function

function checkData(input){
    return `received ${input} as input which data type is ${typeof input}`;
}

//Adding action function

function nextStep(msgf){
    continueButton.removeEventListener('click', () => {
        console.log('first action click')
        nextStep(msg.initialMsg[1])});    // console.log("nextStep data check actionCounter ::" + checkData(actionCounter));
    // console.log("nextStep data check msgf ::" + checkData(msgf));
    console.log(actionCounter)
    setMainSpace(actionCounter + 1)
    createMessage(msgf, actionCounter + 1)
    if (actionCounter === 0){
        continueButton.addEventListener('click', () => {
            console.log('second action click')
             nextStep(msgf)});
    }else if (actionCounter === 1){
        console.log(actionCounter)
        continueButton.removeEventListener('click', () => {
            console.log('second action click');
             nextStep(msgf)});
        console.log('if (actionCounter === 1)')
        continueButton.addEventListener('click', () => {
            console.log('third action click');
            nextStep(msg.initialMsg[2])});
    } else if (actionCounter ===2){
        console.log(actionCounter)
        console.log('} else if (actionCounter ===2){')
        continueButton.removeEventListener('click', () => {
            console.log('third action click');
             nextStep(msg.initialMsg[2])});
        continueButton.addEventListener('click', () => {
            console.log('fourth action click')
             nextStep(msg.initialMsg[3])});
    } else if (actionCounter === 3){
        console.log('} else if (actionCounter === 4){')
        console.log('ESTA ES LA COSA')
        mainBlock.style.backgroundImage = "";
        startBlock.style.display = 'none'
        setMainSpace(actionCounter);
        createMessage(msg.initialMsg[4], actionCounter)
        CreateInput(4, 'ages');
        continueButton.removeEventListener('click', () => {
            console.log('fourth action click')
             nextStep(msg.initialMsg[3])});
        continueButton.addEventListener('click', captureSelection);
    }
    console.log('Si estamo` muriendo')
    actionCounter++
    console.log(actionCounter);
}

// creates the backgrounds for each step
//takes the action counter to determine the correct backgroun image
// takes the input user array to generate the story background dinamically

function setMainSpace(actionCounter, userInputArray){
    // console.log("setMainSpace data report actionCounter ::" + checkData(actionCounter));
    // console.log("setMainSpace data report userinputarray ::" + checkData(userInputArray));
    if (actionCounter >= 1 && actionCounter <= 4 ){
        startButton.style.display = 'none';
        body.style.backgroundImage = "url('./images/UI/wood-grain-nails-compressed.jpg')";
        startBlock.style.backgroundImage = "url('./images/UI/paper-background.jpeg')";
    } else if (actionCounter >= 5 && actionCounter < 9 ){
        body.style.display = 'flex';
        body.style.flexDirection = 'column';
        body.style.backgroundSize = 'cover';
        body.style.backgroundRepeat = 'no-repeat'
        body.style.backgroundImage = "url('./images/UI/paper-background.jpeg')";
        mainBlock.style.backgroundImage = "";
        body.style.backgroundColor = "#1d1d1d";
        startBlock.style.backgroundImage = "url('./images/UI/paper-background.jpeg')";
    } else if (actionCounter >= 9 && actionCounter < 13 ){
        body.style.backgroundImage = "url('./images/UI/wood-grain-nails-compressed.jpg')";
        startBlock.style.backgroundImage = "url('./images/UI/paper-background.jpeg')";
    } else if (actionCounter >= 13){
        body.style.backgroundImage = "";
        mainBlock.style.backgroundImage = "";
        startBlock.style.display = 'none'
        //age icon
        switch (userInputArray[0]) {
            case 1:
            ageBackground.style.backgroundImage = "url('./images/ages/silmarils-no-back.png')";
            break;
            case 2:
            ageBackground.style.backgroundImage = "url('./images/ages/numenor-no-back.png')";
            break;
            case 3:
            ageBackground.style.backgroundImage = "url('./images/ages/theone-no-back.png')";
            break;
            case 4:
            ageBackground.style.backgroundImage = "url('./images/ages/crown-no-back.png')";
            break;
            default:
            console.log('Age input is not valid for a background')
        }
        // make sure the age icon is contained on the div
        ageBackground.setAttribute('class', 'ageBackground');
        //valar image
        switch (userInputArray[2]) {
            case 1:
            valarBackground.style.backgroundImage = "url('./images/valar/manwe-no-back.png')";
            break;
            case 2:
            valarBackground.style.backgroundImage = "url('./images/valar/melkor-no-back.png')";
            break;
            case 3:
            valarBackground.style.backgroundImage = "url('./images/valar/Aulë-no-background.png')";
            break;
            case 4:
            valarBackground.style.backgroundImage = "url('./images/valar/varda-no-back.png')";
            break;
            case 5:
            valarBackground.style.backgroundImage = "url('./images/valar/Oromë-no-back.png')";
            break;
            case 6:
            valarBackground.style.backgroundImage = "url('./images/valar/Námo-no-back.png')";
            break;
            case 7:
            valarBackground.style.backgroundImage = "url('./images/valar/estë-no-back.png')";
            break;
            case 8:
            valarBackground.style.backgroundImage = "url('./images/valar/Irmo-no-back.png')";
            break;
            default:
            console.log('valar input is not valid for a background')
        }
        // make sure the age icon is contained on the div
        valarBackground.style.backgroundSize = 'contain';

        //main background based on the location
        switch (userInputArray[1]) {
            case 1:
            body.style.backgroundImage = "url('./images/locations/south-battle.png')";
            break;
            case 2:
            body.style.backgroundImage = "url('./images/locations/north-battle.jpeg')";
            break;
            case 3:
            body.style.backgroundImage = "url('./images/locations/west-battle.jpeg')";
            break;
            case 4:
            body.style.backgroundImage = "url('./images/locations/east-battle.jpeg')";
            break;
            default:
            console.log('Location input is not valid for a background')
        }
        //TODO: to set the correct location of the image on the body background we should use the position attribute here as well
        ageBackgroundContainer.setAttribute('class', 'ageBackgroundContainer')
        body.appendChild(ageBackgroundContainer);
        ageBackgroundContainer.appendChild(ageBackground);
        valarBackgroundContainer.setAttribute('class', 'valarBackgroundContainer')
        body.appendChild(valarBackgroundContainer);
        valarBackgroundContainer.appendChild(valarBackground);
    }
};


//Message fabrication button:
//should take:
//a message ID as a string or variable containing it
//a function name that we will assign to the button event listener
//the parameters of the function we will be using

function createMessage(messageID, actionCounter, userInputArray){
    // console.log("createMessage data messageID ::" + checkData(messageID));
    // console.log("createMessage data actionCounter ::" + checkData(actionCounter));
    // console.log("createMessage data userInputArray ::" + checkData(userInputArray));
    if (actionCounter >= 1 && actionCounter <= 4){
        setMainSpace(actionCounter, userInputArray)
        //put the message inside the h2
        storyText.innerText = messageID;
        continueButton.innerText = 'continue...';
        continueButton.setAttribute('class', 'button1');
        storyText.setAttribute('class', 'storyText');
        startBlock.appendChild(storyText);
        startBlock.appendChild(continueButton);
    } else if (actionCounter >= 5 && actionCounter <= 7){
        storyText.innerText= messageID;
        storyText.setAttribute('class', 'inputText');
        continueButton.innerText = 'Select this and continue...';
        continueButton.setAttribute('class', 'button1');
        body.appendChild(storyText);
        body.appendChild(continueButton);
    };
};

//input fabricator function,
//this may be called inside a bigger function
// to create the input individually

function CreateInput(inputAmount, option){
    console.log(inputAmount)
    for (let index = 1; index <= inputAmount; index++) {
        selectionContainer.style.display = 'flex';
        selectionContainer.style.flexDirection = 'column';
        const inputElement = document.createElement('input');
        const inputLabel = document.createElement('label');
        const inputImg = document.createElement('img');
        inputElement.type = 'radio';
        inputElement.value = index;
        inputElement.name = 'selection';
        inputImg.src = `./images/${option}/${index}-mobile.jpeg`;
        inputLabel.appendChild(inputImg);
        inputLabel.appendChild(inputElement);
        inputContainer.appendChild(inputLabel);

    }
    selectionContainer.appendChild(inputContainer);
    body.appendChild(selectionContainer);
};

function captureSelection() {
    const selectedValue = document.querySelector('input[name="selection"]:checked').value;
    userinput[0] = (selectedValue);
}

/* Declares the input request from the user,
performs data validation on the numbers
returns an array of 3 numbers for each selection:
[age:1-4, location: 1-4, valar: 1-8]
*/
window.getUserInput = () => {
    alert(msg.initialMsg[0]);
    alert(msg.initialMsg[1]);
    alert(msg.initialMsg[2]);
    alert(msg.initialMsg[3]);
    
    let eons;
    let location;
    let valar;
    // input validation:
    do {
        eons = prompt(msg.initialMsg[4]);
        if (isNaN(eons) || eons < 1 || eons > 4) {
            alert("Error, your input for Age is not a valid selection. Try again.");
            eons = null;// make it falsy for the while
        }
    } while (!eons);
    
    do {
        location = prompt(msg.initialMsg[5]);
        if (isNaN(location) || location < 1 || location > 4) {
            alert("Error, your input for location is not a valid selection. Try again.");
            location = null;
        }
    } while (!location);
    
    do {
        valar = prompt(msg.initialMsg[6]);
        if (isNaN(valar) || valar < 1 || valar > 8) {
            alert("Error, your input for Valar is not a valid selection. Try again.");
            valar = null;
        }
    } while (!valar);
    
    return [eons, location, valar];
};

/*Generates an array of random numbers that correspond to the races in the battle
applies all buff or debuffs on the race numbers depending on location, blessing and age
*/

window.generateNumbers = (age, atype, location, blesser)=>{
    // generate an array with the name of the races where the type equals the type of army we want to generate
    const armyRaces = Object.keys(races).filter(raceName => races[raceName].type === atype || races[raceName].type === 'depends'); // we check for the type we provide and the 'depends' string for races that fight on both sides
    let realArmyNums = armyRaces.reduce((armyNumbers, currentRace, index)=>{ // pass reduce for each race, so we can manipulate the worth granularly
        // we will generate a random number for each race in the array
        let randomNum = Math.floor(Math.random()*100);
        // apply location boost to the local races depending on the location
        randomNum = Math.floor(randomNum * races.getPopulation(armyRaces[index], location))
        //apply the blessing of the Valar:
        randomNum = randomNum + races.getBlessing(armyRaces[index], valares[blesser])
        //check the age and apply the modifier as necessary for the dominant race in that age
        if (age == 1){
            armyNumbers.push(ages.first(currentRace, randomNum)) ;
        } else if (age == 2){
            armyNumbers.push(ages.second(currentRace, randomNum))
        } else if (age == 3){
            armyNumbers.push(ages.third(currentRace, randomNum))
        } else if (age == 4){
            armyNumbers.push(ages.fourth(currentRace, randomNum))
        } else {
            return 'error provided age does not exist';
        }
        return armyNumbers; // always return the accumulator
    }, [])
    
    return realArmyNums;
};

/*Generates an object that contains the characteristics of an army:
TODO: should use the assign() method in any way to clone objects
*/

window.generateArmy = (type, locale, valar , era ) => {
    let getNewArmy = generateNumbers(era, type, locale, valar);
    console.log('aqui si es');
    return {
        type: type,
        size: getNewArmy
    }
};

/* Gets the sum of the army size object returns an integer */

window.calculateArmyWorth = (armyObj) => {
    console.log(armyObj);
    let totalWorth =armyObj.size.reduce((suma, grupo)=>{
        suma += grupo
        return suma
    }, 0);
    return totalWorth;
};

/* Returns an array with the format [winner , loser] where the values can be: 'light', 'darkness', or 'tie' */

window.battleCalculator = (worthGud, worthBad) => {
    if (worthGud > worthBad){
        return ["light", 'darkness'];
    } else if (worthGud < worthBad){
        return ["darkness", 'light'];
    } else {
        return ["tie", "tie"]
    };
};

/* Takes the age (number) to limit the range of years for the random date generator, returns a date object valid within the tolkien legendarium */

window.battleDuration = (age)=>{
    let randomYear = Math.random();
    let randomMonth = Math.floor(Math.random() * 11);
    let randomDay = Math.floor(Math.random() * 30);
    if (age ===1){
        randomYear = Math.floor(randomYear * ages.maxYear1) ;
    } else if (age ===2) {
        randomYear = Math.floor(randomYear * ages.maxYear2);
    } else if (age ===3) {
        randomYear = Math.floor(randomYear * ages.maxYear3);
    } else if (age ===4) {
        randomYear = Math.floor(randomYear * ages.maxYear4);
    }
    return new Date(randomYear, randomMonth, randomDay);
};

