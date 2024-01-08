// Получаем ссылку на элемент анимации
const element = document.getElementById("animated-element");
// получаем ширину окна и вычитаем ширину шара, чтобы он не уходил за границы
const maxWidth = window.innerWidth - 50;

// Задаем начало движения, скорость движения и скорость вращения
let position = 0;
let speed = 2;
let rotationSpeed = 5;

function animate() {
    position += speed;

    // Обновляем положение элемента
    element.style.left = position + "px";

    // Проверяем, достиг ли элемент границы контейнера
    if (position >= maxWidth || position <= 0) {
        // Если достиг, то заставляем его катиться назад
        speed = -speed;
    }

    // Вращение элемента
    element.style.transform = "rotate(" + rotationSpeed + "deg)";

    // Увеличиваем угол вращения
    rotationSpeed += 5;

    // Вызываем функцию через 10 миллисекунд
    setTimeout(animate, 10);
}

// Запускаем анимацию
if (element) animate();
