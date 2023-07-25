import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/NavBar';

function NavBar() {
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

export default NavBar;