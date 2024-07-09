
let prompt = require('prompt-sync')();

function removeDuplicates(cart) {
  return cart.filter((item, index, self) =>
    self.findIndex((t) => t.name === item.name && t.price === item.price) === index
  );
}

// Example usage:
const cartWithDuplicates = [
  { name: "Apple Watch", price: 299.99 },
  { name: "iPhone 13", price: 799.99 },
  { name: "Apple Watch", price: 299.99 },
  { name: "AirPods", price: 149.99 },
  { name: "iPhone 13", price: 799.99 }
];

const cartWithoutDuplicates = removeDuplicates(cartWithDuplicates);
console.log(cartWithoutDuplicates);