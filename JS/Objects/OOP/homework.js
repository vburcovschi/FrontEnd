// Родительская функция
function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.isTurnedOn = false;
}

ElectricalAppliance.prototype.turnOn = function() {
    this.isTurnedOn = true;
    console.log(`${this.name} включен(а)`);
};

ElectricalAppliance.prototype.turnOff = function() {
    this.isTurnedOn = false;
    console.log(`${this.name} выключен(а)`);
};

// Конкретный прибор - настольная лампа
function TableLamp(name, power, brightness) {
    ElectricalAppliance.call(this, name, power);
    this.brightness = brightness;
}

TableLamp.prototype = new ElectricalAppliance();

TableLamp.prototype.adjustBrightness = function(brightness) {
    this.brightness = brightness;
    this.power = 0.5 * brightness;
    console.log(`${this.name} яркость изменена на ${this.brightness} мощность стало ${this.power}`);
};

// Конкретный прибор - компьютер
function Computer(name, power, processorType) {
    ElectricalAppliance.call(this, name, power);
    this.processorType = processorType;
}

Computer.prototype = new ElectricalAppliance();

Computer.prototype.runProgram = function(programName) {
    console.log(`${this.name} запуск программы ${programName}`);
};

// Создаем экземпляры каждого прибора
const lamp = new TableLamp("Настольная лампа", 40, "50%");
const computer = new Computer("Компьютер", 500, "Intel Core i7");

// Включаем приборы в розетку
lamp.turnOn();
computer.turnOn();

// Вычисляем суммарную потребляемую мощность всех включенных приборов
function calculateTotalPowerConsumption(...appliances) {
    const turnedOnAppliances = appliances.filter(appliance => appliance.isTurnedOn);
    const totalPowerConsumption = turnedOnAppliances.reduce((total, appliance) => total + appliance.power, 0);
    return totalPowerConsumption;
}

const totalPowerConsumption = calculateTotalPowerConsumption(lamp, computer);
console.log(`Суммарная потребляемая мощность: ${totalPowerConsumption} Вт`);

console.log(`Потребляемая мощность лампы ${lamp.power}`);
console.log("Увеличиваем можность лампы до 200 лм");
lamp.adjustBrightness(200);
console.log(`Суммарная потребляемая мощность: ${calculateTotalPowerConsumption(lamp, computer)} Вт`);

// Выключаем приборы из розетки
//lamp.turnOff();
computer.turnOff();
console.log(`Суммарная потребляемая мощность: ${calculateTotalPowerConsumption(lamp, computer)} Вт`);