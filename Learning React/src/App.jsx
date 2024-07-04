import "./App.css";
import Button from "./components/button";
import Heading from "./components/heading";

function App() {
  return (
    <>
      <Heading value="Click on the buttons to send a alert" />
      <Button name="Pause">Pause</Button>
      <Button name="Play">Play</Button>
    </>
  );
}

export default App;
