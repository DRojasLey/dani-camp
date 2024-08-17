// This is the main object for my messages and variables

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


/* This will ask the user to input the minutes:
stores the minutes as an int between 1 - 10 in the main object
*/
function getUserInput(){
    let minutes;

    do {
        minutes = prompt(mainObj.message1);
        if (isNaN(minutes) || minutes < 1 || minutes > 10) {
            alert("Error, please only introduce a maximum of 10 minutes. Try again.");
            minutes = null;// make it falsy for the while
        }
    } while (!minutes);

    mainObj.givenMinutes += +minutes;
};


/* This will console log the current time to the console and stores it in the main object:
*/
function getStartingTime(){
    mainObj.startingDate = new Date();
    console.log(mainObj.message2 + ' ' + mainObj.startingDate.toTimeString());
};
// Will also return the minutes as miliseconds we will use for set timeout

function convertToMill(minutes){
    const minuteToMilliseconds = 60000;
    let convert = minutes*minuteToMilliseconds;
    return convert ;
};



/* This is the function that setTimeOut will call:
it takes the number the user provides and gives it to a loop
the loop will print to the console # symbols as half a pyramid
*/
function pyramid(numOfMinutes = mainObj.givenMinutes){
    for (let index = 0; index < numOfMinutes; index++) {
        console.log('#'.repeat(index + 1));
    }
    console.log(mainObj.message4)
};

/*
This will take the starting date and add the minutes to the date:
the new date will be stored in the main object
and will be printed for the user to know when the piramid will be created
*/

function convertTheDate(theMinutes){
    const startTime = mainObj.startingDate
    let origMinutes = startTime.getMinutes()
    startTime.setMinutes(theMinutes + origMinutes)
    mainObj.finalDate = startTime.toTimeString()

};

/* This will initialize the setTimeout call and will print in console the expected time
Expected time will be the time we previously stored in the object + the minutes
*/
function condenser(){
    getUserInput();
    getStartingTime(mainObj.givenMinutes);
    let time = convertToMill(mainObj.givenMinutes);
    setTimeout(pyramid, time);
    console.log(` ${mainObj.message5} ${mainObj.givenMinutes} ${mainObj.minWord}`);
    convertTheDate(mainObj.givenMinutes);
    console.log(mainObj.message3 + mainObj.finalDate);
};

condenser()