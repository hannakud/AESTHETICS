var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},e={},s=a.parcelRequired7c6;null==s&&((s=function(a){if(a in t)return t[a].exports;if(a in e){var s=e[a];delete e[a];var i={id:a,exports:{}};return t[a]=i,s.call(i.exports,i,i.exports),i.exports}var n=new Error("Cannot find module '"+a+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(a,t){e[a]=t},a.parcelRequired7c6=s);var i=s("7Y9D8"),n=s("lHsho"),o=s("caKEF"),l=s("aQSgf");const c={catalogList:document.querySelector("#catalog-list"),showMoreBtn:document.querySelector("#products-show-more")};!function(){const a=(0,o.getProducts)().map((a=>`<li class="catalog__list-item"> \n    <img class="catalog__img js-view-details" data-id="${a.id}" src="${a.img}" alt="${a.name}">\n    <a class="catalog__link-fav" href="#"></a>\n    <a class="catalog__name-link js-view-details" data-id="${a.id}" href="#">${a.name}</a>\n    <span class="catalog__span">${a.price.amount} ${a.price.currency}</span>\n    <div class="catalog__link-container">\n      <a class="catalog__link-more js-view-details" data-id="${a.id}" href="#">Детальніше</a>\n      <a class="catalog__btn button-small js-add-to-cart" data-id="${a.id}" href="#">В кошик</a>\n    </div>\n  </li>`)).join("");c.catalogList.insertAdjacentHTML("beforeend",a)}(),c.catalogList.addEventListener("click",(a=>{if(a.target.classList.contains("js-add-to-cart"))a.preventDefault(),(0,n.addToCart)(a.target.dataset.id),i.Notify.success("Товар додано в кошик");else if(a.target.classList.contains("js-view-details")){a.preventDefault();const t=Number(a.target.dataset.id);(0,l.showProductModal)(t)}}),!0);
//# sourceMappingURL=catalog.f5cde8ae.js.map