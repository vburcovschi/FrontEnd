/**
 * Напишите код, который применяет promise.all() на трёх промисах с таймаутами. Каждый таймаут отдаёт число.
 * Если все промисы успешны, то в консоль выведите их сумму. Если нет, то сообщение об ошибке.
 * Логику, по которой промис будет завершаться успешно/неуспешно, можете придумать сами.
 * Использовать рандомные числа, проверку на чётность и так далее.*/

function genTask(id){
    return new Promise((resolve, reject) =>{
        let randomNum = Math.floor(Math.random()*10+1);
        let time = Math.floor((Math.random()*3000+1000)/1000);
        setTimeout(() => {
            (randomNum % 2 === 0) ? resolve(randomNum) : reject(new Error(`Valoare impara: ${randomNum}`))
        },time);
        console.log(`Rezultatul executarii sarcinii ${id+1} este ${randomNum} in timpul ${time} s.`)
    })
}

const pr = [];
for (let i = 0; i < 3; i++) {
    pr[i] = genTask(i)
}
Promise.all(pr)
    .then(pr => {
        let result = pr.reduce((sum,element) => sum +=element,0);
        console.log(`Suma valorile este: ${result}`);
    })
    .catch((error) => {
        console.error(error.message);
    });