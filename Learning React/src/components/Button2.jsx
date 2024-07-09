function Button2({children,onClick}){
  function handleClick()
  {
      onClick();
  }
  return <button style={{padding:"0px", "height":"50px", width:"50px"}} onClick={handleClick}>{children}</button>
}
export default Button2;