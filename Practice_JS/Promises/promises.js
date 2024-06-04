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

// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false;
//     if (!error) {
//       resolve({ username: "Aurwa", email: "example@abc.com" });
//     } else {
//       reject("ERROR!!");
//     }
//   }, 1000);
// });

// promiseFour
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({ user: "Aurwa", password: 123 });
//     } else {
//       reject("ERROR!!");
//     }
//   }, 1000);
// });

// promiseFour
//   .then(function (user) {
//     return user.user;
//   })
//   .then(function (name) {
//     console.log(name);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(() => console.log("The promise is either resolved or rejected"));

// const promiseFive = new Promise(function (reject, resolve) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({ user: "Javascript", password: 123 });
//     } else {
//       reject("ERROR! Something went wrong.");
//     }
//   }, 1000);
// });

// async function consumePromise() {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

//consumePromise();

// async function getUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }

// getUsers();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log("Error.", error));
