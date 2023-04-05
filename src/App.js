import "./App.css";
import { useEffect, useState } from "react";
import Axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      console.log(res.data.age);
      setAge(res.data.age);
    });
  };

  return (
    <div className="App">
      <input
        placeholder="Ex. Mangala.."
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button onClick={fetchData}>Predict Age</button>
      <h1>Predicted Age: {age} </h1>
      
    </div>
  );
}

export default App;
