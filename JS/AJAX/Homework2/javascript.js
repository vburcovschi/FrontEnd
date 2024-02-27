// Primim link-urile elementelor de pe pagina.
const inputWidth = document.querySelector('#numberInput1');
const inputHeight = document.querySelector('#numberInput2');
const button = document.querySelector('button');
let output = document.querySelector('#output');

// Adaugam imaginea in pagina
button.addEventListener('click', () => {
    const width = parseInt(inputWidth.value, 10);
    const height = parseInt(inputHeight.value, 10);
    if ((width===height) || isNaN(width) || isNaN(height)) {
        output.textContent = 'cifrele trebuie sa fie diferite sau sa fie numere!';
        return
    } else {
        const url = `https://dummyimage.com/${width}x${height}/`;
        console.log(url);
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.blob();
            })
            .then(blob => {
                const imageUrl = URL.createObjectURL(blob);
                const imageElement = document.createElement("img");
                imageElement.src = imageUrl;
                output.innerHTML = "<br>";
                output.appendChild(imageElement);
            })
            .catch(() => {
                console.log('Erroare la incarcarea datelor!');
                output.textContent = 'Erroare la incarcarea datelor!';
            });
    }
});
