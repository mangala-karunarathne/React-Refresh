import "./App.css";
import { useEffect, useState } from "react";
import Axios from "axios";

function App() {
  const [name, setName] = useState("");
  // const [age, setAge] = useState(0);
  const [result, setResult] = useState("");

  const fetchData = () => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${name}/`).then((res) => {
  
      console.log(res.data[0].excuse);
      // setAge(res.data.age);
      setResult(res.data[0].excuse);
    });
  };
  const handleFamilyClick = () => {
    setName('family');
  };

  const handleFamillyButtonClick = () => {
    handleFamilyClick();
    fetchData();
  };
  const handleOfficeButtonClick = () => {
    handleFamilyClick();
    fetchData();
  };
  const handleChildrenButtonClick = () => {
    handleFamilyClick();
    fetchData();
  };
  return (
    <div className="App">
      
      <button onClick={handleFamillyButtonClick}>Family</button>
      <button onClick={fetchData}>Office</button>
      <button onClick={fetchData}>Children</button>
      <div className="container">
        <h1>{result}</h1>
      </div>
    </div>
  );
}

export default App;
