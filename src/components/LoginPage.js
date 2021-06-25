import React from 'react'
import { startLogin } from '../actions/auth'
import { useDispatch } from 'react-redux'

const LoginPage = () => {
  const dispatch = useDispatch()
  return (
    <div
      style={{
        alignItems: 'center',
        backgroundImage: 'url(/images/bg.jpg)',
        backgroundSize: 'cover',
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        width: '100vw',
      }}
    >
      <div className="box-layout__box">
        <h1 className="box-layout__title">Budget App</h1>
        <p>Take control of your finances.</p>
        <button onClick={() => dispatch(startLogin())}>Login</button>
      </div>
    </div>
  )
}

export default LoginPage
