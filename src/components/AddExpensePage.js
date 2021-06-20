import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { addExpense } from '../actions/expenses'
import ExpenseForm from './ExpenseForm'

const AddExpensePage = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Add Expense</h1>
      <ExpenseForm
        onSubmit={(expense) => {
          dispatch(addExpense(expense))
          history.push('/')
        }}
      />
    </div>
  )
}

export default AddExpensePage