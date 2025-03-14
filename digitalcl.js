function clockDisplay() {
  const date = new Date();
  let hrs = date.getHours(); // 0-23,
  let min = date.getMinutes(); // 0-59,
  let sec = date.getSeconds(); // 0-59,
  let mode = "AM";

  if (hrs > 12) {
    mode = "PM";
  }

  if (hrs < 10) {
    hrs = "0" + hrs;
  } else {
    hrs = hrs;
  }
  if (min < 10) {
    min = "0" + min;
  } else {
    min = min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  } else {
    sec = sec;
  }

  document.getElementById("hrs").textContent = hrs;
  document.getElementById("min").textContent = min;
  document.getElementById("sec").textContent = sec;
  document.getElementById("mode").textContent = mode;
}

setInterval(clockDisplay, 1000);

const hrsDisplay = document.getElementById("hrs");
const minDisplay = document.getElementById("min");
const secDisplay = document.getElementById("sec");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const lapBtn = document.getElementById("lap");
const lapDisplay = document.getElementById("lapDisplay");

let hrs = 0;
let min = 0;
let sec = 0;
let timer = null;
let check = false;

// function updateDisplay() {
//   if (hrs < 10) {
//     hrs = "0" + hrs;
//   } else {
//     hrs = hrs;
//   }
// }

// function updateDisplay() {
//     hrsDisplay.textContent = hours < 10 ? "0" + hours : hours;
//     minDisplay.textContent = minutes < 10 ? "0" + minutes : minutes;
//     secDisplay.textContent = seconds < 10 ? "0" + seconds : seconds;
// }

function starTimer() {
  if (check) {
    check = true;
    timer = setInterval(() => {
      sec++;
      if (sec === 60) {
        sec = 0;
        min++;
      }
      if (min === 60) {
        min = 0;
        hrs++;
      }
      updateDisplay();
    }, 1000);

    startBtn.textContent = "Pause";
  } else {
    clearInterval(timer);
    check = false;
    startBtn.textContent = "Start";
  }
}

function stopTimer() {
  if (check) {
    clearInterval(timer);
    check = false;
    startBtn.textContent = "Start";
  }
}

function resetTimer() {
    clearInterval(timer);
    check = false;
    hrs = 0;
    min = 0;
    sec = 0;
    updateDisplay();
    startBtn.textContent = "Start";
    lapDisplay.innerHTML = "";
}

function recordLap() {
    if(check) {
        const lapTime = document.createElement("div");
        const timeTot =  
    }
}

// function recordLap() {
//     if (isRunning) {
//         const lapTime = document.createElement("div");
//         const time = `${hrsDisplay.textContent}:${minDisplay.textContent}:${secDisplay.textContent}`;
//         lapTime.textContent = `Lap ${lapDisplay.children.length + 1}: ${time}`;
//         lapDisplay.appendChild(lapTime);
//     }
// }

// // Event listeners
// startBtn.addEventListener("click", startTimer);
// stopBtn.addEventListener("click", stopTimer);
// resetBtn.addEventListener("click", resetTimer);
// lapBtn.addEventListener("click", recordLap);

// // Initial display
// updateDisplay();
