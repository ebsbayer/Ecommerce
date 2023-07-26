import { Nav, Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';


function CompNavBar() {
  return (
    <>
      <Navbar
        bg="primary"
        data-bs-theme="dark"
        expand="lg"
        className="bg-body-tertiary"
      >
        <Container>
          <Navbar.Brand href="#home">Bayer's comic's</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/Produto">Produto</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export {CompNavBar};