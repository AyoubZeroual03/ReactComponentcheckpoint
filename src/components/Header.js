import { Container, Navbar, Nav } from "react-bootstrap";
export const Header = () => {
  return (
    <header className="header">
      <Navbar className="bg-black" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src="/fakelogo.png" width="150" height="50" alt="logo" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#team">Team</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};
