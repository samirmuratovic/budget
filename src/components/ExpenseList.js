import React from 'react'
import { useSelector } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'

const ExpenseList = () => {
  const expenses = useSelector((state) => state.expenses)
  return (
    <div>
      {expenses.map((expense) => (
        <ExpenseListItem {...expense} key={expense.id} />
      ))}
    </div>
  )
}

export default ExpenseList
