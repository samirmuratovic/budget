import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { startEditExpense, startRemoveExpense } from '../actions/expenses'
import ExpenseForm from './ExpenseForm'

const EditExpensePage = () => {
  const { id } = useParams()
  const history = useHistory()
  const dispatch = useDispatch()
  const expense = useSelector((state) =>
    state.expenses.find((e) => e.id === id)
  )
  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Edit Expense</h1>
        </div>
      </div>
      <div className="content-container">
        <ExpenseForm
          {...expense}
          onSubmit={(expense) => {
            // console.log(id, expense)
            dispatch(startEditExpense(id, expense))
            history.push('/dashboard')
          }}
        />
        <button
          className="button button--secondary"
          onClick={() => {
            dispatch(startRemoveExpense({ id }))
            history.push('/dashboard')
          }}
        >
          Remove Expense
        </button>
      </div>
    </div>
  )
}

export default EditExpensePage
