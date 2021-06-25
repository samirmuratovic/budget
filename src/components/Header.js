import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { startLogout } from '../actions/auth'

const Header = () => {
  const dispatch = useDispatch()
  return (
    <header>
      <h1>Budget App</h1>
      <NavLink to="/dashboard" activeClassName="is-active">
        Dashboard
      </NavLink>
      <NavLink to="/create" activeClassName="is-active">
        Add Expense
      </NavLink>
      <button onClick={() => dispatch(startLogout())}>Logout</button>
    </header>
  )
}

export default Header
