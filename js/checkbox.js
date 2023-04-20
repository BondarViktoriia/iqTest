const checkboxes = document.querySelectorAll(".select-input");
const nextBtns = document.querySelectorAll(".btn-next");

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    nextBtns.forEach((nextBtn) => {
      if (!checkbox.checked) {
        nextBtn.style.backgroundColor = "";
        nextBtn.style.color = " ";
      } else {
        nextBtn.style.backgroundColor = "#FFC700";
        nextBtn.style.color = "black";
      }
    });
  });
});
