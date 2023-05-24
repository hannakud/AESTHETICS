const formContact = document.querySelector('#contacts__form-submit');
const mainSection = document.querySelector('#main-section');

formContact.addEventListener('submit', function (event) {
  event.preventDefault();
  mainSection.classList.add('form-submitted');
});
