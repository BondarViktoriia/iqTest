const btnNext = document.querySelectorAll('.btn-next');
const sections = document.querySelectorAll('.section-question');
const progress = document.querySelector('.progress');
let currentQuestion = 0;

function showNextQuestion() {
  sections[currentQuestion].style.display = 'none';
  currentQuestion++;
  sections[currentQuestion].style.display = 'block';
  updateProgressBar();
}

function updateProgressBar() {
  const percent = (currentQuestion / sections.length) * 100;
  progress.style.width = percent + '%';
}

btnNext.forEach((btn) => {
  btn.addEventListener('click', showNextQuestion);
});