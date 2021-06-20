import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { editExpense, removeExpense } from '../actions/expenses'
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
          dispatch(editExpense(id, expense))
          history.push('/')
        }}
      />
      <button
        onClick={() => {
          dispatch(removeExpense({ id }))
          history.push('/')
        }}
      >
        Remove
      </button>
    </div>
  )
}

export default EditExpensePage
