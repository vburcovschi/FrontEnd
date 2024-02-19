const counterElement = document.getElementById("counter");
const incrementButton = document.getElementById("increment");
const resetButton = document.getElementById("reset");

let count = 0;

function updateCounter() {
    count++;
    counterElement.textContent = count;

    if (count >= 42) {
        resetButton.style.display = "block";
        incrementButton.removeEventListener("click", updateCounter);
    }
}

incrementButton.addEventListener("click", updateCounter);

resetButton.addEventListener("click", function () {
    count = 0;
    counterElement.textContent = count;
    resetButton.style.display = "none";
    incrementButton.addEventListener("click", updateCounter);
});
