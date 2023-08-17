"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".btn-check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //   console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").style.color = "red";
    displayMessage("Oga Put Number Na 🙄");
  } else if (guess === secretNumber) {
    document.querySelector(".message").style.color = "#14FF00";
    displayMessage("Correct Guy 😎");
    document.querySelector(".number").textContent = secretNumber;

    
    if (score > highscore) {
      highscore = score;
      document.querySelector(".high-score").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").style.color = "red";
      displayMessage(
        guess > secretNumber
          ? "Oga The Number Too High 😑"
          : "Oga The Number Too Low 🥴"
      );

      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥You lost the game!';
      document.querySelector(".message").style.color = "red";
      displayMessage("Oga You Don Lose 😒");
    }
  }
});

document.querySelector(".btn-reset").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Start guessing....';
  document.querySelector(".message").style.color = "black";
  displayMessage("You Fit Guess The Number? 🤨");
  // score--;
  document.querySelector(".score").textContent = 20;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});