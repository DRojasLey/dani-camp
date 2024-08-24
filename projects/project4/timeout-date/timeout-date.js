//DOM Variable declarations:

const mainBlock = document.getElementById('mainBlock');
const selectElemnt = document.getElementById('minutes');
const goBtn = document.getElementById('goBtn');
const startAtElemnt = document.createElement('h4');
const finishAtElemnt = document.createElement('h4');
const instrucBlock = document.createElement('section');
const consoleEmuBlock = document.createElement('section');

// This is the main object for messages and variables

let mainObj = {
    message1: 'Input the minutes you want to wait \n Only numbers 1-10, \n cannot wait 0 minutes',
    message2: 'The starting time is: \n',
    message3: 'The final time is: \n',
    message4: 'That is all folks!',
    message5: `The expected time is:`,
    minWord: 'minutes',
    givenMinutes: 0,
    startingDate: new Date,
    finalDate: new Date
}

//function no longer needed on the graphical version, left as legacy reference

/* Will ask the user to input the minutes:
stores the minutes as an int between 1 - 10 in the main object
*/
// //function getUserInput(){
//     let minutes;

//     do {
//         minutes = prompt(mainObj.message1);
//         if (isNaN(minutes) || minutes < 1 || minutes > 10) {
//             alert("Error, please only introduce a maximum of 10 minutes. Try again.");
//             minutes = null;// make it falsy for the while
//         }
//     } while (!minutes);

//     mainObj.givenMinutes += +minutes;
//};

//This will replace the old input, it does not require user data validation as we are using a select instead

goBtn.addEventListener('click', getUserInput )


//The click will set in motion most of the events:
//starting the countdown, calling the timeout, changing the main block

function getUserInput(){
    const userMinutes = selectElemnt.value;
    mainObj.givenMinutes += +userMinutes;
    let onlyTime = mainObj.finalDate;
    let startAt = getStartingTime();
    convertTheDate(mainObj.givenMinutes)
    let time = convertToMill(mainObj.givenMinutes);
    let finishAt= onlyTime;
    setTimeout(pyramid, time);
    console.log(mainObj.givenMinutes)
    changeBlockInMain(finishAt, startAt);
};

//DOM  changing to the second stage

function changeBlockInMain(finishAt, startAt){
    mainBlock.innerHTML = '';
    finishAtElemnt.setAttribute('class' ,'instructions')
    finishAtElemnt.innerText = mainObj.message2 + finishAt.toTimeString().split(' ')[0];
    instrucBlock.appendChild(finishAtElemnt)
    startAtElemnt.setAttribute('class' ,'instructions')
    startAtElemnt.innerText = mainObj.message3 + startAt.toTimeString().split(' ')[0];
    instrucBlock.setAttribute('class', 'instructionsBlock')
    instrucBlock.appendChild(startAtElemnt)
    mainBlock.appendChild(instrucBlock);
}

/* Will console log the current time to the console and stores it in the main object:
*/
function getStartingTime(){
    mainObj.startingDate = new Date();
    let onlyTime = mainObj.startingDate;
    return onlyTime
};

/* Will return the minutes as miliseconds that we will use for set timeout */

function convertToMill(minutes){
    const minuteToMilliseconds = 60000;
    let convert = minutes*minuteToMilliseconds;
    return convert ;
};

/* This is the function that setTimeOut will call:
creates an emulated 'console' section
it takes the number the user provides and gives it to a loop
the loop will print to the emulated console # symbols as half a pyramid
will create a button from scratch to start over again
*/

function pyramid(numOfMinutes = mainObj.givenMinutes){
    let arrToPrint = [];

    mainBlock.innerHTML = '';
    consoleEmuBlock.setAttribute('class', 'consoleEmuBlock');
    mainBlock.appendChild(consoleEmuBlock)
    for (let index = 0; index < numOfMinutes; index++) {
        arrToPrint.push('#'.repeat(index + 1))
    }
    arrToPrint.forEach(element => {
        const printToEmu = document.createElement('p')
        printToEmu.innerText = '>' + element ;
        consoleEmuBlock.appendChild(printToEmu)
    });
    const printToEmu2 = document.createElement('p')
    printToEmu2.innerText = mainObj.message4
    consoleEmuBlock.appendChild(printToEmu2)

    const returnBtn = document.createElement('button')
    returnBtn.setAttribute('class', 'goBtn');
    returnBtn.innerText = 'Again'
    returnBtn.addEventListener('click', () => window.location.reload())
    mainBlock.appendChild(returnBtn)
};

/*This will take the starting date and add the minutes to the date:
the new date will be stored in the main object
and will be printed for the user to know when the piramid will be created
*/

function convertTheDate(theMinutes){
    const startTime = mainObj.startingDate
    let origMinutes = startTime.getMinutes()
    console.log(origMinutes)
    startTime.setMinutes(theMinutes + origMinutes)
    mainObj.finalDate = startTime.toTimeString()

};

//this function is no longer needed, left on the code as reference 

/* This will initialize the setTimeout call and will print in console the expected time
Expected time will be the time we previously stored in the object + the minutes
*/

// function condenser(){
//     getUserInput();
//     getStartingTime(mainObj.givenMinutes);
//     let time = convertToMill(mainObj.givenMinutes);
//     setTimeout(pyramid, time);
//     console.log(` ${mainObj.message5} ${mainObj.givenMinutes} ${mainObj.minWord}`);
//     convertTheDate(mainObj.givenMinutes);
//     console.log(mainObj.message3 + mainObj.finalDate);
// };

