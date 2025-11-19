"use strict"; 

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];


const validNumbers = [];
const invalidNumbers = [];


console.log("=== Raw API Data ===");
console.log(apiData);

for (let i = 0; i < apiData.length; i++) {
  const value = apiData[i];
  

  const numValue = Number(value);
  const boolValue = Boolean(value);
  const strValue = String(value);


  console.log(`\n[${i}] Original:`, value);
  console.log(`→ Number:`, numValue, 
              `| Boolean:`, boolValue, 
              `| String:`, `"${strValue}"`);

  
  if (!isNaN(numValue) && value !== " " && value !== "" && typeof numValue === "number") {
    validNumbers.push(numValue);
  } else {
    invalidNumbers.push(value);
  }
}

// -----------------------------
// Report Generation
// -----------------------------
console.log("\n============================");
console.log(" Final Parsing Report");
console.log("============================");

console.log("\n Valid Numeric Data:");
if (validNumbers.length > 0) {
  for (let i = 0; i < validNumbers.length; i++) {
    console.log(`  [${i}] ${validNumbers[i]} (type: ${typeof validNumbers[i]})`);
  }
} else {
  console.log("  No valid numeric entries found.");
}

console.log("\n Invalid Numeric Data:");
if (invalidNumbers.length > 0) {
  for (let i = 0; i < invalidNumbers.length; i++) {
    console.log(`  [${i}] "${invalidNumbers[i]}" (type: ${typeof invalidNumbers[i]})`);
  }
} else {
  console.log("  No invalid numeric entries found.");
}

