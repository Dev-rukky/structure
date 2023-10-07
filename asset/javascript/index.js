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

// const toggleSwitch = document.getElementById("toggle-switch");

// toggleSwitch.addEventListener("change", () => {
//     const toggleLabel = toggleSwitch.nextElementSibling;
//     if (toggleSwitch.checked) {
//         toggleLabel.style.backgroundColor = "#4CAF50"; // Color when it's ON
//     } else {
//         toggleLabel.style.backgroundColor = "#ccc"; // Color when it's OFF
//     }
// });

const toggleContainer = document.querySelector('.toggle-on-container');
const onElement = document.querySelector('.on');
const offElement = document.querySelector('.off');
const toggleBackground = document.querySelector('#toggle-bg');


toggleContainer.addEventListener('click', () => {
    toggleBackground.classList.toggle('off-background');
    if (onElement.style.display === 'none') {
        offElement.style.display = 'none';
        onElement.style.display = 'block';
    } else {
        offElement.style.display = 'block';
        onElement.style.display = 'none';
    }
});




const pagesContainer1 = document.querySelector('.pages-1-container');
const pagesContainer2 = document.querySelector('.pages-2-container');
const totalPages1 = 5;
const totalPages2 = 7;

let currentPage1 = 1;
let currentPage2 = 1;

function updatePagination1() {

    const pages1 = document.querySelectorAll('.page');
    pages1.forEach(page => {
        page.classList.remove('page-active');
    });


    const currentPageElement = document.querySelector(`.page${currentPage1}`);
    currentPageElement.classList.add('page-active');
}

function updatePagination2() {
    const pages2 = document.querySelectorAll('.page__1 a');
    pages2.forEach(page => {
        page.classList.remove('page-active');
    });

    const currentPageElement = document.querySelector(`.page${currentPage2} a`);
    currentPageElement.classList.add('page-active');
}

document.querySelector('.page-next').addEventListener('click', () => {
    if (currentPage1 < totalPages1) {
        currentPage1++;
        updatePagination1();
    }
});

document.querySelector('.page-previous').addEventListener('click', () => {
    if (currentPage1 > 1) {
        currentPage1--;
        updatePagination1();
    }
});

const pageLinks = document.querySelectorAll('.page__1 a');
pageLinks.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        currentPage2 = index + 1;
        updatePagination2();
    });
});

updatePagination1();
updatePagination2();




function changeTab(tabNumber) {
    // Hide all tab content
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.style.display = 'none';
    });

    // Remove active class from all nav links
    const navLinks = document.querySelectorAll('.nav-pill-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Show the selected tab content and set the active class on the clicked nav link
    const selectedTab = document.getElementById(`content${tabNumber}`);
    const selectedNavLink = document.querySelector(`.nav-link:nth-child(${tabNumber})`);
    selectedTab.style.display = 'block';
    selectedNavLink.classList.add('active');
}

// JavaScript for menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navigationCon1 = document.querySelector('.nav-container');

menuToggle.addEventListener('click', () => {
    navigationCon1.classList.toggle('menu-1-right-active');
});
