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
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const multiplBtn = document.getElementById("multiple");
const divisionBtn = document.getElementById("division");
const equalBtn = document.getElementById("equal");
const clearBtn = document.getElementById("clear");
const decimalBtn = document.getElementById("decimal");
const plusMinusBtn = document.getElementById("plus1");
const percentBtn = document.getElementById("percent");

let operand1 = "";
let operand2 = "";
let operator = "";

for (const btn of numberBtns) {
  btn.addEventListener("click", () => {
    display.innerText += btn.innerText;
  });
}

decimalBtn.addEventListener("click", () => {
  if (!display.innerText.includes(".")) {
    display.innerText += ".";
  }
});

clearBtn.addEventListener("click", () => {
  operand1 = "";
  operand2 = "";
  operator = "";
  display.innerText = "";
});

plusMinusBtn.addEventListener("click", () => {
  if (display.innerText) {
    if (display.innerText.startsWith("-")) {
      display.innerText = display.innerText.slice(1);
    } else {
      display.innerText = "-" + display.innerText;
    }
  }
});

plusBtn.addEventListener("click", () => {
  if (display.innerText) {
    operand1 = display.innerText;
    operator = "+";
    display.innerText = "";
  } else if ((operand2 = display.innerText)) {
    let result = 0;
    switch (operator) {
      case "+":
        result = parseFloat(operand1) + parseFloat(operand2);
        break;
    }
  }
});

minusBtn.addEventListener("click", () => {
  operand1 = display.innerText;
  operator = "-";
  display.innerText = "";
});

multiplBtn.addEventListener("click", () => {
  operand1 = display.innerText;
  operator = "*";
  display.innerText = "";
});

divisionBtn.addEventListener("click", () => {
  operand1 = display.innerText;
  operator = "/";
  display.innerText = "";
});

percentBtn.addEventListener("click", () => {
  operand1 = display.innerText;
  operator = "%";
  display.innerText = "";
});

equalBtn.addEventListener("click", () => {
  operand2 = display.innerText;
  let result = 0;

  switch (operator) {
    case "+":
      result = parseFloat(operand1) + parseFloat(operand2);
      break;
    case "-":
      result = parseFloat(operand1) - parseFloat(operand2);
      break;
    case "*":
      result = parseFloat(operand1) * parseFloat(operand2);
      break;
    case "/":
      if (parseFloat(operand2) === 0) {
        result = "Error: Division by zero";
      } else {
        result = parseFloat(operand1) / parseFloat(operand2);
      }
      break;
    default:
      result = "Error: Invalid operator";
  }

  display.innerText = result;
});
