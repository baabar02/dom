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

const a = [1, 2, 3];

// b = a.map((el) => {
//   return el * 2;
// });
// console.log(b);

// c = a.map((el, index) => {
//   if (index === 2) {
//     return el + index;
//   } else {
//     return el;
//   }
// });
// console.log(c);

d = [
  { y: 2012, c: "london" },
  { y: 2000, c: "aphena" },
];

b = d.find((el) => el.y);

console.log(b);
