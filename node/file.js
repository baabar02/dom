// const fs = require('fs');

// const dataMain = {
//     name: 'bbb',
//     age: '25'
// }

// const dataBrings = async () => {
//     const dataTojs = await fs.readFileSync('./database.json', 'utf-8');
//     const dataToob = JSON.parse(dataTojs);  
//     return dataToob;
// } 

// const dataAdds = async (dataMain) =>{
//     const dataCall = await dataBrings();
//     dataCall.push(dataMain);
//     const dataJs = JSON.stringify(dataCall);
//     await fs.writeFileSync('./database.json', dataJs, 'utf-8');

// };

// dataAdds(dataMain);



// const fs = require('fs').promises;

// const dataInput = {
//   name: 'jjj',
//   age: 40
// };

// const dataBrings = async () => {
//   try {
//     const dataJ = await fs.readFile('./database.json', 'utf-8');
//     const dataOb = JSON.parse(dataJ);
    
//     if (!Array.isArray(dataOb)) {
//       throw new Error('Database must contain an array');
//     }
    
//     console.log('[READ] Successfully loaded:', JSON.stringify(dataOb, null, 2));
//     return dataOb;
//   } catch (error) {
//     if (error.code === 'ENOENT') {
//       console.log('[READ] No database found, initializing empty array');
//       return [];
//     }
//     throw new Error(`[READ] Error: ${error.message}`);
//   }
// };

// const dataAdd = async (dataInput) => {
//   try {
//     if (!dataInput || typeof dataInput !== 'object') {
//       throw new Error('Invalid input data');
//     }
    
//     const dataCall = await dataBrings();
//     console.log('[ADD] Before:', JSON.stringify(dataCall, null, 2));
    
//     dataCall.push(dataInput);
//     console.log('[ADD] After:', JSON.stringify(dataCall, null, 2));
    
//     const dataJS = JSON.stringify(dataCall, null, 2);
//     await fs.writeFile('./database.json', dataJS, 'utf-8');
    
//     console.log('[ADD] Success: Data written to file');
//     return true;
//   } catch (error) {
//     throw new Error(`[ADD] Error: ${error.message}`);
//   }
// };

// // New data removal function
// const dataRemove = async (nameToRemove) => {
//   try {
//     const dataCall = await dataBrings();
//     console.log('[REMOVE] Before:', JSON.stringify(dataCall, null, 2));
    
//     const initialLength = dataCall.length;
//     const updatedData = dataCall.filter(item => item.name !== nameToRemove);
    
//     if (initialLength === updatedData.length) {
//       console.log('[REMOVE] No matching entry found for:', nameToRemove);
//       return false;
//     }
    
//     console.log('[REMOVE] After:', JSON.stringify(updatedData, null, 2));
//     await fs.writeFile('./database.json', JSON.stringify(updatedData, null, 2), 'utf-8');
    
//     console.log('[REMOVE] Success: Removed entry with name:', nameToRemove);
//     return true;
//   } catch (error) {
//     throw new Error(`[REMOVE] Error: ${error.message}`);
//   }
// };

// const verifyDatabase = async () => {
//   try {
//     const contents = await fs.readFile('./database.json', 'utf-8');
//     console.log('[VERIFY] Current contents:', contents);
//   } catch (error) {
//     console.error('[VERIFY] Error:', error.message);
//   }
// };

// // Test scenario with error case and removal
// (async () => {
//   try {
//     console.log('[TEST] Starting with input:', JSON.stringify(dataInput, null, 2));
    
//     // Add data
//     await dataAdd(dataInput);
    
//     // Test error case: invalid input
//     try {
//       await dataAdd(null);
//     } catch (error) {
//       console.log('[TEST] Expected error caught:', error.message);
//     }
    
//     // Remove data
//     await dataRemove('jjj');
    
//     // Verify final state
//     await verifyDatabase();
    
//     console.log('[TEST] All operations completed');
//   } catch (error) {
//     console.error('[TEST] Failed:', error.message);
//   }
// })();

const fs = require("fs");

const bidniiDatabaseDeerBaigaaYmiigAvchrag = async () => {
  const bidniiDataJSON = await fs.readFileSync(
    "./database.json",
    "utf-8"
  );
  const bidniiDataObjectBolonHuvirsan = JSON.parse(bidniiDataJSON);
  return bidniiDataObjectBolonHuvirsan;
};

const nextPlayer = { username: "player4", password: "hello" };
const playerOneLogin = { username: "Player1", password: "asd123" };

const bidniiDatabaseDeerYmNemeh = async () => {
  const bidendBaigaaPlayers = await bidniiDatabaseDeerBaigaaYmiigAvchrag();

  const findPlayerOne = bidendBaigaaPlayers.find(
    (el) => el.username === playerOneLogin.username
  );

  if (findPlayerOne != undefined) {
    if (findPlayerOne.password === playerOneLogin.password) {
      bidendBaigaaPlayers.push(nextPlayer);
      const JSONBidendBaigaaPlayers = JSON.stringify(bidendBaigaaPlayers);

      await fs.writeFileSync(
        "./database.json",
        JSONBidendBaigaaPlayers,
        "utf-8"
      );
    } else {
      console.log("Wrong password passwordoo sana");
    }
  } else {
    console.log("Erh alga not authorized");
  }
};

bidniiDatabaseDeerYmNemeh();
 
