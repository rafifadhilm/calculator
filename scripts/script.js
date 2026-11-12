function add (firstNum, secondNum) {
  return firstNum + secondNum;
}

function subtract (firstNum, secondNum) {
  return firstNum - secondNum;
}

function multiply (firstNum, secondNum) {
  return firstNum * secondNum;
}

function divide (firstNum, secondNum) {
  if (secondNum === 0) {
    return "Error, cannot divide by zero";
  }

  let result = firstNum / secondNum;
  return Number(result.toFixed(12))
}

function operate (opr, firstNum, secondNum) {
  let result = 0;
  switch (opr) {
    case '+':
      result = add(firstNum, secondNum);
      break;
    case '-':
      result = subtract(firstNum, secondNum);
      break;
    case '*':
      result = multiply(firstNum, secondNum);
      break;
    case '/':
      result = divide(firstNum, secondNum);
      break;
  }

  if (Math.abs(result - Math.round(result)) < 0.00001) {
    return Math.round(result);
  }

  return Number(Number(result).toFixed(10));
}

const screen = document.querySelector(".screen");
const digitButtons = document.querySelectorAll(".digit");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equal");
const decimalButton = document.querySelector(".decimal");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");

let firstNumber = null;
let operator = null;
let secondNumber = null;
let currentInput = "0";
let shouldResetScreen = false;

function appendNumber (digit) {
  if (shouldResetScreen) {
    currentInput = "0";
    shouldResetScreen = false;
  }

  if (currentInput.length >= 16) {
    return;
  }

  if (currentInput === "0") {
    currentInput = digit;
  } else {
    currentInput += digit;
  }

  screen.textContent = currentInput;

  if (operator === null) {
    firstNumber = Number(currentInput);
    console.log(firstNumber);
  } else {
    secondNumber = Number(currentInput);
  }
}

function appendDecimal () {
  if (currentInput.includes(".") || currentInput.length >= 16) {
    return
  }

  currentInput += ".";
  screen.textContent = currentInput;

  if (operator === null) {
    firstNumber = Number(currentInput);
  } else {
    secondNumber = Number(currentInput);
  }
}

function handleOperator (newOperator) {
  if (shouldResetScreen) {
    shouldResetScreen = false;
  }

  if (operator !== null && 
      firstNumber !== null && 
      secondNumber !== null) {
    firstNumber = operate(operator, firstNumber, secondNumber);
    screen.textContent = firstNumber;
    secondNumber = null;
  } else if (firstNumber === null) {
    firstNumber = Number(currentInput);
  }

  operator = newOperator;
  currentInput = "0";
}

function calculate () {
  if (operator === null || firstNumber === null || secondNumber === null) {
    return;
  }

  let result = operate(operator, firstNumber, secondNumber);

  screen.textContent = result;

  firstNumber = result;
  operator = null;
  secondNumber = null;
  currentInput = result.toString();
  shouldResetScreen = true;
}

function clearCalculator () {
  operator = null;
  firstNumber = null;
  secondNumber = null;
  currentInput = "0";
  screen.textContent = currentInput;
}

function deleteDigit () {
  if (currentInput.length === 1 || currentInput.includes("Error")) {
    currentInput = "0";
  } else {
    currentInput = currentInput.slice(0, -1);
  }

  screen.textContent = currentInput;

  if (operator === null) {
    firstNumber = Number(currentInput);
  } else {
    secondNumber = Number(currentInput);
  }
}

digitButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    appendNumber(button.textContent);
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    handleOperator(button.textContent);
  })
})

equalsButton.addEventListener("click", calculate);
decimalButton.addEventListener("click", appendDecimal);
clearButton.addEventListener("click", clearCalculator);
deleteButton.addEventListener("click", deleteDigit);