/*-------------------------------- Constants --------------------------------*/
const arrayClicks = [];
/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/
const buttonElements = document.querySelectorAll(".row button");
const displayElements = document.querySelector(".display");
const showResult = document.querySelector(".button equals");

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

//function to handle all the clicks events for operands
const handleClickOperandButtons = () => {
  buttonElements.forEach((button) => {
    button.addEventListener("click", (event) => {
      const number = Number(event.target.textContent);
      if (!isNaN(number)) {
        arrayClicks.push(number);
      } else {
        // Check if the button clicked is an operator
        if (event.target.textContent === "+") {
          operations(addNumbers);
        } else if (event.target.textContent === "-") {
          operations(subtractNumbers);
        } else if (event.target.textContent === "*") {
          operations(multiplyNumbers);
        } else if (event.target.textContent === "/") {
          operations(divideNumbers);
        }
      }
    });
  });
};

handleClickOperandButtons();

const operations = (functionOperation) => {
  let result = arrayClicks[0];
  for (let i = 0; i < arrayNumbers.length; i++) {
    result = functionOperation(result, arrayClicks[i]);
  }
};
