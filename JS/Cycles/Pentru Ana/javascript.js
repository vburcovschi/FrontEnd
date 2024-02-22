// Primim link-urile elementelor de pe pagina.
const input = document.querySelector('input');
const button = document.querySelector('button');
const jsonText = document.querySelector('#json');
let output = document.querySelector('#output');

// Functia care creaza si umple tabelul
    function createAndFillTable(data) {
        // Stergem tabelul daca exista
        output.innerHTML = "<h3>Tabel</h3>";
        // Cream tabelul
        let table = document.createElement('table');
        // Cream Header-ul tabelului
        let thead = table.createTHead();
        let headerRow = thead.insertRow();
        //Umplem Header-ul tabelului cu denumirele coloanelor echivalente cu cimpurile obiectului
        for (let field_name in data[0]) {
            let th = document.createElement('th');
            th.appendChild(document.createTextNode(field_name));
            headerRow.appendChild(th);
        }
        // Umplem tabelul cu datele din obiect
        let tbody = table.createTBody();
        for (let i = 0; i < data.length; i++) {
            let row = tbody.insertRow();
            for (let value in data[i]) {
                if (data[i][value] === data[i].address) {
                    let cell = row.insertCell();
                    cell.appendChild(document.createTextNode(data[i].address.street+', '+data[i].address.suite+', '+data[i].address.city+', '+data[i].address.zipcode));
                    } else if (data[i][value] === data[i].company) {
                    let cell = row.insertCell();
                    cell.appendChild(document.createTextNode(data[i].company.name+', '+data[i].company.catchPhrase+', '+data[i].company.bs));
                } else{
                let cell = row.insertCell();
                cell.appendChild(document.createTextNode(data[i][value]));
                }
            }
        }
        output.appendChild(table);
    }

// Adaugam tabelul in pagina
button.addEventListener('click', () => {
    const value = parseInt(input.value, 10);
    if (value < 1 || value > 10 || isNaN(value)) {
        output.textContent = 'Cifra este inafara diapazonului de la 1 la 10!';
        return
    } else {
        const url = `https://jsonplaceholder.typicode.com/users?_limit=${value}`;
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = function () {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                jsonText.innerHTML = "<h3>Datele receptionate de pe server</h3>"
                jsonText.innerHTML += JSON.stringify(data, null, 2);
                createAndFillTable(data);
                console.log(data);
            } else {
                colnsole.log('Erroare la incarcarea datelor!');
                output.textContent = 'Erroare la incarcarea datelor!';
            }
        };
        xhr.send();
    }
});
