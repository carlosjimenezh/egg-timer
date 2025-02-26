import {setupTimers} from "../eggTimer"
export default function timesDisplay () {
  document.querySelector('#display').innerHTML = `  
    <div id="times" class="times">
      <button data-time="1">1 minute</button>
      <button data-time="5">5 minutes</button>
      <button data-time="10">10 minutes</button>
      <button data-time="15">15 minutes</button>
    </div>
  `
setupTimers(document.querySelectorAll(".times button"));
}
