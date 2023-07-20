const defaultResult = 0;
let currentResult = defaultResult;
let logEnteries = [];

function getUsernumberInput() {
  return parseInt(userInput.value); // use parseInt function to convert a string containing a number into a number
}


function calculateResult(calculationType) {
  const enteredNumber = getUsernumberInput();

  if (
    (calculationType !== "Add" &&
      calculationType !== "Subtract" &&
      calculationType !== "Multiply" &&
      calculationType !== "Divide") ||
    !enteredNumber
  ) {
    return;
  }

  const initialResult = currentResult;
  if (calculationType === "Add") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "Subtract") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calculationType === "Multiply") {
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else if (calculationType === "Divide") {
    currentResult /= enteredNumber;
    mathOperator = "/";
  }
  creatAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}


function creatAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const outputDescription = ` ${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, outputDescription);
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newReslut
) {
  const logEntery = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newReslut,
  };
  logEnteries.push(logEntery);
  console.log(logEnteries);
}

function add() {
  calculateResult("Add");
}

function subtract() {
  calculateResult("Subtract");
}

function multiply() {
  calculateResult("Multiply");
}

function divide() {
  calculateResult("Divide");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
