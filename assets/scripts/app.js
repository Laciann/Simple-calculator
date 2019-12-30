const defaultResult = 0;
let currentResult = 0;
let logEntries = [];

//get input from input field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

//otuput calculation and logging
function WriteOuput(previousResult, operator, enteredNumber) {
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

function CalculateResult(calculationType) {
  const previousResult = currentResult;
  const enteredNumber = getUserNumberInput();
  let mathOperator;


  if(calculationType==='DIVIDE' && !enteredNumber){
      let err = document.getElementById('current-calculation');
      err.textContent = 'Divide by 0 is not allowed';
      return;
  } // if entered number is 0 (fasly) then return out of this function


  switch (calculationType) {

    case "ADD":
      currentResult += parseInt(enteredNumber);
      mathOperator = '+';
      break;

    case "SUBTRACT":
      currentResult -= parseInt(enteredNumber);
      mathOperator = '-';
      break;

    case "MULTIPLY":
      currentResult *= parseInt(enteredNumber);
      mathOperator = '*';
      break;
      
    case "DIVIDE":
      currentResult /= parseInt(enteredNumber);
      mathOperator = '/';
      break;
    default:
      break;
  }

  WriteOuput(previousResult, mathOperator, enteredNumber);
  writeToLog(calculationType, previousResult, enteredNumber, currentResult);
  
}

function add() {
  CalculateResult('ADD');
}

function subtract() {
  CalculateResult('SUBTRACT');
}

function multiply() {
  CalculateResult('MULTIPLY');
}

function divide() {
  CalculateResult('DIVIDE');
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
