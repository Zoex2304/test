import { useState } from "react";
import AddNum from "./assets/addnum";
import "./App.css";

function App() {
  const nama = "fadhiilah";
  const [currValue,setValue] = useState(0)

  const number = [1,2,3,4,5]

  const counter = () => {
    const result = number.reduce((acc,item) => {
      return acc + (item % 2 == 0 ? 2 : 3)
    },currValue)
  
    setValue(result)
  }

  return (
    <>
      <p className="name">nama saya adalah : {nama}</p>
      <div className="counter ">
        <button className="countButton" onClick={counter}>Add</button>
        <button className="countButton" onClick={counter}>Min</button>
      </div>
      <p className="result">{currValue}</p>
      <AddNum/>
    </>
  );
}

export default App;
