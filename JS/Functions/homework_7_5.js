/**Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только уникальные числа,
 * отсортированные в порядке возрастания.
 * */
function getUniqueSortedNumbers(numbers) {
    const uniqueNumbers = [...new Set(numbers)];
    const sortedNumbers = uniqueNumbers.sort((a, b) => a - b);
    return sortedNumbers;
}
const numbers = [5, 2, 8, 2, 1, 5, 9, 8];
const uniqueSortedNumbers = getUniqueSortedNumbers(numbers);

console.log(uniqueSortedNumbers);

