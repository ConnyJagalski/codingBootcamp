const button = document.querySelector("button");
const body = document.querySelector("body");
const title = document.querySelector("title");

function darkMode(event) {
  body.classList.toggle("dark-background");
  button.classList.toggle("dark-button");

  if (button.classList.contains("dark-button")) {
    title.innerText = "Good Night";
  } else {
    title.innerText = "Good Morning";
  }
}

button.addEventListener("click", darkMode);