let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#submit");
const userInput = document.querySelector("#guess");
const message = document.querySelector("#message");
const remainingGuess = document.querySelector("#attempts");
const newBtn = document.querySelector("#newBtn");
const p = document.createElement("p");

let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

// validateGuess function
function validateGuess(guess) {
  if (isNaN(guess)) {
    displayMessage(`Enter a valid number`);
  } else if (guess < 1) {
    displayMessage(`Enter a number greater than 1`);
  } else if (guess > 100) {
    displayMessage(`Enter a number less than 100`);
  } else {
    if (numGuess >= 10) {
      displayGuess(guess);
      displayMessage(`Game Over. The random number is ${randomNumber}`);
      endGame();
    } else {
      displayGuess();
      checkGuess(guess);
    }
  }
}

// displayGuess function
function displayGuess() {
  userInput.value = "";
  numGuess++;
  remainingGuess.innerHTML = `Remaining guesses: ${11 - numGuess}`;
}

// checkGuess function
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right. Game Over.`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Guess is lower.`);
  } else if (guess > randomNumber) {
    displayMessage(`Guess is higher.`);
  }
}

// displayMessage function
function displayMessage(msg) {
  message.innerHTML = msg;
}

// endGame function
function endGame() {
  userInput.setAttribute("disabled", "");
  playGame = false;
  startGame();
}

// startGame function
function startGame() {
  p.classList.add("button");
  p.innerHTML = "Start new Game.";
  newBtn.appendChild(p);
  newBtn.addEventListener("click", (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    numGuess = 1;
    remainingGuess.innerHTML = `<p id="attempts">Remaining Guesses: <span>10</span></p>`;
    userInput.removeAttribute("disabled");
    newBtn.removeChild(p);
    displayMessage("");
    playGame = true;
  });
}
