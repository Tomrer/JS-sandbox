function sum(num1 = 0, num2 = 0, num3 = 0, num4 = 0) {
    return num1 + num2 + num3 + num4;
}

function checkAge(age) {
    let message = `Ваш возраст ${age}. `;

    if (age >= 18 && age <= 20) {
        message += 'Можете пить пивас';        
    } else if (age >= 21 && age <= 65) {
        message += 'Можете пить водку';
    } else {
        message += 'Лучше не пейте';
    }

    console.log(message);
}

function checkAgeTer(age) {
    const message = `Ваш возраст ${age}.`;
    const prohibited = `${message} Лучше не пейте`;
    const acceptedBeer = `${message} Можете пить пивас`;
    const acceptedVodka = `${message} Можете пить водку`;

    age >= 18 
        ? age >= 21 
            ? age > 65
                ? consoleLog(prohibited)
                : consoleLog(acceptedVodka)
            : consoleLog(acceptedBeer)
        : consoleLog(prohibited);
}

function consoleLog (message) {
    console.log(message);
}

let counterNumber = 0;
function counter() {
    for (let i = 0; i < 10; i++) {
        counterNumber += 1;
        console.log(counterNumber);
    }
}

function checkAgeLogic(age) {
    age < 18 && consoleLog('Alcohol is not recommended');
    age > 65 && consoleLog('Alcohol is not recommended');
    age >= 18 && age < 21 && consoleLog('You can drink beer');
    age >= 21 && age <= 65 && consoleLog('You can drink everything');
}

function toString(data) {
    data = '' + data;
    return data;
}

function toNumber(data) {
    data = +data;
    return data;
}

function toBoolean(data) {
    data = !!data;
    return data;
}

consoleLog(toNumber('12fafaf'));
consoleLog(toBoolean('Vasily'));