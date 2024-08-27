import "./counter.css";
import { useState, useRef } from "react";

function Counter() {
  let [count, setCount] = useState(0);

  let render = useRef(1);

  // changing DOM.
  const divRef=useRef("");
  function changeshadow()
  {
      let r=Math.floor(Math.random()*256);
      let g=Math.floor(Math.random()*256);
      let b=Math.floor(Math.random()*256);
      let color=`rgb(${r}, ${g}, ${b})`;
      divRef.current.style.boxShadow=`10px 10px 5px ${color}`;
  }
   
  function addCount() {
    count++;
    setCount(count);
    render.current++;
    console.log(`No of renders for counter component are: ${render.current}`);
    changeshadow();
  }
  return (
    <div className="container countContainer" ref={divRef}>
      <p>current Count is : {count}</p>
      <button onClick={addCount}>Add Count</button>
    </div>
  );
}
export default Counter;
