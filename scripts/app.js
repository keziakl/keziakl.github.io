const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        //toggle nav
        nav.classList.toggle('nav-active');

        //animate links with delay
        navLinks.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + .6}s`
            }
        });
        //animate burger
        burger.classList.toggle('toggle'); 
    });

    
}
navSlide();