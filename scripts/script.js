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
  return (secondNum !== 0) ? firstNum / secondNum : "Error, cannot divide by zero";
}

function operate (opr, firstNum, secondNum) {
  switch (opr) {
    case '+':
      return add(firstNum, secondNum);
    case '-':
      return subtract(firstNum, secondNum);
    case '*':
      return multiply(firstNum, secondNum);
    case '/':
      return divide(firstNum, secondNum);
  }
}

const screen = document.querySelector(".screen");
const digitButtons = document.querySelectorAll(".digit");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equal");

let firstNumber = null;
let operator = null;
let secondNumber = null;
let currentInput = "0";

function appendNumber (digit) {
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

function handleOperator (newOperator) {
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