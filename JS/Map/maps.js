/*let map = new Map();
map.set(1,"A");
map.set(2,"B");
map.set(3,"C");
map.set(4,"D");
map.set(5,"E");

for (let i = 1; i <= map.size; i++) {
    console.log(map.get(i));
}
console.log("***************************************")
for (let mapElement of map.values()) {
    console.log(mapElement)
}*/

/*
* HomeWork
* Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде
* «Ключ — Х, значение — Y». Используйте шаблонные строки.
*
* */

let map = new Map();
for (let i = 0; i <= 10; i++) {
    map.set(i, Math.floor(Math.random()*100))
}

for (let i = 0; i <= map.size; i++) {
    console.log(`Key - ${i}, value ${map.get(i)}`)
}