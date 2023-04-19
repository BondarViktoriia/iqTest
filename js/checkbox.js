const checkbox = document.querySelector(".select-input");
const nextBtn = document.querySelector(".btn-next");

checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
        nextBtn.style.backgroundColor = "#FFC700"
        nextBtn.style.color="black"
    } else {
        nextBtn.style.backgroundColor = '';
         nextBtn.style.color=" "
    }
})