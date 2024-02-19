const form = document.querySelector("form");

//form.addEventListener("submit", (e) => handleFormSubmit(e));

/*** another way*/
form.onsubmit = (e) => handleFormSubmit(e);

function handleFormSubmit(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    alert("Вы вошли в аккаунт!");
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}
