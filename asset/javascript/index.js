const navMenu = document.querySelector(".nav-link");
const navToggle = document.querySelector(".nav-bar-toggle-open");
const bannerSection = document.querySelector("#banner");
const heroSection = document.querySelector(".hero");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    if (navMenu.classList.contains("active")) {
        bannerSection.style.transform = "translateY(350px)"; // Adjust this value based on your navigation menu height
    } else {
        bannerSection.style.transform = "translateY(0)";
    }
}); 

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const scrollSpeed = 0.5; // Adjust the scroll speed factor
    
    heroSection.style.backgroundPositionY = `calc(50% + ${scrollY * scrollSpeed}px)`;
});



