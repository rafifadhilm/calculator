let firstNumber = null;
let operator = null;
let secondNum = null;

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
  Number(firstNum);
  Number(secondNum);

  switch (opr) {
    case '+':
      return add(firstNum, secondNum);
      break;
    case '-':
      return subtract(firstNum, secondNum);
      break;
    case '*':
      return multiply(firstNum, secondNum);
      break;
    case '/':
      return divide(firstNum, secondNum);
      break;
  }
}

const screen = document.querySelector(".screen");
const digitButtons = document.querySelectorAll(".digit");

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
    secondNum = Number(currentInput);
  }
}

digitButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    appendNumber(button.textContent);
  });
});