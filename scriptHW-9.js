//Task 1

const headingElement = document.querySelector(".heading");
const buttonElement = document.querySelector('.button');
buttonElement.addEventListener('click', function() {
    headingElement.classList.toggle('hidden');
}
);

//Task 2
const textElement = document.querySelector('.text');
const buttonTwo = document.querySelector('.button2');
buttonTwo.addEventListener('click', () => {
    textElement.style.color = 'blue';
});

//Task 3
const headingThree = document.querySelector('.heading_long');
const buttonThree = document.querySelector('.button3');

buttonThree.addEventListener('click', () => {
    headingThree.textContent = 'Привет, мир!'
})

//Task 4
const descriptionElements = document.querySelectorAll('.description');
descriptionElements.forEach(description => description.textContent = 'Измененный текст'
)

//Task 5
const descrElements = document.querySelectorAll('.description5');
descrElements.forEach(description5 => description5.textContent = 'Новый текст')

//Task 6
const buttonSix = document.querySelector('.button6');
const contentElement = document.querySelector('.content')

buttonSix.addEventListener('click', () => {
const newText = document.createElement('p');
newText.textContent = 'Новый абзац';
contentElement.append(newText)
}
);

//Task 7
const descrSeven = document.querySelector('.description7');
const buttonSeven = document.querySelector('.button7');

buttonSeven.addEventListener('click', () => {
    descrSeven.remove()
})