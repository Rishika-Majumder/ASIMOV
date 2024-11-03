let slideIndex = 0;
let slides = document.getElementsByClassName("slide");

// Function to change slides manually
function changeSlide(n) {
    showSlide((slideIndex += n));
}

// Function to show the current slide
function showSlide(n) {
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

// Show the first slide and start automatic slideshow
showSlide(slideIndex);
setInterval(() => changeSlide(1), 7000);

function openModal(src) {
    document.getElementById("imageModal").style.display = "flex";
    document.getElementById("modalImage").src = src;
}

// Close the modal
function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

function toggleInfo() {
    const infoList = document.getElementById("infoList");
    if (infoList.style.display === "none") {
        infoList.style.display = "block";
    } else {
        infoList.style.display = "none";
    }
}

window.addEventListener("scroll", function() {
    var navbar = document.getElementById("secondaryNavbar");
    var sticky = navbar.offsetTop; // Get the initial position of the navbar

    if (window.pageYOffset > sticky) {
        navbar.classList.add("fixed");
    } else {
        navbar.classList.remove("fixed");
    }
});

window.addEventListener("scroll", function() {
    var navbar = document.getElementById("secondaryNavbar");
    var sticky = navbar.offsetTop; // Get the initial position of the navbar

    if (window.pageYOffset > sticky) {
        navbar.classList.add("fixed");
    } else {
        navbar.classList.remove("fixed");
    }
});