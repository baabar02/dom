// const displayTime = document.getElementById("count"); //h1
// const startBtn = document.getElementById("start");
// const stopBtn = document.getElementById("stop");
// const resetBtn = document.getElementById("reset");
// const lapBtn = document.getElementById("lap");

// let hours = 0;
// let minutes = 0;
// let seconds = 0;
// let timer = null;
// let isRunning = false;

// function stopwatch() {
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

//   let m;
//   if (minutes < 10) {
//     m = "0" + minutes;
//   } else {
//     m = minutes;
//   }

//   let h;
//   if (hours < 10) {
//     h = "0" + hours;
//   } else {
//     h = hours;
//   }

//   displayTime.innerHTML = `${h}:${m}:${s}`;
// }

// function watchStart() {
//   if (timer === null) {
//     timer = setInterval(stopwatch, 1000);
//     startBtn.innerHTML = "Stop";
//   } else {
//     clearInterval(timer);
//     timer = null;
//     startBtn.innerHTML = "Start";
//     // startBtn.style.backgroundColor();
//   }
// }

// function watchStop() {
//   if (timer !== null) {
//     clearInterval(timer);
//     timer = null;
//   }
// }

// function watchReset() {
//   clearInterval(timer);
//   timer = null;
//   hours = 0;
//   minutes = 0;
//   seconds = 0;
//   displayTime.innerHTML = "00:00:00";
// }
// // const lapDisplay = document.createElement("lap1");


// function watchLap() {
//     if (isRunning) { 
//         const lapTime = document.createElement("div");
//         lapTime.className = "lap-time";  
        
//         let s = seconds < 10 ? "0" + seconds : seconds;
//         let m = minutes < 10 ? "0" + minutes : minutes;
//         let h = hours < 10 ? "0" + hours : hours;
        
//         const formattedTime = `${h}:${m}:${s}`;
//         lapTime.textContent = `Lap ${lapDisplay.children.length}: ${formattedTime}`;
//         lapDisplay.appendChild(lapTime);
//     }   
// }


// startBtn.addEventListener("click", watchStart);
// stopBtn.addEventListener("click", watchStop);
// resetBtn.addEventListener("click", watchReset);
// lapBtn.addEventListener("click", watchLap);


const displayTime = document.getElementById("count"); // h1
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const lapBtn = document.getElementById("lap");
const lapDisplay = document.getElementById("lapDisplay");

let hours = 0;
let minutes = 0;
let seconds = 0;
let timer = null;
let isRunning = false; 

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

    let s = seconds < 10 ? "0" + seconds : seconds;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let h = hours < 10 ? "0" + hours : hours;

    displayTime.innerHTML = `${h}:${m}:${s}`;
}

function watchStart() {
    if (timer === null) {
        timer = setInterval(stopwatch, 1000);
        startBtn.innerHTML = "Stop";
        isRunning = true;  
    } else {
        clearInterval(timer);
        timer = null;
        startBtn.innerHTML = "Start";
        isRunning = false;  
    }
}

function watchStop() {
    if (timer !== null) {
        clearInterval(timer);
        timer = null;
        isRunning = false;  
        startBtn.innerHTML = "Start";  
    }
}

function watchReset() {
    clearInterval(timer);
    timer = null;
    hours = 0;
    minutes = 0;
    seconds = 0;
    displayTime.innerHTML = "00:00:00";
    isRunning = false;  
    startBtn.innerHTML = "Start";  
   
    while (lapDisplay.children.length > 1) {  
        lapDisplay.removeChild(lapDisplay.lastChild);
    }
}

function watchLap() {
    if (isRunning) { 
        const lapTime = document.createElement("div");
        lapTime.className = "lap-time";  
        
        let s = seconds < 10 ? "0" + seconds : seconds;
        let m = minutes < 10 ? "0" + minutes : minutes;
        let h = hours < 10 ? "0" + hours : hours;
        
        const formattedTime = `${h}:${m}:${s}`;
        lapTime.textContent = `Lap ${lapDisplay.children.length}: ${formattedTime}`;
        lapDisplay.appendChild(lapTime);
    }   
}

startBtn.addEventListener("click", watchStart);
stopBtn.addEventListener("click", watchStop);
resetBtn.addEventListener("click", watchReset);
lapBtn.addEventListener("click", watchLap);


