(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();function l(){var i;document.querySelector("#display").innerHTML=`
    <h3>Time finished</h3>
    <button id="cook-again">Cook again</button>
  `,(i=document.querySelector("#cook-again"))==null||i.addEventListener("click",()=>{a()})}function m(){document.querySelector("#display").innerHTML=`
      <div>
        <span id="timer-display">00:00</span>
        <button id="timer-stop">stop</button>
      </div>`}let c;function f(i){i.forEach(t=>{t.addEventListener("click",r=>{const o=r.target.dataset.time;o&&p(o)})})}function p(i){let t=i*60;clearInterval(c),document.querySelector("#display")&&(m(),u(t),c=setInterval(()=>{t--,t>=0&&u(t)},1e3),document.querySelector("#timer-stop").addEventListener("click",y))}function u(i){const t=document.querySelector("#timer-display");if(t){const r=Math.floor(i/60),o=i%60;t.textContent=`${r<10?"0"+r:r}:${o<10?"0"+o:o}`,i===0&&d()}}function d(){l()}function y(){clearInterval(c),d()}function a(){document.querySelector("#display").innerHTML=`  
    <div id="times" class="times">
      <button data-time="1">1 minute</button>
      <button data-time="5">5 minutes</button>
      <button data-time="10">10 minutes</button>
      <button data-time="15">15 minutes</button>
    </div>
  `,f(document.querySelectorAll(".times button"))}document.querySelector("#app").innerHTML=`
  <div>
    <h1>Egg Timer 🥚</h1>
    <div id="display"></div>
  </div>
`;a();
