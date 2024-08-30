//DOM definitions
const body = document.getElementById('body')
const mainBlock = document.getElementById('mainBlock');
const startBlock = document.getElementById('startBlock');
const storyText = document.createElement('h2');
const startButton = document.getElementById('startbutton');
const nextButton = document.createElement('button');
const ageBackground = document.createElement('div')
const valarBackground = document.createElement('div')
const ageBackgroundContainer = document.createElement('div')
const valarBackgroundContainer = document.createElement('div')
const selectionContainer = document.createElement('div');
const inputContainer = document.createElement('div');

/**
 * @constructor Background
 * @param {number} currentActionNumber
 * @param {Array} userInputArray
 */
function setMainSpace(currentActionNumber, userInputArray){
    if (currentActionNumber >= 1 && currentActionNumber <= 4 ){
        startButton.style.display = 'none';
        body.style.backgroundImage = "url('./images/UI/wood-grain-nails-compressed.jpg')";
        startBlock.style.backgroundImage = "url('./images/UI/paper-background.jpeg')";
    } else if (currentActionNumber >= 5 && currentActionNumber < 8 ){
        body.style.display = 'flex';
        body.style.flexDirection = 'column';
        body.style.backgroundSize = 'contain';
        body.style.backgroundRepeat = 'no-repeat'
        body.style.backgroundImage = "url('./images/UI/paper-background.jpeg')";
        mainBlock.style.backgroundImage = "";
        body.style.backgroundColor = "#1d1d1d";
        startBlock.style.display ='none'
    } else if (currentActionNumber >= 8 && currentActionNumber < 12 ){
        selectionContainer ? selectionContainer.remove(selectionContainer) : console.log('already removed') ;
        body.style.backgroundSize = 'contain';
        body.style.backgroundRepeat = ''
        body.style.backgroundImage = "url('./images/UI/wood-grain-nails-compressed.jpg')";
        startBlock.style.display = 'block';
        startBlock.style.backgroundImage = "url('./images/UI/paper-background.jpeg')";
    } else if (currentActionNumber >= 12){
        storyText.style.color= '#ff0000'
        body.style.backgroundImage = "";
        mainBlock.style.backgroundImage = "";
        startBlock.style.display = 'none'
          //age icon
        switch (+userInputArray[0]) {
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
        switch (+userInputArray[2]) {
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
        valarBackground.style.backgroundSize = 'contain';
        valarBackground.setAttribute('class', 'valarBackground')
        //main background based on the location
        switch (+userInputArray[1]) {
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
        body.style.backgroundSize = '400%';
        body.style.backgroundPositionX = '45%'
        //TODO: to set the correct location of the image on the body background we should use the position attribute here as well
        ageBackgroundContainer.setAttribute('class', 'ageBackgroundContainer')
        body.appendChild(ageBackgroundContainer);
        ageBackgroundContainer.appendChild(ageBackground);
        valarBackgroundContainer.setAttribute('class', 'valarBackgroundContainer')
        body.appendChild(valarBackgroundContainer);
        valarBackgroundContainer.appendChild(valarBackground);
    }
};

/**
 * create the exclusive button for each action
 * @param {number} actionNumeral used to determine the correct button to add
 */
function createContinueBtn(actionNumeral) {
    const continueButton = document.createElement('button');
    if (actionNumeral >= 1 && actionNumeral <= 4){
        continueButton.innerText = 'continue...';
        continueButton.setAttribute('class', 'button1');
        continueButton.setAttribute('id', 'button1');
        startBlock.appendChild(continueButton);
    } else if (actionNumeral >= 5 && actionNumeral <= 7){
        continueButton.innerText = 'Select this and continue...';
        continueButton.setAttribute('id', 'button2');
        continueButton.setAttribute('class', 'button2');
        body.appendChild(continueButton);
    } else if (actionNumeral >= 8 && actionNumeral <= 11){
        continueButton.innerText = 'continue...';
        continueButton.setAttribute('id', 'button2');
        continueButton.setAttribute('class', 'button2');
        startBlock.appendChild(continueButton);
    } else if (actionNumeral >= 12 && actionNumeral < 16){
        continueButton.innerText = 'continue...';
        continueButton.style.color = '#ffffff';
        continueButton.setAttribute('id', 'button2');
        continueButton.setAttribute('class', 'button2');
        mainBlock.appendChild(continueButton);
    } else if (actionNumeral === 16){
        continueButton.innerText = msg.getResultMsg(5);
        continueButton.style.color = '#ffffff';
        continueButton.setAttribute('id', 'button2');
        continueButton.setAttribute('class', 'button2');
        mainBlock.appendChild(continueButton);
    }
};

/** create a message to screen
 * @constructor
 * @param {string} messageID
 */
function createMessage(messageID, actionNumeral){
    if (actionNumeral >= 1 && actionNumeral <= 4){
        storyText.innerText = messageID;
        storyText.setAttribute('class', 'storyText');
        startBlock.appendChild(storyText);
    } else if (actionNumeral >= 5 && actionNumeral <= 7){
        storyText.innerText= messageID;
        storyText.setAttribute('class', 'inputText');
        body.appendChild(storyText);
    } else if(actionNumeral >= 8 && actionNumeral <= 11) {
        storyText.innerText = messageID;
        storyText.setAttribute('class', 'storyText');
        startBlock.appendChild(storyText);
    } else if(actionNumeral >= 12) {
        storyText.innerText = messageID;
        storyText.setAttribute('class', 'storyText2');
        mainBlock.appendChild(storyText);
    }
};


/**
 * create input elements
 * @constructor
 * @param {number} inputAmount how many radio are to be created
 * @param {string} option the type of input we are creating, image folder name
 *
 * Will remove previous selections if they already exist
 */
function createInput(inputAmount, option){
    if (inputContainer.firstChild){
        inputContainer.innerHTML = '';
    }
    for (let index = 1; index <= inputAmount; index++) {
        inputContainer.setAttribute('class' , 'inputContainer')
        const inputElement = document.createElement('input');
        const inputLabel = document.createElement('label');
        const inputImg = document.createElement('img');
        inputElement.type = 'radio';
        inputElement.value = index;
        inputElement.name = 'selection';
        inputElement.setAttribute('id','my-radio')
        inputImg.setAttribute('class', 'selectedImg')
        inputImg.src = `./images/${option}/${index}-mobile.jpeg`;
        inputLabel.appendChild(inputElement);
        inputLabel.appendChild(inputImg);
        inputContainer.appendChild(inputLabel);
    }
    selectionContainer.appendChild(inputContainer);
    body.appendChild(selectionContainer);
};

/**
 *  Will capture the current selection from the user on click
 * @param {number} numeral
 */
function captureSelection(numeral) {
    const selectedValue = document.querySelector('input[name="selection"]:checked');
    if (selectedValue) {
        userinput[numeral] = selectedValue.value;
    } else {
        userinput[numeral] = ' Undefined Again';
    }
    console.log(userinput);
}

/**Declares the input request from the user,
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

/** Generate the numbers of the army randomly
 * @constructor
 * @returns array with a number corresponding to each race
*/
function generateNumbers(age, atype, location, blesser){
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

/**
 * @constructor
 * @param {string} type 'evil' or 'good'
 * @param {number} locale   1 - 4
 * @param {number} valar    1 - 8
 * @param {number} era  1-4
 * @returns object with army information
 */
function generateArmy(type, locale, valar , era ) {
    let getNewArmy = generateNumbers(era, type, locale, valar);
    console.log('aqui si es');
    return {
        type: type,
        size: getNewArmy
    }
};

/**Gets the sum of the army size object returns an integer
 *
 * @param {object} armyObj
 * @returns number army power
 */
function calculateArmyWorth(armyObj) {
    console.log(armyObj);
    let totalWorth =armyObj.size.reduce((suma, grupo)=>{
        suma += grupo
        return suma
    }, 0);
    return totalWorth;
};

/** Winner decider calculator
 * @param {number} worthGud
 * @param {number} worthBad
 * @returns Array with the [winner , loser] where the values can be: 'light', 'darkness', or 'tie'
 */
function battleCalculator(worthGud, worthBad) {
    if (worthGud > worthBad){
        return ["light", 'darkness'];
    } else if (worthGud < worthBad){
        return ["darkness", 'light'];
    } else {
        return ["tie", "tie"]
    };
};

/** Battle date generator
 * @param {number} age limit the range of years for the random date generator,
 * @returns  date object valid within the tolkien legendarium
 */
function battleDuration(age) {
    age = +age
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

