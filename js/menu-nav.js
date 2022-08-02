// document.addEventListener("DOMContentLoaded", function() {    
    const menuBurger = document.querySelector('.menu-burger');
    const menuClose = document.querySelector('.menu-close');
    const menu = document.querySelector('.header__navigation');
    const menuLogo = document.querySelector('.header__container-logo');

    function openMenu(){
        menu.classList.add('active');
        menuLogo.classList.add('active');
    }

    function closeMenu(){
        menu.classList.remove('active');
        menuLogo.classList.remove('active');
    }

    menuBurger.addEventListener('click', openMenu);
    menuClose.addEventListener('click', closeMenu);
// });