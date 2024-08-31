
/** Races and their important characteristics:
* @type: affiliation,
* @worth: how strong,
* @blessingFactor: how much is the army affected depending on the blesser
* @blesser: which valar has affinity for the race,
* @location: where is the main residence of this race,
* @population: how many numbers are expected depending in the location of the battle:
* Each value represents the expected population on the area as follows:
*  @[south, north, west, east]
* @The number of soldiers for the race gets multiplied by the percentage of population that is expected in that area
* which means, that sometimes even if there is a number generated, if the current area does not have any ent, it will be multiplied by 0
*/
const races = {
    hobbits:{
        type: "good",
        worth: 1 ,
        blessingFactor: 1 ,
        blesser:'Estë',
        location: 'west',
        _population:[0.1, 0.1, 1, 0.2]
    },
    dunedain:{
        type: "good",
        worth: 3 ,
        blessingFactor: 2 ,
        blesser: 'Oromë',
        location: 'south',
        _population: [1, 0.5, 0.8, 0.8]
    },
    'lesser men':{
        type: "depends",
        worth: 2 ,
        blessingFactor: 1 ,
        blesser: 'Melkor',
        location: 'west',
        _population: [0.8, 0.8, 1, 0.8]
    },
    pirates:{
        type: "evil",
        worth: 2,
        blessingFactor: 0,
        blesser: 'Lórien',
        _population: [1, 0, 0.8, 0]
    },
    ents:{
        type: "good",
        worth: 5,
        blessingFactor: 2,
        blesser: 'Lórien',
        location: 'west',
        _population: [0.1, 0, 0.3, 0]
    },
    elves:{
        type: "good",
        worth: 3,
        blessingFactor: 3 ,
        blesser:'Varda',
        location: 'east',
        _population:[0.7, 0.7, 0.7, 1]
    },
    dwarves:{
        type: "good",
        worth: 3,
        blessingFactor: 4,
        blesser:'Aulë',
        location: 'north',
        _population:[0.5, 1, 0.3, 0.9]
    },
    eagles:{
        type: "good",
        worth: 4,
        blessingFactor: 2,
        blesser: 'Manwë',
        location: 'east',
        _population:[0.1, 0.1, 0.1, 0.2]
    },
    wizards:{
        type: "depends",
        worth: 10,
        blessingFactor: 5,
        blesser:'Námo',
        location: 'east',
        _population:[0.01, 0.01, 0.01, 0.15]
    },
    orcs:{
        type: "evil",
        worth: 1,
        blessingFactor: 1,
        blesser:'Varda',
        location: 'south',
        _population:[1.3, 0.8, 0.5, 1]
    },
    wargs:{
        type: "evil",
        worth: 2,
        blessingFactor: 0,
        blesser:'Oromë',
        location: 'south',
        _population:[1, 0.5, 0.5, 0.8]
    },
    goblins:{
        type: "evil",
        worth: 2,
        blessingFactor: 1,
        blesser:'Manwë',
        location: 'north',
        _population: [0.8, 1.1, 0.2, 0.1]
    },
    'uruk\'kai':{
        type: "evil",
        worth: 3,
        blessingFactor: 2,
        blesser:'Melkor',
        location: 'north',
        _population:[0.2, 1, 0.2, 0.1]
    },
    trolls:{
        type: "evil",
        worth: 5,
        blessingFactor: 3,
        blesser: 'Aulë',
        location: 'east',
        _population: [0.2, 0.2, 0.2, 0.5]
    },
    
    getPopulation: function(raceName, cardinal) {
        return this[raceName]._population[cardinal-1];
    },
    
    getBlessing: function (raceName, blesser) {
        console.log(blesser)
        const raceData = this[raceName];
        return raceData.blesser === blesser ? raceData.blessingFactor : 0;
    }
};
window.races = races;


/**Valar names and relations,
* object to be used in the calculation of the blessing
*/
let valares = {
    1:'Manwë',
    2:'Melkor',
    3:'Aulë',
    4:'Varda',
    5:'Oromë',
    6:'Námo',
    7:'Estë',
    8:'Lórien'
}
window.valares = valares;


/**
*  Multiplies the number of troops of certain races which are dominand during said age
*/
const ages = {
    first:(race, number) => {
        if (race === 'elves') {
            return Math.floor(number * 1.5);
        } else {
            return number;
        }
    },
    maxYear1: 4902 ,
    second:(race, number) => {
        if (race === 'dunedain') {
            return Math.floor(number * 1.5);
        } else {
            return number;
        }
    },
    maxYear2: 3441 ,
    
    third : (race, number) => {
        if (race === 'orcs') {
            return Math.floor(number * 1.3);
        } else {
            return number;
        }
    },
    maxYear3: 3021,
    
    fourth:(race, number) => {
        if (race === 'lesser men') {
            return Math.floor(number * 1.2);
        } else {
            return number;
        }
    },
    maxYear4: 4024,
    
}
window.ages = ages;



/** Messages and method used for interacting with the user
*@message-array initialMsg
*@message-array processingMsg
*@method getResultMsg
*/
const msg = {
    initialMsg: [`Very few are given the power to control the fate of middle earth...`,
        `luckily, you are one of them`,
        `your decisions will affect the future of a decisive battle between the forces of good and evil, light and darkness`,
        `please let us know, what the future brings:`,
        `In what age is the battle taking place?`,
        `Where is your battle going to happen?`,
        `What Valar is observing?`],
        processingMsgs: function(number , army){
            let messages = ['Conjuring the darkness...',
                `Wicked!, ${army} Strong came to the call!`,
                'Summoning the light...',
                `They, ${army} brave have risen!`]
                if (number === 1 && army){
                    return messages[1]
                } else if (number === 2 && army) {
                    return messages[3]
                } else if(number === 1){
                    return messages[0]
                } else if(number === 2){
                    return messages[2]
                } else {
                    return `not valid input for processing messages method`
                }
            },
            /**
            * @constructor
            *
            * @param {number} flag  used to control the flow of the messages
            * @param {Date} aDate  used as parameter for the messages
            * @param {number} age  used as parameter for the messages 1-4
            * @param {number} badArmy  used as parameter for the messages, randomly generated
            * @param {number} gudArmy  used as parameter for the messages, randomly generated
            * @param {string} winner string that can be 'light', 'darkness' or 'tie'
            * @param {string} loser string that can be 'light', 'darkness' or 'tie'
            * @returns {string} with the formated data to be used in alerts or in the page generation
            */
            getResultMsg: function(flag, aDate, age, badArmy, gudArmy, winner, loser){
                const messages =[ `The battle rages!...`,
                    `It was the year ${aDate.getFullYear()} in the month ${aDate.getMonth()} in the day ${aDate.getDate()} from the ${age} age, when the armies of darkness, counting ${badArmy} worth, rose upon  all the good there is in the land.`,
                    `to face this challenge,  the council at Rivendel called for an army, ${gudArmy} strong assembled for battle in the fields of Middle Earth  to face the enemy.`,
                    `the battle raged on and in the end the armies of ${winner} rose triumphant destroying the ${loser} forever...`,
                    `the battle raged on and in the end neither of the armies could overcome the other ...`,
                    `SET A NEW BATTLE!`]
                    if (flag === 1){
                        return messages[0];
                    } else if (flag === 2){
                        return messages[1];
                    } else if (flag === 3){
                        return messages[2];
                    } else if (flag === 4){
                        return winner === loser ? messages[4] : messages[3];
                    } else if (flag === 5){
                        return messages[5];
                    }
                }
            }
            window.msg = msg;