const test = [2, 3, 6, 9, 7];

let numbers = [10, 20, 30, 40, 50];

numbers.push(60);
console.log(numbers);

numbers.unshift(5);
console.log(numbers);

// let numbers[1] = 100;

numbers.splice(1, 2, 100);
console.log(numbers);

numbers.pop(numbers);
console.log(numbers);

numbers.splice(100);
console.log(numbers);

let reverse = [];

for (let i = numbers.length - 1; i > 0; i--) {
  reverse.push(numbers[i]);
}
console.log(reverse);

reverse = [...numbers].reverse();
console.log(reverse);

let numbers1 = [3, 6, 9, 12, 15];

let newNumbers = numbers1.map((index) => index + 2);
console.log(newNumbers);

numbers1 = numbers1.map(function (index) {
  return index + 2;
});
console.log(numbers1);

let filtered = [];

filtered = numbers1.filter((index) => index > 8);
console.log(filtered);

filtered = numbers1.filter(function (index) {
  if (index > 8) {
    return true;
  }
});

console.log(filtered);

let numbers2 = [18, 21, 24];

let merged = numbers1.concat(numbers2);
console.log(merged);

console.log(numbers2, "1");

console.log(numbers2.join());
console.log(numbers2.join(" "));
console.log(numbers2.join("-"));

console.log(numbers2.toString());
console.log(numbers2.join(""));

let numbers3 = [
  [1, 2],
  [3, 4],
  [5, 6],
];
let newArr = numbers3.flat();

console.log(newArr);

let colors = ["red", "blue", "green", "yellow", "purple"];

let result1 = colors[2];
let color = colors.find((color, index) => {
  return index === 2;
});
console.log(result1);
console.log(color);

let green = colors.find((color) => color === "green");
console.log(green);

let length = colors.find((color) => color.length > 5);
console.log(length);

let yellow = colors.find((value, index) => {
  return value.startsWith("y");
});

console.log(yellow);

let animals = ["elephant", "cat", "bear", "dog", "cow"];

var animal = animals.find((value, index, array) => {
  return value.startsWith("c");
});

console.log(animal); // cat

let words = ["hello", "world", "javascript", "coding"];

let match = words.find((word) => {
  return word === "world";
});
console.log(match);

let match1 = words.find((word, index, array) => {
  return array.length === 4;
});
console.log(match1);

let letterSeven = words.find((words) => words === 7);

console.log(letterSeven);

let letter = words.find((el) => {
  return el === 7;
});

console.log(letter);

console.log(words.join(", "));

let numbers4 = [4, 8, 12, 16];

let sum = numbers4.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); // to ask 0?

console.log(sum);

const students = [
  { id: 1, name: "Alice", age: 14, grade: "8th" },
  { id: 2, name: "Bob", age: 15, grade: "9th" },
  { id: 3, name: "Charlie", age: 14, grade: "8th" },
  { id: 4, name: "David", age: 16, grade: "10th" },
];

const schools = [
  { name: "Greenwood High", city: "New York", minAge: 14 },
  { name: "Riverside Academy", city: "Los Angeles", minAge: 15 },
];

// let studentmatch = students.map(student => ({
//     // name:students.age
//     const eligibleSchools = schools.filter(school => school.minAge >= students.age).map(s => s.name).join(',')

//         return {...student, eligibleSchools: age}

// }));
// console.log(studentmatch);

// const studentMatches = students.map((student) => {
//   const filteredEligibleSchools = schools.filter(
//     (school) => school.minAge >= student.age
//   );
//   const schoolNames = filteredEligibleSchools.map((s) => s.name);
//   const joinedSchoolNames = schoolNames.join(",");

//   return {
//     ...student,
//     eligibleSchools: joinedSchoolNames,
//   };
// });

// console.log(studentMatches);

let value = 0;
const array = ["x++", "++x", "--x", "x--"]; //=>0

let findX = array.map((x) => {
  if (x == "x++") {
    value += 1;
  }
  if (x == "++x") {
    value += 0;
  }
  if (x == "--x") {
    value += 0;
  }
  if (x == "x--") {
    value -= 1;
  }
});

console.log(value);

const m = 100;
const n = 3;

let numb1 = [];
let numb2 = [];

const myfunction = (n, m) => {
  numb1 = m.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });

  // return numb1 - numb2
};
console.log(numb1);

// const num1 = [1, 2, 3];
// let num2 = [];
// num2 = num1 + num1;
// console.log([...num2, ...num2]);
