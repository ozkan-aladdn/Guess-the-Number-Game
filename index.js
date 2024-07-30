let minNumber = 1,
  maxNumber = 100;
let toGuess = 5;

const inputNumber = document.getElementById("inputNumber");
const check = document.getElementById("check-btn");
const scrennMessage = document.querySelector(".message");
const body = document.querySelector("body");
const restart = document.getElementById("restart");

//random

function randomNumber() {
  return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
}

let random = randomNumber();

body.onload = function () {
  inputNumber.focus();
};

function info(msj, color) {
  scrennMessage.textContent = msj;
  scrennMessage.style.color = color;
}

check.addEventListener("click", () => {
  let number = inputNumber.value;

  if (number == random) {
    info(`Congratulation!`, "green");
    check.disabled = true;
  } else if (isNaN(number) || number < minNumber || number > maxNumber) {
    info(`Please enter a number between ${minNumber} and ${maxNumber}`, "red");
  } else if (number > random) {
    toGuess -= 1;
    info(`Less than ${number}. You have ${toGuess} guesses left`, "red");

    if (toGuess === 0) {
      info(`Game over. Restart the game. The number was ${random}`);
      check.disabled = true;
    }
  } else if (number < random) {
    toGuess -= 1;
    info(`Greater than ${number}. You have ${toGuess} guesses left`, "red");
    if (toGuess === 0) {
      info(`Game over. Restart the game. The number was ${random}`);
      check.disabled = true;
    }
  }
});

restart.onclick = () => {
  // window.location.reload();
  toGuess = 5;
  random = randomNumber();
  check.disabled = false;
  inputNumber.value = "";
  scrennMessage.textContent = "";
};
