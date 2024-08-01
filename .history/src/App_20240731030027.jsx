import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function AddNum({ num1, num2 }) {
  useEffect(() => {
    console.log(num1 + num2);
  }, [num1, num2]); // Tambahkan dependensi untuk memicu efek saat `num1` atau `num2` berubah

  return null; // Tidak mengembalikan elemen apapun
}

const numbers = [1, 2]; // Perbaiki nama array menjadi `numbers`

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <SayHello name="zikri" />
      <AddNum num1={numbers[0]} num2={numbers[1]} /> {/* Kirim props dengan benar */}
    </>
  );
}

function SayHello({ name }) { // Gunakan destrukturisasi untuk mengambil prop `name`
  return <p>hello {name}</p>;
}

export default App;
