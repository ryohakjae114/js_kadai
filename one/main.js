'use strict';

// TODO jsで要素を作成するようにする

// ■ ストレッチ課題
// numberをクラスにして、その中でincrement, decrement, reset, getNumberを定義してみる
// class Counter {
//   let number
//   constructor(){  }
//   increment
//   decrement
//   reset
//   getNumber
// }

let number = 0;

// この３つはconstでいいのでは？
let minus = document.getElementById('minus');
let plus = document.getElementById('plus');
let reset = document.getElementById('reset');

// updateCounterのような関数名が自然かも
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
