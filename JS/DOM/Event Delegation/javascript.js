document.addEventListener("click", function (event) {
    if (event.target && event.target.classList.contains("add-btn")) {
        const cartCountElement = document.getElementById("cart-count");
        const currentCount = parseInt(cartCountElement.textContent);
        cartCountElement.textContent = currentCount + 1;
    }
});
