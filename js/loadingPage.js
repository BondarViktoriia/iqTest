const buttonLoading = document.querySelector(".btn-loading");
const loadingSection = document.querySelector(".section-loading");
const starSection = document.querySelector(".star-section");
const progress = document.querySelector(".progress");
const done = document.querySelector(".done");
const test = document.querySelector('.burger-container')
const testDone = document.querySelector('.test-done')
const burgerContainer =document.querySelector('.burger-container-start')

buttonLoading.addEventListener("click", () => {
  starSection.style.display = "none";
  loadingSection.style.display = "block";
  progress.style.width = "100%";
  burgerContainer.style.display = 'none';
  setTimeout(function () {
    loadingSection.style.display = "none";
    done.style.display = "block";
      progress.style.display = "none";
      test.style.display = 'none';
      testDone.style.display = 'block';
  }, 2000);
});
