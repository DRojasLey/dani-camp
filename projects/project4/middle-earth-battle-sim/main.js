
// main function to complete the interactive tale

const main = () => {
    // Get the user input array
    let input = getUserInput();
    // Generate the armies based in the input, we get two objects:
    // With the two bojects we calculate each army power level it get's us 2 integers
    alert('Conjuring the darkness')
    let badArmy = generateArmy('evil', input[0], input[2], input[1]);
    badArmy = calculateArmyWorth(badArmy);
    alert(`Good, ${badArmy} Strong came to the call!`)
    alert('Summoning the light')
    let gudArmy = generateArmy('good', input[0], input[2], input[1]);
    gudArmy = calculateArmyWorth(gudArmy);
    alert(`They, ${gudArmy} brave have risen! `)
    // Calculate the result of the battle by comparing the integers, we get and array with 2 strings
    let resulto = battleCalculator(gudArmy, badArmy);
    // Get the date in which the battle takes place, we get a date object
    let aDate = battleDuration(+input[1]);
    // Depending of the position on the array we declare winner or loser
    let loser = resulto[1]
    let winner = resulto[0]
    // Call the alert messages to finish the interactive tale
    msg.getResultMsg(aDate, +input[0], badArmy, gudArmy, winner, loser)

};
