import { useState } from "react";
import AddNum from "./assets/addnum";
import "./App.css";

function App() {
  const nama = "fadhiilah";
  const [currValue,setValue] = useState(0)

  const number = [1,2,3,4,5]
  const result = number.reduce((acc,item) => {
    return
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
