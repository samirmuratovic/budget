import React from 'react'
import { useSelector } from 'react-redux'
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'
import numeral from 'numeral'

const ExpensesSummary = () => {
  const expenses = useSelector((state) =>
    selectExpenses(state.expenses, state.filters)
  )
  const expensesTotal = selectExpensesTotal(expenses)
  const expensesString = expenses.length === 1 ? 'expense' : 'expenses'
  return (
    <div>
      {expenses.length === 0 ? null : (
        <h3>{`Viewing ${expenses.length} ${expensesString} totalling ${numeral(
          expensesTotal / 100
        ).format('$0,0.00')}`}</h3>
      )}
    </div>
  )
}

export default ExpensesSummary
