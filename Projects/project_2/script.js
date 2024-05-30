// const heightInput = document.getElementById("height");
// const weightInput = document.getElementById("weight");

// heightInput.addEventListener("click", (e) => {
//   console.log(e.target.innerText);
// });

const form = document.querySelector("form");
const result = document.querySelector("#results");
const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");
let bmi;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let height = Number(heightInput.value);
  let weight = Number(weightInput.value);
  const btn = document.querySelector("button");

  if (height === " " || height <= 0 || isNaN(height)) {
    result.innerHTML = "Enter a valid number";
  } else if (btn.innerText === "Calculate") {
    bmi = ((weight / (height * height)) * 10000).toFixed(2);
  }
  if (bmi < 18.6) {
    result.innerHTML = `<span>${bmi} kg/m2</span><br><span>You are under weight </span>`;
  } else if ((bmi = 24.9)) {
  }
  heightInput.value = "";
  weightInput.value = "";
});
