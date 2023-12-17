function runToIceCream(runner) {
    const randomDelay = Math.floor((Math.random() * 5000 + 1000)/1000); // Случайная задержка от 1 до 6 секунд
    return new Promise((resolve, reject) => {
            setTimeout(() => {
                randomDelay <=4
                    ? resolve(`${runner} — победитель! Добежал за ${randomDelay} сек.`)
                    : reject ();
            }, randomDelay);
        console.log(`${runner} добежал за ${randomDelay} сек.`)
    });
}

const you = runToIceCream('Вы');
const friend1 = runToIceCream('Друг 1');
const friend2 = runToIceCream('Друг 2');

Promise.race([you, friend1, friend2])
    .then(winner => {
        console.log(winner);
    })
    .catch(error => {
        console.error('Поздно. Мороженое растаело: ' + error);
    });