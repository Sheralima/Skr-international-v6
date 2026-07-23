// ==========================================
// SKR INTERNATIONAL
// Professional Slider
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    let current = 0;
    let autoSlide;

    function showSlide(index) {

        slides.forEach(slide => {
            slide.classList.remove("active");
        });

        slides[index].classList.add("active");
    }

    function nextSlide() {
        current++;
        if (current >= slides.length) {
            current = 0;
        }
        showSlide(current);
    }

    function prevSlide() {
        current--;
        if (current < 0) {
            current = slides.length - 1;
        }
        showSlide(current);
    }

    function startSlider() {
        autoSlide = setInterval(nextSlide, 3000);
    }

    function resetSlider() {
        clearInterval(autoSlide);
        startSlider();
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            nextSlide();
            resetSlider();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            prevSlide();
            resetSlider();
        });
    }

    showSlide(current);
    startSlider();

});
