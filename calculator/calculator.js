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
const plusBtn = document.getElementById("plus");  // Changed from plus1
const minusBtn = document.getElementById("minus");
const multiplBtn = document.getElementById("multiple");
const divisioBtn = document.getElementById("division");
const equalBtn = document.getElementById("equal");
const clearBtn = document.getElementById("clear");
const decimalBtn = document.getElementById("decimal");
const plusMinusBtn = document.getElementById("plus1");  // This is +/- in HTML

let operand1 = "";
let operand2 = "";
let operator = "";

// Number buttons
for (const btn of numberBtns) {
    btn.addEventListener("click", () => {
        display.innerText += btn.innerText;
    });
}

// Decimal button
decimalBtn.addEventListener("click", () => {
    if (!display.innerText.includes(".")) {
        display.innerText += ".";
    }
});

// Clear button
clearBtn.addEventListener("click", () => {
    operand1 = "";
    operand2 = "";
    operator = "";
    display.innerText = "";
});

// Plus/Minus toggle
plusMinusBtn.addEventListener("click", () => {
    if (display.innerText) {
        if (display.innerText.startsWith("-")) {
            display.innerText = display.innerText.slice(1);
        } else {
            display.innerText = "-" + display.innerText;
        }
    }
});

// Plus button
plusBtn.addEventListener("click", () => {
    operand1 = display.innerText;
    operator = "+";
    display.innerText = "";
});

// Minus button (Note: In HTML it's shown as %, might want to fix that)
minusBtn.addEventListener("click", () => {
    operand1 = display.innerText;
    operator = "-";
    display.innerText = "";
});

// Multiplication button
multiplBtn.addEventListener("click", () => {
    operand1 = display.innerText;
    operator = "*";
    display.innerText = "";
});

// Division button
divisioBtn.addEventListener("click", () => {
    operand1 = display.innerText;
    operator = "/";
    display.innerText = "";
});

// Equal button
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
