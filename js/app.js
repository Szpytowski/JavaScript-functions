// 1
function getGreeting(firstName, lastName) {
    return 'Hi “' + firstName + ' ' + lastName + '”. What\'s up?';
}

const greeting = getGreeting('John', 'Smith');
console.log(greeting); // Hi, “John Smith”. What's up?

// 2
function isThisMyName(name) {
    return name === 'Adam';
}

console.log(isThisMyName('John'));

// 3
function isThisBoolean(value) {
    return value === false || value === true;
}

console.log(isThisBoolean(true));
console.log(isThisBoolean(false));
console.log(isThisBoolean('true'));

// 4
function getCircleArea(radius) {
    return Math.PI * radius * radius;
}

const radius = 5;
const area = getCircleArea(radius);
console.log(area); // 78.53981633974483

// 5
function getCirclesAreaSum(radius1, radius2) {
    const area1 = getCircleArea(radius1);
    const area2 = getCircleArea(radius2);

    return area1 + area2;
}

const circlesAreaSum = getCirclesAreaSum(5, 10);
console.log(circlesAreaSum); // 392.69908169872417

// 6
const quarterOf = (month) => {
    return Math.ceil(month / 3);
}

// 7
function convertMinutesToHours(minutes) {
    return minutes / 60;
}

const hours = convertMinutesToHours(75);
console.log(hours); // 1.25

// 8
function isTextUppercase(text) {
    return text === text.toUpperCase();
}

console.log (isTextUppercase('Hello')); // false
console.log (isTextUppercase('HELLO')); // true

// 9
function isDivisible(n, x, y) {
    return n % x === 0 && n % y === 0;
}

// 10
function getBillboardPrice(text, costPerCharacter) {
    return text.length * costPerCharacter
}

console.log(getBillboardPrice('Hello world!', 10));  // 120, since there are 12 characters
console.log(getBillboardPrice('Hello world!', 15));  // 180
console.log(getBillboardPrice('To be, or not to be', 20));  // 380, since there are 19 characters

// 11
function opposite(number) {
    return (number * -1)
}

// 12
function makeNegative(num) {
    if (num > 0) {
        return (num * -1)
    }
}

// 13
function removeChar(str){
    return str.slice(1, -1);
};

// 14
function basicOp(operation, firstNumber, secondNumber){
    if (operation === '+') {
        return firstNumber + secondNumber;
    } else if (operation === '-') {
        return firstNumber - secondNumber;
    } else if (operation === '*') {
        return firstNumber * secondNumber;
    } else if (operation === '/') {
        return firstNumber / secondNumber;
    } return 0;
}

// 15
function century(year) {
    const century = Math.ceil(year / 100);
    return century;
}

// 16
function evenOrOdd(number) {
    if (number % 2 === 0) {
        return 'Even';
    }
    return 'Odd';
}

// 17
function areYouPlayingBanjo(name) {
    const firstLetterIsR = name.charAt(0).toLowerCase() === 'r';
    if (firstLetterIsR) {
        return name + " plays banjo";
    }
    return name + " does not play banjo";
}

// 18
function rockPaperScissors(player1Choice, player2Choice) {
    if (player1Choice === player2Choice) {
        return 0;
    }

    if (
        (player1Choice === 'rock' && player2Choice === 'scissors') ||
        (player1Choice === 'scissors' && player2Choice === 'paper') ||
        (player1Choice === 'paper' && player2Choice === 'rock')
    ) {
        return 1;
    }
    return 2;
}

console.log(rockPaperScissors('rock', 'scissors'));
console.log(rockPaperScissors('rock', 'paper'));
console.log(rockPaperScissors('paper', 'paper'));

// 20
function getCalculationResult(firstNumber, secondNumber, calculationType) {
    if (calculationType === '+') {
        return firstNumber + secondNumber;
    } else if (calculationType === '-') {
        return firstNumber - secondNumber;
    } else if (calculationType === '*') {
        return firstNumber * secondNumber;
    } else if (calculationType === '/') {
        return firstNumber / secondNumber;
    }
    return null;
}

console.log(getCalculationResult(45,  35, '*'));
console.log(getCalculationResult(45,  35, 'r'));
console.log(getCalculationResult(45,  35,'-'));

// 21
function getPercentageValue (baseNumber, percentage){
    return baseNumber * percentage / 100;
}

console.log(getPercentageValue(1000,5))

// 22
function getGreaterNumber (firstNumber, secondNumber) {
    if (firstNumber > secondNumber) {
        return firstNumber
    }
    return secondNumber
}

console.log(getGreaterNumber(888, 777))
console.log(getGreaterNumber(111, 777))
console.log(getGreaterNumber(777, 777))

// 23
function isOddNumber (number){
    return number % 2 === 0
}

console.log(isOddNumber(77));
console.log(isOddNumber(88));
console.log(isOddNumber(0));
console.log(isOddNumber(-5));

// 25
function isDivisible(dividend, divisor) {
    return dividend % divisor === 0;
}

console.log(isDivisible(10, 2));
console.log(isDivisible(10, 9));

// 26
function getSmallerNumber (firstNumber, secondNumber) {
    if (firstNumber < secondNumber) {
        return firstNumber
    }
    return secondNumber
}

// 27
function isNumberPositive(number) {
    return number > 0;
}

console.log(isNumberPositive(100));

// 28
function getCelciusConvertedToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
console.log(getCelciusConvertedToFahrenheit(1));

// 29
function getFahrenheitConvertedToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// 30
function isLeapYear (year) {
    return year % 4 === 0;
}

// 31
function getAverageOfThreeNumbers(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}

// 32
function isNumberNegative(number) {
    return number < 0;
}


