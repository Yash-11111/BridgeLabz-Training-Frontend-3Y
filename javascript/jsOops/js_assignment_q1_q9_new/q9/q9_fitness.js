// Q9 - Fitness App Analytics class using filter, reduce, map and error handling

class FitnessAnalytics {
  constructor(data = []) {
    if (!Array.isArray(data)) throw new Error('Data must be array');
    if (data.length === 0) throw new Error('Dataset is empty');
    this.data = data;
  }

  getActiveUsers() {
    return this.data.filter(d => d.steps > 7000).map(d => d.user);
  }

  getAverageCalories() {
    const total = this.data.reduce((acc, d) => acc + d.calories, 0);
    return total / this.data.length;
  }

  getUserSummary() {
    return this.data.map(d => `${d.user}: ${d.steps} steps, ${d.calories} calories`);
  }
}

// Demo
const sampleData = [
  { user: 'A', steps: 8000, calories: 300 },
  { user: 'B', steps: 12000, calories: 500 },
  { user: 'C', steps: 4000, calories: 200 }
];

try {
  const fa = new FitnessAnalytics(sampleData);
  console.log('Active users:', fa.getActiveUsers());
  console.log('Average calories:', fa.getAverageCalories());
  console.log('User summary:', fa.getUserSummary());
} catch (err) {
  console.error('Error:', err.message);
}

module.exports = { FitnessAnalytics };