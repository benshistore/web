function initCarousel() {
    const track = document.querySelector(".carousel-track");
    const slides = Array.from(track.children);

    const nextButton = document.querySelector(".next");
    const prevButton = document.querySelector(".prev");
    const dotsContainer = document.querySelector(".carousel-dots");

    if (!track || slides.length === 0) {
        console.warn("Carrusel aún no cargado");
        return;
    }

    let currentIndex = 0;

    // Crear dots
    slides.forEach((_, i) => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (i === 0) dot.classList.add("active");
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".dot");

    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;

        dots.forEach(dot => dot.classList.remove("active"));
        dots[currentIndex].classList.add("active");
    }

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    });

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            currentIndex = index;
            updateCarousel();
        });
    });
}
