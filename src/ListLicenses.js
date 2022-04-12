import {useState, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
import axios from "axios";

const ListLicenses = () => {
    const [keys, setKeys] = useState([]);

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:8080/cryptlex/'
        }).then(response => {
            console.log(response.data);
            setKeys(response.data);
        }).catch(error => {
            console.log(error);
        });
    }, []);

    const listLicenses = keys.map((key) => {
        return (
            <Row key={key.key}>
                <Col>
                    <p>{key.key}</p>
                </Col>
            </Row>
        );
    });


    return (
        <Container>
            <Row>
                <Col>
                    <h1>List of Licenses</h1>
                </Col>
            </Row>
            <Container>
                { listLicenses }
            </Container>
        </Container>
    );
};

export default ListLicenses;
