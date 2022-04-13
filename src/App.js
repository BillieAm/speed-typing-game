import { useState, useEffect, useRef } from "react";

function App() {
  const STARTING_TIME = 5;

  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
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
    setTimeRemaining(STARTING_TIME);
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

  return (
    <div className="App">
      <h1>How fast do you type?</h1>
      <textarea
        ref={textBoxRef}
        onChange={handleTextInput}
        value={text}
        disabled={!isTimeRunning}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={startGame} disabled={isTimeRunning}>
        Start
      </button>
      <h2>Word count: {wordsCount} </h2>
    </div>
  );
}

export default App;
