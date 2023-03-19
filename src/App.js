import "./App.css";
import { useState } from "react";

function App() {
  const [showText, setShowText] = useState(true);

  const showTextHandler = () => {
    if (showText === true) {
      setShowText(false);
    } else {
      setShowText(true);
    }
  };

  return (
    <div className="App">
      <button onClick={showTextHandler}> Show / Hide</button>
      {showText === true && <h1> Here is MK Dev</h1>}
    </div>
  );
}

export default App;
