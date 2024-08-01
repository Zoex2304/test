import Counter from "./counter"; 
import "./App.css";

function App() {
  return (
    <>
      <p className="name">My first React project</p>
      <p>Input Number down here</p>
      <input type="text" inputMode="num" />
      <Counter />
    </>
  );
}

export default App;
