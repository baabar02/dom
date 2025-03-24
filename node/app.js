// // const { error } = require("console");
// // const fs = require("fs");

const { resolve } = require("path");

// //async
// const myPromise = new Promise((resolve, reject) => {
//   //   resolve("ok");
//   // reject("ok");
//   const error = false;

//   setTimeout(() => {
//     if (error) {
//       reject("aldaa");
//     } else {
//       resolve(1);
//     }
//     // resolve("ok");
//     reject("aldaa garlaa");
//     // ("aldaa: unknown word.");
//   }, 3000);
// });

// console.log("myPromise:", myPromise);

// // (1) = data;

// myPromise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// console.log(1); //sync
// console.log(2);
// setTimeout(() => {
//   console.log(3);
// }, 2000);
// myPromise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// console.log(5);

// const myPromise = new Promise((resolve) => {
//   resolve("ok");
// });

// myPromise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("duuslaa");
//   });

const usersPromise = fetch("https://jsonplaceholder.typicode.com/users");

usersPromise
  .then((response) => {
    return response.json(); //
  })
  .then((users) => {
    // const userNames = users.map((user) => {
    //   return user.name;
    // });
    // console.log(userNames);
    // const cityNames = users.filter((user) => {
    //   if (user.address.city.includes("view")) {
    //     return user.address.city;
    //   }
    // });
    // console.log(cityNames);
    // const newArr = users.map((user) => {
    //   //   newArr += newArr + users.name + users.email;
    //   return { name: user.name, email: user.email };
    // });
    // console.log(newArr);
    console.log(users);
  });

//   "a" == true -> true
//   "" == true -> false
//   0 = true ->  false
//   1 = true -> true
