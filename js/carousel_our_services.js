(function () {

    const slides = [     
        `<div class="item-wrapper-slides">
        <div class="item-image">
          <img src="img/yellow-cat.webp" alt="Cat and Girl" width="300">
        </div>
        <h3 class="blocktitle">Pet sitting</h3>
        <p class="item-info">We will sit with your pet and even stay overnight if needed.</p>
        <span class="item-price">from $15/hour</span>
      </div>`,

      `<div class="item-wrapper-slides">
        <div class="item-image">
          <img src="img/pink-dog.webp" alt="girl and sitting dog" width="300">
        </div>
        <h3 class="blocktitle">Dog Training</h3>
        <p class="item-info">Professional dog handlers can train dogs of any breed and consult their owners.</p>
        <span class="item-price">from $35/hour</span>
      </div>`,

      `<div class="item-wrapper-slides">
        <div class="item-image">
          <img src="img/sitting-dog.webp" alt="lying girl and sitting dog" width="300">
        </div>
        <h3 class="blocktitle">Dog Walking</h3>
        <p class="item-info">We can take your dog for a walk on schedule and bring it back home.</p>
        <span class="item-price">from $10/hour</span>
      </div>`,

      `<div class="item-wrapper-slides">
        <div class="item-image">
          <img src="img/parrot-green.webp" alt="perrot and green. background" width="300">
        </div>
        <h3 class="blocktitle">Vet Consultations</h3>
        <p class="item-info">If you have any questions or issues with your pet, we will be happy to advise you.</p>
        <span class="item-price">from $25/hour</span>
      </div>`     
    ];

    let currentSlideIdx = 0;

    function renderCarousel() {
        const slideContainer = document.querySelector('.services-wrapper');
        slideContainer.innerHTML = slides[currentSlideIdx];
        if (window.innerWidth > 600) {
           const secondSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
           slideContainer.innerHTML += slides[secondSlideIdx];
           if (window.innerWidth > 900) {
            const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
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

    const prevButton = document.querySelector('.services-wrapper-btn-prev');
    prevButton.addEventListener('click', prev);

    const nextButton = document.querySelector('.services-wrapper-btn-next');
    nextButton.addEventListener('click', next);
    
    
    window.addEventListener('resize', renderCarousel);
    
    
    setInterval(next, 3000);
    renderCarousel();

})();