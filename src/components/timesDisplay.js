import {setupTimers} from "../eggTimer"
export default function timesDisplay () {
  document.querySelector('#display').innerHTML = `  
    <div id="times" class="times">
      <button data-time="1">1 minuto</button>
      <button data-time="5">5 minutos</button>
      <button data-time="10">10 minutos</button>
      <button data-time="15">15 minutos</button>
    </div>
  `
setupTimers(document.querySelectorAll(".times button"));
}
