import {Container, Row, Col, Button} from "react-bootstrap";


const GenerateLicense = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Create a License Key</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button>Generate License</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default GenerateLicense;
