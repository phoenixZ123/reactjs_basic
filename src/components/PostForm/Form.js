import React, { useState } from 'react'
import './form.css'
export const Form = ({ children, addPost }) => {
  const [name, setName] = useState("");

  const CreatePost = (e) => {
    e.preventDefault();

    let post = {
      id: Math.floor(Math.random(1 * 999)),
      name: name
    }
    addPost(post);
    resetForm();
  }

  const resetForm = () => {
    setName("")
  }
  return (
    <form className='post-form' onSubmit={CreatePost}>
      <h3>Post Form</h3>
      {name}
      <div className='form-control'>
        <label>Username</label>
        <input type='text' onChange={(e) => setName(e.target.value)} value={name}></input>
      </div>

      <div className='form-control'>
        {children}
        <button type='button' onClick={resetForm}>Reset</button>
      </div>

    </form>
  )
}
