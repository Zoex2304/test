import { useState } from "react";
import "./App.css";
impprt {useState}

function App() {
  const nama = "fadhiilah";
  return (
    <>
      <p className="name">nama saya adalah : {nama}</p>
      <div className="counter">
        <button className="countButton">click here</button>
        <p className="result">1</p>
      </div>
    </>
  );
}

export default App;
