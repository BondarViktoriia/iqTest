
const burgerMenu = document.querySelector(".burger-menu");
const menu = document.querySelector(".menu");
const closeBtn = document.querySelector(".close-button")

burgerMenu.addEventListener("click", function() {
  menu.classList.toggle("show-menu");
  const menuDisplay = menu.style.display;

  if (menuDisplay === "none") {
    menu.style.display = "block";
  }
  else {
    menu.style.display = "none";
  
  }
    burgerMenu.classList.toggle("open");
});

closeBtn.addEventListener('click', function () {
  menu.style.display = 'none';
  burgerMenu.classList.toggle("open");

})
const links = document.querySelectorAll("a[href^='#']");

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    menu.style.display = "none";
    burgerMenu.classList.remove("active");
  });
});