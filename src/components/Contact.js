import { Container, Row, Button } from "react-bootstrap";

export const Contact = () => {
  return (
    <Container className="contact mt-5" id="contact">
      <Row>
        <h1 className="text-center">Contact us</h1>
      </Row>
      <Row>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="form-control"
            placeholder="enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control"></textarea>
        </div>
        <div className="mt-3">
          <Button variant="dark">Send</Button>
        </div>
      </Row>
    </Container>
  );
};
