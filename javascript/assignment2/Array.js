
function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let scores = Array.from({ length: 8 }, () => rand(30, 100));

let maxScore = Math.max(...scores);
let minScore = Math.min(...scores);
let avg = scores.reduce((a, b) => a + b, 0) / scores.length;
let passed = scores.filter(s => s >= 50).length;

console.log("Scores:", scores);
console.log("Highest:", maxScore);
console.log("Lowest:", minScore);
console.log("Average:", avg.toFixed(2));
console.log("Passed:", passed);
