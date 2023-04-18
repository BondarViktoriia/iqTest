// Получаем элементы кнопки бургер-меню и меню
const burgerMenu = document.querySelector(".burger-menu");
const menu = document.querySelector(".menu");
const closeBtn = document.querySelector(".close-button")

// Обработчик события клика на кнопке бургер-меню
burgerMenu.addEventListener("click", function() {
  // Переключаем класс, который показывает или скрывает меню
  menu.classList.toggle("show-menu");
    // Получаем текущее значение свойства display для меню
  const menuDisplay = menu.style.display;

  // Если меню скрыто, показываем его
  if (menuDisplay === "none") {
    menu.style.display = "block";
  }
  // Если меню отображается, скрываем его
  else {
    menu.style.display = "none";
  
  }
  
  // Переключаем классы для полосок в кнопке бургер-меню
    burgerMenu.classList.toggle("open");
});

closeBtn.addEventListener('click', function () {
  menu.style.display = 'none';
  burgerMenu.classList.toggle("open");

})

// Получаем все ссылки с якорями на странице
const links = document.querySelectorAll("a[href^='#']");

// Добавляем обработчик события на каждую ссылку
links.forEach((link) => {
  link.addEventListener("click", (event) => {

    // Закрываем бургер-меню при клике на ссылку
    menu.style.display = "none";
    burgerMenu.classList.remove("active");
  });
});