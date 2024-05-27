// let userIsLoggedIn = true;
// let temperature = 51;

// if (temperature === 41) {
//   console.log("Temp is less than 50");
// } else {
//   console.log("Temp is greater than 50");
// }

// const score = 200;
// if (score > 100) {
//   const power = "fly";
//   console.log(`Power: ${power}`);
// }

//console.log(power);

// const balance = 1000;
// if (balance > 500) console.log("test");

let userLoggedIn = true;
let debitCard = true;
let userLoggedInFromGoogle = false;
let userLoggedInFromEmail = true;

// if (userLoggedIn && debitCard) {
//   console.log("Let user buy the course");
// }

// if (userLoggedInFromEmail || userLoggedInFromGoogle) {
//   console.log("User logged in");
// }

// ************** Switch in JS *************

// const month = 3;

// switch (month) {
//   case 1:
//     console.log("Jan");
//     break;
//   case 2:
//     console.log("Feb");
//     break;
//   case 3:
//     console.log("Mar");
//     break;
//   case 4:
//     console.log("Apr");
//     break;

//   default:
//     console.log("Default switch case");
//     break;
// }

//*********** Falsy Values **************//
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//********** Truthy Values ************//
// "0", "false"," ", [], {}, function(){}

//checking empty array
// const arr = [];
// if (arr.length === 0) {
//   console.log("Array is empty");
// }

// const obj = {};
// if (Object.keys(obj).length === 0) {
//   console.log("Object is empty");
// }

// Nullish Coalescing Operator (??)
let val1;
//val1 = 5 ?? 10;
//val1 = null ?? 10;
val1 = undefined ?? 20;

console.log(val1);
