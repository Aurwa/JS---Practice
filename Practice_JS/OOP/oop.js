// const user = {
//   username: "Aurwa",
//   loginCount: 8,
//   signedIn: true,

//   getUserDetails: function () {
//     console.log(this.username);
//   },
// };

// user.getUserDetails();

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  return this;
}

const userOne = new User("Aurwa", 15, true);
const userTwo = new User("Hitesh", 12, false);
console.log(userTwo);

// node Practice_JS/OOP/oop.js
