import { Notify } from 'notiflix';
import { addToCart } from './cart-service';
import { getProducts } from './producs-service';
import { showProductModal } from './product';

const refs = {
  catalogList: document.querySelector('#catalog-list'),
  showMoreBtn: document.querySelector('#products-show-more'),
};

function renderProducts() {
  const products = getProducts();
  const markup = products
    .map(product => {
      return `<li class="catalog__list-item"> 
    <img class="catalog__img js-view-details" data-id="${product.id}" src="${product.img}" alt="${product.name}">
    <a class="catalog__link-fav" href="#"></a>
    <a class="catalog__name-link js-view-details" data-id="${product.id}" href="#">${product.name}</a>
    <span class="catalog__span">${product.price.amount} ${product.price.currency}</span>
    <div class="catalog__link-container">
      <a class="catalog__link-more js-view-details" data-id="${product.id}" href="#">Детальніше</a>
      <a class="catalog__btn button-small js-add-to-cart" data-id="${product.id}" href="#">В кошик</a>
    </div>
  </li>`;
    })
    .join('');
  refs.catalogList.insertAdjacentHTML('beforeend', markup);
}

renderProducts();

refs.catalogList.addEventListener(
  'click',
  event => {
    if (event.target.classList.contains('js-add-to-cart')) {
      event.preventDefault();
      addToCart(event.target.dataset.id);
      Notify.success('Товар додано в кошик');
    } else if (event.target.classList.contains('js-view-details')) {
      event.preventDefault();
      const productId = Number(event.target.dataset.id);
      showProductModal(productId);
    }
  },
  true
);
