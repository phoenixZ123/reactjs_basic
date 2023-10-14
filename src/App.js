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
    }, {
      id: 3,
      name: "THETTHET"
    }, {
      id: 4,
      name: "EIEI"
    }
  ])

  return (
    <div className="App">
      <Navbar setShow={setShow} />
      <Post datas={posts} />

      {show && <Model active={true}>
        <Form>
          <button type='button' onClick={() => setShow(false)}>Cancel</button>
          <button type='button' className='signup'>Post Now</button>
        </Form>
        {/* <button onClick={() => setShow(false)}>Cancel</button> */}
      </Model>}



    </div>
  );
}

export default App;
