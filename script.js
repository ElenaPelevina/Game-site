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

const reverseTheText = () => {
    const letsReverse = () => {
    
    const userText = prompt('Напишите слово или текст и получите его перевернутый вид!');
    
    if (userText === null) {
    alert('Спасибо за игру! Продолжим в другой раз!');
    return;
    } else if (userText === "") {
    alert('Ой! Кажется, Вы забыли ввести текст!');
    } else {
    const reversedText = userText.split("").reverse().join("");
    alert(`Ваш перевернутый текст: ${reversedText}`);
    whetherContinue();
    }
    
    }
    
    function whetherContinue() {
    
    const letsContinue = confirm('Вы хотите продолжить игру?')
    
    if (letsContinue === true) {
    letsReverse();
    } else {
    alert('Спасибо за игру! Продолжим в другой раз!');
    }
    
    }
    
    letsReverse();
    
}

const answerTheQuestionsGame = () => {

    const quiz = [
               {
                   question: "Какого цвета небо?",
                   options: ["1. Красный", "2. Синий", "3. Зеленый"],
                   correctAnswer: 2
                },
    
               {
                   question: "Сколько дней в неделе?",
                   options: ["1. Шесть", "2. Семь", "3. Восемь"],
                   correctAnswer: 2
               },
    
               {
                   question: "Сколько у человека пальцев на одной руке?",
                   options: ["1. Четыре", "2. Пять", "3. Шесть"],
                   correctAnswer: 2
               }
           ];
    
    let result = 0;

    alert(`Начнем нашу викторину!`);

    for (let i = 0; i < quiz.length; i++) {
    
    const userAnswer = prompt(`Ответьте на вопрос:

    ${quiz[i]['question']} 

    Варианты ответов:

    ${quiz[i]['options']}`);
    if (+userAnswer === quiz[i]['correctAnswer']) {
    alert(`Поздравляю! Это правильный ответ.`);
    result++;
    } else if (userAnswer === null) {
    alert(`Возвращайтесь снова!`);
    return;
    } else if (userAnswer ==="") {
    alert(`Вы забыли ввести ответ! Попробойте еще раз.`);
    i--;
    }
    else { alert(`К сожалению, Вы ошиблись.`)}
    }
    alert(`Спасибо за игру! Количество правильных ответов: ${result}.`)
    
}

const letsRockPaperScissors = () => {
    alert('Давайте сыграем в игру "Камень, ножницы, бумага!"');
    const doGame = () => {
    const moveVariations = ["камень", "ножницы", "бумага"];
    const userAnswer = prompt('Выберете свой ход! Камень, ножницы или бумага?');
    const randomIndex = Math.floor(Math.random() * (2 - 0 + 1));
    const computerAnswer = moveVariations[randomIndex];
    if (userAnswer === "") {
    alert('Вы забыли сделать ход!');
    } else if (userAnswer === null) {
    alert('Спасибо за игру. До встерчи!')
    }  else if (userAnswer.toLowerCase() === computerAnswer.toLowerCase()) {
    alert(`Ваш выбор: ${userAnswer.toLowerCase()}, выбор компьютера: ${computerAnswer.toLowerCase()}. Это ничья!`);
    } else if (userAnswer.toLowerCase() === moveVariations[0] && computerAnswer.toLowerCase() === moveVariations[1]) {
    alert(`Ваш выбор: ${userAnswer.toLowerCase()}, выбор компьютера: ${computerAnswer.toLowerCase()}. Вы победили!`);
    } else if (userAnswer.toLowerCase() === moveVariations[1] && computerAnswer.toLowerCase() === moveVariations[2]) {
    alert(`Ваш выбор: ${userAnswer.toLowerCase()}, выбор компьютера: ${computerAnswer.toLowerCase()}. Вы победили!`);
    } else if (userAnswer.toLowerCase() === moveVariations[2] && computerAnswer.toLowerCase() === moveVariations[0]) {
    alert(`Ваш выбор: ${userAnswer.toLowerCase()}, выбор компьютера: ${computerAnswer.toLowerCase()}. Вы победили!`);
    } else if (userAnswer.toLowerCase() === moveVariations[2] && computerAnswer.toLowerCase() === moveVariations[1]) {
    alert(`Ваш выбор: ${userAnswer.toLowerCase()}, выбор компьютера: ${computerAnswer.toLowerCase()}. К сожалению, Вы проиграли :(`);
    } else if (userAnswer.toLowerCase() === moveVariations[1] && computerAnswer.toLowerCase() === moveVariations[0]) {
    alert(`Ваш выбор: ${userAnswer.toLowerCase()}, выбор компьютера: ${computerAnswer.toLowerCase()}. К сожалению, Вы проиграли :(`);
    } else if (userAnswer.toLowerCase() === moveVariations[0] && computerAnswer.toLowerCase() === moveVariations[2]) {
    alert(`Ваш выбор: ${userAnswer.toLowerCase()}, выбор компьютера: ${computerAnswer.toLowerCase()}. К сожалению, Вы проиграли :(`);
    } else if (userAnswer.toLowerCase() != moveVariations[0] || userAnswer.toLowerCase() != moveVariations[1] || userAnswer.toLowerCase() != moveVariations[2] ) {
    alert('Нет такого хода. Начните сначала!');
    } 
    };
    const whetherContinue = () => {
    const userAnswer = confirm('Вы хотите сыграть снова?') 
    if (userAnswer === true) {
    doGame();
    whetherContinue();
    } else {
    alert('Спасибо за игру! Возвращайтесь снова!')
    }
    }
    
    doGame();
    whetherContinue();
    } ;
 

    //Task 1

    //Task 2

    //Task 3

    //Task 4
    function delayForSecond(callback) {
        setTimeout(callback , 1000);
        
    }
    delayForSecond(function () {
       console.log('Привет, Глеб!');
    })  