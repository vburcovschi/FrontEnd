/**
 * Написать функцию, которая принимает число как аргумент и возвращает функцию,
 * которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.
 * */

function myFunction(numberA){
    return function (numberB){
        return numberA+numberB;
    }
}

const sumFunction = myFunction(4);
const resultSum = sumFunction(2);
console.log(resultSum)

/**
 * Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить в консоль,
 * начиная от первого и заканчивая вторым. Используйте setInterval.
 *
 * Например, пользователь ввёл числа 5 и 15. Каждую секунду в консоль должно печататься число,
 * начиная с 5 и заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).
* */

function printNumbers(start, end) {
    let current = start;

    const intervalId = setInterval(function() {
        console.log(current);
        if (current === end) {
            clearInterval(intervalId);
        }
        current++;
    }, 1000);
}

printNumbers(5, 15);


/**
 * Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n.
 * Иначе говоря, умножает x на себя n раз и возвращает результат.
 *
 * Используйте Arrow Function синтаксис.
 *
 * Протестируйте функцию на любых значениях и выведите результат в консоль.
 *
 * */
const power = (x, n) => x ** n;

const resultPower = power(5, 4);
console.log(resultPower);
