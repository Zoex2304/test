import Counter from "./counter"; 
import "./App.css";

function App() {
  return (
    <>
      <p className="name">My first React project</p>
      <p>Input Number down here</p>
      <input className="inputNumber" type="text" inputMode="number" va/>
      <Counter />
    </>
  );
}

export default App;
