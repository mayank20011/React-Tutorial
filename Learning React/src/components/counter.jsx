import "./counter.css";
import { useState } from "react";

function Counter() {

  let [count, setCount] = useState(0);
  function addCount()
  {
     count++;
     setCount(count);
  }

  return (
    <div className="container countContainer">
      <p>current Count is : {count}</p>
      <button onClick={addCount}>Add Count</button>
    </div>
  )
}

export default Counter