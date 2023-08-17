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

const toggleList = (event) => {
  event.preventDefault();
  const listItem = event.target.closest('li');
  if (listItem) {
    const arrow = listItem.querySelector('.arrow');
    if (arrow) {
      arrow.classList.toggle('down');
      const list = listItem.querySelector('.list');
      if (list) {
        list.classList.toggle('active');
      }
    }
  }
};

document.querySelectorAll('.frame, .skl').forEach((link) => {
  link.addEventListener('click', toggleList);
});
