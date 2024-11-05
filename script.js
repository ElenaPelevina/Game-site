// Task 1//
let i = 0;
while (i < 2) {
    console.log('Hello');
    i++
}

//Task 2//
let i = 1;
do  {
    console.log(i);
    i++;
} while (i <= 5);

//Task 3//
let i = 0;
while (i <= 22) {
if (i < 7) {
i++;
continue;
}
console.log(i);
i++;
}

//Task 4//
const obj = {
    Коля: '200',
    Вася: '300',
    Петя: '400',
};
for (let key in obj) {
    console.log(`${key} - зарплата ${obj[key]}USD`)
}

//Task 5//
let num = 0;
let n = 1000;
do  {
    n = n / 2;
    console.log(n);
    num++;
    } while (n > 50);
    console.log(`Количество циклов: ${num}`);

//Task 6//
let firstFriday = 6;
let dayCount = 0;
while (dayCount <= 31) {
    if (dayCount < 6) {
        dayCount++;
        continue;
    }
        console.log(`Сегодня пятница, ${dayCount}-е число. Необходимо подготовить отчет.`);
        dayCount++;
    if (dayCount < firstFriday + 7) {
        dayCount++;
        continue;
    }
    console.log(`Сегодня пятница, ${dayCount}-е число. Необходимо подготовить отчет.`);
        dayCount++;

    if (dayCount < firstFriday + 6 * 2) {
            dayCount++;
            continue;
        }
        console.log(`Сегодня пятница, ${dayCount}-е число. Необходимо подготовить отчет.`);
            dayCount++;
    
    if (dayCount < firstFriday + 6 * 3) {
                dayCount++;
                continue;
            }
            console.log(`Сегодня пятница, ${dayCount}-е число. Необходимо подготовить отчет.`);
                dayCount++;

    if (dayCount === 31) {
        break;
    }
}


//Additional//
//Task 1//
let k = 100;
let iterations = 0;
do  {
    k = k - 7;
    console.log(k);
    iterations++;
    } while (k > 0);
    console.log(`Количество циклов: ${iterations}`);

//Task 2//
let month = [
    '', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
]
for (let i = 1; i < month.length; i++) {
    console.log(`${i} - это ${month[i]}`)
}

//Task 3//
const book = {
    title: 'The Master and Margarita',
    author: 'M. Bulgakov',
    publishedInEng: 1967,
    form: 'novel',
};
for (let key in book) {
    console.log(`${key}: ${book[key]}`)
};

//Task 4//
let array = [
    14, 4, 6, 109, 677, 1059, 7, 1
];
let min = array[0];
for (let number of array) {
  if(number < min) {
    min = number; 
}
}
console.log(min); 