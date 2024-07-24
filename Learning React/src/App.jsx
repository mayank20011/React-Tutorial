import "./App.css";
import Thumbnail from "./components/thumbnail";
import videosDB from "./assets/data/video";
import AddVideo from "./components/addvideo";
import { useState } from "react";

let editid;
function App() {
  let [videos,dispatch]=useReducer(videoReducer,videosDB);
  // let [videos,setVideos]=useState(videosDB);
  let [editableVideo,setEditableVideo]=useState(null);
  function addVideo(video)
  {
    videos.push({ ...video, id:videos.length+1});
    setVideos([...videos]);
  }

  function dltvideo(id)
  {
    const newVideos=videos.filter(video=>video.id!=id);
    setVideos([...newVideos]);
  } 
  function editVideo(id)
  {
    editid=id;
    setEditableVideo(videos.find(video=>video.id===id));
  }
  function updateVideo(obj)
  {
    obj.id=editid;
    const index=videos.findIndex(video=>video.id==obj.id);
    let newVideos=[...videos];
    newVideos.splice(index,1,{...obj});
    setVideos([...newVideos]);
    setEditableVideo(null);
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
            editVideo={editVideo}
          />
        ))}
      </div>
      <AddVideo addVideo={addVideo} editableVideo={editableVideo} updateVideo={updateVideo}/>
    </>
  );
}

export default App;
