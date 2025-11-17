"use strict";

const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" }
];

console.log("=== Employee Bonus Report ===\n");

for (let i = 0; i < employees.length; i++) {
  try {
    const emp = employees[i];

    
    if (!emp.name || !emp.salary || !emp.years) {
      throw new Error(`Missing property in employee record at index ${i}`);
    }

    const salary = Number(emp.salary);
    const years = Number(emp.years);

    if (isNaN(salary) || isNaN(years)) {
      throw new Error(`Invalid numeric conversion at index ${i}`);
    }

    const bonus = years > 3 ? salary * 0.1 : salary * 0.05;

    console.log(
      `Employee: ${emp.name}\n` +
      `  Salary: ₹${salary}\n` +
      `  Years: ${years}\n` +
      `  Bonus: ₹${bonus}\n`
    );

  } catch (err) {
    console.log(` Error for employee at index ${i}: ${err.message}\n`);
  }
}
