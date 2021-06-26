import React, { useState } from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/initialize'

const ExpenseForm = ({ onSubmit, description: d, amount: a, note: n }) => {
  const [description, setDescription] = useState(d)
  const [amount, setAmount] = useState((a / 100).toString())
  const [note, setNote] = useState(n)
  const [createdAt, setCreatedAt] = useState(moment())
  const [calendarFocused, setCalendarFocused] = useState(false)
  const [error, setError] = useState(null)

  const onAddExpense = (e) => {
    e.preventDefault()

    if (!description || !amount) {
      setError('Please provide description and amount')
    } else {
      setError(null)
      onSubmit({
        description,
        amount: parseFloat(amount, 10) * 100,
        createdAt: createdAt.valueOf(),
        note,
      })
      setDescription('')
      setAmount(0)
      setNote('')
    }
  }

  const onAmountChange = (e) => {
    const amount = e.target.value
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      setAmount(amount)
    }
  }

  const onDateChange = (createdAt) => {
    if (createdAt) {
      setCreatedAt(createdAt)
    }
  }

  const onFocusChange = ({ focused }) => {
    setCalendarFocused(focused)
  }

  return (
    <form className="form" onSubmit={onAddExpense}>
      {error && <p className="form__error">{error}</p>}
      <input
        className="text-input"
        type="text"
        placeholder="Description"
        autoFocus
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        className="text-input"
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={onAmountChange}
      />
      <SingleDatePicker
        date={createdAt}
        onDateChange={onDateChange}
        focused={calendarFocused}
        onFocusChange={onFocusChange}
        numberOfMonths={1}
        isOutsideRange={() => false}
      />
      <textarea
        className="textarea"
        placeholder="Add a note for your expense"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      ></textarea>
      <div>
        <button className="button" type="submit">
          Add Expense
        </button>
      </div>
    </form>
  )
}

ExpenseForm.defaultProps = {
  description: '',
  amount: 0,
  note: '',
}

export default ExpenseForm
