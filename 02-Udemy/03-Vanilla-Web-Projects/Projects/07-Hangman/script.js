const wordEl = document.getElementById("word");
const wrongLetterEl = document.getElementById("wrong-letters");
const playAgainBtn = document.getElementById("play-button");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");

const figureParts = document.querySelectorAll(".figure-part");

const words = ["application", "programming", "interface", "wizard"];

let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = [];
const wrongtLetters = [];

// show the hidden word
function displayWord() {
  wordEl.innerHTML = `
  ${selectedWord
    .split("")
    .map(
      (letter) => `
    <span class="letter">
      ${correctLetters.includes(letter) ? letter : ""}
    </span>
  `
    )
    .join("")}
  `;

  const innerWord = wordEl.innerText.replace(/\n/g, "");
  if (innerWord === selectedWord) {
    finalMessage.innerText = "Congratulations! You won!😀";
    popup.style.display = "flex";
  }
}

// Update the wrong letters
function updatewrongLetterEl() {
  // Display wrong letters
  wrongLetterEl.innerHTML = `
  ${wrongtLetters.length > 0 ? "<p>Wrong</p>" : ""}
  ${wrongtLetters.map((letter) => `<span>${letter}</span>`)}
  `;

  // Display parts
  figureParts.forEach((part, index) => {
    const errors = wrongtLetters.length;

    if (index < errors) {
      part.style.display = "block";
    } else {
      part.style.display = "none";
    }
  });

  // check if lost
  if (wrongtLetters.length === figureParts.length) {
    finalMessage.innerText = "Unfortunately you lost. 😢";
    popup.style.display = "flex";
  }
}

// Show notification
function showNotification() {
  notification.classList.add("show");

  setInterval(() => {
    notification.classList.remove("show");
  }, 2000);
}

// Keydown letter press
window.addEventListener("keydown", (e) => {
  const isLetter = /^[a-zA-Z]$/.test(e.key);
  if (isLetter) {
    const letter = e.key;
    if (selectedWord.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        correctLetters.push(letter);
        displayWord();
      } else {
        showNotification();
      }
    } else {
      if (!wrongtLetters.includes(letter)) {
        wrongtLetters.push(letter);
        updatewrongLetterEl();
      } else {
        showNotification();
      }
    }
  }
});

// Restart Game and play again
playAgainBtn.addEventListener("click", () => {
  // Empty arrays
  correctLetters.splice(0);
  wrongtLetters.splice(0);

  selectedWord = words[Math.floor(Math.random() * words.length)];
  displayWord();

  updatewrongLetterEl();

  popup.style.display = "none";
});

displayWord();
