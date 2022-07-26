(function () {
    const slides = [
        `<div class="product__slide"> 
          <img src="img/img.rebbit.webp" alt="Rebbit">
          </div>`,
        `<div class="product__slide"> 
          <img src="img/dogwhite.webp" alt="Dog">
          </div>`,
        `<div class="product__slide"> 
          <img src="img/parrot.webp" alt="Parrot">
          </div>`
    ];

    let currentSlideIdx = 0;

    function renderCarousel() {
        const slideContainer = document.querySelector('.products-carousel__slides');
        slideContainer.innerHTML = slides[currentSlideIdx];
    }

    function next() {
        currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
        renderCarousel();
    }

    setInterval(next, 4000)
    renderCarousel();
})();