const hamburger = document.querySelector(".hamburger_1");
const navUl = document.querySelector(".nav__menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navUl.classList.toggle("active");

});
