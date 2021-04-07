const hoursPointer = document.getElementById("hours")
const minutesPointer = document.getElementById("minutes");
const secondsPointer = document.getElementById("seconds");

const today = new Date()

let hours = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();

hoursPointer.style.transform = `rotateZ(${(hours * 30) + (minutes * 6 * 60 * 12)}deg)`
minutesPointer.style.transform = `rotateZ(${(minutes * 6) + (seconds * 6 * 60)}deg)`
secondsPointer.style.transform = `rotateZ(${seconds * 6}deg)`

let time = setInterval(() => {
    seconds++;

    if(seconds === 60){
        seconds = 0;
        minutes++;

        if(minutes === 60){
            minutes = 0;

            hours++;

            if(hours === 12){
                hours = 0;
                minutes = 0;
                seconds = 0;
            }
        }
    }

    hoursPointer.style.transform = `rotateZ(${(hours * 30) + (minutes * 6 * 60 * 12)}deg)`
    minutesPointer.style.transform = `rotateZ(${(minutes * 6) + (seconds * 6 * 60)}deg)`
    secondsPointer.style.transform = `rotateZ(${seconds * 6}deg)`
}, 1000)