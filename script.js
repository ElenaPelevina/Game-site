// Task 1//
let password = 'Test_2024';
let passwordCheck = prompt("Введите пароль");
if (passwordCheck === password) {
    alert("Пароль введен верно");
} else {
    alert("Пароль введен неправильно");
};
//OR//
alert(passwordCheck === password ? "Пароль введен верно" : "Пароль введен неправильно");

// Task 2/
let c = 20;
    c = 0;
    c = 10;
    c = -3;
    c = 2;
if (c > 0 && c < 10 ) {
    console.log('Верно')
} else {
    console.log('Неверно')
};

//Task 3//
let d = 20;
let e = 45;
if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
};

//Task 4//
let a = '2';
let b = '3';
alert(+a + +b);

//Task 5//
let monthNumber = prompt('Введите номер месяца')
switch (monthNumber) {
    case '1':
    case '2':
    case '12':
        alert('Зима');
        break;

    case '3':
    case '4':
    case '5':
        alert('Весна');
        break;
        
    case '6':
    case '7':
    case '8':
        alert('Лето');
        break;
        
    case '9':
    case '10':
    case '11':
        alert('Осень');
        break;

    default:
    alert('Нет месяца под таким номером')
        break;
};

//Addtitonal//
//Task 1//
let number = prompt('Пожалуйста, введите любое число');
let result = Number(number)
if (isNaN(result)) {
alert('Not a number')
} else {
alert("It's a Number!")
if (result % 2 === 0) {
    alert('Число четное')
} else {
    alert('Число нечетное')
}
};

//Task 2//
let clientOS = prompt('Введите OS Вашего телефона');
let clientOSLowerCase = clientOS.toLowerCase();
if (clientOSLowerCase === 'ios') {
    alert('Установите версию приложения для iOS по ссылке');
} else {
    alert('Установите версию приложения для Android по ссылке');
};

//Task 3//
let clientOS = prompt('Введите OS Вашего телефона');
let clientOSLowerCase = clientOS.toLowerCase();
let clientDeviceYear = Number(prompt('Укажите год выпуска Вашего телефона'));

if (clientOSLowerCase === 'ios' && clientDeviceYear >= 2015) {
    alert('Установите версию приложения для iOS по ссылке');
} else if (clientOSLowerCase === 'ios') {
    alert('Установите облегченную версию приложения для iOS по ссылке');
} else if (clientOSLowerCase !== 'ios' && clientDeviceYear >= 2015) {
    alert('Установите приложения для Android по ссылке');
}
  else {
    alert('Установите облегченную версию приложения для Android по ссылке');
};