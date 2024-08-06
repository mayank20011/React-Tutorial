import {useState, useEffect} from "react";
// import { useContext } from "react";
// import VideoDispatchContext from "../../context/VideoDispatchContext";
import useDispatch from "../../customhooks/VideoDispatch";
function AddVideo({editableVideo}) {
  const dispatch=useDispatch();
  // const dispatch=useContext(VideoDispatchContext);
   let defaultValue=
   {
     title:"",
     channelname:"",
     verified:"",
     views:"",
     time:""
   }

  let [value, setValue]=useState(defaultValue);

 useEffect(()=>{
  if(editableVideo)
    {
       setValue(editableVideo);
    }
 },[editableVideo]);
  

  function handleForm(e) {
    e.preventDefault();
    let tf = false;
    if (e.target[2].value == "Y" || e.target[2].value == "y" || e.target[2].value.trim().toLowerCase()=="true") {
      tf = true;
    }
    const obj = {
      title: e.target[0].value,
      channelname: e.target[1].value,
      verified: tf,
      views: e.target[3].value,
      time: e.target[4].value
    };
    
    e.target[0].value="";
    e.target[1].value="";
    e.target[2].value="";
    e.target[3].value="";
    e.target[4].value="";
    if(editableVideo)
    {
      dispatch({type:"UPDATE", payload:obj});
    }
    else
    {
      dispatch({type:"ADD", payload:obj});
    }
    setValue(defaultValue);
  }

  return (
    <form
      className="m-3 border border-3 border-primary rounded-1 p-2 "
      onSubmit={handleForm}
    >
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Title :
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter Title ..."
          value={value.title}
          onChange={(e)=>{
            setValue({...value, title:e.target.value})
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Channel Name :
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Enter Channel Name ..."
          value={value.channelname}
          onChange={(e)=>
            {
              setValue({...value, channelname:e.target.value});
            }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="verified" className="form-label">
          Verified :
        </label>
        <input
          type="text"
          className="form-control"
          id="verified"
          placeholder="Y/N"
          value={value.verified}
          onChange={(e)=>{
            setValue({...value, verified:e.target.value});
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="views" className="form-label">
          Views :
        </label>
        <input
          type="text"
          className="form-control"
          id="views"
          placeholder="No of views you got ..."
          value={value.views}
          onChange={(e)=>{
            setValue({...value, views:e.target.value});
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="time" className="form-label">
          Time :
        </label>
        <input
          type="text"
          className="form-control"
          id="time"
          placeholder="Time when you uploaded it ..."
          value={value.time}
          onChange={(e)=>{
            setValue({...value, time:e.target.value});
          }}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        {editableVideo? "Edit":"Submit"}
      </button>
    </form>
  );
}
export default AddVideo;