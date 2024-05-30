const clock = document.querySelector("#clock");

function time() {
  let now = new Date();
  let sec = now.getSeconds();
  let min = now.getMinutes();
  let hours = now.getHours();
  let am_pm = "AM";

  if (hours > 10) {
    am_pm = "PM";
    hours = hours - 12;
  }

  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  clock.innerHTML = `${hours}: ${min}: ${sec} ${am_pm}`;
}

//setInterval(time, 1000);

// function startTime() {
//   const now = new Date();
//   clock.innerHTML = now.toLocaleTimeString();
// }

// setInterval(startTime, 1000);
