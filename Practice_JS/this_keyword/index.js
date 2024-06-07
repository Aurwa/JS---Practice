//"use strict";

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

/*
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

//student1.printName();

const student2 = {
  name: "Deepika",
};

//student1.printName.call(student2);

//1
const obj = {
  num: 10,
  x: () => {
    console.log(this);
  },
};

obj.x();

//2
const obj2 = {
  a: 20,
  x: function () {
    const y = () => {
      console.log(this);
    };
    y();
  },
};

obj2.x();
*/

// This Exercise

// const book = {
//   name: "Harry Potter",
//   author: "J.K. Rowling",
//   characters: {
//     mainChars: ["Harry", "Ron", "Hermione"],
//     list: function () {
//       for (const char of this.mainChars) {
//         console.log(char);
//       }
//     },
//   },
// };

// // call the list func

// //book.characters.list();
// const newChars = book.characters.list.bind({
//   mainChars: ["Draco", "Severus", "Voldemort"],
// });
// newChars();

// function Person(name, age, favFood) {
//   this.name = name;
//   this.age = age;
//   this.favFood = favFood;
// }

// const avery = Person("Avery", 20, "Dark Chocolate");
// console.log(avery);
// const jackie = new Person("Jackie", 35, "Sourdough Bread");

// console.log(jackie);
// console.log(jackie.__proto__);
// console.log(jackie.__proto__.__proto__);
// console.log(jackie.__proto__.__proto__.__proto__);

// function ThisPerson(name, age, favFood) {
//   this.name = name;
//   this.age = age;
//   this.favFood = favFood;
// }

// function ProtoPerson(name, age, favFood) {
//   return {
//     name,
//     age,
//     favFood,
//   };
// }

// const thisPerson = new ThisPerson("This", 0, "cookies");
// const protoPerson = ProtoPerson("Proto", 1, "?");

// console.log(Object.getOwnPropertyNames(protoPerson));
//console.log(protoPerson);

/*
function Person(name, age, favFood) {
  this.name = name;
  this.age = age;
  this.favFood = favFood;
}

Person.prototype.greet = function () {
  console.log(`${this.name} says Hello!`);
};

function SuperHero(name, age, favFood, overpowered) {
  this.name = name;
  this.age = age;
  this.favFood = favFood;
  this.overpowered = overpowered;
}

SuperHero.prototype.__proto__ = Person.prototype;
//SuperHero.prototype = Person.prototype;

const anya = new Person("Anya", 40, "Sour Keys");
const batman = new SuperHero("Bruce", 33, "Steak");

// console.log(anya);
// console.log(batman);
// console.log("-----------");
// console.log(anya.__proto__.constructor.name);
// console.log(anya.__proto__.__proto__.constructor.name);
// console.log("---------------");

// console.log(batman.__proto__.constructor.name);
// console.log(batman.__proto__.__proto__.constructor.name);
console.log("----------------");
// batman.greet();
// console.log("----------------");
// console.log(Object.getOwnPropertyNames(anya));
// console.log(Object.getOwnPropertyNames(batman));
console.log(Person);
console.log(Person.prototype);
console.log(Person.prototype.__proto__);
console.log("--------------");
console.log(SuperHero);
console.log(SuperHero.prototype);
console.log(SuperHero.prototype.__proto__);
*/

/*
function anotherCaller() {
  console.log(`${this.caller} called, too!`);
}

const call = {
  caller: "mom",
  anotherCaller: anotherCaller,
  says: function () {
    console.log(`Hey, ${this.caller} just called.`);
  },
};
// call.anotherCaller();
let newCall = call.anotherCaller;

newCall();
*/

// const outer = {
//   name: "Outer",
//   inner: {
//     name: "Inner",
//     showThis: function () {
//       console.log(this);
//     },
//   },
// };

// outer.inner.showThis(); // What is logged?

// function multipleBy5(num) {
//   return num * 5;
// }

// multipleBy5.power = 5;
// console.log(multipleBy5(5));
// console.log(multipleBy5.power);

// function createUser(username, score) {
//   this.username = username;
//   this.score = score;
// }

// createUser.prototype.increment = function () {
//   console.log(this.score++);
// };

// createUser.prototype.printMe = function () {
//   console.log(`Price is: ${this.score}`);
// };

// const chai = new createUser("Chai", 25);
// const tea = new createUser("Tea", 250);

// chai.printMe();
// chai.increment();

// let myHeros = ["thor", "spiderman"];

// let heroPower = {
//   thor: "hammer",
//   spiderman: "sling",

//   getSpiderPower: function () {
//     console.log(`Spiderman power is ${this.spiderman}`);
//   },
// };

// heroPower.getSpiderPower();

const User = {
  name: "Chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

// TASupport.__proto__ = TeachingSupport;
Teacher.__proto__ = User;
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "ChaiAurCode   ";
//String.prototype.trueLenght
