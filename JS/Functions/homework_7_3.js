/** Есть массив объектов, представляющих собой пользователей, каждый из которых имеет свойство age (возраст).
 * Создайте новый массив, содержащий только тех пользователей, чей возраст больше или равен 18.
 * Затем создайте новый массив, содержащий только свойства name (имя) каждого пользователя.*/

const users = [
    { name: "John", age: 25 },
    { name: "Jane", age: 17 },
    { name: "Bob", age: 30 },
    { name: "Mary", age: 16 }
];

const adults = users.filter(user => user.age >= 18);
const names = users.map(user => user.name);

console.log(adults);
console.log(names); 
