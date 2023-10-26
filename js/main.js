let slideIndex = 1;
showSlides();

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    if (n) {
        slideIndex = n;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].classList.remove("active");
    }

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");

    setTimeout(function () {
        showSlides(slideIndex + 1);
    }, 4000);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(n);
}
