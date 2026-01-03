let dayEl = document.getElementById("day");
let hourEl = document.getElementById("hour");
let minuteEl = document.getElementById("minute");
let secondEl = document.getElementById("second");

let newYearTime = new Date("Jan 1, 2027 00:00:00").getTime();

updateCountdown();

function updateCountdown() {
  let now = new Date().getTime(); 
  let gap = newYearTime - now;
  
  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  let day = hour * 24;

  let d = Math.floor(gap / day);
  let h = Math.floor((gap % day) / hour);
  let m = Math.floor((gap % hour) / minute);
  let s = Math.floor((gap % minute) / second);
  dayEl.innerText = d;
  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  setTimeout(updateCountdown, 1000)
}