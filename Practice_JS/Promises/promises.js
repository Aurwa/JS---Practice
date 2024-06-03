// const promiseOne = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async task is completed.");
//     resolve();
//   }, 2000);
// });

// promiseOne.then(function () {
//   console.log("Promise Consumed.");
// });

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Promise 2");
//     resolve();
//   }, 2000);
// }).then(function () {
//   console.log("Resolve 2");
// });

// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ user: "Chai", email: "chai@example.com" });
//   }, 1000);
// });

// promiseThree.then(function (user) {
//   console.log(user);
// });

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Aurwa", email: "example@abc.com" });
    } else {
      reject("ERROR!!");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  });
