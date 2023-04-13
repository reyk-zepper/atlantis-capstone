import { useEffect, useState } from "react";
import useStore from "@/hooks/useStore";
import formatTime from "@/helper/formatTime";
import StyledButton from "../StyledButton";

export default function Timer({ project }) {
  const updateTimer = useStore((state) => state.updateTimer);
  const [isRunning, setIsRunning] = useState(false);

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
        updateTimer(project);
      }, 1000);
      return () => clearInterval(intervalID);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRunning, project.workingTime]);

  return (
    <>
      <p>{formatTime(project.workingTime)}</p>
      <StyledButton
        variant="start"
        onClick={isRunning ? stopTimer : startTimer}
        type="button"
      >
        {isRunning ? "STOP" : "START"}
      </StyledButton>
    </>
  );
}
