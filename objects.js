//Singleton
//Object.create

//Object Literals

// const mySym = Symbol("key1");

// const JsUser = {
//   name: "Aurwa",
//   "full name": "Aurwa Zafar",
//   age: 25,
//   location: "Islamabad",
//   email: "zafar@gmail.com",
//   [mySym]: "myKey1",
//   isLoggedIn: false,
//   lastLoginDays: ["Saturday", "Monday"],
// };

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser);
// console.log(JsUser[mySym]);

// JsUser.email = "z@gmail.com";
//console.log(JsUser);
//Object.freeze(JsUser);
// JsUser.age = 29;
//console.log(JsUser);
// JsUser.greeting = function () {
//   return `Hello User ${JsUser.name}`;
// };

// console.log(JsUser.greeting());

const tindUser = {};
tindUser.id = "123abc";
tindUser.name = "Sammy";
tindUser.isLoggedIn = false;
//console.log(tindUser);

const regular_user = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Aurwa",
      lastname: "Zafar",
    },
  },
};

//console.log(regular_user.fullname.userfullname.firstname);
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
// const obj3 = { obj1, obj2 };
//const obj3 = Object.assign({}, obj1, obj2);
const obj3 = { ...obj1, ...obj2 };
//console.log(obj3);

const users = [
  {
    id: 1,
    email: "z@gmail.com",
  },
  {
    id: 2,
    email: "z@gmail.com",
  },
  {
    id: 3,
    email: "z@gmail.com",
  },
];

//console.log(users[1].id);
//console.log(tindUser);
console.log(Object.entries(tindUser));
console.log(tindUser.hasOwnProperty("isLoggedIn"));
