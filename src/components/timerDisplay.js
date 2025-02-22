export default function timerDisplay() {
  document.querySelector('#display').innerHTML = `
      <div>
        <span id="timer-display">00:00</span>
        <button id="timer-stop">stop</button>
      </div>`
}
