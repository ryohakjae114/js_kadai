'use strict';

// 1〜30のランダムな数値が生成される。10~30にしたい
// ※1だったらゲームにならなそう
const hitNumber = (Math.floor(Math.random() * 10) + 1) * ((Math.floor(Math.random() * 10)) % 3 + 1);
let pushedCount = 0
let bombedFlag = false;

const pushButtonElement = document.createElement("button");
pushButtonElement.id = "pushButton"
pushButtonElement.innerText = "0プッシュ!"
pushButtonElement.style.display = "block"
const main = document.getElementById("main");
main.appendChild(pushButtonElement);

// JSの世界ではキャメルケースが一般的なので、`balloon_element`みたいなスネークケースは避けたい
const balloon_element = document.createElement("img");
balloon_element.id = "balloon"
// アセットファイルはimagesディレクトリに画像を入れて、そのパスを指定するようにしたい
balloon_element.src = "balloon.png";
balloon_element.style.width = "300px";
main.appendChild(balloon_element);

const pushButton = document.getElementById("pushButton");
const balloon = document.getElementById("balloon");
pushButton.addEventListener('click', () => {
  if (bombedFlag) {
    // なるほどリロードしてるのか
    // initみたいなメソッドでゲームリスタートするようにしたい
    location.reload();
  } else {
    pushedCount++;
    if (pushedCount === hitNumber) {
      balloon.src = "bombed_balloon.png"
      bombedFlag = true;
      pushButtonElement.innerText = "もう一度"
    } else {
      // 変数化したい。`100px`みたいな文字列から数字だけ取るのは避けたい
      let balloonWidth = Number(balloon.style.width.substring(0, balloon.style.width.indexOf('p')));
      pushButton.innerText = `${pushedCount}プッシュ!`
      balloon.style.width = `${balloonWidth + 10}px`;
    }
  }
});


