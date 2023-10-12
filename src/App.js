
import { useState } from 'react';
import './App.css';
import { Nav } from './components/Nav';
import { Post } from './PostList/Post';
export default function App() {

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

  return (
    <>
      <Nav />
      <Post datas={posts} nextText="Yes,this is next string accept" />
    </>
  );
}


