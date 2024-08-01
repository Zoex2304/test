import { useState } from "react";
import AddNum from "./assets/addnum";
import "./App.css";

function App() {
  const nama = "fadhiilah";
  const [currValue,setValue] = useState(0)

  const counter = () => setValue(currValue => {
    const number = [1,2,3,4,5,6,7]
    const result = number.reduce(acc,item => acc + (item % 2 === 0 ? 2 ))
    return result
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
