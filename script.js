const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let current = 0;

function showSlide(index){

slides.forEach((slide)=>{
slide.classList.remove("active");
});

dots.forEach((dot)=>{
dot.classList.remove("active");
});

slides[index].classList.add("active");
dots[index].classList.add("active");

current=index;

}

document.querySelector(".next").onclick=function(){

current++;

if(current>=slides.length){
current=0;
}

showSlide(current);

};

document.querySelector(".prev").onclick=function(){

current--;

if(current<0){
current=slides.length-1;
}

showSlide(current);

};

setInterval(function(){

current++;

if(current>=slides.length){
current=0;
}

showSlide(current);

},4000);
