/*
const myDate = new Date()
//console.log(`My date ${myDate}`); 
// console.log(typeof myDate);
const newDate = myDate.toLocaleString("default", {
    weekday: "long"
});
// console.log("New Date: ", newDate);
// console.log(typeof newDate);

//const createdDate = new Date(2023, 0, 23);
//console.log(createdDate.toDateString());
//console.log(createdDate.toLocaleString());

const createdDate = new Date("2023-01-14");
//console.log(createdDate.toDateString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(createdDate.getTime());
// console.log(Math.floor(myTimeStamp/1000));

const date = new Date()
// console.log(date.getDay());
*/


//const date = new Date().getTime();
//console.log(`Date: ${date}`);
//const date2 = Date()
// console.log(`Date 2: ${date2}`);
// console.log(`Type of Date instance ${typeof date}`);
//console.log(`Type of Date ${typeof date2}`);

// const newDate = Date.now()
// const date = new Date()
// console.log(newDate);
// console.log(date);

//let myDate = new Date();
// console.log(`My date - ${myDate}`);
// console.log(`To String - ${myDate.toString()}`);
// console.log(`To Date String - ${myDate.toDateString()}`)
// console.log(`To Locale String - ${myDate.toLocaleString()}`);
// console.log(`${myDate.getTime()}`);

// const date = Date.now()/1000;
// console.log(date);
// let createdDate = new Date(2023, 0, 15)
// let timeInSec = createdDate.getTime() / 1000
// console.log(`Created date - ${timeInSec}`);


// let givenDate = new Date(1998, 5, 21)
// let DOB = givenDate.getFullYear()
// let currentYear = new Date().getFullYear()
// let age = currentYear - DOB
// console.log(`Age of the person: ${age} years`);


// ************ Practice Question 1 ***********
// let givenYear = new Date(1998, 5, 21)
// let DOB = givenYear.getFullYear()
// let currentYear = new Date().getFullYear()
// console.log(`The age of person is ${currentYear - DOB} years.`);

//----------------------------------------------------------------------------------
// ************ Practice Question 1 ***********
// let givenDate = new Date(1998, 5, 21);
// let birthYear = givenDate.getFullYear();
// let currentYear = new Date().getFullYear()
// console.log(`The person is ${currentYear - birthYear} years old.`);


//----------------------------------------------------------------------------------
// ************ Practice Question 2 ***********

//Approach 1
// let givenDate = new Date(2024, 4, 22)
// console.log(givenDate.toLocaleString("default", {
//     weekday: "long"
// }));

//Approach 2
// let givenDate = new Date(2024, 4, 22)
// let weekDayNum = givenDate.getDay()
// let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday"]
// let weekDay = weekDays[weekDayNum]
// console.log(weekDay);


//----------------------------------------------------------------------------------
// ************ Practice Question 3 ***********

// let givenDate = new Date()
// let day = givenDate.getDate()
// let month = givenDate.getMonth() + 1
// let year = givenDate.getFullYear()

// day = day < 10 ? "0" + day : day
// month = month < 10 ? "0" + month : month

// console.log(`${day}-${month}-${year}`);



















