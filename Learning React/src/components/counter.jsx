import "./counter.css";
import { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);

  let render = 1;

  function addCount() {
    count++;
    setCount(count);
    render++;
    console.log(`No of renders for counter component are: ${render}`);
  }

  return (
    <div className="container countContainer">
      <p>current Count is : {count}</p>
      <button onClick={addCount}>Add Count</button>
    </div>
  );
}

export default Counter;
