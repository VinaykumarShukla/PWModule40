const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    if (originalPrice <= 0 || discountedPrice <= 0) {
      throw new Error('Prices must be greater than zero');
    }
    if (discountedPrice > originalPrice) {
      throw new Error('Discounted price cannot be greater than original price');
    }
    const discountAmount = originalPrice - discountedPrice;
    const discountPercentage = (discountAmount / originalPrice) * 100;
    return discountPercentage.toFixed(2);
  }
  
  console.log(calculateDiscountPercentage(100, 80)); // Output: 20.00
  console.log(calculateDiscountPercentage(500, 425)); // Output: 15.00