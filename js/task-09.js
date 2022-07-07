'use strict';

const btn = document.querySelector('.change-color');
const span = document.querySelector('.color');

btn.addEventListener('click', () => {
  const colorEl = getRandomHexColor();
  document.body.style.backgroundColor = colorEl;
  span.textContent = colorEl;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
