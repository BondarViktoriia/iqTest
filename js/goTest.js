const goBtn = document.querySelectorAll(".btn-test");
const test = document.querySelector(".testIQ");
const startPage = document.querySelector(".startPage");

goBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    startPage.style.display = "none";
    test.style.display = "block";
  });
});
