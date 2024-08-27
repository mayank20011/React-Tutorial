import "./counter.css";
import { useState, useRef } from "react";

function Counter() {
  let [count, setCount] = useState(0);

  let render = useRef(1);

  function addCount() {
    count++;
    setCount(count);
    render.current++;
    console.log(`No of renders for counter component are: ${render.current}`);
  }

  return (
    <div className="container countContainer">
      <p>current Count is : {count}</p>
      <button onClick={addCount}>Add Count</button>
    </div>
  );
}

export default Counter;
