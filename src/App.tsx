import { useState } from "react";
import "./App.css";
import CountryInformation from "./components/CountryInformation";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div></div>
      <h1>Country App</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Blank page for Country App v1.0.2</p>
        <CountryInformation />
      </div>
    </>
  );
}

export default App;
