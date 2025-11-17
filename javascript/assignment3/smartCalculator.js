"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0; 
class CalculatorError extends Error {
  constructor(message) {
    super(message);
    this.name = "CalculatorError";
  }
}

class DivideByZeroError extends CalculatorError {
  constructor() {
    super("Cannot divide by zero");
    this.name = "DivideByZeroError";
  }
}

class NegativeRootError extends CalculatorError {
  constructor() {
    super("Cannot take even root of a negative number");
    this.name = "NegativeRootError";
  }
}

class InvalidOperationError extends CalculatorError {
  constructor(op) {
    super(`Invalid operation: ${op}`);
    this.name = "InvalidOperationError";
  }
}

// Calculator function
function smartCalculate(op, a, b) {
  if (typeof op !== "string") throw new InvalidOperationError(op);

  switch (op) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "divide":
      if (b === 0) throw new DivideByZeroError();
      return a / b;
    case "power":
     
      return Math.pow(a, b);
    case "root":
  
      if (b === 0) throw new CalculatorError("Root degree cannot be zero");
     
      if (a < 0 && Math.abs(b) % 2 === 0) throw new NegativeRootError();
      return Math.pow(a, 1 / b);
    default:
      throw new InvalidOperationError(op);
  }
}


const summary = [];

for (let i = 0; i < operations.length; i++) {
  const op = operations[i];
  try {
    const result = smartCalculate(op, num1, num2);
    const record = {
      op,
      operands: [num1, num2],
      status: "success",
      result,
    };
    summary.push(record);
    console.log(`✔ ${op.toUpperCase()}: ${num1} ${op} ${num2} => ${result}`);
  } catch (err) {
    summary.push({
      op,
      operands: [num1, num2],
      status: "error",
      errorName: err.name,
      message: err.message,
    });
    console.log(`✖ ${op.toUpperCase()}: ${err.name} — ${err.message}`);
  }
}

// Print formatted summary
console.log("\n=== Summary Report ===");
for (const r of summary) {
  if (r.status === "success") {
    console.log(
      `Operation: ${r.op.padEnd(8)} | Inputs: (${r.operands.join(", ")}) | Result: ${r.result}`
    );
  } else {
    console.log(
      `Operation: ${r.op.padEnd(8)} | Inputs: (${r.operands.join(", ")}) | Error: ${r.errorName} - ${r.message}`
    );
  }
}
console.log(`\nTotal operations: ${summary.length}`);
console.log(`Successes: ${summary.filter(s => s.status === "success").length}`);
console.log(`Failures: ${summary.filter(s => s.status === "error").length}`);

