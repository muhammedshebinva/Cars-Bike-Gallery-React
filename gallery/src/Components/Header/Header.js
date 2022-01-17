import React from 'react'
import { Button, Navbar,Container,Nav,NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">GT</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/"> <Link className="nav-link" to='/'>Home</Link>  </Nav.Link>
      <Nav.Link href="/cars"><Link className="nav-link" to='/cars'>Cars</Link> </Nav.Link>
      <Nav.Link href="/bikes"><Link className="nav-link" to='/bikes'>Bikes</Link> </Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    )
}

export default Header
