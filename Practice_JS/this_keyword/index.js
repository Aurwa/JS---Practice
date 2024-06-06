"use strict";

/*
const thor = {
  name: "Thor",
  greet: function () {
    console.log(`${this.name} says Hello!!`);
  },
  // arrowGreet: () => {
  //   console.log(this);
  //   console.log(`${this.name} says Hello!!`);
  // },
};
//thor.greet();
// thor.arrowGreet();

const jade = {
  name: "Jade",
  friend: {
    greet: function () {
      console.log(this);
      console.log(`${this.name} says hola`);
    },
  },
};

jade.friend.greet();

// Object.prototype.greet = function () {
//   console.log(`${this.name} says hello!`);
//   console.log(this);
// };

// thor.greet();
// jade.greet();
*/

// call

// const jade = {
//   name: "Jade",
//   friend: {
//     name: "Priya",
//     greet: function (...args) {
//       console.log(args);
//       console.log(`${this.name} says hello`);
//     },
//   },
// };

// jade.friend.greet.call({ name: "Aurwa" });
// jade.friend.greet.call({ name: "Mia" }, 1, 2, 3);

// apply

/*
const jade = {
  name: "Jade",
  friend: {
    name: "Priya",
    greet: function (...args) {
      console.log(args);
      console.log(`${this.name} says hello`);
    },
  },
};

jade.friend.greet.apply({ name: "Aurwa" });
jade.friend.greet.apply({ name: "Mia" }, [1, 2, 3]);
*/

/*
function Hero(name) {
  this.name = name;
  this.greet = function () {
    console.log(this);
    console.log(`${this.name} says awesome!`);
  };
}

const storm = new Hero("Storm");
console.log(storm);

console.log(Object.getOwnPropertyNames(storm));
//console.log(Object.getOwnPropertyNames(storm.__proto__));
// console.log(storm.__proto__.constructor);
console.log(storm.__proto__.constructor.name);
*/

// global scope
//console.log(this);

// inside function
function x() {
  console.log(this);
}

//x();
//window.x();

const student1 = {
  name: "Ranveer",
  printName: function () {
    console.log(this);
    console.log(this.name);
  },
};

student1.printName();

const student2 = {
  name: "Deepika",
};

student1.printName.call(student2);
