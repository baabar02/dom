// const sayHello = (name) => {
//   console.log(`hello ${name}`);
// };

// const x = "hello world";

// module.exports = {
//   sayHello,
//   add,
// };

// const os = require("os");

// console.log(os.uptime());

// const fs = require("fs");
// const { error } = require("console");

// fs.mkdir("./myFolder", () => {
//   if (error) {
//     console.log("file uusgehed aldaa garlaa");
//   } else {
//     console.log("amjilttai");
//   }
// });

// fs.readFile("./text.txt", { encoding: "utf-8" }, (error, data) => {
//   if (error) {
//     console.log("error");
//   } else {
//     console.log(data);
//   }
// });

// const a = [1, 2, 3];

// b = a.map((el) => el * 2);
// console.log(b);

// c = a.map((el, index) => {
//   if (index === 2) {
//     return el + index;
//   } else {
//     return el;
//   }
// });
// console.log(c);

// d = [
//   { y: 2012, c: "london" },
//   { y: 2000, c: "aphena" },
// ];

// b = d.find((el) => el.y);

// console.log(b);

// e = a.map((el) => el + 1);

// console.log(e);

// f = a.map((el) => {
//   if (el % 2 === 0) {
//     return el + 1;
//   } else {
//     return el;
//   }
// });

// console.log(f);

// g = a.map((el, index) => {
//   if (index === 2) {
//     return el + index;
//   } else {
//     return el;
//   }
// });
// console.log(g);

// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map(num => num * 2);
// const words = ['hello', 'world'];
// const upper = words.map(word => word.toUpperCase());
// const users = [{name: 'John', age: 25}, {name: 'Jane', age: 30}];
// const names = users.map(user => user.name);
// const withId = users.map((user, index) => ({
// ...user, id: index + 1
// }));
// const letters = ['a', 'b', 'c'];
// const indexed = letters.map((letter, index) => '${letter} ${index}');
// const prices = [10, 20, 30];
// const formatted = prices.map(price => `$${price.toFixed(2)}`);
// const celcius = [0, 20, 37];
// const fahrenheit = celcius.map(temp => (temp * 9/5) + 32);
// console.log(fahrenheit);

// const numbers = [5, 2, 9, 1, 7];
// let smallest = numbers[0];

// numbers.forEach(num => {
//   if (num < smallest)
//     smallest = num;
// });
// console.log(smallest);
// const prices =[29.99, 15.50, 99.00, 9.99];
// const lowestPrices = Math.min(...prices);
// console.log(lowestPrices);

// const a = ["leet", "code"];
// const b = "e";

// const include = a.filter((el, index) => {
//   return a.includes(index === e);
// });
// console.log(index);

// const words = "leet";
// const char = "e";

// const isIncluded = words.includes(char);
// console.log("isIncluded :", isIncluded);
// const words = ["leet", "code"];
// const char = "e";
// const arr = [];
// words.forEach((el, index) => {
//   if (words.includes(char)) {
//     conts = result.push(index);
//   }
// });
// console.log(result);

// for biched words - ugnuudiig console.log hii
// for (i = 0; i < words.length; i++) {
//   if (char.includes(char)) {
//     result.push(index);
//   }
// }

const accounts = [
  [1, 2, 3],
  [3, 2, 1],
];

// for (let i = 0; i < accounts.length; i++) {
//   // let sum = 0;
//   for (let j = 0; j < accounts[i].length; j++) {
//     sum = sum + accounts[i][j];
//   }
//   console.log(sum);
// }

// const words = ["ad", "bd", "aaab", "baa", "badab"];
// const allowed = "ab";
// const found = [];

// isIncluded = words.includes("ab");
// words.filter(() => {
//   if (words.includes(allowed) === true) {

//     found.push(words);
//   }
//   console.log(found);
// });

const arr2 = [1, 2, 3];
// let sum = 0

// for (let i = 0; i < arr2.length; i++) {
//   sum += arr2[i]
// }

// const sum = arr2.reduce((accounts, el) => {
//   return (acc += el);
// }, 0);
let result = 0;

accounts.forEach((el) => {
  const sum = reducer(el);
  console.log(sum);
  if (result < sum) {
    result = sum;
  }
});

const result = reducer((arr2) => {
  const sum = arr2;
});
