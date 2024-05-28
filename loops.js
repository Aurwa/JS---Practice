// ******************* FOR LOOP ******************

// for (let i = 0; i < 10; i++) {
//   let element = i;
//   if (element === 5) {
//     console.log("5 is best number");
//   }
//   console.log(element);
// }

// for (let i = 0; i <= 10; i++) {
//   console.log(`Outer loop: ${i}`);
//   for (let j = 0; j <= 10; j++) {
//     console.log(`Inner loop: ${j}`);
//   }
// }

const myArray = ["flash", "superman", "spiderman"];
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  //console.log(element);
}

// for (i = 1; i <= 20; i++) {
//   if (i === 5) {
//     console.log(`Detected 5`);
//     break;
//   }
//   console.log(`Value of i: ${i}`);
// }
// for (i = 1; i <= 10; i++) {
//   if (i === 5) {
//     console.log(`Detected 5`);
//     continue;
//   }
//   console.log(`Value of i: ${i}`);
// }

// ***********************************************************************************
//************************************************************************************
// *************** WHILE & DO-WHILE LOOP ****************

let i = 0;
while (i <= 20) {
  //console.log(`Value of i: ${i}`);
  i = i + 2;
}

let myArr = ["flash", "deadpool", "spidy"];
let j = 0;
while (j < myArr.length) {
  //console.log(myArr[j]);
  j++;
}

let score = 1;
do {
  //console.log(score);
  score++;
} while (score <= 5);

//for of loop
const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
  //console.log(num);
}

const greeting = "Hello World!";
for (const greet of greeting) {
  if (greet == " ") {
    continue;
  }
  //console.log(greet);
}

const map = new Map();
map.set("Pak", "Pakistan");
map.set("Fr", "France");

for (const [key, value] of map) {
  //console.log(`${key} : ${value}`);
}

const myObj = {
  js: "javascript",
  c: "c plus plus",
  rb: "ruby",
};

for (const key in myObj) {
  //console.log(myObj[key]);
}

const lang = ["java", "ruby", "python"];
for (const key in lang) {
  //console.log(lang[key]);
}

const newMap = new Map();
newMap.set("A", "apple");
newMap.set("B", "Banana");

for (const [key, value] of newMap) {
  //console.log(`${key} : ${value}`);
}

// const arr1 = ["ruby", "python", "java"];
// arr1.forEach(function (val) {
//   console.log(val);
// });
// arr1.forEach((val) => console.log(val));

const arr1 = ["ruby", "python", "java"];

function print(item) {
  console.log(item);
}

// arr1.forEach(print);
// arr1.forEach((val, index, arr) => {
//   console.log(val, index, arr);
// });

const myLang = [
  { num: 1, lang: "JS" },
  { num: 2, lang: "java" },
  { num: 3, lang: "python" },
];

myLang.forEach((item) => {
  //console.log(`Item: ${item}`);
  console.log("Item: ", item);
  console.log(item.lang);
});

// const numbers = [1, 2, 3, 4, 5];
// for (const num of numbers) {
//   console.log(num);
// }

const greetings = "Hello World!";
for (const greet of greetings) {
  if (greet == " ") {
    continue;
  }
  //console.log(greet);
}

const map1 = new Map();
map1.set("A", "Apple");
map1.set("B", "Banana");
map1.set("O", "Orange");
for (const [key, val] of map1) {
  //console.log(`${key} : ${val}`);
  // console.log(`${val}`);
}

//==========================================
// const map1 = new Map();
// map1.set("A", "Apple");
// map1.set("B", "Banana");
// map1.set("O", "Orange");
// for (const key in map1) {
//   console.log(key);
// }

//================== WAY 1
const obj = {
  js: "javascript",
  py: "python",
  rb: "ruby",
};

//console.log(`Method 1`);
for (const key in obj) {
  //console.log(`${key} : ${obj[key]}`);
}

// ============= WAY 2
const obj2 = {
  js: "javascript",
  py: "python",
  rb: "ruby",
};

//console.log(`Method 2`);
for (const property in obj2) {
  //console.log(` ${property} : ${obj2[property]}`);
}

const language = ["python", "java"];
for (const key in language) {
  //console.log(language[key]);
}
