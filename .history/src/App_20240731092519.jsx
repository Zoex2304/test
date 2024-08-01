import Counter from "./counter"; 
import "./App.css";
import { useState } from "react";

function App() {
  const [value, setInputValue] = useState("")
  const inputHnadler = (event) => setInputValue(event.target.value)
  return (
    <>
      <p className="name">My first React project</p>
      <p>Input Number down here</p>
      <input className="inputNumber" type="text" inputMode="number" value={userInput}/>
      <Counter />
    </>
  );
}

export default App;
