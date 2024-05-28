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
  console.log(score);
  score++;
} while (score <= 5);
