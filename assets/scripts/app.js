const defaultResult = 0;
let currentResult = 0;
let logEntries = [];

//get input from input field
function getUserNumberInput(){
    return parseInt(userInput.value);
}

//otuput calculation and logging 
function WriteOuput(previousResult, operator, enteredNumber){
    const calcDescription = `${previousResult} ${operator} ${enteredNumber}`;
    outputResult(currentResult, calcDescription); //function from vendor.js
}

//writeToLog 
function writeToLog(OprnIdentifier, prevRes, OprnNum, newRes) {
   
    const logEntry = {
        operation: OprnIdentifier,
        prevRes: prevRes,
        number: OprnNum,
        result: newRes
    };

    logEntries.push(logEntry);
    console.log(logEntries);
}


function add(){
    const previousResult = currentResult;
    const enteredNumber = getUserNumberInput();
    currentResult +=  parseInt(enteredNumber);
    WriteOuput(previousResult, '+', enteredNumber);
    logEntries.push(enteredNumber);
    writeToLog('ADD', previousResult, enteredNumber, currentResult);
}


function subtract(){
    const previousResult = currentResult;
    const enteredNumber = getUserNumberInput();
    currentResult -=  parseInt(enteredNumber);
    WriteOuput(previousResult, '-', enteredNumber);
    writeToLog('SUBTRACT', previousResult, enteredNumber, currentResult);
}

function multiply(){
    const previousResult = currentResult;
    const enteredNumber = getUserNumberInput();
    currentResult *=  parseInt(enteredNumber);
    WriteOuput(previousResult, '*', enteredNumber);
    writeToLog('MULTIPLY', previousResult, enteredNumber, currentResult);
}

function divide(){
    const previousResult = currentResult;
    const enteredNumber = getUserNumberInput();
    currentResult /=  parseInt(enteredNumber);
    WriteOuput(previousResult, '/', enteredNumber);
    writeToLog('DIVIDE', previousResult, enteredNumber, currentResult);
}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);