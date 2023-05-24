import { getProducts } from './local-storage-service';
import { getCart } from './session-storage-service';
import { setAmount, removeFromCart } from './cart-service';

const refs = {
  cartList: document.querySelector('#cart-list'),
  showMoreBtn: document.querySelector('#products-show-more'),
  total: document.querySelector('#total'),
}

function getTotalPrice() {
  const products = getProducts();
  const cart = getCart();
  const productIds = Object.keys(cart).map(Number)

  return productIds.reduce((acc, id) => {
    const product = products.find(product => product.id === id);
    const count = cart[id];
    return acc + product.price.amount * count;
  }, 0);
}

function renderTotalPrice() {
  const totalPrice = getTotalPrice();
  refs.total.textContent = totalPrice ? `Загальна сумма: ${totalPrice} грн` : '';
}
function renderProducts() {
  const products = getProducts();
  const cart = getCart();
  const productIds = Object.keys(cart).map(Number)
  if (!productIds.length) {
    refs.cartList.insertAdjacentHTML('beforeend', '<h3 class="catalog__list-item">Спочатку додайте товари в кошик</h3>');
    renderTotalPrice();
    return;
  }
  const markup = productIds.map(id => {
    const product = products.find(product => product.id === id);
    const count = cart[id];
    const { name, price, img } = product;
    return `<li class="products-list__item js-cart-item">
        <img
          src="${img}"
          alt="${name}"
          width="80"
          class="products-list__img"
        />
        <h4 class="products-list__title">${name}</h4>
        <div class="products-list__amount form-input">
          <label for="product"></label>
          <input name="product" value="${count}" data-id="${product.id}" class="form-input__input js-amount-iput" type="number" />
        </div>
        <div class="products-list__price">${price.amount} ${price.currency}</div>
        <a href="#" class="js-remove-from-cart products-list__remove-button" data-id="${product.id}"></a>
      </li>`
  }).join('');
  refs.cartList.insertAdjacentHTML('beforeend', markup);
  renderTotalPrice();
}

function renderIfLastProductRemoved() {
  if (!Object.keys(getCart()).length) {
    refs.cartList.innerHTML = '';
    renderProducts();
  }
}

refs.cartList.addEventListener('click', (event) => {
  if (event.target.classList.contains('js-remove-from-cart')) {
    removeFromCart(event.target.dataset.id);
    event.target.closest('.js-cart-item').remove();
    renderTotalPrice();
    renderIfLastProductRemoved();
  }
}, true);

refs.cartList.addEventListener('change', (event) => {
  if (event.target.classList.contains('js-amount-iput')) {
    const productId = Number(event.target.dataset.id);
    const amount = Number(event.target.value);
    if (amount) {
      setAmount(productId, amount);
      renderTotalPrice();
    } else {
      removeFromCart(event.target.dataset.id);
      event.target.closest('.js-cart-item').remove();
      renderTotalPrice();
      renderIfLastProductRemoved();
    }
  }
});

renderProducts();
