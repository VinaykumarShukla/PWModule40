function printInvertedTriangle(i) {
    for (let row = i; row >= 1; row--) {
      let asterisks = "";
      for (let col = 1; col <= row; col++) {
        asterisks += "* ";
      }
      console.log(asterisks);
    }
  }
  
  // Example usage:
  printInvertedTriangle(5);