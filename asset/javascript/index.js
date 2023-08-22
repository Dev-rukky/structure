const navMenu = document.querySelector(".nav-link ul");
const navToggle = document.getElementById("nav_toggle");
const dropdown = document.querySelector(".dropdown-menu");

navToggle.addEventListener("click", () => {
    if(navMenu.style.display === "flex") {
        navMenu.style.display = "none";
        
    }else {
        navMenu.style.display = "flex";
    }
});


