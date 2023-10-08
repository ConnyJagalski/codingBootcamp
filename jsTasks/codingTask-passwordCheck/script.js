const pw1 = document.getElementById("pw1");
const pw2 = document.getElementById("pw2");
const matchOk = document.getElementById("match-ok");
const charOk = document.getElementById("char-ok");
const lowerCaseOk = document.getElementById("lower-case-ok");
const upperCaseOk = document.getElementById("upper-case-ok");
const numberOk = document.getElementById("number-ok");
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
    matchOk.innerText = "✅";
    checkLength();
    checkForLowerCaseChar();
    checkForUpperCaseChar();
    checkForNumber();
  } else {
    matchOk.innerText = "❌";
    charOk.innerText = "❌";
    lowerCaseOk.innerText = "❌";
    upperCaseOk.innerText = "❌";
    numberOk.innerText = "❌";
  }
}

function checkLength() {
  if (pw1.value.length >= 10 && pw2.value.length >= 10) {
    charOk.innerText = "✅";
  }
}

function checkForLowerCaseChar() {
  if (/[a-z]/.test(pw1.value) && /[a-z]/.test(pw2.value)) {
    lowerCaseOk.innerText = "✅";
  }
}

function checkForUpperCaseChar() {
  if (/[A-Z]/.test(pw1.value) && /[A-Z]/.test(pw2.value)) {
    upperCaseOk.innerText = "✅";
  }
}

function checkForNumber() {
  if (/[0-9]/.test(pw1.value) && /[0-9]/.test(pw2.value)) {
    numberOk.innerText = "✅";
  }
}
