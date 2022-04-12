import { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState("");
  const [time, setTime] = useState(5);

  function handleTextInput(e) {
    const { value } = e.target;
    setText(value);
  }

  function wordsCounter(str) {
    // return str.split(' ').length //! this solution has some bugs of counting empty spaces
    const wordsArr = str.trim().split(" ");
    return wordsArr.filter((word) => word !== "").length;
  }

  useEffect(() => {
    if (time > 0) {
      setTimeout(() => {
        setTime((prevTime) => time - 1);
      }, 1000);
    }
  }, [time]);

  return (
    <div className="App">
      <h1>How fast do you type?</h1>
      <textarea onChange={handleTextInput} value={text} />
      <h4>Time remaining: {time}</h4>
      <button onClick={() => console.log(wordsCounter(text))}>Start</button>
      <h2>Word count: ???</h2>
    </div>
  );
}

export default App;
