(function () {

    const petsBox = [
        `<div class="carousel-pets-box-item">
        <div class= "logo-pet-cat" ><img src="img/cat.svg" alt="Logo cat">
        </div>
        <h3 class="pets-box-names">Cats</h3>
        <div class="carousel-line"></div>
        <p class="pets-box-description">Your cat will purr with pleasure in our hands.</p>
        <p class="pets-box-learn"><a class="pets-box-learn1" href="#">Learn More</a><span class="right-arrow">→</span>
        </p>
        </div >`,
        `<div class="carousel-pets-box-item" >
        <div class="logo-pet-dog" ><img src="img/dog.svg" alt="Logo Dog">
        </div>
        <h3 class="pets-box-names">Dogs</h3>
        <div class="carousel-line"></div>
        <p class="pets-box-description">Tasty food, running, and playing with your dog.</p>
        <p class="pets-box-learn"><a class="pets-box-learn1" href="#">Learn More</a><span class="right-arrow">→</span>
        </p>
        </div >`,
        `<div class="carousel-pets-box-item">
        <div class= "logo-pet-rabbit" ><img src="img/rabbit.svg" alt="Logo Rabbit"></div>
        <h3 class="pets-box-names">Rabbits</h3>
        <div class="carousel-line"></div>
        <p class="pets-box-description">We will look after your favorite ball of fur.</p>
        <p class="pets-box-learn"><a class="pets-box-learn1" href="#">Learn More</a><span class="right-arrow">→</span>
        </p>
        </div >`,
        `<div class="carousel-pets-box-item">
        <div class="logo-pet-fish" ><img src="img/fish.svg" alt="Logo Fish"></div>
        <h3 class="pets-box-names">Fish</h3>
        <div class="carousel-line"></div>
        <p class="pets-box-description">The inhabitants of your aquarium will be happy.</p>
        <p class="pets-box-learn"><a class="pets-box-learn1" href="#">Learn More</a><span class="right-arrow">→</span>
        </p>
        </div >`,
        `<div class="carousel-pets-box-item">
        <div class="logo-pet-turtle" ><img src="img/turtle.svg" alt="Logo Turtle"></div>
        <h3 class="pets-box-names">Turtles</h3>
        <div class="carousel-line"></div>
        <p class="pets-box-description">Your cold-blooded pets will stay healthy.</p>
        <p class="pets-box-learn"><a class="pets-box-learn1" href="#">Learn More</a><span class="right-arrow">→</span>
        </p>
        </div >`,
        `<div class="carousel-pets-box-item">
        <div class= "logo-pet-bird" ><img src="img/bird.svg" alt="Logo Bird">
        </div>
        <h3 class="pets-box-names">Birds</h3>
        <div class="carousel-line"></div>
        <p class="pets-box-description">We will feed your birds, clean the cage, etc.</p>
        <p class="pets-box-learn"><a class="pets-box-learn1" href="#">Learn More</a><span class="right-arrow">→</span>
        </p>
        </div >`
    ]

    let currentPetBoxIdx = 0;

    function renderCarousel() {
        const petBoxContainer = document.querySelector('.carousel-slides');
        petBoxContainer.innerHTML = petsBox[currentPetBoxIdx];
    }

    function next() {
        currentPetBoxIdx = currentPetBoxIdx + 1 >= petsBox.length ? 0 : currentPetBoxIdx + 1;
        renderCarousel();
    }

    function prev() {
        currentPetBoxIdx = currentPetBoxIdx - 1 < 0 ? petsBox.length - 1 : currentPetBoxIdx - 1;
        renderCarousel();
    }

    setInterval(next, 4000);

    const nextButton = document.querySelector('.carousel-btn-next');
    nextButton.addEventListener('click', next);

    const prevButton = document.querySelector('.carousel-btn-prev');
    prevButton.addEventListener('click', prev);

    renderCarousel();

})();