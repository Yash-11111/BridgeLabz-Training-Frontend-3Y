"use strict";

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];

const valid = [];
const invalid = [];

console.log("=== Transaction Validation ===\n");

for (let i = 0; i < transactions.length; i++) {
  try {
    const t = transactions[i];

    if (t === null) {
      throw new Error("Null transaction entry");
    }

    if (!t.id) {
      throw new Error("Missing ID");
    }

    if (t.amount === undefined) {
      throw new Error("Missing Amount");
    }

    if (t.amount < 0) {
      throw new Error("Negative Amount Not Allowed");
    }

    
    valid.push(t);

  } catch (err) {
    invalid.push({ index: i, reason: err.message });
  }
}


console.log("Valid Transactions:", valid);
console.log("Invalid Transactions:", invalid);
console.log(`\nSummary:`);
console.log(`  Successful: ${valid.length}`);
console.log(`  Failed: ${invalid.length}`);

