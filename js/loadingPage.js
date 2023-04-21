const buttonLoading = document.querySelector('.btn-loading');
const loadingSection = document.querySelector('.section-loading');
const starSection = document.querySelector('.star-section');
const progress = document.querySelector('.progress');

buttonLoading.addEventListener('click', () => {
    starSection.style.display = 'none';
    loadingSection.style.display = "block";
    progress.style.width = '100%';
})