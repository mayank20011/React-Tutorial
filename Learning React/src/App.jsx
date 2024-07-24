import "./App.css";
import Thumbnail from "./components/thumbnail";
import videosDB from "./assets/data/video";
import AddVideo from "./components/addvideo";
import { useState, useReducer } from "react";

let editid;
function App() {
  let [editableVideo, setEditableVideo] = useState(null);
  function videoReducer(videos, action) {
    switch (action.type) {
      case "ADD":
        return [...videos, { ...action.payload, id: videos.length + 1 }];
      case "DELETE":
        return videos.filter((video) => video.id != action.payload);
      case "UPDATE":
        action.payload.id = editid;
        const index = videos.findIndex((video) => video.id == action.payload.id);
        console.log(index);
        let newVideos = [...videos];
        newVideos.splice(index, 1, { ...action.payload });
        setEditableVideo(null);
        return [...newVideos];
      default:
        return videos;
    }
  }
  let [videos, dispatch] = useReducer(videoReducer, videosDB);
  
  function addVideo(video) {
    dispatch({ type: "ADD", payload: video });
  }

  function dltvideo(id) {
    dispatch({ type: "DELETE", payload: id });
  }
  function editVideo(id) {
    editid = id;
    setEditableVideo(videos.find((video) => video.id === id));
  }
  function updateVideo(obj) {
    dispatch({type:"UPDATE", payload:obj});
  }
  return (
    <>
      <div className="container">
        {videos.map((video, index) => (
          <Thumbnail
            key={index + 1}
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
      <AddVideo
        addVideo={addVideo}
        editableVideo={editableVideo}
        updateVideo={updateVideo}
      />
    </>
  );
}

export default App;
