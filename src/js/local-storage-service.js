const PRODUCTS_KEY = 'products';
const CATEGORY_KEY = 'category';

function getProducts() {
  return JSON.parse(localStorage.getItem(PRODUCTS_KEY)) || [];
}

function saveProducts(products) {
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
}

function getCategories() {
  return JSON.parse(localStorage.getItem(CATEGORY_KEY)) || [];
}

function saveCategories(categories) {
  localStorage.setItem(CATEGORY_KEY, JSON.stringify(categories));
}

export {
  getProducts,
  saveProducts,
  getCategories,
  saveCategories
}
