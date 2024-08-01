import { useState } from "react";
import Counter from "./counter";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState(""); // State untuk menyimpan nilai input
  const [numberArray, setNumberArray] = useState([]); // State untuk menyimpan array angka

  // Fungsi untuk menangani perubahan input
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Fungsi untuk mengubah input menjadi array
  const handleSubmit = () => {
    const number = parseInt(inputValue, 10);
    if (!isNaN(number) && number > 0) {
      setNumberArray(Array.from({ length: number }, (_, i) => i + 1));
    }
  };

  return (
    <>
      <p className="name">My first React project</p>
      <p>Input Number down here</p>
      <input
        className="inputNumber"
        type="number"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Submit</button>
      <Counter number={numberArray} />
    </>
  );
}

export default App;
