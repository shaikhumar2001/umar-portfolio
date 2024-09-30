//* SCROLL TO TOP BUTTON start
const headerSection = document.querySelector(".header");
const heroSection = document.querySelector(".section-hero");
const aboutSection = document.querySelector(".section-about");
const footerElement = document.querySelector(".section-footer");

const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style", "arrow-down-translate");
scrollElement.innerHTML = `<a href="#"><i class="fa-solid fa-arrow-up" id="scrollFloatingButton"></i><a/>`;

footerElement.after(scrollElement);
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
    navListButton.addEventListener("click", (e) => {
        headerSection.classList.remove("active");
        document.documentElement.classList.remove("no-scroll-touch");
        document.body.classList.remove("no-scroll-touch");

        // const clickedElementName = e.target.name;
        // const clickedElement = document.getElementById(clickedElementName);
        // clickedElement.scrollIntoView({ behavior: "smooth" });

        // console.log(clickedElement);
    });
});

//* ACTIVE CLASS RESPONSIVE NAV end

//* STICK NAVBAR start
window.onscroll = () => {
    const header = document.querySelector(".header");

    header.classList.toggle("sticky", window.scrollY > 50);
};

// window.addEventListener("scroll", () => {
//     const header = document.querySelector(".header");
//     if (window.scrollY > 50) {
//         header.classList.add("sticky");
//     } else {
//         header.classList.remove("sticky");
//     }
// });
//* STICK NAVBAR end
