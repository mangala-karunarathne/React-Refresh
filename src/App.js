import "./App.css";
import User from './User';
import Planet from './Planets';

function App() {

  const planets = [
    {name: "Mars", isGasPlanet: false},
    {name: "Earth", isGasPlanet: false},
    {name: "Jupiter", isGasPlanet: false},
    {name: "Venus", isGasPlanet: false},
    {name: "Neptune", isGasPlanet: true},
    {name: "Uranus", isGasPlanet: true}
    ];

  return (
    <div className="App">
      {planets.map((planet, key) => {
        if(planet.isGasPlanet) return <Planet name={planet.name}/>;
      })}
    </div>
  );
}


export default App;
