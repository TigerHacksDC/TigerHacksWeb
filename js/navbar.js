// navbar appearing after scroll
const navbarWrapper = document.getElementById("navbar-wrapper");
const navbarScroll = 10; // how far scrolled should the page be before the navbar shows
window.addEventListener("scroll", (e) => {
    if (window.scrollY >= navbarScroll) {
        navbarWrapper.classList.remove("hidden");
    } else {
        navbarWrapper.classList.add("hidden");
    }
});

const navbarButton = document.getElementById("navbar-button-wrapper");
navbarButton.addEventListener("click", () => {
    window.innerWidth <= 500 && document.getElementById("navbar").classList.toggle("active");
})