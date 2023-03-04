// let sliderImg = document.querySelector(".slider-img")
// let images = ["scoupsmind.png", "jeonghanmind.png", "joshuamind.png",
//     "junmind.png", "hoshimind.png", "wonwoomind.png", "woozimind.png", "the8mind.png", "mingyumind.png", "dkmind.png", "seungkwanmind.png", "vernonmind.png", "dinomind.png"]
// let i = 0

// function prev() {
//     if (i <= 0) i = images.length;
//     i--;

//     return setImage();
// }

// function next() {
//     if(i >= images.length - 1) i = -1;
//     i++;

//     return setImage(); 
// }

// function setImage() {
//     return sliderImg.setAttribute("src", "../assets/images/" + images[i]);
// }

window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("blur", window.scrollY > 0);
    
});
