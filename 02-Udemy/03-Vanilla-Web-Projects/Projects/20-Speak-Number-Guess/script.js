const msgEl = document.getElementById("msg");

const randomNum = getRandomNumber();

console.log("Number: ", randomNum);

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

let recoginition = new window.SpeechRecognition();

// start recognition game
recoginition.start();

function onSpeak(e) {
  const msg = e.results[0][0].transcript;

  writeMsg(msg);
  checkNumber(msg);
}

function writeMsg(msg) {
  msgEl.innerHTML = `
  <div>You said:</div>
  <span class="box">${msg}</span>
  `;
}

function checkNumber(msg) {
  const num = +msg;

  if (Number.isNaN(num)) {
    msgEl.innerHTML = `
    <div>That is not a valid number</div>
    `;
    return;
  }

  if (num > 100 || num < 1) {
    msgEl.innerHTML += `<div>Number must be between 1 and 100</div>`;
    return;
  }

  // Check Number
  if (num === randomNum) {
    document.body.innerHTML = `
    <h2>Congrates! You have guessed the number! <br><br>
    It was ${num}
    </h2>

    <button class="play-again" id="play-again">Play Again</button>
    `;
  } else if (num > randomNum) {
    msgEl.innerHTML += `<div>GO LOWER</div>`;
  } else {
    msgEl.innerHTML += `<div>GO HIGHER</div>`;
  }
}

function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

// speak result
recoginition.addEventListener("result", onSpeak);

// End SR service
recoginition.addEventListener('end', () => recoginition.start())

document.body.addEventListener('click', (e) => {
  if(e.target.id === 'play-again') {
    window.location.reload()
  }
})