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



const accounts = [
  [1, 2, 3],
  [4, 3, 2],
];

for (let i = 0; i < accounts.length; i++) {
  let sum = 0;
  for (let j = 0; j < accounts[i].length; j++) {
    sum = sum + accounts[i][j];
  }
  console.log(sum);
}
// let greatArr = 0; 

// for (let i = 0; i < arr2.length; i++) {
//   let sumA = 0;

//   for(let j = 0; j <arr2[i].length; j++){
//     sumA = sumA + arr2[i][j]

//   } 

//   if( sumA > greatArr) {
//     greatArr = sumA
//   }
//   console.log('sum of subarray' + i + ":" + sumA);
//   console.log('final highest sum' + greatArr);
  
// }

// const arr2 = [[3, 4, 5],[1, 2, 3], [3, 4, 7]];

// const sum = arr2.reduce((acc, subArr)=> {
//   return acc + subArr.reduce((subAcc, num) => subAcc + num, 0);
// },0)

// console.log(sum);

// let sum = 0;
// arr2.forEach(subArr => {
//   subArr.forEach(num => {
//     sum = sum + num;
//   });
// });
// console.log(sum);


// const words = "leet";
// const letter = "e";
// const arr = [];

// const isIncluded = words.includes(letter);
// console.log("isIncluded :", isIncluded);


// words.forEach(el,index => {
//   if (el.includes(letter)) {
//    result.push(index);
//   }
// });
// console.log(result);

// const words = ['leet', 'code']
// const letter = 'e'
// const result = [];

// words.forEach((el, index) => {

//   if (el.includes(letter)) {

//     result.push(index)
//   }
// });
// console.log(result);




// const words2 = ["ad", "bd", "aaab", "baa", "badab"];
// const allowed = "ab";
// const found = [];

// words2.forEach(word => {
//   let isValid = true;
//   for(let char of word) {
//     if(!allowed.includes(char)){
//      isValid = false;
//     break;
//    }
//   }
//   if(isValid) {
//     found.push(word);
//   }
// });
// console.log(found);

const stringNumbers = ['333', '343', '444', '3344', '4334'];
const cc = '34';
const stored = [];

stringNumbers.forEach(string => {
  let isValid = true;
  for (let char of string) {
    if (!cc.includes(char)) {
      isValid = false;
      break;
    }
  }
  if (isValid) {
    stored.push(string);
  }
});

console.log(stored); 

const nums = [8, 1, 2, 2, 3];
let result = []

for( let i = 0; i < nums.length; i++){
  let count = 0;
  console.log(count);
  for(let j = 0; j < nums.length; j++){
    if(nums[j]> nums[i]){
      count++;
    }
  }
result.push(count)
}
console.log(result);

const result1 =nums.map( i => nums.filter(j => j > i).length);

console.log(result1);











// Массив nums өгөгдсөн үед, nums[i] бүрийн хувьд түүнээс жижиг хэдэн тоо байгааг ол.
// Өөрөөр хэлбэл, nums[i]-ээс бага nums[j] байх хүчинтэй j-ийн тоог тоол. (j ≠ i байх ёстой).
// Буцаах утга нь массив байх болно.
// Жишээ 1:
// Оролт:
// nums = [8,1,2,2,3]
// Гаралт:
// [4,0,1,1,3]
// Тайлбар:
// nums[0] = 8 → Үүнээс бага 4 тоо байна: (1, 2, 2, 3).
// nums[1] = 1 → Үүнээс бага тоо байхгүй.
// nums[2] = 2 → Үүнээс бага 1 тоо байна: (1).




