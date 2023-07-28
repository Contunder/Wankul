import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import {getCurrentUser, logout} from "../Service/auth.service";

function WankulNavbar() {

    return (
        <Navbar expand="lg" className="bg-black">
            <Container fluid>
                <Navbar.Brand href="/">
                    <Image
                        src={"/Wankul_Logo_Blanc.webp"}
                        height='75'
                        alt=''
                        loading='lazy'
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link active aria-current='page' href="/" className="text-white fs-2">Deck</Nav.Link>
                        {!getCurrentUser() && (
                            <Nav.Link href="/?login=true" className="text-white fs-2" >Connexion</Nav.Link>
                        )}
                        {getCurrentUser() && (
                            <>
                                <Nav.Link href="/Collection" className="text-white fs-2">Ma Collection</Nav.Link>
                                <Nav.Link href="/" className="text-white fs-2" onClick={logout}>Déconnexion</Nav.Link>
                            </>
                        )}
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className=""
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default WankulNavbar;