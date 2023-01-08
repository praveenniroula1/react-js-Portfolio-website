import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../img/logoo.png";

const NavBar = () => {
  return (
    <div className="navBar bg-dark container p-1">
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">
              {" "}
              <a className="navbar-brand" href="#">
                <img src={logo} width="150px" height="150px" alt="" />
              </a>
            </Navbar.Brand>
            <Navbar.Toggle
              className="toggle bg-light text-dark fs-3 p-3 fw-bold"
              aria-controls={`offcanvasNavbar-expand-${expand}`}
            >
              Menu <i class="fa-solid fa-bars"></i>
            </Navbar.Toggle>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="bg-dark text-light fs-3"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <a className="navbar-brand " href="#">
                    <img src={logo} width="300px" height="250px" alt="" />
                  </a>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1"></Nav.Link>
                  <Nav.Link href="#action1">
                    <i class="fa-solid fa-house-user"></i> Home
                  </Nav.Link>
                  <Nav.Link href="#action2">
                    <i class="fa-brands fa-studiovinari"></i> Skills
                  </Nav.Link>
                  <Nav.Link href="#action2">
                    <i class="fa-solid fa-diagram-project"></i> Projects
                  </Nav.Link>
                  <Nav.Link href="#action2">
                    <i class="fa-solid fa-address-card"></i> About Me
                  </Nav.Link>
                  <Nav.Link href="#action2">
                    <i class="fa-solid fa-address-book"></i> Contact Me
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
};

export default NavBar;
