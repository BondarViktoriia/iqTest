const btnNext = document.querySelectorAll('.btn-next');
const sections = document.querySelectorAll('.section-question');
const progress = document.querySelector('.progress');

let currentQuestion = 0;

// функция для скрытия текущего вопроса и отображения следующего
function showNextQuestion() {
  sections[currentQuestion].style.display = 'none';
  currentQuestion++;
  sections[currentQuestion].style.display = 'block';
  updateProgressBar();
}

// функция для обновления прогресс-бара
function updateProgressBar() {
  const percent = (currentQuestion / sections.length) * 100;
  progress.style.width = percent + '%';
}

// добавляем обработчик событий на кнопку "Далее"
btnNext.forEach((btn) => {
  btn.addEventListener('click', showNextQuestion);
});