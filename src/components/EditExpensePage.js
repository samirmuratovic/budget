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
      <ExpenseForm
        {...expense}
        onSubmit={(expense) => {
          // console.log(id, expense)
          dispatch(startEditExpense(id, expense))
          history.push('/dashboard')
        }}
      />
      <button
        onClick={() => {
          dispatch(startRemoveExpense({ id }))
          history.push('/dashboard')
        }}
      >
        Remove
      </button>
    </div>
  )
}

export default EditExpensePage
