let hours = 0;
let minutes = 0;
let seconds = 0;
let lapTimes = [];

const stopwatchElement = document.querySelector('.stopwatch');
const startBtn = document.querySelector('#start-btn');
const pauseBtn = document.querySelector('#pause-btn');
const resetBtn = document.querySelector('#reset-btn');
const lapBtn = document.querySelector('#lap-btn');
const lapTimesElement = document.querySelector('#lap-times');

startBtn.addEventListener('click', startStopwatch);
pauseBtn.addEventListener('click', pauseStopwatch);
resetBtn.addEventListener('click', resetStopwatch);
lapBtn.addEventListener('click', addLapTime);

function startStopwatch() {
 intervalId = setInterval(() => {
  seconds++;
  if (seconds === 60) {
   seconds = 0;
   minutes++;
   if (minutes === 60) {
    minutes = 0;
    hours++;
   }
  }
  updateStopwatch();
 }, 1000);
}

function pauseStopwatch() {
 clearInterval(intervalId);
}

function resetStopwatch() {
 hours = 0;
 minutes = 0;
 seconds = 0;
 lapTimes = [];
 updateStopwatch();
}

function addLapTime() {
 const lapTime = `${hours}:${minutes}:${seconds}`;
 lapTimes.push(lapTime);
 updateLapTimes();
}

function updateStopwatch() {
 stopwatchElement.innerHTML = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
}

function updateLapTimes() {
 lapTimesElement.innerHTML = '';
 lapTimes.forEach((lapTime, index) => {
  const lapTimeElement = document.createElement('li');
  lapTimeElement.textContent = `Lap ${index + 1}: ${lapTime}`;
  lapTimesElement.appendChild(lapTimeElement);
 });
}

function padZero(time) {
 return (time < 10 ? '0' : '') + time;
}
