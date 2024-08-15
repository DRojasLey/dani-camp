const races = {
    hobbits:{ type: "good", worth: 1 , blessingFactor: 1 , condition: 'PLACEHOLDER FOR FUNCTION' } ,
    dunedain: { type: "good", worth: 3 , blessingFactor: 2 , condition: 'PLACEHOLDER FOR FUNCTION' },
    'lesser men': { type: "depends", worth: 2 , blessingFactor: 1 , condition: 'PLACEHOLDER FOR FUNCTION' },
    pirates: { type: "evil", worth: 2 , blessingFactor: 0 , condition: 'PLACEHOLDER FOR FUNCTION' },
    ents: { type: "good", worth: 5 , blessingFactor: 2 , condition: 'PLACEHOLDER FOR FUNCTION' },
    elves: { type: "good", worth: 3 , blessingFactor: 3 , condition: 'PLACEHOLDER FOR FUNCTION'},
    dwarves: { type: "good", worth: 3 , blessingFactor: 4 , condition: 'PLACEHOLDER FOR FUNCTION'},
    eagles: { type: "good", worth: 4 , blessingFactor: 2 , condition: 'PLACEHOLDER FOR FUNCTION'},
    wizards: { type: "depends", worth: 10 , blessingFactor: 5 , condition: 'PLACEHOLDER FOR FUNCTION'},
    orcs: { type: "evil", worth: 1 , blessingFactor: 1 , condition: 'PLACEHOLDER FOR FUNCTION'},
    wargs: { type: "evil", worth: 2 , blessingFactor: 0 , condition: 'PLACEHOLDER FOR FUNCTION'},
    goblins: { type: "evil", worth: 2 , blessingFactor: 1 , condition: 'PLACEHOLDER FOR FUNCTION'},
    'uruk\'kai': { type: "evil", worth: 3 , blessingFactor: 2 , condition: 'PLACEHOLDER FOR FUNCTION'},
    trolls: { type: "evil", worth: 5 , blessingFactor: 3 , condition: 'PLACEHOLDER FOR FUNCTION'}
};

window.races = races;

let armies = {type: 'depends', warriorsCount: "string randomly generated", blessingFactor: 'boolean', condition: 'number average of the warrior count conditions'};

window.armies = armies;

const msg = [`It was the year ${PLACEHOLDER} from the ${PLACEHOLDER} age, in the month of ${PLACEHOLDER} the day ${PLACEHOLDER} when the armies of darkness, counting ${PLACEHOLDER} worth, rose upon all the good there is in the land.`,
             `to face this challenge, the council at Rivendel called for an army, ${PLACEHOLDER} strong assembled for battle in the fields of ${PLACEHOLDER} to face the enemy.`,
             `for ${PLACEHOLDER} days and nights the battle raged on and in the end the armies of ${PLACEHOLDER} rose triumphant destroyoing the ${PLACEHOLDER} forever...`]

window.msg = msg;
