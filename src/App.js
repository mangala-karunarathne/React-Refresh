import "./App.css";
import { useState } from "react";
import Axios from "axios";
import { Button, Card, Nav } from "react-bootstrap";

function App() {
  const [excuse, setExcuse] = useState("");

  const fetchData = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then(
      (res) => {
        console.log(res.data[0].excuse);
        setExcuse(res.data[0].excuse);
      }
    );
  };

  return (
    <div className="App">
      <div className="container text-center">
        <div style={{ position: 'relative', height: '100vh', width: '100%'  }} className="text-center">
          <Card style={{ position: 'absolute', top: '20%',  width: '100%'  }}>
            <Card.Header>
              <Nav variant="tabs" defaultActiveKey="#first">
                <Nav.Item>
                  <Nav.Link href="#family" onClick={() => fetchData("family")}>
                    Family
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#office" onClick={() => fetchData("office")}>
                    Office
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    href="#children"
                    onClick={() => fetchData("children")}
                  >
                    Children
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Card.Body>
              {/* <Card.Title>Special title treatment</Card.Title> */}
              <Card.Text>
                <h1>{excuse}</h1>
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
