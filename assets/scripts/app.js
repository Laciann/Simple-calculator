const defaultResult = 0;
let currentResult = 0;

//get input from input field
function getUserNumberInput(){
    return parseInt(userInput.value);
}

//otuput calculation and logging 
function WriteOuput(previousResult, operator, enteredNumber){
    const calcDescription = `${previousResult} ${operator} ${enteredNumber}`;
    outputResult(currentResult, calcDescription); //function from vendor.js
}

function add(){
    const previousResult = currentResult;
    const enteredNumber = getUserNumberInput();
    currentResult +=  parseInt(enteredNumber);
    WriteOuput(previousResult, '+', enteredNumber);
}


function subtract(){
    const previousResult = currentResult;
    const enteredNumber = getUserNumberInput();
    currentResult -=  parseInt(enteredNumber);
    WriteOuput(previousResult, '-', enteredNumber);
}

function multiply(){
    const previousResult = currentResult;
    const enteredNumber = getUserNumberInput();
    currentResult *=  parseInt(enteredNumber);
    WriteOuput(previousResult, '*', enteredNumber);
}

function divide(){
    const previousResult = currentResult;
    const enteredNumber = getUserNumberInput();
    currentResult /=  parseInt(enteredNumber);
    WriteOuput(previousResult, '/', enteredNumber);
}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);