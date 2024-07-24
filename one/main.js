'use strict';

// TODO jsで要素を作成するようにする

let number = 0;
let minus = document.getElementById('minus');
let plus = document.getElementById('plus');
let reset = document.getElementById('reset');

function displayNum() {
  document.getElementById('number').innerText = number;
}

minus.addEventListener('click', () => {
  if (number > 0) {
    number--;
    displayNum();
  }
});

plus.addEventListener('click', () => {
  if (number < 999) {
    number++;
    displayNum();
  }
});

reset.addEventListener('click', () => {
  number = 0
  displayNum();
});
