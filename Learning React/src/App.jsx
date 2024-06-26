import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="hello">
        Hello World
        <Demo></Demo>
      </div>
      
    </>
  )
}

function Demo()
{
  return (
  <>
  <div className="demo">
    <p>This is child component for app, Called Demo</p>
  </div>
  </>);
}

export default App
