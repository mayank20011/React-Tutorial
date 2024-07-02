import { Export1, Export2, Export3, Export4 } from "./export";
import Thumbnail from "./components/thumbnail";
import "./App.css";
function App() {
  const ytchannel = "Coder Dost";
  return (
    <>
      <h1 className="h1hello">Hello</h1>
      <Export1 />
      <Export2 />
      <Export3 />
      <Export4 />
      <div className="container">
        <Thumbnail
          imgsrc="https://picsum.photos/300/150"
          title="React Js Tutorial"
          channel={ytchannel}
          views="10K"
          time="1 month ago"
        />
        <Thumbnail
          imgsrc="https://picsum.photos/299/150"
          title="Node Js Tutorial"
          channel={ytchannel}
          views="100K"
          time="10 month ago"
        />
        <Thumbnail
          imgsrc="https://picsum.photos/301/150"
          title="Node Js Tutorial"
          channel="Traversy Media"
          views="1M"
          time="1 year ago"
        />
      </div>
    </>
  );
}
export default App;
