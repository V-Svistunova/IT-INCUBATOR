const goTop = document.querySelector(".fix-btn");
let openModalBtn = document.getElementById("modalOpen");
let modal = document.querySelector('.modal');
let closeModalBtn = document.querySelector(".modal-close")

let burgerBtn = document.getElementById("burger");
let menu = document.querySelector(".header__top");

function openMenu() {  
  burgerBtn.addEventListener('click', toggleBurger);
  burgerBtn.addEventListener('click', toggleMenu);
  
}

openMenu();

function toggleBurger() {
  burgerBtn.classList.toggle("header__burger--close");
}

function toggleMenu() {
  menu.classList.toggle("header__top--active");
}

function removeMenuAndClose() {
  menu.classList.remove("header__top--active");
  burgerBtn.classList.remove("header__burger--close");
}



let anchors = document.querySelectorAll('a[href*="#"]');

for(let anchor of anchors) {
  anchor.addEventListener('click', function(event) {
    removeMenuAndClose();
    event.preventDefault();
    let blockID = anchor.getAttribute('href');
    document.querySelector(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}

window.addEventListener('scroll', function() {
  if (window.scrollY > 300) {
    goTop.style.display = 'flex'
  } else {
    goTop.style.display = 'none'
  }
});

openModalBtn.addEventListener('click', function() {
  modal.style.display = 'flex'
})

closeModalBtn.addEventListener('click', function() {
  modal.style.display = 'none'
})