export function initApp() {
  const pw1 = document.getElementById("pw1");
  const pw2 = document.getElementById("pw2");
  const matchOk = document.getElementById("match-ok");
  const charOk = document.getElementById("char-ok");
  const lowerCaseOk = document.getElementById("lower-case-ok");
  const upperCaseOk = document.getElementById("upper-case-ok");
  const numberOk = document.getElementById("number-ok");
  const showHideBtn = document.getElementById("show-hide-pwd");

  pw1.addEventListener("input", setIconsForMatch);
  pw2.addEventListener("input", setIconsForMatch);
  showHideBtn.addEventListener("click", toggleVisibilityOfPwd);

  function setIconsForMatch() {
    const isCorrect = checkMatch(pw1.value, pw2.value);
    if (isCorrect) {
      matchOk.innerText = "✅";
      setIconForLength();
      setIconForLowerCaseChar();
      setIconForUpperCaseChar();
      setIconForNumber();
    } else {
      matchOk.innerText = "❌";
      charOk.innerText = "❌";
      lowerCaseOk.innerText = "❌";
      upperCaseOk.innerText = "❌";
      numberOk.innerText = "❌";
    }
  }

  function checkMatch(value1, value2) {
    return value1 === value2;
  }

  function checkForInputType(typeOf1, typeOf2) {
    return typeOf1 === "password" && typeOf2 === "password";
  }

  function checkLength(length1, length2) {
    return length1 >= 10 && length2 >= 10;
  }

  function checkForLowerCaseChar(value1, value2) {
    return /[a-z]/.test(value1) && /[a-z]/.test(value2);
  }

  function checkForUpperCaseChar(value1, value2) {
    return /[A-Z]/.test(value1) && /[A-Z]/.test(value2);
  }

  function checkForNumber(value1, value2) {
    return /[0-9]/.test(value1) && /[0-9]/.test(value2);
  }

  function setIconForLength() {
    const isLongEnough = checkLength(pw1.value.length, pw2.value.length);
    if (isLongEnough) {
      charOk.innerText = "✅";
    }
  }

  function setIconForLowerCaseChar() {
    const conainsLowerCaseChar = checkForLowerCaseChar(pw1.value, pw2.value);
    if (conainsLowerCaseChar) {
      lowerCaseOk.innerText = "✅";
    }
  }

  function setIconForUpperCaseChar() {
    const conainsUpperCaseChar = checkForUpperCaseChar(pw1.value, pw2.value);
    if (conainsUpperCaseChar) {
      upperCaseOk.innerText = "✅";
    }
  }

  function setIconForNumber() {
    const conainsNumber = checkForUpperCaseChar(pw1.value, pw2.value);
    if (conainsNumber) {
      numberOk.innerText = "✅";
    }
  }

  function toggleVisibilityOfPwd() {
    const checkResult = checkForInputType(pw1.type, pw2.type);
    if (checkResult) {
      pw1.type = "text";
      pw2.type = "text";
      showHideBtn.innerText = "Hide Password";
    } else {
      pw1.type = "password";
      pw2.type = "password";
      showHideBtn.innerText = "Show Password";
    }
  }
}
