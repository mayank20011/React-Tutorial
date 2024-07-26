import "./thumbnail.css";
import ThemeContext from "../../context/ThemeContext";
import { useContext } from "react";
function Thumbnail({
  title = "ABC",
  channelName = "Traversy Media",
  verified = false,
  views = "10K",
  time = "3 months ago",
  id,
  dispatch,
  editVideo,
}) {

  const theme=useContext(ThemeContext);
  function dltThisVideo(e) {
    dispatch({type:"DELETE", payload:e.target.parentElement.id});
  }
  return (
    <div className={`card ${theme === "dark"?"bg-dark text-light":"bg-light text-dark"} `} id={id}>
      <button
        className="bg-danger text-white"
        style={{ position: "absolute", right: "3px", top: "3px" }}
        onClick={dltThisVideo}
      >
        X
      </button>

      <button
        className="bg-warning text-white"
        style={{ position: "absolute", left: "3px", top: "3px" }}
        onClick={()=>{ editVideo(id)}}
      >
        <i className="fa-regular fa-pen-to-square"></i>
      </button>

      <div className="card-header mb-0 pb-0">
        <img
          src={`https://picsum.photos/id/${id}/300/150`}
          className="card-top-img w-100"
        />
      </div>

      <div className="card-body mt-0 pt-0">
        <div className="card-heading mb-3">{title}</div>
        <div className="d-flex small">
          {channelName} {verified && "✅"}
        </div>
        <div className="d-flex small">
          {views} views . {time}
        </div>
      </div>
    </div>
  );
}
export default Thumbnail;
