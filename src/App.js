import "./App.css";
import { useState } from "react";

function App() {

  const [inputText, setInputText] = useState("")

const handleInputChange = (event) => {
  console.log(event.target.value);
  setInputText(event.target.value);
};

  return (
    <div className="App">
     <input type="text" onChange={handleInputChange}/>
      {inputText}
    </div>
  );
}

export default App;
