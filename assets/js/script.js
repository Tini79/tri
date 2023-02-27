let sliderImg = document.querySelector(".slider-img")
let images = ["scoupsmind.png", "jeonghanmind.png", "joshuamind.png",
    "junmind.png", "hoshimind.png", "wonwoomind.png", "woozimind.png", "the8mind.png", "mingyumind.png", "dkmind.png", "seungkwanmind.png", "vernonmind.png", "dinomind.png"]
let i = 0

function prev() {
    if (i <= 0) i = images.length;
    i--;

    return setImage();
}

function next() {
    if(i >= images.length - 1) i = -1;
    i++;

    return setImage(); 
}

function setImage() {
    return sliderImg.setAttribute("src", "../assets/images/" + images[i]);
}

window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("blur", window.scrollY > 0);
});

// const menuToggle = document.querySelector('.menu-toggle input');
// const nav = document.querySelector('nav ul');

// menuToggle.addEventListener('click', function () {
//     nav.classList.toggle('slide')
// });

// uji
const slides = document.querySelectorAll('.slides img');

let currentSlide = 0;

function showSlide(n) {
    slides[currentSlide].className = ' ';
    slides[n].className = 'active';
    currentSlide = n;
}

function nextSlide() {
    let next = currentSlide + 1;
    if (next >= slides.length) {
        next = 0;
    }
    slides[next].className = 'next';
    setTimeout(function () {
        slides[currentSlide].className = 'prev';
        slides[next].className = 'active';
        currentSlide = next;
    }, 100);
}

setInterval(nextSlide, 3000);