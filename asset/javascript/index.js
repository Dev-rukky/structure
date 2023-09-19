const navMenu = document.querySelector(".nav-link");
const navToggle = document.querySelector(".nav-bar-toggle-open");
const bannerSection = document.querySelector("#banner");
const heroSection = document.querySelector(".hero");


navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    if (navMenu.classList.contains("active")) {
        bannerSection.style.transform = "translateY(350px)";
    } else {
        bannerSection.style.transform = "translateY(0)";
    }
});

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const scrollSpeed = 0.5;
    heroSection.style.backgroundPositionY = `calc(50% + ${scrollY * scrollSpeed}px)`;
    const nav = document.getElementById("nav-el");
    nav.classList.toggle("nav-white", window.scrollY > 0);
});


const navColor = () => {
    
}

