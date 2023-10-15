import { useState } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Post } from './components/postList/Post';
import { Model } from './components/Model/Model';
import { Form } from './components/PostForm/Form';
function App() {
  const [show, setShow] = useState(false);
  const [posts, setPost] = useState([
    {
      id: 1,
      name: "PPW"
    }, {
      id: 2,
      name: "SUSU"
    }
  ])
  // add post from form update
  const addPost = (post) => {
    setPost(preState => [...preState, post]);
    setShow(false)
  }
  return (
    <div className="App">
      <Navbar setShow={setShow} />
      <Post datas={posts} />

      {show && <Model active={true}>
        <Form addPost={addPost}>
          <button type='button' onClick={() => setShow(false)}>Cancel</button>
          <button type='submit' className='signup'>Post Now</button>
        </Form>
        {/* <button onClick={() => setShow(false)}>Cancel</button> */}
      </Model>}



    </div>
  );
}

export default App;
