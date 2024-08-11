/*-------------------------------- Constants --------------------------------*/
const display = document.querySelector('.display');

/*-------------------------------- Variables --------------------------------*/
let currentInput = '';
let previousInput = '';
let operator = null;
/*------------------------ Cached Element References ------------------------*/ 

/*----------------------------- Event Listeners -----------------------------*/
document.addEventListener('DOMContentLoaded', () => {
    
    document.querySelector('#calculator').addEventListener('click', (event) => {
        if (event.target.classList.contains('number')) {
          
            currentInput += event.target.innerText;
            display.innerText = currentInput;
        } else if (event.target.classList.contains('operator')) {
            if (currentInput === '') return;
            if (previousInput !== '') {
                calculateResult();
            }
            operator = event.target.innerText;
            previousInput = currentInput;
            currentInput = '';
        } else if (event.target.classList.contains('equals')) {
            if (currentInput === '' || previousInput === '') return;
            calculateResult();
        } else if (event.target.classList.contains('clear')) {
            currentInput = '';
            previousInput = '';
            operator = null;
            display.innerText = '';
        } 
    });

    
});
/*-------------------------------- Functions --------------------------------*/
function calculateResult() {
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    let result;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    display.innerText = result;
    currentInput = result.toString();
    operator = null;
    previousInput = '';
}



