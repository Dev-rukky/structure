const navMenu = document.querySelector(".nav-link");
const navToggle = document.querySelector(".nav-bar-toggle-open");
const bannerSection = document.querySelector("#banner");
const heroSection = document.querySelector(".hero");
const dropBtn1 = document.getElementById("dropdown-btn1");
const dropInfo1 = document.getElementById("dropdown-info1");
const dropBtn2 = document.getElementById("dropdown-btn2");
const dropInfo2 = document.getElementById("dropdown-info2");
const dropBtn3 = document.getElementById("dropdown-btn3");
const dropInfo3 = document.getElementById("dropdown-info3");
const floatEl = document.getElementById("float-input");
const labelEl = document.getElementById("float-label");
const uncheckEl = document.getElementById("unchecked-icon");
const checkEl = document.getElementById("checked-icon");
const checkRadio = document.getElementById("checked-radio");
const uncheckRadio = document.getElementById("unchecked-radio");









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



const hideAllExcept = (elementToKeep) => {
    const elementsToHide = [dropInfo1, dropInfo2, dropInfo3];
    elementsToHide.forEach(element => {
        if (element !== elementToKeep) {
            element.classList.remove("drop-show");
        }
    });
}

dropBtn1.addEventListener("click", () => {
    dropInfo1.classList.toggle("drop-show");
    hideAllExcept(dropInfo1);
});

dropBtn2.addEventListener("click", () => {
    dropInfo2.classList.toggle("drop-show");
    hideAllExcept(dropInfo2);
});

dropBtn3.addEventListener("click", () => {
    dropInfo3.classList.toggle("drop-show");
    hideAllExcept(dropInfo3);
});


floatEl.addEventListener("click", () => {
    labelEl.classList.toggle("label-float");
});


uncheckEl.addEventListener("click", () => {
    uncheckEl.classList.add("click-check");
    checkEl.classList.remove("click-check");
});

checkEl.addEventListener("click", () => {
    checkEl.classList.add("click-check");
    uncheckEl.classList.remove("click-check");
});


checkRadio.addEventListener("click", () => {
    checkRadio.classList.add("radiomark-clicked");
    uncheckRadio.classList.remove("radiomark-clicked");
});

uncheckRadio.addEventListener("click", () => {
    uncheckRadio.classList.add("radiomark-clicked");
    checkRadio.classList.remove("radiomark-clicked");
});

const toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("change", () => {
    const toggleLabel = toggleSwitch.nextElementSibling;
    if (toggleSwitch.checked) {
        toggleLabel.style.backgroundColor = "#4CAF50"; // Color when it's ON
    } else {
        toggleLabel.style.backgroundColor = "#ccc"; // Color when it's OFF
    }
});
