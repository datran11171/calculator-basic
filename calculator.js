// Select display
const display = document.querySelector(".display");

// Variables to store values
let currentInput = "";
let previousInput = "";
let operator = null;

// Select all buttons
const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (!isNaN(value) || value === ".") {
            // Number or Decimal Clicked
            handleNumber(value);
        } else if (value === "C") {
            // Clear button clicked
            clearCalculator();
        } else if (value === "=") {
            // Equals button clicked
            calculateResult();
        } else {
            // Operator clicked
            handleOperator(value);
        }

        updateDisplay();
    });
});
// Add keyboard support
document.addEventListener("keydown", (event) => {
    const key = event.key;

    if (!isNaN(key) || key === ".") {
        // Number or Decimal Key Pressed
        handleNumber(key);
    } else if (key === "Escape") {
        // Clear key pressed
        clearCalculator();
    } else if (key === "Enter" || key === "=") {
        // Enter or Equals key pressed
        calculateResult();
    } else if (["+", "-", "*", "/"].includes(key)) {
        // Operator key pressed
        handleOperator(key);
    }

    updateDisplay();
});
// Handle number input
function handleNumber(value) {
    if (value === "." && currentInput.includes(".")) return; // Prevent multiple decimals
    currentInput += value;
}

// Handle operator input
function handleOperator(value) {
    if (currentInput === "") return; // Prevent multiple operators
    if (previousInput !== "") {
        calculateResult(); // Compute existing equation first
    }
    operator = value;
    previousInput = currentInput;
    currentInput = "";
}

// Calculate result
function calculateResult() {
    if (previousInput === "" || currentInput === "") return; // Prevent calculation without two numbers

    let result;
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num2 !== 0 ? num1 / num2 : "Error"; // Prevent division by zero
            break;
        default:
            return;
    }

    currentInput = result.toString();
    previousInput = "";
    operator = null;
}

// Clear calculator
function clearCalculator() {
    currentInput = "";
    previousInput = "";
    operator = null;
}

// Update display
function updateDisplay() {
    display.textContent = currentInput || previousInput || "0";
}

// Initialize display
updateDisplay();
