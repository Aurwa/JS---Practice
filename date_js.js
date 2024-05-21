
const myDate = new Date()
console.log(myDate); 
console.log(typeof myDate);
const newDate = myDate.toLocaleString("default", {
    weekday: "long"
});
console.log("New Date: ", newDate);
console.log(typeof newDate);

//const createdDate = new Date(2023, 0, 23);
console.log(createdDate.toDateString());
console.log(createdDate.toLocaleString());

const createdDate = new Date("2023-01-14");
//console.log(createdDate.toDateString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(createdDate.getTime());
console.log(Math.floor(myTimeStamp/1000));

const date = new Date()
console.log(date.getDay());





