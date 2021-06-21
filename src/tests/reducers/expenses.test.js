import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual([])
})

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id,
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expenses with invalid id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '9999',
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})

test('should add expense', () => {
  const expense = {
    description: 'Gym',
    note: '',
    amount: 1995,
    createdAt: 0,
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense,
  }
  const state = expensesReducer(undefined, action)

  expect(state).toEqual([expense])
})

test('should edit expense by id', () => {
  const note = 'This note should be adjusted now.'
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: {
      note,
    },
  }

  const state = expensesReducer(expenses, action)
  const editedExpense = state[0]
  expect(editedExpense.note).toBe(note)
})

test('should not edit expense with invalid id', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '9999',
    updates: {
      note: 'High bill',
    },
  }

  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})
