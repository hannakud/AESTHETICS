const CART_KEY = 'cart';
const CART_UPDATED_EVENT = 'cart-updated';

const cartUpdatedEvent = new Event(CART_UPDATED_EVENT);

function getCart() {
  return JSON.parse(sessionStorage.getItem(CART_KEY)) || {};
}

function saveCart(cart) {
  sessionStorage.setItem(CART_KEY, JSON.stringify(cart));
  document.dispatchEvent(cartUpdatedEvent);
}

function removeCart() {
  sessionStorage.removeItem(CART_KEY);
  document.dispatchEvent(cartUpdatedEvent);
}

export {
  getCart,
  saveCart,
  removeCart,
  CART_UPDATED_EVENT
}
