import React from "react";
import Counter from "./Counter"; // Ganti dengan path yang benar jika perlu
import "./App.css";

function App() {
  const nama = "fadhiilah";
  
  return (
    <>
      <p className="name">nama saya adalah : {nama}</p>
      <Counter />
    </>
  );
}

export default App;
