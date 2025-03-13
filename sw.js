const displayTime = document.getElementById("count"); //h1
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const lapBtn = document.getElementById("lap");

let hours = 0;
let minutes = 0;
let seconds = 0;
let timer = null;

function stopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  let s;
  if (seconds < 10) {
    s = "0" + seconds;
  } else {
    s = seconds;
  }

  let m;
  if (minutes < 10) {
    m = "0" + minutes;
  } else {
    m = minutes;
  }

  let h;
  if (hours < 10) {
    h = "0" + hours;
  } else {
    h = hours;
  }

  displayTime.innerHTML = `${h}:${m}:${s}`;
}

function watchStart() {
  if (timer === null) {
    timer = setInterval(stopwatch, 1000);
    startBtn.innerHTML = "Stop";
  } else {
    clearInterval(timer);
    timer = null;
    startBtn.innerHTML = "Start";
    // startBtn.style.backgroundColor();
  }
}

function watchStop() {
  if (timer !== null) {
    // Only stop if running
    clearInterval(timer);
    timer = null;
  }
}

function watchReset() {
  clearInterval(timer);
  timer = null;
  hours = 0;
  minutes = 0;
  seconds = 0;
  displayTime.innerHTML = "00:00:00";
}
const lapDisplay = document.createElement("lap1");

// function watchLap() {
//   console.log(timer);
//   const lapDisplay = document.createElement("div");
//   const lap = document.createElement("h15");
//   const lap1 = document.createElement("h");
//   lap.innerText = "lap";
//   lap1.innerText = "00:00:00";
//   lapDisplay.appendChild(h15);
//   lapDisplay.appendChild(h);

//   lapDisplay.innerHTML = `${h}:${m}:${s}`;
// }

const time = new Date();
console.log("time:", time.getDate());
console.log("time:", time.getHours());
console.log("time:", time.getMonth());

// const formattedTime = (num) => {
//   seconds++;
//   if (seconds === 60) {
//     seconds = 0;
//     minutes++;
//     if (minutes === 60) {
//       minutes = 0;
//       hours++;
//     }
//   }

//   let s;
//   if (seconds < 10) {
//     s = "0" + seconds;
//   } else {
//     s = seconds;
//   }
// };

// displayTime.innerText = `00:00:${seconds.toString().padStart(2,"0")}`

// function watchStart() {
//   //   if (timer === null) {
//   //     timer = setInterval(stopwatch, 1000);
//   //     timer = null;
//   //   }
//   //   if (timer !== null) {
//   //     timer = clearInterval(timer);
//   //   }

//   if (timer === null) {
//     startBtn.innerHTML = "Start";
//   } else {
//     timer = "Stop";
//   }
// }

// Event listeners
startBtn.addEventListener("click", watchStart);
stopBtn.addEventListener("click", watchStop);
resetBtn.addEventListener("click", watchReset);
lapBtn.addEventListener("click", watchLap);

// startBtn.innerHTML = timer === null ? "Start" : "Running";
// console.log(seconds < 10 ? "0" + seconds : seconds);

// function watchStop() {

//     if (timerId!== null) {
//         clearInterval(timerId);
//     }
//     timerId = setInterval(stopWatch, 1000);
// }

// const watchStart = () => {
// console.log("start");
// timerId = setInterval(() => {
//     seconds++;
//     if ( seconds === 60) {
//         seconds = 0;
//         minutes++;
//         if (minutes === 60){
//             minutes = 0;
//             hours++;
//         }
//         // stopWatch (); 1000;
//     }
//     })

//     const stopWatch = () => {
//     countDisplay.innerHTML = hours + " " + minutes + " " + seconds;
//     };
//     stopWatch();
// }

// let h = hours < 10 ? "0" + hours: hours;
// let m = minutes < 10 ? "0" + minutes: minutes;
// let s = seconds < 10 ? "0" + seconds: seconds;
