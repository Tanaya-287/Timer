let timerInterval;
let timeLeft = 0;

function startTimer() {
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateTimerDisplay();
            } else {
                clearInterval(timerInterval);
                timerInterval = null;
            }
        }, 1000); // Update every second
    }
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    stopTimer();
    timeLeft = 10; // Set your desired countdown time in seconds
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    const formattedTime = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
    document.getElementById('timer').textContent = formattedTime;
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Initial timer display
updateTimerDisplay();
