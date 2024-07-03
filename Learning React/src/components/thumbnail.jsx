import "./thumbnail.css";
const viewstimediv = "vtd";
const viewstimep = "vtp";

function Thumbnail({
  imgsrc,
  title,
  channel = "Traversy Media",
  views,
  time,
  verified = false,
}) {
  return (
    <div className="video">
      <img src={imgsrc} alt="" />
      <h4 className="title">{title}</h4>
      <p className="channel">
        {channel} {verified && "✅"}
      </p>
      <div className={viewstimediv}>
        <p className={viewstimep}>{views} views . </p>
        <p className={viewstimep}>{time}</p>
      </div>
    </div>
  );
}
export default Thumbnail;
