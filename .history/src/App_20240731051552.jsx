import { useState } from "react";
import "./App.css";

function App() {
  const nama = "fadhiilah";
  const [currValue,setValue] = useState(0)
  return (
    <>
      <p className="name">nama saya adalah : {nama}</p>
      <div className="counter">
        <button className="countButton" onClick={}>click here</button>
        <p className="result">{currValue}</p>
      </div>
    </>
  );
}

export default App;
