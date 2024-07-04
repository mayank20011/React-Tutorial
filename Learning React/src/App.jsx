import "./App.css";
import Button from "./components/button";
import Heading from "./components/heading";

function App() {
  return (
    <>
      <Heading value="Click on the buttons to send a alert" />
      <Button
        name="Pause"
        func={() => {
          console.log("I am a function From Pause Button");
        }}
        btn='P'
      >
        Pause
      </Button>
      <Button
        name="Play"
        func={() => {
          alert("I am a FUnction from Play Button");
        }}
        btn='P'
      >
        Play
      </Button>
      <Button
        name="pause/play"
        onPlay={() => {
          console.log("Play Function is running");
        }}
        onPause={() => {
          console.log("Pause Function is running");
        }}
        btn='p/p'
      >
        Pause/Play
      </Button>
    </>
  );
}

export default App;
