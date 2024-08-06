// import { useContext } from "react";
// import VideosContext from "../../context/VideosContext";
import Thumbnail from "./thumbnail";
import useVideos from "../../customhooks/Videos";
function VideosList({editVideo})
{
  // const videos=useContext(VideosContext);
  const videos=useVideos();
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
          id={video.id}
          editVideo={editVideo}
        />))
    }
    </div>
  );
}
export default VideosList;