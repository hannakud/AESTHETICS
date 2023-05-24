function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.classList.add('showBtn');
  } else {
    scrollToTopBtn.classList.remove('showBtn');
  }
}

window.onscroll = function () {
  scrollFunction();
};

const scrollToTopBtn = document.querySelector('.scrollToTopBtn');

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

scrollToTopBtn?.addEventListener('click', scrollToTop);
