import React, { useState } from 'react'
import './form.css'
export const Form = ({ children, addPost }) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("naypyitaw");

  const CreatePost = (e) => {
    e.preventDefault();
    console.log(status);
    let post = {
      id: Math.floor(Math.random(1 * 999)),
      name: name,
      status: status
    }
    addPost(post);
    resetForm();
  }

  const resetForm = () => {
    setName("")
  }
  return (
    <form className='post-form' onSubmit={CreatePost}>
      <h3>Post Form </h3>
      {name}
      <div className='form-control'>
        <label>Username</label>
        <input type='text' onChange={(e) => setName(e.target.value)} value={name}></input>
      </div>
      <div className='form-control'>
        <div className="form-group">
          <label for="">Status</label>
          <select className="form-control" name="" id="" value={status}
            onChange={(e) => setStatus(e.target.value)}>
            <option value="naypyitaw">Naypyitaw</option>
            <option value="yangon">Yangon</option>
            <option value="mandalay">Mandalay</option>
          </select>
        </div>
      </div>
      <div className='form-control'>
        {children}
        <button type='button' onClick={resetForm}>Reset</button>
      </div>

    </form>
  )
}
