function burgerMenu() {
  let burgerBtn = document.getElementById("burger");
  
  burgerBtn.addEventListener('click', toggleBurger);
  burgerBtn.addEventListener('click', toggleMenu);
}

function toggleBurger() {
  let burgerBtn = document.getElementById("burger");
  burgerBtn.classList.toggle("header__burger--close");
}

function toggleMenu() {
  let menu = document.querySelector(".header__top");

  menu.classList.toggle("header__top--active");
}

burgerMenu();