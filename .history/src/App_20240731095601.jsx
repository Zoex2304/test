import Counter from "./counter";
import "./App.css";
import { useState } from "react";

function App() {
  const [inputUser, setInputValue] = useState("");
  const inputChanged = (event) => setInputValue(event.target.value);
  const handlerInput = () => {
    const num = parseInt(inputUser,10)
    !isNaN(num) ? setInputValue(Array.from({length : num},(_,i) => i + 1)) : console.log("invalid input ");
  }

  return (
    <>
      <p className="name">My first React project</p>
      <p>Input Number down here</p>
      <input
        className="inputNumber"
        type="text"
        inputMode="number"
        value={inputUser}
        onChange={inputChanged}
      />
      <button className="submit" onClick={handlerInput}>process</button>
      <Counter number={/>
    </>
  );
}

export default App;
