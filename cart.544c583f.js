!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},r={},n=t.parcelRequired7c6;null==n&&((n=function(t){if(t in e)return e[t].exports;if(t in r){var n=r[t];delete r[t];var a={id:t,exports:{}};return e[t]=a,n.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){r[t]=e},t.parcelRequired7c6=n);var a=n("9ekLB"),o=n("d6Yqd"),c=n("dOocB"),i={cartList:document.querySelector("#cart-list"),showMoreBtn:document.querySelector("#products-show-more"),total:document.querySelector("#total")};function s(){var t,e,r=(t=(0,a.getProducts)(),e=(0,o.getCart)(),Object.keys(e).map(Number).reduce((function(r,n){var a=t.find((function(t){return t.id===n})),o=e[n];return r+a.price.amount*o}),0));i.total.textContent=r?"Загальна сумма: ".concat(r," грн"):""}function u(){var t=(0,a.getProducts)(),e=(0,o.getCart)(),r=Object.keys(e).map(Number);if(!r.length)return i.cartList.insertAdjacentHTML("beforeend",'<h3 class="catalog__list-item">Спочатку додайте товари в кошик</h3>'),void s();var n=r.map((function(r){var n=t.find((function(t){return t.id===r})),a=e[r],o=n.name,c=n.price,i=n.img;return'<li class="products-list__item js-cart-item">\n        <img\n          src="'.concat(i,'"\n          alt="').concat(o,'"\n          width="80"\n          class="products-list__img"\n        />\n        <h4 class="products-list__title">').concat(o,'</h4>\n        <div class="products-list__amount form-input">\n          <label for="product"></label>\n          <input name="product" value="').concat(a,'" data-id="').concat(n.id,'" class="form-input__input js-amount-iput" type="number" />\n        </div>\n        <div class="products-list__price">').concat(c.amount," ").concat(c.currency,'</div>\n        <a href="#" class="js-remove-from-cart products-list__remove-button" data-id="').concat(n.id,'"></a>\n      </li>')})).join("");i.cartList.insertAdjacentHTML("beforeend",n),s()}function d(){Object.keys((0,o.getCart)()).length||(i.cartList.innerHTML="",u())}i.cartList.addEventListener("click",(function(t){t.target.classList.contains("js-remove-from-cart")&&((0,c.removeFromCart)(t.target.dataset.id),t.target.closest(".js-cart-item").remove(),s(),d())}),!0),i.cartList.addEventListener("change",(function(t){if(t.target.classList.contains("js-amount-iput")){var e=Number(t.target.dataset.id),r=Number(t.target.value);r?((0,c.setAmount)(e,r),s()):((0,c.removeFromCart)(t.target.dataset.id),t.target.closest(".js-cart-item").remove(),s(),d())}})),u()}();
//# sourceMappingURL=cart.544c583f.js.map