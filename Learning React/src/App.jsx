import "./App.css";
import Thumbnail from "./components/thumbnail";
import videosDB from "./assets/data/video";
import AddVideo from "./components/addvideo";
import { useState } from "react";

function App() {
  let [videos,setVideos]=useState(videosDB);
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
