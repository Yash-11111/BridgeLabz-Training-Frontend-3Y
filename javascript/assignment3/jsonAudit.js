"use strict";


const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

const cleanData = [];
const errorLog = [];


function logError(lineIndex, raw, message) {
  const entry = { line: lineIndex + 1, raw, message };
  errorLog.push(entry);
  console.log(`❌ Line ${entry.line}: ${message} | raw: ${raw}`);
}


console.log("=== Q9: JSON Audit Start ===\n");

for (let i = 0; i < rawData.length; i++) {
  const raw = rawData[i];
  console.log(`Processing line ${i + 1}: ${raw}`);

  try {
    
    const parsed = JSON.parse(raw);

    
    if (!Object.prototype.hasOwnProperty.call(parsed, "user")) {
      throw new Error("Missing key: 'user'");
    }
    if (!Object.prototype.hasOwnProperty.call(parsed, "age")) {
      throw new Error("Missing key: 'age'");
    }

    
    const ageNum = Number(parsed.age);
    if (Number.isNaN(ageNum)) {
      throw new Error("Invalid age value (cannot convert to Number)");
    }

    const cleaned = {
      user: String(parsed.user),
      age: ageNum
    };

    cleanData.push(cleaned);
    console.log(`✔ Line ${i + 1} parsed OK → ${JSON.stringify(cleaned)}`);

  } catch (err) {

    logError(i, raw, err.message);

  }
}

console.log("\n=== Post-processing: filter under-18 ===");
const adults = cleanData.filter(u => u.age >= 18);
const minors = cleanData.filter(u => u.age < 18);

console.log(`Clean entries (${cleanData.length}):`, cleanData);
console.log(`Adults (>=18) (${adults.length}):`, adults);
console.log(`Minors (<18) (${minors.length}):`, minors);

console.log("\n=== Error Log Summary ===");
if (errorLog.length === 0) {
  console.log("No errors found.");
} else {
  errorLog.forEach(e =>
    console.log(`Line ${e.line}: ${e.message} | raw: ${e.raw}`)
  );
}

