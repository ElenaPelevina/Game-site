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
        
        if (+userAnswer === correctAnswer) {
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
        
    const letsStart = () => {
        alert('Начнем игру "Простая арифметика"! Вам нужно будет решить простые арифметические задачи.');   
        gameCycle();
        continueCycle();
    }
letsStart();
}
        
         

