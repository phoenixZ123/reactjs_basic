
import { useState } from 'react';
import './App.css';

function App() {
  // useState Hook
  var [name, Setname] = useState("pwintphoowai");
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'for teenager'
    },
    {
      id: 2,
      title: 'for young'
    },
    {
      id: 3,
      title: 'for old'
    }
  ]);

  const changename = () => {
    // setname is asynchronous job
    Setname(name = "Your God");
  }
  // console.log(name);

  return (
    <div className="App">

      <h2>Name Declaration</h2>

      <h5>Name : {name}</h5>
      <button onClick={changename}>Change</button>

      <h3>Posts</h3>
      <ul key={posts.id}>
        {posts.map((posts) => <li key={posts.id}>{posts.title}</li>)}
      </ul>
    </div >
  );
}

export default App;
