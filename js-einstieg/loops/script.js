function oddNumbers(firstNum, secondNum) {
  
  let result = "";
  
  for (let index = firstNum; index <= secondNum; index++) {

    if (result === "") {
      result = result + index;
    } else {
      result = result + ", " + index;
    }
  }
  
  return result;
}
  

console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// result should be: 9,11


function charCount(word, character) {
  let count = 0;
  
  for (index = 0; index < word.length; index++) {

    if (character.length !== 1) {
    return;
    } else if (word[index] === character) {
      count++;
    }
  }

  return count;
}

console.log(charCount("hello", "l"));
// result should be: 2

console.log(charCount("mama", "m"));
// result should be: 2

console.log(charCount("Resümee", "e"));
// result should be: 3