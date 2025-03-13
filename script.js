window.onload = function () {
  generateCard();
  startTimer();
};

let timeLeft = 10;
let timerInterval;

// Generate a random card
function generateCard() {
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

  // Randomly select a suit and a value
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];

  // Get the card element and set its content and class
  const cardElement = document.querySelector(".card");
  cardElement.innerHTML = `${randomValue} ${getSuitSymbol(randomSuit)}`;
  cardElement.className = `card ${randomSuit}`;
}

// Return the suit symbol
function getSuitSymbol(suit) {
  if (suit === "heart") return "♥";
  if (suit === "spade") return "♠";
  if (suit === "club") return "♣";
  return "♦";
}

// When the "Generate New Card" button is clicked, generate a new card and reset the timer
document.getElementById("newCardBtn").onclick = function () {
  generateCard();
  resetTimer();
};

// Update the width of the card
document.getElementById("widthInput").addEventListener("input", function () {
  document.querySelector(".card").style.width = this.value + "px";
});

// Update the height of the card
document.getElementById("heightInput").addEventListener("input", function () {
  document.querySelector(".card").style.height = this.value + "px";
});

// Update the timer text
function updateTimer() {
  const timerElement = document.getElementById("timer");

  if (timeLeft > 0) {
    timerElement.textContent = `Next card in: ${timeLeft} seconds`;
    timeLeft--;
  } else {
    timeLeft = 10;
    generateCard();
  }
}

// Start the timer
function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
}

// Reset the timer when a new card is generated
function resetTimer() {
  timeLeft = 10;
  document.getElementById("timer").textContent = "Next card in: 10 seconds";
}
