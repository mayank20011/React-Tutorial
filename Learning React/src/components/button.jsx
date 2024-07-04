function empty()
{

}
function Button({ children ,func=empty, onPlay=empty, onPause=empty, btn}) {

  let state="pause";

  function handleClick(e) {
    
    e.stopPropagation();
    if(btn=='P')
      {
        func();
      }
      else
      {
        if(state=="pause")
          {
            onPause();
            state="play";
          }
          else
          {
            onPlay();
            state="pause";
          }
      }
  }

  return <button onClick={handleClick}>{children}</button>;
}
export default Button;
