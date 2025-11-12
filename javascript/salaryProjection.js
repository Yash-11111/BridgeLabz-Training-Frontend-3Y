
let currentSalary = 50000;
let incrementRate = 10;    
let salaryData = [];


for (let year = 1; year <= 5; year++) {
  currentSalary += (currentSalary * incrementRate) / 100; 
  currentSalary = Math.round(currentSalary); 
  salaryData.push({ Year: `Year ${year}`, Salary: `₹${currentSalary}` });
}


console.table(salaryData);
