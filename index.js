let firstNumber = "";
let secondNumber = "";
let results = null;
let operator = "";
let nextNumber = false;

const buttons = document.querySelectorAll("button");
const calculatorUI = document.querySelector("ui");
const firstNumberUI = document.getElementById("firstNumber");
const secondNumberUI = document.getElementById("secondNumber");
const operatorUI = document.getElementById("operator");
const resultUI = document.getElementById("results");

function operate(firstNumber, secondNumber, operator) {
  firstNumber = Number(firstNumber);
  secondNumber = Number(secondNumber);

  switch (operator) {
    case "+":
      return firstNumber + secondNumber;

    case "-":
      return firstNumber - secondNumber;

    case "*":
      return firstNumber * secondNumber;

    case "/":
      return firstNumber / secondNumber;
  }
}

function clearInputs() {
  firstNumber = "";
  secondNumber = "";
  operator = "";
  nextNumber = false;
  results = null;
  resultUI.innerText = null;
  firstNumberUI.innerText = null;
  secondNumberUI.innerText = null;
  operatorUI.innerText = null;
}

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const value = e.target.innerText;
    const id = e.target.id;

    if (resultUI.innerText) {
      clearInputs();
    }

    if (value.toLowerCase() === "clear") {
      clearInputs();
    } else if (id === "operations") {
      operator = value;
      nextNumber = true;
      operatorUI.innerText = operator;
    } else if (value === "=") {
      results = operate(firstNumber, secondNumber, operator);
      results = results.toFixed(2);
      resultUI.innerText = results;
      firstNumberUI.innerText = null;
      secondNumberUI.innerText = null;
      operatorUI.innerText = null;
    } else {
      if (!nextNumber) {
        firstNumber += value;
        firstNumberUI.innerText = firstNumber;
      } else {
        secondNumber += value;
        secondNumberUI.innerText = secondNumber;
      }
    }
  });
});
