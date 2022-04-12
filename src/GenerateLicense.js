import axios from "axios";
import {useState} from "react";
import {Container, Row, Col, Button} from "react-bootstrap";

const GenerateLicense = () => {

    const [key, setKey] = useState('');

    const generateLicense = () => {
        axios({
            method: 'post',
            url: 'http://localhost:8080/cryptlex/create-license'
        }).then(response => {
            setKey(response.data.key);
        }).catch(error => {
            console.log(error);
        });
    };

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Create a License Key</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button onClick={generateLicense}>Generate License</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>{ key }</p>
                </Col>
            </Row>
        </Container>
    );
};

export default GenerateLicense;
