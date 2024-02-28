// Primim link-urile elementelor de pe pagina.
const inputPage = document.querySelector('#pageInput');
const inputLimit = document.querySelector('#limitInput');
const button = document.querySelector('button');
let output = document.querySelector('#output');

const myCash = localStorage.getItem('cash');
if (myCash) {
    console.log('Reading localStorage ', JSON.parse(myCash));
    displayData(JSON.parse(myCash));
}

// Adaugam lista imaginea in pagina
button.addEventListener('click', () => {
    const page = parseInt(inputPage.value, 10);
    const limit = parseInt(inputLimit.value, 10);
    switch (true) {
        case ((page < 1 || page > 10)) && (limit < 1 || limit > 10) || isNaN(page) && isNaN(limit):
            output.textContent = 'Numărul paginii și limita în afara intervalului de la 1 la 10';
            return
        case (page < 1 || page > 10) || isNaN(page):
            output.textContent = 'Numărul paginii nu este în intervalul de la 1 la 10';
            return
        case (limit < 1 || limit > 10) || isNaN(limit):
            output.textContent = 'Limită în afara intervalului de la 1 la 10';
            return
        default:
            const url = `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`;
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Răspunsul rețelei nu a fost ok");
                    }
                    return response.json();
                })
                .then(data => {
                    output.innerHTML = "<br>";
                    localStorage.setItem('cash', JSON.stringify(data));
                    console.log('Setting localStorage', JSON.parse(localStorage.getItem('cash')));
                    displayData(data);
                })
                .catch(error => {
                    console.log('Erroare la incarcarea datelor!', error);
                    output.textContent = 'Erroare la incarcarea datelor!';
                });
    }
});

function displayData(data) {
    data.forEach(photo => {
        const imageElement = document.createElement("img");
        imageElement.src = photo.url;
        output.appendChild(imageElement)
    });
}
