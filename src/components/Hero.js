import { Container, Row, Col, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import rightContent from "../images/rightContent.svg";
export const Hero = (props) => {
  const { handleAlert } = props;
  return (
    <Container fluid className="hero p-4 bg-warning" id="hero">
      <Container>
        <Row>
          <Col md={6} className="d-flex align-items-center">
            <div>
              <h1>Welcome to our website</h1>
              <p>
                Velit cupidatat et dolor ea laboris. Excepteur non nulla ex
                mollit. Do commodo ex aute non culpa ullamco. Sunt consequat ea
                esse mollit sit.
              </p>
              <Button variant="dark" onClick={() => handleAlert()}>
                Click me
              </Button>
            </div>
          </Col>
          <Col md={6} className="text-center">
            <img
              src={rightContent}
              alt="rightcontent"
              width="300"
              height="300"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

Hero.propTypes = {
  handleAlert: PropTypes.func.isRequired,
};
