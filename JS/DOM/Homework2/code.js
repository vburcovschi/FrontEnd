/*async function getRandomDogImage() {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random");
        if (!res.ok) {
            throw new Error("Что-то пошло не так!");
        }
        const data = await res.json();
        if (data) {
            const url = data.message;
            displayDogImage(url);
        }
    } catch (e) {
        console.error(e.message);
    }
}*/
const wrap = document.querySelector(".wrap");
async function getRandomBulkDogImage() {
    try {
        const res = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
        if (!res.ok) {
            throw new Error("Что-то пошло не так!");
        }
        data = await res.json();
        if (data) {
            //const url = data.url;
            displayDogImages(data);
        }
    } catch (e) {
        console.error(e.message);
    }
}
// Вывод картинки на страницу
function displayDogImages(data) {
    for (let i = 0; i < data.length; i++) {
        console.log(data[i].url);
        let elem = `<img src=${data[i].url}>`;
        wrap.innerHTML += elem;
    }
}
