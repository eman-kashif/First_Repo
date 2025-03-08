const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let operator = null;
let firstOperand = null;
let displayString = ''; 

function updateDisplay() {
    display.value = displayString;
}

function clearDisplay() {
    currentInput = '';
    operator = null;
    firstOperand = null;
    displayString = '';
    updateDisplay();
}

function performCalculation() {
    if (operator && firstOperand !== null && currentInput !== '') {
        const secondOperand = parseFloat(currentInput);
        let result;

        switch (operator) {
            case '+':
                result = firstOperand + secondOperand;
                break;
            case '-':
                result = firstOperand - secondOperand;
                break;
            case '*':
                result = firstOperand * secondOperand;
                break;
            case '/':
                if (secondOperand === 0) {
                    currentInput = 'Error';
                    displayString = 'Error';
                    updateDisplay();
                    return;
                }
                result = firstOperand / secondOperand;
                break;
        }

        currentInput = result.toString();
        displayString = result.toString();
        updateDisplay();
        operator = null;
        firstOperand = result;
    }
}

function handleButtonClick(value) {
    if (value === 'C') {
        clearDisplay();
    } else if (value === '=') {
        performCalculation();
    } else if (['+', '-', '*', '/'].includes(value)) {
        if (firstOperand === null) {
            firstOperand = parseFloat(currentInput);
            displayString += " " + value + " ";
            currentInput = '';
            operator = value;
        } else {
            performCalculation();
            displayString = currentInput + " " + value + " ";
            operator = value;
            currentInput = '';
        }
    } else {
        currentInput += value;
        displayString += value;
        updateDisplay();
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        handleButtonClick(button.textContent);
    });
});

document.addEventListener('keydown', (event) => {
    const keyMap = {
        '0': '0', '1': '1', '2': '2', '3': '3', '4': '4', '5': '5', '6': '6', '7': '7', '8': '8', '9': '9',
        '+': '+', '-': '-', '*': '*', '/': '/', '=': '=', 'Enter': '=', 'c': 'C', 'C': 'C', 'Escape': 'C'
    };

    if (keyMap[event.key]) {
        handleButtonClick(keyMap[event.key]);
    }
});