import { colors } from "./colors.js";

const refs = {
  bodyLinkRef: document.querySelector("body"),
  btnStartRef: document.querySelector('[data-action = "start"]'),
  btnStopRef: document.querySelector('[data-action = "stop"]')
  }

let timerId;

function changeTheme() {
  timerId = setInterval(() => {
    refs.bodyLinkRef.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)]
  }, 1000);
  refs.btnStartRef.disabled = true;
} 
  
function stopChangeTheme() {
  clearInterval(timerId);
  refs.btnStartRef.disabled = false;

  }
  
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  
  
  refs.btnStartRef.addEventListener("click", changeTheme);
  refs.btnStopRef.addEventListener("click", stopChangeTheme);
  

  
  
  
