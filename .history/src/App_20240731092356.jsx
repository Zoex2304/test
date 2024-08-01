import Counter from "./counter"; 
import "./App.css";

function App() {
  const inputHnadler = (event) => event.target.va
  return (
    <>
      <p className="name">My first React project</p>
      <p>Input Number down here</p>
      <input className="inputNumber" type="text" inputMode="number" value={userInput}/>
      <Counter />
    </>
  );
}

export default App;
