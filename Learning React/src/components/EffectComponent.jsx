import { useRef, useEffect, useState } from "react";
function EffectComponent() {
  const inputbox = useRef("");
  const [deletee, setDeletee] = useState(false);
  useEffect(() => {
    if (!deletee) {
      inputbox.current.style.boxShadow = "5px 5px 5px red";
    }
  }, []);
  function remove() {
    setDeletee(true);
  }
  return (
    !deletee && (
      <div
        style={{ display: "block", marginBottom: "20px", width: "fit-content", border:"2px solid #ccc", padding:"5px"}}>
        <h3
          style={{
            marin: "0",
            padding: "0",
            right: "0px",
            position: "absoluute",
            textAlign: "right",
            cursor: "pointer",
          }}
          onClick={remove}>
          X
        </h3>
        <input type="text" ref={inputbox} />
      </div>
    )
  );
}
export default EffectComponent;
