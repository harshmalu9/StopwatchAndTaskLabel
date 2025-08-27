// // shift to css
let buttons = document.querySelectorAll(".basic_buttons")

buttons.forEach(button => {
    button.addEventListener("mouseover", () => {
        button.style.background = "red"
    })

    button.addEventListener("mouseout", () => {
        button.style.background = "tomato"
    })
})


let hours = 0;
let minutes = 0;
let seconds = 0;
let timer = null;
let isRunning = false;

// Get DOM elements
const hrsElement = document.querySelector("#hrs span");
const minsElement = document.querySelector("#mins span");
const secsElement = document.querySelector("#secs span");

// Get buttons
const startBtn = document.getElementById("start_button");
const stopBtn = document.getElementById("stop_button");
const resetBtn = document.getElementById("reset_button");

// Function to update stopwatch display
function updateDisplay() {
    hrsElement.textContent = hours.toString().padStart(2, "0");
    minsElement.textContent = minutes.toString().padStart(2, "0");
    secsElement.textContent = seconds.toString().padStart(2, "0");
}

// Stopwatch tick: gets invoked after every second, by setInterval in the startTimer method
function tick() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }
    updateDisplay();
}

// Start function: gets invoked whenever start button is pressed
function startTimer() {
    if (!isRunning) {
        timer = setInterval(tick, 1000);
        isRunning = true;
    }
}

// Stop function: gets invoked whenever stopped button is pressed
function stopTimer() {
    clearInterval(timer);
    isRunning = false;
}

// Reset function: gets invoked whenever reset button is pressed
function resetTimer() {
    stopTimer();
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateDisplay();
}

// Event listeners
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

// Initialize display
updateDisplay();



