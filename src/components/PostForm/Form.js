import React, { useRef, useState } from 'react'
import './form.css'
export const Form = ({ children, addPost }) => {
  // const [name, setName] = useState("");

  const data = useRef();
  const CreatePost = (e) => {
    e.preventDefault();
    console.log(data.current.value);
    // let post = {
    //   id: Math.floor(Math.random(1 * 999)),
    //   name: name
    // }
    // addPost(post);
    // resetForm();

  }

  const resetForm = () => {
    // setName("")
    console.log("success");
  }
  return (
    <form className='post-form' onSubmit={CreatePost}>
      <h3>Post Form</h3>

      <div className='form-control'>
        <label>Username</label>
        <input type='text' ref={data}></input>
      </div>

      <div className='form-control'>
        {children}
        <button type='button' onClick={resetForm}>Reset</button>
      </div>

    </form>
  )
}
