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

let anchors = document.querySelectorAll('a[href*="#"]');

for(let anchor of anchors) {
  anchor.addEventListener('click', function(event) {
    event.preventDefault();
    let blockID = anchor.getAttribute('href');
    document.querySelector(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}