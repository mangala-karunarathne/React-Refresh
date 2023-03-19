import "./App.css";
import { useState } from "react";

function App() {
  const [textColor, setTextColor] = useState("green");

  return (
    <div className="App">
      <button onClick={()=>{
        setTextColor(textColor === "green" ? "red" : "green")
      }}> Green / Red </button>
      <h1 style={{color: textColor}}> Here is MK Dev</h1>
    </div>
  );
}

export default App;
