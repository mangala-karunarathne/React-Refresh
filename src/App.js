import "./App.css";
import User from './User';

function App() {
  const users = [
    { name: "Sawwa", age: "18" },
    { name: "Lak", age: "19" },
    { name: "Chukki", age: "20" },
  ];

  return (
    <div className="App">
      {users.map((user, key) => {
        return <User name={user.name} age={user.age}/>;
      })}
    </div>
  );
}


export default App;
