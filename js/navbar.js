// navbar appearing after scroll
const navbar = document.getElementById("navbar");
const navbarScroll = 50; // how far scrolled should the page be before the navbar shows
window.addEventListener("scroll", (e) => {
    if (window.scrollY >= navbarScroll) {
        navbar.classList.remove("hidden");
    } else {
        navbar.classList.add("hidden");
    }
});

