function clockDisplay() {
    const date = new Date();
    let hrs = date.getHours(); // 0-23, no need for "hrs" parameter
    let min = date.getMinutes(); // 0-59, no need for "min" parameter
    let sec = date.getSeconds(); // 0-59, no need for "sec" parameter
    // let session = "AM";

    // Convert to 12-hour format
    // if (hrs === 0) {
    //     hrs = 12; // Midnight
    // } else if (hrs > 12) {
    //     hrs = hrs - 12;
    //     // session = "PM";
    // }

    // Add leading zeros
    hrs = hrs < 10 ? "0" + hrs : hrs;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    // Update individual display elements
    document.getElementById("hrs").textContent = hrs;
    document.getElementById("min").textContent = min;
    document.getElementById("sec").textContent = sec;
    
    // Optional: Add session indicator if you want to display AM/PM
    // For now, we'll skip it since your HTML doesn't have a place for it
    
    setTimeout(clockDisplay, 1000); // Call itself every second
}

// Start the clock
clockDisplay();






// console.log(currentTime.getHours());

// const hrsDisplay = document.getElementById("hrs");
// const minDisplay = document.getElementById("min");
// const secDisplay = document.getElementById("sec");
// const startBtn = document.getElementById("start");
// const stopBtn = document.getElementById("stop");
// const resetBtn = document.getElementById("reset");
// const lapBtn = document.getElementById("lap");
// const lapDisplay = document.getElementById("lapDisplay");

// let hours = 0;
// let minutes = 0;
// let seconds = 0;
// let timer = null;
// let isRunning = false;

// function updateDisplay() {
//     hrsDisplay.textContent = hours < 10 ? "0" + hours : hours;
//     minDisplay.textContent = minutes < 10 ? "0" + minutes : minutes;
//     secDisplay.textContent = seconds < 10 ? "0" + seconds : seconds;
// }

// function startTimer() {
//     if (!isRunning) {
//         isRunning = true;
//         timer = setInterval(() => {
//             seconds++;
//             if (seconds === 60) {
//                 seconds = 0;
//                 minutes++;
//             }
//             if (minutes === 60) {
//                 minutes = 0;
//                 hours++;
//             }
//             updateDisplay();
//         }, 1000);
//         startBtn.textContent = "Pause";
//     } else {
//         clearInterval(timer);
//         isRunning = false;
//         startBtn.textContent = "Start";
//     }
// }

// function stopTimer() {
//     if (isRunning) {
//         clearInterval(timer);
//         isRunning = false;
//         startBtn.textContent = "Start";
//     }
// }

// function resetTimer() {
//     clearInterval(timer);
//     isRunning = false;
//     hours = 0;
//     minutes = 0;
//     seconds = 0;
//     updateDisplay();
//     startBtn.textContent = "Start";
//     lapDisplay.innerHTML = "";
// }

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