function convertToJSON() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;

    const objectData = {
        name: name,
        age: +age,
        email: email
    };

    const jsonData = JSON.stringify(objectData);

    document.getElementById("result").innerText = jsonData;
}
