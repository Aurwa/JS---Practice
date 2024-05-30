// const coding = ["ruby", "js", "python"];
// const values = coding.forEach((item) => {
//   console.log(item);
// });

// console.log(values);

// const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const value = myNum.filter((item) => {
//   return item > 4;
// });

//console.log(value);

// const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// myNum.forEach((item) => {
// if (item > 4) {
//   console.log(item);
// }
//console.log(`${item > 4}`);
//   console.log(item > 4);
// });

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// myNum.forEach((item) => {
//   if (item > 4) {
//     console.log(item);
//   }
// });

// const newNum = [];
// myNum.forEach((num) => {
//   if (num > 4) {
//     newNum.push(num);
//   }
// });
// console.log(newNum);

/*
const books = [
  { title: "Book 1", genre: "fiction", publish: 1990, edition: 2000 },
  { title: "Book 2", genre: "comedy", publish: 1991, edition: 2001 },
  { title: "Book 3", genre: "horror", publish: 1992, edition: 2002 },
  { title: "Book 4", genre: "sci-fi", publish: 1993, edition: 2003 },
  { title: "Book 5", genre: "crime", publish: 1994, edition: 2004 },
  { title: "Book 6", genre: "horror", publish: 1995, edition: 2005 },
];

const newBooks = books.filter((book) => {
  return book.genre === "horror";
});

const bookTitle = newBooks.map((book) => book.title);
console.log(newBooks);
console.log(bookTitle);

using map() is more semantically correct and clear in this case because map() is typically used for transforming elements, while filter() is used for selecting elements based on a condition. Since you're specifically interested in transforming the elements (extracting the titles), map() is more suitable here.
*/

/*
const books = [
  { title: "Book 1", genre: "fiction", publish: 1990, edition: 2000 },
  { title: "Book 2", genre: "comedy", publish: 1991, edition: 2001 },
  { title: "Book 3", genre: "horror", publish: 1992, edition: 2002 },
  { title: "Book 4", genre: "sci-fi", publish: 1993, edition: 2003 },
  { title: "Book 5", genre: "crime", publish: 1994, edition: 2004 },
  { title: "Book 6", genre: "horror", publish: 1995, edition: 2005 },
];

const newBooks = books.filter(
  (book) => book.publish > 1992 && book.genre === "horror"
);
console.log(newBooks);
*/

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// with map()
//const newNum = myNumbers.map((num) => num + 10);
//console.log(newNum);

// with for each()
// myNumbers.forEach((num) => {
//   console.log(num + 10);
// });

/*
//Chaining
const newNum = myNumbers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num > 40);

console.log(newNum);
*/

// const myNums = [1, 2, 3];
// const total = myNums.reduce((acc, currVal) => {
//   return acc + currVal;
// }, 0);
// console.log(total);

// const myNums = [1, 2, 3];
// let initialVal = 0;
// for (const num of myNums) {
//   initialVal += num;
// }
// console.log(initialVal);

const shoppingCart = [
  {
    course: "python",
    price: 2999,
  },
  {
    course: "javascript",
    price: 999,
  },
  {
    course: "python",
    price: 1999,
  },
];

const total = shoppingCart.reduce((acc, initialVal) => {
  return acc + initialVal.price;
}, 0);
console.log(total);
