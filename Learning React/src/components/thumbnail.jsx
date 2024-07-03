import "./thumbnail.css";
const viewstimediv="vtd";
const viewstimep="vtp";

function Thumbnail({imgsrc,title,channel="Traversy Media",views,time, verified=false})
{
    let channelhtml;
    if(verified)
    {
       channelhtml=<p className="channel">{channel} ✅</p>;
    }
    else
    {
        channelhtml=channelhtml=<p className="channel">{channel}</p>;;
    }


    return (
    <div className="video">
    <img src={imgsrc} alt="" />
     <h4 className="title">{title}</h4>
     {channelhtml}
     <div className={viewstimediv}>
      <p className={viewstimep}>{views} views . </p>
      <p className={viewstimep}>{time}</p>
     </div>
    </div>);
}
export default Thumbnail;