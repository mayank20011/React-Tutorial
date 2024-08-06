import { useContext } from "react";
import VideoDispatchContext from "../context/VideoDispatchContext";


function useDispatch()
{
  const dispatch=useContext(VideoDispatchContext);
  return dispatch;
}

export default useDispatch;