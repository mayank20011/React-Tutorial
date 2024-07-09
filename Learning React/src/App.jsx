import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Button from "./components/button";
import Timer from "./components/timer";

function App() {
  let [count, setCount] = useState(0);
  return (
    <>
      <h1>useState Hook, Counter</h1>
      <Counter count={count} />
      <Button count={count} changeCount={setCount}>
        Increment ++
      </Button>
      <Button count={count} changeCount={setCount}>
        Decreament --
      </Button>
    </>
  );
}

export default App;
