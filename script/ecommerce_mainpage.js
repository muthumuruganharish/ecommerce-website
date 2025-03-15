const slideshow = document.querySelector(".slideshow");
const btns = document.querySelectorAll(".btn");
const imgList = ["laptop_offer.png", "shirt_offer.png", "watch_offers.png", "phone_offer.png"];
let index = 0;

function showSlide() {
    slideshow.style.background = `url("images/${imgList[index]}") center/cover`;
}

function nextSlide() {
    index++;
    if (index >= imgList.length) {
        index = 0;
    }
    showSlide();
}

function prevSlide() {
    index--;
    if (index < 0) {
        index = imgList.length - 1;
    }
    showSlide();
}

// Event listeners for buttons
btns.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.classList.contains("btn-left")) {
            prevSlide();
        } else if (button.classList.contains("btn-right")) {
            nextSlide();
        }
    });
});

// Automatically change the slide every 3 seconds
setInterval(nextSlide, 5000);

window.onscroll=function(){
    var navbar=document.querySelector(".navbar")
    if (window.pageYOffset>0){
        navbar.classList.add("fixed")
    }
    else{
        navbar.classList.remove("fixed")
    }
}