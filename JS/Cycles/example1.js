let num; // здесь будем сохранять число введённое пользователем
let sum = 0; // переменная для хранения суммы чисел
let i = 1;
// используем цикл do...while так как нужно выполнить код хотя бы один раз
do {
    num = +prompt(`Введите число ${i}`); // получаем значение от пользователя и приводим к типу number
    if (typeof num === 'number') { // проверяем, что в переменной записано число, так как может быть значение NaN или null, если пользователь отказался вводить данные
        console.log(`Введено число: ${num}`); // вывод в консоль
        sum += num; // прибавляем к переменной введённое значение
        console.log(`Сумма ${i} введённых чисел: ${sum}`); // вывод в консоль
    }
    i += 1;
} while (num) // будет выполняться, если в переменной записано значение, отличное от null, false или undefined
console.log(`Общая сумма: ${sum}`); // вывод в консоль