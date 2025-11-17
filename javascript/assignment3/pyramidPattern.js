"use strict";

const DEFAULT_ROWS = 5;
const input = parseInt(process.argv[2], 10);
const ROWS = Number.isInteger(input) && input > 0 ? input : DEFAULT_ROWS;

console.log("Q6 — Pyramid Pattern Generator");
console.log(`Requested rows: ${ROWS}\n`);


function generatePyramidSync(rows) {
  console.log("Synchronous pyramid (deterministic):");
  for (let i = 1; i <= rows; i++) {
   
    let row = "";
    for (let j = 0; j < i; j++) {
      row += "* ";
    }
    console.log(row.trim());
  }
  console.log(""); 
}

function demonstrateVarVsLetAsync(rows) {
  console.log("Asynchronous demo: var vs let (watch how indexes are captured):");

  console.log("-> Using var (expected surprising behavior):");
  for (var i = 1; i <= rows; i++) {
   
    setTimeout(function () {
      
      console.log(`  var loop: i = ${i} (this is surprising — same value for all callbacks)`);
    }, i * 10);
  }

 
  setTimeout(function () {
    console.log("-> Using let (correct behavior — each callback captures its own i):");
    for (let k = 1; k <= rows; k++) {
      setTimeout(function () {
        console.log(`  let loop: k = ${k}`);
      }, k * 10);
    }
  }, rows * 20 + 50);
}
generatePyramidSync(ROWS);
demonstrateVarVsLetAsync(ROWS);

