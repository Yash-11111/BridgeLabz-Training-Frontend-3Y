"use strict";


console.log("=== Q10: Running original nested example ===");

function outerOriginal() {
  console.log("outerOriginal - before declaration: count =", count); 
  var count = 5;
  function inner() {
    console.log("inner - before its declaration: count =", count); 
    var count = 10;
    console.log("inner - after local assignment: count =", count); 
  }
  inner();
  console.log("outerOriginal - after inner: outer count =", count); 
}

outerOriginal();

