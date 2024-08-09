let currentArray = [];

//this returns a random word from the array WE SHOULD USE THIS TO GET RANDOM EXAMPLES ON THE LOGS
/*
randomWord = dictionary[Math.floor(Math.random() * dictionary.length)];
return randomWord;
*/




//define the stats function, this is to be called each time a step has been completed

const statsCall = (currentData) =>{
    // we'll get the output of the previous step and console log
};

// define the console logs function

const whatWasDone = (recapLog) =>{

};

// define duplicate removal function

function dupRemoval(array1) {
    let unique = [];
    array1.forEach(element => {
        if (unique.includes(element) === false) {
            unique.push(element);
        };
    });
    return unique;
};

// random string generator, should take 2 numbers any random number of letters and a symbol
const randStrGen = (array2 = dictionary) =>{
    let randomWord = array2[Math.floor(Math.random() * array2.length)];
    randomWord = randomWord.split('');
    let randomSymbols = [];
    for (let r = 0; r < 4; r++) {
        randomSymbols.push(String.fromCharCode(Math.floor(Math.random() * (63 - 40 + 1)) + 40));
    }
    for (i=0 ; i<2 ; i++){
        let randomIndex = (Math.random()* randomWord.length);
        randomWord.splice(randomIndex, 0, randomSymbols.pop());
    };
    return randomWord.join('')
};

// define the adding dirty elements function

const dirtyGen = (array3) =>{
    const initialLength = array3.length; // we do not want the loop to calculate every cycle the length
    while (array3.length < initialLength * 2) { // I know half the elements will be dirty this way
        let randIndx = Math.floor(Math.random()*initialLength); //create the index to pass to splice
        array3.splice(randIndx, 0 , randStrGen(dictionary)); // pass the random index, the add not replace, and the random word
    }
    return array3;

};



// define the adding identifier number function


const idGenerator = (array4) =>{
    let originalLength = array4.length; // we don't want to be calculating the array length in each cycle
    for (let count = originalLength - 1; count >= 0; count--) { // we count in reverse in the loop so the splicing is easier
        array4.splice(count, 0, count); // at the current index, do not delete the element ocupying that place, insert the current value of the iterator
    }
    return array4;
};


// define lower case and number confirmation function

const dataValidator = (element1)=>{
    let isOnlyLetter = str => /^[A-Z]+$/i.test(str);
    let isOnlyNumber = str => /^\d+$/.test(str);
    if (isOnlyLetter(element1)){
        return 'word';
    } else if (isOnlyNumber(element1)){
        return 'id';
    }
    return 'dirty';
};


// define the cleaning service function

const cleaningDirty = (array5)=>{
    //only worked for me if I put everything within the return
    return array5.reduce((resultingArray, currentElement, index, originalArray) => { // we take 4 parameters for the callback function, which we need to do the operation
        //this is how we check the previous element
        const previousElement = originalArray[index - 1];
        //use the data validator to confirm it is a valid element
        const currentElementStatus = dataValidator(currentElement);
        // check if the element is a word and it'sprevious element is valid, if so we push it if it is dirty we simply do not include it in the response
        if (currentElementStatus !== 'dirty' && (previousElement === undefined || dataValidator(previousElement) !== 'dirty')) {
            resultingArray.push(currentElement);
        }
        return resultingArray; // we return the accumulator
    }, []); //>>> assign an empty array to the accumlator to initialize it
};


// declare identifier removal function

const noMoreNums = (array8)=>{
    return array8.reduce((resultArr, currElement,   )=>{
        if (dataValidator(currElement) === 'word'){
            resultArr.push(currElement);
        };
        return resultArr
    }, [])
};


//Are there three letter words?


const areThereShort = (array6) => {
    return array6.some(element => {
        const type = dataValidator(element);
        if (type === 'word' && element.length <= 3) {
            return true; // Short word found
        } else if (type === 'dirty') {
            return 'error mixed content';
        }
        return false; // Continue to next element
    });};

    const areThereShortMsg = (booleament) => {
        if (booleament === true){
            return `There are still 3 letter words`;
        } else if (booleament === 'error mixed content'){
            return `Something has gone wrong, there are still dirty words`;
        }
        return `Good there are no more 3 letter words`;
    };

    // define 3 letters removal function

    const threeLettersNot = (array7) => {
        return array7.reduce((resultingArray, currentElement) => {
            if (currentElement.length > 3) {
                resultingArray.push(currentElement);
            }
            return resultingArray;
        }, []);
    };

    // declare the 9 letter word finder function

    const getNineLetterWords = (words) => {
        const longWords = words.filter(word => word.length > 9);
        return longWords.slice(0, 2);
    };

    //declare the word to array of characters to ascii function

    const toAscci = (twoRem) => {
        return twoRem.map(word => {
            const asciiValues = word.split('').map(char => char.charCodeAt(0));
            return asciiValues.reduce((sum, value) => sum + value, 0);
        });
    }

    //declare the main program to run this show

    function main(){

        console.log(`This is the return of generating a new random dirty word ::: "${randStrGen(dictionary)}" :::`)
        console.log('----------------------------------------------------------------------------------------------------------------------------') //spacer

        currentArray1 = dupRemoval(dictionary);
        console.log(`This is part of the original dictionary ::: ${dictionary.slice(45,60)} :::`);
        console.log(dictionary.length);
        console.log('----------------------------------------------------------------------------------------------------------------------------') //spacer

        console.log(`This is part of the current array without dups ::: ${currentArray1.slice(45,60)} :::`);
        console.log(currentArray1.length);
        console.log('---------------------------------------------------------------------------') //spacer
        let dirtyArry = dirtyGen(currentArray1);
        console.log(`This is part of the dirty array ::: ${dirtyArry.slice(45,60)} :::`);
        console.log(dirtyArry.length);
        console.log('----------------------------------------------------------------------------------------------------------------------------') //spacer

        let dirtyIDArr = idGenerator(dirtyArry);
        console.log(`This is part of the dirty array with IDs ::: ${dirtyIDArr.slice(45,60)} :::`);
        console.log(dirtyIDArr.length);
        console.log('----------------------------------------------------------------------------------------------------------------------------') //spacer

        let cleanArr = cleaningDirty(dirtyIDArr);
        console.log(`This is part of the clean array with IDs ::: ${cleanArr.slice(45,60)} :::`);
        console.log(cleanArr.length);
        console.log('----------------------------------------------------------------------------------------------------------------------------') //spacer

        let noNums = noMoreNums(cleanArr);
        console.log(`This is part of the array without IDs after Maduro prohibition ::: ${noNums.slice(45,60)} :::`);
        console.log(noNums.length)
        console.log('----------------------------------------------------------------------------------------------------------------------------') //spacer

        console.log(areThereShortMsg(areThereShort(noNums)));
        console.log('----------------------------------------------------------------------------------------------------------------------------') //spacer

        let notthree = threeLettersNot(noNums);
        console.log(`This is part of the array without 3 letter words ::: ${notthree.slice(45,60)} :::`);
        console.log(notthree.length)
        console.log('----------------------------------------------------------------------------------------------------------------------------') //spacer

        console.log(areThereShortMsg(areThereShort(notthree)));
        console.log('----------------------------------------------------------------------------------------------------------------------------') //spacer

        let onlyNine = getNineLetterWords(notthree);
        console.log(`This the array with only two 9 letter words ::: ${onlyNine.slice(0)} :::`);
        console.log(onlyNine.length)
        console.log('----------------------------------------------------------------------------------------------------------------------------') //spacer
        let wordPowerLevel = toAscci(onlyNine);
        console.log(`This the power level of the 9 letter words ::: ${wordPowerLevel.slice(0)} :::`);
        console.log('----------------------------------------------------------------------------------------------------------------------------') //spacer
        console.log('----------------------------------------------------------------------------------------------------------------------------') //spacer
        const battleArena = (powerLevels) =>{
            if (powerLevels[0] >powerLevels[1]){
                return `>>>>>>>>>>>>>>>>>>|  The winner is: "${onlyNine[0]}" with the highest power level: ${powerLevels[0]}   | <<<<<<<<<<<<<<<<<<`;
            }
            return `>>>>>>>>>>>>>>>>>>|   The winner is: "${onlyNine[1]}" with the highest power level: ${powerLevels[1]}   | <<<<<<<<<<<<<<<<<<`;
        };
        console.log(battleArena(wordPowerLevel))
        console.log('----------------------------------------------------------------------------------------------------------------------------') //spacer

    };

    main();