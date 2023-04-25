const doneSection = document.querySelector('.section-done');

const observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      startTimer();
      observer.disconnect();
    }
  },
  { threshold: 0 }
);

observer.observe(doneSection);

function startTimer() {
  let timeLeft = 10 * 60 * 1000; 
  let timerId = null;

  function updateTimer() {
    const minutes = Math.floor(timeLeft / (60 * 1000));
    const seconds = Math.floor((timeLeft - minutes * 60 * 1000) / 1000);

    const minutesString = minutes.toString().padStart(2, '0');
    const secondsString = seconds.toString().padStart(2, '0');

    document.getElementById('timer').textContent = `${minutesString}:${secondsString}`;

    timeLeft -= 1000;

    if (timeLeft < 0) {
      clearInterval(timerId);
      document.getElementById('timer').textContent = 'Время истекло!';
    }
  }
  updateTimer();
  timerId = setInterval(updateTimer, 1000);
}
