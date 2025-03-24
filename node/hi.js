const { sayHello } = require("./index");

sayHello("Baabar");

// const sayHello = (name) => {
//   console.log(`hello ${name}`);
// };

// module.exports = sayHello;

// module.exports = {
//   sayHello,
// };

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