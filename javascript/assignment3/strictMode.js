

const nonStrictCode = `
function demo(a, a) {
  // duplicate param names allowed in sloppy mode (the last one wins)
  total = 10;    // implicit global (allowed in sloppy mode)
  console.log("Inside sloppy demo:", a, total);
  // delete of an undeclared global property (global object property) may succeed; deleting variables is different
  try { 
    const delResult = delete total; 
    console.log("delete total (sloppy) result:", delResult);
  } catch (e) {
    console.log("delete total (sloppy) threw:", e && e.message);
  }
}
demo(5, 10);
`;

// Strict mode code as string
const strictCode = `
"use strict";
function demo(a, a) { // <-- duplicate param names are a SyntaxError in strict mode
  total = 10; // implicit global assignment is a ReferenceError in strict mode
  console.log("Inside strict demo:", a, total);
  try { 
    const delResult = delete total; 
    console.log("delete total (strict) result:", delResult);
  } catch (e) {
    console.log("delete total (strict) threw:", e && e.message);
  }
}
demo(5, 10);
`;


try {
  console.log("Running sloppy-mode code (no 'use strict'):");
  eval(nonStrictCode); 
  if (typeof total !== "undefined") {
    try {
      delete global.total; 
    } catch (e) {
      
    }
  }
} catch (err) {
  console.log("Sloppy-mode eval threw an error:", err && err.message);
}

console.log("\n---\n");


try {
  console.log("Running strict-mode code (has 'use strict'):");
  eval(strictCode);
} catch (err) {
  console.log("Strict-mode eval error type:", err && err.name);
  console.log("Strict-mode eval message:", err && err.message);
  
  console.log("\nExplanation:");
  console.log("- In strict mode, duplicate parameter names are a SyntaxError at parse time.");
  console.log("- In strict mode, assigning to an undeclared identifier (total = 10) is a ReferenceError.");
  console.log("- Deleting plain variables (declared with var/let/const) is illegal; delete only works on object properties.");
}

console.log("\n---\n");
console.log("Correct ES6 version (no duplicate params, no implicit globals):");

(function correctVersion() {
  "use strict";
  function demoCorrect(a, b) {
    
    let total = 10; 
    console.log("demoCorrect:", a, b, total);
    
    const obj = {x: 1};
    delete obj.x; 
    console.log("obj after delete:", obj);
  }
  demoCorrect(5, 10);
})();


