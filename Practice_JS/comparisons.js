//console.log("2" > 1);

//console.log("02" > 1);

/*
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
*/

/*
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined >= 0);
*/


// ***********   NON-Primitive DATATYPE  ***********

const myArray = ["one", "two", "three"];
const myObj = {
    name: "Aurwa",
    age: 25
}

//console.log(typeof myObj);


// ***********   MEMORY IN JS  ***********
/*
Stack memory => Primitives
Heap memory => Reference types

*/

let youtubeChannelName = "Hitesh Chaudary";
let anotherName;
anotherName = youtubeChannelName;
//console.log(anotherName);
anotherName = "Chai and Code";
//console.log(youtubeChannelName);
//console.log(anotherName);


let userOne = {
    name: "Hitesh",
    age: 25
}

let userTwo = userOne;
userTwo.age = 26;
console.log(userOne.age);
console.log(userTwo.age);


 







