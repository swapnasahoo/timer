let time = 0;

const increaseTimer = document.querySelector('.increase-timer');
const decreaseTimer = document.querySelector('.decrease-timer');
const startTimerBtn = document.querySelector('#start-btn');
const stopTimerBtn = document.querySelector('#stop-btn');
const resetTimerBtn = document.querySelector('#reset-btn');
let timeInterval;

const alarmSound = document.querySelector('.alarm-sound');

const timerDisplay = document.querySelector('.timer-display');

timerDisplay.addEventListener('wheel', updateTimeOnScroll);

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

  timerDisplay.innerHTML = `${h}:${m}:${s}`;
}

function startTimer() {
  timeInterval = setInterval(() => {
    if (time - 1 < 0) {
      stopTimer();
      alarmSound.play();
    } else {
      time -= 1;
      timerDisplay.removeEventListener('wheel', updateTimeOnScroll);
      renderTime();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timeInterval);
  timerDisplay.addEventListener('wheel', updateTimeOnScroll);
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
function updateTimeOnScroll(e) {
  if (e.deltaY < 0) {
    time += 1;
    renderTime();
  } else if (e.deltaY > 0) {
    if (time - 1 < 0) {
      time = 0;
    } else {
      time -= 1;
      renderTime();
    }
  }
}
