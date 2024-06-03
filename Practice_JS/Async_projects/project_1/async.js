const body = document.querySelector("body");
let intervalId;
// let r;
// let g;
// let b;

// function getRandomColor() {
//   r = Math.floor(Math.random() * 256);
//   g = Math.floor(Math.random() * 256);
//   b = Math.floor(Math.random() * 256);
//   return `rgb(${r}, ${g}, ${b})`;
// }

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    console.log(color);
  }
  return color;
}

document.querySelector("#start").addEventListener("click", function () {
  intervalId = setInterval(() => {
    body.style.backgroundColor = getRandomColor();
  }, 2000);
});

document.querySelector("#stop").addEventListener("click", function () {
  clearInterval(intervalId);
  intervalId = null;
});
