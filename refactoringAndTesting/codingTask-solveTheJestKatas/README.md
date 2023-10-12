# Unit Testing with Jest

This repository contains different coding katas.

The first part of coding katas focuses on implementation. Each kata already has unit tests included.

The second part of coding katas focusses on implementation and writing your own unit tests.

## Jest

Run the npm script `test:coding` to execute all tests for the katas "coding".

Run the npm script `test:coding-and-unit-tests` to execute all tests for the katas "coding and unit testing".

You can append the `-t` (testNamePattern) parameter to execute only a specific test. For example execute `npm run test:coding -- -t "randomLottoTicket"` to only run the tests of the random lotto ticket kata. The passed value must match name used in the `describe` function.

You can also add the `--watch` parameter to constantly watch and execute jest - this will same you some time tho, i.e. `npm run test:coding -- --watch`

You need to add a leading `--` to pass arguments to jest, i.e. `npm run test:coding -- --watch`.

If you want to pass the `-t` and `--watch` parameters to jest it is sufficient to only pass `--` once, i.e. `npm run test:coding -- --watch -t "randomLottoTicket"`.

## Coding Katas

Solve these coding katas. Each kata has its own code and test file.

- [Lotto](#Lotto)
- [Double Characters](#Double-Characters)
- [Analyze Password](#Analyze-Password)
- [Person Class](#Person-Class)

### Lotto

Implement the `randomLottoTicket()` function that will return an array of 6 random numbers. The numbers should be between 1 and 49 (1 and 49 are included in the range). Duplicate numbers are not allowed. Calling the function twice should not return the same numbers.

[Files for this kata](/coding-only/lotto/)

### Double Characters

Implement the `doubleCharacters(word)` function that will double each character in a given string.

```js
const result1 = doubleCharacters("abc");
// "aabbcc"

const result2 = doubleCharacters("Abc");
// "AAbbcc"

const result3 = doubleCharacters("Hallo Welt");
// "HHaalllloo  WWeelltt"
```

[Files for this kata](/coding-only/double-characters/)

### Analyze Password

Implement the `analyzePassword(password)` function that will take an string as argument. The function should return an object giving hints about the passed password. The hints are stored in an object with the keys length, hasNumbers, hasCharacters.

```js
const result1 = analyzePassword("abc");
// { length: 3, hasNumbers: false, hasCharacters: true }

const result2 = analyzePassword("abc123");
// { length: 6, hasNumbers: true, hasCharacters: true }

const result3 = analyzePassword("1234");
// { length: 4, hasNumbers: true, hasCharacters: false }
```

[Files for this kata](/coding-only/analyze-passwords/)

### Person Class

Implement a `Person` class in `person.js` with the following requirements in mind.

- The `Person` class should have the name and hobbies properties
- The name should be passed in the constructor
- The `Person` class should have an `introduce()` method that return the string `My name is ` + the name of the person
- The hobbies member should be initialized as an empty array
- The `Person` class should have an `addHobby(newHobby)` method
  - The method accepts the new hobby as string
  - The method should add the passed hobby to the hobbies array

Example usage of the Person class

```js
const nico = new Person("Nico");

const result = nico.introduce();
console.log(result); // "My name is Nico"

console.log(nico.hobbies.length); // 0
nico.addHobby("Tennis");
console.log(nico.hobbies.length); // 1
```

[Files for this kata](/coding-only/person/)

## Coding and Unit Testing

Solve these coding katas and also implement unit tests. Each kata has its own code and test file, that are included in a separate HTML file.

Analyze the existing tests of the other katas or read to [docs of chai](https://www.chaijs.com/api/bdd/) to write your own tests.

- [Positive Multiply](#Positive-Multiply)
- [Speed Dating List](#Speed-Dating-List)
- [Attendance Check](#Attendance-Check)

### Positive Multiply

Implement a function `positiveMultiply(a,b)` that takes two numbers, multiplies them and returns the result. But: even if a number is negative, the result should still be positive.

```js
const result = positiveMultiply(2, 3);
// 6

const result = positiveMultiply(-2, 3);
// 6

const result = positiveMultiply(-2, -3);
// 6
```

[Files for this kata](/coding-and-unit-tests/positive-multiply/)

### Speed Dating List

Implement a function `speedDatingList(people)` that accepts a list of names (array) and should return an nested array of dates. Each person on the list should talk to each person in a 1on1.

```js
const result = speedDatingList([]);
// []

const result = speedDatingList(["Peter", "Paul"]);
// [["Peter", "Paul"]]

const result = speedDatingList(["Peter", "Paul", "Mary"]);
// [["Peter", "Paul"], ["Peter", "Mary"], ["Paul", "Mary"]]
```

[Files for this kata](/coding-and-unit-tests/speed-dating-list/)

### Attendance Check

Implement a function `attendanceCheck(meetings)` that accepts an array of past meetings with their attendees and a list of all requiredAttendees for all meetings. The function should return a list of names that did not attend all meetings.

Example 1

```js
const meeting1 = {
  meetingName: "meeting 1",
  attendees: ["Peter", "Paul", "Mary"],
};
const meeting2 = { meetingName: "meeting 2", attendees: ["Paul"] };
const meetings = [meeting1, meeting2];

const requiredAttendees = ["Peter", "Paul"];

const result = attendanceCheck(meetings, requiredAttendees);
// [{ attendee: "Peter", missedMeetings: ["meeting 2"] }];
```

Example 2

```js
const meeting1 = { meetingName: "meeting 1", attendees: ["Mary", "Paul"] };
const meeting2 = { meetingName: "meeting 2", attendees: ["Peter"] };
const meeting3 = { meetingName: "meeting 3", attendees: ["Mary, Paul"] };
const meetings = [meeting1, meeting2, meeting3];

const requiredAttendees = ["Peter", "Paul"];

const result = attendanceCheck(meetings, requiredAttendees);
// [
//  { attendee: "Peter", missedMeetings: ["meeting 1", "meeting 3"] },
//  { attendee: "Paul", missedMeetings: ["meeting 2"]}
// ]
```

[Files for this kata](/coding-and-unit-tests/attendance-check/)
