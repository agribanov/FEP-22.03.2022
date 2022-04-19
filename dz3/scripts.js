const operator = getOperator();
const operandA = getOperand("Operand A");
const operandB = getOperand("Operand B");

const result = calculate(operandA, operandB, operator);
showResult(operandA, operandB, operator, result);

function getOperator() {
  let op = prompt("Operator?");

  while (isOperatorInvalid(op)) {
    op = prompt("You are wrong. Operator?");
  }
  return op;
}

function isOperatorInvalid(value) {
  return value !== "+" && value !== "-" && value !== "/" && value !== "*";
}

function getOperand(msg) {
  let operand;

  do {
    operand = prompt(msg);
  } while (isOperandInvalid(operand));

  return +operand;
}

function isOperandInvalid(value) {
  return isNaN(value) || value === "" || value === null;
}

function calculate(x, y, action) {
  switch (action) {
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "/":
      return x / y;
    case "*":
      return x * y;
    default:
      alert("Invalid Operator");
      return null;
  }
}

function showResult(x, y, action, result) {
  alert(`Answer is: ${x} ${action} ${y} = ${result}`);
}
