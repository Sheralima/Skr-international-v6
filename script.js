// ==============================
// SKR INTERNATIONAL SCRIPT
// ==============================

// Hero Slider (5 seconds)
const slider = document.querySelector("#mainSlider");

if (slider) {
  new bootstrap.Carousel(slider, {
    interval: 5000,
    ride: "carousel",
    pause: false,
    wrap: true
  });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", function(e) {

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth"
      });
    }

  });

});

// Counter Animation
function counter(id, end, speed) {

  const element = document.getElementById(id);

  if (!element) return;

  let start = 0;

  const timer = setInterval(() => {

    start++;

    element.innerHTML = start + "+";

    if (start >= end) {
      clearInterval(timer);
    }

  }, speed);

}

window.onload = function () {

  counter("clientsCounter", 10000, 1);

  counter("projectsCounter", 500, 10);

  counter("countriesCounter", 50, 30);

  counter("experienceCounter", 15, 100);

};

// Navbar Shadow on Scroll
window.addEventListener("scroll", function () {

  const navbar = document.querySelector(".navbar");

  if (!navbar) return;

  if (window.scrollY > 50) {
    navbar.classList.add("shadow");
  } else {
    navbar.classList.remove("shadow");
  }

});

// Welcome Message
console.log("Welcome to SKR INTERNATIONAL");
