// assigning and hidding the instructions
const instructions = document.getElementById('instructions');
instructions.style.display = 'none'

//assigning the buttons section
const buttons = document.getElementById('buttonsCont');

//assigning each button:

const playBtn = document.getElementById('playBtn');
const howToBtn = document.getElementById('howToBtn')
const scoreBtn = document.getElementById('scoreBtn')
const backBtn = document.getElementById('backBtn')

//Function to show the instructions:
const showInstructions = () =>{
    buttons.style.display = 'none';
    instructions.style.display = 'flex';
};
//funtion to hide the instructions

const hideInstructions = () =>{
    instructions.style.display = ('none');
    buttons.style.display = 'flex';
};

//function to move to the game page

const sendingToGame = () =>{
    window.location.href = './game.html';
};


// adding eventlisteners to the buttons:

playBtn.addEventListener('click', sendingToGame)
howToBtn.addEventListener('click', showInstructions)
backBtn.addEventListener('click', hideInstructions)
instructions.addEventListener('click',hideInstructions)