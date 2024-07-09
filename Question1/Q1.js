let prompt = require('prompt-sync')();

// Get the password and confirmed password from the user
const password = prompt("Enter your password:");
const confirmPassword = prompt("Confirm your password:");

// Check if the passwords match
if (password === confirmPassword) {
  console.log("Password Matched. Password validation Successful.");
} else {
  console.log("Password didn't match. Password validation unsuccessful");
}