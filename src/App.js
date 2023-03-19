import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count+1)
  };
  const decreaseCount = () => {
    setCount(count-1)
  };
  const zeroSet = () => {
    setCount(0)
  };

  return (
    <div className="App">
        <button onClick={increaseCount}>Increase</button>
        <button onClick={decreaseCount}>Decrese</button>
        <button onClick={zeroSet}>Set to Zero</button>
        <div>
          {count}
        </div>
    </div>
  );
}

export default App;
