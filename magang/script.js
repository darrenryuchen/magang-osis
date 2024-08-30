window.addEventListener('load', () => {
    AOS.init({
      duration: 800,
      delay: 400
    });
    // animateslide(); 

    // function animateslide() {
    //     const slide = document.getElementById('slidewindow');
    //     if (slide) {
    //         slide.classList.add('slide');
    //         setTimeout(() => {
    //         slide.classList.remove('slide');
    //         }, 2000);
    //     }
    //     }

    const hamburger = document.getElementById('hamburger');
    const navbar = document.querySelector('.navbar');
    const navUl = navbar.querySelector('.ul');

    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('active');
        navUl.classList.toggle('animate');
        navUl.classList.toggle('closing');
    })

    document.querySelectorAll(".carousel").forEach(carousel => {
        const items = carousel.querySelectorAll(".carousel__item");
        const buttonsHtml = Array.from(items, () => {
            return '<span class="carousel__button"></span>';
        });

        carousel.insertAdjacentHTML("beforeend", `
            <div class="carousel__nav">
                ${buttonsHtml.join("")}
            </div>
        `);

        let maks = items.length-1;
        let idx = 0;

        const buttons = carousel.querySelectorAll(".carousel__button");
        
        buttons.forEach((button, i) => {
            button.addEventListener("click", () => {
                items.forEach(item => item.classList.remove("carousel__item--selected"));
                buttons.forEach(button => button.classList.remove("carousel__button--selected"));

                items[i].classList.add("carousel__item--selected");
                button.classList.add("carousel__button--selected");
            })
        })

        const next = document.getElementById("nextbutton");
        const prev = document.getElementById("prevbutton");

        console.log(next);
        next.addEventListener("click", () => {
            items.forEach(item => item.classList.remove("carousel__item--selected"));
            buttons.forEach(button => button.classList.remove("carousel__button--selected"));

            console.log("A");
            if (idx+1 > maks) {
                idx = 0;
            } else {
                idx++;
            }
            items[idx].classList.add("carousel__item--selected");
            buttons[idx].classList.add("carousel__button--selected");
        })
        prev.addEventListener("click", () => {
            items.forEach(item => item.classList.remove("carousel__item--selected"));
            buttons.forEach(button => button.classList.remove("carousel__button--selected"));

            if (idx-1 < 0) {
                idx = maks;
            } else {
                idx--;
            }
            items[idx].classList.add("carousel__item--selected");
            buttons[idx].classList.add("carousel__button--selected");
        })

        items[0].classList.add("carousel__item--selected");
        buttons[0].classList.add("carousel__button--selected");
    })
});
