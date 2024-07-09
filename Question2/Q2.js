let prompt = require('prompt-sync')();

// Get the two numbers and operator from the user
const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));
const operator = prompt("Enter the operator (+, -, *, /):");

// Perform the operation using a switch statement
let result;
switch (operator) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    if (num2 === 0) {
      console.log("Error: cannot divide by zero!");
    } else {
      result = num1 / num2;
    }
    break;
  default:
    console.log("Error: invalid operator!");
}

// Log the result to the console
if (result!== undefined) {
  console.log(`Result: ${num1} ${operator} ${num2} = ${result}`);
}