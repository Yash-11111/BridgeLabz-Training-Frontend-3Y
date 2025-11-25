// Q4 - Employee and Manager classes demonstrating inheritance and runtime polymorphism

class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  work() {
    console.log(`${this.name} works in ${this.department}`);
  }
}

class Manager extends Employee {
  constructor(name, department) {
    super(name, department);
  }

  // Override work() to demonstrate polymorphism
  work() {
    console.log(`${this.name} manages the ${this.department} team and assigns tasks.`);
  }
}

// Demonstration
const e = new Employee('Aman', 'Engineering');
const m = new Manager('Riya', 'Engineering');

e.work(); // Employee version
m.work(); // Manager overridden version (runtime polymorphism)

module.exports = { Employee, Manager };