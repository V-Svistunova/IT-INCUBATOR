
let burger__btn = document.getElementsByClassName("header__burger-btn");
let header__top = document.getElementsByClassName("header__top"); 


burger__btn.onclick = function() {
  header__top.classList.add('header__top-active')
}
