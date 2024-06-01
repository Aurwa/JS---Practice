// const river = document.getElementById("river");
// river.addEventListener(
//   "click",
//   (e) => {
//     console.log(e);
//   },
//   false
// );

//Event Propogation ==> Event Bubbling, Event Capturing

// document.getElementById("images").addEventListener(
//   "click",
//   (e) => {
//     console.log("Clicked inside the ul");
//   },
//   false
// );

// document.getElementById("japan").addEventListener(
//   "click",
//   (e) => {
//     console.log("Japan");
//     e.stopPropagation();
//   },
//   false
// );

// document.getElementById("google").addEventListener(
//   "click",
//   function (e) {
//     e.preventDefault();
//     console.log("Google");
//     e.stopPropagation();
//   },
//   false
// );

// let imgJapan = document.getElementById("japan");

// imgJapan.addEventListener("click", function (e) {
//   if (e.target.id === "japan") {
//     imgJapan.style.display = "none";
//   }
// });

// const images = document.querySelector("#images");
// images.forEach((image) => {
//   image.addEventListener("click", function (e) {
//     console.log(e.target);
//   });
// });

document.querySelector("#images").addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    let removeImg = e.target.parentNode;
    removeImg.remove();
  }
  //removeImg.parentNode.removeChild(removeImg);
});
