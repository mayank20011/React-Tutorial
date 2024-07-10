import "./App.css";
import Thumbnail from "./components/thumbnail";
import videos from "./assets/data/video";
import AddVideo from "./components/addvideo";

function App() {
  return (
    <>
      <div className="container">
        {videos.map((video, index) => (
          <Thumbnail
            key={index+1}
            title={video.title}
            channelName={video.channelname}
            verified={videos.verified}
            views={video.views}
            time={video.time}
          />
        ))}
      </div>
      <AddVideo />
    </>
  );
}

export default App;
