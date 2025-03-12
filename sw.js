

const displayTime = document.getElementById("count"); //h1
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

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
    
    let s ;
    if (seconds < 10) {
        s = "0" + seconds;
    } else {
        s = seconds;
    } 
    
    
    let m ;
    if (minutes < 10) {
        m = "0" + minutes;
    } else {
        m = minutes;
    }

    let h ;
    if (hours < 10) {
        h = "0" + hours;
    } else {
        h = hours;
    }
    // startBtn.innerHTML = timer === null ? "Start" : "Running"; ?
    displayTime.innerHTML = `${h}:${m}:${s}`;
}

function watchStart() {
    if (timer === null) { // Only start if not running
        timer = setInterval(stopwatch, 1000);
    }
}

function watchStop() {
    if (timer !== null) { // Only stop if running
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

// Event listeners
startBtn.addEventListener("click", watchStart);
stopBtn.addEventListener("click", watchStop);
resetBtn.addEventListener("click", watchReset);



console.log(seconds < 10 ? "0" + seconds: seconds);



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