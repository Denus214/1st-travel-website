(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header-active');
        } else {
            header.classList.remove('header-active');
        }
    };
}());

(function  () {

    const BurgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const closeMenuItem = document.querySelector('.header__nav-close');
    BurgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav-active');
    });

    closeMenuItem.addEventListener('click', () => {
        menu.classList.remove('header__nav-active');
    });

}());
