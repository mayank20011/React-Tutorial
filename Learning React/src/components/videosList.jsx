import { useContext } from "react";
import VideosContext from "../../context/VideosContext";
import Thumbnail from "./thumbnail";
function VideosList({editVideo, dispatch})
{
  const videos=useContext(VideosContext);
  return (
    <div className={`container`}>
    {
      videos.map((video, index) => (
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
        />))
    }
    </div>
  );
}
export default VideosList;