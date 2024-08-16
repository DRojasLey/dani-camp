
// races and their important characteristics
// type: affiliation, worth: how strong blessingFactor: how much is the army affected depending on the blesser blesser: which valar is most related  location: where is the main residence of this race,
// population: how many numbers are expected depending in the location of the battle
// each value represents the expected population on the [south, north, west, east] if a number is expected it gets multiplied by the percentage that is expected in that area

const races = {
    hobbits:{ type: "good", worth: 1 , blessingFactor: 1 , blesser:'Estë',location: 'west', _population:[0.1, 0.1, 1, 0.2]} ,
    dunedain: { type: "good", worth: 3 , blessingFactor: 2 ,  blesser: 'Oromë',location: 'south', _population: [1, 0.5, 0.8, 0.8]},
    'lesser men': { type: "depends", worth: 2 , blessingFactor: 1 ,  blesser: 'Melkor',location: 'west', _population: [0.8, 0.8, 1, 0.8]},
    pirates: { type: "evil", worth: 2 , blessingFactor: 0 ,  blesser: 'Lórien',location: 'south', _population: [1, 0, 0.8, 0]},
    ents: { type: "good", worth: 5 , blessingFactor: 2 ,  blesser: 'Lórien',location: 'west', _population: [0.1, 0, 0.3, 0]},
    elves: { type: "good", worth: 3 , blessingFactor: 3 ,  blesser:'Varda',location: 'east', _population:[0.7, 0.7, 0.7, 1]},
    dwarves: { type: "good", worth: 3 , blessingFactor: 4 ,  blesser:'Aulë',location: 'north', _population:[0.5, 1, 0.3, 0.9]},
    eagles: { type: "good", worth: 4 , blessingFactor: 2 ,  blesser: 'Manwë',location: 'east', _population:[0.1, 0.1, 0.1, 0.2]},
    wizards: { type: "depends", worth: 10 , blessingFactor: 5 ,  blesser:'Námo',location: 'east', _population:[0.01, 0.01, 0.01, 0.15]},
    orcs: { type: "evil", worth: 1 , blessingFactor: 1 ,  blesser:'Varda',location: 'south', _population:[1.3, 0.8, 0.5, 1]},
    wargs: { type: "evil", worth: 2 , blessingFactor: 0 ,  blesser:'Oromë',location: 'south', _population:[1, 0.5, 0.5, 0.8]},
    goblins: { type: "evil", worth: 2 , blessingFactor: 1 ,  blesser:'Manwë',location: 'north', _population: [0.8, 1.1, 0.2, 0.1]},
    'uruk\'kai': { type: "evil", worth: 3 , blessingFactor: 2 ,  blesser:'Melkor',location: 'north', _population:[0.2, 1, 0.2, 0.1]},
    trolls: { type: "evil", worth: 5 , blessingFactor: 3 ,  blesser: 'Aulë',location: 'east', _population: [0.2, 0.2, 0.2, 0.5]},
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


// blessers object to be used in the calculation of the blessing
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


/* age is number coming from the user input should return a multiplier depending on the era and the dominant race  */

const ages = {first:(race, number) => {
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

// we will use these messages for the user interface

const msg = {
    initialMsg: [`Very few are given the power to control the fate of middle earth...`,
        `luckily, you are one of them`,
        `your decisions will affect the future of a decisive battle between the forces of good and evil, light and darkness`,
        `please let us know, what the future brings:`,
        `In what age is the battle taking place? (input only numbers 1,2,3 or 4)`,
        `Where is your battle going to happen? (input only numbers) \n (1. South [Gondor, Mordor, Rohan];\n 2.  North [Arnor, Angmar]   \n 3. West [Eriador,Blue Mntns, Forlindon];\n 4. East [Mirkwood, Erebor, Misty Mntns]; ) `,
        `What Valar is observing?
                  (only numbers)
                    1.Manwë (King of arda)
                    2.Melkor (Morgoth)
                    3.Aulë (Dwarves)
                    4.Varda (stars)
                    5.Oromë (Hunter)
                    6.Námo (Mandos)
                    7.Estë
                    8.Lórien `],
    getResultMsg: function(aDate, age, badArmy, gudArmy, winner, loser){
        let messages =[`It was the year ${aDate.getFullYear()} in the month ${aDate.getMonth()} in the day ${aDate.getDate()} from the ${age} age, when the armies of darkness, counting ${badArmy} worth, rose upon all the good there is in the land.`,
        `to face this challenge, the council at Rivendel called for an army, ${gudArmy} strong assembled for battle in the fields of Middle Earth to face the enemy.`,
        `the battle raged on and in the end the armies of ${winner} rose triumphant destroying the ${loser} forever...`, `the battle raged on and in the end neither of the armies could overcome the other ...`]
          alert(messages[0])
          alert(messages[1])
          winner === loser ? alert(messages[3]) : alert(messages[2]);
        }
    }

        window.msg = msg;

