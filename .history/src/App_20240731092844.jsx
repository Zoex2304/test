import Counter from "./counter";
import "./App.css";
import { useState } from "react";

function App() {
  const [value, setInputValue] = useState("");
  const inputChanged = (event) => setInputValue(event.target.value);
  const handlerInput = () => {
    const num = parseInt()
  }

  return (
    <>
      <p className="name">My first React project</p>
      <p>Input Number down here</p>
      <input
        className="inputNumber"
        type="text"
        inputMode="number"
        value={userInput}
        onChange={inputChanged}
      />
      <button className="submit">process</button>
      <Counter />
    </>
  );
}

export default App;
