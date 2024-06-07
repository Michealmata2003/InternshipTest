import React from 'react';
import LoginComponent from '../components/LoginComponent';
import './Style.css';

const Login = () => {
  return (
    <div className='loginContainer'>
      <div className='forms'>
        <LoginComponent />
      </div>
    </div>
  )
}

export default Login
