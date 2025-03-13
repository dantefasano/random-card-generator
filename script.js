window.onload = function () {
  generateCard();
  startTimer();
};

let timeLeft = 10;
let timerInterval;

const suits = ["heart", "spade", "club", "diamond"];
const values = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
  "Ace",
];

// Generate a random card
function generateCard() {
  const randomSuit = getRandomElement(suits);
  const randomValue = getRandomElement(values);

  const cardElement = document.querySelector(".card");
  cardElement.innerHTML = `${randomValue} ${getSuitSymbol(randomSuit)}`;
  cardElement.className = `card ${randomSuit}`;
}

// Returns a random element from an array
function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Returns the suit symbol
function getSuitSymbol(suit) {
  switch (suit) {
    case "heart":
      return "♥";
    case "spade":
      return "♠";
    case "club":
      return "♣";
    case "diamond":
      return "♦";
    default:
      return "";
  }
}

// Updates and manages the countdown timer
function updateTimer() {
  const timerElement = document.getElementById("timer");

  if (timeLeft > 0) {
    timerElement.textContent = `Next card in: ${timeLeft} seconds`;
    timeLeft--;
  } else {
    generateCard();
    resetTimer();
  }
}

// Starts the countdown timer
function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
}

// Resets the countdown timer
function resetTimer() {
  timeLeft = 10;
  document.getElementById("timer").textContent = "Next card in: 10 seconds";
}

// Event listeners
document.getElementById("newCardBtn").addEventListener("click", () => {
  generateCard();
  resetTimer();
});

document.getElementById("widthInput").addEventListener("input", function () {
  document.querySelector(".card").style.width = `${this.value}px`;
});

document.getElementById("heightInput").addEventListener("input", function () {
  document.querySelector(".card").style.height = `${this.value}px`;
});

// Clears the timer when the window is closed
window.onunload = function () {
  clearInterval(timerInterval);
};
