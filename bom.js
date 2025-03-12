console.log("BOM");

const hevleh = () => {
  console.log("hello");
};

let counter = 0;
let timerId = 0;
let check = true;
// setTimeout(hevleh, 5000);

// setInterval(hevleh, 5000);

const countDisplay = document.getElementById("count");
const btnStart = document.getElementById("start");
const btnStop = document.getElementById("stop");

const countStart = () => {
  console.log("start");
  if (check) {
    timerId = setInterval(() => {
      counter++;
      display();
    }, 1000);
  }
  console.log(timerId);
  check = false;
};

const countStop = () => {
  console.log("stop");
  clearInterval(timerId);
  check = true;
};

const display = () => {
  countDisplay.innerText = counter;
};
display();

btnStart.addEventListener("click", countStart);
btnStop.addEventListener("click", countStop);
