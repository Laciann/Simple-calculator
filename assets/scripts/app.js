const defaultResult = 0;
let currentResult = 0;

function getUserNumberInput(){
    return parseInt(userInput.value);
}

function WriteOuput(previousResult, operator, enteredNumber){
    const calcDescription = `${previousResult} ${operator} ${enteredNumber}`;
    outputResult(currentResult, calcDescription);
}

function add(){
    const previousResult = currentResult;
    const enteredNumber = getUserNumberInput();
    currentResult = currentResult + parseInt(enteredNumber);
    WriteOuput(previousResult, '+', enteredNumber);
}


function subtract(){
    const previousResult = currentResult;
    const enteredNumber = getUserNumberInput();
    currentResult = currentResult - parseInt(enteredNumber);
    WriteOuput(previousResult, '-', enteredNumber);
}

function multiply(){
    const previousResult = currentResult;
    const enteredNumber = getUserNumberInput();
    currentResult = currentResult * parseInt(enteredNumber);
    WriteOuput(previousResult, '*', enteredNumber);
}

function divide(){
    const previousResult = currentResult;
    const enteredNumber = getUserNumberInput();
    currentResult = currentResult / parseInt(enteredNumber);
    WriteOuput(previousResult, '/', enteredNumber);
}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);