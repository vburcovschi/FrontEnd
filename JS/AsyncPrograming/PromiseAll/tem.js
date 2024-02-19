setTimeout(() => {
    console.log('Таймаут!')
}, 0);

const pr = Promise.resolve('Промис выполнен.');

console.log('Первый лог в консоль.');
console.log('Второй лог в консоль.');


pr.then(res => console.log(res))