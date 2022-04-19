const operandAEl = document.getElementById('operandA');
const operandBEl = document.getElementById('operandB');
const operatorEl = document.getElementById('operator');
const resultEl = document.getElementById('result');
const errorEl = document.getElementById('error');
const calculateBtnEl = document.getElementById('calculateBtn');

let error = null;

calculateBtnEl.addEventListener('click', onCalculateBtnClick);
operandAEl.addEventListener('input', onOperandInput);
operandBEl.addEventListener('input', onOperandInput);

function onCalculateBtnClick() {
    const operandA = getOperandA();
    const operandB = getOperandB();
    const operator = getOperator();

    clearResult();

    if (!error) {
        const result = calculate(+operandA, +operandB, operator);
        showResult(result);
    }
}

function onOperandInput() {
    const operandA = getOperandA();
    const operandB = getOperandB();
    const error = validateOperands(operandA, operandB);

    clearResult();

    if (error) {
        showError(error);
    } else {
        clearError();
    }
}

function getOperandA() {
    return getOperandValue(operandAEl);
}

function getOperandB() {
    return getOperandValue(operandBEl);
}

function getOperandValue(el) {
    return el.value;
}

function getOperator() {
    return operatorEl.value;
}

function validateOperands(a, b) {
    return validateOperand(a, 'A') || validateOperand(b, 'B');
}

function validateOperand(value, label) {
    if (isNaN(value)) return `Operand ${label} not a number`;

    if (value === '') return `Operand ${label} is required`;

    return null;
}

function calculate(x, y, action) {
    switch (action) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '/':
            return x / y;
        case '*':
            return x * y;
        default:
            alert('Invalid Operator');
            return null;
    }
}

function showResult(value) {
    resultEl.textContent = value;
}
function clearResult() {
    resultEl.textContent = '';
}

function showError(err) {
    errorEl.textContent = err;
    error = err;
}

function clearError() {
    errorEl.textContent = '';
    error = null;
}
