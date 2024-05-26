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

//console.log(this);

const chai = () => {
  const username = "Aurwa";
  console.log(this);
};

//chai();

// const addNum = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(addNum(5, 5));

//const addNum = (num1, num2) => num1 + num2;
const addNum = (num1, num2) => ({ username: "Hitesh" });
//console.log(addNum(10, 10));

// *********** IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE) *********
(function chai() {
  console.log("DB Connected");
})();

((name) => {
  console.log(`DB Connected Two ${name}`);
})("Hitesh");
