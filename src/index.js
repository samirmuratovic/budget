import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'
import './firebase/firebase'

import { addExpense } from './actions/expenses'
import getVisibleExpenses from './selectors/expenses'

const store = configureStore()

store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }))
store.dispatch(
  addExpense({ description: 'Gas bill', amount: 1000, createdAt: 1000 })
)
store.dispatch(addExpense({ description: 'Rent', amount: 109500 }))

const state = store.getState()
console.log(getVisibleExpenses(state.expenses, state.filters))

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'))
