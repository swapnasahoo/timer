let time = 0;

// CONTROL ELEMENTS
const increaseTimer = document.querySelector('.increase-timer');
const decreaseTimer = document.querySelector('.decrease-timer');
const startTimerBtn = document.querySelector('#start-btn');
const stopTimerBtn = document.querySelector('#stop-btn');
const resetTimerBtn = document.querySelector('#reset-btn');
let timeInterval;

const alarmSound = document.querySelector('.alarm-sound');

// DISPLAY ELEMENTS
const timerDisplay = document.querySelector('.timer-display');
const hoursDisplay = document.querySelector('.hours');
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');

// EVENT LISTENERS
hoursDisplay.addEventListener('wheel', scrollHours);
minutesDisplay.addEventListener('wheel', scrollMinutes);
secondsDisplay.addEventListener('wheel', scrollSeconds);

increaseTimer.addEventListener('click', () => {
  time += 1;
  renderTime();
});

decreaseTimer.addEventListener('click', () => {
  if (time - 1 < 0) {
    time = 0;
  } else {
    time -= 1;
    renderTime();
  }
});

function renderTime() {
  const h = Math.floor(time / 3600)
    .toString()
    .padStart(2, '0');
  const m = Math.floor((time % 3600) / 60)
    .toString()
    .padStart(2, '0');
  const s = Math.floor(time % 60)
    .toString()
    .padStart(2, '0');

  hoursDisplay.innerHTML = h;
  minutesDisplay.innerHTML = m;
  secondsDisplay.innerHTML = s;
}

function startTimer() {
  timeInterval = setInterval(() => {
    if (time <= 0) {
      stopTimer();
      alarmSound.play();
    } else {
      time -= 1;
      hoursDisplay.removeEventListener('wheel', scrollHours);
      minutesDisplay.removeEventListener('wheel', scrollMinutes);
      secondsDisplay.removeEventListener('wheel', scrollSeconds);
      renderTime();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timeInterval);
  hoursDisplay.addEventListener('wheel', scrollHours);
  minutesDisplay.addEventListener('wheel', scrollMinutes);
  secondsDisplay.addEventListener('wheel', scrollSeconds);
}

function resetTimer() {
  stopTimer();
  time = 0;
  renderTime();
}

startTimerBtn.addEventListener('click', () => {
  startTimer();
});

stopTimerBtn.addEventListener('click', () => {
  stopTimer();
});

resetTimerBtn.addEventListener('click', () => {
  resetTimer();
});

// QUICK TIMERS
document.querySelectorAll('.quick-timer').forEach((button) => {
  button.addEventListener('click', () => {
    const quickTime = Number(button.dataset.time);
    time = quickTime;
    renderTime();
  });
});

// SCROLL TO UPDATE TIME
function updateTimeOnScroll(e, timeInSeconds) {
  if (e.deltaY < 0) {
    time += timeInSeconds;
    renderTime();
  } else if (e.deltaY > 0) {
    if (time - 1 < 0) {
      time = 0;
    } else {
      time -= timeInSeconds;
      renderTime();
    }
  }
}

function scrollHours(e) {
  updateTimeOnScroll(e, 3600);
}

function scrollMinutes(e) {
  updateTimeOnScroll(e, 60);
}

function scrollSeconds(e) {
  updateTimeOnScroll(e, 1);
}
