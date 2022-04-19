const operator = getOperator();
const operands = getOperands();

const result = calculate(operator, operands);
showResult(operator, operands, result);

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

function getOperands() {
  let value;
  do {
    value = prompt("Operands?");
  } while (isOperandsInvalid(value));
  return value.split(",").map((val) => +val);
}

function isOperandsInvalid(value) {
  return value === "" || value === null;
}

function calculate(action, operands) {
  if (isOperatorInvalid(action) || operands.length <= 1) {
    alert("Invalid");
    return null;
  }

  return operands.reduce((acc, val) => {
    switch (action) {
      case "+":
        acc += val;
        break;
      case "-":
        acc -= val;
        break;
      case "/":
        acc /= val;
        break;
      case "*":
        acc *= val;
        break;
    }
  });
}

function showResult(action, operands, result) {
  let expression = operands.join(` ${action} `);

  alert(`${expression} = ${result}`);
}
