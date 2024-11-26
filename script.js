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

const letsCount = () => {
    const gameCycle = () => {
        const numberOne = Math.ceil(Math.random() * 10);
        const numberTwo = Math.ceil(Math.random() * 10);
        const operatorArray = ['+', '-', '/', '*'];
        const i = Math.floor(Math.random() * (3 - 0 + 1))
        const randomOperator = operatorArray[i];
        const randomTask = numberOne + randomOperator + numberTwo;
        const userAnswer = prompt(`Решите задачу:
        ${randomTask}`);
        let correctAnswer = eval(randomTask);
        
        if (+userAnswer === correctAnswer || Math.round(+userAnswer) === Math.round(correctAnswer)) {
        alert(`Это верное решение!`);
        } else if (userAnswer === null) {
        alert('Спасибо за игру! Возвращайтесь снова!');
        } else if (isNaN(userAnswer) === true) {
        alert('Это не число!');
        } else if (userAnswer === '') {
        alert("Вы забыли ввести ответ. Начните заново!");
        } else if (userAnswer !== correctAnswer) {
        alert(`К сожалению, Вы ошиблись!`);
        return;
        }
        }
    
    const continueCycle = () => {
        let whetherContinue = confirm('Хотите продолжить игру?');
        if (whetherContinue === true) {
        gameCycle();
        continueCycle();
        } else {
        alert('Спасибо за игру! Возвращайтесь снова!');
        return;
        }
        }
        
    
alert('Начнем игру "Простая арифметика"! Вам нужно будет решить простые арифметические задачи. Округляйте дробные числа до целого!');   
gameCycle();
continueCycle();
}


//Task 1

const arr = [1, 5, 4, 10, 0, 3];
for ( let i = 0; i < arr.length; i++) {
if (arr[i - 1] === 10) break;  
console.log(arr[i]);
};

//Task 2

const newArr = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < newArr.length; i++) {
if (newArr[i] === 4) console.log(`Индекс числа 4 равен ${i}`)
};

//Task 3

let arrayOne = [1, 3, 5, 10, 20];
console.log(arrayOne.join(" "));

//Task 4

let arrayTwo = [];
for (let i = 0; i < 3; i++) {
arrayTwo[i] = [];
for (let j = 0; j < 3; j++) {
  arrayTwo[i][j] = 1;
  }
}
console.log(arrayTwo)

//Task 5

let arrayThree = [1, 1, 1];
arrayThree.push(2, 2, 2);
console.log(arrayThree);

//Task 6

let arrayFour = [9, 8, 7, 'a', 6, 5];
arrayFour.sort().pop();
console.log(arrayFour);

//Task 7

const guessNumberTask = () => {
let array = [9, 8, 7, 6, 5];
let userAnswer = +prompt('Попробуйте угадать число от 1 до 10');
if (array.includes(userAnswer)) {alert('Угадал');}
    else {alert("Не угадал");}
}
guessNumberTask();

//Task 8

let string = 'abcdef';
console.log(string.split("").reverse().join(""))

//Task 9

let arrayFive = [[1, 2, 3],[4, 5, 6]];
let newArray = [...arrayFive[0], ...arrayFive[1]];
console.log(newArray);

//Task 10

let array = [1, 7, 4, 6, 8, 3];
for (let i = 0; i < array.length - 1; i++)
console.log(array[i] + array[i + 1])

//Task 11

const doubleArray = (array) => {
let result = array.map(number => number ** 2);
return result;
}

let arrOne = [ 2, 4, 5, 7];
console.log(doubleArray(arrOne))

//Task 12

const countSigns = (array) => {
let result = array.map(word => word.length);
return result;
}

let arrTwo = [ 'say', "hello", 'ok'];
console.log(countSigns(arrTwo))

//Task 13

const getNegative = (array) => {
let result = array.filter(number => number < 0);
return result;
}

let arrThree = [ 1, -2, 3];
console.log(getNegative(arrThree))

//Task 14

const randomArray = [];
const number = () => {
return Math.floor(Math.random() * 10);
}

for (let i = 0; i < 10; i++) {
randomArray.push(number());
}

console.log(randomArray);
const newArrayOne= []

for (let i = 0; i < randomArray.length; i++) {
if (randomArray[i] % 2 === 0)

newArrayOne.push(randomArray[i]);}
console.log(newArrayOne);

//Task 15

const randomArrayTwo = [];
const numberTask = () => {
return Math.floor(Math.random() * 10);
}

for (let i = 0; i < 6; i++) {
randomArrayTwo.push(number());
}
console.log(randomArrayTwo);
console.log(randomArrayTwo.reduce((a, b) => a + b) / randomArrayTwo.length);
