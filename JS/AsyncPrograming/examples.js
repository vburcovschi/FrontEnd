/*
let hedgehogName = 'Игнат';
function hedgehogNaming() {
    let hedgehogName = 'Васёк';
    console.log(hedgehogName);
}
hedgehogNaming();
console.log(hedgehogName);*/

/*function pancakeBaker() {
    console.log("Тесто готово, давайте жарить!");

    console.log("Наливаем тесто для одного блинчика.");

    setTimeout(() => {
        console.log("Перевернём блин на другую сторону и подождём ещё.");

        setTimeout(() => {
            console.log("Блинчик готов!");
        }, 5000);
    }, 5000);
    setTimeout(() =>{
        console.log('Пока постоим и подождём.')
    },2000);

}

pancakeBaker();*/

const firstFunction = (num) => {
    console.log(`Первая функция работает, аргумент равен ${num}`);
};

const secondFunction = (a) => {
    console.log("Вторая функция работает");
    return firstFunction(a);
};

const thirdFunction = () => {
    console.log("Третья функция работает");
    return secondFunction(3);
};

const forthFunction = () => {
    console.log("Четвертая функция работает");
    return thirdFunction();
};

forthFunction();
