/**
 * Напишите промис. Получайте в нём рандомное число от 1 до 20. Если число чётное — используйте resolve. Если нечётное — reject. */



const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNum = Math.floor(Math.random()*20+1);
            (randomNum % 2) === 0
                ? resolve(`${randomNum} - Четное число`)
                : reject(`${randomNum} - Нечетное число`);
        }, 500);
    });
    promise.then((res) => console.log(res)).catch((err) => console.log(err));
});
