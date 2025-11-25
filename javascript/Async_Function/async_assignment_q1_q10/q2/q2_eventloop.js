// Q2 – Micro vs Macro

console.log("Start");

setTimeout(() => console.log("setTimeout callback"), 0); // macrotask
Promise.resolve().then(() => console.log("Promise.then callback")); // microtask

console.log("Middle");
console.log("End");

// Microtasks run before macrotasks because JS empties microtask queue after each turn.
