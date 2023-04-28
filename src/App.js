import "./App.css";
import {  useState } from "react";
import Axios from "axios";

function App() {

  const [excuse, setExcuse] = useState("");

  const fetchData = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then((res) => {
  
      console.log(res.data[0].excuse);
      setExcuse(res.data[0].excuse);
    });
  };
 
  return (
    <div className="App">
      
      <div className="container">
      <button onClick={() => fetchData("family")}>Family</button>
      <button onClick={() => fetchData("office")}>Office</button>
      <button onClick={() => fetchData("children")}>Children</button>
        <h1>{excuse}</h1>
      </div>
    </div>
  );
}

export default App;
