const openButton = document.getElementById("btn");
const popup = document.getElementById("popup");

openButton.addEventListener("click", () => {
    popup.style.display = "block";
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        popup.style.display = "none";
    }
});
