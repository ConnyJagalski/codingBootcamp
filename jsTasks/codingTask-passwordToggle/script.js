const button = document.querySelector("button");
const input = document.querySelector("input");

function hideShow(e) {
  if (input.getAttribute("type") === "text") {
    input.setAttribute("type", "password");
    button.innerText = "Show Password";
  } else {
    input.setAttribute("type", "text");
    button.innerText = "Hide Password";
  }
}

button.addEventListener("click", hideShow);