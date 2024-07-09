function printNumbersDivisibleBy3ButNot2(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        continue; // skip numbers that are divisible by 2
      }
      if (arr[i] % 3 === 0) {
        console.log(arr[i]); // print numbers that are divisible by 3
      }
    }
  }
  
  // Example usage:
 const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 18, 20];
 printNumbersDivisibleBy3ButNot2(numbers);


