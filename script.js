const guessNumber = () => {
    const min = 1;
    const max = 100;
    
    let randomNumber = Math.floor(Math.random() * (max - min + 1));
    console.log(randomNumber);
    
    alert('Попробуйте угадать число от 0 до 100!');
    let userNumber = prompt('Введите Ваше число');
    
    if (isNaN(userNumber) === true) {
    alert('Это не число');
    } else if (userNumber > 100 || userNumber < 0) {
    alert('Введенное число выходит за допустимый диапазон');
    return;
    } else if (userNumber === '') {
    alert('Вы забыли ввести число. Начните заново!');
    return;
    }
    
    while (userNumber <= randomNumber || userNumber >= randomNumber) {
    if (userNumber === null) {
    alert('Спасибо за игру! Возвращайтесь снова :)');
    return;
    }
    if (userNumber < randomNumber)
    {
    userNumber = prompt('Ваше число меньше загаданного. Попробуйте указать большее число');
    continue;
    }
    if (userNumber > randomNumber) {
    userNumber = prompt('Ваше число больше загаданного. Попробуйте указать меньшее число');
    continue;
    }
    if (userNumber === randomNumber) {
    break; }
    alert(`Поздравляю! Вы угадали :))) Это было число ${randomNumber}!`);
    return;
    }
    }



//Task 1
const printMinimum = (a, b) => {
if (a <= b) {
return a;} else {return  b;}
}
console.log(printMinimum(4,8));

//Task 2
const isEven = (number) => number % 2 === 0;
console.log(isEven(5));

//Task 3
const doubleNumber = (number) => number ** 2;
console.log(doubleNumber(5));

//Task 4
const askAge = () => {
let userAge = prompt('How old are you?');
if (userAge < 0) {
alert('Вы ввели неправильное значение');
} else if (userAge === 0 || userAge <= 12) {
alert('Привет, друг!');} else {alert('Добро пожаловать!');}
};
askAge();

//Task 5
const isNumber = (a, b) => {
if (isNaN(a) === true || isNaN(b) === true) {
return 'Одно или оба значения не являются числом'
} else {return a * b;}
};
console.log(isNumber(5, 5));

//Task 6
const askNumber = () => {
let userNumber = prompt('Введите любое число');
if (isNaN(userNumber) === true) {
alert('Переданный параметр не является числом')
} else { alert(`${userNumber} в кубе равняется ${userNumber ** 3}`)}
};
askNumber();

//Task 7
function getArea() {
let pi = 3.14;
return this.radius * pi;
}
function getPerimeter() {
let pi = 3.14;
return 2 * pi * this.radius;
};
    
const circle1 = {
    radius: 120,
    getArea: getArea,
    getPerimeter: getPerimeter,
};
    
const circle2 = {
    radius: 200,
    getArea: getArea,
    getPerimeter: getPerimeter,
};
console.log(circle2.getPerimeter())