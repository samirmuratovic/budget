const getExpensesTotal = (expenses) =>
  expenses.reduce((sum, current) => sum + current.amount, 0)

export default getExpensesTotal
