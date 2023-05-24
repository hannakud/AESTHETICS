import { getProducts } from './producs-service';
import { setAmount } from './cart-service';
import { Notify } from 'notiflix';

const refs = {
  modal: document.querySelector('#product-modal'),
  modalContainer: document.querySelector('.js-modal-container'),
};
function showProductModal(id) {
  const products = getProducts();
  const product = products.find(product => product.id === id);

  refs.modal.classList.add('is-open');
  renderProduct(product);
}

function hideProductModal() {
  refs.modal.classList.remove('is-open');
  refs.modalContainer.innerHTML = '';
}

function getFirstThreeProducts(id, categoryId) {
  const products = getProducts();
  return products
    .filter(product => {
      return product.categoryId === categoryId && product.id !== id;
    })
    .slice(0, 3);
}

function renderProduct(product) {
  const { id, name, img, price, description, categoryId } = product;
  const relatedProducts = getFirstThreeProducts(id, categoryId);
  const relatedProductsMarkup = relatedProducts.map(product => {
    return `
                <li class="viewed__item">
              <a href="#" class="viewed__link">
                <img
                  class="viewed__img"
                  src="${product.img}"
                  alt="${product.name}"
                  width="234"
                />
                <a href="#" class="viewed__link-fav"></a>
                <div class="viewed__description">
                  <a href="#" class="viewed__name-link">
                    ${product.name}
                  </a>
                  <span class="viewed__span">${product.price.amount} ${product.price.currency}</span>
                </div>
              </a>
              <div class="viewed__link-container">
                <a class="viewed__link-more js-details-view" data-id="${product.id}" href="#">Детальніше</a>
              </div>
            </li>
    `;
  });
  refs.modalContainer.innerHTML = `
  <div class="product-info product__details">
   <img
     src="${img}"
     alt="${name}"
     class="product-info__img"
   />
   <div class="product-info__container">
     <h3 class="product-info__title">${name}</h3>
     <div class="product-info__rate"></div>
     <p class="product-info__text">${description}</p>
     <div class="product-info__price-container">
       <span class="product-info__price-amount">${price.amount} ${price.currency}</span>
       <a href="#" class="product-info__price-fav"></a>
     </div>
     <div class="product-info__order-container">
       <input class="product-info__input" type="number" value="1" min="1" />
       <a href="#" data-id="${id}" class="product-info__cart-btn button js-add-amount-to-cart">В кошик</a>
     </div>
   </div>
  </div>
       <section class='viewed__layout'>
       <h3 class="viewed__title">Схожі продукти:</h3>
       <ul class="viewed__list">${relatedProductsMarkup}</ul>
     </section>
  `;
}

refs.modalContainer.addEventListener(
  'click',
  event => {
    if (event.target.classList.contains('js-add-amount-to-cart')) {
      event.preventDefault();
      const productId = event.target.dataset.id;
      const amount = Number(event.target.previousElementSibling.value);
      console.log(productId, amount);
      setAmount(productId, amount);
      Notify.success(
        amount === 1 ? 'Товар додано в кошик' : 'Товари додано в кошик'
      );
      hideProductModal();
    } else if (event.target.classList.contains('js-view-details')) {
      event.preventDefault();
      const productId = Number(event.target.dataset.id);
      showProductModal(productId);
    }
  },
  true
);

document.addEventListener('keydown', event => {
  if (event.code === 'Escape') {
    hideProductModal();
  }
});

refs.modal.addEventListener('click', event => {
  if (event.target === event.currentTarget) {
    hideProductModal();
  }
});

export { showProductModal, hideProductModal };
