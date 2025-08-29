// // shift to css
let buttons = document.querySelectorAll('.basic_buttons');
buttons.forEach((button) => {
  button.addEventListener('mouseover', () => {
    button.style.background = 'red';
  });

  button.addEventListener('mouseout', () => {
    button.style.background = 'tomato';
  });
});

let hours = 0;
let minutes = 0;
let seconds = 0;
let timer = null;
let isRunning = false;

// Get DOM elements
const hrsElement = document.querySelector('#hrs span');
const minsElement = document.querySelector('#mins span');
const secsElement = document.querySelector('#secs span');

// Get buttons
const startBtn = document.getElementById('start_button');
const stopBtn = document.getElementById('stop_button');
const resetBtn = document.getElementById('reset_button');

// Function to update stopwatch display
function updateDisplay() {
  hrsElement.textContent = hours.toString().padStart(2, '0');
  minsElement.textContent = minutes.toString().padStart(2, '0');
  secsElement.textContent = seconds.toString().padStart(2, '0');
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

function animateContainer() {
  const container = document.querySelector('.container-stopwatch');
  container.style.transform = 'scale(1.05)';
  setTimeout(() => {
    container.style.transform = 'scale(1)';
  }, 100);
}

// Start function: gets invoked whenever start button is pressed
async function startTimer() {
  if (isRunning) return;
  timer = setInterval(tick, 1000);
  isRunning = true;
  animateContainer();
}

// Stop function: gets invoked whenever stopped button is pressed
function stopTimer() {
  if(!isRunning) return
  clearInterval(timer);
  isRunning = false;
  animateContainer();
}

// Reset function: gets invoked whenever reset button is pressed
function resetTimer() {
  animateContainer();
  stopTimer();
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateDisplay();
}

// Event listeners
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

// Initialize display
updateDisplay();

// adding the space bar effect
window.addEventListener('keydown', function (event) {
  if (event.key == ' ') {
    if (isRunning) {
      stopTimer();
    } else {
      startTimer();
    }
  }
});



function fetchQuotes(){
  let ind = Math.floor(Math.random() * size)
  let quote= quotes[ind]
  document.querySelector("div span").textContent = quotes[ind];
}

fetchQuotes();


const changeTheme = document.getElementById("toggleBtn")

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
}

// Toggle theme on button click
changeTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    // Save current theme to localStorage, so that the previous theme is persisted on reload
    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
    // this is if else block stores a values("dark"/"light") for the field "theme"
    // whenever the page is reloaded if the value is dark, then dark theme is applied
});
