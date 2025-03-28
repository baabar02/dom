// const fs = require("fs");

// const lebron = {
//   about: "LeBron Raymone James Sr. ",
//   age: 39,
//   height: 206,
// };

// const bidniiDatabaseDeerBaigaaYmiigAvchrag = async () => {
//   const bidniiDataJSON = await fs.readFileSync(
//     "./bidniiDatabase.json",
//     "utf-8"
//   );
//   const bidniiDataObjectBolonHuvirsan = JSON.parse(bidniiDataJSON);
//   return bidniiDataObjectBolonHuvirsan;
// };

// const lebron1 = {
//   about: "LeBron Raymone James Sr. ",
//   age: 39,
//   height: 206,
// };

// // const playerOneLogin = { username: "Player1", password: "asd123" };

// const bidniiDatabaseDeerYmNemeh = async () => {
//   const bidendBaigaaPlayers = await bidniiDatabaseDeerBaigaaYmiigAvchrag();

//   //   const findPlayerOne = bidendBaigaaPlayers.find(
//   //     (el) => el.username === playerOneLogin.username
//   //   );

//   //   if (findPlayerOne != undefined) {
//   //     if (findPlayerOne.password === playerOneLogin.password) {
//   bidendBaigaaPlayers.push(lebron);
//   const JSONBidendBaigaaPlayers = JSON.stringify(bidendBaigaaPlayers);

//   await fs.writeFileSync(
//     "./bidniiDatabase.json",
//     JSONBidendBaigaaPlayers,
//     "utf-8"
//   );
//   //     } else {
//   //       console.log("Wrong password passwordoo sana");
//   //     }
//   //   } else {
//   //     console.log("Erh alga not authorized");
//   //   }
// };

// bidniiDatabaseDeerYmNemeh();

const fs = require("fs");

const lebron = {
  about: "Baabar. ",
  age: 25,
  height: 226,
};

const dataAvchirdgFunction = async () => {
  const json1 = await fs.readFileSync("./bidniiDatabase.json", "utf-8");
  const datoOb = JSON.parse(json1);
  return datoOb; //function ii return ddudsan gazriin urd huvisagch irdeg
};

const dataNemdegFunction = async (toglogch) => {
  const data = await dataAvchirdgFunction();
  data.push(toglogch);
  const JSONbolsondata = JSON.stringify(data);
  await fs.writeFileSync("./bidniiDatabase.json", JSONbolsondata, "utf-8");
};

dataNemdegFunction(lebron);

// const nameee = () => {
//   return "hello";
// };

// const data = nameee()
//     //  ^
//     // hello
