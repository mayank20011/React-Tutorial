import { useRef, useEffect } from "react";

function EffectComponent() {
  const inputbox = useRef("");

  useEffect(() => {
    inputbox.current.style.boxShadow = "5px 5px 5px red";
  }, []);

  return <input style={{display:"block", marginBottom:"20px"}} type="text" ref={inputbox} />;
}

export default EffectComponent;
