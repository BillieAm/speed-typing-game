import { useState, useEffect, useRef } from "react";

function useTypingGame(timeAmount = 10) {
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(timeAmount);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordsCount, setWordsCount] = useState(0);
  const textBoxRef = useRef(null);

  function handleTextInput(e) {
    const { value } = e.target;
    setText(value);
  }

  function wordsCounter(str) {
    // return str.split(' ').length //! this solution has some bugs of counting empty spaces
    const wordsArr = str.trim().split(" ");
    return wordsArr.filter((word) => word !== "").length;
  }

  function startGame() {
    setIsTimeRunning(true);
    setTimeRemaining(timeAmount);
    setText("");
    textBoxRef.current.disabled = false;
    textBoxRef.current.focus();
  }

  function endGame() {
    setIsTimeRunning(false);
    setWordsCount(wordsCounter(text));
  }

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((prevTime) => timeRemaining - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, isTimeRunning]);

  return {
    text,
    timeRemaining,
    isTimeRunning,
    wordsCount,
    textBoxRef,
    handleTextInput,
    startGame,
    endGame,
  };
}

export default useTypingGame;
