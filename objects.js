//Singleton
//Object.create

//Object Literals

const mySym = Symbol("key1");

const JsUser = {
  name: "Aurwa",
  "full name": "Aurwa Zafar",
  age: 25,
  location: "Islamabad",
  email: "zafar@gmail.com",
  [mySym]: "myKey1",
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
console.log(JsUser);
