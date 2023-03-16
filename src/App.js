import "./App.css";

function App() {

  const age = 10;
  const isGreen = false;

  return (
    <div className="App">
    {age>= 18 ? <h1>Over Age</h1> : <h1> Under Age</h1>}
    <h1 style={{color: isGreen ? 'green' : "red"}}>Age Color</h1>

    {isGreen && <button> This is Green Button</button>}
    </div>
  );
}


export default App;
