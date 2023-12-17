function checkAvailability(product) {
    const random = Math.random();
    return new Promise((resolve, reject) => {
        if (random > 0.3) {
            resolve(`Продукт ${product} доступен`);
        } else {
            reject(`Продукт ${product} не доступен`);
        }
    });
}

const promises = [
    checkAvailability("мука"),
    checkAvailability("яйца"),
    checkAvailability("колбаса")
];

Promise.all(promises)
    .then((results) => {
        console.log(results.join(". "));
        console.log("Можно готовить пиццу!");
    })
    .catch((error) => {
        console.log("Не все продукты доступны. " + error);
        console.log("Вечер испорчен, нельзя готовить пиццу :(");
    });
