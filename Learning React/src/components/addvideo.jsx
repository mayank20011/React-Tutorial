function AddVideo({ addVideo }) {
  function handleForm(e) {
    e.preventDefault();
    let tf = false;
    if (e.target[2].value == "Y" || e.target[2].value == "y") {
      tf = true;
    }
    const obj = {
      title: e.target[0].value,
      channelname: e.target[1].value,
      verified: tf,
      views: e.target[3].value,
      time: e.target[4].value,
    };
    addVideo(obj);
    e.target[0].value="";
    e.target[1].value="";
    e.target[2].value="";
    e.target[3].value="";
    e.target[4].value="";
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
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
export default AddVideo;
