// Q6 - Employee Management System

class Employee {
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  getAnnualSalary() {
    return this.salary * 12;
  }

  applyBonus(percent) {
    this.salary += (this.salary * percent) / 100;
  }
}

const employees = [
  new Employee(1, "Aman", "IT", 40000),
  new Employee(2, "Riya", "HR", 35000),
  new Employee(3, "Sam", "Finance", 50000),
  new Employee(4, "Karan", "Sales", 30000),
  new Employee(5, "Sneha", "IT", 45000)
];

employees.forEach(e => {
  console.log(`${e.name} Annual Salary:`, e.getAnnualSalary());
});

const totalPayout = employees.reduce((sum, emp) => sum + emp.getAnnualSalary(), 0);
console.log("Total Annual Payout:", totalPayout);