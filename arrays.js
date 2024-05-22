// const array2 = new Array (1, 2, 3, 4)
// console.log(typeof array2);
// const array1 = [1, 2, 3, 4]
// const array2 = array1
// array1.push(5)
// console.log(`Array 1 - ${array1}`);
// console.log(`Array 2 - ${array2}`);
// array2.push(6)
// console.log(`Array 1 after change- ${array1}`);
// console.log(`Array 2 after change- ${array2}`);

// const array1 = [1, 2, 3, 4, 5]
//array1.unshift(7)
// array1.shift()
//console.log(array1.includes(9));
// console.log(array1.indexOf(3));

// const array1 = [1, 2, 3, 4, 5]
// const array2 = array1.join()
// console.log(array2);
// console.log(array1);

// const array1 = [1, 2, 3, 4, 5]
// console.log("A ", array1);
// const newArray = array1.slice(1, 3)
// console.log(`New array - ${newArray}`);
// console.log("B ", array1);

// const array2 = array1.splice(1, 3)
// console.log(newArray);
// console.log(`C - ${array1}`);
// console.log(`Splice ans - ${array2}`);

// const arr = [1, 2, 3, 4, 5, 7]
// const newArr = arr.splice(5, 0, 6)
// console.log(`Original Array - ${arr}`);
// console.log(`New Array - ${newArr}`);


// const myHonda = {
//     color: "red",
//     wheels: 4,
//     engine: { cylinders: 4, size: 2.2 },
//   };

// const myCar = [myHonda, 2, "cherry condition", "purchased 1997"];
// const newCar = myCar.slice(0, 2);

// console.log("myCar =", myCar);
// console.log("newCar =", newCar);
// console.log("myCar[0].color =", myCar[0].color);
// console.log("newCar[0].color =", newCar[0].color);

// myHonda.color = "purple";
// console.log("The new color of my Honda is", myHonda.color);

// console.log("myCar[0].color =", myCar[0].color);
// console.log("newCar[0].color =", newCar[0].color);


// const arr = ["one", "two", "three", "four", "five"]
// console.log(arr.slice(3, 6));
// arr.push("six")
// console.log(arr.slice(3, 6));
// console.log(arr);


// const arrayLike = {
//     length: 4,
//     0: 2,
//     1: 3,
//     2: 4,
//     3: 33, 
//   };
//   console.log(Array.prototype.slice.call(arrayLike, 1, 3));

const marvel = ["thor", "ironman"]
const dc = ["superman", "spiderman"]

// marvel.push(dc)
// console.log(marvel);

const heros = marvel.concat(dc)
console.log(heros);






