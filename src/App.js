import "./App.css";

function App() {

  const users = [ 
    {name: "Sawwa", age: "18"},
    {name: "Lak", age: "19"},
    {name: "Chukki", age: "20"}
  ];

  return (
    <div className="App">
      {
        users.map((user, key)=>{
            return <h1 key={key}>{user.name} {user.age}</h1>;
        })
      }
    </div>
  )
}


export default App;
