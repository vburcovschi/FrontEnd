/*let myArray = [3,6,7,8,2]

console.log('Parcing with for')
for (let i = 0; i < myArray.length; i++) {
    console.log(`Element ${i} is ${myArray[i]}`)
}

console.log('Parcing with while')
let i = 0;
while (i<=myArray.length-1){
    console.log('Element '+i+' is '+myArray[i])
    i++
}

console.log('Parcing with forEach')
myArray.forEach(function (item,index,array){
    console.log('Element '+index+' is '+item)
});*/

// Homework
/*
Дан массив. Проверить, одинаковые ли элементы в массиве и вывести
результат true или false в консоль. Речь идёт не о двух рядом стоящих
одинаковых элементах, а обо всех. Проверить, все ли элементы в
массиве одинаковые.
 */

/*let myArray = [3,6,7,8,2,7,4,5]
let criteria = false;

for (let i = 0; i < myArray.length; i++) {
    for (let j = i+1; j < myArray.length; j++) {
        if (myArray[i] == myArray[j])
            criteria = true;
        //debugger
    }
}
if (criteria){
    console.log('This array array contains same elements')
} else
    console.log('This array array doesn\'t contains same elements')*/


/*
Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов
в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится
отдельно. При выполнении задания необходимо учесть, что массив может содержать
не только числа, но и, например, знаки, null и так далее.
 */

/*let myArray = [3,6,7,'uy',"a",7,4,null]
let countOdd = 0
let countEven = 0

for (let i = 0; i <= myArray.length; i++) {

    if (typeof myArray[i] === "number"){
        if(myArray[i]%2==0){
            countEven += 1
        }else{
            countOdd += 1
        }
    }
}

console.log(`This array contains ${countEven} even numbers and ${countOdd} numbers`)*/

let value = 5;
while(value > 0) {
    console.log(value);
    if (value <= 3) {break;}
            value -= 1;

}