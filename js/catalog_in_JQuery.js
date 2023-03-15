const catalog = $('#catalog__list');

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
    img: 'assets/images/photos/catalogue_9.png',
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
    img: 'assets/images/photos/catalogue_12.png',
    name: 'Антивікова сироватка для зони навколо очей',
    price: '900 грн',
  },
  {
    img: 'assets/images/photos/catalogue_13.png',
    name: 'Лосьон для нормальної та комбінованої шкіри',
    price: '1050 грн',
  },
  {
    img: 'assets/images/photos/catalogue_14.png',
    name: 'Скраб для чутливої шкіри',
    price: '890 грн',
  },
  {
    img: 'assets/images/photos/catalogue_15.png',
    name: 'Гель для глубокого очищення шкіри обличчя',
    price: '890 грн',
  },
];

function getCatalogItem(info) {
  catalog.append(`
    <li class="catalog__list-item">
      <img class="catalog__img" src="${info.img}" alt="${info.name}">
      <a class="catalog__link-fav" href="#"></a>
      <a class="catalog__name-link" href="#">${info.name}</a>
      <span class="catalog__span">${info.price}</span>
      <div class="catalog__link-container">
        <a class="catalog__link-more" href="#">Детальніше</a>
        <a class="catalog__btn button-small" href="#">В кошик</a>
      </div>
    </li>
  `);
}

// Створюємо функцію, яка перебирає масив. передає елемент масива та викликає функцію додавання відповідного товару до каталогу
function fillCatalog(list) {
  list.forEach(el => {
    catalog.append(getCatalogItem(el));
  });
}
// Викликаємо функцію для додавання даних до масиву товарів
fillCatalog(goods);

// 2 варіант виконання, більш довгий

// function getCatalogItem(info) {
//   const img = $('<img>').addClass('catalog__img').attr('src', info.img).attr('alt', info.name);
//   const fav = $('<a>').addClass('catalog__link-fav').attr('href', '#');
//   const name = $('<a>').addClass('catalog__name-link').attr('href', '#').text(info.name);
//   const price = $('<span>').addClass('catalog__span').text(info.price);
//   const more = $('<a>').addClass('catalog__link-more').attr('href', '#').text('Детальніше');
//   const basket = $('<a>').addClass('catalog__btn button-small').attr('href', '#').text('В кошик');
//   const linkContainer = $('<div>').addClass('catalog__link-container').append(more).append(basket);

//   const item = $('<li>')
//     .addClass('catalog__list-item')
//     .append(img)
//     .append(fav)
//     .append(name)
//     .append(price)
//     .append(linkContainer);

//   return item;
// }

// function fillCatalog(list) {
//   $.each(list, function (index, el) {
//     catalog.append(getCatalogItem(el));
//   });
// }

// fillCatalog(goods);
