import "./App.css";

function App() {
  const nama = "fadhiilah";
  return (
    <>
      <p className="name">nama saya adalah : {nama}</p>
      <div className="counter">
        <button className="countButton">click here</button>
        <p className="result"></p>
      </div>
    </>
  );
}

export default App;
