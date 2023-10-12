
import { useState } from 'react';
import './App.css';

export default function App() {
  // useState Hook
  // if u change name declare let
  let [name, Setname] = useState("pwintphoowai");
  const [count, setCount] = useState(0);
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

  // delete
  const deletethepost = (id) => {
    // filter is to output show document
    setPosts(preState => preState.filter(post => post.id !== id));
    console.log(id)
  }
  return (
    <div className="App">

      <h2>Name Declaration</h2>

      <h5>Name : {name}</h5>
      <button onClick={changename}>Change</button>

      <h3>Posts</h3>
      <ul key={posts.id}>
        {posts.map((posts) => <li key={posts.id}>{posts.title}
          {/* in the delete function need to function reference pass type like>> =()=>
          int the function have to pass parameter should do like this */}
          <button style={{ marginLeft: 10 }} onClick={() => deletethepost(posts.id)}>Delete</button></li>)}
      </ul>
      <h2>number :{count}</h2>
      {/* if you add next integer need to write  function in setState */}
      {/* convert function */}
      <button onClick={() => {
        setCount((pre) => pre + 1);
        setCount((pre) => pre + 1);
      }}>Increment</button>

      <button style={{ marginLeft: 50 }} onClick={() => setCount((pre) => pre = 0)}>Refresh</button>
    </div >
  );
}


