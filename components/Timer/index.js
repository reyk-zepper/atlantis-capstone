import { useEffect, useState } from "react";

export default function Timer() {
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);

  const startTimer = () => {
    setIsRunning(true);
  };
  const stopTimer = () => {
    setIsRunning(false);
  };

  useEffect(() => {
    let intervalID;
    if (isRunning) {
      intervalID = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
      return () => clearInterval(intervalID);
    }
  }, [isRunning, seconds]);

  return (
    <>
      <p>{formatTime(seconds)}</p>
      <button onClick={isRunning ? stopTimer : startTimer} type="button">
        {isRunning ? "STOP" : "START"}
      </button>
    </>
  );
}

function formatTime(timeInSeconds) {
  const hours = Math.floor(timeInSeconds / 3600)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((timeInSeconds % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(timeInSeconds % 60)
    .toString()
    .padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
}
