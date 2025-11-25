// Q7 - BankAccount class with private field #balance and methods with error handling

class BankAccount {
  #balance = 0;

  constructor(initial = 0) {
    this.#balance = initial;
  }

  deposit(amount) {
    if (typeof amount !== 'number' || amount <= 0) throw new Error('Invalid deposit amount');
    this.#balance += amount;
    return this.#balance;
  }

  withdraw(amount) {
    if (typeof amount !== 'number' || amount <= 0) throw new Error('Invalid withdraw amount');
    if (amount > this.#balance) throw new Error('Insufficient balance');
    this.#balance -= amount;
    return this.#balance;
  }

  getBalance() {
    return this.#balance;
  }
}

// Demo
const acc = new BankAccount(1000);
console.log('Initial balance:', acc.getBalance());
acc.deposit(500);
console.log('After deposit:', acc.getBalance());
try {
  acc.withdraw(2000);
} catch (err) {
  console.error('Withdrawal failed:', err.message);
}
console.log('Final balance:', acc.getBalance());

module.exports = { BankAccount };