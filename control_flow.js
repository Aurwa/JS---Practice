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

if (userLoggedIn && debitCard) {
  console.log("Let user buy the course");
}

if (userLoggedInFromEmail || userLoggedInFromGoogle) {
  console.log("User logged in");
}