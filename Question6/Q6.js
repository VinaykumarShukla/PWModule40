let prompt = require('prompt-sync')();

function countVowels(name) {
    let vowelCount = 0;
    for (let i = 0; i < name.length; i++) {
      const char = name[i].toLowerCase();
      if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        vowelCount++;
      }
    }
    return vowelCount;
  }
  
  // Test the function
  const userName = prompt("Enter your name: ");
  console.log(`The number of vowels in your name is: ${countVowels(userName)}`);