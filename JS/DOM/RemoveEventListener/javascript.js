const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

/*
function showAlert() {
    alert("Кнопка нажата");
}

function removeEvent() {
    button1.removeEventListener("click", showAlert);
    console.log("Событие удалено");
}
*/


/***Another way by callBack *******/

const showAlert = () => {
    alert("Кнопка нажата");
};

const removeEvent = () => {
    button1.removeEventListener("click", showAlert);
    console.log("Событие удалено");
};

button1.addEventListener("click", showAlert);
button2.addEventListener("click", removeEvent);
