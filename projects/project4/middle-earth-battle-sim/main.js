let badArmy;
let gudArmy;
let loser;
let winner;
let battleResult;
let bateruDate;

let userinput = [1 , 1 , 1];
let actionCounter = 0;
// window.badArmy = badArmy

function firstAction() {
    actionCounter = 1;
    setMainSpace(actionCounter);
    createMessage(msg.initialMsg[0],1);
    createContinueBtn(actionCounter);
    button1.addEventListener('click', ()=>secondAction());
};

startButton.addEventListener('click', () => firstAction());

function secondAction() {
    button1.removeEventListener('click', ()=>secondAction())
    button1.remove()
    actionCounter = 2;
    setMainSpace(actionCounter);
    createMessage(msg.initialMsg[1], actionCounter);
    createContinueBtn(actionCounter)
    button1.addEventListener('click', ()=>thirdAction())
};

function thirdAction() {
    button1.removeEventListener('click', ()=>thirdAction())
    button1.remove()
    actionCounter = 3;
    setMainSpace(actionCounter);
    createMessage(msg.initialMsg[2], actionCounter);
    createContinueBtn(actionCounter)
    button1.addEventListener('click', ()=>fourthAction())
};

function fourthAction() {
    button1.removeEventListener('click', ()=>fourthAction())
    button1.remove()
    actionCounter = 4;
    setMainSpace(actionCounter);
    createMessage(msg.initialMsg[3], actionCounter);
    createContinueBtn(actionCounter)
    button1.addEventListener('click', ()=>fifthAction())
};

function fifthAction() {
    button1.removeEventListener('click', ()=>fifthAction())
    button1.remove()
    actionCounter = 5;
    setMainSpace(actionCounter);
    createMessage(msg.initialMsg[4], actionCounter);
    createContinueBtn(actionCounter);
    createInput(4, 'ages');
    button2.addEventListener('click', ()=>{
        captureSelection(0);
        sixthAction();
    });
};

function sixthAction() {
    button2.removeEventListener('click', ()=>{
        captureSelection(0);
        sixthAction();
    });
    button2.remove()
    actionCounter = 6;
    setMainSpace(actionCounter);
    createMessage(msg.initialMsg[5], actionCounter);
    createContinueBtn(actionCounter);
    createInput(4, 'locations');
    button2.addEventListener('click', ()=>{
        captureSelection(1);
        seventhAction();
    });
};

function seventhAction() {
    button2.removeEventListener('click', ()=>{
        captureSelection(1);
        seventhAction();
    });
    button2.remove()
    actionCounter = 7;
    setMainSpace(actionCounter);
    createMessage(msg.initialMsg[6], actionCounter);
    createContinueBtn(actionCounter);
    createInput(8, 'valar');
    button2.addEventListener('click', ()=>{
        captureSelection(2);
        eighthAction();
    });
};

function eighthAction(){
    button2.removeEventListener('click', ()=>{
        captureSelection(2);
        eighthAction();
    });
    button2.remove()
    actionCounter = 8;
    setMainSpace(actionCounter);
    createMessage(msg.processingMsgs(1), actionCounter);
    createContinueBtn(actionCounter);
    badArmy = generateArmy('evil', userinput[1], userinput[2], userinput[0]);
    badArmy = calculateArmyWorth(badArmy);
    button2.addEventListener('click', ()=>ninthAction());
};

function ninthAction() {
    button2.removeEventListener('click', ()=>ninthAction());
    button2.remove()
    actionCounter = 9;
    setMainSpace(actionCounter);
    createMessage(msg.processingMsgs(1, badArmy), actionCounter);
    createContinueBtn(actionCounter);
    button2.addEventListener('click', ()=>tenthAction());
};

function tenthAction() {
    button2.removeEventListener('click', ()=>tenthAction());
    button2.remove()
    actionCounter = 10;
    setMainSpace(actionCounter);
    createMessage(msg.processingMsgs(2), actionCounter);
    createContinueBtn(actionCounter);
    gudArmy = generateArmy('good', userinput[1], userinput[2], userinput[0]);
    gudArmy = calculateArmyWorth(gudArmy);
    button2.addEventListener('click', ()=>eleventhAction());
};

function eleventhAction() {
    console.log(gudArmy + ': gud ' + badArmy + ': bad');
    button2.removeEventListener('click', ()=>eleventhAction());
    button2.remove()
    actionCounter = 11;
    setMainSpace(actionCounter);
    createMessage(msg.processingMsgs(2, gudArmy), actionCounter);
    createContinueBtn(actionCounter);
    button2.addEventListener('click', ()=>twelfthAction());
};

function twelfthAction() {
    button2.removeEventListener('click', ()=>twelfthAction());
    button2.remove();
    actionCounter= 12
    battleResult = battleCalculator(gudArmy, badArmy);
    bateruDate = battleDuration(userinput[0]);
    loser = battleResult[1];
    winner = battleResult[0];
    setMainSpace(actionCounter, userinput);
    createMessage(msg.getResultMsg(1, bateruDate, userinput[0], badArmy, gudArmy, winner, loser ), actionCounter);
    createContinueBtn(actionCounter);
    button2.addEventListener('click', ()=>thirteenthAction());

};

function thirteenthAction() {
    button2.removeEventListener('click', ()=>thirteenthAction());
    button2.remove();
    actionCounter= 13

    setMainSpace(actionCounter, userinput);
    createMessage(msg.getResultMsg(2, bateruDate, userinput[0], badArmy, gudArmy, winner, loser ), actionCounter);
    createContinueBtn(actionCounter);
    button2.addEventListener('click', ()=>fourteenthAction());
}

function fourteenthAction() {
    button2.removeEventListener('click', ()=>fourteenthAction());
    button2.remove();
    actionCounter= 14

    setMainSpace(actionCounter, userinput);
    createMessage(msg.getResultMsg(3, bateruDate, userinput[0], badArmy, gudArmy, winner, loser ), actionCounter);
    createContinueBtn(actionCounter);
    button2.addEventListener('click', ()=>fifteenthAction());
}

function fifteenthAction() {
    button2.removeEventListener('click', ()=>fifteenthAction());
    button2.remove();
    actionCounter= 15

    setMainSpace(actionCounter, userinput);
    createMessage(msg.getResultMsg(4, bateruDate, userinput[0], badArmy, gudArmy, winner, loser ), actionCounter);
    createContinueBtn(actionCounter);
    button2.addEventListener('click', ()=>lastAction());
}

function lastAction(){
    button2.removeEventListener('click', ()=>lastAction());
    button2.remove();
    actionCounter= 16
    setMainSpace(actionCounter, userinput);
    createMessage('The End', actionCounter)
}