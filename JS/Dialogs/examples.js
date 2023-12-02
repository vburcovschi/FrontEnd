/*const name = prompt("Enter your name:")
alert(`Hello ${name}!`)*/

/*const thing = prompt("Enter the name of your things:");
const price = prompt(`Enter the price that you want to sell the "${thing}" of your things:`);
const confirmation = alert(`Are you sure that you want to sell the "${thing}" for ${price}`)*/


/**  Homework
Напишите скрипт, который с помощью метода prompt() запрашивает у пользователя любое число.
И после этого выводит на экран в методе alert():
в первой строке — само число;
во второй строке — квадрат этого числа;
в третьей строке — куб этого числа.
Имейте в виду, что значение из prompt() приходит в виде строки.
*
* */

/*const number = +prompt("Enter some number: ");
alert(`Original number: ${number}\nThe square of this number: ${Math.pow(number,2)}\nThe cube of this number: ${Math.pow(number,3)}`)*/

/**
 * На сайте имеется поле для ввода промокода. Пользователь может заполнить его и получить скидку, если промокод верен.
 * Ваша задача написать проверку для промокода: «скидка». Используйте prompt() для получения значений, а alert() для вывода фразы «Промокод применён» или «Промокод не работает». Учитывайте случаи когда пользователь может ввести «скиДка», «Скидка», «СКИДКА».
 * Входные данные: СкиДкА
 *
 * Выходные данные: Промокод применён
 *
 *
 */
/*const promoCode = prompt("Enter promocode:")
if(promoCode.toUpperCase() === "СКИДКА"){
    alert("Промокод применён")
}else
    alert("Промокод не работает");*/