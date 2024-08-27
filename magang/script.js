window.addEventListener('load', () => {
    AOS.init({
      duration: 800,
      delay: 400
    });
    animateslide(); 

    function animateslide() {
        const slide = document.getElementById('slidewindow');
        if (slide) {
            slide.classList.add('slide');
            setTimeout(() => {
            slide.classList.remove('slide');
            }, 2000);
        }
        }

    const hamburger = document.getElementById('hamburger');
    const navbar = document.querySelector('.navbar');
    const navUl = navbar.querySelector('ul');

    hamburger.addEventListener('touchstart', () => {
        navbar.classList.toggle('active');
        navUl.classList.toggle('animate');
        navUl.classList.toggle('closing');
    });
});
