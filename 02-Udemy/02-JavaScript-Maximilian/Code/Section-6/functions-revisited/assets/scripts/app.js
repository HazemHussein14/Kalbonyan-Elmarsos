const defaultResult = 0;
let currentResult = defaultResult;
let logEnteries = [];

function getUsernumberInput() {
  return parseInt(userInput.value); // use parseInt function to convert a string containing a number into a number
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

// function add() {
//   const enteredNumber = getUsernumberInput();
//   const initialResult = currentResult;
//   currentResult += enteredNumber;
//   creatAndWriteOutput("+", initialResult, enteredNumber);
//   writeToLog("ADD", initialResult, enteredNumber, currentResult);
// }

// function subtract() {
//   const enteredNumber = getUsernumberInput();
//   const initialResult = currentResult;
//   currentResult -= enteredNumber;
//   creatAndWriteOutput("-", initialResult, enteredNumber);
//   writeToLog("Subtract", initialResult, enteredNumber, currentResult);
// }

// function multiply() {
//   const enteredNumber = getUsernumberInput();
//   const initialResult = currentResult;
//   currentResult *= enteredNumber;
//   creatAndWriteOutput("*", initialResult, enteredNumber);
//   writeToLog("Multiply", initialResult, enteredNumber, currentResult);
// }

// function divide() {
//   const enteredNumber = getUsernumberInput();
//   const initialResult = currentResult;
//   currentResult /= enteredNumber;
//   creatAndWriteOutput("/", initialResult, enteredNumber);
//   writeToLog("Divide", initialResult, enteredNumber, currentResult);
// }

function calculate(operation) {
  const enteredNumber = getUsernumberInput();
  const initialResult = currentResult;
  let operator;
  if (operation === "ADD") {
    currentResult += enteredNumber;
    operator = "+";
  } else if (operation === "SUBTRACT") {
    currentResult -= enteredNumber;
    operator = "-";
  } else if (operation === "MULTIPLY") {
    currentResult *= enteredNumber;
    operator = "*";
  } else {
    currentResult /= enteredNumber;
    operator = "/";
  }
  creatAndWriteOutput(operator, initialResult, enteredNumber);
  writeToLog(operation, initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener("click", calculate.bind(this,"ADD"));
subtractBtn.addEventListener("click", calculate.bind(this,"SUBTRACT"));
multiplyBtn.addEventListener("click", calculate.bind(this,"MULTIPLY"));
divideBtn.addEventListener("click", calculate.bind(this,"DIVIDE"));
