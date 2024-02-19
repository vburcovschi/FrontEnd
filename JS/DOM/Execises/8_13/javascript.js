document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
    const nameValid = validateName();
    const emailValid = validateEmail();
    if (nameValid && emailValid) {
        alert("Форма отправлена успешно!");
    }
});

function validateName() {
    const nameInput = document.getElementById("name");
    const name = nameInput.value.trim();
    if (name.length === 0) {
        nameInput.classList.add("error");
        return false;
    }

    nameInput.classList.remove("error");
    return true;
}

function validateEmail() {
    var emailInput = document.getElementById("email");
    var email = emailInput.value.trim();
    if (email.length === 0) {
        emailInput.classList.add("error");
        return false;
    }

    emailInput.classList.remove("error");
    return true;
}
