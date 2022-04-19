const operator = getOperator();

const a = getOperand("Operand A");

const b = getOperand("Operand B");

let result = calculate(a, b, operator);

showResult();

/// ---

function getOperator() {
  return prompt("Operator?");
}

function getOperand(message) {
  return +prompt(message);
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
  }
}

function showResult(x, y, action, result) {
  alert(`Answer is: ${x} ${action} ${y} = ${result}`);
}
