function createCalculator(base) {
  const get = () => base;
  get.add = (b) => createCalculator(base + b);
  get.sub = (b) => createCalculator(base - b);
  get.mult = (b) => createCalculator(base * b);
  get.div = (b) => createCalculator(base / b);
  get.set = (b) => createCalculator(b);

  return get;
}

const calc = createCalculator(100);
// calc()
// console.log(calc.add(50)); // 150;
// console.log(calc.add(600)); // 750
// calc.sub(500); // 250
// calc.mult(2); // 500
// calc.div(100); // 5
// calc.set(400);

// calc.add(100); // 500
// console.log(calc.get()); // 500

// ----

// const calculate = createCalculator(34).add(45).sub(10).mult(20);

// console.log(calculate()); // 150
