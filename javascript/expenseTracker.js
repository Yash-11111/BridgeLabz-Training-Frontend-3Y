
let expenses = [12000, 3000, 8000, 2500, 1500];


let total = expenses.reduce((sum, val) => sum + val, 0);
let average = total / expenses.length;


let taxRate = 0.10;
let finalAmount = total + total * taxRate;


total = total.toFixed(2);
average = average.toFixed(2);
finalAmount = finalAmount.toFixed(2);


console.log("------ Monthly Expense Report ------");
console.log(`Total Expenses: ₹${total}`);
console.log(`Average Expense: ₹${average}`);
console.log(`Final Amount (with 10% tax): ₹${finalAmount}`);
