import React, { useState } from 'react'
import './form.css'
export const Form = ({ children }) => {
  const [name, setName] = useState("");


  return (
    <form className='post-form'>
      <h3>Post Form</h3>
      {name}
      <div className='form-control'>
        <label>Username</label>
        <input type='text' onChange={(e) => setName(e.target.value)}></input>
      </div>

      <div className='form-control'>
        {children}
      </div>
    </form>
  )
}
