
let bonus = 5000;
let isPermanent = false;

function calculateSalary() {
  let salary = 40000;
  let isPermanent = true;

  let totalSalary = salary + (isPermanent ? bonus : 0);

  console.log("Total Salary:", totalSalary);
  console.log("Global isPermanent:", globalThis.isPermanent);
}

calculateSalary();
console.log("Outside: global isPermanent =", isPermanent);
