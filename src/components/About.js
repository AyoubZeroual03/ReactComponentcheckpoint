import { Container, Col, Row } from "react-bootstrap";
export const About = () => {
  return (
    <Container className="about mt-5" id="about">
      <Row>
        <h1 className="text-center">About us</h1>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col md={6}>
          <p className="text-center">
            Sit duis ut dolor sit excepteur laborum est labore eu magna pariatur
            amet quis. Lorem ad exercitation aliquip aliquip nulla sit irure sit
            amet cupidatat cupidatat eu. Aliqua pariatur ex deserunt veniam
            adipisicing velit. Culpa aute nostrud irure ut incididunt do id
            anim. Labore qui proident exercitation incididunt ex. Dolore Lorem
            cillum adipisicing dolor eu eiusmod proident sunt dolore laboris.
            Adipisicing pariatur incididunt est excepteur.
          </p>
        </Col>
      </Row>
    </Container>
  );
};
