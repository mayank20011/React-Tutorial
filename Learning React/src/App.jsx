import "./App.css";
import Thumbnail from "./components/thumbnail";
import videosDB from "./assets/data/video";
import AddVideo from "./components/addvideo";
import { useState } from "react";

function App() {
  let [videos,setVideos]=useState(videosDB);

  function addVideo(video)
  {
    videos.push({ ...video, id:videos.length+1});
    setVideos([...videos]);
  }

  function dltvideo(id)
  {
    const newVideos=videos.filter(video=>video.id!=id);
    console.log(newVideos);
    setVideos([...newVideos]);
  } 

  return (
    <>
      <div className="container">
        {videos.map((video, index) => (
          <Thumbnail
            key={index+1}
            title={video.title}
            channelName={video.channelname}
            verified={video.verified}
            views={video.views}
            time={video.time}
            dltvideo={dltvideo}
            id={video.id}
          />
        ))}
      </div>
      <AddVideo addVideo={addVideo}/>
    </>
  );
}

export default App;
