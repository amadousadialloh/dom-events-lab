/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let result = null;
let firstNumber = null;
let secondNumber = null;
let isSeconNumberClicked = false;
let operatorContent = null;
let numberButtonContent = null;
let displayCleard = false;
/*------------------------ Cached Element References ------------------------*/
const numbersButtonElements = document.querySelectorAll(".number");
const operatorElement = document.querySelectorAll(".operator");
const displayElements = document.querySelector(".display");
const equalButton = document.querySelector(".equals");

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/

//function for adding numbers
const addNumbers = (number1, number2) => {
  return number1 + number2;
};

//function for substracting numbers
const subtractNumbers = (number1, number2) => {
  return number1 - number2;
};

//function for multiplying numbers
const multiplyNumbers = (number1, number2) => {
  return number1 * number2;
};

//function for dividing numbers
const divideNumbers = (number1, number2) => {
  return number1 / number2;
};

//operation
const operation = (firstNumber, operator, secondNumber) => {
  if (operator === "+") {
    return addNumbers(firstNumber, secondNumber);
  }
  if (operator === "-") {
    return subtractNumbers(firstNumber, secondNumber);
  }
  if (operator === "*") {
    return multiplyNumbers(firstNumber, secondNumber);
  }
  if (operator === "/") {
    return divideNumbers(firstNumber, secondNumber);
  }
};
//clear the display after operation
const clearDisplay = () => {
  displayElements.textContent = " ";
  result = null;
  firstNumber = null;
  secondNumber = null;
  isSeconNumberClicked = false;
  operatorContent = null;
  numberButtonContent = null;
};

numbersButtonElements.forEach((numberButton) => {
  numberButton.addEventListener("click", (e) => {
    numberButtonContent = Number(numberButton.textContent);
    if (!isSeconNumberClicked) {
      firstNumber = numberButtonContent;
    } else {
      secondNumber = numberButtonContent;
    }
  });
});

//operator click control
operatorElement.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    operatorContent = operator.textContent;
    if (operatorContent === "+") {
      firstNumber = numberButtonContent;
      isSeconNumberClicked = true;
    } else if (operatorContent === "-") {
      firstNumber = numberButtonContent;
      isSeconNumberClicked = true;
    } else if (operatorContent === "*") {
      firstNumber = numberButtonContent;
      isSeconNumberClicked = true;
    } else if (operatorContent === "/") {
      firstNumber = numberButtonContent;
      isSeconNumberClicked = true;
    } else {
      clearDisplay();
    }
  });
});

equalButton.addEventListener("click", () => {
  result = operation(firstNumber, operatorContent, secondNumber);
  displayElements.textContent = result;
});

clearDisplay();
