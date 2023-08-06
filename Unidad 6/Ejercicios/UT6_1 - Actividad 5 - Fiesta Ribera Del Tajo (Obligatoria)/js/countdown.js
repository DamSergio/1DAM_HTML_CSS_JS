//Countdown
const calcular = () => {
    let currentDate = new Date().getTime();
    let timeLeft = COUNTDOWN_DATE - currentDate;

    if (timeLeft <= 0){
        clearInterval(countDown);
        return;
    }
    
    const ONE_SECOND = 1000;
    const SECONDS_IN_A_MINUTE = 60;
    const MINUTES_IN_A_HOUR = 60;
    const HOURS_IN_A_DAY = 24
    
    const MILISECONDS_DAY = ONE_SECOND * SECONDS_IN_A_MINUTE * MINUTES_IN_A_HOUR * HOURS_IN_A_DAY;
    const MILISECONDS_HOUR = ONE_SECOND * SECONDS_IN_A_MINUTE * MINUTES_IN_A_HOUR;
    const MILISECONDS_MINUTE = ONE_SECOND * SECONDS_IN_A_MINUTE;
    
    let days = Math.floor(timeLeft / MILISECONDS_DAY);
    let hours = Math.floor((timeLeft % MILISECONDS_DAY) / MILISECONDS_HOUR);
    let minutes = Math.floor((timeLeft % MILISECONDS_HOUR) / MILISECONDS_MINUTE);
    let seconds = Math.floor((timeLeft % MILISECONDS_MINUTE) / ONE_SECOND);
    
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
};

const COUNTDOWN_DATE = new Date("Aug 28, 2023 00:00:00").getTime();
let countDown;
calcular();

countDown = setInterval(() => {
    calcular();
}, 1000);
