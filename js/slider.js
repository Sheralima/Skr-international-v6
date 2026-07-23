// ===========================
// Auto Image Slider
// ===========================
console.log("Slider JS Loaded");
const slides = documenconsole.log("Slider Loaded");t.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

if (slides.length > 0) {

    showSlide(currentSlide);

    setInterval(() => {
        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        showSlide(currentSlide);

    }, 3000); // 3 seconds

}
