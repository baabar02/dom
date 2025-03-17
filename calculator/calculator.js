// const hourEl = document.getElementById("hours");
// const minutesEl = document.getElementById("minutes");

// const calcTime = () => {
//   let currentTime = new Date();
//   let currentHour = currentTime.getHours();
//   let currentMinutes = currentTime.getMinutes();
//   //   if (currentHour < 10) {
//   //     // hourEl.innerText = "0" + hourEl;
//   //   } else {
//   //     // hourEl.innerText = hourEl;
//   //   }

//   hourEl.textContent = currentHour.toString().padStart("2", 0);
//   minutesEl.textContent = currentMinutes.toString().padStart("2", 0);

//   setInterval(calcTime, 1000);
// };

// calcTime();

const numberBtns = document.getElementsByClassName("number");
const display = document.getElementById("display");
const plus1Btn = document.getElementById("plus1");
const minusBtn = document.getElementById("minus");
const multiplBtn = document.getElementById("multiple");
const divisioBtn = document.getElementById("division");
const equalBtn = document.getElementById("equal");

let operand1 = "";
let operand2 = "";
let operator = "";

console.log(numberBtns);

// numberBtns[0].addEventListener;
// for (let i = 0; i < 0; i  ) {}

// const handleClick = () => {
//   display.innerText += btn.innerText;
// };

for (const btn of numberBtns) {
  console.log(btn);
  btn.addEventListener("click", () => {
    display.innerText += btn.innerText;
  });
}

plus1Btn.addEventListener("click", () => {
  console.log(plus1Btn);
  operand1 = display.innerText;
  operator = "+";
  display.innerText = "";
  console.log(plus1Btn);
});

minusBtn.addEventListener("click", () => {});
console.log("clicked-minus");
operand1 = display.innerText;
operator = "-";
display.innerText = "";

equalBtn.addEventListener("click", () => {
  operand2 = display.innerText;
  let result = 0;
  if (operator === "+") {
    result = parseFloat(operand1) + parseFloat(operand2);
  } else if (operator === "-") {
    result = parseFloat(operand1) - parseFloat(operand2);
  }
  //   switch (operator) {
  //     case "+": {
  //       result = parseFloat(operand1) + parseFloat(operand2);
  //       break;
  //     }
  //     case "-": {
  //       result = parseFloat(operand1) - parseFloat(operand2);
  //       break;
  //     }
  //     default:
  //       console.log("operation not found");
  //   }

  display.innerText = result;
});
