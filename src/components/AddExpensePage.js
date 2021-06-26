import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { startAddExpense } from '../actions/expenses'
import ExpenseForm from './ExpenseForm'

const AddExpensePage = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Add Expense</h1>
        </div>
      </div>
      <div className="content-container">
        <ExpenseForm
          onSubmit={(expense) => {
            dispatch(startAddExpense(expense))
            history.push('/dashboard')
          }}
        />
      </div>
    </div>
  )
}

export default AddExpensePage
