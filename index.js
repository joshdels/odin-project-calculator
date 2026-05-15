let firstNumber = 0;
let secondNumber = 0;
let operator = "";

function operate(firstNumber, secondNumber, operator) {
  // needs reduce???
  console.log("operate");
  switch (operator) {
    case "+":
      result = firstNumber + secondNumber;
      return result;
    case "-":
      result = firstNumber - secondNumber;
      return result;
    case "*":
      result = firstNumber * secondNumber;
      return result;
    case "/":
      result = firstNumber / secondNumber;
      return result;
  }
}

function clearInputs() {
  console.log("clear operations");
  firstNumber = 0;
  secondNumber = 0;
  operator = "";
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const value = e.target.innerText;
    const classList = e.target.id;

    console.log(classList);

    if (value.toLowerCase() === "clear") {
      clearInputs();
    } else if (classList === "operate") {
      operator = value;
    } else if (value.toLowerCase() === "=") {
      console.log(operate(firstNumber, secondNumber, operator));
    } else {
      console.log("hello");
    }

    console.log(value);
    console.log(firstNumber);
    console.log(secondNumber);
    console.log(operator);
  });
});
