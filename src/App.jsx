import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Task from "./components/Task.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Task/>
    </>
  )
}

export default App
