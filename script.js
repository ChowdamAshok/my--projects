let timer;

function startTimer() {
    let hours = parseInt(prompt("Enter hours:"));
    let minutes = parseInt(prompt("Enter minutes:"));
    let seconds = parseInt(prompt("Enter seconds:"));

    if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
        alert("Please enter valid numbers for hours, minutes, and seconds.");
        return;
    }

    let totalSeconds = hours * 3600 + minutes * 60 + seconds;

    timer = setInterval(function() {
        totalSeconds--;
        if (totalSeconds < 0) {
            clearInterval(timer);
            alert("Time's up!");
        } else {
            let hoursLeft = Math.floor(totalSeconds / 3600);
            let minutesLeft = Math.floor((totalSeconds % 3600) / 60);
            let secondsLeft = totalSeconds % 60;

            document.getElementById("hours").innerText = formatTime(hoursLeft);
            document.getElementById("minutes").innerText = formatTime(minutesLeft);
            document.getElementById("seconds").innerText = formatTime(secondsLeft);
        }
    }, 1000);
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

document.getElementById("startTimerBtn").addEventListener("click", startTimer);
