
function calculateBill(dishCost, numPeople) {
  const totalBill = dishCost;
  const billPerPerson = totalBill / numPeople;
  return { totalBill, billPerPerson };
}

const result = calculateBill(100, 4);
console.log(result);