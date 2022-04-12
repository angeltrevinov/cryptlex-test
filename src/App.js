import './App.css';
import {Container, Row, Col} from "react-bootstrap";
import GenerateLicense from "./GenerateLicense";
import ListLicenses from "./ListLicenses";

function App() {

    return (
    <div className="App">
      <Container>
          <Row>
              <Col>
                  <GenerateLicense />
              </Col>
              <Col>
                  <ListLicenses />
              </Col>
          </Row>
      </Container>
    </div>
  );
}

export default App;
