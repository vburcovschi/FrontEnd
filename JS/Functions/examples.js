/*
function myFunction1(functionPar){
    functionPar();
    return function (){
        console.log("Hello from myFunction1");
    }
}

function myFunction2(){
    console.log("Hello from myFunction2")
}
const resultFunction = myFunction1(myFunction2);

resultFunction();*/


/*/!***************************************************************!/

let x = 10;
let y = 5;
let z = 2;

if (x > y) {
    console.log("x больше y");
} else if (x === y) {
    console.log("x равно y");
} else {
    console.log("y больше x");
}

if (z > y && z < x) {
    console.log("z находится между x и y");
} else if (z === y || z === x) {
    console.log("z равно x или y");
} else {
    console.log("z находится за пределами x и y");
}*/

/**
 * Напишите функцию, которая принимает два аргумента:
 * число x
 * функцию f
 *
 * Функция должна возвратить результат выполнения функции f для аргумента x.
 *
 * Пример использования:*/
/*const myFunc = (x, f) => f(x);
const result = myFunc(10, function (num) { return num * 2; });
console.log(result); */

/**
 * Напишите функцию multiplyByTwo, которая принимает число и возвращает его удвоенное значение.
 * Далее напишите функцию applyToNumber, которая принимает число и функцию в качестве аргументов и
 * применяет эту функцию к числу. Используйте функцию applyToNumber для удвоения числа 5.*/
/*
function multiplyByTwo(num) {
    return num * 2;
}

function power(num) {
    return num * num;
}

function applyToNumber(num, func) {
    return func(num);
}

let result = applyToNumber(5, multiplyByTwo);
console.log(result);*/

/**
 * Напишите функцию myReduce, которая принимает массив, функцию-аккумулятор и начальное значение в качестве аргументов.
 * Функция-аккумулятор должна принимать два аргумента: аккумулирующее значение и текущий элемент массива.
 * А ещё — возвращать новое аккумулирующее значение. Функция myReduce должна вернуть конечное аккумулирующее значение.
 * Используйте функцию myReduce для вычисления суммы чисел от 1 до 5.*/

/*function myReduce(array, accumulatorFunction, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < array.length; i++) {
        accumulator = accumulatorFunction(accumulator, array[i]);
    }
    return accumulator;
}

const sum = myReduce([1, 2, 3, 4, 5], (accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum);*/

/**
 * Напишите функцию myMap, которая принимает массив и функцию-трансформер в качестве аргументов.
 * Функция-трансформер должна принимать элемент массива и возвращать его преобразованное значение.
 * Функция myMap должна вернуть новый массив, содержащий элементы исходного массива, преобразованные функцией-трансформером.
 * Используйте функцию myMap для получения массива квадратов чисел от 1 до 5.*/

/*function myMap(arr, transformer) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(transformer(arr[i]));
    }
    return result;
}

const numbers = [1, 2, 3, 4, 5];
const squares = myMap(numbers, num => num * num);
console.log(squares);*/

/**
 * Напишите функцию filterArray, которая принимает массив и функцию-предикат в качестве аргументов.
 * Функция-предикат должна принимать элемент массива и возвращать true или false в зависимости от того,
 * соответствует ли элемент условию. Функция filterArray должна вернуть новый массив, содержащий только
 * те элементы исходного массива, для которых функция-предикат вернула true. Используйте функцию filterArray
 * для выбора только положительных чисел из массива [-1, 2, -3, 4, -5].*/
/*function filterArray(arr, predicateFunc) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (predicateFunc(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

function isPositive(num) {
    return num > 0;
}

function isEven(num){
    return num%2 != 0;
}

let nums = [-1, 2, -3, 4, -5];
let positiveNums = filterArray(nums, isPositive);
console.log(positiveNums);
let evenNums = filterArray(nums, isEven);
console.log(evenNums)*/

/**
 * Напишите стрелочную функцию, которая принимает массив чисел в качестве параметра и возвращает сумму всех чисел в массиве.*/
/*const numbers = [3, 5, 1, 8, 2];
const sum = numbers => numbers.reduce((total, num) => total + num, 0);
console.log(sum(numbers));*/

/**
 * Напишите стрелочную функцию, которая принимает массив строк и возвращает новый массив, содержащий только
 * строки с более чем пятью символами.*/
/*
const strings = ['apple', 'banana', 'pear', 'orange', 'grapefruit'];
const filterLongStrings = arr => arr.filter(str => str.length > 5);
console.log(filterLongStrings(strings));*/

/**Дан массив строк ["apple", "banana", "cherry", "date", "elderberry"]. Используя функции высшего порядка,
объедините все строки в одну строку, разделенную запятыми. Ожидаемый результат: строка, представляющая все
 элементы массива, разделенные запятыми.*/
/*const arr = ["apple", "banana", "cherry", "date", "elderberry"];
const result = arr.reduce((acc, curr) => acc + ", " + curr);
console.log(result);*/
/**
 * Есть массив объектов, представляющих собой пользователей, каждый из которых имеет свойство age (возраст).
 * Вычислите средний возраст пользователей. Ожидаемый результат: число, представляющее средний возраст.
 */
/*const users = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Bob", age: 40 },
    { name: "Alice", age: 28 },
];
const averageAge = users.reduce((acc, user) => {
    return {sum: acc.sum + user.age, count: acc.count + 1};
}, {sum: 0, count: 0});
const result = averageAge.sum / averageAge.count;
console.log(result);*/

/*Замыкания*/
/*function makeCounter(step) {
    let count = 0;
    return function counter() {
        count += step;
        console.log(count);
    };
}
let counter1 = makeCounter(1);
let counter2 = makeCounter(10);
counter1();
counter2();
counter1();
counter2();
counter1();
counter2();*/

//  Контекст

/*const person = {
    name: 'Dart Wader',
    greet: function () {
        console.log(`Меня зовут -- ${this.name}`);
    }
};

const secondPerson = {
    name: 'Luke Skywalker'
};

person.greet();
const greetLuke = person.greet.bind(secondPerson);
greetLuke();

function sayHello() {
    console.log(`Hello, ${this.name}!`);
}

sayHello.call(person);
sayHello.call(secondPerson);

person.greet.apply(secondPerson);*/
/*
const numbers = [1, 5, 2, 9, 3];
const maxNumber = Math.max.apply(null, numbers);

console.log(maxNumber); */

const person = {
    firstName: "John",
    lastName: "Doe"
};

function getFullName() {
    return this.firstName + " " + this.lastName;
}
const logFullName = getFullName.bind(person);

console.log(logFullName());

function greeting(name) {
    console.log(`Hello, ${this.firstName} ${this.lastName}!`);
}

greeting.apply(person);
