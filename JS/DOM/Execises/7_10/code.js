function submitForm() {
    const color = document.getElementById("colorInput").value;
    const month = document.getElementById("monthInput").value;

    const resultParagraph = document.getElementById("result");
    resultParagraph.textContent = `Ваш любимый цвет: ${color}. Ваш любимый месяц: ${month}`;
}
