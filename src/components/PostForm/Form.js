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
        <input type='text' onChange={(e) => setName(e.target.value)} value={name}></input>
      </div>

      <div className='form-control'>
        {children}
        <button type='button' onClick={() => setName("")}>Reset</button>
      </div>

    </form>
  )
}
