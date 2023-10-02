const body = document.querySelector("body");
const button = document.querySelector("button");
const span = document.querySelector("span");
const main = document.querySelector("main");

let bgSize = 0;
let count = 0;

function load(event) {
  if (bgSize === 100) {
    bgSize = 0;
  }

  bgSize += 1;
  body.style.backgroundImage = `linear-gradient(90deg, #ffd700 ${bgSize}%, white 0%)`;

  count += 1;
  span.innerText = count;
}

function reset(event) {
  count = 0;
  bgSize = 0;
  body.style.backgroundImage = `linear-gradient(90deg, #ffd700 ${bgSize}%, white 0%)`;
  span.innerText = count;
}

main.addEventListener("click", load);
document.addEventListener("keydown", load);
button.addEventListener("click", reset);