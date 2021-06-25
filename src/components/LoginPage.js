import React from 'react'
import { startLogin } from '../actions/auth'
import { useDispatch } from 'react-redux'

const LoginPage = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={() => dispatch(startLogin())}>Login</button>
    </div>
  )
}

export default LoginPage
