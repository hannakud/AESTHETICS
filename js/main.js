// Homework 20.01.2023 - У створеному інтернет-магазині необхідно реалізувати функцію генерації одного товару на сторінці.
document.addEventListener('DOMContentLoaded', () => {
  const catalog = document.getElementById('catalog__list');

  // Створюємо  масив товарів з макету
  const goods = [
    {
      img: 'assets/images/photos/catalogue_1.png',
      name: 'Флюїд для обличчя для сухої шкіри',
      price: '630 грн',
    },
    {
      img: 'assets/images/photos/catalogue_2.png',
      name: 'Антиоксидантний крем для обличчя',
      price: '850 грн',
    },
    {
      img: 'assets/images/photos/catalogue_3.png',
      name: 'Гель для вмивання для проблемної шкіри',
      price: '590 грн',
    },
    {
      img: 'assets/images/photos/catalogue_4.png',
      name: 'Зволожуюча сироватка для нормальної шкіри',
      price: '480 грн',
    },
    {
      img: 'assets/images/photos/catalogue_5.png',
      name: 'Зволожуючий крем для сухої шкіри',
      price: '830 грн',
    },
    {
      img: 'assets/images/photos/catalogue_6.png',
      name: 'Тонік для обличчя для нормальної шкіри',
      price: '450 грн',
    },
    {
      img: 'assets/images/photos/catalogue_7.png',
      name: 'Пінка для очищення шкіри обличчя',
      price: '560 грн',
    },
    {
      img: 'assets/images/photos/catalogue_8.png',
      name: 'Набір Денний та нічний крем',
      price: '1230 грн',
    },
    {
      img: 'assets/images/photos/catalogue_11.png',
      name: 'Матуючий денний крем для жиної шкіри',
      price: '680 грн',
    },
    {
      img: 'assets/images/photos/catalogue_10.png',
      name: 'Нічний антивіковий крем для сухої шкіри',
      price: '860 грн',
    },
    {
      img: 'assets/images/photos/catalogue_11.png',
      name: 'Гель для зняття макіяжу',
      price: '730 грн',
    },
    {
      img: 'assets/images/photos/catalogue_13.png',
      name: 'Антивікова сироватка для зони навколо очей',
      price: '900 грн',
    },
    {
      img: 'assets/images/photos/catalogue_14.png',
      name: 'Лосьон для нормальної та комбінованої шкіри',
      price: '1050 грн',
    },
    {
      img: 'assets/images/photos/catalogue_15.png',
      name: 'Скраб для чутливої шкіри',
      price: '890 грн',
    },
    {
      img: 'assets/images/photos/catalogue_15.png',
      name: 'Гель для глубокого очищення шкіри обличчя',
      price: '890 грн',
    },
  ];

  // Створюємо  функцію генерації блоку товару та поетапно додаємо елементи
  function getCatalogItem(info) {
    const img = document.createElement('img');
    img.classList.add('catalog__img');
    img.setAttribute('src', info.img);
    img.setAttribute('alt', info.name);

    const fav = document.createElement('a');
    fav.classList.add('catalog__link-fav');
    fav.setAttribute('href', '#');

    const name = document.createElement('a');
    name.classList.add('catalog__name-link');
    name.setAttribute('href', '#');
    name.innerText = info.name;

    const price = document.createElement('span');
    price.classList.add('catalog__span');
    price.innerText = info.price;

    const more = document.createElement('a');
    more.classList.add('catalog__link-more');
    more.setAttribute('href', '#');
    more.innerText = 'Детальніше';

    const basket = document.createElement('a');
    basket.classList.add('catalog__btn');
    basket.classList.add('button-small');
    basket.setAttribute('href', '#');
    basket.innerText = 'В кошик';

    const linkContainer = document.createElement('div');
    linkContainer.classList.add('catalog__link-container');
    linkContainer.append(more);
    linkContainer.append(basket);

    const item = document.createElement('li');
    item.classList.add('catalog__list-item');

    item.append(img);
    item.append(fav);
    item.append(name);
    item.append(price);
    item.append(linkContainer);

    return item;
  }
  // Створюємо функцію, яка перебирає масив. передає елемент масива та викликає функцію додавання відповідного товару
  function fillCatalog(list) {
    list.forEach(el => {
      catalog.append(getCatalogItem(el));
    });
  }
  // Викликаємо функцію для додавання даних до масиву товарів
  fillCatalog(goods);
});

// Знизу залишилась частина, яку робила на курсі Верстка за допомогою JQuery

// Product tabs start
$(document).ready(function () {
  const tabIngredients = $(`#ingredients-tab`);
  const contentIngredients = $(`#ingredients-content`);
  const tabFeedbacks = $(`#feedbacks-tab`);
  const contentFeedbacks = $(`#feedbacks-content`);

  tabIngredients.click(() => {
    tabIngredients.addClass('description-tabs__item--active');
    tabFeedbacks.removeClass('description-tabs__item--active');
    contentIngredients.addClass('product__extended-info--active');
    contentFeedbacks.removeClass('product__extended-info--active');
  });
  tabFeedbacks.click(() => {
    tabFeedbacks.addClass('description-tabs__item--active');
    tabIngredients.removeClass('description-tabs__item--active');
    contentFeedbacks.addClass('product__extended-info--active');
    contentIngredients.removeClass('product__extended-info--active');
  });
  // Product tabs end

  // Cabinet tabs start
  const tabContacts = $(`#contacts-tab`);
  const contenContacts = $(`#contacts-content`);
  const tabAddressbook = $(`#addressbook-tab`);
  const contentAddressbook = $(`#addressbook-content`);
  const tabWishlist = $(`#wishlist-tab`);
  const contentWishlist = $(`#wishlist-content`);
  const tabHistory = $(`#history-tab`);
  const contentHistory = $(`#history-content`);

  function removeClasses() {
    [tabContacts, tabAddressbook, tabWishlist, tabHistory].forEach(tab => {
      tab.removeClass('cabinet__item--active');
    });
    [contenContacts, contentAddressbook, contentWishlist, contentHistory].forEach(content => {
      content.removeClass('cabinet__tab-content--active');
    });
  }

  tabContacts.click(() => {
    removeClasses();
    tabContacts.addClass('cabinet__item--active');
    contenContacts.addClass('cabinet__tab-content--active');
  });
  tabAddressbook.click(() => {
    removeClasses();
    tabAddressbook.addClass('cabinet__item--active');
    contentAddressbook.addClass('cabinet__tab-content--active');
  });
  tabWishlist.click(() => {
    removeClasses();
    tabWishlist.addClass('cabinet__item--active');
    contentWishlist.addClass('cabinet__tab-content--active');
  });
  tabHistory.click(() => {
    removeClasses();
    tabHistory.addClass('cabinet__item--active');
    contentHistory.addClass('cabinet__tab-content--active');
  });
  // Cabinet tabs end
  // Order tabs end
  const tabPerson = $(`#person-tab`);
  const tabDetails = $(`#details-tab`);
  const personContent = $(`#person-content`);
  const detailsContent = $(`#details-content`);

  tabPerson.click(() => {
    $('#person-tab .number-round').addClass('number-round--active');
    $('#details-tab .number-round').removeClass('number-round--active');
    personContent.addClass('order__step-container--active');
    detailsContent.removeClass('order__step-container--active');
  });
  tabDetails.click(() => {
    $('#details-tab .number-round').addClass('number-round--active');
    $('#person-tab .number-round').removeClass('number-round--active');
    detailsContent.addClass('order__step-container--active');
    personContent.removeClass('order__step-container--active');
  });
  // Order tabs end
  const menuOpenBtn = $('#menu-open');
  const menuCloseBtn = $('#menu-close');
  const mobileMenu = $('#mobile-menu');
  menuOpenBtn.click(() => {
    mobileMenu.removeClass('mobile-menu--hidden');
  });
  menuCloseBtn.click(() => {
    mobileMenu.addClass('mobile-menu--hidden');
  });
});
