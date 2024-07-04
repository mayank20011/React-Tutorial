import "./App.css";
import Button from "./components/button";
import Heading from "./components/heading";

function App() {
  return (
    <>
      <Heading value="Click on the buttons to send a alert" />
      <Button name="Pause" func={()=>{ console.log('I am a function From Pause Button') }}>Pause</Button>
      <Button name="Play" func={()=>{ alert('I am a FUnction from Play Button') }}>Play</Button>
    </>
  );
}

export default App;
