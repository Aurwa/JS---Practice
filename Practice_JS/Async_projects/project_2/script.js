// const table = document.querySelector("table");

// window.addEventListener("keydown", (e) => {
//   table.innerHTML += `
//     <tr>
//       <td>${e.key === " " ? "Space" : e.key}</td>
//       <td>${e.keyCode}</td>
//       <td>${e.code}</td>
//     </tr>
//   `;
// });

// using Arrays
/*
const tableBody = document.querySelector("#table-body");
let keyPresses = [];

window.addEventListener("keydown", (e) => {
  keyPresses.push({
    key: e.key,
    keyCode: e.keyCode,
    code: e.code,
  });
  renderTable();
});

function renderTable() {
  tableBody.innerHTML = "";
  keyPresses.forEach((keyPress) => {
    tableBody.innerHTML += `
    <tr>
      <td>${keyPress.key}</td>
      <td>${keyPress.keyCode}</td>
      <td>${keyPress.code}</td>
    </tr>
  `;
  });
}

console.log(keyPresses);
*/

// Approach - 1
/*
let tableBody = document.querySelector("#table-body");

window.addEventListener("keydown", (e) => {
  tableBody.innerHTML += `
  <tr>
    <td>${e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
 `;
});
*/

// Approach-2 Using Arrays
tableBody = document.querySelector("#table-body");
const keyPresses = [];

window.addEventListener("keydown", (e) => {
  keyPresses.push({
    key: e.key,
    keyCode: e.keyCode,
    code: e.code,
  });
  renderTable();
});

function renderTable() {
  tableBody.innerHTML = "";
  keyPresses.forEach((keyPress) => {
    tableBody.innerHTML += `
  <tr>
    <td>${keyPress.key === " " ? "Space" : keyPress.key}</td>
    <td>${keyPress.keyCode}</td>
    <td>${keyPress.code}</td>
  </tr>
  `;
  });
}
