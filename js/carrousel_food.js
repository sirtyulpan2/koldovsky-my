(function () {
    const logos = [
        {
            id: "1",
            image: "img/carrousel_iamspetfood.svg",
            description: "iams pet food"
        },
        {
            id: "2",
            image: "img/carrousel_pedigree.svg",
            description: "pedigree"
        },
        {
            id: "3",
            image: "img/carrousel_petco.svg",
            description: "petco"
        },
        {
            id: "4",
            image: "img/carrousel_petpower.svg",
            description: "pet power"
        },
        {
            id: "5",
            image: "img/carrousel_purina.svg",
            description: "purina"
        },
        {
            id: "6",
            image: "img/carrousel_royalcanin.svg",
            description: "royal canin"
        }
    ];
    function fillLogos(logo_list) {
        let i = 0;
        const slidesfill = [];
        for (const logo of logo_list) {
            slidesfill[i] = ` <div class="logo_slide">
            <img class="carrousel_food_list" src="${logo.image}" alt="${logo.description}"
            </div>`;
            i++;
        }
        return slidesfill;
    }
    const slides = fillLogos(logos);

    let currentSlideIdx = 0;

    function renderCarousel() {
        const sliderContainer = document.querySelector('.carrousel_food_slides');

        sliderContainer.innerHTML = slides[currentSlideIdx];

        if (window.innerWidth > 300) {
            const secondSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
            sliderContainer.innerHTML += slides[secondSlideIdx];

            if (window.innerWidth > 600) {
                const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
                sliderContainer.innerHTML += slides[thirdSlideIdx];
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

    setInterval(next, 3000);

    const nextButton = document.querySelector('.carrousel_food_btn-next');
    nextButton.addEventListener('click', next);

    const prevButton = document.querySelector('.carrousel_food_btn-prev');
    prevButton.addEventListener('click', prev);

    renderCarousel();

    window.addEventListener('resize', renderCarousel());
})();
