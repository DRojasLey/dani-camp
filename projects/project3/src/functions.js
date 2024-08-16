//declares the input request from the user, return an array of 3 numbers for each selection:
//[age:1-4, location: 1-4, valar: 1-8]

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


// generates an array of random numbers that correspond to the races in the battle

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
//generates an object that contains the characteristics of an army

 window.generateArmy = (type, locale, valar , era ) => {
    let getNewArmy = generateNumbers(era, type, locale, valar);
    console.log('aqui si es');
    return {
         type: type,
         size: getNewArmy
     }
 };

 // this just gets the sum of the army size
window.calculateArmyWorth = (armyObj) => {
    console.log(armyObj);
    let totalWorth =armyObj.size.reduce((suma, grupo)=>{
        suma += grupo
        return suma
    }, 0);
    return totalWorth;
};
// returns a string with the winner 'light', 'darkness', or tie
window.battleCalculator = (worthGud, worthBad) => {
    if (worthGud > worthBad){
        return ["light", 'darkness'];
    } else if (worthGud < worthBad){
        return ["darkness", 'light'];
    } else {
        return ["tie", "tie"]
    };
};
// use the era to convert the current date into a valid year of the given age:
// use the era to convert the current date into a valid year of the given age:
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

const main = () => {
    let input = getUserInput();
    console.log(input)
    let gudArmy = generateArmy('good', input[0], input[2], input[1]);
    console.log(gudArmy)
    let badArmy = generateArmy('evil', input[0], input[2], input[1]);
    gudArmy = calculateArmyWorth(gudArmy);
    badArmy = calculateArmyWorth(badArmy);
    let resulto = battleCalculator(gudArmy, badArmy);
    let aDate = battleDuration(+input[1]);
    let loser = resulto[1]
    let winner =resulto[0]
    msg.getResultMsg(aDate, +input[0], badArmy, gudArmy, winner, loser)

};
main();