const images = [
  'url(./assets/images/photos/slide1.png)',
  'url(./assets/images/photos/slide3.png)',
  'url(./assets/images/photos/slide2.png)',
];

const slider = document.querySelector('.slider');
const dotsContainer = document.querySelector('.slider__dots');
const dots = [];

let index = 0;
slider.style.backgroundImage = images[index];

function createDots() {
  for (let i = 0; i < images.length; i++) {
    const dot = document.createElement('div');
    dot.classList.add('slider__dot');
    dot.addEventListener('click', () => {
      index = i;
      updateSlide();
      updateDots();
    });
    dotsContainer.appendChild(dot);
    dots.push(dot);
  }
}

function updateSlide() {
  slider.style.backgroundImage = images[index];
}

function updateDots() {
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

function nextSlide() {
  index++;
  if (index === images.length) {
    index = 0;
  }
  updateSlide();
  updateDots();
}

function previousSlide() {
  index--;
  if (index < 0) {
    index = images.length - 1;
  }
  updateSlide();
  updateDots();
}

createDots();
updateDots();

setInterval(nextSlide, 5000);

document.addEventListener('keydown', event => {
  if (event.code === 'ArrowLeft') {
    previousSlide();
  }
  if (event.code === 'ArrowRight') {
    nextSlide();
  }
});
