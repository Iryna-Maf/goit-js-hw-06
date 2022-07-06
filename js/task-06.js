'use strict';

const textInputEl = document.querySelector('input');
const inputLengthEl = document.querySelector('input[data-length ="6"]');

console.log(textInputEl);

const blueredInputValidation = () => {
  if (textInputEl.value.length === Number(inputLengthEl.dataset.length)) {
    textInputEl.classList.add('valid');
    textInputEl.classList.remove('invalid');
  } else {
    textInputEl.classList.add('invalid');
    textInputEl.classList.remove('valid');
  }
};
console.log(inputLengthEl.dataset.length);
textInputEl.addEventListener('blur', blueredInputValidation);
