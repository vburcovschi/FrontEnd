// Primim link-urile elementelor de pe pagina.
const inputPage = document.querySelector('#pageInput');
const inputLimit = document.querySelector('#limitInput');
const button = document.querySelector('button');
let output = document.querySelector('#output');

// Adaugam lista imaginea in pagina
button.addEventListener('click', () => {
    const page = parseInt(inputPage.value, 10);
    const limit = parseInt(inputLimit.value, 10);
    switch (true){
        case ((page<1 || page>10)) && (limit<1 || limit>10) || isNaN(page) && isNaN(limit):
            output.textContent = 'Номер страницы и лимит вне диапазона от 1 до 10';
            return
        case (page<1 || page>10) || isNaN(page):
            output.textContent = 'Номер страницы вне диапазона от 1 до 10';
            return
        case (limit<1 || limit>10) || isNaN(limit):
            output.textContent = 'Лимит вне диапазона от 1 до 10';
            return
        default:
            const url = `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`;
            console.log(url);
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return response.json();
                })
                .then(data => {
                    output.innerHTML = "<br>";
                    console.log(data);
                    data.forEach(photo => {
                        const imageElement = document.createElement("img");
                        imageElement.src = photo.url;
                        output.appendChild(imageElement)
                    });
                })
                .catch(error => {
                    console.log('Erroare la incarcarea datelor!', error);
                    output.textContent = 'Erroare la incarcarea datelor!';
                });
    }
});
