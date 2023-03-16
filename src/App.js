import "./App.css";

function App() {

  const names = [ "Mangala", "Sawwa", "Dana", "Lak", "Hareen", "Chukki"];

  return (
    <div className="App">
      {
        names.map((name, key)=>{
            return <h1 key={key}>{name}</h1>;
        })
      }
    </div>
  )
}


export default App;
