const sections = document.querySelectorAll('.section-question');
const progressBar = document.querySelector('.progress');

// Обновление состояния прогресс-бара
function updateProgressBar(currentPage) {
  const totalSections = sections.length;
  const progressPercent = ((currentPage - 1) / totalSections) * 100;
  progressBar.style.width = `${progressPercent}%`;
}

// Переход к следующей секции теста
function goToNextSection(currentSection) {
  const nextPage = currentSection.dataset.page + 1;
  const nextSection = document.querySelector(`[data-page="${nextPage}"]`);
  if (nextSection) {
    currentSection.classList.remove('active');
    nextSection.classList.add('active');
    updateProgressBar(nextPage);
  }
}

// Обработчик события на кнопку "Далее"
const nextBtns = document.querySelectorAll('.btn-next');
nextBtns.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    const currentSection = event.target.closest('.section-question');
    goToNextSection(currentSection);
  });
});