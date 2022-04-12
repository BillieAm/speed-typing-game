import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  function handleTextInput(e) {
    const { value } = e.target;
    setText(value);
  }

  return (
    <div className="App">
      <h1>How fast do you type?</h1>
      <textarea onChange={handleTextInput} value={text} />
      <h4>Time remaining: ???</h4>
      <button>Start</button>
      <h2>Word count: ???</h2>
    </div>
  );
}

export default App;
