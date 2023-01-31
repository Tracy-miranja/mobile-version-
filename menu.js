const hamburger = document.querySelector("#hamburger");
const navUl = document.querySelector("#links");

hamburger.addEventListener("click", () => {
  navUl.classList.toggle("show");
});

