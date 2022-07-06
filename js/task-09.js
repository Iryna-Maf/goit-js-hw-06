'use strict';

const btn = document.querySelector('.change-color');
const span = document.querySelector('.color');

btn.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomHexColor();
  span.textContent = getRandomHexColor();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
