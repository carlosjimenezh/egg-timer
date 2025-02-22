import timesDisplay from "./timesDisplay"

export default function timeFinished () {
  document.querySelector("#display").innerHTML  = `
    <h3>Time finished</h3>
    <button id="cook-again">Cook again</button>
  `
  document.querySelector("#cook-again")?.addEventListener('click', () => {
    timesDisplay()
  })
}
