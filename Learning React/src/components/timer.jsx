import "./timer.css";
import Button2 from "./Button2";
import { useState } from "react";
``;
let intervalId;

function Timer() {

  let [hour, setHour] = useState(0);
  let [minute, setMinute] = useState(0);
  let [second, setSecond] = useState(0);
  let [btn, setBtn] = useState("⏯️");

  function reset() {
  
    if (intervalId) {
      clearInterval(intervalId);
    }
    btn="⏯️";
    setBtn(btn);
    setHour(0);
    setMinute(0);
    setSecond(0);
  }

  function changeButton() {
    if (btn == "⏯️") {
      btn = "⏸️";
      setBtn(btn);
      intervalId = setInterval(() => {
        if (second < 59) {
          second++;
          setSecond(second);
        } else {
          if (minute < 59) {
            minute++;
            setMinute(minute);
          } else {
            hour++;
            setHour(hour);
            minute = 0;
            setMinute(minute);
          }
          second = 0;
          setSecond(second);
        }
      }, 1000);
    } else {
      btn = "⏯️";
      setBtn(btn);
      clearInterval(intervalId);
    }
  }

  return (
    <div className="container">
      <h3 className="heading">Stopwatch</h3>
      <h1 className="time">
        {hour}:{minute}.{second}
      </h1>

      <div className="btn">
        <Button2 onClick={changeButton}>{btn}</Button2>
        <Button2 onClick={reset}>{"⏹️"}</Button2>
      </div>
    </div>
  );

}
export default Timer;
