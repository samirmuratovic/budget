import React from 'react'
import { Link } from 'react-router-dom'
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
    <div className="page-header">
      <div className="content-container">
        <h2 className="page-header__title">
          Viewing <span> {expenses.length}</span> {expensesString} totalling{' '}
          <span> {numeral(expensesTotal / 100).format('$0,0.00')} </span>
        </h2>
        <div className="page-header__actions">
          <Link className="button" to="/create">
            Add Expense
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ExpensesSummary
