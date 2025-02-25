let number1 = 0;
let number2 = null;
let operator = '';

// Ensure DOM is fully loaded before accessing elements
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector("#container");

    if (!container) {
        console.error("Error: #container not found!");
        return;
    }

    const display = document.createElement("div");
    display.textContent = "0";
    display.classList.add("display");
    container.appendChild(display);

    function updateDisplay(value) {
        display.textContent = value;
    }

    function clickNumber(number) {
        if (!operator) {
            number1 = number1 * 10 + number;
            updateDisplay(number1);
        } else {
            if (number2 === null) number2 = 0;
            number2 = number2 * 10 + number;
            updateDisplay(number2);
        }
    }

    function operate(operator, a, b) {
        switch (operator) {
            case '+': return a + b;
            case '-': return a - b;
            case '*': return a * b;
            case '/': return b !== 0 ? a / b : "Error";
            default: return a;
        }
    }

    function createButton(text, onClick) {
        const button = document.createElement("button");
        button.textContent = text;
        button.addEventListener("click", onClick);
        container.appendChild(button);
    }

    // Create number buttons (0-9)
    for (let i = 1; i <= 9; i++) {
        createButton(i, () => clickNumber(i));
    }
    createButton(0, () => clickNumber(0));

    // Create operator buttons
    ['+', '-', '*', '/'].forEach(op => {
        createButton(op, () => {
            if (number1 !== null) operator = op;
        });
    });

    // Create Equals button
    createButton("=", () => {
        if (operator && number2 !== null) {
            number1 = operate(operator, number1, number2);
            number2 = null;
            operator = "";
            updateDisplay(number1);
        }
    });

    // Create Clear button
    createButton("C", () => {
        number1 = 0;
        number2 = null;
        operator = "";
        updateDisplay(0);
    });
});
