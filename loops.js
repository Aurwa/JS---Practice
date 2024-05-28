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
  console.log(`${key} : ${value}`);
}
