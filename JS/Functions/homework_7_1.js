/**
 * Создайте функцию printInfo, которая будет выводить информацию о человеке в формате "Name: <имя>, Age: <возраст>".
 * Создайте объект person с двумя свойствами: name и age. Используйте метод call, чтобы вызвать функцию printInfo от
 * имени объекта person.*/

function printInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
}
const person = {
    name: "John",
    age: 30
};
printInfo.call(person);
