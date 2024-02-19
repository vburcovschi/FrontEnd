const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-toggle");
window.addEventListener("resize", () => {
    if (window.innerWidth <= 768) {
        menuBtn.classList.add("visible");
        menu.classList.remove("visible");
    } else {
        menu.classList.add("visible");
        menuBtn.classList.remove("visible");
    }
});
