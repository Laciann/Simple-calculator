const defaultResult = 0;
let currentResult = 0;

function getUserNumberInput(){
    return parseInt(userInput.value);
}

function add(){
    const enteredNumber = getUserNumberInput();
    const calcDescription = `${currentResult} + ${enteredNumber}`;
    currentResult = currentResult + parseInt(enteredNumber);
    outputResult(currentResult, calcDescription);
}

addBtn.addEventListener('click', add);