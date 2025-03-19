const blueBtn = document.getElementById("blue");
const redBtn = document.getElementById("red");
const resetBtn = document.getElementById("reset");
const scoreBlue = document.getElementById("s1");
const scoreRed = document.getElementById("s2");
const winner1 = document.getElementById("winner1");
const winner2 = document.getElementById("winner2");

const pizzaHiih = () => {
  console.log("pizza");

  return "🍕";
};

const pizza = pizzaHiih();
console.log(pizza);

const isEndGame = () => {
  return scoreBlue.innerText === "90" || scoreRed.innerText === "90";
};

const blueScore = (e) => {
  if (isEndGame()) {
    return;
  }
  if (scoreBlue.innerText < 100 && e.key === "d") {
    scoreBlue.innerText = parseInt(scoreBlue.innerText) + 5;
    scoreRed.innerText = parseInt(scoreRed.innerText) - 5;

    blueBtn.style.width = `${scoreBlue.innerText}%`;
    redBtn.style.width = `${scoreRed.innerText}%`;
  }
  winnerBlue();
};

const redScore = (e) => {
  if (isEndGame()) {
    return;
  }
  if (scoreRed.innerText < 100 && e.key === "k") {
    scoreRed.innerText = parseInt(scoreRed.innerText) + 5;
    scoreBlue.innerText = parseInt(scoreBlue.innerText) - 5;

    redBtn.style.width = `${scoreRed.innerText}%`;
    blueBtn.style.width = `${scoreBlue.innerText}%`;
  }

  winnerRed();
};

const resetGame = () => {
  scoreBlue.innerText = 50;
  scoreRed.innerText = 50;
  blueBtn.style.width = `${50}%`;
  redBtn.style.width = `${50}%`;
  winner1.innerText = "";
  winner2.innerText = "";
};

document.addEventListener("keypress", blueScore);
document.addEventListener("keypress", redScore);
resetBtn.addEventListener("click", resetGame);

const winnerBlue = () => {
  if (scoreBlue.innerText === "90") {
    winner1.style.display = "block";
  }
};

const winnerRed = () => {
  if (scoreRed.innerText === "90") {
    winner2.style.display = "block";
  }
};
