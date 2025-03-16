
const hourEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');


const calcTime = () => {

    let currentTime = new Date ();
    let currentHour = currentTime.getHours ();
    let currentMinutes = currentTime.getMinutes ();
    if (currentHour < 10) {
        hourEl = "0" + hourEl; 
    } else {
        hourEl = hourEl;
        
    }
    hourEl.textContent = currentHour.toString();
    minutesEl.textContent = currentMinutes.toString();

    setInterval (calcTime, 1000);
}
calcTime();