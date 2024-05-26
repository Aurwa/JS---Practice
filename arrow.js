// function one() {
//   const username = "Aurwa";
//   function two() {
//     //console.log(this.username);
//     console.log(username);
//   }
//   two();
// }

// one();

const user = {
  name: "Aurwa",
  price: 555,
  welcomeMesg: function () {
    console.log(`${this.name} welcome to website`);
    console.log(this);
  },
};
// user.welcomeMesg();
// user.name = "Hitesh";
// user.welcomeMesg();

console.log(this);
