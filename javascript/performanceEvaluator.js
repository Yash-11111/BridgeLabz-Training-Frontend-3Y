
let marks = [85, 78, 92, 66, 81]; 


let failedSubject = marks.some(mark => mark < 35);


let total = marks.reduce((sum, mark) => sum + mark, 0);
let average = total / marks.length;
let percentage = (total / (marks.length * 100)) * 100;


if (failedSubject) {
  console.log("Detained (failed in one or more subjects).");
} else if (percentage >= 85) {
  console.log("Promoted with Distinction");
} else if (percentage >= 50) {
  console.log("Promoted");
} else {
  console.log("Detained");
}


console.log(`Total Marks: ${total}`);
console.log(`Average Marks: ${average.toFixed(2)}`);
console.log(`Overall Percentage: ${percentage.toFixed(2)}%`);
