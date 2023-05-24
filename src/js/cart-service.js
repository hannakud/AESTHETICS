import { getCart, saveCart, removeCart } from './session-storage-service';

function getCartCount() {
  const cart = getCart();
  return Object.values(cart).reduce((acc, count) => acc + count, 0);
}

function addToCart(id) {
  const cart = getCart();
  cart[id] = cart[id] ? cart[id] + 1 : 1;
  saveCart(cart);
}

function removeFromCart(id) {
  const cart = getCart();
  delete cart[id];
  saveCart(cart);
}

function setAmount(id, amount) {
  const cart = getCart();
  cart[id] = amount;
  saveCart(cart);
}

function clearCart() {
  removeCart();
}

export {
  addToCart,
  setAmount,
  clearCart,
  getCartCount,
  removeFromCart
}
