import "./App.css";

function App() {
  const name = "Mangala";
  const developer = <h1>Mangala Karunarathne</h1>;
  const position = <h2>Associate Software Engineeer</h2>;
  const email = <h3>mangalaicc@gmail.com</h3>;

  const user = (
    <div>
      {developer} {position} {email}
    </div>
  );

  return (
    <div className="App">
      <h1>{name} Bro with React</h1>
      <h1>Coding with {name} </h1>
      <h1>React with {name} Bro </h1>
      {user}
      {user}
      {user}
      {user}
    </div>
  );
}

export default App;
