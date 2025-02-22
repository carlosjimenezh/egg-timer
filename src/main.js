import "./style.css";
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from "./counter.js";
import { setupTimers } from "./eggTimer.js";

document.querySelector("#app").innerHTML = `
  <div>
    <h1>Egg Timer</h1>
    <div id="times" class="times">
      <button data-time="1">1 minuto</button>
      <button data-time="5">5 minutos</button>
      <button data-time="10">10 minutos</button>
      <button data-time="15">15 minutos</button>
    </div>
  </div>
`;

setupTimers(document.querySelectorAll(".times button"));
