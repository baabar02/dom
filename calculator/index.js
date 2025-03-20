

// const test = [2, 3, 6, 9, 7];

// let numbers = [10, 20, 30, 40, 50];

// numbers.push(60);
// console.log(numbers);

// numbers.unshift(5);
// console.log(numbers);

// // let numbers[1] = 100;

// numbers.splice(1, 2, 100);
// console.log(numbers);

// numbers.pop(numbers);
// console.log(numbers);

// numbers.splice(100);
// console.log(numbers);

// let reverse = [];

// for (let i = numbers.length - 1; i > 0; i--) {
//   reverse.push(numbers[i]);
// }
// console.log(reverse);

// reverse = [...numbers].reverse();
// console.log(reverse);

// let numbers1 = [3, 6, 9, 12, 15];

// let newNumbers = numbers1.map((index) => index + 2);
// console.log(newNumbers);

// numbers1 = numbers1.map(function (index) {
//   return index + 2;
// });
// console.log(numbers1);

// let filtered = [];

// filtered = numbers1.filter((index) => index > 8);
// console.log(filtered);

// filtered = numbers1.filter(function (index) {
//   if (index > 8) {
//     return true;
//   }
// });

// console.log(filtered);

// let numbers2 = [18, 21, 24];

// let merged = numbers1.concat(numbers2);
// console.log(merged);

// console.log(numbers2, "1");

// console.log(numbers2.join());
// console.log(numbers2.join(" "));
// console.log(numbers2.join("-"));

// console.log(numbers2.toString());
// console.log(numbers2.join(""));

// let numbers3 = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// let newArr = numbers3.flat();

// console.log(newArr);

// let colors = ["red", "blue", "green", "yellow", "purple"];

// let result1 = colors[2];
// let color = colors.find((color, index) => {
//   return index === 2;
// });
// console.log(result1);
// console.log(color);

// let green = colors.find((color) => color === "green");
// console.log(green);

// let length = colors.find((color) => color.length > 5);
// console.log(length);

// let yellow = colors.find((value, index) => {
//   return value.startsWith("y");
// });

// console.log(yellow);

// let animals = ["elephant", "cat", "bear", "dog", "cow"];

// var animal = animals.find((value, index, array) => {
//   return value.startsWith("c");
// });

// console.log(animal); // cat

// let words = ["hello", "world", "javascript", "coding"];

// let match = words.find((word) => {
//   return word === "world";
// });
// console.log(match);

// let match1 = words.find((word, index, array) => {
//   return array.length === 4;
// });
// console.log(match1);

// let letterSeven = words.find((words) => words === 7);

// console.log(letterSeven);

// let letter = words.find((el) => {
//   return el === 7;
// });

// console.log(letter);

// console.log(words.join(", "));

// let numbers4 = [4, 8, 12, 16];

// let suma = numbers4.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0); // to ask 0?

// console.log(suma); 

// const tripled = numbers4.map(num => num * 3);
// console.log(numbers4);


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



const studentMatches = students.map((student) => {
  const filteredEligibleSchools = schools.filter(
    (school) => school.minAge >= student.age
  );
  
  
  const schoolNames = filteredEligibleSchools.map((s) => s.name);
  const joinedSchoolNames = schoolNames.join(",");

  return {
    ...student,
    filteredEligibleSchools: joinedSchoolNames,
  };
});

console.log(studentMatches);

const studentsA = [
    { name: "Alice", age: 15 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 13 }
  ];
  
  const schoolsA = [
    { name: "High School A", minAge: 16 },
    { name: "High School B", minAge: 14 },
    { name: "Middle School", minAge: 12 }
  ];

const answer = studentsA.map(a => {
const surguuli = schoolsA
.filter (a =>  schoolsA.minAge >= studentsA.age)
.map(a => a.name)
.join(", ");

return {...a, schoolsA};

});

console.log(answer);


let value = 0;
const array = ["x++", "++x", "--x", "x--"];

array.forEach((x) => {
  if (x === "x++") {
    value += 1;  
  } else if (x === "++x") {
    value += 1;  
  } else if (x === "--x") {
    value -= 1;  
  } else if (x === "x--") {
    value -= 1;  
  }
});

console.log(value);  // 0

const m = 100;
const n = 5;

const numbers = Array.from({ length: m + 1 }, (_, i) => i);
console.log(numbers);  

const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);  

const myFunction = (n, m) => {
    
    const numbers = Array.from({ length: m + 1 }, (_, i) => i);
    const number2 = numbers.filter(num => num % n === 0);
    return number2
};  

const divisibleBy3 = myFunction(n, m);
console.log(divisibleBy3); 

const myFunction1 = (n, m) => {
    const numbers = Array.from({ length: m + 1 }, (_, i) => i);
    const divisibleByN = numbers.filter(num => num % n === 0);
    const notDivisible = numbers.filter(num => num % n !== 0);
    return notDivisible;  
};

console.log(myFunction1(n, m));

const myFunction2 = (n, m) => {
    const numbers = Array.from({ length: m + 1 }, (_, i) => i);
    const number2 = numbers.filter(num => num % n === 0);
    const totalSum = numbers.reduce((acc, curr) => acc + curr, 0);
    const divisibleSum = number2.reduce((acc, curr) => acc + curr, 0);
    return totalSum - divisibleSum;  // Sum of all minus sum of divisible
};

console.log(myFunction2(n, m));  // 3350



const numA = [];
for (let i = 0; i <= m; i++) {
    numA.push(i) ;
}
console.log(numA);  

const m1 = Array.from({length: m + 1}, (_ , i) => i); 
const doubled = m1.map(num => num * 2);
   
console.log(doubled);


  // return numb1 - numb2

const num1 = [1, 2, 3];
let num2 = [];
num2 = num1 + num1;
console.log([...num2,...num2]);


