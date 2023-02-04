// Adaptive menu
const HAMBURGER = document.querySelector('.hamburger');
const NAV = document.querySelector('.nav__list');
const BACKGOUND = document.querySelector('.background');
const NAV_LINKS = document.querySelectorAll('.nav__link');

function toggleMenu () {
    HAMBURGER.classList.toggle('open');
    NAV.classList.toggle('open');
    BACKGOUND.classList.toggle('visible');
}

function closeMenu() {
    HAMBURGER.classList.remove('open');
    NAV.classList.remove('open');
    BACKGOUND.classList.remove('visible');
}

HAMBURGER.addEventListener('click', toggleMenu);
BACKGOUND.addEventListener('click', closeMenu);
NAV_LINKS.forEach((link) => link.addEventListener('click', closeMenu));