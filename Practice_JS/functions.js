function sayName() {
  console.log("Aurwa");
  console.log("Zafar");
}

//sayName();

function addNumbers(num1, num2) {
  const ans = num1 + num2;
  return ans;
}

//const result = addNumbers(3, 4);
//console.log(result);

function loginUserMessage(username) {
  if (username === undefined) {
    return "Enter a username";
  } else {
    const userLogin = `${username} just logged in!`;
    // return console.log(userLogin); // console.log itself doesnt return anything
    // shouldnt use return with console.log but it doesnt return anyting, only logs the message to the console and undefined is returned which is printed when the function is called
    return userLogin;
  }
}

//console.log(loginUserMessage("Aurwa"));
// const result = loginUserMessage();

function loginUserMessage(username) {
  if (username === undefined) {
    return "Enter a username";
  } else {
    const userLogin = `${username} just logged in!`;
    return userLogin;
  }
}

// const result = loginUserMessage("Aurwa");
// console.log(result);
//console.log(loginUserMessage("Aurwa"));

// !username ==> username === undefined
function userLoginMessage(username) {
  if (!username) {
    return "Enter a username";
  } else {
    return `${username} logged in!`;
  }
}

//console.log(userLoginMessage());

function calculateCartPrice(val1, val2, ...num1) {
  //return num1;
  return [val1, num1];
}

//console.log(calculateCartPrice(200, 400, 500, 1000));

const user = {
  username: "Aurwa",
  price: 255,
};

function handleObj(anyObj) {
  console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`);
}

// handleObj(user);

const arr = ["Aurwa", 25];

function handleArrays(anyArray) {
  console.log(`Name is ${anyArray[0]} and age is ${anyArray[1]}`);
}

handleArrays(arr);
