function animateslide() {
    const slide = document.getElementById('slidewindow');
    slide.classList.add('slide');
    sleep(2000);
    slide.classList.remove('slide');
}

//window.addEventListener('load', animateslide);