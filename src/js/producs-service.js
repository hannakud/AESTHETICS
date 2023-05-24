import {
  getProducts,
  saveProducts,
  getCategories,
  saveCategories
} from './local-storage-service';
import { PRODUCTS, CATEGORIES } from './product-constants';

function initApplicationData() {
  if (getCategories().length && getProducts().length) {
    return;
  }
  saveProducts(PRODUCTS);
  saveCategories(CATEGORIES);
}

export {
  getProducts,
  getCategories,
  initApplicationData
};
