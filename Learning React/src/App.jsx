import { Export1, Export2, Export3, Export4 } from "./export";
import Thumbnail from "./components/thumbnail";
import "./App.css";
function App() {
  const ytchannel = "Coder Dost";

  let obj={
    imgsrc:"https://picsum.photos/300/150",
    title:"React Js Tutorial",
    channel:ytchannel,
    views:"10K",
    time:"1 month ago",
    verified:false
  };

  return (
    <>
      <h1 className="h1hello">Hello</h1>
      <Export1 />
      <Export2 />
      <Export3 />
      <Export4 />

      <div className="container">
        <Thumbnail {...obj}/>
        <Thumbnail
          imgsrc="https://picsum.photos/299/150"
          title="Node Js Tutorial"
          channel={ytchannel}
          views="100K"
          time="10 month ago"
          verified={true}
        />
        <Thumbnail
          imgsrc="https://picsum.photos/301/150"
          title="Node Js Tutorial"
          views="1M"
          time="1 year ago"
          verified={true}
        />
      </div>
    </>
  );
}
export default App;
