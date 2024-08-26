

const backdrop = document.querySelector('.menu-mobile-backdrop');
const menuButton = document.querySelector('.btn-menu');
const closeButton = document.querySelector('.btn-close-heder');

menuButton.addEventListener('click', function () {
    const isOpen = backdrop.classList.contains('is-open');
    if (isOpen) {
        backdrop.classList.remove('is-open');
    } else {
        backdrop.classList.add('is-open');
    }
});

closeButton.addEventListener('click', function () {
    backdrop.classList.remove('is-open');
});


