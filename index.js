let minNumber = 1;
let maxNumber = 100;
let toGuess = 5;

// Dom ile seçelim
const inputNumber = document.getElementById("inputNumber");
console.log(inputNumber);
const check = document.getElementById("check-btn");
const scrennMessage = document.querySelector(".message");
const body = document.querySelector("body");
const restart= document.getElementById("restart")


//Random  sayı fonksiyonu
function randomNumber() {
  return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
}
const random = randomNumber();
console.log(random);

/* ---------------------------------- */

//  Sayfa yüklendiğinde ilk olacaklar
body.onload = function () {
  inputNumber.focus();
};

/* ---------------------------------- */
check.addEventListener("click", () => {
  let number = inputNumber.value; //input içindeki value değerini kullanmak için aldık.

  inputNumber.focus();

  if (number == random) {
    info(`Congratulation! You have ${toGuess} guesses left`, "green");
  } else if (isNaN(number) || number < minNumber || number > maxNumber) {
    info(`Please enter a number between ${minNumber} and ${maxNumber}`, "red");
  } else if (number > random) {
    toGuess -= 1;
    info(`Less than ${number}. You have ${toGuess} guesses left`, "red");
    toGuess === 0
      ? info(`Game over. Restart the game. The number was ${random}`)
      : null;
  } else if (number < random) {
    toGuess -= 1;
    info(`Greater than ${number}. You have ${toGuess} guesses left`, "red");
    toGuess === 0
      ? info(`Game over. Restart the game. The number was ${random}`)
      : null;
  }
});

/* ---------------------------------- */

// mesaj fonksiyonu
function info(msj, color) {
  scrennMessage.textContent = msj;
  scrennMessage.style.color = color;
}

restart.onclick = ()=>{
  window.location.reload();
}
