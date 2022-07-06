'use strict';

const usernameInputEl = document.querySelector('#name-input');
const usernameOutputEl = document.querySelector('#name-output');

usernameInputEl.addEventListener('input', () => {
  if (usernameInputEl.value !== '') {
    return (usernameOutputEl.textContent = usernameInputEl.value);
  }
  return (usernameOutputEl.textContent = 'Anonymous');
});
