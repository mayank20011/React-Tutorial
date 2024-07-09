import "./assignment.css"
import img from "../../../img/3btn.png";
function Assignment() {
  function handleClick(e) {
    e.stopPropagation();
    if (e.detail == 1) {
      console.log("Single Click");
    } else {
      console.log("Double Click");
    }
  }
  function imagehover(e) {
    e.stopPropagation();
    console.log(e.target.style)
    e.target.style.height = "110%";
    e.target.style.width="110%";
  }
  function imageOut(e) {
    e.stopPropagation();
    e.target.style.height = "100%";
    e.target.style.width="100%";
  }
  return (
    <div className="asignment">
      <img
        src={img}
        onMouseOver={imagehover}
        onMouseLeave={imageOut}
      />
      <button onClick={handleClick}>Click</button>
      <input
        type="text"
        onFocus={(e) => {
          e.stopPropagation();
          console.log("Focused on input box");
        }}
        onBlur={(e) => {
          e.stopPropagation();
          console.log("Input box is blured");
        }}
      />
    </div>
  );
}
export default Assignment;
