
function doubleQuantities(cart) {
  for (let i = 0; i < cart.length; i++) {
    cart[i] = cart[i] * 2;
  }
  return cart;
}

let cart = [1, 2, 3, 4, 5]; // initial cart quantities
cart = doubleQuantities(cart);
console.log(cart); // [2, 4, 6, 8, 10] - doubled quantities