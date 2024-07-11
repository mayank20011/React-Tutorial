// function AddVideo({ addVideo ,  editableVideo, updateVideo}) {

//   function handleForm(e) {
//     e.preventDefault();
//     let tf = false;
//     if (e.target[2].value == "Y" || e.target[2].value == "y" || e.target[2].value.trim().toLowerCase()=="true") {
//       tf = true;
//     }
//     const obj = {
//       title: e.target[0].value,
//       channelname: e.target[1].value,
//       verified: tf,
//       views: e.target[3].value,
//       time: e.target[4].value
//     };
    
//     e.target[0].value="";
//     e.target[1].value="";
//     e.target[2].value="";
//     e.target[3].value="";
//     e.target[4].value="";
//     if(editableVideo)
//     {
//       updateVideo(obj);
//     }
//     else
//     {
//       addVideo(obj);
//     }
//   }

//   return (
//     <form
//       className="m-3 border border-3 border-primary rounded-1 p-2 "
//       onSubmit={handleForm}
//     >
//       <div className="mb-3">
//         <label htmlFor="exampleInputEmail1" className="form-label">
//           Title :
//         </label>
//         <input
//           type="text"
//           className="form-control"
//           id="exampleInputEmail1"
//           aria-describedby="emailHelp"
//           placeholder="Enter Title ..."
//           value={editableVideo?.title}
//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="exampleInputPassword1" className="form-label">
//           Channel Name :
//         </label>
//         <input
//           type="text"
//           className="form-control"
//           id="exampleInputPassword1"
//           placeholder="Enter Channel Name ..."
//           value={editableVideo?.channelname}
//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="verified" className="form-label">
//           Verified :
//         </label>
//         <input
//           type="text"
//           className="form-control"
//           id="verified"
//           placeholder="Y/N"
//           value={editableVideo?.verified}
//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="views" className="form-label">
//           Views :
//         </label>
//         <input
//           type="text"
//           className="form-control"
//           id="views"
//           placeholder="No of views you got ..."
//           value={editableVideo?.views}
//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="time" className="form-label">
//           Time :
//         </label>
//         <input
//           type="text"
//           className="form-control"
//           id="time"
//           placeholder="Time when you uploaded it ..."
//           value={editableVideo?.time}
//         />
//       </div>

//       <button type="submit" className="btn btn-primary">
//         {editableVideo? "Edit":"Submit"}
//       </button>
//     </form>
//   );
// }
// export default AddVideo;




import { useState, useEffect } from "react";

function AddVideo({ addVideo, editableVideo, updateVideo }) {
  const [formState, setFormState] = useState({
    title: "",
    channelname: "",
    verified: "",
    views: "",
    time: "",
  });

  useEffect(() => {
    if (editableVideo) {
      setFormState({
        title: editableVideo.title,
        channelname: editableVideo.channelname,
        verified: editableVideo.verified ? "Y" : "N",
        views: editableVideo.views,
        time: editableVideo.time,
      });
    }
  }, [editableVideo]);

  function handleForm(e) {
    e.preventDefault();
    const tf = formState.verified === "Y" || formState.verified.toLowerCase().trim() === "true";

    const obj = {
      title: formState.title,
      channelname: formState.channelname,
      verified: tf,
      views: formState.views,
      time: formState.time,
    };

    if (editableVideo) {
      updateVideo(obj);
    } else {
      addVideo(obj);
    }

    setFormState({
      title: "",
      channelname: "",
      verified: "",
      views: "",
      time: "",
    });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <form className="m-3 border border-3 border-primary rounded-1 p-2" onSubmit={handleForm}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title :
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          placeholder="Enter Title ..."
          value={formState.title}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="channelname" className="form-label">
          Channel Name :
        </label>
        <input
          type="text"
          className="form-control"
          id="channelname"
          name="channelname"
          placeholder="Enter Channel Name ..."
          value={formState.channelname}
          onChange={handleChange}
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
          name="verified"
          placeholder="Y/N"
          value={formState.verified}
          onChange={handleChange}
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
          name="views"
          placeholder="No of views you got ..."
          value={formState.views}
          onChange={handleChange}
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
          name="time"
          placeholder="Time when you uploaded it ..."
          value={formState.time}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        {editableVideo ? "Edit" : "Submit"}
      </button>
    </form>
  );
}

export default AddVideo;