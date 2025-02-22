import "./style.css";
import  timesDisplay  from "./components/timesDisplay.js"

document.querySelector("#app").innerHTML = `
  <div>
    <h1>Egg Timer 🥚</h1>
    <div id="display"></div>
  </div>
`;

timesDisplay()

