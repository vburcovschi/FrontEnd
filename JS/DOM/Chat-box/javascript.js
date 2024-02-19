const supportButton = document.querySelector(".support-button");
const chatBox = document.querySelector(".chat-box");
const closeButton = chatBox.querySelector(".close-button");

supportButton.addEventListener("click", function () {
    chatBox.classList.add("active");
});

closeButton.addEventListener("click", function () {
    chatBox.classList.remove("active");
});
