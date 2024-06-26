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
  const className="demo";
  let name="Mayank Behl";
  return (
  <>
  <div className={className}>
    <p>This is child component for app, Called Demo</p>
    <p>My name is {name} </p>
  </div>
  </>);
}

export default App
