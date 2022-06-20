var totalsec = 2400;

function changeValue() {
    var sec = totalsec-(value++);
    document.getElementById("timer_clock").innerHTML =  convertHMS(sec);
    if (sec < 60) {
        document.getElementById("timer_clock").style.color = 'red';        
        document.getElementById("timer_clock").style.backgroundColor = 'var(--color_white)';        
        document.getElementById("timer_clock").style.borderColor = 'var(--sub-color)';
    }
    if (sec < 0) {
        document.getElementById("timer_clock").innerHTML =  'Час вийшов';
        document.getElementById("submit").click();
        alert('Час вийшов!\nТестовий бал: '+point+'\nБал за шкалою 100-200: '+mark100200);
    }
}

function convertHMS(value) {
    const sec = parseInt(value, 10); // convert value to number if it's string
    let hours   = Math.floor(sec / 3600); // get hours
    let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
    let seconds = sec - (hours * 3600) - (minutes * 60); //  get seconds
    // add 0 if value < 10; Example: 2 => 02
    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return minutes+':'+seconds; // Return is HH : MM : SS
}
  
var timerInterval = null;

window.onload = function() {
    value = 0;
    timerInterval = setInterval(changeValue, 1000);  
};

var stop = function() {
    clearInterval(timerInterval);
}
