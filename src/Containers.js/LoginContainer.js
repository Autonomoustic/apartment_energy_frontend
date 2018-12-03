import React from 'react'
import LoginForm from '../Components.js/LoginForm'

const Login = props =>
  <div className='login sign-up-container'>
    <LoginForm loginExisitingUser={props.loginExisitingUser} />
  </div>

export default Login
