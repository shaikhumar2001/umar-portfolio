//* SCROLL TO TOP BUTTON start
const headerSection = document.querySelector(".header");
const heroSection = document.querySelector(".section-hero");
const aboutSection = document.querySelector(".section-about");
const footerElement = document.querySelector(".section-footer");

const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style", "arrow-down-translate");
scrollElement.innerHTML = `<i class="fa-solid fa-arrow-down" id="scrollFloatingButton"></i>`;

footerElement.after(scrollElement);

const scrollTop = () => {
    headerSection.scrollIntoView({ behavior: "smooth" });
};

const scrollToAbout = () => {
    aboutSection.scrollIntoView({ behavior: "smooth" });
};

scrollElement.addEventListener("click", scrollToAbout);

window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    const heroHeight = heroSection.offsetHeight;

    const scrollFloatingButton = document.getElementById(
        "scrollFloatingButton"
    );

    if (scrollPosition < heroHeight) {
        scrollFloatingButton.classList.remove("fa-arrow-up");
        scrollFloatingButton.classList.add("fa-arrow-down");
        scrollElement.classList.add("arrow-down-translate");
        scrollElement.addEventListener("click", scrollToAbout);
    } else {
        scrollFloatingButton.classList.remove("fa-arrow-down");
        scrollElement.classList.remove("arrow-down-translate");

        scrollFloatingButton.classList.add("fa-arrow-up");
        scrollElement.addEventListener("click", scrollTop);
    }
});
//* SCROLL TO TOP BUTTON end

//* ACTIVE CLASS RESPONSIVE NAV start
const menuButton = document.querySelector(".mobile-nav-btn");
const navListButtons = document.querySelectorAll(
    ".header .navbar .navbar-list li"
);

const toggleMenuButton = () => {
    headerSection.classList.toggle("active");
    document.documentElement.classList.toggle("no-scroll-touch");
    document.body.classList.toggle("no-scroll-touch");
};

menuButton.addEventListener("click", toggleMenuButton);

navListButtons.forEach((navListButton) => {
    navListButton.addEventListener("click", toggleMenuButton);
});

//* ACTIVE CLASS RESPONSIVE NAV end
