'use strict';

const allUlEl = document.querySelectorAll('li.item');
console.log(`Number of categories: ${allUlEl.length}`);

// const listWithcategory = document.querySelectorAll('li.item h2');
// console.log(listWithcategory);

allUlEl.forEach(el => {
  const title = el.querySelector('h2');
  const lNumbers = el.querySelectorAll('ul > li');
  console.log(`Category: ${title.textContent}`);
  console.log(`Elements:${lNumbers.length}`);
});
