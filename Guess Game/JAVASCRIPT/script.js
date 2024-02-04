"use strict";

const guess = document.querySelector(".guess");
const inputNum = document.querySelector(".input-number");
const message = document.querySelector(".message");
const attemptsLeft = document.querySelector(".attempts-left");
const again = document.querySelector(".Again");
const input = document.querySelector(".input-field");
const chectBtn = document.querySelector(".check");
const line1 = document.querySelector(".line-1");
const line2 = document.querySelector(".line-2");
const guessCircle = document.querySelector(".guess-display");
let score = 10;

const secret = Math.trunc(Math.random() * 20);
console.log(secret);

chectBtn.addEventListener("click", onclick);
console.log(inputNum.value);
function onclick(e) {
  const guessNumber = parseInt(inputNum.value);

  if (guessNumber === secret) {
    message.textContent = "🎉 You have won....";
    line1.style.backgroundColor = "#46eb34";
    guessCircle.style.backgroundColor = "#46eb34";
    line2.style.backgroundColor = "#46eb34";
    guess.textContent = guessNumber;
  } else if (guessNumber !== secret) {
    message.textContent = guessNumber > secret ? "📈Too High" : "📉Too low";
    score--;
    attemptsLeft.textContent = score;
    if (score <= 1) {
      message.textContent = "🎉 You lose the game....";
      attemptsLeft.textContent = 0;
    }
  }
}
again.addEventListener("click", reset);

function reset() {
  attemptsLeft.textContent = 10;
  message.textContent = "Guess the number....";
  inputNum.value = " ";
  line1.style.backgroundColor = "#0000ff";
  guessCircle.style.backgroundColor = "#0000ff";
  line2.style.backgroundColor = "#0000ff";
  guess.textContent = "?";
}
console.log("The End");
