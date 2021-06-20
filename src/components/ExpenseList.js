import React from 'react'
import { useSelector } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'

const ExpenseList = () => {
  const expenses = useSelector((state) =>
    selectExpenses(state.expenses, state.filters)
  )
  return (
    <div>
      {expenses.map((expense) => (
        <ExpenseListItem {...expense} key={expense.id} />
      ))}
    </div>
  )
}

export default ExpenseList
