import React from 'react'
import './NewLetter.css'
const NewLetter = () => {
  return (
    <div className='new-letter'>
      <h1>Get Exclusive Offer On Your Email</h1>
      <p>Subscribe To Our NewsLetter and Stay Updated</p>
      <div>
        <input type="email" placeholder='Enter Your Email' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewLetter
