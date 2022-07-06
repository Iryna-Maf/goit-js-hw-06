'use strict';

const inputEmailEl = document.querySelector('[name="email"]');
const inputPassEl = document.querySelector('[name="password"]');
const fornEl = document.querySelector('.login-form');

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (inputEmailEl.value === '' || inputPassEl.value === '') {
    return alert('Please fill in all the fields');
  }
  console.log(`Name: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}
