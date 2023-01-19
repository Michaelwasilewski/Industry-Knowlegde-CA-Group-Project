const sliderContainer = document.getElementById('sliderContainer');
const slider = document.getElementById('slider');
const cards = slider.getElementsByTagName('li');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

let elementsToShow = 3;
const sliderContainerWidth = sliderContainer.clientWidth;

if (document.body.clientWidth < 1000) {
  elementsToShow = 2;
} else if (document.body.clientWidth < 1500) {
  elementsToShow = 2;
}
if (document.body.clientWidth < 400) {
  elementsToShow = 2;
}

const cardWidth = sliderContainerWidth / elementsToShow;

slider.style.width = `${cards.length * cardWidth}px`;
slider.style.transition = 'margin';
slider.style.transitionDuration = '1s';

for (let index = 0; index < cards.length; index += 1) {
  const element = cards[index];
  element.style.width = `${cardWidth}px`;
}

prev.addEventListener('click', () => {
  console.log('prev');
  if (+slider.style.marginLeft.slice(0, -2) !== 0) {
    slider.style.marginLeft = `${+slider.style.marginLeft.slice(
      0,
      -2,
    )}${cardWidth}px`;
  }
});

next.addEventListener('click', () => {
  console.log('next');
  if (
    +slider.style.marginLeft.slice(0, -2) !==
    0 - cardWidth * (cards.length - elementsToShow)
  ) {
    slider.style.marginLeft =
      +slider.style.marginLeft.slice(0, -2) - `${cardWidth}px`;
  }
});
