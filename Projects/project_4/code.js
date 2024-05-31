let randomNumber = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector("#guessField");
const submit = document.querySelector("#subt");
let resultPara = document.querySelector(".resultParas");
let prevGuesses = document.querySelector(".guesses");
let remainingGuess = document.querySelector(".lastResult");
let lowOrHigh = document.querySelector(".lowOrHi");
const p = document.createElement("p");

let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    let guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

// validateGuess Func
function validateGuess(guess) {
  if (guess < 1) {
    alert("Enter a greater number");
  } else if (guess > 100) {
    alert("Enter a number less than 100");
  } else if (isNaN(guess)) {
    alert("Enter a valid number");
  } else {
    if (numGuess >= 10) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}.`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

// checkGuess Function
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage("You guessed it right. Game Over.");
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("Guess is low.");
  } else if (guess > randomNumber) {
    displayMessage("Guess is high.");
  }
}

// displayGuess Function
function displayGuess(guess) {
  userInput.value = "";
  prevGuesses.innerHTML += `${guess}, `;
  numGuess++;
  remainingGuess.innerHTML = `${11 - numGuess}`;
}

// displayMessage Function
function displayMessage(message) {
  lowOrHigh.innerHTML = `${message}`;
}

// endGame Function
function endGame() {
  userInput.value = "";
  p.classList.add("button");
  p.innerHTML = `<h2 id='newGame'>Start new Game</h2>`;
  resultPara.appendChild(p);
  userInput.setAttribute("disabled", "");
  playGame = false;
  startGame();
}

// startGame Function
function startGame() {
  const newGameBtn = document.querySelector("#newGame");
  newGameBtn.addEventListener("click", (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    numGuess = 1;
    prevGuesses.innerHTML = "";
    remainingGuess.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    resultPara.removeChild(p);
    playGame = true;
  });
}
