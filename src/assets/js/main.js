console.log(test(5, 2));
console.log(test(2, 4));
console.log(test(9, 1));

document.getElementsByClassName('header__burger-btn').addEventListener('click', function() {
  const c = document.getElementsByClassName('header__top');
  c.toggle('header__top--active');
  c.toggle('header__top');
  document.getElementsByClassName('header__top').toggle('header__top--active');
});