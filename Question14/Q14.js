const calculateTotalCost = (cart) => cart.reduce((acc, item) => acc + (item.unitPrice * item.quantity), 0);         

const cart = [
  { unitPrice: 10, quantity: 2 },
  { unitPrice: 20, quantity: 3 },
  { unitPrice: 5, quantity: 1 }
];

const totalCost = calculateTotalCost(cart);
console.log(totalCost); // Output: 85