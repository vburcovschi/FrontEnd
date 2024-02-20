// Получаем ссылки на элементы
const input = document.querySelector('input');
const button = document.querySelector('button');
const output = document.querySelector('#output');

// Обработчик клика на кнопку
button.addEventListener('click', () => {
    const value = parseInt(input.value, 10);
    if (value < 1 || value > 10 || isNaN(value)) {
        output.textContent = 'Число вне диапазона от 1 до 10';
    } else {
        const url = `https://jsonplaceholder.typicode.com/photos?_limit=${value}`;
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = function () {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                const images = data.map(photo => {
                    const img = document.createElement('img');
                    img.src = photo.url;
                    return img;
                });
                output.innerHTML = '';
                images.forEach(img => output.appendChild(img));
            } else {
                output.textContent = 'Ошибка при загрузке изображений';
            }
        };
        xhr.send();
    }
});
