
import { useState } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Post } from './components/postList/Post';
import { Model } from './components/Model/Model';

function App() {
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
      <Navbar />
      <Post datas={posts} />
      <Model >
        <p>This Product is available now</p>
        <a href=''>join here</a>
      </Model>
    </div>
  );
}

export default App;
