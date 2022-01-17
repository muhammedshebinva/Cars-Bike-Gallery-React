import React from 'react'
import { Button, Navbar,Container,Nav,NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">GT</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/cars">Cars</Nav.Link>
      <Nav.Link href="/bikes">Bikes</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    )
}

export default Header
