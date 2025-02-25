function add(a, b) {
  return a + b;
}   
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }
}

function updateDisplay() {
    display.textContent = number1;
}

function clickNumber(number) {
    if (operator === '') {
        number1 = number1 * 10 + number;
        updateDisplay();
    } else {
        number2 = number2 * 10 + number;
        display.textContent = number2;
    }
}




const container = document.querySelector("#container");
const display = document.createElement("div");
display.textContent = "0";
container.appendChild(display);
for (let i = 1; i <= 9; i++) 
    if(i % 3 === 0) {
        const button = document.createElement("button");
        button.textContent = i;
        container.appendChild(button);
        const br = document.createElement("br");
        container.appendChild(br);
    }
    else {
        const button = document.createElement("button");
        button.textContent = i;
        container.appendChild(button);
}

const button = document.createElement("button");
button.textContent = 0;
container.appendChild(button);
container.appendChild(document.createElement("br"));

const multiplyButton = document.createElement("button");
multiplyButton.textContent = "*";
container.appendChild(multiplyButton);
const divideButton = document.createElement("button");
divideButton.textContent = "/";
container.appendChild(divideButton);
const addButton = document.createElement("button");
addButton.textContent = "+";
container.appendChild(addButton);
const subtractButton = document.createElement("button");
subtractButton.textContent = "-";
container.appendChild(subtractButton);
const equalsButton = document.createElement("button");
equalsButton.textContent = "=";
container.appendChild(equalsButton);

const clearButton = document.createElement("button");
clearButton.textContent = "C";
container.appendChild(clearButton);

const buttons = container.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.textContent === "=") {
            number1 = operate(operator, number1, number2);
            number2 = 0;
            operator = '';
            updateDisplay();
            number1 = 0;
        } else if (button.textContent === "C") {
            number1 = 0;
            number2 = 0;
            operator = '';
            updateDisplay();
        } else if (button.textContent === "+" || button.textContent === "-" || button.textContent === "*" || button.textContent === "/") {
            operator = button.textContent;
        } else {
            clickNumber(parseInt(button.textContent));
        }
    });
});


let number1 = 0;
let number2 = 0;
let operator = '';

