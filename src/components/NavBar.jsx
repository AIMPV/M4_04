import { Container, Row, Col, Button, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlug } from '@fortawesome/free-solid-svg-icons'

const NavBar = ({ search, onChange }) => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" data-bs-theme="light" fixed="top" className='shadow-sm'>
          <Container>
            <Navbar.Brand href="#home">
              <img src='./src/assets/logo.png'></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className='justify-content-end' id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link className='p-0' href="https://sampleapis.com/api-list/simpsons" target='_blank'>
                  <Button className="btn btn-primary">
                    <FontAwesomeIcon className='me-2' icon={faPlug} />
                    API Source
                  </Button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </>
  );
};

export default NavBar;
