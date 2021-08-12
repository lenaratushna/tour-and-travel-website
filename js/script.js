// Burger handler
(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__menu');
    const menuCloseItem = document.querySelector('.header__menu-close');
    const menuLinks = document.querySelectorAll('.menu__link');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__menu_active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__menu_active');
    });
    if (window.innerWidth <= 767) {
        for (let i = 0; i < menuLinks.length; i += 1) {
            menuLinks[i].addEventListener('click', () => {
                menu.classList.remove('header__menu_active');
            });
        }
    }
}());