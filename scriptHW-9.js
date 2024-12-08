const headingElement = document.querySelector(.heading);
const buttonElement = document.querySelector(.button);
buttonElement.addEventListener('click', function() {
    headingElement.remove();
}
);
