let time = 0;

const increaseTimer = document.querySelector('.increase-timer');
const decreaseTimer = document.querySelector('.decrease-timer');
const startTimerBtn = document.querySelector('#start-btn');
const stopTimerBtn = document.querySelector('#stop-btn');
const resetTimerBtn = document.querySelector('#reset-btn');

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

  document.querySelector('.timer-display').innerHTML = `${h}:${m}:${s}`;
}

function startTimer() {
  const timeInterval = setInterval(() => {
    if (time - 1 < 0) {
      clearInterval(timeInterval);
      alert('Timer ended');
    } else {
      time -= 1;
      renderTime();
    }
  }, 1000);
}

startTimerBtn.addEventListener('click', () => {
  startTimer();
});
