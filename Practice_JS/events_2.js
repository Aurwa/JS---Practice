// document.querySelector("#images").addEventListener(
//   "click",
//   function (e) {
//     //console.log("Image clicked");
//   },
//   false
// );

// document.getElementById("river").addEventListener(
//   "click",
//   function (e) {
//     //console.log("River");
//     e.stopPropagation();
//   },
//   false
// );

// document.getElementById("google").addEventListener("click", (e) => {
//   e.preventDefault();
// });

let images = document.getElementById("images");

images.addEventListener("click", (e) => {
  console.log();
  if (e.target.tagName === "IMG") {
    const parent = e.target.parentNode;
    parent.remove();
  }
});
