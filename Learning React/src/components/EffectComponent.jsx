import { useRef } from "react"


function EffectComponent() {

  const inputbox=useRef("");
  inputbox.current.style.boxShadow="2px 2px 2px solid black"; 

  return (
    <input type="text" ref={inputbox}/>
  )
}

export default EffectComponent;