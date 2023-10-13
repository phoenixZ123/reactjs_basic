
import { useState } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Post } from './components/postList/Post';
import { Model } from './components/Model/Model';

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

      {show && <Model >
        <p> This Product is available now</p>
        <a href='' >join here</a>
        <button onClick={() => setShow(false)}>Close</button>
      </Model>}



    </div>
  );
}

export default App;
