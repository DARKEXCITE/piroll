$(document).ready(function(){
    // Burger menu
    const burger = document.querySelector('.header__burger');
    const nav = document.querySelector('.header__nav');
    const lines = burger.querySelector('.lines');
    const navLinks = document.querySelectorAll('.nav__link');
    const workLink = document.querySelector('.work__link');
    const workLoad = document.querySelector('.work__load');
    const workItems = document.querySelectorAll('.work__item:nth-last-child(-n+4)');

    burger.addEventListener('click', function () {
        nav.classList.toggle('active');
        lines.classList.toggle('active');
    });

    if (window.innerWidth <= 706) {
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].addEventListener('click', () => {
                nav.classList.remove('active');
                lines.classList.remove('active');
            });
        }
    }

    workLink.addEventListener('click', function (event) {
        event.preventDefault();
        for (let i = 0; i < workItems.length; i++) {
            workItems[i].style.display = 'block';
        }
        workLoad.style.display = 'none';
    })

    // Owl carousel
    $('.owl-carousel').owlCarousel({
        items:1,
        loop:true
    })
});