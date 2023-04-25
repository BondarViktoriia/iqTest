// выбираем элемент, который будем наблюдать
const doneSection = document.querySelector('.section-done');

// создаем экземпляр Intersection Observer
const observer = new IntersectionObserver(
  (entries) => {
    // когда секция с классом done становится видимой
    if (entries[0].isIntersecting) {
      // запускаем таймер
      startTimer();
      // прекращаем наблюдение
      observer.disconnect();
    }
  },
  { threshold: 0 }
);

// запускаем наблюдение
observer.observe(doneSection);

// функция для запуска таймера
function startTimer() {
  // устанавливаем время в миллисекундах
  let timeLeft = 10 * 60 * 1000; // 10 минут в миллисекундах
  let timerId = null;

  // обновление времени на таймере
  function updateTimer() {
    const minutes = Math.floor(timeLeft / (60 * 1000));
    const seconds = Math.floor((timeLeft - minutes * 60 * 1000) / 1000);

    const minutesString = minutes.toString().padStart(2, '0');
    const secondsString = seconds.toString().padStart(2, '0');

    document.getElementById('timer').textContent = `${minutesString}:${secondsString}`;

    // уменьшаем время на 1 секунду
    timeLeft -= 1000;

    // когда таймер закончится
    if (timeLeft < 0) {
      clearInterval(timerId);
      document.getElementById('timer').textContent = 'Время истекло!';
    }
  }

  // запускаем таймер
  updateTimer();
  timerId = setInterval(updateTimer, 1000);
}
