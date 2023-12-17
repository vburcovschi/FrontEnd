function promiseHandler() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                resolve("Промис выполнился успешно!");
            } else {
                reject(new Error("Произошла ошибка! :("));
            }
        }, 2000);
    });
}

const button = document.querySelector(".btn");
const resultDiv = document.querySelector(".result");

button.addEventListener("click", () => {
    resultDiv.textContent = "Промис выполняется...";

    const promise = promiseHandler();

    promise
        .then((result) => {
            resultDiv.textContent = result;
            console.log(result);
        })
        .catch((error) => {
            resultDiv.textContent = error.message;
            console.log(error.message);
        })
        .finally(()=>{
            resultDiv.textContent = 'Операция завершена! Можете попробовать ещё раз';
        });
});
