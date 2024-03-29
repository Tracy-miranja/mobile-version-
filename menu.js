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

const text = "Hi, I'am Tracy, Glad to see You!";
const speed = 80;
const typewriterText = document.getElementById('typewriter-text');
const waveEmoji = document.getElementById('wave-emoji');

let charIndex = 0;

function typeWriter() {
  if (charIndex < text.length) {
    typewriterText.innerHTML += text.charAt(charIndex);
    // eslint-disable-next-line no-plusplus
    charIndex++;
    setTimeout(typeWriter, speed);
  } else {
    // Show wave emoji after typing
    waveEmoji.style.display = 'inline-block';
  }
}

// Start typing animation when page loads
window.onload = typeWriter;

const walkingCartoon = document.getElementById('walking-cartoon');
const projectSlide = document.getElementById('project-slide');
const animationContainer = document.getElementById('animation-container');

function startAnimations() {
  walkingCartoon.style.display = 'block';
  projectSlide.style.display = 'none';

  walkingCartoon.style.animation = 'walkRight 5s linear infinite';
  // eslint-disable-next-line no-use-before-define
  animationContainer.addEventListener('mouseenter', stopAnimations);
}

function stopAnimations() {
  walkingCartoon.style.animationPlayState = 'paused';
  walkingCartoon.style.display = 'none';
  projectSlide.style.display = 'block';
  projectSlide.style.animation = 'slideIn 1s ease-in-out forwards';
}

animationContainer.addEventListener('mouseleave', () => {
  walkingCartoon.style.animationPlayState = 'running';
  walkingCartoon.style.display = 'block';
  projectSlide.style.display = 'none';
  projectSlide.style.animation = '';
});

animationContainer.addEventListener('mouseenter', stopAnimations);

animationContainer.addEventListener('click', () => {
  walkingCartoon.style.animationPlayState = 'running';
  walkingCartoon.style.display = 'block';
  projectSlide.style.display = 'none';
  projectSlide.style.animation = '';
});

startAnimations();
