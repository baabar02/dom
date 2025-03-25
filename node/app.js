// // const { error } = require("console");
// // const fs = require("fs");

const { error } = require("console");
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
    console.log(users);

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
    //   return { name: user.name, email: user.email };
    // });
    // console.log(newArr);
    // const usersNum = users.reduce( (acc,user) => {
    //   const city = user.address.city;
    //   acc[city] = (acc[city] || 0) + 1;
    //   return acc;
    // }, {});
    // console.log(usersNum);
    // const usersNum = users.map((user)=>{
    //   return {name: user.name , city: user.address.city}
    // })
    // console.log(usersNum);
    // const company = users.map((user) => {
    //   return user.company.name.toUpperCase();
    // });
    // console.log(company);
    // const webs = users.filter((user)=>
    //   user.website.includes(".org"))
    //     .map((user) => user.website)
    //    console.log(webs);
    // const webs = users.filter((user) => user.website.includes('.org'));
    // console.log(webs);

    // const geoData = users.map((user)=>{
    //   return {geo: user.address.geo};
    // })
    // console.log(geoData);
    // const geoDatalat = users.reduce((acc, user) => {
    //   return acc + parseFloat(user.address.geo.lat);

    // },0) / users.length;
    // console.log('average latitude:', geoDatalat);
    // const inter = users.filter((user) =>
    //    user.company.catchPhrase.includes('interface'));
    // console.log(inter);
      // const newArray = users.reduce((acc, user) => {
      //   const company = user.company.name;
      //   acc[company] = acc[company] || [];
      //   acc[company].push({ username: user.username, name: user.name });
      //   return acc;
      // }, {});
      // console.log(newArray);

    // const groupedByCompany = users.reduce((acc, user) => {
    //   const companyName = user.company.name;
   
    //   if (!acc[companyName]) {
    //     acc[companyName] = [];
    //   } {};
   
    //   acc[companyName].push(user);
      
    // });
    // console.log(groupedByCompany);
  });


 
// usersPromise.then((response)=> {
//   return response.json()
//   .then((users)=>{

//   });

// });

//   "a" == true -> true
//   "" == true -> false
//   0 = true ->  false
//   1 = true -> true
