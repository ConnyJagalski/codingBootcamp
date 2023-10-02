let userName = "Brad";
userName = "Jenna";

function getUserNameLength() {
  return  userName = userName.length
}

console.log(getUserNameLength(userName) > 4)
// ^______________ Should log true


const isString = function (type) {
  return typeof type === "string";
}

console.log(isString("Hello"));
// result should be true

console.log(isString(3));
// result should be false

console.log(isString(undefined));
// result should be false

console.log(isString(""));
// result should be true

console.log(isString("John" + "Doe"));
// result should be true