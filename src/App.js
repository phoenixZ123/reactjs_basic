
import './App.css';
import img from './assets/haha.avif';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <i class="">Hi There</i>
        {/* Firstly public folder way */}
        <h2>Absolute path</h2>
        <img src='http://localhost:3000/haha.avif ' alt="" ></img>
        <h2>Relative path</h2>
        <img src='/haha.avif' alt="" ></img>
        {/* second way with importing image assets folder*/}
        <h2>Import image</h2>
        <img src={img} alt="" ></img>
      </header>
    </div >
  );
}

export default App;
