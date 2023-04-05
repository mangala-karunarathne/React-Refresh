import "./App.css";
import { useState } from "react";
import Text from "./Text";
import Axios from "axios";

function App() {
  const [catFact, setCatFact] = useState("");

  Axios.get("https://catfact.ninja/fact").then((res) => {
    console.log(res.data);
    setCatFact(res.data.fact);
  });

  return (
    <div className="App">
      <button>Generate Cat Fact</button>
      <p>{catFact}</p>
    </div>
  );
}

export default App;
