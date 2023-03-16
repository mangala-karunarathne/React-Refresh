import styles from "./App.module.css";

function App() {

  return (
    <div className={styles.App}>
    
    <h1 className={styles.name}>Mangala</h1>
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
