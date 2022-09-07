const startingMinutes = 1;
let time = startingMinutes * 60;

const countdownEl = document.getElementById("countdown");

setInterval(updateCountdown, 1000);

function updateCountdown() {
var minutes = Math.floor(time / 60);
var seconds = time % 60;
if(time>=0){
    seconds = seconds < 10 ? '0' + seconds: seconds;
    minutes = minutes < 10 ? '0' + minutes: minutes;
    
    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
    console.log(`${minutes}:${seconds}`);
}
else{
    console.log("Sorry You Have to Die")
    document.getElementById("explode").style.display = 'block';
}
}