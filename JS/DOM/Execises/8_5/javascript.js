const input = document.querySelector("#input");
const output = document.querySelector("#output");

const inputHandler = (e) => {
    if (e.target.value.length < 8) {
        output.textContent = "Предупреждение: некорректное значение";
    } else {
        output.textContent = "Значение корректно";
    }
};

input.addEventListener('input', inputHandler);
