import { useState } from "react";
import AddNum from "./addnum";
import "./App.css";

function App() {
  const nama = "fadhiilah";
  
  return (
    <>
      <p className="name">nama saya adalah : {nama}</p>
      <div className="box-buttons">
        <button className="countButton" onClick={counter}>Add</button>
        <button className="min" onClick={counterDown}>Min</button>
      </div>
      <p className="result">{currValue}</p>
      <AddNum/>
    </>
  );
}

export default App;
