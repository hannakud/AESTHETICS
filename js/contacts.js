// Homework 24.01.2023 - Реалізуємо обробку форми "Зворотній дзвінок" після натискання на кнопку.
const formContact = document.querySelector('#contacts__form-submit');
const mainSection = document.querySelector('#main-section');
//  При відправці форми запобігається поведінка події за замовченням, event.preventDefault(), щоб уникнути оновлення сторінки
formContact.addEventListener('submit', function (event) {
  event.preventDefault();
  mainSection.classList.add('form-submitted');
});
