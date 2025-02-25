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

const container = document.querySelector("#container");

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


const equalsButton = document.createElement("button");
equalsButton.textContent = "=";
container.appendChild(equalsButton);

const clearButton = document.createElement("button");
clearButton.textContent = "C";
container.appendChild(clearButton);


let number1 = 0;
let number2 = 0;
let operator = '';

