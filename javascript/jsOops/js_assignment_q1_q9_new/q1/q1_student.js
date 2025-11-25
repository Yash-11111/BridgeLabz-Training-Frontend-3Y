// Q1 - Student Result Processing (reduce + Classes)
// Creates Student class with calculateAverage() using reduce and grade determination

class Student {
  constructor(name, marks = []) {
    this.name = name;
    this.marks = marks;
  }

  // Calculate average using reduce
  calculateAverage() {
    if (!Array.isArray(this.marks) || this.marks.length === 0) return 0;
    const total = this.marks.reduce((acc, m) => acc + m, 0);
    return total / this.marks.length;
  }

  // Return grade based on average
  getGrade() {
    const avg = this.calculateAverage();
    if (avg >= 85) return 'A';
    if (avg >= 70) return 'B';
    if (avg >= 50) return 'C';
    return 'F';
  }
}

// Test 3 students
const students = [
  new Student('Aman', [90, 88, 92]),
  new Student('Riya', [72, 68, 75]),
  new Student('Sam', [40, 55, 48])
];

students.forEach(s => {
  console.log('Student:', s.name);
  console.log('Marks:', s.marks);
  console.log('Average:', s.calculateAverage());
  console.log('Grade:', s.getGrade());
  console.log('---');
});

module.exports = { Student, students };