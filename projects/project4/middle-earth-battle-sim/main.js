


let userinput = [0 , 0 , 0];
let actionCounter = 0;



function firstAction() {
    actionCounter = 1;
    setMainSpace(actionCounter);
    createMessage(msg.initialMsg[0],1);
    createContinueBtn(actionCounter)
    button1.addEventListener('click', ()=>secondAction())
};

startButton.addEventListener('click', () => firstAction())

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
    console.log(actionCounter)
    setMainSpace(actionCounter);
    createMessage(msg.initialMsg[4], actionCounter);
    createContinueBtn(actionCounter);
    createInput(4, 'ages');
    button2.addEventListener('click', ()=>{
        sixthAction()
        captureSelection(0);
    });
};

function sixthAction() {
    button2.removeEventListener('click', ()=>{
        sixthAction()
        captureSelection(0);
    });    button2.remove()
    actionCounter = 6;
    console.log(actionCounter)
    setMainSpace(actionCounter);
    createMessage(msg.initialMsg[5], actionCounter);
    createContinueBtn(actionCounter);
    createInput(4, 'locations');
    button2.addEventListener('click', ()=>seventhAction())
};

function seventhAction() {

    button2.removeEventListener('click', ()=>seventhAction())
    button2.remove()
    actionCounter = 7;
    console.log(actionCounter)
    setMainSpace(actionCounter);
    createMessage(msg.initialMsg[6], actionCounter);
    createContinueBtn(actionCounter);
    createInput(8, 'valar');
    captureSelection(2);
    //button2.addEventListener('click', ()=>seventhAction())
};



