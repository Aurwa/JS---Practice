let num = 50; //global scope

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
  //console.log(num);
} // block scope

//console.log(a);
//console.log(b);
//console.log(c);

function one() {
  const username = "Aurwa";
  function two() {
    const website = "z@gmail.com";
    console.log(username);
  }
  //console.log(website);
  two();
}

//one();

if (true) {
  const username = "Aurwa";
  if (username === "Aurwa") {
    const website = " youtube";
    //console.log(username + website);
  }

  //console.log("Website: ", website);
}

//console.log("Username: ", username);

//Function 1
console.log(addOne(10));

function addOne(num) {
  return num + 1;
}

//Function 2
const addTwo = function (num) {
  return num + 2;
};

console.log(addTwo(3));
