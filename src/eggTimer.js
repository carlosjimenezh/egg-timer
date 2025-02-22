let timerInterval;
export function setupTimers(elements) {
  console.log(elements);
  elements.forEach((element) => {
    element.addEventListener("click", (e) => {
      const time = e.target.dataset.time;
      if (time) {
        startTimer(time);
      }
    });
  });
}

function startTimer(duration) {
  let timerLeft = duration * 60;
  clearInterval(timerInterval);
  const times = document.querySelector("#times");
  if (times) {
    times.innerHTML = `
      <div>
        <span id="timer-display">00:00</span>
        <button id="timer-stop">stop</button>
      </div>
    `;
    updateDisplay(timerLeft);
    timerInterval = setInterval(() => {
      timerLeft--;
      if (timerLeft >= 0) {
        updateDisplay(timerLeft);
      }
    }, 1000);
    document.querySelector("#timer-stop").addEventListener("click", timerStop);
  }
}

function updateDisplay(timerLeft) {
  const timerDisplay = document.querySelector("#timer-display");
  if (timerDisplay) {
    const minutes = Math.floor(timerLeft / 60);
    const seconds = timerLeft % 60;
    timerDisplay.textContent = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  }
}

function timerStop() {
  clearInterval(timerInterval);
  // hacer que el botón funcione para seguir con el conteo
}
