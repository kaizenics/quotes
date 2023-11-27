import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavbarSec() {
    return (
        <>
            <Navbar className="navbar navbar-expand-lg bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">Animus Randomizer</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Quotes</Nav.Link>
                        <Nav.Link href="#features">Images</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}