const obj = {
    first: 'Some',
    second: 'Value',
    third: 1
}

/*const key = 'name';
console.log('name' in obj);
console.log(key in obj);*/


const user = {
    name: 'Luna',
    age: 40,
    hairColor: 'black',
}

for (let key in user) {
    // ключи
    console.log(key); // name, age, hairColor

    // значение ключей
    console.log(user[key]); // Luna, 40, black
}