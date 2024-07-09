function calculateRentalCost(daysRented, carType) {
  let dailyRate;
  switch (carType) {
    case 'Economy':
      dailyRate = 4000;
      break;
    case 'Midsize':
      dailyRate = 10000;
      break;
    case 'Luxury':
      dailyRate = 20000;
      break;
    default:
      throw new Error(`Invalid car type: ${carType}`);
  }
  return dailyRate * daysRented;
}
console.log(calculateRentalCost(3, 'Economy')); // 12000 (Rs. 4000/day x 3 days)
console.log(calculateRentalCost(5, 'Midsize')); // 50000 (Rs. 10000/day x 5 days)
console.log(calculateRentalCost(2, 'Luxury')); // 40000 (Rs. 20000/day x 2 days)