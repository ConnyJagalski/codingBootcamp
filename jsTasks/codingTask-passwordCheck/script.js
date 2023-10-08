const pw1 = document.getElementById("pw1");
const pw2 = document.getElementById("pw2");
const matchOk = document.getElementById("match-ok");
const matchNot = document.getElementById("match-not");
const charOk = document.getElementById("char-ok");
const charNot = document.getElementById("char-not");
const lowerCaseOk = document.getElementById("lower-case-ok");
const lowerCaseNot = document.getElementById("lower-case-not");
const upperCaseOk = document.getElementById("upper-case-ok");
const upperCaseNot = document.getElementById("upper-case-not");
const numberOk = document.getElementById("number-ok");
const numberNot = document.getElementById("number-not");
const showHideBtn = document.getElementById("show-hide-pwd");

pw1.addEventListener("input", checkMatch);
pw2.addEventListener("input", checkMatch);
showHideBtn.addEventListener("click", toggleVisibilityOfPwd);

function toggleVisibilityOfPwd() {
  if (pw1.type === "password" && pw2.type === "password") {
    pw1.type = "text";
    pw2.type = "text";
    showHideBtn.innerText = "Hide Password";
  } else {
    pw1.type = "password";
    pw2.type = "password";
    showHideBtn.innerText = "Show Password";
  }
}

function checkMatch() {
  if (pw1.value === pw2.value) {
    matchOk.removeAttribute("hidden");
    matchNot.setAttribute("hidden", true);
    checkLength();
    checkForLowerCaseChar();
    checkForUpperCaseChar();
    checkForNumber();
  } else {
    matchOk.setAttribute("hidden", true);
    matchNot.removeAttribute("hidden");
    charOk.setAttribute("hidden", true);
    charNot.removeAttribute("hidden");
    lowerCaseOk.setAttribute("hidden", true);
    lowerCaseNot.removeAttribute("hidden");
    upperCaseOk.setAttribute("hidden", true);
    upperCaseNot.removeAttribute("hidden");
    numberOk.setAttribute("hidden", true);
    numberNot.removeAttribute("hidden");
  }
}

function checkLength() {
  if (pw1.value.length >= 10 && pw2.value.length >= 10) {
    charOk.removeAttribute("hidden");
    charNot.setAttribute("hidden", true);
  }
}

function checkForLowerCaseChar() {
  if (/[a-z]/.test(pw1.value) && /[a-z]/.test(pw2.value)) {
    lowerCaseOk.removeAttribute("hidden");
    lowerCaseNot.setAttribute("hidden", true);
  }
}

function checkForUpperCaseChar() {
  if (/[A-Z]/.test(pw1.value) && /[A-Z]/.test(pw2.value)) {
    upperCaseOk.removeAttribute("hidden");
    upperCaseNot.setAttribute("hidden", true);
  }
}

function checkForNumber() {
  if (/[0-9]/.test(pw1.value) && /[0-9]/.test(pw2.value)) {
    numberOk.removeAttribute("hidden");
    numberNot.setAttribute("hidden", true);
  }
}
