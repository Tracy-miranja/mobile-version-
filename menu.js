const hamburger = document.querySelector('.hamburger_1');
const navUl = document.querySelector('.nav__menu');
const backGround = document.querySelector('.overlay');
const hd = document.querySelector('.header');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navUl.classList.toggle('active');
  hd.classList.add('head');
  backGround.classList.add('blur');
});
navUl.addEventListener('click', () => {
  navUl.classList.remove('active');
  backGround.classList.remove('blur');
});
