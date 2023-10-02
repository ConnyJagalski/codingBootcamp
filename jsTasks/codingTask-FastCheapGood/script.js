const fast = document.querySelector("#Fast");
const cheap = document.querySelector("#Cheap");
const good = document.querySelector("#Good");

let lastChecked;

function check(clicked, other1, other2) {

  if (fast.checked && cheap.checked && good.checked) {
    lastChecked.checked = false;
  }

  lastChecked = clicked;
}

fast.addEventListener("click", () => check(fast, cheap, good));
cheap.addEventListener("click", () => check(cheap, good, fast));
good.addEventListener("click", () => check(good, fast, cheap));