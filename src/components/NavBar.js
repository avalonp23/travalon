  import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (
        <Navbar bg="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Home</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#cities">Explore Cities</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;