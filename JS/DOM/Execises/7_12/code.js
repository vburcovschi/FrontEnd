const profile = document.querySelector(".profile");
const data = document.querySelector(".data");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const lastName = document.getElementById("last-name").value;
    const age = document.getElementById("age").value;
    if (name && lastName && age) {
        const user = {
            name,
            lastName,
            age
        };

        displayUserProfile(user);
    } else {
        data.textContent = "Вы не ввели все данные!";
    }
});

function displayUserProfile(user) {
    data.innerHTML = "";

    for (const key in user) {
        const value = user[key];
        const profileItem = document.createElement("div");
        profileItem.innerHTML = `<strong>${key}:</strong> <span>${value}</span>`;
        data.appendChild(profileItem);
    }
}
