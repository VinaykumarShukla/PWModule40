let prompt = require('prompt-sync')();

function capitalizeFirstLetter(name) {
  return name && name[0].toLowerCase() === name[0] ? name.charAt(0).toUpperCase() + name.slice(1) : name;
}

// Test the function
const userInput = prompt("Enter your name: ");
console.log(capitalizeFirstLetter(userInput));