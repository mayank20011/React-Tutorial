import "./App.css";
import Thumbnail from "./components/thumbnail";
import videosDB from "./assets/data/video";
import AddVideo from "./components/addvideo";
import { useState, useReducer, useContext } from "react";
import ThemeContext from "../context/ThemeContext";


let editid;
function App() {
  console.log('App Rendered');
  let themecontext=useContext(ThemeContext);
  const [mode, setMode]=useState(themecontext);
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
  
  function editVideo(id) {
    editid = id;
    setEditableVideo(videos.find((video) => video.id === id));
  }

  return (
    <ThemeContext.Provider value={mode}>
    <div className={`${mode}`}>
      <div className={`container`}>
        {videos.map((video, index) => (
          <Thumbnail
            key={index + 1}
            title={video.title}
            channelName={video.channelname}
            verified={video.verified}
            views={video.views}
            time={video.time}
            dispatch={dispatch}
            id={video.id}
            editVideo={editVideo}
          />
        ))}
      </div>
      <AddVideo
        dispatch={dispatch}
        editableVideo={editableVideo}
      />
      <button className={`${mode}`} onClick={()=>{ setMode( mode == "dark" ? "light":"dark") }}>Change Theme to {mode === "dark" ? "light" : "dark"} Mode</button>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
