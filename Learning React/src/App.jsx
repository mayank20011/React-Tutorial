import { Export1, Export2, Export3, Export4 } from "./export";
import Thumbnail from "./components/thumbnail";
import "./App.css";
import video from "./Video data/video";
function App() {
  return (
    <>
      <h1 className="h1hello">Hello</h1>
      <Export1 />
      <Export2 />
      <Export3 />
      <Export4 />

      <div className="container">
        {video.map((prop, index) => {
          return (
            <Thumbnail
              key={index}
              imgsrc={prop.imgsrc}
              title={prop.title}
              channel={prop.channel}
              views={prop.views}
              time={prop.time}
              verified={prop.verified}
            />
          );
        })}
      </div>
    </>
  );
}
export default App;
