import { useState } from "react";
import AddNum from "./assets/addnum";
import "./App.css";

function App() {
  const nama = "fadhiilah";
  const [currValue,setValue] = useState(0)
  const counter = () => setValue(currValue => {
    currValue === 0 ? retucurrValue + 2 : currValue - 2
    return currValue 
  })
  return (
    <>
      <p className="name">nama saya adalah : {nama}</p>
      <div className="counter">
        <button className="countButton" onClick={counter}>click here</button>
        <p className="result">{currValue}</p>
        <AddNum/>
      </div>
    </>
  );
}

export default App;
