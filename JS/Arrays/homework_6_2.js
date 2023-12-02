/**
 * Есть массив:
 * const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ];
 * Создайте новый массив и запишите в него только уникальные значения из массива arr. Выведите получившийся массив в консоль.
 */

const arrInput = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ];
let arrOutput = [];
for (let i = 0; i < arrInput.length; i++) {
    if(!arrOutput.includes(arrInput[i])){
        arrOutput.push(arrInput[i])
    }
}
console.log(arrOutput.toString());
