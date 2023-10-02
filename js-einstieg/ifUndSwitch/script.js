const size = 25;
let result;

if (size > 20) {
  result = "Greater than 20";
} else if (size > 10) {
  result = "Greater than 10";
} else {
  result = "Lower than 10";
}

console.log(result);


function oddEven(zahl) {
  if (isNaN(zahl)) {
    return "Ist keine Zahl"
  } else if (zahl % 2 === 0) {
    return "even"
  } else {
    return "odd"
  }
}

console.log(oddEven(4));
// result should be even

console.log(oddEven(3));
// result should be odd

console.log(oddEven(-1));
// result should be odd

console.log(oddEven(10));
// result should be even


function oldYoung(age) {
  if (isNaN(age) || (age < 0)) {
    return "invalid parameter"
  } else if (age >= 50) {
    return "elder person"
  } else if (age < 50 && age > 16) {
    return "young person"
  } else {
    return "children"
  }
}

console.log(oldYoung(27));
// result should be young person

console.log(oldYoung(6));
// result should be children

console.log(oldYoung(-1));
// result should be invalid parameter

console.log(oldYoung(86));
// result should be elder person