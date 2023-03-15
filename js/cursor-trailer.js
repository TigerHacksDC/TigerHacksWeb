
const trailer = document.getElementById("cursor-trailer");

document.body.onmouseenter = e => {

    // offset position so it's center instead of top left
    let x = e.clientX - (trailer.offsetWidth / 2);
    let y = e.clientY - (trailer.offsetHeight / 2);

    trailer.style.transform = `translate(${x}px, ${y}px)`;

}

document.getElementById("tiles").onmouseenter = () => {
    trailer.style.opacity = 1;
}
document.getElementById("tiles").onmouseleave = () => {
    trailer.style.opacity = 0;
}

window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight) {
        trailer.style.opacity = 0;
    }
})

window.onmousemove = e => {

    // offset position so it's center instead of top left
    let x = e.clientX - (trailer.offsetWidth / 2);
    let y = e.clientY - (trailer.offsetHeight / 2);

    trailer.animate({
        transform: `translate(${x}px, ${y}px)`,
    }, {
        duration: 300,
        fill: "forwards",
    })

}