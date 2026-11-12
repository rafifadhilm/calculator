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