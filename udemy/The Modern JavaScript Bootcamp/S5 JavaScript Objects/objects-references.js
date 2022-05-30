let myAccount = {
  name: "Osama",
  expenses: 0,
  income: 0,
};

let addExpenses = function (account, amount) {
  account.expenses += amount;
};

// Challenge Area

// Add income
let addIncome = function (account, amount) {
  account.income += amount;
};

// Resest account
let resetAccount = function (account) {
  account.expenses = 0;
  account.income = 0;
};

// Get account summary
let getAccountSummary = function (account) {
  return `Account for ${account.name} has $${
    account.income - account.expenses
  }. $${account.income} in income. $${account.expenses} in expenses.`;
};

addIncome(myAccount, 2000);
addExpenses(myAccount, 2.5);
addExpenses(myAccount, 160);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));
