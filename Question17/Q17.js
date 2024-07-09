const customerAccount = {
    name: 'John Doe',
    balance: 1000.00,
  
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Deposit of $${amount} successful. New balance: $${this.balance}`);
      } else {
        console.log('Invalid deposit amount');
      }
    },
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawal of $${amount} successful. New balance: $${this.balance}`);
      } else if (amount > this.balance) {
        console.log('Insufficient funds');
      } else {
        console.log('Invalid withdrawal amount');
      }
    }
  };
 
  // Example usage:
  customerAccount.deposit(500.00); // Deposit $500
  customerAccount.withdraw(200.00); // Withdraw $200
  customerAccount.withdraw(1500.00); // Insufficient funds