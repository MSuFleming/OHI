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

// https://gist.github.com/sumonta121/50c2b987582b6297abecda9f158624d1
$(document).ready(function(){
  $('.customer-logos').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [{
          breakpoint: 768,
          settings: {
              slidesToShow: 4
          }
      }, {
          breakpoint: 520,
          settings: {
              slidesToShow: 3
          }
      }]
  });
});


function toggleMap() {
  var mapDiv = document.getElementById("map");
  var mapButton = document.getElementById("mapButton");
  if (mapDiv.style.display === "none") {
    mapDiv.style.display = "block";
    map.invalidateSize(); 
    mapButton.innerHTML = "Close Web Map";
  } else {
    mapDiv.style.display = "none";
    mapButton.innerHTML = "Open Web Map";
  }
}

function toggleLegend() {
  var legend = document.querySelector('.legend');
  if (legend.style.display === 'none') {
    legend.style.display = 'block';
  } else {
    legend.style.display = 'none';
  }
}
