// const myArr = new Array (5,2,3,4)
// console.log(myArr);

// const arr2 = [1,2,3,4]
// console.log(arr2)

// const arr1 = [1,2,3,4]
// console.log(arr1);
// arr1.push(5)
// const arr2 = arr1
// console.log(arr2);
// arr2.push(9);
// console.log(arr2);
// console.log(arr1);

const arr = [1,2,3,4,5,6]
const arr1 = arr.slice(1,4)
console.log(arr1);
console.log("Original array after slice" , arr);
const arr2 = arr.splice(1,4)
console.log(arr2);
console.log("Original array after splice" , arr);