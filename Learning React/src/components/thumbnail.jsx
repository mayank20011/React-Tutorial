import "./thumbnail.css";
function Thumbnail({title="ABC", channelName="Traversy Media", verified=false, views="10K", time="3 months ago"})
{
   return (
    <div className="card bg-dark text-light">

      <div className="card-header mb-0 pb-0">
      <img src="https://random.imagecdn.app/300/150" className="card-top-img w-100"/>
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