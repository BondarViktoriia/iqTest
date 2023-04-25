const checkboxes = document.querySelectorAll(".select-input");
const nextBtns = document.querySelectorAll(".btn-next");
const loadingBtn = document.querySelector(".btn-loading");

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    nextBtns.forEach((nextBtn) => {
      if (!checkbox.checked) {
        nextBtn.style.backgroundColor = "";
        nextBtn.style.color = " ";
        loadingBtn.style.backgroundColor = "";
        loadingBtn.style.color = " ";
      } else {
        nextBtn.style.backgroundColor = "#FFC700";
        nextBtn.style.color = "black";
        loadingBtn.style.backgroundColor = "#FFC700";
        loadingBtn.style.color = " black";
      }
    });

  });
});

