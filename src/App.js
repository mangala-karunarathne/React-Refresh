import "./App.css";

function App() {

  return (
    <div className="App">
    <User name='Mangala' age={28} email="mangala@gmail.com"/>
    <User name='Sawwa' age={27} email="Sawwa@gmail.com"/>
    <User name='abc' age={28} email="abc@gmail.com"/>
    <Job salary={1000} position="SE" company="Block Stars"/>
    <Job salary={1500} position="SSE" company="Sysco"/>
    <Job salary={2500} position="TL" company="WSO2"/>
    </div>
  );
}

const User = (props) => {
  return (
    <div >
      <h1>{props.name}</h1>
      <h1>{props.age} </h1>
      <h1>{props.email}</h1>
    </div>
  )
}

const Job = (props) => {
  return (
    <div >
      <h1>{props.salary}</h1>
      <h1>{props.position} </h1>
      <h1>{props.company}</h1>
    </div>
  )
};

export default App;
