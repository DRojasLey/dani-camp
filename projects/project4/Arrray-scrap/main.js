/*this returns a random word from the array WE SHOULD USE THIS TO GET RANDOM EXAMPLES ON THE LOGS
randomWord = dictionary[Math.floor(Math.random() * dictionary.length)];
return randomWord;
*/

//defining variables

let currentArray1 = [];

//DOM constand definitions:

const arrayLengthReport = document.getElementById('ArrLengthRport');
const arrayWordsList = document.getElementById('arrayWords')
const startBtn = document.getElementById('startBtn');
const listOfActions = document.getElementById('listOfActions');
const prevActionReportBlock = document.createElement('li');
const prevActionText = document.createElement('p');
const nextActionButton = document.createElement('button');

// word list adding function:
// this function should take the Current array slice a portion of the array
// then for each word add a new li element to the words report list

function addWordsToReport(currentData){
  const sliceOfArray = currentData.slice(100, 200);
  sliceOfArray.forEach(element => {
    const newLiToList = document.createElement('li');
    newLiToList.textContent = element;
    arrayWordsList.appendChild(newLiToList)
  });
};

const reportMsgs = {
  startMsg: `Listing the dictionary array, currently it has '${dictionary.length}' elements., \n We can generate random dirty words as in: \n  "${randStrGen(
        dictionary)}". `,
  firstActionMsg: `L`
};

//function to show the array length report
function arrayLengthRep(currentData){
  arrayLengthReport.innerText = currentData.length
};

//function to add the first action report

function reportPrevAction(ActionTextReport = 'No previous report provided'){
    prevActionReportBlock.setAttribute('class', 'action');
    prevActionText.setAttribute('class', 'ActionText');
    nextActionButton.setAttribute('class', 'nextBtn');
    prevActionReportBlock.appendChild(prevActionText);
    prevActionReportBlock.appendChild(nextActionButton);
    prevActionText.innerText = `${ActionTextReport}`
    nextActionButton.innerText= 'Next'
    listOfActions.appendChild(prevActionReportBlock);
};

//This starts the game after the click on start

startBtn.addEventListener('click', startGame)

function startGame(){
  addWordsToReport(dictionary);
  arrayLengthRep(dictionary);
  starterF()
  reportPrevAction(reportMsgs.startMsg, dupRemoval(dictionary))
  nextActionButton.addEventListener('click', )
  addWordsToReport(currentArray1);



};





//define the stats function, this is to be called each time a step has been completed

// const statsCall = (currentData) => {
//     // we'll get the output of the previous step and console log
//     `this is the current length of the array  ` + currentData.length);
//     console.log(
//       '------------------------------------------------------------------------------------------------------------------------------------------------------'
//     ); //spacer
//   };

  // define the console logs function

  const starterF = () => {
    console.log(
      `This is the return of generating a new random dirty word ::: "${randStrGen(
        dictionary
      )}" :::`
    );

    console.log(
      `This is part of the original dictionary ::: ${dictionary.slice(
        45,
        60
      )} :::`
    );
  };

  // define duplicate removal function

  function dupRemoval(array1) {
    let unique = [];
    array1.forEach((element) => {
      if (unique.includes(element) === false) {
        unique.push(element);
      }
    });
    console.log(
      `This is part of the current array without dups ::: ${unique.slice(
        45,
        60
      )} :::`
    );
    return unique;
  }

  // random string generator, should take 2 numbers any random number of letters and a symbol
  function randStrGen(array2 = dictionary){
    let randomWord = array2[Math.floor(Math.random() * array2.length)];
    randomWord = randomWord.split('');
    let randomSymbols = [];
    for (let r = 0; r < 4; r++) {
      randomSymbols.push(
        String.fromCharCode(Math.floor(Math.random() * (63 - 40 + 1)) + 40)
      );
    }
    for (i = 0; i < 2; i++) {
      let randomIndex = Math.random() * randomWord.length;
      randomWord.splice(randomIndex, 0, randomSymbols.pop());
    }
    return randomWord.join('');
  };

  // define the adding dirty elements function

  const dirtyGen = (array3) => {
    const initialLength = array3.length; // we do not want the loop to calculate every cycle the length
    while (array3.length < initialLength * 2) {
      // I know half the elements will be dirty this way
      let randIndx = Math.floor(Math.random() * initialLength); //create the index to pass to splice
      array3.splice(randIndx, 0, randStrGen(dictionary)); // pass the random index, the add not replace, and the random word
    }
    console.log(
      `This is part of the dirtied array ::: ${array3.slice(45, 60)} :::`
    );

    return array3;
  };

  // define the adding identifier number function

  const idGenerator = (array4) => {
    let originalLength = array4.length; // we don't want to be calculating the array length in each cycle
    for (let count = originalLength - 1; count >= 0; count--) {
      // we count in reverse in the loop so the splicing is easier
      array4.splice(count, 0, count); // at the current index, do not delete the element ocupying that place, insert the current value of the iterator
    }
    console.log(
      `This is part of the dirtied array with IDs ::: ${array4.slice(45, 60)} :::`
    );

    return array4;
  };

  // define lower case and number confirmation function

  const dataValidator = (element1) => {
    let isOnlyLetter = (str) => /^[A-Z]+$/i.test(str);
    let isOnlyNumber = (str) => /^\d+$/.test(str);
    if (isOnlyLetter(element1)) {
      return 'word';
    } else if (isOnlyNumber(element1)) {
      return 'id';
    }
    return 'dirty';
  };

  // define the cleaning service function

  const cleaningDirty = (array5) => {
    //only worked for me if I put everything within the return
    let result = array5.reduce(
      (resultingArray, currentElement, index, originalArray) => {
        // we take 4 parameters for the callback function, which we need to do the operation
        //this is how we check the previous element
        const previousElement = originalArray[index - 1];
        //use the data validator to confirm it is a valid element
        const currentElementStatus = dataValidator(currentElement);
        // check if the element is a word and it'sprevious element is valid, if so we push it if it is dirty we simply do not include it in the response
        if (
          currentElementStatus !== 'dirty' &&
          (previousElement === undefined ||
            dataValidator(previousElement) !== 'dirty')
        ) {
          resultingArray.push(currentElement);
        }
        return resultingArray; // we return the accumulator
      },
      []
    ); //>>> assign an empty array to the accumlator to initialize it
    console.log(
      `This is part of the clean array with IDs ::: ${result.slice(45, 60)} :::`
    );

    return result;
  };

  // declare identifier removal function

  const noMoreNums = (array8) => {
    let result2 = array8.reduce((resultArr, currElement) => {
      if (dataValidator(currElement) === 'word') {
        resultArr.push(currElement);
      }
      return resultArr;
    }, []);
    console.log(
      `This is part of the array without IDs after Maduro prohibition ::: ${result2.slice(
        45,
        60
      )} :::`
    );
    return result2;
  };

  //Are there three letter words?

  const areThereShort = (array6) => {
    return array6.some((element) => {
      const type = dataValidator(element);
      if (type === 'word' && element.length <= 3) {
        return true; // Short word found
      } else if (type === 'dirty') {
        return 'error mixed content';
      }
      return false; // Continue to next element
    });
  };

  const areThereShortMsg = (booleament) => {
    let msg = '';
    if (booleament === true) {
      msg = `There are still 3 letter words`;
    } else if (booleament === 'error mixed content') {
      msg = `Something has gone wrong, there are still dirty words`;
    } else {
      msg = `Good there are no more 3 letter words`;
    }
    console.log(msg);
    console.log(
      '------------------------------------------------------------------------------------------------------------------------------------------------------'
    ); //spacer
  };

  // define 3 letters removal function

  const threeLettersNot = (array7) => {
    let result3 = array7.reduce((resultingArray, currentElement) => {
      if (currentElement.length > 3) {
        resultingArray.push(currentElement);
      }
      return resultingArray;
    }, []);
    console.log(
      `This is part of the array without 3 letter words ::: ${result3.slice(
        45,
        60
      )} :::`
    );
    return result3;
  };

  // declare the 9 letter word finder function

  const getNineLetterWords = (words) => {
    const longWords = words.filter((word) => word.length > 9);
    let randIndax = Math.floor(Math.random() * longWords.length - 2);
    let result4 = longWords.slice(randIndax, randIndax + 2);
    console.log(
      `This the array with only two 9 letter words ::: ${result4.slice(0)} :::`
    );
    return result4;
  };

  //declare the word to array of characters to ascii function
  
  const toAscci = (twoRem) => {
    let result5 = twoRem.map((word) => {
      const asciiValues = word.split('').map((char) => char.charCodeAt(0));
      return asciiValues.reduce((sum, value) => sum + value, 0);
    });
    console.log(
      `This the power level of the 9 letter words ::: ${result5.slice(0)} :::`
    );
    return result5;
  };
  
  // declare the battle arena
  const battleArena = (powerLevels, onlyNimePassed) => {
    if (powerLevels[0] > powerLevels[1]) {
      return `>>>>>>>>>>>>>>>>>>|  The winner is: "${onlyNimePassed[0]}" with the highest power level: ${powerLevels[0]}   | <<<<<<<<<<<<<<<<<<`;
    }
    return `>>>>>>>>>>>>>>>>>>|   The winner is: "${onlyNimePassed[1]}" with the highest power level: ${powerLevels[1]}   | <<<<<<<<<<<<<<<<<<`;
  };
  
  // Declare ender of worlds
  
  const enderF = (wordPowerLevel, onlyNine) => {
    console.log(
      '------------------------------------------------------------------------------------------------------------------------------------------------------'
    ); //spacer
  
    console.log(battleArena(wordPowerLevel, onlyNine));
  
    console.log(
      '------------------------------------------------------------------------------------------------------------------------------------------------------'
    ); //spacer
  };
  
  //declare the main program to run this show
  
  function main() {
  
    starterF();
  
    statsCall(dictionary);
  
    currentArray1 = dupRemoval(dictionary);
  
    statsCall(currentArray1);
    let dirtyArry = dirtyGen(currentArray1);
  
    statsCall(dirtyArry);
  
    let dirtyIDArr = idGenerator(dirtyArry);
  
    statsCall(dirtyIDArr);
  
    let cleanArr = cleaningDirty(dirtyIDArr);
  
    statsCall(cleanArr);
  
    let noNums = noMoreNums(cleanArr);
  
    statsCall(noNums);
  
    areThereShortMsg(areThereShort(noNums));
  
    let notthree = threeLettersNot(noNums);
  
    statsCall(notthree);
  
    areThereShortMsg(areThereShort(notthree));
  
    let onlyNine = getNineLetterWords(notthree);
  
    statsCall(onlyNine);
  
    let wordPowerLevel = toAscci(onlyNine);
  
    enderF(wordPowerLevel, onlyNine);
  }
  
  