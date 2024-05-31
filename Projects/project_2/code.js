const form = document.querySelector("form");
let heightInput = document.querySelector("#height");
let weightInput = document.querySelector("#weight");
const result = document.querySelector("#results");
let bmi;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = heightInput.value;
  const weight = weightInput.value;
  bmi = ((weight / (height * height)) * 10000).toFixed(2);
  if (bmi < 18.6) {
    result.innerHTML = `${bmi} kg/m2 <br> You are underweight`;
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    result.innerHTML = `${bmi} kg/m2 <br> You are normal`;
  } else {
    result.innerHTML = `${bmi} kg/m2 <br> You are overweight`;
  }
  heightInput.value = "";
  weightInput.value = "";
});
