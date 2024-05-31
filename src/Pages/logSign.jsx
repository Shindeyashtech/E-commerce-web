import React from 'react'
import './CSS/LogSign.css'
const LogSign = () => {
  return (
    <div className='log-sign' >
      <div className="log-sign-container">
        <h1>Sign Up</h1>
        <div className="log-sign-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='password'/>
          <button>Continue</button>
          <p className="log-sign-login">
            Already have an account? <span>Login here</span>
          </p>
        </div>
          <div className="log-sign-agree">
            <input type="checkbox" name="" id="" /> 
            <p>By continuing, i agree to the terms of use & privacy policy</p>
          </div>
        </div>
    </div>
  )
}

export default LogSign
