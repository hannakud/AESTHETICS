import { CART_UPDATED_EVENT } from './session-storage-service';
import { getCartCount } from './cart-service';

function renderCartCount() {
  const cartCount = getCartCount();
  const cartCountElement = document.querySelector('#cart-count');
  cartCountElement.textContent = cartCount ? cartCount : '';
}

renderCartCount();


document.addEventListener(CART_UPDATED_EVENT, renderCartCount);
