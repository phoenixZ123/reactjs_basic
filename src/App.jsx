import { useState } from 'react'
import './App.css'
import { useTheme } from './Contexts/useTheme'

function App() {

  let{theme,changeBackground}=useTheme();
  return (
    <div className={`${theme=='light' ? 'bg-green-500': 'bg-slate-400'}`}>
     
      <button onClick={changeBackground}  className="p-1 rounded-full m-auto bg-indigo-500 text-black">Dark Mode</button>
    </div>
  )
}

export default App
