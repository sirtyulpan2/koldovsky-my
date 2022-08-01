(function () {

    const slides = [
        `<div class="our_pets__slide"> 
          <div class="about__pets">
            <img class="my__pets" src="img/jokie.webp" alt="Jokie">
            <h3 class="pets__name">Jokie</h3>
            <div class="divider"></div>
            <p class="pets__info">“My parents were worried about my health as I didn't want to eat at all. A vet
            at
            Best.Pet helped them a lot, explained the peculiarities of parrots feeding, and offered a
            special
            meal plan. Yummy!”</p>
            <p class="pets__date">October 28, 2019</p>
          </div>
        </div>`,
        `<div class="our_pets__slide"> 
          <div class="about__pets">
            <img class="my__pets" src="img/axel.webp" alt="Axel">
            <h3 class="pets__name">Axel</h3>
            <div class="divider"></div>
            <p class="pets__info">“When Mummy traveled abroad, she couldn't take me with her. So, she called
            Best.Pet, and Alina came to care for me for 2 weeks. I really liked Alina; we had so much fun
            and
            enjoyed long walks."</p>
            <p class="pets__date">March 03, 2020</p>
          </div>
        </div>`,
        `<div class="our_pets__slide"> 
          <div class="about__pets">
            <img class="my__pets" src="img/milo.webp" alt="Milo">
            <h3 class="pets__name">Milo</h3>
            <div class="divider"></div>
            <p class="pets__info">"I have to take medications regularly. When my parents decided to go on a
            vacation, they were worried about my feeding. They called a pet sitter Mary, and we liked each
            other
            so much!"</p>
            <p class="pets__date">December 12, 2021</p>
          </div>
        </div>`,
    ];

    let currentSlideIdx = 0;

    function renderCarousel() {
        const slideContainer = document.querySelector('.our_pets-carousel__slides');
        slideContainer.innerHTML = slides[currentSlideIdx];
        if (window.innerWidth > 600) {
            const secondSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
            slideContainer.innerHTML += slides[secondSlideIdx];
            if (window.innerWidth > 900) {
                const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
                slideContainer.innerHTML += slides[thirdSlideIdx];
            }
        }
    }

    function prev() {
        currentSlideIdx = currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
        renderCarousel();
    }

    function next() {
        currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
        renderCarousel();
    }

    setInterval(next, 4000);

    const prevButton = document.querySelector('.our_pets-carousel__btn-prev');
    prevButton.addEventListener('click', prev);

    const nextButton = document.querySelector('.our_pets-carousel__btn-next');
    nextButton.addEventListener('click', next);

    renderCarousel();

    window.addEventListener('resize', renderCarousel);

})();