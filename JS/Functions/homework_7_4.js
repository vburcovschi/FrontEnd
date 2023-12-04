/**Создайте функцию setFullName, которая будет устанавливать свойство fullName у переданного ей объекта.
 * Используйте метод bind, чтобы создать новую функцию setPersonFullName, которая будет устанавливать fullName
 * для объекта person из предыдущего примера. Вызовите setPersonFullName с параметром "John Smith" и убедитесь,
 * что свойство fullName объекта person было изменено соответствующим образом.
 * */

function setFullName(fullName) {
    this.fullName = fullName;
}
const person = {
    name: "John",
    age: 30
};

const setPersonFullName = setFullName.bind(person);

setPersonFullName("John Smith");

console.log(person.fullName); // Output: John Smith
