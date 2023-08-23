const navMenu = document.querySelector(".nav-link");
const navToggle = document.querySelector(".nav-bar-toggle-open");
const bannerSection = document.querySelector("#banner");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    if (navMenu.classList.contains("active")) {
        bannerSection.style.transform = "translateY(350px)"; // Adjust this value based on your navigation menu height
    } else {
        bannerSection.style.transform = "translateY(0)";
    }
});



