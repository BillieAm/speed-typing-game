import useTypingGame from "./useTypingGame";

function App() {
  const {
    text,
    timeRemaining,
    isTimeRunning,
    wordsCount,
    textBoxRef,
    handleTextInput,
    startGame,
  } = useTypingGame(5);

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
