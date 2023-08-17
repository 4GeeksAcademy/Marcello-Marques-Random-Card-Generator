import "bootstrap";
import "./style.css";

let nipeUp = ["♣", "♠", "♥", "♦"];
let nipeDown = ["♣", "♠", "♥", "♦"];
let cardNumber = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "K",
  "Q",
  "J",
  "A"
];
let nipeUpElement = document.querySelector(".nipeUp");
let nipeDownElement = document.querySelector(".nipeDown");
let cardNumberElement = document.querySelector(".cardNumber");

const refreshCard = () => {
  let randomNipeIndex = Math.floor(Math.random() * nipeUp.length);
  let randomCardNumberIndex = Math.floor(Math.random() * cardNumber.length);

  nipeUpElement.textContent = nipeUp[randomNipeIndex];
  nipeDownElement.textContent = nipeDown[randomNipeIndex];
  cardNumberElement.textContent = cardNumber[randomCardNumberIndex];

  nipeUpElement.classList.remove("nipeRed");
  nipeDownElement.classList.remove("nipeRed");
  cardNumberElement.classList.remove("numberRed");

  if (nipeUpElement.textContent === "♥" || nipeUpElement.textContent === "♦") {
    nipeUpElement.classList.add("nipeRed");
    cardNumberElement.classList.add("numberRed");
  }
  if (
    nipeDownElement.textContent === "♥" ||
    nipeDownElement.textContent === "♦"
  ) {
    nipeDownElement.classList.add("nipeRed");
  }
};

window.onload = function() {
  let randomNipeIndex = Math.floor(Math.random() * nipeUp.length);
  let randomCardNumberIndex = Math.floor(Math.random() * cardNumber.length);

  nipeUpElement.textContent = nipeUp[randomNipeIndex];
  nipeDownElement.textContent = nipeDown[randomNipeIndex];
  cardNumberElement.textContent = cardNumber[randomCardNumberIndex];

  let widthInputCard = document.getElementById("width");
  let heightInputCard = document.getElementById("height");

  const applyCardDimensions = () => {
    let widthCard = widthInputCard.value;
    let heightCard = heightInputCard.value;

    cardNumberElement.style.width = widthCard + "px";
    cardNumberElement.style.height = heightCard + "px";
  };
  let button = document.querySelector(".btn").addEventListener("click", () => {
    applyCardDimensions();
    refreshCard();
  });
  setInterval(refreshCard, 2500);
};
