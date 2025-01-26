// https://stackoverflow.com/questions/55165303/how-to-hide-dropdown-menu-when-clicking-on-menu-link-with-vanilla-js
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  navLinks.forEach((link, index) => {
    link.addEventListener('click', (e) => {
      burger.classList.toggle('toggle');
      nav.classList.toggle('nav-active');
      navLinks.forEach(setStyleLink)
    })
  });

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    navLinks.forEach(setStyleLink);
    burger.classList.toggle('toggle');
  });
}

function setStyleLink(el, index) {
  if (el.style.animation) {
    el.style.animation = ''
  } else {
    el.style.animation = `navLinkFade 0.5s ease forwards ${index / 10 +0.4}s`;
  }
}

navSlide();
