let minNumber = 1;
let maxNumber = 100;

// Dom ile seçelim
const inputNumber = document.getElementById("inputNumber");
console.log(inputNumber);
const check = document.getElementById("check-btn");
const scrennMessage = document.querySelector(".message");
const body = document.querySelector("body");

//Random  sayı fonksiyonu
function randomNumber() {
  return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
}
const random = randomNumber();
console.log(random);

/* ---------------------------------- */

//  Sayfa yüklendiğinde ilk olacaklar
body.onload = function () {
  // randomNumber();
  inputNumber.focus();
};

/* ---------------------------------- */
check.addEventListener("click", () => {
  let number = inputNumber.value; //input içindeki value değerini kullanmak için aldık.

  if (isNaN(number) || number < minNumber || number > maxNumber) {
    info(`Please enter a number between ${minNumber} and ${maxNumber}`);
  } else if (number < random) {
    info(`Greater than ${number}`);
  } else if (number > random) {
    info(`Less than ${number}`);
  } else if (number == random) {
    info(`Congratulation!`);
  }
});

/* ---------------------------------- */

// mesaj fonksiyonu
function info(msj) {
  scrennMessage.textContent = msj;
}
