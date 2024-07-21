document.addEventListener('DOMContentLoaded', function () {
    const menuHamburger = document.querySelector('.menu-hamburger');
    const menu = document.querySelector('.menu');
    const navBar = document.querySelector('.nav-bar');

    menuHamburger.addEventListener('click', function () {
        menu.classList.toggle('active');
    });

    document.addEventListener('click', function (event) {
        if (!navBar.contains(event.target)) {
            menu.classList.remove('active');
        }
    });
});
