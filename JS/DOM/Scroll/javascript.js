window.addEventListener("scroll", function () {
    const scrollUpButton = document.querySelector(".scroll-up");
    const scrollDownButton = document.querySelector(".scroll-down");

    if (window.pageYOffset > 0) {
        scrollUpButton.style.display = "block";
    } else {
        scrollUpButton.style.display = "none";
    }

    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
        scrollDownButton.style.display = "none";
    } else {
        scrollDownButton.style.display = "block";
    }
});

document.querySelector(".scroll-up").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelector(".scroll-down").addEventListener("click", function () {
    window.scrollTo({ top: document.body.offsetHeight, behavior: "smooth" });
});
