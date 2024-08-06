import "./App.css";
import videosDB from "./assets/data/video";
import AddVideo from "./components/addvideo";
import { useState, useReducer, useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import VideosContext from "../context/VideosContext";
import VideosList from "./components/videosList";
import VideoDispatchContext from "../context/VideoDispatchContext";

let editid;
function App() {
  console.log("App Rendered");
  let themecontext = useContext(ThemeContext);
  const [mode, setMode] = useState(themecontext);
  let [editableVideo, setEditableVideo] = useState(null);
  function videoReducer(videos, action) {
    switch (action.type) {
      case "ADD":
        return [...videos, { ...action.payload, id: videos.length + 1 }];
      case "DELETE":
        return videos.filter((video) => video.id != action.payload);
      case "UPDATE":
        action.payload.id = editid;
        const index = videos.findIndex(
          (video) => video.id == action.payload.id
        );
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
      <VideosContext.Provider value={videos}>
        <VideoDispatchContext.Provider value={dispatch}>

        <div className={`${mode}`}>
          <VideosList editVideo={editVideo}/>
          <AddVideo editableVideo={editableVideo}/>
          <button
            className={`${mode}`}
            onClick={() => {
              setMode(mode == "dark" ? "light" : "dark");
            }}
          >
            Change Theme to {mode === "dark" ? "light" : "dark"} Mode
          </button>
        </div>


        </VideoDispatchContext.Provider>
      </VideosContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
