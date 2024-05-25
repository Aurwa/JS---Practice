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

console.log(userLoginMessage());
